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
    "revision": "711ffd855a3ee87ee6fd34eeed4dbfd3"
  },
  {
    "url": "assets/css/0.styles.d7def4f7.css",
    "revision": "bc557e961473e905f0f43c61cbae8598"
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
    "url": "assets/js/1.0877e0c3.js",
    "revision": "78c0109e3caf3787b22d63b0b62e0eaf"
  },
  {
    "url": "assets/js/10.5e62609f.js",
    "revision": "1e1f19bee8ee6b970fdecedaac08ba31"
  },
  {
    "url": "assets/js/11.91c0eee2.js",
    "revision": "01cdc0eaedb93aa0c810911d227f8302"
  },
  {
    "url": "assets/js/12.56e72422.js",
    "revision": "13ceec99474f6d102a9cfe40b319192e"
  },
  {
    "url": "assets/js/13.0c46e8f1.js",
    "revision": "f2acf63f78c3e0d5e5df4df3d3da7816"
  },
  {
    "url": "assets/js/14.5d647fa0.js",
    "revision": "7e92d881bb4704e605229b0284dde22e"
  },
  {
    "url": "assets/js/15.941595ad.js",
    "revision": "ab815793a3b2a6733f0778fff2869a40"
  },
  {
    "url": "assets/js/16.99baadc6.js",
    "revision": "cc59b79381b9b2eb975300bb16512ecc"
  },
  {
    "url": "assets/js/17.ff1d9ed0.js",
    "revision": "65f10b4fbbc10377ed7e883b1dcef741"
  },
  {
    "url": "assets/js/18.055a4771.js",
    "revision": "845c40003e571a0839b895b143094b39"
  },
  {
    "url": "assets/js/19.9ed759d3.js",
    "revision": "81b4a1437122b6b992ae23bd1cd41922"
  },
  {
    "url": "assets/js/20.de098ee9.js",
    "revision": "e4a428f5e30794a103841e3a1586d365"
  },
  {
    "url": "assets/js/21.905199ac.js",
    "revision": "db193c61c5195ef3d1df13c077cb7062"
  },
  {
    "url": "assets/js/3.712db998.js",
    "revision": "86ec0bb934eeaa535d3e1a60d63e3ba1"
  },
  {
    "url": "assets/js/4.688b72f5.js",
    "revision": "5f47de82ed7438ad30d708754748fc84"
  },
  {
    "url": "assets/js/5.f8139fb5.js",
    "revision": "0698df4420524c9e9466551191a36733"
  },
  {
    "url": "assets/js/6.e8f36e47.js",
    "revision": "44b20754def8488a6b1e6b596983b6bd"
  },
  {
    "url": "assets/js/7.91cbddd9.js",
    "revision": "6f3a6defd47836cf0feb409b2ac1e5db"
  },
  {
    "url": "assets/js/8.c94de772.js",
    "revision": "4c0d2d1775610cbe193a4c2e7adecc9f"
  },
  {
    "url": "assets/js/9.1b9838c6.js",
    "revision": "d8df78347bb85135c9c6ab1de1539ae1"
  },
  {
    "url": "assets/js/app.bca0d8a5.js",
    "revision": "88aefd6122463d353518d0b7ae310ee6"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "7a9fd22a9537df66f1df00084c608425"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "b95add55dd1fda4584663f121667f8db"
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
    "revision": "bf1ca3f74fb6477f7f843da1d9895b20"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "1d2e1916d8f6a2a7428f8c6138f4e220"
  },
  {
    "url": "tag/index.html",
    "revision": "5cf4991723ec5e82097e0762cc86f615"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "c189fbd783fbc258bd16c3cdbcd9391c"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "752bcc779fa2828d15c40623edd95ae2"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e1175856ad219d463b127a3a036f2f55"
  },
  {
    "url": "timeline/index.html",
    "revision": "f16dc2bfcf0f396e1642aceabe6e926c"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "5c5c0be808a4ec057524f80b045932bc"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "bc19b845b806463049903c029f16f8dd"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "f1c6bf43e045f114351a3c65179684a5"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "7eb77c4822a7ec462b72e3757bd24495"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "70e088efdba268c3153b49f1b3d8629c"
  },
  {
    "url": "views/system/index.html",
    "revision": "02679264a0eba6bb6da8fed5dbe4d22a"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "dca6764c589727e627fe1ba81c35e49b"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "be18b4741b33bf6871ac45a17d968f69"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "c9f32867e03191e00b5966919df92355"
  },
  {
    "url": "views/webpack/index.html",
    "revision": "f5ded9e6c903094ff1636240c28719b3"
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
