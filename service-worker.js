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
    "revision": "bcf678d801ee26ad84f8f0e7ce1cedde"
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
    "url": "assets/js/13.42f4340e.js",
    "revision": "dbd0c5df533902829a5b6a8b3bb2583c"
  },
  {
    "url": "assets/js/14.dc0682c8.js",
    "revision": "2debdf6232a9be6546b1761befc8fd8d"
  },
  {
    "url": "assets/js/15.172cd1d1.js",
    "revision": "0e196aa1e69c86f1fdf6e0a193fb278e"
  },
  {
    "url": "assets/js/16.02903e52.js",
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
    "url": "assets/js/app.c6f023c9.js",
    "revision": "05bad5fb72f9bfe7e516e9b912378ba9"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "1d4f219b7bd8b4ae44b6fbcc2f727f1d"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "faf4872f095aa718e2790d34907622db"
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
    "revision": "abc92d9d94c364674727e4e5d63d9159"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "7d60a4ef68beb3b68adc706802bcee93"
  },
  {
    "url": "tag/css/index.html",
    "revision": "508e5c22e14b32183b76776eb7c6830d"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "cda85e81043d6f92be2da61d338dd625"
  },
  {
    "url": "tag/index.html",
    "revision": "795a920d8fa4cc86bcf95f4cc28e2221"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "c8aeecec49f4d14d35722a25b399cfe4"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "55c04dd685c6cd1c907bf3a4791b995b"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "789e99409159ac98d180dfb12a017fda"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "c573b71c0e329254723f04f11f576d14"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "1e2424d9f37e710ddd4d5e6bf46a0937"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "76bd494a324913d57d6f25aea50895c7"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "802fd683640d62958839f578f8d0c133"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "95fa96192a41dfd841ceb3f58333cd03"
  },
  {
    "url": "timeline/index.html",
    "revision": "def5e461aad154d34cd49f068af8fcb3"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "17b26f92b90603fe784de92ec9b454e8"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "52bec7a2d064cb0ddef0219f8ad68d40"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "231e02063d1bcb79539d0da0deb87d0b"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "b7b42f039514ac8fe92d4a9be461b4a0"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "85cd18fe6c83784e0a124f65e9dbbb94"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "edf4236b55c2b79ccd70c1268e014c63"
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
