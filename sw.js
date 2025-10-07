
/*
¿Cómo beneficia a los usuarios cargar rápido el App Shell aunque no haya conexión?
El App Shell permite que la interfaz cargue rápido incluso sin conexión, porque el HTML, CSS y estructura base se almacenan en caché.

¿Qué diferencia hay entre el shell y los productos dinámicos?

El "shell" es la estructura fija (layout, menú, header/footer) y los productos dinámicos son datos que cambian (JSON o API).
*/


const CACHE_NAME = 'tienda-campus-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

