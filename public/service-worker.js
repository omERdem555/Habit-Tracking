const CACHE_NAME = "habit-app-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json"
];

// install → cache oluştur
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// fetch → offline fallback
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});