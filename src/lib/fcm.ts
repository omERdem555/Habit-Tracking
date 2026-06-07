import { getToken } from 'firebase/messaging';
import { auth, messaging } from './firebase';

export const initFCMForUser = async (userId: string, i18n: any, notificationSettings: any) => {
  if (!('serviceWorker' in navigator)) return null;

  const functionUrl = import.meta.env.VITE_FIREBASE_FUNCTION_URL?.trim();
  if (
    !functionUrl ||
    functionUrl === window.location.origin ||
    functionUrl === 'http://localhost:5173'
  ) {
    console.warn(
      'FCM backend URL not configured or invalid for local dev. Skipping device registration.',
    );
    return null;
  }

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return null;

  const registration = await navigator.serviceWorker.ready;

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: registration,
  });

  try {
    const idToken = await auth.currentUser?.getIdToken?.();

    await fetch(`${functionUrl}/registerDevice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(idToken ? { Authorization: `Bearer ${idToken}` } : {}),
      },
      body: JSON.stringify({
        token,
        userId,
        platform: 'web',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: i18n.language,
        notificationSettings,
      }),
    });
  } catch (error) {
    console.error('Failed to register device for FCM', error);
  }

  return token;
};