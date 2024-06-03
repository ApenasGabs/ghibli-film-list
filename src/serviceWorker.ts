// Importação dos tipos de eventos do Service Worker

const CACHE_NAME = "film-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js", 
];

// Evento de instalação
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Files cached");
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento de ativação
self.addEventListener("activate", (event: ExtendableEvent) => {
  const cacheWhitelist = [CACHE_NAME, DATA_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Evento de busca (fetch)
self.addEventListener("fetch", (event: FetchEvent) => {
  if (event.request.url.includes("/company/10342/movies")) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(async (cache) => {
        try {
          const response = await fetch(event.request);
          if (response.status === 200) {
            cache.put(event.request.url, response.clone());
          }
          return response;
        } catch {
          return (await cache.match(event.request)) ?? new Response();
        }
      })
    );
  } else if (event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then(async (fetchResponse) => {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          })
        );
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
