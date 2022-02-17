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
    "revision": "41c12853c5fee03d36e18bc054c0fc02"
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
    "url": "assets/js/1.0877e0c3.js",
    "revision": "78c0109e3caf3787b22d63b0b62e0eaf"
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
    "url": "assets/js/16.9f745f98.js",
    "revision": "e06fc8a6c0ba5d540a5413144f08d6d4"
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
    "url": "assets/js/20.af4af271.js",
    "revision": "fae70b4f657c5ddb9b35c44ab11024ce"
  },
  {
    "url": "assets/js/21.af66908d.js",
    "revision": "2d56c13217eb62369148d081001e6078"
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
    "url": "assets/js/9.1b9838c6.js",
    "revision": "d8df78347bb85135c9c6ab1de1539ae1"
  },
  {
    "url": "assets/js/app.f31e51fb.js",
    "revision": "42fa1a302d4b9e61f0b67e42008244f9"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "a53bd219d864905d32580d32e9b7cdaf"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "a762b41a72d4acb7eeeaaa8397d34d4d"
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
    "revision": "47e14a3017561ceb396defd445661edf"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "2d4e85abcab22f4c9e6fe8aca1e1075d"
  },
  {
    "url": "tag/index.html",
    "revision": "8fc031488bbe14b281a1e3e83de72971"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "7f0a6e8ea890a4224bf7b7b5918d2c59"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "4406e624cbaf2f74a6ea28092c2b020c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "2cb2e8defc32ca1475ba043350e1835e"
  },
  {
    "url": "timeline/index.html",
    "revision": "62ce7915580e3b2722f1784f0fd9ce27"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "1f5f6d5f8e35071ab94f7e4c37c9a85e"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "1fe5f16b4910c1a9b4b280ae031fdaed"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "1ef3ad41792921b29755207e55efbbf8"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "76c8a3a536cbb93499acfbf9cd7ce0ad"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "3076635fe1185fb63be05bd3a28054d3"
  },
  {
    "url": "views/system/index.html",
    "revision": "3c395712ad14a5a7f3486de7f44bb8d0"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "fe30272a55ffcc64429ac4bd6560495e"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "18a2a3301952ba59a9d6a64eaff80488"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "3158bca1eb390673dbd9972e53f1eb15"
  },
  {
    "url": "views/webpack/index.html",
    "revision": "c5b78d501ad0177bdb8b2a331b260cfb"
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
