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
    "revision": "8af2c572464471b102a5efabe6f32b8a"
  },
  {
    "url": "assets/css/0.styles.dd8806f5.css",
    "revision": "19b2a1d13ea6a4a85b2be56871a12b7b"
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
    "url": "assets/js/1.9d881a40.js",
    "revision": "91d974ac82e511627cde8a99e54ffa18"
  },
  {
    "url": "assets/js/10.2120fede.js",
    "revision": "fc7929654ab8d15584e345bf806a8577"
  },
  {
    "url": "assets/js/11.ecd57fcc.js",
    "revision": "1ef58be0c88632e201429d6b74198e10"
  },
  {
    "url": "assets/js/12.a2a21f32.js",
    "revision": "749188a4377b3c16caa6541e5216deb2"
  },
  {
    "url": "assets/js/13.5b6405d8.js",
    "revision": "63eebbb734c96a1026ea27572fa1a4b9"
  },
  {
    "url": "assets/js/14.e488ef4b.js",
    "revision": "608e3309b0fdb46637f91117c5553679"
  },
  {
    "url": "assets/js/15.c108ff7f.js",
    "revision": "9b7757f209ba44f897c43f6d6bcac0a6"
  },
  {
    "url": "assets/js/16.51899791.js",
    "revision": "1f83d42614c322863889e19c0ba6f97d"
  },
  {
    "url": "assets/js/17.bcc21927.js",
    "revision": "2df71103ae054fb71c5859b1800b2ec2"
  },
  {
    "url": "assets/js/3.a5e6693d.js",
    "revision": "3811a7c3c7e441e5359ca276bd6428a8"
  },
  {
    "url": "assets/js/4.b2320c0d.js",
    "revision": "b92334e96d6408875530fb257d0ad583"
  },
  {
    "url": "assets/js/5.44dacb07.js",
    "revision": "58418a5176f094ab4b905f0b4bdf8e28"
  },
  {
    "url": "assets/js/6.9ff00e5c.js",
    "revision": "9b24d6baa27ebb75fe5a6dbed5737d9a"
  },
  {
    "url": "assets/js/7.aae4c65a.js",
    "revision": "68856f8515011fd18e5b2ce1eee5bf7a"
  },
  {
    "url": "assets/js/8.fef2a459.js",
    "revision": "2a070d18feae3274ab9184cb89b8abf8"
  },
  {
    "url": "assets/js/9.106e4a5c.js",
    "revision": "4e557280f4b9bbfd370001d2161cc349"
  },
  {
    "url": "assets/js/app.b086ab6e.js",
    "revision": "74ae3b0a6781416540b934df74baa703"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "616eb4b57fbb438879f6cccc7088ecb6"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "45aa4ff2fe55343760265a808a6408b3"
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
    "revision": "d6693c995c42d62bb8c823164593a0cc"
  },
  {
    "url": "tag/EventLoop/index.html",
    "revision": "83fc9ab32b22ffd1586e91cea63240d6"
  },
  {
    "url": "tag/index.html",
    "revision": "94ec9a4f30a412d73aa8dbed4dd7ccf4"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "cc0b5a24cfbca23df80d20e46be482da"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "dacc6d58a07374f86d4f13825b3b4320"
  },
  {
    "url": "timeline/index.html",
    "revision": "9392cc263f689fec5d9c3802f2276608"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "c23e648304dc09e00971877ea91e6ef9"
  },
  {
    "url": "views/Javascript/EventLoop.html",
    "revision": "280e862b38b5fffad1d78bdc322bcead"
  },
  {
    "url": "views/npm/verdaccio.html",
    "revision": "67ebdae78c30da8d4d0b767c6e181174"
  },
  {
    "url": "views/system/index.html",
    "revision": "538cb5c4abb143bebb5c43c1bdada4b0"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "5aaba85fdfd81205bfcc08581540be67"
  },
  {
    "url": "views/tools/VscodePlugins.html",
    "revision": "f0f92456ce875d6cdb495bb5ca0149cc"
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
