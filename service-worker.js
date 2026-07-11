// Service Worker — Sistem Jadual Waktu KKPPS
// Install-only mode (no offline cache — data stays live from Firebase)

const CACHE_NAME = 'kkpps-jadual-v7';

// Only cache static shell assets (not Firebase data)
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './firebase-config.js',
  './firebase-service.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './Logo_KKPPS.jpeg',
  './Logo_KPT.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// Install: cache static shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // Fail silently — some assets may not be available offline
      });
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

// Fetch: network-first for Firebase, cache-first for static assets
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Always fetch Firebase requests from network (live data)
  if (url.includes('firebaseio.com') || url.includes('googleapis.com/identitytoolkit')) {
    return; // Let browser handle it normally
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache updated static assets
        if (response && response.status === 200 && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
});
