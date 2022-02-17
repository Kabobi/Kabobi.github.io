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
    "revision": "900d125fbd6f87dce2407bee2f2ca6fa"
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
    "url": "assets/js/1.0ef19270.js",
    "revision": "e869773a1f75d02afda37afc24619700"
  },
  {
    "url": "assets/js/10.5e62609f.js",
    "revision": "1e1f19bee8ee6b970fdecedaac08ba31"
  },
  {
    "url": "assets/js/11.b0f62e73.js",
    "revision": "a90a53471cdaedaa2ba4c61d08dd7420"
  },
  {
    "url": "assets/js/12.6374d256.js",
    "revision": "2d7e70f829963fe5f04c9a361788674b"
  },
  {
    "url": "assets/js/13.0667ff9a.js",
    "revision": "e4e6d62d7bbc7cde7bce615d3a43e67d"
  },
  {
    "url": "assets/js/14.c50c841b.js",
    "revision": "7cea89a443db94e4dc0cca9394561bc0"
  },
  {
    "url": "assets/js/15.23f1d2b7.js",
    "revision": "44ed829c7a29407ee912243dc12f8c81"
  },
  {
    "url": "assets/js/16.7b156ea1.js",
    "revision": "6d4b5b85f878412355c843a21486522c"
  },
  {
    "url": "assets/js/17.69370c40.js",
    "revision": "c6ce3022480d7f03b9d5fcce806dc8b8"
  },
  {
    "url": "assets/js/18.796b22cc.js",
    "revision": "a4ef6b901c2c5662948f2a8a3bd7bab4"
  },
  {
    "url": "assets/js/19.fd3b9101.js",
    "revision": "5a59fb1e032c2ad4e366f4e6c746147f"
  },
  {
    "url": "assets/js/20.78116e8b.js",
    "revision": "43ff6e14de6fb84091dec3397262208f"
  },
  {
    "url": "assets/js/21.dca2b66a.js",
    "revision": "e71c8f1c24121e68326b3c46449d0d67"
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
    "url": "assets/js/9.338ad52a.js",
    "revision": "992659aef4100d0aa4407aff5c4329a7"
  },
  {
    "url": "assets/js/app.581fedf3.js",
    "revision": "75e4ac42b0283d2245aed1b2e8cc3b12"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "6a1d2780acf715d799203d7e2df0350b"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "30be36f067d14420562d59d7c94e4e88"
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
    "revision": "c13fe655c47735deb9004f65af90c422"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "421b9ca430d14dfd472d04c6f92d8ea4"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "1e5691081a69afd2337f420baad7a831"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "c8fd6f17f8d9a5f644c2aa0dfe355b4f"
  },
  {
    "url": "tag/dart-sass/index.html",
    "revision": "523fc23bac7d53b65a9709b5537c31e2"
  },
  {
    "url": "tag/index.html",
    "revision": "38041cd1d48af14cae6ac3a0ce26b91f"
  },
  {
    "url": "tag/node-sass/index.html",
    "revision": "6c2b556cdb8146ae750686b07bad45fc"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "9033e0c56e99879c47ec0cbbad8db2e6"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "8024fbf36df307137daf853c0a6ed77a"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "4c3638879ff369b527d63734473d82a8"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "16a8fa73f710b6a0fc34a1365a7480d7"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "20dceece6dad48fda44e3531b59fe879"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "0fa3e2137664a21a97dcf75e69d7f805"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "5d3eb2600ebb770e3c35c02a5c88badd"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "3ab824d7805565e3d947d1c05b76a723"
  },
  {
    "url": "tag/百度小程序/index.html",
    "revision": "a64701495d48157caa1311980c8a1da1"
  },
  {
    "url": "timeline/index.html",
    "revision": "67e6e7aaab812c4e1ac398e339f32f17"
  },
  {
    "url": "views/data_structure/index.html",
    "revision": "2cd8d729b19770426db61762606c6ed1"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "c3b3b1a641ac3854493a307764e2fa27"
  },
  {
    "url": "views/Javascript/type.html",
    "revision": "812e203a81aa9ef56459476a810d92d0"
  },
  {
    "url": "views/Javascript/var.html",
    "revision": "a0a327ac1edace47ee5142ff5e183b80"
  },
  {
    "url": "views/mini-app/CICD.html",
    "revision": "07e0fb604d9e80db424123186ff652d4"
  },
  {
    "url": "views/system/index.html",
    "revision": "21fb5aced7c943217adf0e1d54632e95"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "179b1b3699a72710f1cb7c308a34143e"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "5706aaf62e0c4dc95c01128dbd9e4dad"
  },
  {
    "url": "views/webpack/dart-sass.html",
    "revision": "ae254f992c08b8972550246bf235524d"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "1166710886b8a0255d224b231b175221"
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
