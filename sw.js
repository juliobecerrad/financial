const STATIC_CACHE = 'control-gastos-static-v3';
const DYNAMIC_CACHE = 'control-gastos-dynamic-v3';
const CDN_CACHE = 'control-gastos-cdn-v3';

const APP_SHELL = [
  './',
  'controlgastos.html',
  'controlgastos_refactor.html',
  'controlgastos.refactor.css',
  'controlgastos.refactor.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

const CDN_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const staticCache = await caches.open(STATIC_CACHE);
    await staticCache.addAll(APP_SHELL);

    const cdnCache = await caches.open(CDN_CACHE);
    await Promise.all(CDN_ASSETS.map(async (url) => {
      try {
        await cdnCache.add(url);
      } catch (error) {
        // Si no hay red al instalar, no bloqueamos instalación.
      }
    }));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const keep = [STATIC_CACHE, DYNAMIC_CACHE, CDN_CACHE];
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((name) => {
      if (!keep.includes(name)) return caches.delete(name);
      return Promise.resolve();
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  if (req.mode === 'navigate') {
    event.respondWith(networkFirstNavigate(req));
    return;
  }

  if (CDN_ASSETS.includes(req.url)) {
    event.respondWith(staleWhileRevalidate(req, CDN_CACHE));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(req, STATIC_CACHE, DYNAMIC_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(req, DYNAMIC_CACHE));
});

async function networkFirstNavigate(request) {
  try {
    const network = await fetch(request);
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, network.clone());
    return network;
  } catch {
    return (
      (await caches.match(request)) ||
      (await caches.match('controlgastos.html')) ||
      (await caches.match('./'))
    );
  }
}

async function cacheFirst(request, staticCacheName, dynamicCacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const network = await fetch(request);
    const cacheName = shouldStoreInStatic(request) ? staticCacheName : dynamicCacheName;
    const cache = await caches.open(cacheName);
    cache.put(request, network.clone());
    return network;
  } catch {
    return caches.match('controlgastos.html');
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => null);

  return cached || networkPromise || fetch(request);
}

function shouldStoreInStatic(request) {
  const pathname = new URL(request.url).pathname;
  return (
    pathname.endsWith('.html') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.json')
  );
}
