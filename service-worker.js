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
    "revision": "077579f784c8b01a414257e9b9c7214c"
  },
  {
    "url": "assets/css/0.styles.6429295e.css",
    "revision": "10e494ad9e95ac37990cd0720cd58d46"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.866f9a01.js",
    "revision": "04d99631ec7b3a440b905dd15e5d9d07"
  },
  {
    "url": "assets/js/10.a5e20991.js",
    "revision": "951bda550cf183aec15fdd0e5b91bb3d"
  },
  {
    "url": "assets/js/11.8ee4803e.js",
    "revision": "f7767d75e9b4f0952b22ed0134b36bfe"
  },
  {
    "url": "assets/js/12.08a3863b.js",
    "revision": "b95688af01c1e80a297584725e1ecb18"
  },
  {
    "url": "assets/js/13.49d4d2f1.js",
    "revision": "37ada4069fd0c09afdd9d2dbbf89221d"
  },
  {
    "url": "assets/js/14.c13c22c8.js",
    "revision": "5de2233b6781d4f9c45e23d611bb43a0"
  },
  {
    "url": "assets/js/15.e16b4668.js",
    "revision": "8ba7a1b9b66c78849f9b8d491a349d01"
  },
  {
    "url": "assets/js/16.c6eda7bf.js",
    "revision": "28b30f4fe0a6e0a781313fa781ab95b4"
  },
  {
    "url": "assets/js/17.6c15ac16.js",
    "revision": "3f224839c54f77fd7125ccc16308bf62"
  },
  {
    "url": "assets/js/3.8dfc1a57.js",
    "revision": "89b81a5616d1bdbf8b1a2c47d84d7417"
  },
  {
    "url": "assets/js/4.c62bcc32.js",
    "revision": "a66ccffe437c2dfd67d2ab2bb5beedb1"
  },
  {
    "url": "assets/js/5.b4177c31.js",
    "revision": "c7a74938bdb25daa132cac124764b52e"
  },
  {
    "url": "assets/js/6.245e9ebc.js",
    "revision": "ad72f938a9b0607ddfcb656cbbb43ca9"
  },
  {
    "url": "assets/js/7.ab9fcdf3.js",
    "revision": "321f6704778f162f64b62759b0772a6c"
  },
  {
    "url": "assets/js/8.0d17dfac.js",
    "revision": "32ac05e0f73687a2866a787a8afca87e"
  },
  {
    "url": "assets/js/9.90419b02.js",
    "revision": "bce751724b3f603b959cc6678fd07170"
  },
  {
    "url": "assets/js/app.04f4db82.js",
    "revision": "bf92c259b10007545fb556a7150ab251"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "97efc9139d02587e37edfbe75b80225d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a43cc08585e08e33041cca4a47b6b032"
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
    "revision": "39f6d59a13cafc338055b48864bec7c8"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "9f7cba91123b5e979901eefa21cddcc7"
  },
  {
    "url": "tag/index.html",
    "revision": "642989af074becd231b40e926aa9b390"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f49480b57054b1ab9faa34d3d6742c95"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "1a748c49729dd53528c910d1153a41ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "65772593e53cec2b0d86b56088e862d6"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "dce894d6f63d4b54a94d629ec68fc763"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "04370dfdecebb01b140b5c397ecc5a7e"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "8dc3b7d096656cae9e537956c700793c"
  },
  {
    "url": "views/system/index.html",
    "revision": "204695fc545dca578030555c280802ee"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "d7936cd56b5ea810ba12d87ec5eec32b"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "68e183cbd03fdef9886593a893b09f75"
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
