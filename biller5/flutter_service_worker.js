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
"assets/assets/images/banner.png": "268009b2665ae7ade0bcbcde2dc01e78",
"assets/assets/images/game/codm.png": "694a9735b5ce134211754dbd1d93cfda",
"assets/assets/images/game/ff.png": "82c9fb2a7c8e232153beb76975054cb6",
"assets/assets/images/game/gi.png": "b27dd2e02fe064e0664b664edaa3305a",
"assets/assets/images/game/lol.png": "36961310e71d08d8111edfffe381186e",
"assets/assets/images/game/ml.png": "8513ed3b3ae7e254c2cf597d4f4a5dfd",
"assets/assets/images/game/pb.png": "ec2628efc486f8dd74beac152266e982",
"assets/assets/images/game/pubgm.png": "8f07e550b87fa03257be55749d69c645",
"assets/assets/images/game/valorant.png": "1a9eeff3365222ee6d031e95ef89bef3",
"assets/assets/images/logo-biller5.png": "8be1e48dad2a7df787d28ea19bbc949a",
"assets/assets/images/logo.png": "b02c26664d186bfed016592bbbb476f9",
"assets/assets/images/pulsa/axis.png": "628f25d0e85c74917c0dca9a1e3aae7e",
"assets/assets/images/pulsa/indosat.png": "dcad5e840da80c4f287d756ac20d98fd",
"assets/assets/images/pulsa/listrik.png": "e2aab0caac4628bd9a24e4b57c1755de",
"assets/assets/images/pulsa/smartfren.png": "9f3d1c3f208b09c515586eae7fa178bf",
"assets/assets/images/pulsa/telkomsel.png": "c9020e94e2a861cad7de5363e2532240",
"assets/assets/images/pulsa/tri.png": "151c0abe7c25a708564760c79a67eb11",
"assets/assets/images/pulsa/xl.png": "2300acd751e04b10a77502e0780e8c72",
"assets/assets/images/resto/img_1.png": "aaf5082ff625e768c40c7d8f119a4b88",
"assets/assets/images/resto/img_2.png": "a124cecfe8f52b07476ad6cdefdb00cd",
"assets/assets/images/resto/img_3.png": "bafd6639978d00c32347188c37aca3c9",
"assets/assets/images/resto/img_4.png": "5bf7a31cbe298c674cb13da5bf953220",
"assets/assets/images/resto/img_5.png": "d861a95ecc35023a628dbdbd010900cc",
"assets/assets/images/resto/img_6.png": "f4a0f6d01f69a5694fdec91885dcb90a",
"assets/assets/images/resto/img_7.png": "3dbccd545204fd301d9f83d6bc7b7208",
"assets/assets/images/resto/img_8.png": "8582be8e099fc5e8345eba8906d2e770",
"assets/assets/images/voucher/codm.png": "2a003e2b729137797f5e1b86179a6979",
"assets/assets/images/voucher/ff.png": "ec6e9ccada79753ac8cc2ab46461af1f",
"assets/assets/images/voucher/ml.png": "d0be9647e8b622a785eb7943f721d4f4",
"assets/assets/images/voucher/pubgm.png": "91df1029053cf046968cbdcf93e0834f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7874323676f8da00e09e4f600e9a969d",
"assets/NOTICES": "80e96f0e2d01f88ec636f9734bc4d8ab",
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
"index.html": "11c74305ca7c3c467763179f1af95104",
"/": "11c74305ca7c3c467763179f1af95104",
"main.dart.js": "0fe35206ebec05959930161a82ddd3eb",
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
