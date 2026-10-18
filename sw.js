/* ============================================================
   Shaheen Academy service worker — v3
   Bump CACHE (e.g. 'shaheen-v4') whenever index.html, styles.css,
   app.js, or any data/icon/manifest file changes, so users get
   the fresh version. Old caches are deleted on activate.
   ============================================================ */
var CACHE = 'shaheen-v5';

var PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './logo.png',
  './icons/logo-192.png',
  './data/school.js',
  './data/school10.js',
  './data/school-other.js',
  './data/testprep.js',
  './data/skills.js',
  './data/blog.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/favicon.svg'
];

/* Install: precache the app shell. Skip waiting so the new
   version takes over immediately after install. */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* Activate: delete any caches from older versions, then claim clients. */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k !== CACHE;
      }).map(function (k) {
        return caches.delete(k);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* Fetch:
   - Same-origin navigations: offline fallback to cached index.html.
   - Same-origin assets: cache-first, then network (and store the fresh copy).
   - Google Fonts (cross-origin): cache-first so offline still renders type. */
self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);

  if (url.origin === self.location.origin) {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        caches.match('./index.html').then(function (cached) {
          return cached || fetch(event.request);
        })
      );
      return;
    }
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        return fetch(event.request).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
          return res;
        }).catch(function () {
          return caches.match('./index.html');
        });
      })
    );
    return;
  }

  if (url.hostname.indexOf('fonts.g') === 0) {
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        return fetch(event.request).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
          return res;
        });
      })
    );
  }
});
