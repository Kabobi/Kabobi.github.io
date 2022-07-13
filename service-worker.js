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
    "revision": "3348509c3cd52f6189231b5cfe099e17"
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
    "url": "assets/js/12.4ad79ab2.js",
    "revision": "8cb67150eb0def8afcc624e83354a09b"
  },
  {
    "url": "assets/js/13.c8f96866.js",
    "revision": "fa470668288fa1c8abcaf863fdc4e2cb"
  },
  {
    "url": "assets/js/14.a2fb0993.js",
    "revision": "a9bed2e4bb3ec3ffabb05f7b5b3892bb"
  },
  {
    "url": "assets/js/15.bdf06d3f.js",
    "revision": "2e4973882d1b483b786f179e44860fe0"
  },
  {
    "url": "assets/js/16.288d9873.js",
    "revision": "41bf656a46a8d7cf7d3299f5b8d40e38"
  },
  {
    "url": "assets/js/17.623f534c.js",
    "revision": "a163a512492e66d357c89b77eeab1edc"
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
    "url": "assets/js/9.aa31d89e.js",
    "revision": "ea551e44d5ff038d157b3fa878138836"
  },
  {
    "url": "assets/js/app.af877fa0.js",
    "revision": "f20a5883ae85a37e7bfa16af1f75e382"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "0e935e285f3164a42e9d805d215048fc"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "6e6613e09740c4345988048debf380a8"
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
    "revision": "1f88232632c43b675080c610bc8a3926"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "c83db8d72bcb7c66f74448c1f7187108"
  },
  {
    "url": "tag/css/index.html",
    "revision": "aa31d754b5a08b26919edf0ae4695353"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "8ae8355bc9c5ddeb96049fce8cc59fef"
  },
  {
    "url": "tag/index.html",
    "revision": "b5745e5188718b5b10b3ee2bedc8757d"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "16e780008f9c63b80b62e453eb5097e5"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "7d2f58e10edd38fec25d4c45044bb271"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "40560512752ff7ac140daa63e2ee68d1"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "d479f9eebf4601ff0c83d0da4e575c32"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "e718eef4434aa928c69bd6a6a7beaab5"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8e0fe472d3d24ae5436ebb489b1252b5"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "5df5ef40bb2909706bacf38a19ebf9a3"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "46f0e6f905fa0a4f980d13a79f97a260"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f1c601104539da10a4e6a5d664b3359"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "7baa4bdb11a49630ae73a6c5f248497b"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "0778a84097677937ab798ae120fa7ba8"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "eacb75df57d9a8210ffd9adf1133403d"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "cada5d30b2a7c96cdeb63fd3eceeda2f"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "a40fc4460bfaea850eea3b58b9f85963"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "b4cbfc2398b22ca0890a31607f1c7f58"
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
