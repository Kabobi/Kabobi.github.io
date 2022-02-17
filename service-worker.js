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
    "revision": "361ec6813db96d322efc50f0c566464a"
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
    "url": "assets/js/9.da94663f.js",
    "revision": "c7a9d91e3bfdc347c0c77b4bbc10847b"
  },
  {
    "url": "assets/js/app.56205d11.js",
    "revision": "ad6a52ffee1542b7da217562e0920460"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "de7b21faa8a8284e85975b6f809c8b67"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "7af42ad5482a0df9fe04ee2f410e7cd7"
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
    "revision": "d7933b04b99a26252001d401116f5d28"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "68a050fda4ba0711f523545d288556c3"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "2134c87eebd2a4be04ed583f969030a3"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "77aaeb065fcb9f9c4688b9c1267d3f0a"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "917fae08c8f92a1b705e7d248d786cfc"
  },
  {
    "url": "tag/index.html",
    "revision": "7d8e481b1a521d17543689edb67ecbf3"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "0a8aa9ebbac6e1f200dafc1e8514654f"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "41937df139d4ead9c319327c9071779e"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "8a133e890dab2994d1f4d0b3c03b652c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "de02724a035516007773b2377b733757"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "f3d4a987952b53b7d9711c8fecd3d056"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "3342962483f7581610eb44a802f34aa3"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "3a04b2598ffe18de1ccd1fb1b4d0803c"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8a89015850d1b9e6cd3b483790782da"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "af2ecf4b2a370ef8686f90271f1bdd22"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "f32dd3788ecade7878c233015e18a40c"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "1590bdcbeedd2649b8f1f31cdc5cd99d"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "5480036ca092051bbbaa9ba61638b04b"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "f4d046b67fcbad3dc85ca313a3a77bf0"
  },
  {
    "url": "views/system/index.html",
    "revision": "3361a38fc7fb4f4720237f8de1a48ee6"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "fee022f4a363bf86ff2c2e8938c14521"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "2489830a22524bad0b00945d6afb70b4"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "6b3f39219fa19f0b6541cb619b5de7d8"
  },
  {
    "url": "views/webpack/index.html",
    "revision": "95e24b29a1b50ae9262237b49cccedb4"
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
