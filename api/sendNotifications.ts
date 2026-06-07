import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  admin.initializeApp({
    credential: admin.credential.cert(svc ? JSON.parse(svc) : {} as any),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

const db = admin.firestore();

export default async (req: VercelRequest, res: VercelResponse) => {
  // protect endpoint with a header secret
  if (req.method !== 'POST') return res.status(405).end();
  if (req.headers['x-cron-secret'] !== process.env.SCHEDULE_SECRET) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  try {
    const snaps = await db.collection('devices').get();
    const tokens: string[] = [];
    snaps.forEach(s => {
      const d = s.data();
      if (d?.token) tokens.push(d.token as string);
    });

    if (!tokens.length) return res.status(200).json({ sent: 0 });

    // Build a simple multicast payload. In production you'd filter by user settings/timezone
    const message = {
      notification: { title: 'Hatırlatma', body: 'Günlük alışkanlıklarını kontrol et' },
      tokens,
      webpush: {
        fcmOptions: { link: '/' },
      },
    } as any;

    const messaging = admin.messaging() as any;
    const resp = await messaging.sendMulticast(message);
    return res.status(200).json({ successCount: resp.successCount, failureCount: resp.failureCount });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server_error' });
  }
};
