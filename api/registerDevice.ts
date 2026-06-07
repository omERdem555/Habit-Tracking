import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!svc) {
    console.error('FIREBASE_SERVICE_ACCOUNT not set');
  }
  admin.initializeApp({
    credential: admin.credential.cert(svc ? JSON.parse(svc) : {} as any),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

const db = admin.firestore();

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') return res.status(405).end();

  // Verify Firebase ID token if provided
  const authHeader = req.headers.authorization || req.headers.Authorization;
  let uidFromToken: string | null = null;
  try {
    if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
      const idToken = authHeader.split(' ')[1];
      const decoded = await admin.auth().verifyIdToken(idToken);
      uidFromToken = decoded.uid;
    }
  } catch (e) {
    console.warn('Failed to verify id token', e);
  }

  const { token, userId, language, timezone, notificationSettings, platform } = req.body || {};
  if (!token || !userId) return res.status(400).json({ error: 'missing_token_or_userId' });

  // If token verification present and mismatch, reject
  if (uidFromToken && uidFromToken !== userId) {
    return res.status(403).json({ error: 'uid_mismatch' });
  }

  try {
    await db.collection('devices').doc(token).set({
      token,
      userId,
      language: language || null,
      timezone: timezone || null,
      platform: platform || 'web',
      notificationSettings: notificationSettings || null,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server_error' });
  }
};
