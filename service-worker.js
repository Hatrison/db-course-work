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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "a4d0a63e9874c9d445873a953d354514"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.5594454c.css",
    "revision": "c7fa51041213bcb124046c116298f351"
  },
  {
    "url": "assets/img/DELETE_correct.54f20856.png",
    "revision": "54f208561fa456e6111c416bea39ae1e"
  },
  {
    "url": "assets/img/DELETE_incorrect.19798f98.png",
    "revision": "19798f9870ccf80bceac97c3364e63c4"
  },
  {
    "url": "assets/img/GET_after_DELETE.e15cfedc.png",
    "revision": "e15cfedcfa24a894757114eee25a40c0"
  },
  {
    "url": "assets/img/GET_after_PATCH.eb055718.png",
    "revision": "eb0557184e2168afb7a4c05e392f6464"
  },
  {
    "url": "assets/img/GET_after_POST.862f8957.png",
    "revision": "862f8957535bef34ede5d16676e7f39d"
  },
  {
    "url": "assets/img/GET_all.0b845069.png",
    "revision": "0b8450693214c74c499e4a9dda0b6847"
  },
  {
    "url": "assets/img/GET_one.3e1c96a3.png",
    "revision": "3e1c96a36ca00636d622304b38b62cab"
  },
  {
    "url": "assets/img/PATCH_correct.9aea005e.png",
    "revision": "9aea005e3d6fc0991218131d5bb63a5c"
  },
  {
    "url": "assets/img/PATCH_incorrect_id.13b4696f.png",
    "revision": "13b4696ff33be1cdf572394b57e3e598"
  },
  {
    "url": "assets/img/PATCH_without_param.059114bf.png",
    "revision": "059114bf433339a85f53996c0b0b339b"
  },
  {
    "url": "assets/img/POST_correct.a89d5925.png",
    "revision": "a89d59250c8990c94e61ca662a90f452"
  },
  {
    "url": "assets/img/POST_incorrect.9556d08c.png",
    "revision": "9556d08c3ddd6e61af030abae31e6a88"
  },
  {
    "url": "assets/img/POST_without_param.bc33429c.png",
    "revision": "bc33429cdcbc1a973225a0c1fa39228a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a6a26660.js",
    "revision": "5b6b0eeb69a74d184dc6aaa0110fa2a7"
  },
  {
    "url": "assets/js/11.c839ab00.js",
    "revision": "79b295e3f17e290f10cf5cb944ace0d8"
  },
  {
    "url": "assets/js/12.1f8d883b.js",
    "revision": "c0a2151f8948d922015ca35468b2325f"
  },
  {
    "url": "assets/js/13.4fc9a7ac.js",
    "revision": "b559f9e5162d051a849b6b9508256fcf"
  },
  {
    "url": "assets/js/14.bd15d553.js",
    "revision": "41c582025a9548aa3d81bcbb3dd3225c"
  },
  {
    "url": "assets/js/15.2b9d5376.js",
    "revision": "f80ee98c82092d3f179ad67d121c661c"
  },
  {
    "url": "assets/js/16.7d6b43ab.js",
    "revision": "51cca6e3dd10c4e42fa4aa33f06b0bde"
  },
  {
    "url": "assets/js/17.4e1c2f9e.js",
    "revision": "c4000f4c23c751cf6bf0d55c4d82fe07"
  },
  {
    "url": "assets/js/18.5f356dc2.js",
    "revision": "0c93268fedad82a307500f3736de30d3"
  },
  {
    "url": "assets/js/19.77369385.js",
    "revision": "8355639767f1d2ed61b0edacd381a0a0"
  },
  {
    "url": "assets/js/2.39192f14.js",
    "revision": "4a6310bc61cb759f7a28fc653fba604c"
  },
  {
    "url": "assets/js/20.448dde2c.js",
    "revision": "a8789d196285c03d3e5b4c933ddde204"
  },
  {
    "url": "assets/js/21.b1c87123.js",
    "revision": "c9f131feac47939380d426544e87aab1"
  },
  {
    "url": "assets/js/22.fcc17c9f.js",
    "revision": "b07f49fe20806cbb5a6bae64f3d0e7ac"
  },
  {
    "url": "assets/js/23.b2ad5ead.js",
    "revision": "d92846992c992b28ee2f0db77ad9cace"
  },
  {
    "url": "assets/js/24.a7f61078.js",
    "revision": "79bc06bd9af4d724c464a6c7fb283934"
  },
  {
    "url": "assets/js/26.d4ac868d.js",
    "revision": "637c3c4983f4f8924d0789618954b5dc"
  },
  {
    "url": "assets/js/3.69878e8f.js",
    "revision": "9e6f0a07441a168dbe905ac5944a77c9"
  },
  {
    "url": "assets/js/4.d6f78092.js",
    "revision": "3a60fb844799a76c58aafa39aeb698ed"
  },
  {
    "url": "assets/js/5.99a421ac.js",
    "revision": "7dbe03f47cb1a1cbab08bb919e6def5c"
  },
  {
    "url": "assets/js/6.e8062ea7.js",
    "revision": "9877908bb56e274c2b34e92161d2d79c"
  },
  {
    "url": "assets/js/7.0ea5b29b.js",
    "revision": "8e7fe7707dd4329f0fff93c634009bdb"
  },
  {
    "url": "assets/js/8.7a2d57d9.js",
    "revision": "442393f48debc0ac462dcc235ffb7391"
  },
  {
    "url": "assets/js/9.eeb65547.js",
    "revision": "8d0e8384605add84c28bdaffccd7cd20"
  },
  {
    "url": "assets/js/app.9ea392c8.js",
    "revision": "63a77c16fbcce58c7ff54283457f98da"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e188bf1fc75900be16625e28b45ed0b4"
  },
  {
    "url": "design/index.html",
    "revision": "2b90e1397cafd6b836c9b8a9155b434e"
  },
  {
    "url": "index.html",
    "revision": "412cbdd4c587671a1d3bb649d963bdbc"
  },
  {
    "url": "intro/index.html",
    "revision": "4b5132c5b6ef552125633ab1b99c0631"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "01edf25bde209958b6ffeb0f9f00ec3e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "7d2773af659d920f2c64b97929a97b27"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "44b02d6f22764abeaa4d3e42c87f3d8b"
  },
  {
    "url": "software/index.html",
    "revision": "c22012d1398bfba4a489fc93f83b3622"
  },
  {
    "url": "test/index.html",
    "revision": "4104805661de83e1de4ef6f2b46c2c6c"
  },
  {
    "url": "use cases/index.html",
    "revision": "983fa62dc81f9d8b89f6fa25895da893"
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
