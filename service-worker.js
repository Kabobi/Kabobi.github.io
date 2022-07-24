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
    "revision": "a21fe52d10e4e4993042afa0f0b570b8"
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
    "url": "assets/js/15.8b7b3ff8.js",
    "revision": "1e29889076032c123cb3ddc2adcf9395"
  },
  {
    "url": "assets/js/16.3f2d31cc.js",
    "revision": "ec5f88b1b5ab8abe213e9a661ae6bc4c"
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
    "url": "assets/js/app.4925d141.js",
    "revision": "bdcf6ab762ab4c03e34121bdf8b80b1a"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "3a5310bdfb20abed6ff8e393687d7195"
  },
  {
    "url": "categories/Visual Studio Code/index.html",
    "revision": "6143299e867055fa279469344cfb860b"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "18a9b7c92b81800cc65912d48d1af23b"
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
    "revision": "fcd445d619d7e17929b01aaf3b976ddf"
  },
  {
    "url": "tag/babel/index.html",
    "revision": "d8de6e69ef02b43738b0933ac6e3ce72"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "a51d8910d900645ab0edfd405627cc45"
  },
  {
    "url": "tag/core-js/index.html",
    "revision": "326d4aba9061cf393ac70f65ccc423f5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d74791db4f622b915000b16ed02f8919"
  },
  {
    "url": "tag/devTools/index.html",
    "revision": "4cfea99f0005b9f5f4f5f7885086305f"
  },
  {
    "url": "tag/index.html",
    "revision": "944fd068463e9d7e700fdcf2c540cefa"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "fcd524eb0b289b865b9ea9add7baa899"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "c375e37792ca6989b0fa77b5ebe4d28b"
  },
  {
    "url": "tag/plugins/index.html",
    "revision": "1737360071dfeaf8f878d266ff729a92"
  },
  {
    "url": "tag/polyfill/index.html",
    "revision": "22064e8ea9295e976a9db429081b949f"
  },
  {
    "url": "tag/setting/index.html",
    "revision": "0004cfbd7a4cfc44e8804256b0ba29f2"
  },
  {
    "url": "tag/Visual Studio Code/index.html",
    "revision": "ed34fa99039dab944d13700a407b85a1"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "24a062c70efd4dcd88d48c3c6572dee9"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "45a6926541f531b1115c243b7323a799"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "540b3567455f761229082b31747844ed"
  },
  {
    "url": "tag/升级/index.html",
    "revision": "993efec855804160176b5fc3bab4678c"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "a837286314f4db6e4be37ef7d7bbc74d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c35fce692c785c8fa33c7bd8de5ac2d"
  },
  {
    "url": "views/babel/index.html",
    "revision": "89004254d6f0736a59c21cfd04c685a2"
  },
  {
    "url": "views/Javascript/EC.html",
    "revision": "ef192a5330459669bd0304b2917bfd6f"
  },
  {
    "url": "views/tools/ChromeDevTools.html",
    "revision": "bf3bc6ac0f7c682ae7d304097a79a469"
  },
  {
    "url": "views/vscode/CSSNavigation.html",
    "revision": "50f43f6471448436b033d82fe22d18f4"
  },
  {
    "url": "views/vscode/VscodePlugins.html",
    "revision": "9d4b757fc4d44821c64fa73841627869"
  },
  {
    "url": "views/vscode/VscodeSetting.html",
    "revision": "7dbe6ed3efc7102c95365b2a148048ac"
  },
  {
    "url": "views/webpack/webpack4.html",
    "revision": "2b01257356d6d27e3cc10e93fe5d6215"
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
