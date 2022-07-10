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
    "revision": "b18f0f9bc275e71e922e3afa36438466"
  },
  {
    "url": "assets/css/0.styles.88c5fdfd.css",
    "revision": "48cfdca68b5f61b7571bac54236f672a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.dd5e16fc.js",
    "revision": "4f9f609947760e67adae510f09e2fc11"
  },
  {
    "url": "assets/js/10.282e41e5.js",
    "revision": "fe59bfb6c50b5e448ab5d24410eeb904"
  },
  {
    "url": "assets/js/11.3c25b984.js",
    "revision": "8ad2805ff8084d634edc623df8e6cbd5"
  },
  {
    "url": "assets/js/12.f5addf0a.js",
    "revision": "ae734ce4a74206bb50f52c3d49be7000"
  },
  {
    "url": "assets/js/13.55972edd.js",
    "revision": "3d29c23800bc6707113dfc8c321e101c"
  },
  {
    "url": "assets/js/14.b894f980.js",
    "revision": "80f53a3b87dc17f05abd435d91a8fcb0"
  },
  {
    "url": "assets/js/15.d568fa2b.js",
    "revision": "aed2c833e93444d5a966ee4b856478a0"
  },
  {
    "url": "assets/js/16.0a4df2e4.js",
    "revision": "ac594bc4e0288e815e3b9ce896145d88"
  },
  {
    "url": "assets/js/3.691b5d62.js",
    "revision": "2cab2ce74b8776ebbc1f7524fea72a68"
  },
  {
    "url": "assets/js/4.7b41e409.js",
    "revision": "6f19788c13e3123beb9748ba57afb666"
  },
  {
    "url": "assets/js/5.6e88997e.js",
    "revision": "f21fda82ce943cc3994dbbdbe424e4bc"
  },
  {
    "url": "assets/js/6.4e21e820.js",
    "revision": "99bbaeac5c8930aeb931fd7a69f79fe1"
  },
  {
    "url": "assets/js/7.cd0daaf1.js",
    "revision": "e59dee229a2f97a24be6533cc7d452e0"
  },
  {
    "url": "assets/js/8.2f1b4ebe.js",
    "revision": "eec87ad1803973f01bda8055aa8135ef"
  },
  {
    "url": "assets/js/9.43aceaa7.js",
    "revision": "f03fd294ef4a36600b219b404a4cda5f"
  },
  {
    "url": "assets/js/app.2b2d5686.js",
    "revision": "edc4a969dc317d55d34e773b4580a977"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "f8c184ae193f5007ec733914b9cc2e3e"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "7ca08ed2c01c0f558054f5c98d4151be"
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
    "revision": "0c0a75648e34df0d1684d0792b86d44b"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "d4a6b75d930ec651d2ae8d94ee9531f8"
  },
  {
    "url": "tag/index.html",
    "revision": "7f1031982f80ff1414f0be5f7f6020f1"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "0892469b66527d4e2257084503959051"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "7318620dd0f48c6915962b75e4455327"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "71df4887b70552341b7deb3ebf0ab064"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c43f844f4951bcac44a78da048e7805"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "4d5b6203c7a8bc22d4554c21e6af9fb4"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "0fd411a62a076b69e3801233057832b9"
  },
  {
    "url": "views/tools/CSSNavigation.html",
    "revision": "36a8944cb529e70762162a2cd4528264"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "5de7e228f125efd190444faec3a35d8b"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "c8b1d5e09c4c60b395ab4b2d2ea4645c"
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
