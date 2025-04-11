
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "route": "/wishList"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5PNX5KHO.js"
    ],
    "route": "/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TBJCIB6F.js"
    ],
    "route": "/brands"
  },
  {
    "renderMode": 2,
    "route": "/allorders"
  },
  {
    "renderMode": 0,
    "route": "/allorders/*"
  },
  {
    "renderMode": 0,
    "route": "/shipping-address/*"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/forget-password"
  },
  {
    "renderMode": 0,
    "route": "/productdetails/*"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27693, hash: 'a1383f70b45dc994e8f3aa03a51cd77e51cc868e639030dd426207d35848d02d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17395, hash: '0275fe2926bfe72b8dcfb024893ae764f3f9e15860da41da307586a591218156', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 44611, hash: 'a7afcda68e38db74c3eca267704f5ea828d4a5ffa4466be3b5fa2ed8fd2a3fcf', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'wishList/index.html': {size: 44611, hash: 'a7afcda68e38db74c3eca267704f5ea828d4a5ffa4466be3b5fa2ed8fd2a3fcf', text: () => import('./assets-chunks/wishList_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 49942, hash: '7558957119c117155de0bddbef9c9aab2c8ea711083cff35ce95e682396cff5e', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 136672, hash: 'c7e0bb54a5ceffd5de6a72f57748b07eb28d3bc807d16bc08445d46a18ffa23c', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 42524, hash: 'ec6d2bfd34077eda0d9461084989135a7aef700f3279ae9a131d7dc13eec1fbb', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 153755, hash: 'bbd081666326ebff0f47b49841a2e0b46b00a13652253252c0e52dc08c4ec933', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 68002, hash: '545eec3f386eabc5defd06f07f97a85936a672b2141743bc35f442886e55f602', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 44611, hash: 'a7afcda68e38db74c3eca267704f5ea828d4a5ffa4466be3b5fa2ed8fd2a3fcf', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'forget-password/index.html': {size: 43904, hash: '58bb7e3c42b6a43b9cfa7758ab26f52a3baaa6f2d2771d31064a90e24e42c536', text: () => import('./assets-chunks/forget-password_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45131, hash: '33786c29a5e4308b487a56cc111b829a5063aeccaeb0398b6c971f10c77f00f5', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-6QRGG3BV.css': {size: 140969, hash: 'bcckw/L1Gvk', text: () => import('./assets-chunks/styles-6QRGG3BV_css.mjs').then(m => m.default)}
  },
};
