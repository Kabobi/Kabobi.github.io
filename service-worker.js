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
    "revision": "e56a65e66bfe3ad769e445a4b76ae0db"
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
    "url": "assets/js/13.abcc6378.js",
    "revision": "1b42a1ef9391d96bda20b716dfad0a04"
  },
  {
    "url": "assets/js/14.f8217078.js",
    "revision": "9bce60cde9cd8228bec9dab1b2b3b3ff"
  },
  {
    "url": "assets/js/15.cf081572.js",
    "revision": "3bf56f9f29215802162126443468ae99"
  },
  {
    "url": "assets/js/16.c58dceaa.js",
    "revision": "96c4c156d7b681e52c8636f9a7fc3db7"
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
    "url": "assets/js/app.2724f998.js",
    "revision": "6a3750fda439ae09ff0dc2a4a14f740b"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "739247902d059a394f484c9c3bbf171c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "99e975c74e144dd9f679be4eb632476f"
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
    "revision": "bdb725dfa910b636aa387fa8ac70ae17"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "5c340b9e045f330c96558818a0bf4c84"
  },
  {
    "url": "tag/index.html",
    "revision": "0569966a2e1083126345600d204c6840"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3c4dbb9fe61cb265b6bf8a9d0329c3d8"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "f9ef84ae96d1560bc5e2418f3ac475ff"
  },
  {
    "url": "timeline/index.html",
    "revision": "ae857f891ae3c9d835056897d1579ce9"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "c18e9a002e1219d1b951370b9f57b03c"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "61d14a0535bd27c22b94a169db110910"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "3183535f1e6384591806f3538aa7016e"
  },
  {
    "url": "views/system/index.html",
    "revision": "4b40a8e3a5301aed9aef3666feca6d6f"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "33f1f44a22cc050cd02dde24076fb8e1"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "c7f5dd9b8aba25b6f18775f6728dc6de"
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
