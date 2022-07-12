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
    "revision": "8de0502ff119cf0ce7f7177f029c1cd8"
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
    "url": "assets/js/15.cbe2c591.js",
    "revision": "bd85dae85321225592996e186b3c7593"
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
    "url": "assets/js/app.5e75d623.js",
    "revision": "10137a102126f1380a9d299d06e7c4c2"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "7ed19bfbf81d90a69fd7acf7c1cac87a"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "6095e9eb95409186c8a32e76555d1fb6"
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
    "revision": "86976f695dba1bffe229a9c6b00a24f2"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "e105933aefe4bc369558e703263ff0f0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0ffdc736a9b2edd58551628ade27267b"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "61834164cc5f3c67e9c52014e2c477b9"
  },
  {
    "url": "tag/index.html",
    "revision": "bc6f02b33578a58ed757ec13a982a736"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "3aa81e6470772e6f066fe65dc020535f"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "e2f7cd77caf026fd7d8e38f8a3a02549"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "53700ec4783072323fb0b8ccbb43814a"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "ca3c66686bf3b3b1c450a759ec2492a2"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ea0e9dc88e4fafc5fac69bdcd6376d0c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "3439d0c054fde06d718215c8a8683b6b"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "7f3b744df1a9ecee3d5f491092cb9e4a"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "fa0e3e64e507203df3254b97e57b1906"
  },
  {
    "url": "timeline/index.html",
    "revision": "10d963c4ed562f022447f2b000966db6"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "450c3cf0ef54ffc22fe33816b70829d3"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "de916dc531efb0bd236ee241af552c99"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "28177eb5a675a7bf45c5120401d1dded"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "68afb72ca8daf9bfe41f06e8e12b6b83"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "5f84ad155860145edf84cefed6c9ef13"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "71537c20bc34b922cf64d9e18b45fd60"
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
