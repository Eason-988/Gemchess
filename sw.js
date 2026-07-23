const CACHE_NAME = 'gemchess-cache-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './gemchess-icon.png'
  'https://cdn.jsdelivr.net/npm/stockfish@18.0.0/stockfish-18-single.js',
  'https://cdn.jsdelivr.net/npm/stockfish@18.0.0/stockfish-18-single.wasm'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
