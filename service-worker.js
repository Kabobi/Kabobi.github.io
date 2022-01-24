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
    "revision": "0af3877ecccec390feba2ee6d7ffe90f"
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
    "url": "assets/js/app.6ec01e6a.js",
    "revision": "ff819b0729fef5ee5504702aacc1880f"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "d48a3f10781e1a324662559245c505b3"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "690c29a03dc3f12df44e69446399e37f"
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
    "revision": "27d6b4004db9c8e18c1454ae32bd5f36"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "e39487fbf8f39878895f4600081a2b3a"
  },
  {
    "url": "tag/index.html",
    "revision": "750d0d5f62b63e8b25c3dfcd2936c9bb"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "32efe0ddd5066b4dacdc27ed5ca2db29"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "0b57d8559875be341f806e9e09c1b49a"
  },
  {
    "url": "timeline/index.html",
    "revision": "48daff2e676bb6107d59818f85d96c2a"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "3da5c50f754c27b013b000ab5ed8fbd4"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "d2b81890484c2a0a4ef3d085ca3218f6"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "d83e9c514cc354bd2c2d42e369e60752"
  },
  {
    "url": "views/system/index.html",
    "revision": "16ee8c23db010cc742c29a6d3fc6b0d6"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "b0f685e0150aaf23cbf0671be18d6427"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "77e3d55c3221a62451d71a4d40e6162c"
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
