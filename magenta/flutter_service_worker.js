'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4e12eabef499439fdc5a90f1f5c7d6a2",
"assets/AssetManifest.json": "e7aed0c46603f2e012d5f9b133d8ae61",
"assets/assets/images/graph.webp": "62237e2436b02787758a6b4e2407ef47",
"assets/assets/images/logo-magenta-full.png": "b72bf569a83dfca9be9598bf3e045e3a",
"assets/assets/images/logo-magenta.png": "8d32baf2f141eb3a34efc93cd11e02e9",
"assets/assets/images/onboarding-1.png": "3bf368c7f453857c2c30e4c1b289ee04",
"assets/assets/images/onboarding-2.webp": "c981b1e8e043114447d30f1b1baf2cc0",
"assets/assets/images/onboarding-3.png": "c81aa4473751d6b33ce948b9d7586533",
"assets/assets/images/onboarding-4.webp": "6c1c1e125679b8bfa06de16b40dc30f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f833464873e0731208662f708ef209b1",
"assets/NOTICES": "d574ad6245fe134cc19cb6854a62a2f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "ce0de933e963d31d33168b93d56f8db4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "1952dfe352948ad79d1b86fe7f7c8352",
"icons/Icon-512.png": "6fc50de8053a1008cae46f51def417e6",
"icons/Icon-maskable-192.png": "1952dfe352948ad79d1b86fe7f7c8352",
"icons/Icon-maskable-512.png": "6fc50de8053a1008cae46f51def417e6",
"index.html": "2a4a12935c3c3ea56566d0afff3bf6f5",
"/": "2a4a12935c3c3ea56566d0afff3bf6f5",
"main.dart.js": "a7046b82c58707b22d3ab44f275edd09",
"main.dart.js_1.part.js": "d3de6406d45ae55dbec2fe4c93fb576d",
"main.dart.js_2.part.js": "3b14bb3732f516a613267fc2c24c4c8a",
"main.dart.js_3.part.js": "aa67c1fcf01deca959a7b928025d5bdb",
"main.dart.js_4.part.js": "e7f60635d397b313a37ad5cb17656f6b",
"main.dart.js_5.part.js": "a0c315e3ef6631f8ad749437c1ea6737",
"main.dart.js_6.part.js": "4eb56ee6ebc04fbabc6256e6935e3605",
"main.dart.js_7.part.js": "9f6320f66000a97c04a51c1a09f317b2",
"main.dart.js_8.part.js": "482cd15a8492ffce4842afb664918bd4",
"main.dart.js_9.part.js": "f361b1bb7361bb362362236f9f493618",
"manifest.json": "e321d2b6e1685e5e3240478678a20051",
"splash/img/dark-1x.png": "75801acae038eb5151171d34a0537e70",
"splash/img/dark-2x.png": "993c821b23d9457e76a28f21e4753533",
"splash/img/dark-3x.png": "ccec56ec98f099029b24e73ebb936b42",
"splash/img/dark-4x.png": "7fad65cb05545ceb882d9d9df2169f47",
"splash/img/light-1x.png": "75801acae038eb5151171d34a0537e70",
"splash/img/light-2x.png": "993c821b23d9457e76a28f21e4753533",
"splash/img/light-3x.png": "ccec56ec98f099029b24e73ebb936b42",
"splash/img/light-4x.png": "7fad65cb05545ceb882d9d9df2169f47",
"version.json": "d74756e27d3d6302f2ca8de4b3ea8f7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
