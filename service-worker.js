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
    "revision": "f73e5d6e0907777b906547addf0f10ba"
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
    "url": "assets/js/12.8d9e2f8b.js",
    "revision": "4225e7259b24a231a5eb0024508f642c"
  },
  {
    "url": "assets/js/13.340909e3.js",
    "revision": "8f3677e33dea09b8200f05e1974c62ed"
  },
  {
    "url": "assets/js/14.4c15aea9.js",
    "revision": "3b2ecb3e1f564435f17890b515e22f01"
  },
  {
    "url": "assets/js/3.f75c49b9.js",
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
    "url": "assets/js/app.7f49f2ef.js",
    "revision": "dc9751a4f57a4d0a69f42a4a3fed79a7"
  },
  {
    "url": "bg.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "categories/index.html",
    "revision": "3e4043299ca143fcc989cdefe6bae04a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e4b6e6f320d315bd6e3b5d530031d878"
  },
  {
    "url": "categories/前端工程/index.html",
    "revision": "54cb4a896cba1d0d181e95ba31ff6657"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2f89e9c37b1158eea10e915f236f84c2"
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
    "revision": "9e7682f224743a0327bf307927dae90f"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "bcf73d1f360af69e54003805df118778"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "0be7c3f76870eec50a7f9c54b2a6989e"
  },
  {
    "url": "tag/index.html",
    "revision": "4f924ffde86c3615a4c14feae5589f3f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a8cc99db7bec785b68b01014678d8f64"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "fcb6a8ee6f03c423f106742d2b3148ae"
  },
  {
    "url": "tag/verdaccio/index.html",
    "revision": "4dc603ea2305136bf890d5b3bdb30d12"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "b692a841de54d0b803ee5e758523c6a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "295a5494ebdb77ded8771e738e76ddbc"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "d7713a2c570094e21734cbeece3d3271"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "64fa273a9c5bc4973348bfc3abda9f8c"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "c143378464fb141fa822e38b72e42201"
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
