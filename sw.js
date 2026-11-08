/* ==========================================================================
   TÜBİTAK 3B Küresel Tarih ve Edebiyat Atlası — High-Performance Service Worker
   Geliştirici: Bayram Akpamukçu • yardımlarıyla Sami Yusuf Maral
   Akademik Danışman: Öğr. Gör. Dr. Ayşegül Elçi
   ========================================================================== */

const CACHE_NAME = 'atlas-3d-cache-v1';

// Statik temel varlıklar
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './earth-8k.jpg',
  'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png',
  'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png',
  'https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png',
  'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r160/examples/textures/planets/earth_clouds_1024.png',
  'https://unpkg.com/three@0.160.0/build/three.min.js',
  'https://cdn.jsdelivr.net/npm/globe.gl@2.41.4/dist/globe.gl.min.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Precache what is immediately available without blocking install on failure
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[ServiceWorker] Precache failed for:', url, err);
          })
        )
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // 1. Navigation / HTML requests: Network-First (ensures users always see latest commits)
  if (request.mode === 'navigate' || request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cached) => cached || caches.match('./index.html'));
        })
    );
    return;
  }

  // 2. Heavy static textures, 8K earth maps, images, and fonts: Cache-First
  const isImage = request.destination === 'image' || /\.(png|jpg|jpeg|svg|webp|gif)(\?.*)?$/i.test(url.pathname);
  const isFont = request.destination === 'font' || /\.(woff2|woff|ttf|otf)(\?.*)?$/i.test(url.pathname);
  const isScriptOrStyle = request.destination === 'script' || request.destination === 'style' || /\.(js|css)(\?.*)?$/i.test(url.pathname);
  const isCdnAsset = url.hostname.includes('jsdelivr.net') || url.hostname.includes('unpkg.com') || url.hostname.includes('gstatic.com');

  if (isImage || isFont || (isScriptOrStyle && isCdnAsset)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        }).catch((err) => {
          // If offline and not in cache, let caller handle
          return cachedResponse;
        });
      })
    );
    return;
  }

  // 3. For all other requests (like Wikipedia API search or dynamic queries): Network-First
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
