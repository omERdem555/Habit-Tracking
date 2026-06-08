import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';

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

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') return res.status(405).end();

  initAdmin();

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
    const db = admin.firestore();

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
    console.error('registerDevice failed', e);
    return res.status(500).json({ error: 'server_error' });
  }
};
