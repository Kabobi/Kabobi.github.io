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
    "revision": "7710ff35bfdd75744fadbb31085eaa9d"
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
    "url": "assets/js/10.bc9c11c8.js",
    "revision": "3f201671da186b25f4bb3110dc766c3e"
  },
  {
    "url": "assets/js/11.bf0c11bd.js",
    "revision": "a6deee12434f70235c21338405a451fe"
  },
  {
    "url": "assets/js/12.74900113.js",
    "revision": "021a68d01defa84230d10ece5bbd1ec4"
  },
  {
    "url": "assets/js/13.8c6e5147.js",
    "revision": "c2275d737bc6399299d17d6e025ad1a0"
  },
  {
    "url": "assets/js/14.92507a7a.js",
    "revision": "1a6fbdf8bdb3ae9991da5ca4203976cf"
  },
  {
    "url": "assets/js/15.b02d94c8.js",
    "revision": "0e196aa1e69c86f1fdf6e0a193fb278e"
  },
  {
    "url": "assets/js/16.96392b13.js",
    "revision": "565f568d4d9a9f56ed4b5704b1aa2217"
  },
  {
    "url": "assets/js/17.90e82bc9.js",
    "revision": "ac34dd6ce735801528ab51318469ab51"
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
    "url": "assets/js/app.cf12baf1.js",
    "revision": "a36f2b6f7cc614b68737fce50a208ab0"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "ae14103e83ac2da6537ffaa4221a5d36"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "ac7a0d28319f5f59a8b21d4747bf0cf2"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "771acc9ad62cfdc61ea0e3477e48c44d"
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
    "revision": "36e5e51ac14f837df568d2c15329b45f"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "2de899378173c65a5b77570190cb6a1c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ec851675c65a71ad017ea1dae1a7beef"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "0d2ba0a8b2f12d1cf39f25e32dcb45fd"
  },
  {
    "url": "tag/index.html",
    "revision": "f11532b71fa88d95e6bd5e2e06b191ca"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "19f2aa04e3bcf9cc36314bf826450ecf"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "0bfdd03a021c16d89326baa6d7a3e0b0"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "b132a3ce6a7428e0d0f1aacfcce6ac1a"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "3e70b8f0bde71ea11e09ae455b099e87"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "64c991f785dad23156c2b9564bb1d23b"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e46fcc187e01d6cbfc5c5d5210e65606"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "32334a072ba111c380245aebb03eb9b4"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "730de2e1bf9b8707d67c70677c18aa0d"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba308c9403f6961f30822b17e8f099d0"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "069fd1a843db0558f0dbc0bbaeb4c9c6"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "ea77f0401b7d96e734e21989fcb2005b"
  },
  {
    "url": "views/tools/CSSNavigation.html",
    "revision": "e5f0688324e42cb6c2fab428a1dc737e"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "ab179910381c99d8367a5911b80d8c9a"
  },
  {
    "url": "views/tools/VscodeSetting.html",
    "revision": "5f4e3931ce09d96961b6f9dcee7106e1"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "25be8986a37b94a14b3cac3d11e01c63"
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
