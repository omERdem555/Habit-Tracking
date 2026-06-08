import { getToken } from 'firebase/messaging';
import { auth, messaging } from './firebase';
import { ensureServiceWorkerReady } from './serviceWorker';
import { isNotificationGranted } from './notifications';

export const initFCMForUser = async (userId: string, i18n: any, notificationSettings: any) => {
  console.info('[FCM] init start', {
    userId,
    language: i18n?.language,
    enabled: notificationSettings?.enabled,
  });

  if (!('serviceWorker' in navigator)) return null;
  if (!isNotificationGranted()) {
    console.info('[FCM] aborted: notification permission not granted');
    return null;
  }

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

  console.info('[FCM] backend configured', { functionUrl });

  const registration = await ensureServiceWorkerReady();
  if (!registration) {
    console.info('[FCM] aborted: no service worker registration');
    return null;
  }
  if (!registration.pushManager) {
    console.error('[FCM] registration missing pushManager', {
      scope: registration.scope,
      activeScript: registration.active?.scriptURL ?? null,
    });
    throw new Error('Service worker registration is not push-enabled on this browser.');
  }

  console.info('[FCM] requesting token', {
    scope: registration.scope,
    activeScript: registration.active?.scriptURL ?? null,
  });

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: registration,
  });

  console.info('[FCM] token obtained', {
    hasToken: Boolean(token),
    tokenPreview: token ? `${token.slice(0, 12)}...` : null,
  });

  try {
    const idToken = await auth.currentUser?.getIdToken?.();
    console.info('[FCM] registering device', {
      hasAuthToken: Boolean(idToken),
    });

    const response = await fetch(`${functionUrl}/registerDevice`, {
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

    console.info('[FCM] registerDevice response', {
      status: response.status,
      ok: response.ok,
    });
  } catch (error) {
    console.error('Failed to register device for FCM', error);
  }

  return token;
};
