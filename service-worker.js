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
    "revision": "da39ba2e5c659f13a650be10001e74b9"
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
    "url": "assets/js/13.c8f96866.js",
    "revision": "fa470668288fa1c8abcaf863fdc4e2cb"
  },
  {
    "url": "assets/js/14.a2fb0993.js",
    "revision": "a9bed2e4bb3ec3ffabb05f7b5b3892bb"
  },
  {
    "url": "assets/js/15.be99362e.js",
    "revision": "d7dc0e2ea6d084651a327ba2e5789059"
  },
  {
    "url": "assets/js/16.288d9873.js",
    "revision": "41bf656a46a8d7cf7d3299f5b8d40e38"
  },
  {
    "url": "assets/js/17.623f534c.js",
    "revision": "a163a512492e66d357c89b77eeab1edc"
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
    "url": "assets/js/9.aa31d89e.js",
    "revision": "ea551e44d5ff038d157b3fa878138836"
  },
  {
    "url": "assets/js/app.0d29ba06.js",
    "revision": "1d459e8a7fe366afff8e243dd1e912b0"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "2421425384a7d091a70c1baa19162baa"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "21bfcbcd2afd9ad8625132e470cc8ad7"
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
    "revision": "3c10847fa826f009fd37b73959aea696"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "c9dda0fb2349fbe572696b4b19553c74"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a485be07db189d72e43bd53deb82d1de"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "c4a98734ba52adcc0f578080f216fc6a"
  },
  {
    "url": "tag/index.html",
    "revision": "c29a561eae0814ddcde2a8da071b0961"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "8f97a45b4e14c93f0af31bad92ad67db"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "ffaf157130028bc743a671f140c7b6ae"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "13d269cde0b864dec873b02458592a5c"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "e42381256c39ee67269fe6964d8ea0c5"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6c21cc7bd999300839e758f0117dbaf9"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "9849fc8b889065c78be3f551bc6a6ade"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "2d1016fb11647ac956b721a575a3d37a"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "c23c60f0afcd812efac47e79f9363f6b"
  },
  {
    "url": "timeline/index.html",
    "revision": "97be9620d5774b88d6e87692fbc9a5df"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "17151bee92bf1dfaa1a5e373a010918a"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "63a8dc8b57bd78f7561ecbaa57dcdb94"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "574660d459861518fb0216ec4ec795c0"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "f4b4e3f0d44ef49bc70cf1522eba1512"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "d63cacbb0fe8c6e25d234a55ee126653"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "9612eee501dd86a135aa4de3ca4e8a7a"
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
