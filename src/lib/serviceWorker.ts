export function getServiceWorkerUrl(): string {
  return `${import.meta.env.BASE_URL}service-worker.js`;
}

export async function ensureServiceWorkerReady(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) return null;

  const swUrl = getServiceWorkerUrl();
  const registrations = await navigator.serviceWorker.getRegistrations();
  const existing =
    registrations.find((registration) =>
      registration.active?.scriptURL.includes('/service-worker.js') ||
      registration.waiting?.scriptURL.includes('/service-worker.js') ||
      registration.installing?.scriptURL.includes('/service-worker.js'),
    ) ?? null;

  const registration = existing ?? await navigator.serviceWorker.register(swUrl);

  console.info('[SW] registration ready', {
    scope: registration.scope,
    activeScript: registration.active?.scriptURL ?? null,
    waitingScript: registration.waiting?.scriptURL ?? null,
    installingScript: registration.installing?.scriptURL ?? null,
  });

  if (!registration.active) {
    await new Promise<void>((resolve) => {
      const worker = registration.installing || registration.waiting;

      if (!worker) {
        resolve();
        return;
      }

      if (worker.state === 'activated') {
        resolve();
        return;
      }

      worker.addEventListener('statechange', () => {
        if (worker.state === 'activated') resolve();
      });
    });
  }

  await navigator.serviceWorker.ready;
  return registration;
}

export function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) {
    return Promise.resolve(null);
  }

  return ensureServiceWorkerReady().catch((err) => {
    console.error('SW registration failed', err);
    return null;
  });
}
