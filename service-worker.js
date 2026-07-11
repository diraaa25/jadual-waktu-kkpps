// Service Worker — Sistem Jadual Waktu KKPPS
// Strategi: Network-first untuk semua, fallback ke cache (tiada delay data lama)

const CACHE_NAME = 'kkpps-jadual-v8';

// Aset statik sahaja yang di-cache (bukan data Firebase)
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
  './Logo_KPT.png'
];

// Install: cache aset statik
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Cache addAll error (non-fatal):', err);
      });
    })
  );
  // Aktif serta-merta tanpa menunggu tab lama ditutup
  self.skipWaiting();
});

// Activate: buang cache lama serta-merta
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  // Ambil alih semua klien serta-merta (tiada delay selepas update)
  self.clients.claim();
});

// Fetch: strategi network-first untuk semua permintaan
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Biarkan Firebase Realtime Database & Auth melalui network terus
  if (
    url.includes('firebaseio.com') ||
    url.includes('googleapis.com/identitytoolkit') ||
    url.includes('securetoken.googleapis.com') ||
    url.includes('firebaseapp.com/__/auth')
  ) {
    return; // Browser handle secara langsung
  }

  // Untuk permintaan GET sahaja
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Simpan salinan baharu ke cache
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(() => {
        // Jika tiada rangkaian, guna cache sebagai fallback
        return caches.match(event.request);
      })
  );
});
