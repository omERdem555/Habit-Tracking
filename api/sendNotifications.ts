import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';
import type { DocumentReference, Firestore } from 'firebase-admin/firestore';

type Habit = {
  id: string;
  name: string;
  active: boolean;
};

type Completion = {
  habitId: string;
  date: string;
};

type NotificationSettings = {
  enabled: boolean;
  intervalHours: number;
  startHour: number;
  endHour: number;
};

type UserAppState = {
  habits: Habit[];
  completions: Completion[];
  notificationSettings: NotificationSettings;
};

type SkipReason =
  | 'missing_token'
  | 'missing_user'
  | 'missing_user_state'
  | 'notifications_disabled'
  | 'outside_window'
  | 'interval_not_elapsed'
  | 'no_pending_messages';

function getLocalHour(timezone: string, now = new Date()): number {
  const hour = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    hour12: false,
  }).format(now);

  return parseInt(hour, 10);
}

function getLocalDateString(timezone: string, now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

function getYesterdayLocalDate(timezone: string, now = new Date()): string {
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  return getLocalDateString(timezone, yesterday);
}

function isWithinNotificationWindow(
  settings: NotificationSettings,
  timezone: string,
  now = new Date(),
): boolean {
  const hour = getLocalHour(timezone, now);
  return hour >= settings.startHour && hour <= settings.endHour;
}

type LastNotifiedValue = number | { toMillis?: () => number } | null | undefined;

function intervalElapsed(
  lastNotified: LastNotifiedValue,
  intervalHours: number,
  now = new Date(),
): boolean {
  if (!lastNotified) return true;

  const lastMs =
    typeof lastNotified === 'number'
      ? lastNotified
      : typeof lastNotified.toMillis === 'function'
        ? lastNotified.toMillis()
        : 0;

  const intervalMs = intervalHours * 60 * 60 * 1000;
  return now.getTime() - lastMs >= intervalMs;
}

function getMissingToday(
  habits: Habit[],
  completions: Completion[],
  timezone: string,
  now = new Date(),
): Habit[] {
  const today = getLocalDateString(timezone, now);
  const doneSet = new Set(
    completions
      .filter((c) => c.date.slice(0, 10) === today)
      .map((c) => c.habitId),
  );

  return habits.filter((h) => h.active && !doneSet.has(h.id));
}

function getMissedYesterday(
  habits: Habit[],
  completions: Completion[],
  timezone: string,
  now = new Date(),
): Habit[] {
  const yesterday = getYesterdayLocalDate(timezone, now);
  const doneSet = new Set(
    completions
      .filter((c) => c.date.slice(0, 10) === yesterday)
      .map((c) => c.habitId),
  );

  return habits.filter((h) => h.active && !doneSet.has(h.id));
}

function buildReminderMessages(
  language: string,
  missing: Habit[],
  missedYesterday: Habit[],
): string[] {
  const names = (arr: Habit[]) => arr.slice(0, 3).map((h) => h.name).join(', ');
  const messages: string[] = [];

  if (missedYesterday.length > 0) {
    messages.push(
      language === 'tr'
        ? `Dün nerede kaldıysan oradan devam et: ${names(missedYesterday)}`
        : `Yesterday is gone. Restart today: ${names(missedYesterday)}`,
    );
  }

  if (missing.length > 0) {
    messages.push(
      language === 'tr'
        ? `Bugün şu görevleri tamamlamak ister misin: ${names(missing)}`
        : `Do you want to complete: ${names(missing)}?`,
    );
  }

  return messages;
}

function initAdmin() {
  if (admin.apps.length) return;

  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (!svc) throw new Error('FIREBASE_SERVICE_ACCOUNT is not set');
  if (!projectId) throw new Error('FIREBASE_PROJECT_ID is not set');

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

  return cronHeader === secret || authHeader === `Bearer ${secret}`;
}

const userStateCache = new Map<string, UserAppState | null>();

async function loadUserState(db: Firestore, userId: string): Promise<UserAppState | null> {
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

function logSkip(deviceId: string, reason: SkipReason, extra?: Record<string, unknown>) {
  console.info('sendNotifications skip', { deviceId, reason, ...extra });
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

    const summary = {
      evaluated: devicesSnap.size,
      prepared: 0,
      sent: 0,
      failed: 0,
      skipped: 0,
    };

    console.info('sendNotifications start', {
      timestamp: now.toISOString(),
      evaluated: summary.evaluated,
    });

    const queuedMessages: Array<{
      message: admin.messaging.Message;
      ref: DocumentReference;
      sentAt: Date;
      deviceId: string;
      tokenPreview: string;
      skipContext?: {
        timezone: string;
        language: string;
        intervalHours: number;
      };
    }> = [];

    for (const deviceDoc of devicesSnap.docs) {
      const device = deviceDoc.data();
      const token = device.token as string | undefined;
      const userId = device.userId as string | undefined;
      const timezone = (device.timezone as string | undefined) || 'UTC';
      const language = (device.language as string | undefined) || 'tr';

      if (!token) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'missing_token');
        continue;
      }

      if (!userId) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'missing_user', { tokenPreview: token.slice(0, 12) });
        continue;
      }

      const userState = await loadUserState(db, userId);
      if (!userState) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'missing_user_state', {
          userId,
          tokenPreview: token.slice(0, 12),
        });
        continue;
      }

      const settings: NotificationSettings =
        userState.notificationSettings ??
        device.notificationSettings ??
        { enabled: false, intervalHours: 2, startHour: 9, endHour: 21 };

      if (!settings.enabled) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'notifications_disabled', {
          userId,
          tokenPreview: token.slice(0, 12),
        });
        continue;
      }

      const windowOpen = isWithinNotificationWindow(settings, timezone, now);
      if (!windowOpen) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'outside_window', {
          userId,
          timezone,
          currentHour: getLocalHour(timezone, now),
          startHour: settings.startHour,
          endHour: settings.endHour,
          tokenPreview: token.slice(0, 12),
        });
        continue;
      }

      const intervalOk = intervalElapsed(device.lastNotified, settings.intervalHours, now);
      if (!intervalOk) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'interval_not_elapsed', {
          userId,
          timezone,
          intervalHours: settings.intervalHours,
          lastNotified: device.lastNotified?.toDate?.()?.toISOString?.() ?? device.lastNotified ?? null,
          tokenPreview: token.slice(0, 12),
        });
        continue;
      }

      const habits = userState.habits ?? [];
      const completions = userState.completions ?? [];
      const missedYesterday = getMissedYesterday(habits, completions, timezone, now);
      const missing = getMissingToday(habits, completions, timezone, now);
      const bodies = buildReminderMessages(language, missing, missedYesterday);

      if (bodies.length === 0) {
        summary.skipped += 1;
        logSkip(deviceDoc.id, 'no_pending_messages', {
          userId,
          timezone,
          tokenPreview: token.slice(0, 12),
        });
        continue;
      }

      console.info('sendNotifications prepared device', {
        deviceId: deviceDoc.id,
        userId,
        timezone,
        language,
        bodies: bodies.length,
        intervalHours: settings.intervalHours,
        startHour: settings.startHour,
        endHour: settings.endHour,
        tokenPreview: token.slice(0, 12),
      });

      for (const body of bodies) {
        const title = language === 'tr' ? 'Hatırlatma' : 'Reminder';
        queuedMessages.push({
          message: {
            token,
            notification: { title, body },
            webpush: {
              fcmOptions: { link: '/' },
            },
          },
          ref: deviceDoc.ref,
          sentAt: now,
          deviceId: deviceDoc.id,
          tokenPreview: token.slice(0, 12),
          skipContext: {
            timezone,
            language,
            intervalHours: settings.intervalHours,
          },
        });
      }
    }

    summary.prepared = queuedMessages.length;

    console.info('sendNotifications prepared summary', {
      ...summary,
      queuedDevices: new Set(queuedMessages.map((entry) => entry.deviceId)).size,
    });

    if (!queuedMessages.length) {
      return res.status(200).json({
        ok: true,
        ...summary,
        queuedDevices: 0,
        message: 'No notifications prepared.',
      });
    }

    const updatedRefs = new Set<string>();

    for (let i = 0; i < queuedMessages.length; i++) {
      const update = queuedMessages[i];

      try {
        const messageId = await messaging.send(update.message);
        summary.sent += 1;
        console.info('FCM send success', {
          index: i,
          messageId,
          deviceId: update.deviceId,
          tokenPreview: update.tokenPreview,
        });

        if (!updatedRefs.has(update.ref.path)) {
          updatedRefs.add(update.ref.path);
          await update.ref.set(
            {
              lastNotified: admin.firestore.Timestamp.fromDate(update.sentAt),
            },
            { merge: true },
          );
        }
      } catch (error) {
        summary.failed += 1;
        const err = error as { code?: string; message?: string };
        console.warn('FCM send failure', {
          index: i,
          code: err.code,
          message: err.message,
          deviceId: update.deviceId,
          tokenPreview: update.tokenPreview,
          skipContext: update.skipContext,
        });

        if (
          err.code === 'messaging/registration-token-not-registered' ||
          err.code === 'messaging/invalid-registration-token'
        ) {
          await update.ref.delete().catch(() => {});
          console.info('Deleted invalid device token', {
            deviceId: update.deviceId,
            tokenPreview: update.tokenPreview,
          });
        }
      }
    }

    console.info('sendNotifications completed', summary);

    return res.status(200).json({
      ok: true,
      ...summary,
      queuedDevices: new Set(queuedMessages.map((entry) => entry.deviceId)).size,
    });
  } catch (e) {
    console.error('sendNotifications failed', e);
    return res.status(500).json({ error: 'server_error' });
  }
};
