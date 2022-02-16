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
    "revision": "4d17c7c620c6e457d4ab2c6a9b9abe0c"
  },
  {
    "url": "assets/css/0.styles.19032f83.css",
    "revision": "145916616f5f0aae6529242e9d58bfb4"
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
    "url": "assets/js/1.d9e51e19.js",
    "revision": "78c0109e3caf3787b22d63b0b62e0eaf"
  },
  {
    "url": "assets/js/10.db9652ae.js",
    "revision": "3ac604ddf084584832cf0632cc2ee1d8"
  },
  {
    "url": "assets/js/11.69bd7f3f.js",
    "revision": "a90a53471cdaedaa2ba4c61d08dd7420"
  },
  {
    "url": "assets/js/12.bc1907f1.js",
    "revision": "29b9075eaa8f3311719ce2b616df051f"
  },
  {
    "url": "assets/js/13.0c80f3f8.js",
    "revision": "b07a4dcda824a65611c79fe98b4ff630"
  },
  {
    "url": "assets/js/14.a250262f.js",
    "revision": "78d5a0b2416cc055658d82c331d0c434"
  },
  {
    "url": "assets/js/15.b5d02f7d.js",
    "revision": "26b04485f6f145a83bae7814240e7fd4"
  },
  {
    "url": "assets/js/16.ef12079a.js",
    "revision": "c44d4f49f0c3806f64d0b1f9d0243041"
  },
  {
    "url": "assets/js/17.5e3c32f1.js",
    "revision": "95a6983a7b9ea2d4da2c125bce94dffe"
  },
  {
    "url": "assets/js/3.052bc3b6.js",
    "revision": "86ec0bb934eeaa535d3e1a60d63e3ba1"
  },
  {
    "url": "assets/js/4.a46b0897.js",
    "revision": "5f47de82ed7438ad30d708754748fc84"
  },
  {
    "url": "assets/js/5.0f4fa4d2.js",
    "revision": "0698df4420524c9e9466551191a36733"
  },
  {
    "url": "assets/js/6.7c59845d.js",
    "revision": "44b20754def8488a6b1e6b596983b6bd"
  },
  {
    "url": "assets/js/7.97269583.js",
    "revision": "6f3a6defd47836cf0feb409b2ac1e5db"
  },
  {
    "url": "assets/js/8.27c35286.js",
    "revision": "4c0d2d1775610cbe193a4c2e7adecc9f"
  },
  {
    "url": "assets/js/9.f23313ef.js",
    "revision": "2719e1c72ef19a03ae9df94ab37c2406"
  },
  {
    "url": "assets/js/app.e79a9620.js",
    "revision": "e87f410af25fe7cb4dc9e5d8ad0a1352"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "393d4c6f8d2eb3378e6ae31ea1925495"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "86b9e238830ad9c92c28f88aa6afa4cf"
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
    "revision": "987567c3980a77969643fe996f2f9e41"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "7c3fb3be57ed65d7c8d8e05c26a98fa9"
  },
  {
    "url": "tag/index.html",
    "revision": "c3fb315d37e271035204776892b0e32f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2821459eebc9d20216ff11387720e8ca"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "05d9af891557d12c07d82955b118f952"
  },
  {
    "url": "timeline/index.html",
    "revision": "de39295f4e09d46c1261dec972e60d2d"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "ab79732b62bc62c65384300194c54266"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "cd7f48840920dcaaabea23ef9f7e35b1"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "5c91d8cc22a36542dd743acf29e8649c"
  },
  {
    "url": "views/system/index.html",
    "revision": "bc161598d2a1c35e5e953712d4ff4086"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "ec1f035de74e6482668ec4177957a881"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "c4970345927ca695f0f86c8397558666"
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
