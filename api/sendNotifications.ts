import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';
import type { Firestore } from 'firebase-admin/firestore';
import type { DocumentReference } from 'firebase-admin/firestore';
import {
  buildReminderMessage,
  getMissedYesterday,
  getMissingToday,
  intervalElapsed,
  isWithinNotificationWindow,
  type NotificationSettings,
  type UserAppState,
} from './lib/reminders';

function initAdmin() {
  if (admin.apps.length) return;

  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (!svc) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT is not set');
  }
  if (!projectId) {
    throw new Error('FIREBASE_PROJECT_ID is not set');
  }

  let serviceAccount: Record<string, unknown>;

  try {
    serviceAccount = JSON.parse(svc) as Record<string, unknown>;
  } catch (error) {
    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT', error);
    throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT JSON');
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    projectId,
  });
  console.info('Firebase admin initialized', { projectId });
}

function isAuthorized(req: VercelRequest): boolean {
  const secret = process.env.SCHEDULE_SECRET || process.env.CRON_SECRET;
  if (!secret) return false;

  const cronHeader = req.headers['x-cron-secret'];
  const authHeader = req.headers.authorization;

  return (
    cronHeader === secret ||
    authHeader === `Bearer ${secret}`
  );
}

const userStateCache = new Map<string, UserAppState | null>();

async function loadUserState(
  db: Firestore,
  userId: string,
): Promise<UserAppState | null> {
  if (userStateCache.has(userId)) {
    return userStateCache.get(userId) ?? null;
  }

  const snap = await db.collection('users').doc(userId).get();
  const raw = snap.exists ? snap.data()?.state : null;

  if (!raw || typeof raw !== 'object') {
    userStateCache.set(userId, null);
    return null;
  }

  const state: UserAppState = {
    habits: Array.isArray(raw.habits) ? raw.habits : [],
    completions: Array.isArray(raw.completions) ? raw.completions : [],
    notificationSettings: raw.notificationSettings ?? {
      enabled: false,
      intervalHours: 2,
      startHour: 9,
      endHour: 21,
    },
  };

  userStateCache.set(userId, state);
  return state;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  try {
    initAdmin();

    const db = admin.firestore();
    const messaging = admin.messaging();
    const now = new Date();
    const devicesSnap = await db.collection('devices').get();
    console.info('sendNotifications start', {
      devices: devicesSnap.size,
      timestamp: now.toISOString(),
    });

    const messages: admin.messaging.Message[] = [];
    const pendingUpdates: Array<{
      ref: DocumentReference;
      sentAt: Date;
    }> = [];

    for (const deviceDoc of devicesSnap.docs) {
      const device = deviceDoc.data();
      const token = device.token as string | undefined;
      const userId = device.userId as string | undefined;

      if (!token || !userId) continue;

      const userState = await loadUserState(db, userId);
      if (!userState) continue;

      const settings: NotificationSettings =
        userState.notificationSettings ??
        device.notificationSettings ??
        { enabled: false, intervalHours: 2, startHour: 9, endHour: 21 };

      if (!settings.enabled) continue;

      const timezone =
        (device.timezone as string | undefined) || 'UTC';
      const language = (device.language as string | undefined) || 'tr';

      if (!isWithinNotificationWindow(settings, timezone, now)) continue;
      if (!intervalElapsed(device.lastNotified, settings.intervalHours, now)) {
        continue;
      }

      const habits = userState.habits ?? [];
      const completions = userState.completions ?? [];

      const missing = getMissingToday(habits, completions, timezone, now);
      if (missing.length === 0) continue;

      const missedYesterday = getMissedYesterday(
        habits,
        completions,
        timezone,
        now,
      );

      const title = language === 'tr' ? 'Hatırlatma' : 'Reminder';
      const body = buildReminderMessage(language, missing, missedYesterday);

      messages.push({
        token,
        notification: { title, body },
        webpush: {
          fcmOptions: { link: '/' },
        },
      });

      pendingUpdates.push({
        ref: deviceDoc.ref,
        sentAt: now,
      });
    }

    console.info('sendNotifications prepared', {
      messages: messages.length,
      pendingUpdates: pendingUpdates.length,
    });

    if (!messages.length) {
      return res.status(200).json({ sent: 0, skipped: devicesSnap.size });
    }

    let response;
    try {
      response = await messaging.sendEach(messages);
    } catch (error) {
      console.error('messaging.sendEach failed', error);
      throw error;
    }

    let successCount = 0;
    let failureCount = 0;

    for (let i = 0; i < response.responses.length; i++) {
      const result = response.responses[i];
      const update = pendingUpdates[i];

      if (result.success) {
        successCount += 1;
        await update.ref.set(
          {
            lastNotified: admin.firestore.Timestamp.fromDate(update.sentAt),
          },
          { merge: true },
        );
        continue;
      }

      failureCount += 1;

      const code = result.error?.code;
      console.warn('FCM send failure', {
        index: i,
        code,
        message: result.error?.message,
      });
      if (
        code === 'messaging/registration-token-not-registered' ||
        code === 'messaging/invalid-registration-token'
      ) {
        await update.ref.delete().catch(() => {});
      }
    }

    return res.status(200).json({
      sent: successCount,
      failed: failureCount,
      evaluated: devicesSnap.size,
    });
  } catch (e) {
    console.error('sendNotifications failed', e);
    return res.status(500).json({ error: 'server_error' });
  }
};
