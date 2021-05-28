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
    "revision": "da3750a56673c291ccfe75c62feb461b"
  },
  {
    "url": "assets/css/0.styles.51dd8d79.css",
    "revision": "4946c1be4c79009b7bd2e717e6dcf0bc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.6e33bf42.js",
    "revision": "680b55111bbcf72f5f9b16da2b4ce1ab"
  },
  {
    "url": "assets/js/10.626bf8d1.js",
    "revision": "76d95d313feb0ae3720eabe62f77bfb3"
  },
  {
    "url": "assets/js/11.c470e016.js",
    "revision": "ff1e4e7bb96469180d3520e0b9394a67"
  },
  {
    "url": "assets/js/12.582d635f.js",
    "revision": "dbb14fb68e4eeaa89dc8f1b491cfe7f2"
  },
  {
    "url": "assets/js/13.e9a990ec.js",
    "revision": "e09513206af3b26ea9baa23dfc265541"
  },
  {
    "url": "assets/js/14.4c15aea9.js",
    "revision": "3b2ecb3e1f564435f17890b515e22f01"
  },
  {
    "url": "assets/js/3.87261880.js",
    "revision": "13a9520cf0cd665ebc7d72f867ffc5bb"
  },
  {
    "url": "assets/js/4.05de0293.js",
    "revision": "f117851e01356f55fbe6c7d77f674688"
  },
  {
    "url": "assets/js/5.598e47a7.js",
    "revision": "2a7c7e9ca7c53fc4558828c1cc1f076e"
  },
  {
    "url": "assets/js/6.79af007f.js",
    "revision": "19b21ab1bb8a63cdb8454590bcdc49a5"
  },
  {
    "url": "assets/js/7.2783c169.js",
    "revision": "1d92bbd5182eb56f8a3ad22eeb021515"
  },
  {
    "url": "assets/js/8.8d24ad69.js",
    "revision": "5fcd2898cc8d207ad6707f816fc22228"
  },
  {
    "url": "assets/js/9.57478ab4.js",
    "revision": "9df1519849a7d93a2e9f1db0b043dbbd"
  },
  {
    "url": "assets/js/app.4562fcfa.js",
    "revision": "8423619b803008d85617955885290115"
  },
  {
    "url": "bg.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "categories/index.html",
    "revision": "da56e830b0d9a13f2106cd20e1b8c1ad"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "651b36c484859d71369955058f21318e"
  },
  {
    "url": "categories/前端工程/index.html",
    "revision": "71b18ae68f5bf313bdc1493d6f75c44b"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "8cfe4f4b001e992fbae6ba373a234d88"
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
    "revision": "6751c60137112fee24b2f4c539fb6c9b"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "ed85210edcd43bdc5e550db951e08adb"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "551db212ca9a46490cdbdd2046e83acb"
  },
  {
    "url": "tag/index.html",
    "revision": "df2a2fdd8b694d6d40f8fd403e48689b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ef6a5f7af414e0dd2e6890f4ca8de64c"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "babae817e7c3986a3225e0f4f4026422"
  },
  {
    "url": "tag/verdaccio/index.html",
    "revision": "f3c0ca7467173bcb18fd45770b3b0e19"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "8e6a18985118887b51a5995e9e224e16"
  },
  {
    "url": "timeline/index.html",
    "revision": "08ae3745842d1ef38c6f559923b273e3"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "53823ccf314f121a3487c2c96dbbc1a1"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "e2d2964e2a7a680f897e98c2c64c26b2"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "8fee0c6e66aeab95aab6e8cbf59f717a"
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
