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
    "revision": "01dd7b49cde0217ec5f606746c81a55b"
  },
  {
    "url": "assets/css/0.styles.88c5fdfd.css",
    "revision": "48cfdca68b5f61b7571bac54236f672a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.0be48f96.js",
    "revision": "4f9f609947760e67adae510f09e2fc11"
  },
  {
    "url": "assets/js/10.0c8a206e.js",
    "revision": "fe59bfb6c50b5e448ab5d24410eeb904"
  },
  {
    "url": "assets/js/11.bca6d19a.js",
    "revision": "8ad2805ff8084d634edc623df8e6cbd5"
  },
  {
    "url": "assets/js/12.4ad79ab2.js",
    "revision": "8cb67150eb0def8afcc624e83354a09b"
  },
  {
    "url": "assets/js/13.73972623.js",
    "revision": "d4fcb87e5000985d4fa8c0dd3d1b438b"
  },
  {
    "url": "assets/js/14.9e4c1214.js",
    "revision": "1e2bc528838b5adf805c57a3429fb310"
  },
  {
    "url": "assets/js/15.7bfa3960.js",
    "revision": "0d5fe18cd7045bde4855d6c8429529da"
  },
  {
    "url": "assets/js/16.355404e9.js",
    "revision": "211753fdb3376e557beb239ee56cf924"
  },
  {
    "url": "assets/js/17.c12391ce.js",
    "revision": "bfdbdb900062fa6a470af7286fb289ad"
  },
  {
    "url": "assets/js/18.fa9fad58.js",
    "revision": "a1f182e8d2f2f3f1abbcf8d9cf738768"
  },
  {
    "url": "assets/js/3.ff47f585.js",
    "revision": "2cab2ce74b8776ebbc1f7524fea72a68"
  },
  {
    "url": "assets/js/4.6c39f408.js",
    "revision": "6f19788c13e3123beb9748ba57afb666"
  },
  {
    "url": "assets/js/5.af61365f.js",
    "revision": "f21fda82ce943cc3994dbbdbe424e4bc"
  },
  {
    "url": "assets/js/6.4f4c3df5.js",
    "revision": "99bbaeac5c8930aeb931fd7a69f79fe1"
  },
  {
    "url": "assets/js/7.b7b696b4.js",
    "revision": "e59dee229a2f97a24be6533cc7d452e0"
  },
  {
    "url": "assets/js/8.61529a4a.js",
    "revision": "eec87ad1803973f01bda8055aa8135ef"
  },
  {
    "url": "assets/js/9.24b030b4.js",
    "revision": "ed712d6aefe3c36f7864268e04464737"
  },
  {
    "url": "assets/js/app.a5096d25.js",
    "revision": "a7bbfb575a198dbbfea0f96089f24981"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "7fc686bd43b66695cf7cf75564d8606a"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "09f44b28c9fabd73cc67d2234fe0f7a6"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "a0cd922e1014f4649f5b3414bb0de257"
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
    "revision": "6d1885652741c2d7bbc3e37eb6b6306e"
  },
  {
    "url": "tag/babel/index.html",
    "revision": "1c438cc44754b6d54a70d50beb911df8"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "8413788fb39f73a02faf1874e86cb335"
  },
  {
    "url": "tag/core-js/index.html",
    "revision": "4392020ada8adfb09fe970da6337a148"
  },
  {
    "url": "tag/css/index.html",
    "revision": "598c55e01261edf5727c5a0c47048703"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "0d7d2fc49fd5d941722c1789d2121be7"
  },
  {
    "url": "tag/index.html",
    "revision": "4d630ea07ac5b982dfa917eddbecff21"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "47efbec73240b2173a34ebc99881ad74"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "f1b5871ced79e007995943914c5548a6"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "6c78eb782abf93809231fb960df63256"
  },
  {
    "url": "tag/polyfill/index.html",
    "revision": "0f0c181ac36b0d3eb6141914ea0549cc"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "7db7820dc1b0274f47ae5c0eaaccf6ed"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "e677dc014f94922d0afa4a24b2cefddc"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7754b08e5330640fe5bfde513bc6d8fa"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "49705164e3010793b0292a093b8dd38b"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "aae6534945b830a35ff955f1ec34a1bd"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "7cdf976eb190be412f63c56a68133b4d"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "99b05c0bc7819beb0c2e806f7c2be3db"
  },
  {
    "url": "timeline/index.html",
    "revision": "04161c43a31793a1b1069008b67b0889"
  },
  {
    "url": "views/babel/index.html",
    "revision": "f56b26c9bb916dd866a0fb26853a98fc"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "9c835889f9326245f11ad97f583a329a"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "4f4deebcc51d0c5005666c385ebce10b"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "5c8d6a31162b4d9070a1570b5142897b"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "32a4320cf85e3dcfc7178194118be2e2"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "2751cc259ee1ec6c1f194f4c522a26ee"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "eb3ba0828074b2c73f27eb9a661992c0"
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
