'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c8b4628d883b29cc8d98a6fe8ee2dbdc",
".git/config": "67138b7621e391922517eda82620f071",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8b1d6602391b4f77377c0411c6a8efeb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "967b0dd063f25d5253b5507de1ffa1a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34f355dd27316e110fff1fe6eafcaf79",
".git/logs/refs/heads/main": "34f355dd27316e110fff1fe6eafcaf79",
".git/logs/refs/remotes/origin/HEAD": "94b11463b715707369437559d29c0863",
".git/logs/refs/remotes/origin/main": "58c33c1c8d34d7bd95ffb97216a01b72",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/d948497bee0a285cccd9b1024840ca9a320906": "c4c0514d267dfebd6d9df62f93efd817",
".git/objects/07/56e088196bfafed12a53cfb510bc1d055a7b45": "786f54f6d97760c8bd765ef60fbbf188",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/bf21e5aff2b8cad22785e2628b859e185dd6d6": "23ad249c2f736c9fea14bc60c74c8360",
".git/objects/15/c5b8fa4c124c84cc5b447b4e2d52bf43187992": "de951db6c038556f3b9bcc5e14496188",
".git/objects/1c/3d9a2e6b32d52f79adf8e9001c78a3395146ec": "9b7b69d43a68b01762b46c6cda62f6d2",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/e69feca244d0643107b8e51e0695886fcaa21b": "81c6c1b233beb2f83cc8f8bb41663de0",
".git/objects/32/53499736ee786551150547ad489b51c947bb38": "8174f6471819593609c1615429cdc1a3",
".git/objects/35/1d1bfc7802a5a7e992522c16556bb3cec63cac": "b8605b12c9f4b46d94173e007ee49fb8",
".git/objects/3d/d16bdf805560321058c0de46f145a9ae798329": "304bb0f72cd844e1184c14937a58605d",
".git/objects/41/5d10a8ab79e48931ee448af5910e489faabdba": "ba61c71fa64693b8678fc78004a5699b",
".git/objects/43/2523e5aaea47cc2762d96e7b06c7272b71b4b4": "5fad2fccb47e3053ad23582e53aa4aab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/91a6cad65151d6414d645d38d45eec259a1f91": "e9ab7685581ea6107d98dda2795fe429",
".git/objects/50/29ae52997bdef4bc6b91e31f15f473fa551af7": "0372fec2ff02e4f934e7cd340b5cc948",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/5a/afbcbfda1d97becff8a4adce81e72c5b7b267f": "0a3ac0d358bf24f8539dde6df1ab8dbb",
".git/objects/5b/0fa037aca4075ded5f05394f3d77d659b813bc": "8d6703c76f3dfcc61c1cf744dd75fca3",
".git/objects/5d/783a6711e71917090332280e0c333cf7ac4e6d": "1de91b52764f1f3e508407f14b6e9c21",
".git/objects/76/579851ab95546e5a4d96283e472762bbca680a": "a610624df13b390ce58973dab0e0a918",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/f08bb198d81a0c83260edd3fdc00a0ede32e29": "90ded56001c5787cc017d3b54ef208bc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/06761fddfb86343a36b81d50fab4989ba3f770": "c19937a0875d96205c9d8214a30b2f05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/13fb4fb19627108e2f25cfef799b4f8aaf5ce4": "02eba85dcb7765bd41780f2f5dbcea5c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b2/2cde9acd912f3e2fadd27803144404241fe3fb": "b0a701f0cfb9b916333e87662b202800",
".git/objects/b6/585d6a15d57ce5ea8a2156bda5551e17de32a2": "7d2b6256356d0d6c388d12d3471c1f34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4cd1329dd00680b89391e8f4cf4f243fbcc728": "7ea74579f795a7a742da6c7774b59010",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/c723e7c037275e2a9290f638a9887fdf2f9264": "5fdb2a1fbeb4164bad510c341f9a42c8",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/d0eb5ffb3f521b963631e4b7b76cf5c45a8fcf": "dc169b40b4e00316e1ab4cb5228297cc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/7be21c5493eb3766ff27485417cacf45ad46a0": "c3f052bbd2507af35acdc458d0d0f7e1",
".git/objects/dc/01207d21f53d9a44a5ae2bfad21ac3261296f2": "a3598d25d8f57fb9bf9043dea137ac54",
".git/objects/dc/c3c861c244934e242e4b2765e570acc78614b9": "abd48862f1c831e90c00bee5f4e66fb8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/df/e74ed0b4324e9df1e256f5c55e74efaec3dafd": "0b4fd904c94c52dfe1246c27cf6c0afb",
".git/objects/e1/8b2007eb11f1e922ec6dcb7fdefb24445161e6": "c27dfd2630440486110d810e5a9fd1b2",
".git/objects/e3/091ae9c5b0afd2e341592ce85edfff8119de45": "2d04dc1e102c344dce8d152ae7c7b855",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/4b2718c0f7d97848509e7c99d70fe462fa69bc": "b825b0603b0dcc083eed4cbbd745ed3d",
".git/objects/fd/31923ce41036413297d513a525b0a7903aca79": "b6dee730c7bf64d84b9948e1f8266a3a",
".git/refs/heads/main": "3568bedb1fa49a9eae31f56d71e40bf9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3568bedb1fa49a9eae31f56d71e40bf9",
"assets/AssetManifest.json": "237bf825b0175b507da9eb8f09982016",
"assets/assets/cricket.png": "7fb8128aa0a05ce4c49b77dba6e06994",
"assets/assets/laundry.png": "6042606a34187f0d501adc6caf28a54e",
"assets/assets/mycv.pdf": "6e0c05e3204ca54b7c331931c1fdd982",
"assets/assets/tasks.png": "b5a93511b3c5db673f4339018af9c17d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2812f76d73347017b2b6b3be1a72b0a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ecb0ced81dd8243138043cd1623cbd07",
"/": "ecb0ced81dd8243138043cd1623cbd07",
"main.dart.js": "d6636380b1e1637017f88a36a1698d33",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
