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
    "revision": "48d374f42edb5aa9ee6934744d8d9555"
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
    "url": "assets/js/1.0be48f96.js",
    "revision": "4f9f609947760e67adae510f09e2fc11"
  },
  {
    "url": "assets/js/10.0c8a206e.js",
    "revision": "fe59bfb6c50b5e448ab5d24410eeb904"
  },
  {
    "url": "assets/js/11.bca6d19a.js",
    "revision": "8ad2805ff8084d634edc623df8e6cbd5"
  },
  {
    "url": "assets/js/12.1fa9759b.js",
    "revision": "ae734ce4a74206bb50f52c3d49be7000"
  },
  {
    "url": "assets/js/13.62d6849a.js",
    "revision": "59a3a37aac18d55b7ebc7090bcf4122b"
  },
  {
    "url": "assets/js/14.9e8868ec.js",
    "revision": "3e570793e29d9a8a8cf1508de7fabd47"
  },
  {
    "url": "assets/js/15.07520690.js",
    "revision": "6232993104f527b48a3be0308248b609"
  },
  {
    "url": "assets/js/16.c623108d.js",
    "revision": "ac594bc4e0288e815e3b9ce896145d88"
  },
  {
    "url": "assets/js/3.ff47f585.js",
    "revision": "2cab2ce74b8776ebbc1f7524fea72a68"
  },
  {
    "url": "assets/js/4.6c39f408.js",
    "revision": "6f19788c13e3123beb9748ba57afb666"
  },
  {
    "url": "assets/js/5.af61365f.js",
    "revision": "f21fda82ce943cc3994dbbdbe424e4bc"
  },
  {
    "url": "assets/js/6.4f4c3df5.js",
    "revision": "99bbaeac5c8930aeb931fd7a69f79fe1"
  },
  {
    "url": "assets/js/7.b7b696b4.js",
    "revision": "e59dee229a2f97a24be6533cc7d452e0"
  },
  {
    "url": "assets/js/8.61529a4a.js",
    "revision": "eec87ad1803973f01bda8055aa8135ef"
  },
  {
    "url": "assets/js/9.43aceaa7.js",
    "revision": "f03fd294ef4a36600b219b404a4cda5f"
  },
  {
    "url": "assets/js/app.7a20fca2.js",
    "revision": "637b5fb0211fa0bfccf36baa2cd620d9"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "8e7982acd41089e641311d90759cc9e4"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2973dc777945afcffa4ae6814227fc98"
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
    "revision": "081048acfbf1bd966bb40183bf603039"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "fcdd5a49f373590370898c93b2958130"
  },
  {
    "url": "tag/index.html",
    "revision": "2187a35a78d361b1e60d65de62751fc9"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "3bfc59de9ef5f927920d28a232dd4f6e"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "e80d0325cd8f19c177fe07321e90669b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d7cee73c5ccab06907a10980dd12f712"
  },
  {
    "url": "timeline/index.html",
    "revision": "a830854f39ca7d2d63e7cd8b26cf5582"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "372c50ae5d98e50363263a22045c20ce"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "1467bd0dab9007f5b784550f01ca3d59"
  },
  {
    "url": "views/tools/CSSNavigation.html",
    "revision": "d8d4ad81d6f2599ace20575500af4439"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "bd1a082c1d91cacde5d798d2cd148502"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "b1dc01493b8ad388908a51aa39975df2"
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
