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
    "revision": "77dfd7d60b8caa6b0eb6dc54ffaa93d1"
  },
  {
    "url": "assets/css/0.styles.f8eb2761.css",
    "revision": "ec16f0d4099ef7c50fabc52a00a49261"
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
    "url": "assets/js/1.e78b5107.js",
    "revision": "ce63187639fc6d340bf61f207bd3feb3"
  },
  {
    "url": "assets/js/10.4d305cde.js",
    "revision": "e815d5846effed5ab5b0559be51d30a6"
  },
  {
    "url": "assets/js/11.e25800dd.js",
    "revision": "f4e5eed43b0bd04e7ac9eb442c60bf4f"
  },
  {
    "url": "assets/js/12.53749ad9.js",
    "revision": "b4109c6c4f4cc243d97d7b905ae9e6f7"
  },
  {
    "url": "assets/js/13.429d0a96.js",
    "revision": "fec5446fbed1721bbf69a576032769ec"
  },
  {
    "url": "assets/js/14.ab39a190.js",
    "revision": "92968bc6333fa56ec91ff1b7735c1785"
  },
  {
    "url": "assets/js/15.997f1791.js",
    "revision": "66a2cdff14d3ad0972a6cca2abf6e9ea"
  },
  {
    "url": "assets/js/16.f0fa6e08.js",
    "revision": "9c76dbfefe16cb08399b383b00e4f506"
  },
  {
    "url": "assets/js/17.c679cc4d.js",
    "revision": "5c8578e89f886971a2f62c45b9f79ca5"
  },
  {
    "url": "assets/js/18.987c72f6.js",
    "revision": "4204fdfff31cc0fcf3fadcf56968e5ff"
  },
  {
    "url": "assets/js/19.6bd0e1b4.js",
    "revision": "5ce9cfccb1b354ef64f1e303e9927918"
  },
  {
    "url": "assets/js/20.8cc52f98.js",
    "revision": "12f0984c623022ba9d7a284735c019bb"
  },
  {
    "url": "assets/js/21.c0a4470a.js",
    "revision": "10a6d659c6a9b04de7b5b40878e0e8c2"
  },
  {
    "url": "assets/js/22.df2c91a3.js",
    "revision": "013040981c22f9dc0431b19335293f78"
  },
  {
    "url": "assets/js/3.294c2919.js",
    "revision": "6da8085b07c7110359c9aae8b2e6d55e"
  },
  {
    "url": "assets/js/4.e9ec00f9.js",
    "revision": "fb6543bf32f8573c3f2d22f62133756c"
  },
  {
    "url": "assets/js/5.e1abf8ca.js",
    "revision": "7f23661fbdcc10bd3d822fecaca2ebba"
  },
  {
    "url": "assets/js/6.efa56706.js",
    "revision": "8d90b58b5e3b5bc985b904ecbd9baaf5"
  },
  {
    "url": "assets/js/7.c3afa32a.js",
    "revision": "13f2b07223b8ffaea1c4b1b3883227ac"
  },
  {
    "url": "assets/js/8.93a0949e.js",
    "revision": "5e9326ba1c64e4213bb7dc8528f81eec"
  },
  {
    "url": "assets/js/9.420e1909.js",
    "revision": "39ee895e11b7aa5fb97cb9053495a987"
  },
  {
    "url": "assets/js/app.ce17ada7.js",
    "revision": "12e25d333354a1d103f13cfd7b1df9e5"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "64b187f222a499fb4fde1729b59c4ba9"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "3ba579eb4e4793043301d41336faa65a"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "435160738e40bcbe192cfb225d72e8a2"
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
    "revision": "a41a76deb50552f0bd9480c308bc1634"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "1d2b683c19a7a873637426e78c172c8f"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "5adecdca6c5334a9c09d7476e2e67402"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "8831b57ff7e88e0a399e6240558d15d2"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "ff8371718324018c2719fd7ca6a1b203"
  },
  {
    "url": "tag/index.html",
    "revision": "d8204ad65779d0d2eabbe187baf851e1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f5fd07a0bad5d75b50cd40ffafb71548"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "ff7a8370d8f413f18b007fd05ba7e918"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "ee54dc52e16a803206d446a7a63ad2a9"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "565c9f5671a21171ab00b547fd359d41"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "040a822f9bae16558400f07d29266ada"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a6ebca7922e34c20e001210fc8ad837c"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "29e49e1e12784ed23ff3f5626a332a10"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "757c6c37b5b64f2090c4dbc8057d53e8"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "3639f0280cad99701a4db55971a7bff6"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "dd0df4d5cf3184f040708807db56e164"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "cd3d32ca4274e00751fc13055c3a6c02"
  },
  {
    "url": "timeline/index.html",
    "revision": "c2250760d21e8ec3de6a0caa8ad7ea98"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "c313859b9de310a672693abc70d75046"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "b3c2bc1a47e0d60171f3977f6664b41a"
  },
  {
    "url": "views/Javascript/index.html",
    "revision": "b3f1a5b8b901760e31a8bb9400f3f911"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "33f3b3d005be0a88da5df4fb3c237a8c"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "d05ef15d68c49abb5455d9d05ef92a15"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "27bf87ce02bbd091be85fdbfd9ea4e82"
  },
  {
    "url": "views/system/index.html",
    "revision": "0e9c1a0456270404816bdc89cfe71a3b"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "bdf2c9af8dfff88ecfccf9dea6bbdec5"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "09dd189f66bc9fd544c878336537c9b1"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "e9627418b14807232ec8c9d0894c2661"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "e736c82a23be12a7674a80094fc40688"
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
