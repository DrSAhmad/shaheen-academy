/* ============================================================
   Shaheen Academy service worker — v7
   Bump CACHE (e.g. 'shaheen-v8') whenever index.html, styles.css,
   app.js, or any data/icon/manifest file changes, so users get
   the fresh version. Old caches are deleted on activate.

   Update policy (added 2026-10-18): the new worker installs in
   the background but WAITS for the page's go-ahead — no forced
   mid-session takeover. app.js shows a "New version available,
   tap to refresh" toast when the update is ready; tapping it
   sends SKIP_WAITING here, the worker activates, claims clients,
   and the page reloads exactly once.
   ============================================================ */
var CACHE = 'shaheen-v7';

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
  './data/school-federal.js',
  './data/school-sindh.js',
  './data/school-kp.js',
  './data/school-balochistan.js',
  './data/school-cambridge-ol.js',
  './data/school-cambridge-al.js',
  './data/testprep.js',
  './data/skills.js',
  './data/blog.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/favicon.svg'
];

/* Install: precache the app shell. The new worker WAITS here
   (no skipWaiting) until the page asks it to take over — that is
   what lets the app show the "New version available" prompt
   instead of forcing a mid-session update. */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(PRECACHE);
    })
  );
});

/* Take over only when the user tapped "Refresh" in the prompt. */
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
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
