console.log("serviceWorkerOption:", serviceWorkerOption);

let CACHE_NAME = 'react-redux-poc_CACHE';

let urlsToCache = serviceWorkerOption.assets;

self.addEventListener('install', event => {
  // Perform install steps
   // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  console.log("new worker activated: Ho Hooo!");
})

self.addEventListener('message', event => {
  console.log("SW Received Message: " + event.data);
  event.ports[0].postMessage("SW Says 'Hello back!'");
  // Then once the event is triggered, if the message triggerer is havnig a callback,
  // resolve the promice
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200) {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

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
