const CACHE_NAME = 'content-tools';
const urlsToCache = [
  '/2026-My-Tools/',
  '/2026-My-Tools/index.html',
  // Tambahkan file lain yang diperlukan (CSS, JS, gambar)
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ambil dari cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
