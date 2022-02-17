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
    "revision": "49829a4171cf62b9ccf20956cfce403c"
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
    "url": "assets/js/1.0ef19270.js",
    "revision": "e869773a1f75d02afda37afc24619700"
  },
  {
    "url": "assets/js/10.5e62609f.js",
    "revision": "1e1f19bee8ee6b970fdecedaac08ba31"
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
    "url": "assets/js/17.69370c40.js",
    "revision": "c6ce3022480d7f03b9d5fcce806dc8b8"
  },
  {
    "url": "assets/js/18.796b22cc.js",
    "revision": "a4ef6b901c2c5662948f2a8a3bd7bab4"
  },
  {
    "url": "assets/js/19.fd3b9101.js",
    "revision": "5a59fb1e032c2ad4e366f4e6c746147f"
  },
  {
    "url": "assets/js/20.78116e8b.js",
    "revision": "43ff6e14de6fb84091dec3397262208f"
  },
  {
    "url": "assets/js/21.dca2b66a.js",
    "revision": "e71c8f1c24121e68326b3c46449d0d67"
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
    "url": "assets/js/9.338ad52a.js",
    "revision": "992659aef4100d0aa4407aff5c4329a7"
  },
  {
    "url": "assets/js/app.72cfd3ab.js",
    "revision": "bb8f1ec7c3238c4d428544aa42a894cf"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "ef079afba0fb8e0a972a88899140d1f0"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "22ee077ec8438007875ff57f280de683"
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
    "revision": "e80eb21e0b6f1e642bd665b3559b1c65"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "69957b39fa143ed615e3c7a14c95fa23"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "bd9dafd6957aaada2e94fd7fcce18000"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "c6285bb909bc4389f4e8b126d8d325a4"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "e7665e0b54d203650f14d27875a6fcef"
  },
  {
    "url": "tag/index.html",
    "revision": "d074769b9a08a1ab0657dc1cccb8ab6b"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "bc7c10d4eea6ec46cee6091a67fcd82f"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "a0fba105fa09e4b3144aee22a087f08e"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "d3b68ca699b2ec9c31755ab3449b56ca"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "061d1f2e4e9c2050dffbec572aeb9369"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "10c1dd9168f89091927a52e4ee42f81a"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "27c32b6f9be86fdb3a8dc2ee973ae3fb"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "5df5b5d49fa71b9292599b462b264699"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "873d65554746b6039d3de20cba25e0ba"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "ab93e27e98aeb941cca8e8ffaa9254b5"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "fc0c812058b0ff07f125a6a4456d2d99"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1b211ed2223dfa76cc0d95340e7fb07"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "666bdd4de229183436e6915ad39a0c8a"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "c3f5ceb24cc84b30c51069ad716b6e23"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "14fd8c5ba87f06c78c274fce87fc350f"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "75046de2a847054aad6a43f544cb3dd0"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "9b7a0acc680b4b777f635beba3a6481b"
  },
  {
    "url": "views/system/index.html",
    "revision": "3cdda800c82f2f76bd2258aafd3d3896"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "2e43cf5749d74a0989ce580c1a54cdf8"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "f45639d1703953c5dad8b7e1ecc69703"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "974178f6e234fd09bfa47ba5ff1a0bca"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "1a859434b5e0beaa7175c4ed4b478f1f"
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
