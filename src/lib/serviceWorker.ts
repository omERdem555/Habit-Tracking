export function getServiceWorkerUrl(): string {
  return `${import.meta.env.BASE_URL}service-worker.js`;
}

export async function ensureServiceWorkerReady(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) return null;

  const swUrl = getServiceWorkerUrl();
  let registration = await navigator.serviceWorker.getRegistration();

  if (!registration) {
    registration = await navigator.serviceWorker.register(swUrl);
  }

  if (!registration.active) {
    await new Promise<void>((resolve) => {
      const worker = registration!.installing || registration!.waiting;

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

  return navigator.serviceWorker.ready;
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
