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
    "revision": "6ba1410f4be398df6f95a2d3e3e2ff70"
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
    "url": "assets/js/1.120a884c.js",
    "revision": "e869773a1f75d02afda37afc24619700"
  },
  {
    "url": "assets/js/10.f7191432.js",
    "revision": "e4d03bcdcdf28188c64cdf8f0be0975b"
  },
  {
    "url": "assets/js/11.507d02a4.js",
    "revision": "a90a53471cdaedaa2ba4c61d08dd7420"
  },
  {
    "url": "assets/js/12.de797011.js",
    "revision": "2d7e70f829963fe5f04c9a361788674b"
  },
  {
    "url": "assets/js/13.08bee036.js",
    "revision": "44a1a4a0775fc4e408e2efade909d335"
  },
  {
    "url": "assets/js/14.6898f39a.js",
    "revision": "7cea89a443db94e4dc0cca9394561bc0"
  },
  {
    "url": "assets/js/15.a754b933.js",
    "revision": "44ed829c7a29407ee912243dc12f8c81"
  },
  {
    "url": "assets/js/16.59aea30a.js",
    "revision": "6364394d83a74d68e1c5bd8efb6cffa7"
  },
  {
    "url": "assets/js/17.7b59b630.js",
    "revision": "263448d3311ad5f22ef1d44e288ffd61"
  },
  {
    "url": "assets/js/18.6d911545.js",
    "revision": "d57721e97a8b89e5e5c5e1072ef921c0"
  },
  {
    "url": "assets/js/19.82fc97ea.js",
    "revision": "586a01263fc2ad1228ff86afccc0f7f6"
  },
  {
    "url": "assets/js/20.f5284a67.js",
    "revision": "51f9ed74a460daf72b37d8c0d380ed4b"
  },
  {
    "url": "assets/js/21.9b2d7016.js",
    "revision": "2d56c13217eb62369148d081001e6078"
  },
  {
    "url": "assets/js/22.015874b1.js",
    "revision": "d6484fc64bccc130761fc2311402e92d"
  },
  {
    "url": "assets/js/3.55448fd8.js",
    "revision": "86ec0bb934eeaa535d3e1a60d63e3ba1"
  },
  {
    "url": "assets/js/4.5c1668e4.js",
    "revision": "5f47de82ed7438ad30d708754748fc84"
  },
  {
    "url": "assets/js/5.1ff24644.js",
    "revision": "0698df4420524c9e9466551191a36733"
  },
  {
    "url": "assets/js/6.fb91134b.js",
    "revision": "44b20754def8488a6b1e6b596983b6bd"
  },
  {
    "url": "assets/js/7.80ae3c60.js",
    "revision": "6f3a6defd47836cf0feb409b2ac1e5db"
  },
  {
    "url": "assets/js/8.2ddb8f67.js",
    "revision": "4c0d2d1775610cbe193a4c2e7adecc9f"
  },
  {
    "url": "assets/js/9.0e9bad2c.js",
    "revision": "992659aef4100d0aa4407aff5c4329a7"
  },
  {
    "url": "assets/js/app.10edba34.js",
    "revision": "eab294b7c07cc67aa3e03d4bf2445219"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "ba673f1553255c79030b47d7d63f03c1"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "aaaa535cad35aeae4778fe580db70f33"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "5bc5c462b482e603b114f2ea59945f70"
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
    "revision": "71f588abc7c8abca0ad53256dc3bd2b0"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "03a8dee216746ad8aa7aaa2e2afc2cde"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "7e4c29065bfe12de4f570fcaac29ce52"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "ea3c63219dbdeff36ed399f8518ff0d1"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "2a28d59427a1013e046a90337cf3746a"
  },
  {
    "url": "tag/index.html",
    "revision": "6c2e71c19bd811fcbdcb77e25efd9f72"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f788b02e9b4b1851e5347dc6c30e7c90"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "8871c9b47dbc6bc3325d0cb8e217df06"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "1dbf7f316c8189c66d40a20a2c32e9a9"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "d5e3445afc8cddd61fd7868d5f8dcdef"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "cac2b5e2d9c80ed29df7fad20158abae"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "ce41243a0642e75797a177e715135099"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "1ff287ceb2908516bf2f0f9678ceed79"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "43cd3792f9c7d6a35966e7bc7a06eb1e"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "6968507118cbb44079064b592c17c98d"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "8f124753a05fe43fbf460dffbe9f4a35"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "498731221344843b6e48e126094efdd9"
  },
  {
    "url": "timeline/index.html",
    "revision": "10818628d84a26fc363bacfc19a56929"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "bfe1e271e801def3b568c7a5172da55a"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "aa8d7c7cef3a31d0852966309362ce00"
  },
  {
    "url": "views/Javascript/index.html",
    "revision": "104178d35c3864da81d00b9c27663cd2"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "9c79512df6f54937894c2873519b80da"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "2d6df50e61a56fc8b803f6dd0135f6cc"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "c91499da158ac2ace3b91c0432929ad3"
  },
  {
    "url": "views/system/index.html",
    "revision": "c172611a6ea45d3ba53f65b5c6ced85f"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "19d40affa173db90051fe89da3aba018"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "c8b75c42955502b70f78be61d2a8524e"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "713dcf2e7ed9b715c5ad7f7ac23851da"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "81d0acf7c53652af298f0c0e1cb41bbd"
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
