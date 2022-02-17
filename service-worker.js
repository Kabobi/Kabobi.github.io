/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d6f2050fac0aa9ffbc71a26b9af65f27"
  },
  {
    "url": "assets/css/0.styles.d7def4f7.css",
    "revision": "bc557e961473e905f0f43c61cbae8598"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.2932b4f1.js",
    "revision": "5295228f90ce07053562bd0a91f32326"
  },
  {
    "url": "assets/js/10.f7191432.js",
    "revision": "e4d03bcdcdf28188c64cdf8f0be0975b"
  },
  {
    "url": "assets/js/11.b0f62e73.js",
    "revision": "a90a53471cdaedaa2ba4c61d08dd7420"
  },
  {
    "url": "assets/js/12.6374d256.js",
    "revision": "2d7e70f829963fe5f04c9a361788674b"
  },
  {
    "url": "assets/js/13.0667ff9a.js",
    "revision": "e4e6d62d7bbc7cde7bce615d3a43e67d"
  },
  {
    "url": "assets/js/14.c50c841b.js",
    "revision": "7cea89a443db94e4dc0cca9394561bc0"
  },
  {
    "url": "assets/js/15.23f1d2b7.js",
    "revision": "44ed829c7a29407ee912243dc12f8c81"
  },
  {
    "url": "assets/js/16.7b156ea1.js",
    "revision": "6d4b5b85f878412355c843a21486522c"
  },
  {
    "url": "assets/js/17.235b27a7.js",
    "revision": "c2f8b4e0a8403ab30d34bb06eb5fb80f"
  },
  {
    "url": "assets/js/18.ad83da07.js",
    "revision": "d57721e97a8b89e5e5c5e1072ef921c0"
  },
  {
    "url": "assets/js/19.ff867c45.js",
    "revision": "586a01263fc2ad1228ff86afccc0f7f6"
  },
  {
    "url": "assets/js/20.46bd3bc0.js",
    "revision": "51f9ed74a460daf72b37d8c0d380ed4b"
  },
  {
    "url": "assets/js/21.e5cdc2b2.js",
    "revision": "73be56f40dcd6cd02b41b54802d20421"
  },
  {
    "url": "assets/js/22.47ced4ad.js",
    "revision": "5772d517c349157fcaa59bf9ac8fa108"
  },
  {
    "url": "assets/js/3.712db998.js",
    "revision": "86ec0bb934eeaa535d3e1a60d63e3ba1"
  },
  {
    "url": "assets/js/4.688b72f5.js",
    "revision": "5f47de82ed7438ad30d708754748fc84"
  },
  {
    "url": "assets/js/5.f8139fb5.js",
    "revision": "0698df4420524c9e9466551191a36733"
  },
  {
    "url": "assets/js/6.e8f36e47.js",
    "revision": "44b20754def8488a6b1e6b596983b6bd"
  },
  {
    "url": "assets/js/7.91cbddd9.js",
    "revision": "6f3a6defd47836cf0feb409b2ac1e5db"
  },
  {
    "url": "assets/js/8.c94de772.js",
    "revision": "4c0d2d1775610cbe193a4c2e7adecc9f"
  },
  {
    "url": "assets/js/9.da94663f.js",
    "revision": "c7a9d91e3bfdc347c0c77b4bbc10847b"
  },
  {
    "url": "assets/js/app.8f5fec36.js",
    "revision": "34fb8893b8e214c07a9b0d284a0649ef"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "6ba71085ac4b349722cafc484dc199e3"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "79e8c7019460498675c0d4a1c3eac7eb"
  },
  {
    "url": "head.jpg",
    "revision": "0a435270d375a10e26331717f7180297"
  },
  {
    "url": "head.png",
    "revision": "0a435270d375a10e26331717f7180297"
  },
  {
    "url": "index.html",
    "revision": "a499b5595fbd597dce65aefd80d37079"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "7409b152f2215fcab961704bd1ada9e9"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "1ad419659978426f02ac90d63e406b1a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "a24520309f0ade6a2c237efa0aead220"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "c47b4b7abbec24fe526773b28bbcbea9"
  },
  {
    "url": "tag/index.html",
    "revision": "e466d2d343146d0daf8ef5a1cfeb6edd"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "a67838d0f6d323b1d106c08791dc607a"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "0217b78925f396bb97d7f47bd6f5e132"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "418aa0e0e2e1478a212e6251b3ff50bc"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "c29e25c8e8ea26be7819d64e1432e594"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "3d19ef98cdd5d1ac697ba1443a4becca"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "c17809c7ddea558e2b788e29b786ef6e"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "2b25e798bc0501494630b46b02c3b20b"
  },
  {
    "url": "timeline/index.html",
    "revision": "23549453cd09f11c5b2c56e4ddd1cb7a"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "b182bd43e3d93bdfc887994c814a99da"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "2c88963ea0304a308c99bd60a2f44a88"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "37d41aa28a7e3304e757b50bed03eb9c"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "fef156c2c3eff3609394b4cdba936462"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "b1e62af2049b0fd226c6927cd0c6e720"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "685a48135dcc0517b081de9d0700892d"
  },
  {
    "url": "views/system/index.html",
    "revision": "4e840e09e1dccc70bebc3aa90b213175"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "16106a7d33ec22a614172a961b4f086c"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "9879195758dd9f94498d8da8bf0d7fe9"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "270f0162846fc30098db28803c2901ab"
  },
  {
    "url": "views/webpack/index.html",
    "revision": "c07968aeb973fe64bca3b86bc29c97ec"
  },
  {
    "url": "vscode/AutoCloseTag.gif",
    "revision": "11b188a33610037a92de75e936d4837a"
  },
  {
    "url": "vscode/AutoRenameTag.gif",
    "revision": "304d2802620974eeb369a6302f50cfc0"
  },
  {
    "url": "vscode/BracketPairColorizer.png",
    "revision": "31cecfd757a49852fb8ab8df94690c22"
  },
  {
    "url": "vscode/coderun.gif",
    "revision": "3800f80b36e4433d39782aafcbf5cdb2"
  },
  {
    "url": "vscode/codeSpellCheck.gif",
    "revision": "ded807cc35167a66dd074db6c96badba"
  },
  {
    "url": "vscode/colorHighlight.png",
    "revision": "ddf89ba1906c762adc0785a4b76cb635"
  },
  {
    "url": "vscode/gitLogv3.gif",
    "revision": "7635e8c56abeb0028a1d0345324f664e"
  },
  {
    "url": "vscode/koroFileHeader.gif",
    "revision": "b29f0a9ed810ad8bfd74d3ec1de2b30e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
