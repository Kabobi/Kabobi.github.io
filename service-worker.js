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
    "revision": "45fb18cbc991a077c1ad87f42a415fe1"
  },
  {
    "url": "assets/css/0.styles.19032f83.css",
    "revision": "145916616f5f0aae6529242e9d58bfb4"
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
    "url": "assets/js/1.d9e51e19.js",
    "revision": "78c0109e3caf3787b22d63b0b62e0eaf"
  },
  {
    "url": "assets/js/10.5e62609f.js",
    "revision": "1e1f19bee8ee6b970fdecedaac08ba31"
  },
  {
    "url": "assets/js/11.69bd7f3f.js",
    "revision": "a90a53471cdaedaa2ba4c61d08dd7420"
  },
  {
    "url": "assets/js/12.98d0d307.js",
    "revision": "2d7e70f829963fe5f04c9a361788674b"
  },
  {
    "url": "assets/js/13.81611c05.js",
    "revision": "e4e6d62d7bbc7cde7bce615d3a43e67d"
  },
  {
    "url": "assets/js/14.7fc9726f.js",
    "revision": "7cea89a443db94e4dc0cca9394561bc0"
  },
  {
    "url": "assets/js/15.110cc490.js",
    "revision": "44ed829c7a29407ee912243dc12f8c81"
  },
  {
    "url": "assets/js/16.18b277d7.js",
    "revision": "e06fc8a6c0ba5d540a5413144f08d6d4"
  },
  {
    "url": "assets/js/17.abed226b.js",
    "revision": "c6ce3022480d7f03b9d5fcce806dc8b8"
  },
  {
    "url": "assets/js/18.ef4a582b.js",
    "revision": "a4ef6b901c2c5662948f2a8a3bd7bab4"
  },
  {
    "url": "assets/js/19.7bd3e7d5.js",
    "revision": "5a59fb1e032c2ad4e366f4e6c746147f"
  },
  {
    "url": "assets/js/20.37b14ad3.js",
    "revision": "fae70b4f657c5ddb9b35c44ab11024ce"
  },
  {
    "url": "assets/js/21.7ea95262.js",
    "revision": "db193c61c5195ef3d1df13c077cb7062"
  },
  {
    "url": "assets/js/3.052bc3b6.js",
    "revision": "86ec0bb934eeaa535d3e1a60d63e3ba1"
  },
  {
    "url": "assets/js/4.a46b0897.js",
    "revision": "5f47de82ed7438ad30d708754748fc84"
  },
  {
    "url": "assets/js/5.0f4fa4d2.js",
    "revision": "0698df4420524c9e9466551191a36733"
  },
  {
    "url": "assets/js/6.7c59845d.js",
    "revision": "44b20754def8488a6b1e6b596983b6bd"
  },
  {
    "url": "assets/js/7.97269583.js",
    "revision": "6f3a6defd47836cf0feb409b2ac1e5db"
  },
  {
    "url": "assets/js/8.27c35286.js",
    "revision": "4c0d2d1775610cbe193a4c2e7adecc9f"
  },
  {
    "url": "assets/js/9.f94dc2de.js",
    "revision": "d8df78347bb85135c9c6ab1de1539ae1"
  },
  {
    "url": "assets/js/app.8f6fb49c.js",
    "revision": "8f313089980c1b1fb7864d022f58c541"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "c92239b75f11801e391f7ecf5a729c10"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "cd204ca1e077c0696d7d8bc804a627c4"
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
    "revision": "bc6a0c90a580c7e983823ddf5692d0d9"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "a34968b9f47c76edc9a209b9ab81127c"
  },
  {
    "url": "tag/index.html",
    "revision": "6b1accc336f64c910d0d354106687ddc"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "465b5768621e9eaae3329231de887378"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "a2c0f0a3d3735cf40641ca8529db4379"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "3771e609a58317a2074c5797fde8c51b"
  },
  {
    "url": "timeline/index.html",
    "revision": "13940872f104677334d8bb0aafe5d037"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "d1b391831901cf066594f33b68d99430"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "077d499a3922ca0298275695f6605e0f"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "e4008d34fda9e0c03efce45705562f14"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "9b11e3abfd58be2c26dff2ca5082569c"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "16385feda043d575a1d31dfba1d61dc3"
  },
  {
    "url": "views/system/index.html",
    "revision": "b81faf0066cfcb144dc3b4d17189db4b"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "ca77c74256592d7ee37e02ae63f49187"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "f22580b286f5210946084cf998b67e0e"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "8414d11fc677b76a76e4c2ce109707cd"
  },
  {
    "url": "views/webpack/index.html",
    "revision": "27002ea0eceb9f25c809fd0c32cde2d1"
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
