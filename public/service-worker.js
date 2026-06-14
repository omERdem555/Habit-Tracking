//Firebase Cloud Messaging için güncellenmiş SW
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCwQ6ilSsHfgJfyooDuJhcI4SCrSmwe7YY',
  authDomain: 'habit-tracker-e4d82.firebaseapp.com',
  projectId: 'habit-tracker-e4d82',
  storageBucket: 'habit-tracker-e4d82.firebasestorage.app',
  messagingSenderId: '41819438398',
  appId: '1:41819438398:web:e059660ac9f485dfb4806f',
});

const messaging = firebase.messaging();

// Background message handler. FCM handles the notification automatically if the payload contains notification details.
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Background message received:', payload);
});

const CACHE_VERSION = 'v8';
const STATIC_CACHE = `habit-tracker-static-${CACHE_VERSION}`;
const OFFLINE_CACHE = `habit-tracker-offline-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  './manifest.json',
  './icon72.png',
  './icon96.png',
  './icon192.png',
  './icon512.png',
];

const isSameOrigin = (url) => url.origin === self.location.origin;

const isNavigationRequest = (request) =>
  request.mode === 'navigate' || request.destination === 'document';

const isHashedBundle = (url) => /\/assets\/.*\.(js|css)$/i.test(url.pathname);

const isStaticAsset = (url) =>
  STATIC_ASSETS.some((asset) => url.pathname.endsWith(asset.replace('./', '')));

async function networkFirst(request, { cacheOffline = false } = {}) {
  try {
    const response = await fetch(request);

    if (cacheOffline && response.ok) {
      const cache = await caches.open(OFFLINE_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch {
    const cached =
      (await caches.match(request)) ||
      (cacheOffline ? await caches.match('./index.html') : null) ||
      (cacheOffline ? await caches.match('/') : null);

    if (cached) return cached;

    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);

  if (response.ok) {
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, response.clone());
  }

  return response;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith('habit-tracker-') &&
              key !== STATIC_CACHE &&
              key !== OFFLINE_CACHE,
          )
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (!isSameOrigin(url)) return;

  if (isNavigationRequest(event.request)) {
    event.respondWith(networkFirst(event.request, { cacheOffline: true }));
    return;
  }

  if (isHashedBundle(url)) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  event.respondWith(networkFirst(event.request));
});

self.addEventListener('notificationclick', (event) => {
  const notification = event.notification;
  const action = event.action;
  const data = notification.data;

  notification.close();

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        const client = clientList[0];
        client.focus();
        try {
          client.postMessage({ type: 'notificationAction', action, data });
        } catch (e) {
          // ignore
        }
        return;
      }
      return self.clients.openWindow('/').then((win) => {
        if (!win) return;
        try {
          win.postMessage({ type: 'notificationAction', action, data });
        } catch (e) {
          // ignore
        }
      });
    }),
  );
});

self.addEventListener('notificationclose', () => {
  // could log analytics or cleanup if needed
});
