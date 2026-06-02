// On install — cache all app files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('phamstore-v1').then(cache =>
      cache.addAll(['./phamstore.html'])
    )
  );
});

// On fetch — serve from cache first
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});