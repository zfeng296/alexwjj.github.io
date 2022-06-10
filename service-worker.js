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
    "revision": "2ee615f25ede359ffe4f81e7128df575"
  },
  {
    "url": "archives/index.html",
    "revision": "94cbad12a0d1440beade7bbff9af8141"
  },
  {
    "url": "assets/css/0.styles.08164ada.css",
    "revision": "2b55a7ea99c27d4cdba1515432ade5ba"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.9564f3cb.js",
    "revision": "e6ee0673adfe351e197cbdf2d6f7f308"
  },
  {
    "url": "assets/js/11.b99c8207.js",
    "revision": "f0c8e1d299ce2465a052de633fee1a44"
  },
  {
    "url": "assets/js/12.ceea3712.js",
    "revision": "e686c336ece19210c7a09a799e0e5ee9"
  },
  {
    "url": "assets/js/13.34c9aeb5.js",
    "revision": "bed9ef19aeea204464aec01eaf42b44b"
  },
  {
    "url": "assets/js/14.434ab9e6.js",
    "revision": "a850ed2a6ce1ff120eb4821425957bea"
  },
  {
    "url": "assets/js/15.b2915af7.js",
    "revision": "c43da6a460e0109b1dee64381901a7b4"
  },
  {
    "url": "assets/js/16.e35abd32.js",
    "revision": "8eb8611a4e197a0de2e07fbaaf0db5e6"
  },
  {
    "url": "assets/js/17.596faee9.js",
    "revision": "0be43c11860026c5f1def1dcafa5e984"
  },
  {
    "url": "assets/js/18.118d4115.js",
    "revision": "bf875288c0a67453910e14eb76f7b02b"
  },
  {
    "url": "assets/js/19.ca25a131.js",
    "revision": "f9d94e4c537461d25c11079211531fc5"
  },
  {
    "url": "assets/js/2.db611675.js",
    "revision": "0ef70ca0b8ab56d005983bb670f22bc4"
  },
  {
    "url": "assets/js/20.aa600e99.js",
    "revision": "fa303cc09d6a138fb0e250580bcb9f0a"
  },
  {
    "url": "assets/js/21.afe30266.js",
    "revision": "3347e475f44a9baa79c4bfef8747c6e9"
  },
  {
    "url": "assets/js/22.7e22a7dc.js",
    "revision": "4598de1b3cbab8f5ea9731c381d80e0a"
  },
  {
    "url": "assets/js/23.9797a03e.js",
    "revision": "84e1dd80a0db78b6d0d7a6898837cc92"
  },
  {
    "url": "assets/js/24.a28241e7.js",
    "revision": "32beccc6d2fb23a22e6ebc9bd238eec7"
  },
  {
    "url": "assets/js/25.b7011e09.js",
    "revision": "f1790a7757235c44052245feb055648e"
  },
  {
    "url": "assets/js/26.b24c155a.js",
    "revision": "99b6d9e316e578b59f81d93cb4ad642e"
  },
  {
    "url": "assets/js/27.2428da62.js",
    "revision": "54a81146f72d91210f91fad109191dde"
  },
  {
    "url": "assets/js/28.f068135e.js",
    "revision": "d555acefc6c50f73fe9629c83d3559c5"
  },
  {
    "url": "assets/js/29.b860e89a.js",
    "revision": "b12b6aaa554b587e999be81515a87a1e"
  },
  {
    "url": "assets/js/3.08913bfc.js",
    "revision": "e19f5dc47517c2b415c88da6a6fe1c70"
  },
  {
    "url": "assets/js/30.b11e5218.js",
    "revision": "c91d5be480c3bee32f7b4d30fd55751e"
  },
  {
    "url": "assets/js/31.e47b9a4f.js",
    "revision": "961d6e932f4558d407f883e315bceba2"
  },
  {
    "url": "assets/js/32.70c83ed0.js",
    "revision": "41dc252de63bb4ec2f4668b0e7c936d5"
  },
  {
    "url": "assets/js/33.c85ae1c0.js",
    "revision": "3db7f98ba8211c86e8bceef548bc665b"
  },
  {
    "url": "assets/js/34.61d97a1d.js",
    "revision": "1cfd2bd0eb152b4511f7467239417098"
  },
  {
    "url": "assets/js/35.17a018d2.js",
    "revision": "4618d22d59ddbfc1819137588055b721"
  },
  {
    "url": "assets/js/36.b61990d1.js",
    "revision": "a9f7a0e09f65c1973779d77603cb7f81"
  },
  {
    "url": "assets/js/37.1ef84e16.js",
    "revision": "97ee0ec4789b0ad5b169c8df5be8b87c"
  },
  {
    "url": "assets/js/38.3ff60c54.js",
    "revision": "4a98ab3e9f1557b62e6fada1d354281d"
  },
  {
    "url": "assets/js/39.4ddb480c.js",
    "revision": "4af978239ab69c9c4610227a5ad24acf"
  },
  {
    "url": "assets/js/4.fb6d1e0f.js",
    "revision": "bc433a7803b3e37dcdec261e49ca3e4c"
  },
  {
    "url": "assets/js/40.c57ab714.js",
    "revision": "72f0fa64b5323819d507b39400e565aa"
  },
  {
    "url": "assets/js/41.baf7a09b.js",
    "revision": "b04f58f86146e92d3f2df7e25705417b"
  },
  {
    "url": "assets/js/42.501f88b5.js",
    "revision": "1de0cbc841c39e98dc7159c77656c2aa"
  },
  {
    "url": "assets/js/43.1b855cb5.js",
    "revision": "825e04e4e08628752ed6b6f003f61c7b"
  },
  {
    "url": "assets/js/44.a1a1f6b7.js",
    "revision": "cfb38ffc3a3e3a0e4eca5aad88482da0"
  },
  {
    "url": "assets/js/45.c4797674.js",
    "revision": "066e5313d6c5dee7174f0a080462fdce"
  },
  {
    "url": "assets/js/46.64d1dfc8.js",
    "revision": "8f4b33f31963248f06fe53c011bdd9e6"
  },
  {
    "url": "assets/js/47.53b47a08.js",
    "revision": "b33ab00da13517a19f510ae6076a4414"
  },
  {
    "url": "assets/js/48.aeaff2a5.js",
    "revision": "9fea31c212e18a1fdd22c29c16518f5a"
  },
  {
    "url": "assets/js/49.bc540f92.js",
    "revision": "abaacf7e43a192c508352afda9ccb98e"
  },
  {
    "url": "assets/js/5.5bec4f64.js",
    "revision": "16aa53844fb2ca056697943356ef3e4c"
  },
  {
    "url": "assets/js/50.c8e86d4e.js",
    "revision": "c21ecc4da368eb6544cecbe6b1b1e9a8"
  },
  {
    "url": "assets/js/51.581946fb.js",
    "revision": "d3c241b9545dfed519c16db8aa976431"
  },
  {
    "url": "assets/js/52.fba39914.js",
    "revision": "ecb031963386b03a0f520700b36646a9"
  },
  {
    "url": "assets/js/53.b2015a27.js",
    "revision": "0e1de55b2517fc38c6aa018b9742ae60"
  },
  {
    "url": "assets/js/54.e802b36a.js",
    "revision": "e404c0265d7e7f0763c8f18b80fd1712"
  },
  {
    "url": "assets/js/55.03d32fcc.js",
    "revision": "f146958c558912caeddaa47b9459a11f"
  },
  {
    "url": "assets/js/56.c579e9f5.js",
    "revision": "770a6e2b9ed34f73045aacddf69014cd"
  },
  {
    "url": "assets/js/57.66204ab6.js",
    "revision": "96acd8d3d330a24a14b7068363abc145"
  },
  {
    "url": "assets/js/58.b65e9376.js",
    "revision": "53b295be401a9ebc3dc2bc6fd3800065"
  },
  {
    "url": "assets/js/59.2390bd21.js",
    "revision": "5c4afc226a329817b27b7919b2bd8513"
  },
  {
    "url": "assets/js/6.955410c8.js",
    "revision": "cc7bcac325c84820b7afbe9da8ec0e0f"
  },
  {
    "url": "assets/js/60.6b9cb92d.js",
    "revision": "e08da47f731b752eb0b0ed5036d9288c"
  },
  {
    "url": "assets/js/61.783e390b.js",
    "revision": "2995e8b9d80c0898c719a54edd23b080"
  },
  {
    "url": "assets/js/62.9c8818c4.js",
    "revision": "2e0515158dfe79575db8474c3d46f8a8"
  },
  {
    "url": "assets/js/63.6294b969.js",
    "revision": "c170f800f0fbb9f71828ff3d005b36e9"
  },
  {
    "url": "assets/js/64.a504a898.js",
    "revision": "7d8810001f4a21fa8c458be1f451fd12"
  },
  {
    "url": "assets/js/65.51f7bc8b.js",
    "revision": "5996a637f2d632b62a8287cd1c3b01ba"
  },
  {
    "url": "assets/js/66.eeaa7218.js",
    "revision": "2171c346da9a65e9694fae15baa6fa31"
  },
  {
    "url": "assets/js/67.c8dd092a.js",
    "revision": "9c63d8cc7c3a3d80d992f43c4be9e19a"
  },
  {
    "url": "assets/js/68.690d3e62.js",
    "revision": "c95bbf9944d7b1528e863b8a8bf327cb"
  },
  {
    "url": "assets/js/69.1cb62fe6.js",
    "revision": "46254a45d3e5542bd07e70f39c740fc8"
  },
  {
    "url": "assets/js/7.eeece75d.js",
    "revision": "66a2e44e054a23830bbad3f7bc0fccb0"
  },
  {
    "url": "assets/js/70.9bcff00b.js",
    "revision": "505b0ed6a81d95707893332424c53635"
  },
  {
    "url": "assets/js/71.e15a5998.js",
    "revision": "71b45fc6aae9ac5617611c15a83ac015"
  },
  {
    "url": "assets/js/72.4261e7c2.js",
    "revision": "2dfccaac524d6f9c0a89030cb8d41cce"
  },
  {
    "url": "assets/js/73.3debc585.js",
    "revision": "5a41cbd43e1d9dec9a3f6319bcd4a3dd"
  },
  {
    "url": "assets/js/74.deadb7f0.js",
    "revision": "283ef62b493e973e3e2cec408839a754"
  },
  {
    "url": "assets/js/75.3138d51a.js",
    "revision": "2f191057610c15d641698ffa8f497053"
  },
  {
    "url": "assets/js/76.d1956e1e.js",
    "revision": "074da37cb7232e35e19fa20d1c120ac2"
  },
  {
    "url": "assets/js/77.1e61bd15.js",
    "revision": "b71687fb6d17097fabd5d7e6ff186d9c"
  },
  {
    "url": "assets/js/78.5134230f.js",
    "revision": "834fb1328f29ac651453b68e13f254e5"
  },
  {
    "url": "assets/js/79.0a24e0ec.js",
    "revision": "c226cd0152bea8caee371a62518eeac2"
  },
  {
    "url": "assets/js/8.dc7dd2ce.js",
    "revision": "4ae0eda84c254fe7a432b8c14f242bfa"
  },
  {
    "url": "assets/js/80.d5dca169.js",
    "revision": "95a38bb0a3a45971b4878f3e1d2c0002"
  },
  {
    "url": "assets/js/81.cafea166.js",
    "revision": "932fb0577f822b350483457581acd9c0"
  },
  {
    "url": "assets/js/82.58129a44.js",
    "revision": "fbad893621fbecc9587e9c59ea5e363a"
  },
  {
    "url": "assets/js/83.4c05b86b.js",
    "revision": "732d4a508c263f66b3de3bc7d850f528"
  },
  {
    "url": "assets/js/84.e2019b2c.js",
    "revision": "aa49adbe269dba22c9e4efa107ce6d4f"
  },
  {
    "url": "assets/js/85.14eb5e29.js",
    "revision": "2b7795bdcf4e9d437e348c3eda9cd13e"
  },
  {
    "url": "assets/js/86.3a7cbe40.js",
    "revision": "90df374cc376df40e2651cc9aa65e9c1"
  },
  {
    "url": "assets/js/87.a044cfbd.js",
    "revision": "341abef99be4d12fcd4372a7566a6e70"
  },
  {
    "url": "assets/js/88.91d15c78.js",
    "revision": "832b58128b78e3d5a2571f7c5cd7ccb2"
  },
  {
    "url": "assets/js/89.8a9f803e.js",
    "revision": "aa315c7791bf82fa85d7b720d1bfe66b"
  },
  {
    "url": "assets/js/9.e2a59765.js",
    "revision": "fde2d50eec2b744c0f0c3cc47d7aaf80"
  },
  {
    "url": "assets/js/90.51cc100c.js",
    "revision": "064cc26a25d45734f708747a30a754af"
  },
  {
    "url": "assets/js/91.b85d0bf5.js",
    "revision": "3a1cff06112e69049dd6db7d27c11eeb"
  },
  {
    "url": "assets/js/92.a83df3a6.js",
    "revision": "1096dbc199c200b8f73f58cc264ee1bb"
  },
  {
    "url": "assets/js/93.e71681cb.js",
    "revision": "d511b2f7c3efc43d4f9e16411a82907a"
  },
  {
    "url": "assets/js/app.c9b72092.js",
    "revision": "7991615b26afac4b35e2060543aa6caf"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "e8b79c28000ab46f5ef7623e50144bcb"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "22f7a6dbf18ea049923c9af6da18173c"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "0a5c397018c707b467cbb7849be34600"
  },
  {
    "url": "categories/index.html",
    "revision": "fb00b22ac42adf4ab77b0f4e69a54807"
  },
  {
    "url": "fe-optimize-ppt/dist/index.css",
    "revision": "6a85ecbd56893b84c2ced56cac0d87ad"
  },
  {
    "url": "fe-optimize-ppt/dist/reset.css",
    "revision": "4042c1a43777d540673cabc97cec67b2"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.css",
    "revision": "fb190b58a8ad7e758578f8908f66e738"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.esm.js",
    "revision": "551ac08d8cf1e54d9f864fd9d997a977"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.js",
    "revision": "0d51b30ccefb9fa78c3b0299f70e8ba4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/beige.css",
    "revision": "168843d058f77ce1b862753eca43d30c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/black.css",
    "revision": "8a3401cc1e186995a9a7fc8a4b99bb82"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/blood.css",
    "revision": "19425df0662435565eb8e1a63e65dddc"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.css",
    "revision": "488966d15e97f072801d7e348f4b5141"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro.css",
    "revision": "5ae239fba183e7f0dd606e4c79caf533"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/league.css",
    "revision": "2fab5ea22adfd7f54895534568de3a6c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/moon.css",
    "revision": "4b5c35dbcf6447be91bdb5e8cc503057"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/night.css",
    "revision": "ab28f9552296fbef915916adf1d2bd8f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/serif.css",
    "revision": "2a041eb1d6931608f224bd30c174f48c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/simple.css",
    "revision": "a7b43905ec2f19f2e74d38233d45d44f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/sky.css",
    "revision": "105ae904114465f48da51860171b6858"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/solarized.css",
    "revision": "ef1a9af27a4f36d2bf2955801b598b5a"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/white.css",
    "revision": "a3b0a31c1d49bbed890bf1a4b2222a29"
  },
  {
    "url": "fe-optimize-ppt/index.html",
    "revision": "52f44d587e55e82337a2445741bfdfef"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.esm.js",
    "revision": "a8d0717a9a746848cff76bafdcdc295d"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.js",
    "revision": "691702d292e8fc58261570028f7af601"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/monokai.css",
    "revision": "8c43a819e1268fc57605f500adff816b"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/plugin.js",
    "revision": "f6168dfe21b1bd3d98d09916fb6bd641"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/zenburn.css",
    "revision": "28d5b9497037a12cb5a15644fea2f1c3"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.esm.js",
    "revision": "fdfa34f2c1d23b8386ea91464acaf7ff"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.js",
    "revision": "9166010a6466bbad0ea0ae00c52b2927"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/plugin.js",
    "revision": "2fe72cc983411cf94dd81d679955f141"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.esm.js",
    "revision": "1475913f4862b5e8f7f1536391893a18"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.js",
    "revision": "533dd2f86ac5475cd0d20d2f77efde36"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/plugin.js",
    "revision": "9be0251dd9411c0a96ee050d5bc3bef1"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.esm.js",
    "revision": "22a20e5a835c1ce6ec06c8f87ba8dd44"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.js",
    "revision": "25124c87ba29154deecbec4a95f12005"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/plugin.js",
    "revision": "49924c937e252f47ac915f643e01ec43"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/speaker-view.html",
    "revision": "1599c3637c3db09d47992d53891f7e08"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/plugin.js",
    "revision": "032f7408cd38991c3bd861582dd6322d"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.esm.js",
    "revision": "132b99229d67db17feda69678556142a"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.js",
    "revision": "ecc723fcbd433db7b74fd2cab115ff67"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/plugin.js",
    "revision": "20eb10e380080e9f750ec77dedb76618"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.esm.js",
    "revision": "8e430e6444e4f75223fd407e59d20488"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.js",
    "revision": "b209a75b6c4cc6df8dd5383cf9b6ee22"
  },
  {
    "url": "img/avatar-2.jpg",
    "revision": "55b9603cdb0caff91ecd803d047730b1"
  },
  {
    "url": "img/avatar-2.png",
    "revision": "d3a1ca94d8290aa71371dda0664aaf14"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "037dec754a042491ae29f2bc02eb1814"
  },
  {
    "url": "img/avatar.png",
    "revision": "a19cc6aacf9b570b8a4047da4796146f"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "img/logo.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
  },
  {
    "url": "img/wechat.png",
    "revision": "6e59e5e272dc257ff973e28f527c7929"
  },
  {
    "url": "img/wx-global.png",
    "revision": "322c6daf8ff463270db68048b23b7a23"
  },
  {
    "url": "index.html",
    "revision": "e5862529c39a72892793d1fd9634dba1"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "3db3b7d8f2074defde4add021f767c3f"
  },
  {
    "url": "pages/02cc618debc84/index.html",
    "revision": "50d2cce8fd06957f88221b6bdecf9e8a"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "7979e281d1eaf21f50230dcd93b019b6"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "4e1608d8188a3aadf682fe7627607181"
  },
  {
    "url": "pages/0d5c101d17afe/index.html",
    "revision": "11ad49765033f2ab1e750bcea054a3dc"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "6461387e77a4d9e987054f2fc1bdbd5e"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "3ef4f7cdcfbea1178e1a0648b88bee89"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "99d9140665e0c18dbba12eab213048d5"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "fb09d26cb08a7310a7562050f7662f89"
  },
  {
    "url": "pages/2c385d954af63/index.html",
    "revision": "d93f5768438dbccdeea033bc38edc011"
  },
  {
    "url": "pages/38a448a32b1a5/index.html",
    "revision": "6d144aecf6350aed04cbf319088a6df8"
  },
  {
    "url": "pages/3cea8c7d5577f/index.html",
    "revision": "1507aa3c47e98dfb539bb362a7bba9ae"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "32608ac186f4bd6bda9f1dd12c2addc8"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "c9cfc1fa08cd21073861eb37c910f805"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "5da32cfcfad6a0b2ac9e4bafa48a65e9"
  },
  {
    "url": "pages/43eb19df1cf71/index.html",
    "revision": "0ac0a280e192dde247f5b715003c6c96"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "3f8d311748431754e5d1cae78ea5156e"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "25c186b31647d424eda8446cf17beefb"
  },
  {
    "url": "pages/49e2a780662e9/index.html",
    "revision": "0d85fac7a8b0777578906fb1defb5539"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "650bd79f7acd3141636203a0e930c8e3"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "6780134bfc981bc427ae04ddeb7ffefe"
  },
  {
    "url": "pages/512f6ae339a31/index.html",
    "revision": "4a2a5f69041bc68b9e32027df67ad3e9"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "d406a9e63b94e64754d17592f1d148bb"
  },
  {
    "url": "pages/57a4c8a168dc4/index.html",
    "revision": "1c5e71c569f302fa717c5b6c6d93a383"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "8fd04de83356dd5eb45d8a57d8817baa"
  },
  {
    "url": "pages/71a2332238f87/index.html",
    "revision": "c7c257f9e84b9bbb7a2e94ba04329351"
  },
  {
    "url": "pages/72dcdd7f52781/index.html",
    "revision": "7ac81256dd0c10c65b0e5a5314994443"
  },
  {
    "url": "pages/74b89136d37c/index.html",
    "revision": "f66d031006e01643dc8ee3dfa31faa5d"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "088e05289b1ec5dd48b5cbde07259d42"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "2596f0009122f6a6fe9c07a2eb3fbbcb"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "4d9442d2e9d2215476d16fa834d5e110"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "75e3e15e22f3742162ec06c3f0f18d98"
  },
  {
    "url": "pages/90e7ed083bcfe/index.html",
    "revision": "6a0d3c4c99c6681f4120a13498d613de"
  },
  {
    "url": "pages/91bad3266146c/index.html",
    "revision": "709877ada51567488ce6e75e5a077d98"
  },
  {
    "url": "pages/98a7a4ab3b308/index.html",
    "revision": "8cf1b5c71328cff18694e4f0f44a39df"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "952c25caa2c8f0fb5882ff9c3c6fa900"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "61768d3898bd92356ef0c44f5e3f8668"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "cbac35f3f678f19401a428c35e2f7e5e"
  },
  {
    "url": "pages/a336385364f8/index.html",
    "revision": "2072b4884f13b7a58445bde29ad1a99c"
  },
  {
    "url": "pages/a606010c57cc5/index.html",
    "revision": "7bb12703c538b4b800ff01bbd134299a"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "45c0060e91b2878ff16337990c429be8"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "8ef57e3eeb83e6382ee335de41e8de79"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "de6121fe9b16f129b91c5f560e5756f5"
  },
  {
    "url": "pages/b0c63028d916e/index.html",
    "revision": "3679391910665105e549992421fd43a9"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "6e73cd60943b4d5d7e6a43e812191739"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "01d98f9419fb24a64390d79274956f6a"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "3382fdb504ce0a6cb1c1ed5ae3f48f64"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "e9951589f94052b9ca8de4a872571653"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "a08651d67ac05e5822b5d68b06aaf28a"
  },
  {
    "url": "pages/db19da37f8d9a/index.html",
    "revision": "33caa44f36991edc4517230637790caf"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "b6941e2a354e0c70bc420b0812b18e4b"
  },
  {
    "url": "pages/e8f47145dd883/index.html",
    "revision": "fc2986f802cd38503c722f7c6f30ad5f"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "88a229908806bfdc7a47056721022499"
  },
  {
    "url": "pages/ef5b9c9dd32a7/index.html",
    "revision": "29c47018bd18ac1f33b7421bf5cfc85e"
  },
  {
    "url": "pages/f15a7725f87e7/index.html",
    "revision": "eb8db233d9de90de0e734b82282ca30c"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "7d306b3ac8d16de30a0e6a318bbe60ed"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "37563715fd3240c250217d1424ef3d88"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "df7befcbf79d8fc024ffcb88eae96b63"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "fdcd3d4717494a2fcb67ef76a0824dca"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "9d1e4ff2e5b13fd0044b3f2997354a32"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "c353e85bb3fdaef2028d02e6fbc9d677"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "f9f657a6b9755e3878873deebc2fea6f"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "c04c5baf432515f1be9303595c83d7d5"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "60924590ee489d7eb600661254fdb0af"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "09c06d40db2b210dcdd28e099f44c1ec"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "44034a189b358acc60880a172ace8042"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "02aa242255f6c2d246bc8724ea893eb4"
  },
  {
    "url": "study/css/reset.css",
    "revision": "c8df9e9e48e86c4fcd3972a0111e46fc"
  },
  {
    "url": "study/index.html",
    "revision": "ce394c016a706169a6b250b2743f180b"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "05b24b6636bd972f0f436263abc9dea0"
  },
  {
    "url": "study/static/css/2.8f6577cd.chunk.css",
    "revision": "8aacd14455dd3a1064dca30097202e31"
  },
  {
    "url": "study/static/css/main.61320533.chunk.css",
    "revision": "0ff1be3b98657889bb1d1ba0da308239"
  },
  {
    "url": "study/static/js/main.f022aa25.chunk.js",
    "revision": "b08cd1d21871988e888f3ea9f6a76fee"
  },
  {
    "url": "study/static/js/runtime-main.3725ae0b.js",
    "revision": "371fc4c0b43299ae7ad805c2e21ff81d"
  },
  {
    "url": "study/static/media/404.9161e238.png",
    "revision": "9161e238b798c444b732dbbb7420a09e"
  },
  {
    "url": "study/static/media/logo.421642f8.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "tags/index.html",
    "revision": "334ad24b0a40208cf8639cd92292a630"
  },
  {
    "url": "vue-iframe-print/css/app.80764a13.css",
    "revision": "41670c952da5bab26acafc6186da19b0"
  },
  {
    "url": "vue-iframe-print/index.html",
    "revision": "96237c9fbc239de1496d1c1e8c36d7b9"
  },
  {
    "url": "vue-iframe-print/js/app.47469697.js",
    "revision": "1e472a8fb25771accb2f89487ccc440f"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "5d2e1c01d27e71fb2895708d03590996"
  },
  {
    "url": "web/docs/alexwjj/fe-study/index.html",
    "revision": "0c498153b13d17df3fba90d0d9a180ee"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "8cc7ac71f2d1a9818dc518e27f198a03"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "dd6a9464c8f6fc950b86a140d0bffb2a"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "a36157443f36346a3847479f380676be"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "1a51447c4ca0c57368928bd8ef8b99f5"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "50e5716bcd8da2df8e5f8d19ee6881cf"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "700df44278a08014d81528f4d22221df"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "0b4d80c174756b9c3f610ec577ceae0e"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "1548ae9dc9026cf55a8f679262372565"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "30223d5975b2d9452654abbce827e21e"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "bf0a5e6052a3cfbe966c423af4d361e9"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "7c9a4d94d204ac8a00c82529b2a17dd9"
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
