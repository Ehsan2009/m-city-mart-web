'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81006fc0de720a8418f69a3cf97f2292",
".git/config": "253aeaf8b016fb2a5c6c6093bc2f4319",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9892e177c78ff4a75cee0163540d1632",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d7e1f1ca6b00bb554edd7bae7eb4789",
".git/logs/refs/heads/master": "4d7e1f1ca6b00bb554edd7bae7eb4789",
".git/logs/refs/remotes/origin/master": "ecceae2a548743879604b6e17efa94e9",
".git/objects/00/adbf6cc7a0cf03a3c7e2e3e703c305bfe4875c": "ed11f3806991c3634cee9ac25d0e8b96",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/12/00b7eefca52fd6c456b10e37f20c8eae7b5367": "bdd8dd7f23d683566994808bc04c6723",
".git/objects/13/2663eea059ce58d5a616611caae3c8bebc566d": "acebfa5f0a832ec6e54e4bb3cbe32cb1",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/e94d9ef97329c285cceb2211a6f59582cc565b": "84b3cff0c0ac310d3d7aef13885c5500",
".git/objects/21/7c75148510f8501dff4bfc34ad18b055b984d0": "47f05b43f62d462a9929669c9c4c3f7c",
".git/objects/30/11479af7d2d8c7c5538af51c0b1fbcad909893": "655b4eb2de4fa58c939f4c5f29aa52ff",
".git/objects/32/3f6786d5cbeaff8e96b5d58b406b9e224ed76a": "9294f4d02f4fbf97160230dbce6289a2",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/b145b5ce18834b003903cbfd9a2a24c4f31e17": "4dcb8ad1b5b4ab556ef258158c4d057a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/82bedec8b3a5ae84ee772bd855875ffed789be": "a022b2cdc2d3690f5bfd11864dd7795d",
".git/objects/5d/2817a156b2b23c82c52795e4d81c89fcd47ece": "a616eafb7f43be0b9b05b600df8f9436",
".git/objects/5e/055f4078dea814a209f97c14f9c80458f442d9": "995a14421e39883f6aaac976bca0493c",
".git/objects/65/f928f4a8626cad11e7861ab9fbd26aacc95cc0": "d6d6f52e40a090a0f87a0afa36dc15e0",
".git/objects/66/d10657145de843a4d246a824001c4ddbc0c56a": "f6465bb45a2024674aff2269e13e2c7c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9d51baac1856949168d1550a605552716c1772": "e944729f9363239311d5483407502f9b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/0ee42e71a126e2389e56e536292eddcaa830b6": "0eb8b213c1b6937e10de83988f5c8ccf",
".git/objects/7e/eb21d636ee8a0e76e7f0cb95d537402207baf3": "d329724a89e8a7c72365004f58551fbb",
".git/objects/87/0f11566a36aa15aefdfb25ef47a6528d9db63f": "5a8ada8e81e070474e589c82916fb230",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/dfc8501903a1504d4d00504d75f5d1e4459fa7": "f0a893ba57ae99d32ee52778c515e051",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/3d0c9b498ce20959fe37fc24dd030e3dbe65f5": "615dc6cf55c9260f722e2f39e9e0953f",
".git/objects/98/5d3f3ce4544b6b9e5530380e1a1865213df12f": "092832244ca0fa578d522c38165dd20f",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/18616e31e04415184fcb047c3b1865c16a0563": "c8206d9789f6d5b5bd815bb02d1353b1",
".git/objects/a1/ef6bf05aec17663dc976a879193bceab664d7e": "19f10b58ab278f6f1ab2e1991270bd8d",
".git/objects/ab/3fb8242e86b8aa328cefd5ce75c12081965b76": "bdc44087ef43294d708184ea7a0b755f",
".git/objects/ad/e9c0c78d1f14d1b24048cb48549b57ce52f12a": "afc2138a0b628b82e529c7baadcd1536",
".git/objects/b2/61032c1478b5e3ae313e5ca25cc5c046c7257c": "d3391f53f5f10b253cf30f1f662e4255",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c1/f2b84e8bd74f6294354796ac1589c8a7ae90d2": "e8c3c9eae6420ec333372feb9af820f0",
".git/objects/c4/4164815660f6412edc12be075d19fef64d05d8": "ea908a1166e6d055b964bc85e50ce274",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/e3756c76f1661ff9f5b1a6ca101b35b3358b85": "b75cc007dc94551937da00ccfe428e83",
".git/objects/d0/23b8fc0df40a55722a2a0b4bcd785f6759cef4": "faa1228bb3c8f7d896e3d7d668aff9a9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/91917556ad8a8e34869327e292c345b1d58deb": "2509a7f6d22519b4ec52bd339369ccb6",
".git/objects/db/047c05518252b9e37ac5b445c77acd9b71d468": "6b8bb481f3c551843b85f847b0102728",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/4c7756a9ff71ca33b30302746ff23b5aa6712d": "02b59264370171adb8e53375b071a07e",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/c6e190d86c01150ce9267bf151add00e33a77f": "5c49e0bfb13af8a4ea0ea830c1d36afd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/760e2a912c5610fe5b191d2bec775362437a94": "7454a010070a50f21827008880a2d29a",
".git/objects/ef/497f8e54b8e06fb5461632df3d9fc1fc38ce25": "b5681ea0a367f8617a37f6a4a2c6d609",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/b57a783fb70dcf47a090ceade432aaa44a89a0": "816222d61dd4b6dadd42b289d6c2649f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/ad63c33f5be4ad5429b0dc6e3d500e55f2ed8b": "d3fe5da4a172f344162b6a7acc06d33f",
".git/objects/ff/cac8f89d9ea25c63d02334832f53ff8c5023e4": "8314e9407fced76beadced927f22a4b9",
".git/refs/heads/master": "3b070f50908d7289c7a6dc0382f9dd44",
".git/refs/remotes/origin/master": "3b070f50908d7289c7a6dc0382f9dd44",
"assets/AssetManifest.bin": "d658f1492061f72fcfc7456a44782bb9",
"assets/AssetManifest.bin.json": "58558c104c8931f80675d1a436248a37",
"assets/AssetManifest.json": "b733737e20533e6adb0886e30f84e151",
"assets/assets/images/discount_four.png": "6723bb78c6b51f0e0a6569390f17a0da",
"assets/assets/images/discount_one.png": "d7562e1ec3bf2d0b638a19f724c50caa",
"assets/assets/images/discount_three.png": "26a6bf730ee8076f5663efe83abb36f0",
"assets/assets/images/discount_two.png": "77ee9bdb2922ede9b8a1c2e816cdcb2c",
"assets/assets/images/m-city-mart-ajman.jpeg": "7fbb4297fff1ca3693e9f4ab315cba36",
"assets/assets/images/m-city-mart-dubai.jpeg": "02c0eb13200bd8a46adffaf803f8782f",
"assets/assets/images/m-city-mart-main.jpeg": "fcee9e9d7ab0e5188ea84daa30ca51de",
"assets/assets/images/offer_five.jpg": "7b966f2000636d3e9d3b7c753415328b",
"assets/assets/images/offer_four.jpg": "fb0df33b8ca617d85b0c5847733ebc4b",
"assets/assets/images/offer_one.jpg": "62ebed488156ddf2e0e2c0250d2d49d9",
"assets/assets/images/offer_three.jpg": "0ac6fd0b53a6066434a937fa5afc9a2d",
"assets/assets/images/offer_two.jpg": "c6a70686d529d528e2cc90853ef1a0e7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d80c7450d18bf8be1c31074c17577e35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbc240fe1be286362653ad88affd3b7a",
"/": "fbc240fe1be286362653ad88affd3b7a",
"main.dart.js": "13d794e0dcbcc49f90183678f25a6e71",
"manifest.json": "8c45a5e0c9258c91e563e3563bbe50fc",
"version.json": "ab00aa4bba9b9379ba58a670fcdce185"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
