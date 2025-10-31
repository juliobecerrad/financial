const CACHE_NAME = 'control-financiero-cache-v1';
// Lista de archivos base para que la app funcione offline.
const urlsToCache = [
  'Financial2.html',
  '/', // Redirige a la raíz (usualmente abre el index o el start_url)
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0'
  // Los íconos se cachearán automáticamente la primera vez que se usen
];

// 1. Evento de Instalación: Se guarda el "corazón" de la app en el caché.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Evento de Fetch: Se interceptan todas las peticiones.
// Estrategia: "Cache First"
// Intenta responder desde el caché. Si no está, lo busca en la red,
// lo sirve y lo guarda en el caché para la próxima vez.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si la respuesta está en el caché, la devuelve
        if (response) {
          return response;
        }

        // Si no, la busca en la red
        return fetch(event.request).then(
          (response) => {
            // Si la respuesta no es válida, la devuelve sin cachear
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la respuesta para poder guardarla y devolverla
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// 3. Evento de Activación: Limpia cachés antiguos si la versión cambia.
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});