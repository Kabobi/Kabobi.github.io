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
    "revision": "e10d563ac080b766116c73dbee99ec40"
  },
  {
    "url": "assets/css/0.styles.dfbb5472.css",
    "revision": "85bfdf181c6750e3b2c855912dbcb9eb"
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
    "url": "assets/js/1.4c907f60.js",
    "revision": "a98ca471028baf35f83ca9a592028928"
  },
  {
    "url": "assets/js/10.b149c024.js",
    "revision": "8b49c1854eadfc1fd9cf69b24976d148"
  },
  {
    "url": "assets/js/11.bf0c11bd.js",
    "revision": "a6deee12434f70235c21338405a451fe"
  },
  {
    "url": "assets/js/12.a22917cf.js",
    "revision": "9388cfd859e4a8f41ea942fe650b5e6a"
  },
  {
    "url": "assets/js/13.8c6e5147.js",
    "revision": "c2275d737bc6399299d17d6e025ad1a0"
  },
  {
    "url": "assets/js/14.79e3c9ba.js",
    "revision": "604f72a11d8cbe141d32d8487e53589d"
  },
  {
    "url": "assets/js/15.b02d94c8.js",
    "revision": "0e196aa1e69c86f1fdf6e0a193fb278e"
  },
  {
    "url": "assets/js/16.c3d14f28.js",
    "revision": "949989e1db50b5434bef5c8c6da97ad7"
  },
  {
    "url": "assets/js/3.888b0506.js",
    "revision": "3b1fec237027b85ea2fe1ed966a67996"
  },
  {
    "url": "assets/js/4.2720b73b.js",
    "revision": "69eae708175291468c8de0a33bc99c60"
  },
  {
    "url": "assets/js/5.be74cc46.js",
    "revision": "24805f6685c7328d9a27f9cc62f30803"
  },
  {
    "url": "assets/js/6.b679e12f.js",
    "revision": "34fbe7737e681e2db96fd5414e6d4445"
  },
  {
    "url": "assets/js/7.12e20a87.js",
    "revision": "95369614139ec61bbc9c1c9ac34bde76"
  },
  {
    "url": "assets/js/8.bbde04b3.js",
    "revision": "f50638b249c3ce29070b84525e41e7a4"
  },
  {
    "url": "assets/js/9.5b52de7b.js",
    "revision": "42dbbf3d5e7c969567b013eb0de0f110"
  },
  {
    "url": "assets/js/app.89f3afb1.js",
    "revision": "3921e72aede6e3858ff167360e2c4a0b"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "c0e022943dba9b902cbcce7954bdd3fe"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "7e34c75765b8c14660f081b451b44df6"
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
    "revision": "4b9f60c0d46bbd518077835b6a265f6b"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "e150f442f7085d0a113530c16082f956"
  },
  {
    "url": "tag/index.html",
    "revision": "be7da6a23e2fb37534a77d17d4149d68"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "627ff23bdb48375216c47c15e5f011fb"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "453388b398c3bf4318ed1fd5383da5ae"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d2d6bc9da84bf692a8c5a57af182ee97"
  },
  {
    "url": "timeline/index.html",
    "revision": "3db51d8a0544efa96e935d1f3e9e48cf"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "6fb83f7de6d90214682ebd453f6a462b"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "d27edc5394dedd2eee5011e8c51bd041"
  },
  {
    "url": "views/tools/CSSNavigation.html",
    "revision": "f780bde4d7f06d16967875b36644232d"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "22245904e4a891b23ff362d35e93a252"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "6415486971f58aa5c30d96b1effb3a89"
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
