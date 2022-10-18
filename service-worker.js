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
    "revision": "3140edc6e3a74ea5cc58852423e0788f"
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
    "url": "assets/js/13.f2107a5c.js",
    "revision": "3fa050827e2f8cd43ecbc4ce931090ca"
  },
  {
    "url": "assets/js/14.ed40b842.js",
    "revision": "3928e5e159acfdfd46c1916dcd23dc65"
  },
  {
    "url": "assets/js/15.a1f45dde.js",
    "revision": "b83e3738e5e8f0ab2ed9510949183f4f"
  },
  {
    "url": "assets/js/16.5c1c46fe.js",
    "revision": "8aaafbb88edd6a4cbab48358ffc438a1"
  },
  {
    "url": "assets/js/17.e2b98eca.js",
    "revision": "374c0e16f759aa5c639659775d7f3375"
  },
  {
    "url": "assets/js/18.2f2af11b.js",
    "revision": "a41dac616fd814508933f440d5f0e973"
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
    "url": "assets/js/app.7e222491.js",
    "revision": "d5e5f28f6e0bca87833509ba6ffa2396"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "9bbfcf57187ae2bc5d405e5a35de8916"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "163edb4bf2a750960ae74d663db42df0"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "bd51161166fe2eaed88925646f9b558d"
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
    "revision": "a14cf728d7f1f197d7eafe22b3bd1c72"
  },
  {
    "url": "tag/babel/index.html",
    "revision": "7cf0190c443fedeb72a3fcd51fff6ef0"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "5386c783f74e042b02af8287d1e64305"
  },
  {
    "url": "tag/core-js/index.html",
    "revision": "09c4c9e42d0c896d1c37c1213be1a2d1"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ac61051544f249b18a1333ab5b562f8d"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "69ff001b7b420ee1ccf20c95c9ffed28"
  },
  {
    "url": "tag/index.html",
    "revision": "b5c7e6dc0d4664cbe0b7f14fac3570c2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ec8bcd592e74fe45ef116294fd627688"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "a922e306f984dc4347288728366cecc7"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "5a7bdf7d3aead8dd2a4a5ec3e3a4c868"
  },
  {
    "url": "tag/polyfill/index.html",
    "revision": "c781318745683d2515a6ce5226ed5622"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "b8d3c472e81ea9988cd16c13096b6500"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "189c2adc68e55db1d8a3419853226432"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "001f8e5a656eaf9f1361b16be7d71e61"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "ea3b86b2263fc689fee3c3c50e6d08c9"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "6b56ae7dd8aaa8c7280f22b057a6db7b"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "b264fe1838129f1ef6bef51d0a551961"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "989c027083bfe554ae78105d0a9c467c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b257d0a1bcc584835c1bab59457b078c"
  },
  {
    "url": "views/babel/index.html",
    "revision": "60c5cc5324222ee354848e7943079865"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "98fcc4f31f63e3fc63e522024c003347"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "074a568d4a2978cb81dc4e19b964a3ec"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "9582d4e929d9367d9b697e6fd0aa09eb"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "096fc6c48ac8a5748e7121aca738519e"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "d6be6fb9ae02dded2849890a62cf45f4"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "bf275572c9b7b256cab69a89e4508a1c"
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
