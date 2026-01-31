const CACHE_NAME = 'voice-analyzer-v11';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  // Force this new service worker to become the active one, bypassing the 'waiting' state
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  // Take control of all open clients immediately
  event.waitUntil(clients.claim());

  // Clean up old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
