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
    "revision": "f015d0873d78af4acbe7605236b7ff16"
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
    "url": "assets/js/app.43c6cffd.js",
    "revision": "fc04e729b07bdb1435cc6f71b66bf8ba"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "b4a389ded9ceba0a87655a51c6110302"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "d7231a6894f36ea30a463788234f252a"
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
    "revision": "e8d92e82e5bb63793da92e9d4a378edb"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "b0b5a9e876fd232c7abb2e8bfb840861"
  },
  {
    "url": "tag/index.html",
    "revision": "7f8e5ce494a6eaddf2edfb3dd0e73088"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "8abbdf6518d0c06ad3c7ecb333a719c6"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "5912af064599362fedf30573c368497e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "eee0b50840683ab9d805d89c95f11093"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a6a1b5a6d06ebeebe0d10f93aa6d7d1"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "b3858243714e135d7091ab99155f1a57"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "241b39626a7460825bdb529a1899efd1"
  },
  {
    "url": "views/tools/CSSNavigation.html",
    "revision": "12027a62d3c8b8cab6d4ece9c8512d58"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "86144794b0d16778aed057d2a431b2f6"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "540c7ac4dfb0b98682d16cc7f4cca8d7"
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
