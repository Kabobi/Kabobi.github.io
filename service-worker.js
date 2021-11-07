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
    "revision": "dce883096191f8273e20182ebc9e3a15"
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
    "url": "assets/js/app.750d459b.js",
    "revision": "b5b42adf90dc8f9605a3fd4e9e09c4e6"
  },
  {
    "url": "categories/index.html",
    "revision": "52dd2e15613851563a1dfe373e64cca2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b79a4937b059eee97985d5fe592d4384"
  },
  {
    "url": "index.html",
    "revision": "8958cede375343be8f86fdadecceb743"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "8cd5cbd15926936bdae1591011600ca1"
  },
  {
    "url": "tag/index.html",
    "revision": "7555b0c27580dd5b3ec1bdb7e4f8f9e2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "70db06196d6c055f2245b5c94a792a7f"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "e0d1fa88ffcebac32e85c14bcdd5876d"
  },
  {
    "url": "timeline/index.html",
    "revision": "56b8ca82fe302149e352aa9a5b833b26"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "b63f8795e7746a7698195fb777d782ca"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "7709dd724ffb3c0fdbee7c24ca17c24a"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "0bf1479816786cf6bb2d20edc2405fd0"
  },
  {
    "url": "views/system/index.html",
    "revision": "758b3f7cdd149b97158344ce10b66052"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "7bf4b6a409d743a3dbec130e4e466cff"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "cb67493f854b9561858bdbfdbcb98d91"
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
