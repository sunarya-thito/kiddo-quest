'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a623143ddc179b0eef08d46348eee136",
"assets/AssetManifest.json": "f1be6c43ca3c03ea56d48b9e8f661b16",
"assets/assets/audios/answered.mp3": "bbe6249a0c245f6e8ac49b7dedf0b67e",
"assets/assets/audios/bono-1.mp3": "749ea349ce000be4ee879f4c27a581aa",
"assets/assets/audios/bono-2.mp3": "2d76948112bf6c7f0d2ed57a08136fff",
"assets/assets/audios/bono-3.mp3": "8b006280314334bb2b518b95cd2f319a",
"assets/assets/audios/bono-4.mp3": "386f077def64e505372cc743c30dd806",
"assets/assets/audios/bono-5.mp3": "2af73dd6beb5c95c14c5ce5929dc2d62",
"assets/assets/audios/bono-hover.mp3": "3e0329a6527e0970d95a02d3d0592b72",
"assets/assets/audios/bono-mulai-game.mp3": "04cd19a11ad05b68657fdeb67956dc48",
"assets/assets/audios/correct.mp3": "970c990df6263f638ef0baca33d7db9e",
"assets/assets/audios/credit.mp3": "f550c086fae34dc2931b9fefa3ce72c5",
"assets/assets/audios/do.mp3": "65f10eee7da0e6e3c5398cce0e10c16c",
"assets/assets/audios/do2.mp3": "26d2e1f8c7e1c61d6ce71763baba4b00",
"assets/assets/audios/fa.mp3": "8fd1e9703787bafacbe5986d463aa4fd",
"assets/assets/audios/game_gambar.mp3": "08adcbb96a77316d5c833079f63c849e",
"assets/assets/audios/game_kata.mp3": "15a2637202a7a54cef3c3519b6ab5988",
"assets/assets/audios/game_melodi.mp3": "748c4b8771e79eb7f1f49521374fde0c",
"assets/assets/audios/hover.mp3": "c1f9f8f963311abc255e6138a9a9f696",
"assets/assets/audios/la.mp3": "30a1f197492f6dc34562135779072cad",
"assets/assets/audios/level-fail-2.mp3": "f9811b041a524f25042ba8b87670575e",
"assets/assets/audios/level-fail.mp3": "6c265fe5e2d7e0637d155aa8daa6c912",
"assets/assets/audios/main_menu.mp3": "8e479800061bd2c028ae552934a3374d",
"assets/assets/audios/mi.mp3": "68f2fbe063f8c1c7dd96933007470bb6",
"assets/assets/audios/rani-1.mp3": "230aee970d215439b94deb4701a5e57a",
"assets/assets/audios/rani-2.mp3": "37a1b9b38d94c5d2cbcb8fcaea1d9252",
"assets/assets/audios/rani-hover.mp3": "c31edfecc4c7b9d1ff016b16437abd13",
"assets/assets/audios/rani-mulai-game.mp3": "b144c4831d599dab537acd884e1b6c0a",
"assets/assets/audios/re.mp3": "0d9c4c78d28e3e21bd54b626e02ecf2a",
"assets/assets/audios/reveal.mp3": "0b1c5cdf42e2c642bae6cd5862f0cd92",
"assets/assets/audios/samsul-benar.mp3": "241c3ff98f0a2cdd9a7642186093ca04",
"assets/assets/audios/samsul-hover.mp3": "ac47cc6f1c858108171da4f5fdebebde",
"assets/assets/audios/samsul-mulai-game.mp3": "b4ea1faa2e7ba2453bc09c12c93b3634",
"assets/assets/audios/samsul-salah.mp3": "d91cf1c8f4fd3c5943561760c03dc537",
"assets/assets/audios/samsul-tebak.mp3": "c91ace2ec2bebbe2a6974a02dee10f8d",
"assets/assets/audios/settings.mp3": "9b67a3a34491051d3333d09d75ee2048",
"assets/assets/audios/si.mp3": "0efd9f23bce46e762e09b8af5848f648",
"assets/assets/audios/sol.mp3": "04966f34f2886c09baee46a29db02447",
"assets/assets/audios/wrong.mp3": "f6faae27c2ead611ba820161ec4bd819",
"assets/assets/images/bani.jpg": "a11dd880fdc214dc5b02a621257e3472",
"assets/assets/images/bg-a1.png": "782d7db642a6e07476efcec5b9b3819f",
"assets/assets/images/bg-a2.png": "ab7cc01b52958604533f577d840caf80",
"assets/assets/images/bg-a3.png": "03238e62d23f094367b4c292bf1e30c2",
"assets/assets/images/bg-b1.png": "fc9d38da82e9b3f88f57cf12c40fd675",
"assets/assets/images/bg-b2.png": "5e594e6bcc226a4c50aa117ee59bf3fa",
"assets/assets/images/bg-b3.png": "8eb84b498c61d190f43b3790586e0522",
"assets/assets/images/bg-c1.png": "071bb781a92c60637c656ce0d18b7902",
"assets/assets/images/bg-c2.png": "1a3fbb8e26fb0773832dc1cecf4fb1fb",
"assets/assets/images/bg-c3.png": "9d3fd675b2072d0e480f98b364e00794",
"assets/assets/images/bg-d1.png": "0a6f6c894c0b3c01a8fd67cd6ef39032",
"assets/assets/images/bg-d2.png": "95fd84338ecd597ffca8f5f8d6617328",
"assets/assets/images/bg-d3.png": "6b015d0498c5383dadfa97fabcdb2828",
"assets/assets/images/binteng.jpg": "8d196f0b6d8d610f7dc7932e4ad08e9b",
"assets/assets/images/Bono-A.png": "ceb8270c374eb5bdcaa5b0c6d1fb8132",
"assets/assets/images/Bono-B.png": "826d393c7fec7cba4a4cf7eeb948a2aa",
"assets/assets/images/Bono-C.png": "9ed1fa6d5551bfcc334ad4d34508de54",
"assets/assets/images/Bono-D.png": "41f214b3627c35a20671fbd0975a223f",
"assets/assets/images/Bono-E.png": "c0ab7b28d51e41a010b5562ccde4c6b3",
"assets/assets/images/Bono-Idle.png": "02126a71694f6279d02a85401e3423f3",
"assets/assets/images/box-1.png": "17957cb981c2d8254fdd0f0463ec9c10",
"assets/assets/images/box-10.png": "bed1fe23a8066eae2084de4dbff66705",
"assets/assets/images/box-11.png": "fb11f90d82d788916d074e79628de842",
"assets/assets/images/box-12.png": "936a9a92c82c9e729f46edeb83d9c707",
"assets/assets/images/box-2.png": "626217c8db839a5f05caa8cb8cfde10d",
"assets/assets/images/box-3.png": "793ae54273ae8add3d23ff1a7a251424",
"assets/assets/images/box-4.png": "95159246ebbd1ae1cbf44bc19d9e9e02",
"assets/assets/images/box-5.png": "4f2c6c2a126bd081c9d7756022c1e6b5",
"assets/assets/images/box-6.png": "1cb6d7d2e4d161d6b822f46ddc2ce71e",
"assets/assets/images/box-7.png": "1aeda2563b7394a77073478828d60de3",
"assets/assets/images/box-8.png": "64b3ab2f06e2c9898ab4d0a57c913b50",
"assets/assets/images/box-9.png": "f166dc65de44f03a5f555524040fd5cd",
"assets/assets/images/box.png": "a91edbf18e6c1510e93de3a27ff137c0",
"assets/assets/images/ghix.jpg": "4baf87cebe865da8631fe51a61bb40b0",
"assets/assets/images/itenas.png": "23f5ecaee07cf772bf3766463acf609b",
"assets/assets/images/logo.png": "1a89cb39202b0fa7d8edc144f70036f4",
"assets/assets/images/logo_indomilk.png": "998f13a7e699de9f06fd8fe12e74b508",
"assets/assets/images/logo_opaque.png": "2c7db181a3640b5919b507fc86aebafa",
"assets/assets/images/menu_button.png": "a200def0227eab017bf918a63a34193f",
"assets/assets/images/piano1.png": "2f91940b36c72d2540bec4c28e652389",
"assets/assets/images/piano2.png": "55315f962adfc1fca9c19c2d92cb4d04",
"assets/assets/images/piano3.png": "68b06235882474a02fc4c8a29d4ee5ea",
"assets/assets/images/piano4.png": "7670d8c2e406d6e20c07ed6c90a849ef",
"assets/assets/images/Rani-A.png": "adf7a46e6eef7f982857633527fabc9a",
"assets/assets/images/Rani-B.png": "e67d51de72f024040fd57800b882441e",
"assets/assets/images/Rani-C.png": "5af8a75316c8b05f5e732c9d6e36dfc8",
"assets/assets/images/Rani-D.png": "094e5b92c47f75844f2d5b3399b8f55c",
"assets/assets/images/Rani-E.png": "217b57828d6cbd29f8c01a6a6940045c",
"assets/assets/images/Rani-Idle.png": "3e33005bef0972c49353639cc6130315",
"assets/assets/images/Samsul-A.png": "3ae0b2a87a055faff74cafe43f753252",
"assets/assets/images/Samsul-B.png": "e5d5d813e0b2ff5a7cb996a01a6a440e",
"assets/assets/images/Samsul-C.png": "796a1e69a54929a1d1fef1774a74d7bc",
"assets/assets/images/Samsul-D.png": "cf812ec1e5df6ba169a29e1a19cdd762",
"assets/assets/images/Samsul-E.png": "27df1d6c77718158230de25112a53fdb",
"assets/assets/images/Samsul-Idle.png": "18e3aed42a73283edd0c7e8502391c41",
"assets/assets/images/scoreboard.png": "47319f39e4992036f2434ddcc4c6195d",
"assets/assets/images/shine.png": "49d8e134ffbab3d2c2103a471d902e64",
"assets/assets/images/shine2.png": "d37e2f4f2279594da95a64ba2c58ce3f",
"assets/assets/images/shine3.png": "d3fae945bb55ab93f94ddf0947957fc6",
"assets/assets/images/shine4.png": "a038f9164c30822a003e8d90f70d8ddd",
"assets/assets/images/tata.jpg": "6d039e619546591d1d7c0cf8ecb5a6a3",
"assets/assets/images/thito.jpg": "32c4c205e40c581defa40fb7e8648d24",
"assets/assets/videos/Bono-Intro.mp4": "e9bd4f76301ebfdf03daf97ed9324dfe",
"assets/assets/videos/credit-a.mp4": "38227c317a1c1dbde61363ced73a6966",
"assets/assets/videos/credit-b.mp4": "59f9797b160a804cf98c1782d7154836",
"assets/assets/videos/credit-c.mp4": "3e2b6f9cabb0b16be6665d389623ab57",
"assets/assets/videos/Jingle.mp4": "c11a878289ba842acefd87e85296f2b8",
"assets/assets/videos/Rani-Intro.mp4": "df9277837327dd4ca017b782edb0059c",
"assets/assets/videos/Samsul-Intro.mp4": "e43f0c6539cd87677de2ea5066b3bf21",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5233baa7660ca30b396acfe91434a0e7",
"assets/NOTICES": "4f0cae54d25afdbf519bd7ba65884b5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88566c9221407400a49e6cc40cf7b3e9",
"/": "88566c9221407400a49e6cc40cf7b3e9",
"main.dart.js": "53b495ef3c53ba17c87efd72a944198f",
"manifest.json": "99bcfee00ae29a96461d7b5f2b3b83e5",
"version.json": "15d1e6655bca406d35d694b7afe94dd9"};
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
