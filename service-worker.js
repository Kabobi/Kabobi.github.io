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
    "revision": "0d17552ea5dbd2d31738276299818b01"
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
    "url": "assets/js/13.2f38f1ec.js",
    "revision": "ce46713725a09fa1e48d47e6b5c93cb5"
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
    "url": "assets/js/app.9c7b19a4.js",
    "revision": "b4d1a16e66537f8fa240274cc5fd7363"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "df0e25805ef9e644ebf400d6a85fb357"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1c20d1afa3d02bc4a0dd2a0d0fa96471"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "0b17fff76e43c21aa582c25732f31019"
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
    "revision": "0461e356a57321d9b1de7a3901d93d2a"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "8d780f08a6bed25a1bdd1482c709ffef"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "b13a6a698228dd4b2e5384fc181273b0"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "8b5b7b491ca73c45a152be0e9702ff7d"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "d404581c61aa8a2fa6402b971aeb6449"
  },
  {
    "url": "tag/index.html",
    "revision": "45bb7a55ee31bbcbe1bf0ecb9af403b0"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c7aeeafd286dd068b49082bd1815632a"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "91e736688c9ec2a9cdec168823b150c2"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "5402e39c2c1d90c377c4a93338ae2a00"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "7db62cca4b72f4e3d273e3a08257d218"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "d7b0c19958a08a2a3ac93488b50b1d4a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "99f821f9f1d8209afea24150b36dc007"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "7ed3d2ed71f5c184591c8fec508ad9cc"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "e835227d97dbf4702a0ae69dd3f8da3b"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "01bfbdda149fe28f715678ee8cd3719c"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "ae16ac86c976c535d8d57c36a15b1084"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "0b0b6fa2d01754ad17712922c60fcdf7"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0b3b14c6ce5958c8579d41879cb75c5"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "20530c0040d7f4d339586c7424f76a56"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "c7017b86c1058e35ab6b3677ec28285f"
  },
  {
    "url": "views/Javascript/index.html",
    "revision": "263cb904e22195e0aa13d4036880ee1c"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "ccc111c69dc5da6f962815dce832518c"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "696b26e6404d835d201866d330061fa5"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "7f2d5922ac8610a93240342f72c21027"
  },
  {
    "url": "views/system/index.html",
    "revision": "bb1fadae3267baff0a722f223b9df3e5"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "e3ce10ed4e3f90cfc760465a5ba0a019"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "3fe23172e209a0cbafc9e1cc363d61ac"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "03966975579856cdc1131f524ed32f3e"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "8f1de680361a32c5d35a75457db67c14"
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
