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
    "revision": "c0ed7a1bf7175ee2521b1d899a4f3de4"
  },
  {
    "url": "assets/css/0.styles.dd8806f5.css",
    "revision": "19b2a1d13ea6a4a85b2be56871a12b7b"
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
    "url": "assets/js/1.a57e0dc8.js",
    "revision": "8b4dd4aecc24b6e0098fd14f61711ef0"
  },
  {
    "url": "assets/js/10.12bc7b2a.js",
    "revision": "b70c8c854c10cab3636e01354204d50f"
  },
  {
    "url": "assets/js/11.6228a916.js",
    "revision": "23dffeab2ae171786526264d44cdfe35"
  },
  {
    "url": "assets/js/12.c366b791.js",
    "revision": "ee4cf4679d3e0c526e6c34dfd2b02230"
  },
  {
    "url": "assets/js/13.a6882220.js",
    "revision": "80498457624e7564c1369cfce56e64bf"
  },
  {
    "url": "assets/js/14.4d86da41.js",
    "revision": "5e75e40b638b0dcb64d33f4423934bab"
  },
  {
    "url": "assets/js/15.0cdbe1da.js",
    "revision": "e59c2bb472079bf127a0db7ee25290fb"
  },
  {
    "url": "assets/js/16.417f3703.js",
    "revision": "847e4003d0aaed6b95cbabee3b8d2144"
  },
  {
    "url": "assets/js/17.882f6392.js",
    "revision": "758218273e625d8a19483117f91c977f"
  },
  {
    "url": "assets/js/3.ace4edf7.js",
    "revision": "8182c9f57f0c3007f1b0e08356bdcda5"
  },
  {
    "url": "assets/js/4.9887779f.js",
    "revision": "3933192bbee125c0069ad0f0efae99fd"
  },
  {
    "url": "assets/js/5.a22ff2db.js",
    "revision": "a93e064d3768fb8f332577d93c68b3b5"
  },
  {
    "url": "assets/js/6.8facf461.js",
    "revision": "77089075e9691ffed31662ac0c0bb4c1"
  },
  {
    "url": "assets/js/7.dbe1f048.js",
    "revision": "f8b501a41fc325e18d4774ccb1568130"
  },
  {
    "url": "assets/js/8.404340f7.js",
    "revision": "85e7d0c3d232782f7a4633a7e5944708"
  },
  {
    "url": "assets/js/9.81756937.js",
    "revision": "980e457683275281d8e644d41e0368e8"
  },
  {
    "url": "assets/js/app.e6bf5dc5.js",
    "revision": "ef97f9d9c0843c1d12c07f5b716a1f6e"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "a6418ba1b3e944c1f9251029306b9297"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "574b433f6297b50966a3e724422f38c2"
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
    "revision": "7d0110e3174fec142886ae6fb57d2e10"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "b2939c3166e8027789b283d4455f6ff0"
  },
  {
    "url": "tag/index.html",
    "revision": "eaae3d5cd18efcc648579bfce1dc9a71"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "79a1ebae09ac3dcabcb7d2fdd08bde6d"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "5c3912309796b41e7296e0b2105df8df"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c96cb9969981dd4332c7cff85b5c824"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "64329d35cbb862be37c11eda8767e9c7"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "1da00d521160912b4ff306156856ea77"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "30d0bc2d0a12011cd9c65b4e09ccf10d"
  },
  {
    "url": "views/system/index.html",
    "revision": "f0f41be9b666ea3f616a6c39b8a95595"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "3d6ddb072944573d6feba10ebdba71cb"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "3e7a2a51bb92ab60a7812a75c6ad046e"
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
