'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8e0a3561665f958c580aad598243b2eb",
"assets/AssetManifest.json": "e00b94a868fb6d75b84fef7caea22156",
"assets/assets/images/bank/bca.webp": "30c8f8823e51a12bdf4a60e03f887f2a",
"assets/assets/images/bank/bni.webp": "a1ba1942cc6935f945197b9674b225b4",
"assets/assets/images/bank/bri.webp": "e4bcbf474d7253047fdbf97eac04c367",
"assets/assets/images/bank/bsi.webp": "cebe297fcaf432780ff1fc051f50aa70",
"assets/assets/images/bank/btn.webp": "d373ecd9e384676948d6a3ebd9debdc2",
"assets/assets/images/bank/cimb-niaga.webp": "5388b300f48f6a56291fccc01924ca91",
"assets/assets/images/bank/danamon.webp": "fb7b5e6b43db7c68d783870e666b30ed",
"assets/assets/images/bank/hsbc.png": "f9c315597281f6a7f6a3010f4114b5d1",
"assets/assets/images/bank/mandiri.webp": "f2bf80311e997efa07a6ecffea366e86",
"assets/assets/images/bank/maybank.webp": "0c424e756a7f204e79a9ba2468b0c167",
"assets/assets/images/bank/permata.webp": "1c86a0d4f6f538faeeff5d8b696ff7b8",
"assets/assets/images/banner.png": "162c24c2f880a1da8c36de9eaf9e9aaa",
"assets/assets/images/game/codm.png": "123078e12caf947aa7b357e083e09665",
"assets/assets/images/game/ff.png": "4bb731f42d23c1dfb4a1a2973e08c554",
"assets/assets/images/game/gi.png": "e4ec451222b9c451aa2497cc4bc14551",
"assets/assets/images/game/lol.png": "30ac129511b9cf4df70db770585b59f5",
"assets/assets/images/game/ml.png": "3cf53cd7a4991551f6bc1ce4608c95cf",
"assets/assets/images/game/pb.png": "661d60f413aae6908683048f79e05f7d",
"assets/assets/images/game/pubgm.png": "fbfd48427eb9a12a50eb1800c9a90fed",
"assets/assets/images/game/valorant.png": "19184444f150485aae222964e539423b",
"assets/assets/images/logo.png": "b02c26664d186bfed016592bbbb476f9",
"assets/assets/images/pulsa/axis.png": "4bc9a5edb2876ba4b9bae891d9ea2d48",
"assets/assets/images/pulsa/indosat.png": "9772c5c69472692fe440af536ec89399",
"assets/assets/images/pulsa/listrik.png": "f77d41be9574193ab718ad11b145226b",
"assets/assets/images/pulsa/smartfren.png": "7196dd345b9c3cf6ab9773627418d17f",
"assets/assets/images/pulsa/telkomsel.png": "93250ded78ed25a2051cd4c8b427a875",
"assets/assets/images/pulsa/tri.png": "eb801e978febf16a145ab99edd2868b3",
"assets/assets/images/pulsa/xl.png": "c624cf05e87b280df4cdea33d2f33e26",
"assets/assets/images/resto/img_1.png": "4e3b37d794c218d233e8fb18d241dba5",
"assets/assets/images/resto/img_2.png": "b03cda01880903ae048eba98c0335e81",
"assets/assets/images/resto/img_3.png": "01a71fa8ba69f21e3f4a349579d98b19",
"assets/assets/images/resto/img_4.png": "9e873e25135ee72394430ed46ac019e9",
"assets/assets/images/resto/img_5.png": "45a2d7e055aa7777de08362a619ccbe7",
"assets/assets/images/resto/img_6.png": "2c41677f92434e94a9e729692ad68bc2",
"assets/assets/images/resto/img_7.png": "471217bc1e4b985c35e818a233cfe927",
"assets/assets/images/resto/img_8.png": "b19a1a386fffb971589c0eb8434a619c",
"assets/assets/images/voucher/codm.png": "123078e12caf947aa7b357e083e09665",
"assets/assets/images/voucher/ff.png": "4bb731f42d23c1dfb4a1a2973e08c554",
"assets/assets/images/voucher/ml.png": "3cf53cd7a4991551f6bc1ce4608c95cf",
"assets/assets/images/voucher/pubgm.png": "fbfd48427eb9a12a50eb1800c9a90fed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "124bb49a09b23f3b1606b27cddc3885c",
"assets/NOTICES": "ba93680d32e01e0b7bb75df6764cf683",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88bb92f3fcc19ed43db14fc01716f729",
"/": "88bb92f3fcc19ed43db14fc01716f729",
"main.dart.js": "405a0f6dce7f3d7e545853c9bc6bcf20",
"manifest.json": "3f0a35c8eebe73e8589e86be6f463360",
"version.json": "dd8184b8d06b040199b6dee0cf4f667b"};
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
