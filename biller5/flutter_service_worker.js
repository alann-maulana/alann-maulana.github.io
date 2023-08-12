'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "96a6ec82a620acf893653c2aa7237819",
"assets/AssetManifest.json": "3ea1a3cee7c1c7ffcb76e3b513a8208a",
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
"assets/assets/images/banner.png": "75bb7ddfbb7a8650d9c116853bcdc938",
"assets/assets/images/game/codm.png": "694a9735b5ce134211754dbd1d93cfda",
"assets/assets/images/game/ff.png": "82c9fb2a7c8e232153beb76975054cb6",
"assets/assets/images/game/gi.png": "b27dd2e02fe064e0664b664edaa3305a",
"assets/assets/images/game/lol.png": "36961310e71d08d8111edfffe381186e",
"assets/assets/images/game/ml.png": "8513ed3b3ae7e254c2cf597d4f4a5dfd",
"assets/assets/images/game/pb.png": "ec2628efc486f8dd74beac152266e982",
"assets/assets/images/game/pubgm.png": "8f07e550b87fa03257be55749d69c645",
"assets/assets/images/game/valorant.png": "1a9eeff3365222ee6d031e95ef89bef3",
"assets/assets/images/logo-biller5.png": "8be1e48dad2a7df787d28ea19bbc949a",
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
"assets/fonts/MaterialIcons-Regular.otf": "e9103d575925a371e6435cf871fd6db9",
"assets/NOTICES": "5e9464b2495f12a61aa544db64a3550c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef35bcf938e9c0dfd591568540421803",
"/": "ef35bcf938e9c0dfd591568540421803",
"main.dart.js": "16c2b7c484d5ba6e737d500fc78f5fa3",
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
