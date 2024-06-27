/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/red_velvet_-_demo-webfont.woff2 */ "./src/assets/fonts/red_velvet_-_demo-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/red_velvet_-_demo-webfont.woff */ "./src/assets/fonts/red_velvet_-_demo-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/nexarustsans-black-webfont.woff2 */ "./src/assets/fonts/nexarustsans-black-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/nexarustsans-black-webfont.woff */ "./src/assets/fonts/nexarustsans-black-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/anastasiia-chepinska-lcfH0p6emhw-unsplash.jpg */ "./src/assets/img/anastasiia-chepinska-lcfH0p6emhw-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*---------------------------------*\\
|                                   |
|           Theme Colours           |
|                                   |
\\*---------------------------------*/
:root {
    --header-background-col: rgba(37, 27, 22, 0.5);
    --restaurant-name-col: rgb(241, 226, 209);
    --tablink-background-col: rgba(37, 27, 22, 0.8);
    --tablink-hover-col: rgba(241, 226, 209, 0.5);
    --tablink-active-col: rgba(185,151,110, 0.9);
    --tablink-font-col: white;
    --about-and-menu-text-col: rgb(241, 226, 209);
    --about-and-menu-background-col: rgba(37, 27, 22, 0.5);
}

/*---------------------------------*\\
|                                   |
|           Custom  Fonts           |
|                                   |
\\*---------------------------------*/
@font-face {
    font-family: 'RedVelvet';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'NexaRustSansBlack';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');
    font-weight: normal;
    font-style: normal;
}

/*---------------------------------*\\
|                                   |
|        Multi-section Styles       |
|                                   |
\\*---------------------------------*/
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--font-col);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    display: grid;
    grid-template-rows: max-content 1fr;
    height: 100%;
    width: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;

    /* Used to add an opaque black color over the background image  */
    box-shadow: inset 0 0 0 1000px rgba(0, 0 , 0, 0.3);
}

/*---------------------------------*\\
|                                   |
|           Header Styles           |
|                                   |
\\*---------------------------------*/
header {
    display: flex;
    background-color: var(--header-background-col);
}

.box {
    flex: 1;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.box:nth-of-type(1), .box:nth-of-type(3) {
    padding: 10px;
}

.box:nth-of-type(2) {
    justify-content: center;
    align-items: end;
}

#header-coffee-logo {
    height: 50px;
    width: 50px;
}

/* Nav bar styling */
nav {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
}
.tablink, .tablinkActive {
    cursor: pointer;
    float: left;
    color: var(--tablink-font-col);
    border: none;
    outline: none;
    padding: 10px 20px;
    height: 100%;
    flex: 1;
    font-size: 20px;
    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;
    font-weight: 300;
}

.tablink {
    background-color: var(--tablink-background-col);
}

.tablinkActive {
    background-color: var(--tablink-active-col);
}

.tablink:hover {
    background-color: var(--tablink-hover-col);
}

/*---------------------------------*\\
|                                   |
|          Content  Styles          |
|                                   |
\\*---------------------------------*/
#content, .body-logo, .about, .menu, article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#content {
    padding: 50px;
}

#body-coffee-logo {
    height: 300px;
    width: 300px;
}

.body-logo > h1, .body-logo > h2 {
    color: var(--restaurant-name-col);
}

.body-logo > h1 {
    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;
    font-size: 72px;
}

.body-logo > h2 {
    font-family: 'RedVelvet', Helvetica, sans-serif;
    font-size: 36px;
}

article {
    gap: 10px;
}

.about, .menu {
    color: var(--about-and-menu-text-col);
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    background-color: var(--about-and-menu-background-col);
    padding: 50px;
    gap: 20px;
}

.about h1, .menu h1 {
    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;
    font-size: 50px;
}

.about article h2, .menu article h2 {
    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;
    font-size: 36px;
}

.menu article div h3 {
    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;
    font-size: 20px;
}

article p {
    max-inline-size: 66ch;
    line-height: 1.5em;
}

.about hr {
    width: 100%
}

table {
    border-collapse: separate;
    letter-spacing: 1px;
    border-spacing: 20px 5px;
}

td {
    text-align: start;
}

#drinks, #food {
    display: grid;
    gap: 20px 40px;
}

#drinks {
    grid-template: repeat(5, max-content) / repeat(2, 1fr);
}

#food {
    grid-template: repeat(5, max-content) / repeat(2, 1fr);
}

#menuDrinkTitle, #menuFoodTitle {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: center;
}

.drinks p, .food p {
    max-inline-size: 40ch;
}

#menuImg {
    height: 250px;
    width: 375px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;oCAIoC;AACpC;IACI,8CAA8C;IAC9C,yCAAyC;IACzC,+CAA+C;IAC/C,6CAA6C;IAC7C,4CAA4C;IAC5C,yBAAyB;IACzB,6CAA6C;IAC7C,sDAAsD;AAC1D;;AAEA;;;;oCAIoC;AACpC;IACI,wBAAwB;IACxB;8DACuE;IACvE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC;8DACwE;IACxE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;;;oCAIoC;AACpC;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,yDAAmF;IACnF,sBAAsB;IACtB,4BAA4B;IAC5B,kCAAkC;IAClC,4BAA4B;;IAE5B,iEAAiE;IACjE,kDAAkD;AACtD;;AAEA;;;;oCAIoC;AACpC;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,oBAAoB;AACpB;IACI,OAAO;IACP,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,eAAe;IACf,WAAW;IACX,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,eAAe;IACf,uDAAuD;IACvD,gBAAgB;AACpB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;;;oCAIoC;AACpC;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,uDAAuD;IACvD,eAAe;AACnB;;AAEA;IACI,+CAA+C;IAC/C,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,qCAAqC;IACrC,kCAAkC;IAClC,eAAe;IACf,sDAAsD;IACtD,aAAa;IACb,SAAS;AACb;;AAEA;IACI,uDAAuD;IACvD,eAAe;AACnB;;AAEA;IACI,uDAAuD;IACvD,eAAe;AACnB;;AAEA;IACI,uDAAuD;IACvD,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI;AACJ;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB","sourcesContent":["/*---------------------------------*\\\n|                                   |\n|           Theme Colours           |\n|                                   |\n\\*---------------------------------*/\n:root {\n    --header-background-col: rgba(37, 27, 22, 0.5);\n    --restaurant-name-col: rgb(241, 226, 209);\n    --tablink-background-col: rgba(37, 27, 22, 0.8);\n    --tablink-hover-col: rgba(241, 226, 209, 0.5);\n    --tablink-active-col: rgba(185,151,110, 0.9);\n    --tablink-font-col: white;\n    --about-and-menu-text-col: rgb(241, 226, 209);\n    --about-and-menu-background-col: rgba(37, 27, 22, 0.5);\n}\n\n/*---------------------------------*\\\n|                                   |\n|           Custom  Fonts           |\n|                                   |\n\\*---------------------------------*/\n@font-face {\n    font-family: 'RedVelvet';\n    src: url('./assets/fonts/red_velvet_-_demo-webfont.woff2') format('woff2'),\n        url('./assets/fonts/red_velvet_-_demo-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'NexaRustSansBlack';\n    src: url('./assets/fonts/nexarustsans-black-webfont.woff2') format('woff2'),\n        url('./assets/fonts/nexarustsans-black-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n/*---------------------------------*\\\n|                                   |\n|        Multi-section Styles       |\n|                                   |\n\\*---------------------------------*/\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: var(--font-col);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    height: 100%;\n    width: 100%;\n    background-image: url('./assets/img/anastasiia-chepinska-lcfH0p6emhw-unsplash.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-attachment: fixed;\n\n    /* Used to add an opaque black color over the background image  */\n    box-shadow: inset 0 0 0 1000px rgba(0, 0 , 0, 0.3);\n}\n\n/*---------------------------------*\\\n|                                   |\n|           Header Styles           |\n|                                   |\n\\*---------------------------------*/\nheader {\n    display: flex;\n    background-color: var(--header-background-col);\n}\n\n.box {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n}\n\n.box:nth-of-type(1), .box:nth-of-type(3) {\n    padding: 10px;\n}\n\n.box:nth-of-type(2) {\n    justify-content: center;\n    align-items: end;\n}\n\n#header-coffee-logo {\n    height: 50px;\n    width: 50px;\n}\n\n/* Nav bar styling */\nnav {\n    flex: 1;\n    display: flex;\n    flex-wrap: nowrap;\n    height: 100%;\n}\n.tablink, .tablinkActive {\n    cursor: pointer;\n    float: left;\n    color: var(--tablink-font-col);\n    border: none;\n    outline: none;\n    padding: 10px 20px;\n    height: 100%;\n    flex: 1;\n    font-size: 20px;\n    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;\n    font-weight: 300;\n}\n\n.tablink {\n    background-color: var(--tablink-background-col);\n}\n\n.tablinkActive {\n    background-color: var(--tablink-active-col);\n}\n\n.tablink:hover {\n    background-color: var(--tablink-hover-col);\n}\n\n/*---------------------------------*\\\n|                                   |\n|          Content  Styles          |\n|                                   |\n\\*---------------------------------*/\n#content, .body-logo, .about, .menu, article {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    padding: 50px;\n}\n\n#body-coffee-logo {\n    height: 300px;\n    width: 300px;\n}\n\n.body-logo > h1, .body-logo > h2 {\n    color: var(--restaurant-name-col);\n}\n\n.body-logo > h1 {\n    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;\n    font-size: 72px;\n}\n\n.body-logo > h2 {\n    font-family: 'RedVelvet', Helvetica, sans-serif;\n    font-size: 36px;\n}\n\narticle {\n    gap: 10px;\n}\n\n.about, .menu {\n    color: var(--about-and-menu-text-col);\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    background-color: var(--about-and-menu-background-col);\n    padding: 50px;\n    gap: 20px;\n}\n\n.about h1, .menu h1 {\n    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;\n    font-size: 50px;\n}\n\n.about article h2, .menu article h2 {\n    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;\n    font-size: 36px;\n}\n\n.menu article div h3 {\n    font-family: 'NexaRustSansBlack', Helvetica, sans-serif;\n    font-size: 20px;\n}\n\narticle p {\n    max-inline-size: 66ch;\n    line-height: 1.5em;\n}\n\n.about hr {\n    width: 100%\n}\n\ntable {\n    border-collapse: separate;\n    letter-spacing: 1px;\n    border-spacing: 20px 5px;\n}\n\ntd {\n    text-align: start;\n}\n\n#drinks, #food {\n    display: grid;\n    gap: 20px 40px;\n}\n\n#drinks {\n    grid-template: repeat(5, max-content) / repeat(2, 1fr);\n}\n\n#food {\n    grid-template: repeat(5, max-content) / repeat(2, 1fr);\n}\n\n#menuDrinkTitle, #menuFoodTitle {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: center;\n}\n\n.drinks p, .food p {\n    max-inline-size: 40ch;\n}\n\n#menuImg {\n    height: 250px;\n    width: 375px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/data/menu-items.csv":
/*!****************************************!*\
  !*** ./src/assets/data/menu-items.csv ***!
  \****************************************/
/***/ ((module) => {

module.exports = [{"menuName":"Deadline Dash","realName":"espresso","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£0.60","priceDrinkMed":"-","priceDrinkLarge":"-","description":"Embrace the rush with our Deadline Dash Espresso, crafted to propel you through those critical moments with bold intensity. This robust shot is smooth yet powerful, making it the pefect companion for tackling deadlines and seizing the day."},{"menuName":"Grind and Go","realName":"americano","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£1.80","priceDrinkMed":"£2.10","priceDrinkLarge":"£2.40","description":"Get ready for your day with our Grind and Go Americano, a no-nonsense coffee that fuels your day with efficiency and flabour. This classic blend of espresso and hot water offers a robust and invorating experience, perfect for those on the move."},{"menuName":"Overtime Original","realName":"redEye","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£2.40","priceDrinkMed":"£2.70","priceDrinkLarge":"£3.00","description":"Step up your game with our Overtime Original Red Eye, a boldly brewed Americano with an extra shot of Espresso for an added punch. Perfect for those extra demanding days where you need an extra boost of energy to push through."},{"menuName":"Flatline at Five","realName":"flatWhite","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£2.30","priceDrinkMed":"-","priceDrinkLarge":"-","description":"Unwind after a long day with our Flatline at Five Flat White, a velvety smooth blend of Espresso and steamed milk that brings a moment of tranqulity amidst all the hustle. Whether youy're winding down from the workday or catching up with friends, Flatline at Five will soothe your senses and restore your energy for whatever comes next."},{"menuName":"Latte to the Meeting","realName":"latte","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£2.15","priceDrinkMed":"£2.45","priceDrinkLarge":"£2.75","description":"Arrive prepared and refreshed with our Latte to the Meeting, a smooth and creamy blend of espresso and steamed milk that ensures you're ready for whatever the day throws at you. This well-balanced drink offers a gentle kick of caffeine wrapped in a comforting blanket of frothy milk, perfect for those long, dry meetings."},{"menuName":"Corporate Cream","realName":"cappuccino","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£2.15","priceDrinkMed":"£2.45","priceDrinkLarge":"£2.75","description":"Elevate your coffee breaks with our Corporate Cream Cappuccino, a luxurious blend of Espresso, velvety steamed milk, and a delicate layer of froth. This indulgent drink strikes the perfect balance between strong espresso and creamy texture, offering a sophisticated and satisfying experience."},{"menuName":"Boardroom Bliss","realName":"mocha","itemType":"drinks","priceFood":null,"priceDrinkSmall":"£2.25","priceDrinkMed":"£2.55","priceDrinkLarge":"£2.85","description":"Experience a moment of ecstasy with our Boardroom Bliss Mocha, a decadent fusion of rich espresso, velvety chocolate, and steamed milk. This indulgent treat is crafted to perfection, offering a harmonious balance of coffee and chocolate flavours that delight the senses."},{"menuName":"Stress Buster","realName":"croissant","itemType":"food","priceFood":"£1.50","priceDrinkSmall":null,"priceDrinkMed":null,"priceDrinkLarge":null,"description":"Find bliss in every bite with our Stress Buster Croissant, a flaky and buttery pastry that promises to melt away tension. This classic French delight is baked to golden perfection, offering layers of light, crispy dough that pair perfectly with a steaming cup of coffee."},{"menuName":"Deadline Delight","realName":"painAuChocolat","itemType":"food","priceFood":"£1.90","priceDrinkSmall":null,"priceDrinkMed":null,"priceDrinkLarge":null,"description":"Savour a moment of pure indulgence with our Deadline Delight Pain au Chocolat, a decadent pastry that turns deadlines into delicious escapes. Delicate layers of buttery, flaky dough envelop a rich, gooey chocolate core, creating a perfect harmony of flabours and textures."},{"menuName":"Cubicle Comfort","realName":"danish","itemType":"food","priceFood":"£1.85","priceDrinkSmall":null,"priceDrinkMed":null,"priceDrinkLarge":null,"description":"Experience a moment of cozy relaxation with our Cubicle Comfort Cinnamon Danish, a warm and comforting pastry that bring a touch of home to your workspace. Layers of flaky pastry generously filled with a sweet cinnamon swirl, offering a perfect balance of sweetness and spice."},{"menuName":"Office Oasis","realName":"blueberryMuffin","itemType":"food","priceFood":"£2.20","priceDrinkSmall":null,"priceDrinkMed":null,"priceDrinkLarge":null,"description":"Discover a burst of fruity goodness with our Office Oasis Blueberry Muffins, a delightful treat that brings a taste of sunshine to your office and routine. Packed with plump blueberries and baked to perfection, each bite offers a refreshing blend of sweet and tart flabours."}]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/page-creation.js":
/*!******************************!*\
  !*** ./src/page-creation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   populateAboutPage: () => (/* binding */ populateAboutPage),
/* harmony export */   populateHomePage: () => (/* binding */ populateHomePage),
/* harmony export */   populateMenuPage: () => (/* binding */ populateMenuPage)
/* harmony export */ });
/* harmony import */ var _assets_img_coffee_beans_left_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/coffee-beans-left-svgrepo-com.svg */ "./src/assets/img/coffee-beans-left-svgrepo-com.svg");
/* harmony import */ var _assets_img_nathan_dumlao_Y3AqmbmtLQI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg */ "./src/assets/img/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg");
/* harmony import */ var _assets_data_menu_items_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/data/menu-items.csv */ "./src/assets/data/menu-items.csv");
/* harmony import */ var _assets_data_menu_items_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_data_menu_items_csv__WEBPACK_IMPORTED_MODULE_2__);




function colorActiveTab(tabId) {
    let btns = document.querySelectorAll('button');

    for (let i=0; i < btns.length; i++) {
        if (btns[i].id === tabId && btns[i].classList.contains('tablink')) {
            btns[i].classList.remove('tablink');
            btns[i].classList.add('tablinkActive');
        }
        else if (btns[i].id != tabId && btns[i].classList.contains('tablinkActive')) {
            btns[i].classList.remove('tablinkActive');
            btns[i].classList.add('tablink');
        }
    }
}

function populateHomePage() {
    colorActiveTab('homeBtn');
    const contentDiv = document.getElementById('content');

    const bodyLogo = document.createElement('div');
    bodyLogo.classList.add('body-logo');

    const logoImg = new Image();
    logoImg.src = _assets_img_coffee_beans_left_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;
    logoImg.alt = "Coffee Beans Logo";
    logoImg.id = "body-coffee-logo";

    const logoTitle = document.createElement('h1');
    logoTitle.innerHTML = "Daily Grind";

    const logoMotto = document.createElement('h2');
    logoMotto.innerHTML = "Fuelling office heroes since 2024";

    bodyLogo.appendChild(logoImg);
    bodyLogo.appendChild(logoTitle);
    bodyLogo.appendChild(logoMotto);

    contentDiv.appendChild(bodyLogo);
}

function populateAboutPage() {
    colorActiveTab('aboutBtn');
    const contentDiv = document.getElementById('content');

    // create the content for the about tab
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    // create a line to separate content sections
    const line = document.createElement('hr');

    const aboutTitle = document.createElement('h1');
    aboutTitle.innerHTML = "About";

    // create content to populate the description section
    const description = document.createElement('article');
    description.setAttribute('id', 'description');
    const descParaOne = document.createElement('p');
    const descParaTwo = document.createElement('p');
    const descParaThree = document.createElement('p');
    descParaOne.innerHTML = "Welcome to Daily Grind, where we celebrate the everyday hustle with a dash of humour and a lot of caffeine. Nestled in the heart of London, our cozy caf&#233; is your go-to spot for a well-deserved coffee break in the midst of your daily grind.";
    descParaTwo.innerHTML = "We believe in turning the ordinatry into the extraordinary. Whether you're fueling up for that early morning meeting or taking a well-earnted breather from the daily office chaos, our carefully crafted coffees and delectable pastries are here to make your day a little brighter.";
    descParaThree.innerHTML = "From our signature blends to our tongue-in-cheek menu, every sip and bite at Daily Grind is designed to uplift and energise. Our friendly baristas are passionate about coffee and dedicated to ensuring each cup is brewed to perfection, just for you.";
    
    const descContent = [
        descParaOne, 
        descParaTwo, 
        descParaThree
    ]

    for (let i=0; i < descContent.length; i++) {
        description.appendChild(descContent[i]);
    }


    // create contnet to populate the opening times section
    const openingTimes = document.createElement('article');
    openingTimes.setAttribute('id', 'openingTimes');
    const openingTimesTitle = document.createElement('h2');
    openingTimesTitle.innerHTML = "Opening Times";

    const timeTable = document.createElement('table');

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const times = [
        "10:00 - 16:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 18:00",
    ]

    for (let i = 0; i < days.length; i++) {
        let row = timeTable.insertRow(i);
        let cellOne = row.insertCell(0);
        cellOne.classList.add('days');
        let cellTwo = row.insertCell(1);
        cellOne.innerHTML = days[i];
        cellTwo.innerHTML = times[i];
    }

    const timeTableContent = [
        openingTimesTitle,
        timeTable
    ]

    for (let i=0; i < timeTableContent.length; i++) {
        openingTimes.appendChild(timeTableContent[i]);
    }

    // create content for contact us section
    const contact = document.createElement('article');
    contact.setAttribute('id', 'contactUs');
    const contactTitle = document.createElement('h2');
    contactTitle.innerHTML = "Contact Us";
    const emailPara = document.createElement('p');
    const phonePara = document.createElement('p');
    emailPara.innerHTML = "<b>Email:</b> arealemail@dailygrindcoffee.com";
    phonePara.innerHTML = "<b>Phone:</b> 01234567890";

    const contactContent = [
        contactTitle,
        emailPara,
        phonePara
    ]

    for (let i=0; i < contactContent.length; i++) {
        contact.appendChild(contactContent[i]);
    }

    // append everything to about div
    const aboutContent = [
        aboutTitle,
        description,
        line,
        timeTable,
        line,
        contact
    ]

    for (let i=0; i < aboutContent.length; i++) {
        aboutDiv.appendChild(aboutContent[i]);
    }

    contentDiv.appendChild(aboutDiv);

}

function populateMenuPage() {
    colorActiveTab('menuBtn');
    const contentDiv = document.getElementById('content');

    // create the content for the menu tab
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // create a title and description section
    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    menuDiv.appendChild(menuTitle);

    // create articles for content
    const articleList = [
        "menuDescription",
        "drinks",
        "food",
        "offers"
    ]

    const articles = {};
    for (let i=0; i < articleList.length; i++) {
        articles[articleList[i]] = document.createElement('article');
        articles[articleList[i]].setAttribute('id', articleList[i]);
    }

    // create content for Menu description
    const menuDescPara = document.createElement('p');
    menuDescPara.innerHTML = "At Daily Grind, our expert baristas take pride in transforming our rich, premium Cuban coffee beans into an excquisite cup of coffee perfection. Our commitment to quality extends beyond our coffee to our freshly baked pastries, crafted daily to complement your favourite brew. Whether you're seeking a robust espresso, velvety latte, or a sweet treat, each visit promises a taste of passion and dedication in every sip and bite.";
    const menuImg = new Image();
    menuImg.src = _assets_img_nathan_dumlao_Y3AqmbmtLQI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;
    menuImg.alt = "Coffee Portafilters";
    menuImg.id = "menuImg";

    const menuContent = [
        menuDescPara, 
        menuImg
    ]

    for (let i=0; i < menuContent.length; i++) {
        articles["menuDescription"].appendChild(menuContent[i]);
    }

    // create an empty object to store the drink DOM items
    const drinksDOMElements = [];
    // create an empty object to store the food DOM items
    const foodDOMElements = [];
    // function to create menu DOM items
    function createMenuItems (item) {
        const line = document.createElement('hr');
        // need different options for food and drink because of the different price structure
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('drinks');
        itemDiv.setAttribute('id', item['realName']);
        
        const itemHeader = document.createElement('h3');
        itemHeader.innerHTML = item['menuName'];
        
        const desc = document.createElement('p');
        desc.innerHTML = item['description'];

        const prices = document.createElement('p');
        if (item['itemType'] === "drinks") {
            prices.innerHTML = `<b>S:</b> ${item['priceDrinkSmall']}&emsp;<b>M:</b> ${item['priceDrinkMed']}&emsp;<b>L:</b> ${item['priceDrinkLarge']}`
        }
        else {
            prices.innerHTML = `${item['priceFood']}`
        }

        const itemElements = [itemHeader, desc, line, prices]
        for (let i=0; i < itemElements.length; i++) {
            itemDiv.appendChild(itemElements[i]);
        }

        if (item['itemType'] === "drinks") {
            drinksDOMElements.push(itemDiv);
        }
        else {
            foodDOMElements.push(itemDiv);
        }
    }

    _assets_data_menu_items_csv__WEBPACK_IMPORTED_MODULE_2___default().forEach(item => {
        createMenuItems(item);
    })

    // sort out the drink section of the page
    const drinkMenuTitleDiv = document.createElement('div');
    drinkMenuTitleDiv.setAttribute('id', "menuDrinkTitle");
    const drinkMenuTitle = document.createElement('h2');
    drinkMenuTitle.innerHTML = "Drinks";
    drinkMenuTitleDiv.appendChild(drinkMenuTitle);

    articles['drinks'].appendChild(drinkMenuTitleDiv);
    drinksDOMElements.forEach(item => {
        articles['drinks'].appendChild(item);
    })

    // sort out food section of the page
    const foodMenuTitleDiv = document.createElement('div');
    foodMenuTitleDiv.setAttribute('id', "menuFoodTitle");
    const foodMenuTitle = document.createElement('h2');
    foodMenuTitle.innerHTML = "Pastries";
    foodMenuTitleDiv.appendChild(foodMenuTitle);

    articles['food'].appendChild(foodMenuTitleDiv);
    foodDOMElements.forEach(item => {
        articles['food'].appendChild(item);
    })

    // create the elements to go in the offer section
    const offersTitle = document.createElement('h2');
    offersTitle.innerHTML = "Offers";
    const offersPara = document.createElement('p');
    offersPara.innerHTML = "Before 10am, buy any coffee and get £0.50 off any pastry.";

    articles['offers'].appendChild(offersTitle);
    articles['offers'].appendChild(offersPara);

    for (let i=0; i < articleList.length; i++) {
        menuDiv.appendChild(articles[articleList[i]]);
    }

    contentDiv.appendChild(menuDiv);
}

function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}



/***/ }),

/***/ "./src/assets/fonts/nexarustsans-black-webfont.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/nexarustsans-black-webfont.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "717d29e3280e9ad30afa.woff";

/***/ }),

/***/ "./src/assets/fonts/nexarustsans-black-webfont.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/nexarustsans-black-webfont.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e6b7bf044d113f6d88a2.woff2";

/***/ }),

/***/ "./src/assets/fonts/red_velvet_-_demo-webfont.woff":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/red_velvet_-_demo-webfont.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "213c04e27b9067e38ef2.woff";

/***/ }),

/***/ "./src/assets/fonts/red_velvet_-_demo-webfont.woff2":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/red_velvet_-_demo-webfont.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "547c05456b7ab4669e8f.woff2";

/***/ }),

/***/ "./src/assets/img/anastasiia-chepinska-lcfH0p6emhw-unsplash.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/img/anastasiia-chepinska-lcfH0p6emhw-unsplash.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/img/anastasiia-chepinska-lcfH0p6emhw-unsplash.jpg";

/***/ }),

/***/ "./src/assets/img/coffee-beans-left-svgrepo-com.svg":
/*!**********************************************************!*\
  !*** ./src/assets/img/coffee-beans-left-svgrepo-com.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/img/coffee-beans-left-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/img/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/img/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/img/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-creation */ "./src/page-creation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function loadPage() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    homeBtn.addEventListener('click', () => {
        (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
        (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.populateHomePage)();
    });

    menuBtn.addEventListener('click', () => {
        (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
        (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.populateMenuPage)();
    });

    aboutBtn.addEventListener('click', () =>{
        (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
        (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.populateAboutPage)();
    });

    (0,_page_creation__WEBPACK_IMPORTED_MODULE_0__.populateHomePage)();
};

loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMsdUtBQWdFO0FBQzVHLDRDQUE0QywyS0FBa0U7QUFDOUcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMsaU1BQTZFO0FBQ3pILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRCxjQUFjLG1DQUFtQztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLFFBQVEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sUUFBUSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFL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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNHO0FBQ2pGOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNERBQVk7QUFDcEIsUUFBUSxnRUFBZ0I7QUFDeEIsS0FBSzs7QUFFTDtBQUNBLFFBQVEsNERBQVk7QUFDcEIsUUFBUSxnRUFBZ0I7QUFDeEIsS0FBSzs7QUFFTDtBQUNBLFFBQVEsNERBQVk7QUFDcEIsUUFBUSxpRUFBaUI7QUFDekIsS0FBSzs7QUFFTCxJQUFJLGdFQUFnQjtBQUNwQjs7QUFFQSxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2Fzc2V0cy9kYXRhL21lbnUtaXRlbXMuY3N2Iiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9wYWdlLWNyZWF0aW9uLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9yZWRfdmVsdmV0Xy1fZGVtby13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvcmVkX3ZlbHZldF8tX2RlbW8td2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbmV4YXJ1c3RzYW5zLWJsYWNrLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9uZXhhcnVzdHNhbnMtYmxhY2std2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2FuYXN0YXNpaWEtY2hlcGluc2thLWxjZkgwcDZlbWh3LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgIFRoZW1lIENvbG91cnMgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbjpyb290IHtcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbDogcmdiYSgzNywgMjcsIDIyLCAwLjUpO1xuICAgIC0tcmVzdGF1cmFudC1uYW1lLWNvbDogcmdiKDI0MSwgMjI2LCAyMDkpO1xuICAgIC0tdGFibGluay1iYWNrZ3JvdW5kLWNvbDogcmdiYSgzNywgMjcsIDIyLCAwLjgpO1xuICAgIC0tdGFibGluay1ob3Zlci1jb2w6IHJnYmEoMjQxLCAyMjYsIDIwOSwgMC41KTtcbiAgICAtLXRhYmxpbmstYWN0aXZlLWNvbDogcmdiYSgxODUsMTUxLDExMCwgMC45KTtcbiAgICAtLXRhYmxpbmstZm9udC1jb2w6IHdoaXRlO1xuICAgIC0tYWJvdXQtYW5kLW1lbnUtdGV4dC1jb2w6IHJnYigyNDEsIDIyNiwgMjA5KTtcbiAgICAtLWFib3V0LWFuZC1tZW51LWJhY2tncm91bmQtY29sOiByZ2JhKDM3LCAyNywgMjIsIDAuNSk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgIEN1c3RvbSAgRm9udHMgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUmVkVmVsdmV0JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdOZXhhUnVzdFNhbnNCbGFjayc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgIE11bHRpLXNlY3Rpb24gU3R5bGVzICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sKTtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXG4gICAgLyogVXNlZCB0byBhZGQgYW4gb3BhcXVlIGJsYWNrIGNvbG9yIG92ZXIgdGhlIGJhY2tncm91bmQgaW1hZ2UgICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMTAwMHB4IHJnYmEoMCwgMCAsIDAsIDAuMyk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgIEhlYWRlciBTdHlsZXMgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2wpO1xufVxuXG4uYm94IHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmJveDpudGgtb2YtdHlwZSgxKSwgLmJveDpudGgtb2YtdHlwZSgzKSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveDpudGgtb2YtdHlwZSgyKSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuI2hlYWRlci1jb2ZmZWUtbG9nbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4vKiBOYXYgYmFyIHN0eWxpbmcgKi9cbm5hdiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50YWJsaW5rLCAudGFibGlua0FjdGl2ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB2YXIoLS10YWJsaW5rLWZvbnQtY29sKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTYW5zQmxhY2snLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRhYmxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxpbmstYmFja2dyb3VuZC1jb2wpO1xufVxuXG4udGFibGlua0FjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGluay1hY3RpdmUtY29sKTtcbn1cblxuLnRhYmxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxpbmstaG92ZXItY29sKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxufCAgICAgICAgICBDb250ZW50ICBTdHlsZXMgICAgICAgICAgfFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuI2NvbnRlbnQsIC5ib2R5LWxvZ28sIC5hYm91dCwgLm1lbnUsIGFydGljbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgcGFkZGluZzogNTBweDtcbn1cblxuI2JvZHktY29mZmVlLWxvZ28ge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYm9keS1sb2dvID4gaDEsIC5ib2R5LWxvZ28gPiBoMiB7XG4gICAgY29sb3I6IHZhcigtLXJlc3RhdXJhbnQtbmFtZS1jb2wpO1xufVxuXG4uYm9keS1sb2dvID4gaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTYW5zQmxhY2snLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA3MnB4O1xufVxuXG4uYm9keS1sb2dvID4gaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnUmVkVmVsdmV0JywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuYXJ0aWNsZSB7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYWJvdXQsIC5tZW51IHtcbiAgICBjb2xvcjogdmFyKC0tYWJvdXQtYW5kLW1lbnUtdGV4dC1jb2wpO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFib3V0LWFuZC1tZW51LWJhY2tncm91bmQtY29sKTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLmFib3V0IGgxLCAubWVudSBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdOZXhhUnVzdFNhbnNCbGFjaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5hYm91dCBhcnRpY2xlIGgyLCAubWVudSBhcnRpY2xlIGgyIHtcbiAgICBmb250LWZhbWlseTogJ05leGFSdXN0U2Fuc0JsYWNrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLm1lbnUgYXJ0aWNsZSBkaXYgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTYW5zQmxhY2snLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5hcnRpY2xlIHAge1xuICAgIG1heC1pbmxpbmUtc2l6ZTogNjZjaDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5hYm91dCBociB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItc3BhY2luZzogMjBweCA1cHg7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuI2RyaW5rcywgI2Zvb2Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAyMHB4IDQwcHg7XG59XG5cbiNkcmlua3Mge1xuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg1LCBtYXgtY29udGVudCkgLyByZXBlYXQoMiwgMWZyKTtcbn1cblxuI2Zvb2Qge1xuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg1LCBtYXgtY29udGVudCkgLyByZXBlYXQoMiwgMWZyKTtcbn1cblxuI21lbnVEcmlua1RpdGxlLCAjbWVudUZvb2RUaXRsZSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kcmlua3MgcCwgLmZvb2QgcCB7XG4gICAgbWF4LWlubGluZS1zaXplOiA0MGNoO1xufVxuXG4jbWVudUltZyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMzc1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3Nz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LS0tLSpcXFxcXFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgICAgICAgICAgIFRoZW1lIENvbG91cnMgICAgICAgICAgIHxcXG58ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbjpyb290IHtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2w6IHJnYmEoMzcsIDI3LCAyMiwgMC41KTtcXG4gICAgLS1yZXN0YXVyYW50LW5hbWUtY29sOiByZ2IoMjQxLCAyMjYsIDIwOSk7XFxuICAgIC0tdGFibGluay1iYWNrZ3JvdW5kLWNvbDogcmdiYSgzNywgMjcsIDIyLCAwLjgpO1xcbiAgICAtLXRhYmxpbmstaG92ZXItY29sOiByZ2JhKDI0MSwgMjI2LCAyMDksIDAuNSk7XFxuICAgIC0tdGFibGluay1hY3RpdmUtY29sOiByZ2JhKDE4NSwxNTEsMTEwLCAwLjkpO1xcbiAgICAtLXRhYmxpbmstZm9udC1jb2w6IHdoaXRlO1xcbiAgICAtLWFib3V0LWFuZC1tZW51LXRleHQtY29sOiByZ2IoMjQxLCAyMjYsIDIwOSk7XFxuICAgIC0tYWJvdXQtYW5kLW1lbnUtYmFja2dyb3VuZC1jb2w6IHJnYmEoMzcsIDI3LCAyMiwgMC41KTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcXG58ICAgICAgICAgICBDdXN0b20gIEZvbnRzICAgICAgICAgICB8XFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSZWRWZWx2ZXQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvcmVkX3ZlbHZldF8tX2RlbW8td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnLi9hc3NldHMvZm9udHMvcmVkX3ZlbHZldF8tX2RlbW8td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTYW5zQmxhY2snO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvbmV4YXJ1c3RzYW5zLWJsYWNrLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJy4vYXNzZXRzL2ZvbnRzL25leGFydXN0c2Fucy1ibGFjay13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgICAgICAgIE11bHRpLXNlY3Rpb24gU3R5bGVzICAgICAgIHxcXG58ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltZy9hbmFzdGFzaWlhLWNoZXBpbnNrYS1sY2ZIMHA2ZW1ody11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXG4gICAgLyogVXNlZCB0byBhZGQgYW4gb3BhcXVlIGJsYWNrIGNvbG9yIG92ZXIgdGhlIGJhY2tncm91bmQgaW1hZ2UgICovXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEwMDBweCByZ2JhKDAsIDAgLCAwLCAwLjMpO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgICAgICAgICAgIEhlYWRlciBTdHlsZXMgICAgICAgICAgIHxcXG58ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbCk7XFxufVxcblxcbi5ib3gge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmJveDpudGgtb2YtdHlwZSgxKSwgLmJveDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib3g6bnRoLW9mLXR5cGUoMikge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuI2hlYWRlci1jb2ZmZWUtbG9nbyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi8qIE5hdiBiYXIgc3R5bGluZyAqL1xcbm5hdiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50YWJsaW5rLCAudGFibGlua0FjdGl2ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbG9yOiB2YXIoLS10YWJsaW5rLWZvbnQtY29sKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ05leGFSdXN0U2Fuc0JsYWNrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4udGFibGluayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxpbmstYmFja2dyb3VuZC1jb2wpO1xcbn1cXG5cXG4udGFibGlua0FjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxpbmstYWN0aXZlLWNvbCk7XFxufVxcblxcbi50YWJsaW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGluay1ob3Zlci1jb2wpO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgICAgICAgICAgQ29udGVudCAgU3R5bGVzICAgICAgICAgIHxcXG58ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiNjb250ZW50LCAuYm9keS1sb2dvLCAuYWJvdXQsIC5tZW51LCBhcnRpY2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuI2JvZHktY29mZmVlLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5ib2R5LWxvZ28gPiBoMSwgLmJvZHktbG9nbyA+IGgyIHtcXG4gICAgY29sb3I6IHZhcigtLXJlc3RhdXJhbnQtbmFtZS1jb2wpO1xcbn1cXG5cXG4uYm9keS1sb2dvID4gaDEge1xcbiAgICBmb250LWZhbWlseTogJ05leGFSdXN0U2Fuc0JsYWNrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxufVxcblxcbi5ib2R5LWxvZ28gPiBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmVkVmVsdmV0JywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbmFydGljbGUge1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hYm91dCwgLm1lbnUge1xcbiAgICBjb2xvcjogdmFyKC0tYWJvdXQtYW5kLW1lbnUtdGV4dC1jb2wpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFib3V0LWFuZC1tZW51LWJhY2tncm91bmQtY29sKTtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWJvdXQgaDEsIC5tZW51IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOZXhhUnVzdFNhbnNCbGFjaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXQgYXJ0aWNsZSBoMiwgLm1lbnUgYXJ0aWNsZSBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTYW5zQmxhY2snLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLm1lbnUgYXJ0aWNsZSBkaXYgaDMge1xcbiAgICBmb250LWZhbWlseTogJ05leGFSdXN0U2Fuc0JsYWNrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmFydGljbGUgcCB7XFxuICAgIG1heC1pbmxpbmUtc2l6ZTogNjZjaDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG4uYWJvdXQgaHIge1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAyMHB4IDVweDtcXG59XFxuXFxudGQge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuI2RyaW5rcywgI2Zvb2Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHggNDBweDtcXG59XFxuXFxuI2RyaW5rcyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg1LCBtYXgtY29udGVudCkgLyByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2Zvb2Qge1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpIC8gcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNtZW51RHJpbmtUaXRsZSwgI21lbnVGb29kVGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZHJpbmtzIHAsIC5mb29kIHAge1xcbiAgICBtYXgtaW5saW5lLXNpemU6IDQwY2g7XFxufVxcblxcbiNtZW51SW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJtZW51TmFtZVwiOlwiRGVhZGxpbmUgRGFzaFwiLFwicmVhbE5hbWVcIjpcImVzcHJlc3NvXCIsXCJpdGVtVHlwZVwiOlwiZHJpbmtzXCIsXCJwcmljZUZvb2RcIjpudWxsLFwicHJpY2VEcmlua1NtYWxsXCI6XCLCozAuNjBcIixcInByaWNlRHJpbmtNZWRcIjpcIi1cIixcInByaWNlRHJpbmtMYXJnZVwiOlwiLVwiLFwiZGVzY3JpcHRpb25cIjpcIkVtYnJhY2UgdGhlIHJ1c2ggd2l0aCBvdXIgRGVhZGxpbmUgRGFzaCBFc3ByZXNzbywgY3JhZnRlZCB0byBwcm9wZWwgeW91IHRocm91Z2ggdGhvc2UgY3JpdGljYWwgbW9tZW50cyB3aXRoIGJvbGQgaW50ZW5zaXR5LiBUaGlzIHJvYnVzdCBzaG90IGlzIHNtb290aCB5ZXQgcG93ZXJmdWwsIG1ha2luZyBpdCB0aGUgcGVmZWN0IGNvbXBhbmlvbiBmb3IgdGFja2xpbmcgZGVhZGxpbmVzIGFuZCBzZWl6aW5nIHRoZSBkYXkuXCJ9LHtcIm1lbnVOYW1lXCI6XCJHcmluZCBhbmQgR29cIixcInJlYWxOYW1lXCI6XCJhbWVyaWNhbm9cIixcIml0ZW1UeXBlXCI6XCJkcmlua3NcIixcInByaWNlRm9vZFwiOm51bGwsXCJwcmljZURyaW5rU21hbGxcIjpcIsKjMS44MFwiLFwicHJpY2VEcmlua01lZFwiOlwiwqMyLjEwXCIsXCJwcmljZURyaW5rTGFyZ2VcIjpcIsKjMi40MFwiLFwiZGVzY3JpcHRpb25cIjpcIkdldCByZWFkeSBmb3IgeW91ciBkYXkgd2l0aCBvdXIgR3JpbmQgYW5kIEdvIEFtZXJpY2FubywgYSBuby1ub25zZW5zZSBjb2ZmZWUgdGhhdCBmdWVscyB5b3VyIGRheSB3aXRoIGVmZmljaWVuY3kgYW5kIGZsYWJvdXIuIFRoaXMgY2xhc3NpYyBibGVuZCBvZiBlc3ByZXNzbyBhbmQgaG90IHdhdGVyIG9mZmVycyBhIHJvYnVzdCBhbmQgaW52b3JhdGluZyBleHBlcmllbmNlLCBwZXJmZWN0IGZvciB0aG9zZSBvbiB0aGUgbW92ZS5cIn0se1wibWVudU5hbWVcIjpcIk92ZXJ0aW1lIE9yaWdpbmFsXCIsXCJyZWFsTmFtZVwiOlwicmVkRXllXCIsXCJpdGVtVHlwZVwiOlwiZHJpbmtzXCIsXCJwcmljZUZvb2RcIjpudWxsLFwicHJpY2VEcmlua1NtYWxsXCI6XCLCozIuNDBcIixcInByaWNlRHJpbmtNZWRcIjpcIsKjMi43MFwiLFwicHJpY2VEcmlua0xhcmdlXCI6XCLCozMuMDBcIixcImRlc2NyaXB0aW9uXCI6XCJTdGVwIHVwIHlvdXIgZ2FtZSB3aXRoIG91ciBPdmVydGltZSBPcmlnaW5hbCBSZWQgRXllLCBhIGJvbGRseSBicmV3ZWQgQW1lcmljYW5vIHdpdGggYW4gZXh0cmEgc2hvdCBvZiBFc3ByZXNzbyBmb3IgYW4gYWRkZWQgcHVuY2guIFBlcmZlY3QgZm9yIHRob3NlIGV4dHJhIGRlbWFuZGluZyBkYXlzIHdoZXJlIHlvdSBuZWVkIGFuIGV4dHJhIGJvb3N0IG9mIGVuZXJneSB0byBwdXNoIHRocm91Z2guXCJ9LHtcIm1lbnVOYW1lXCI6XCJGbGF0bGluZSBhdCBGaXZlXCIsXCJyZWFsTmFtZVwiOlwiZmxhdFdoaXRlXCIsXCJpdGVtVHlwZVwiOlwiZHJpbmtzXCIsXCJwcmljZUZvb2RcIjpudWxsLFwicHJpY2VEcmlua1NtYWxsXCI6XCLCozIuMzBcIixcInByaWNlRHJpbmtNZWRcIjpcIi1cIixcInByaWNlRHJpbmtMYXJnZVwiOlwiLVwiLFwiZGVzY3JpcHRpb25cIjpcIlVud2luZCBhZnRlciBhIGxvbmcgZGF5IHdpdGggb3VyIEZsYXRsaW5lIGF0IEZpdmUgRmxhdCBXaGl0ZSwgYSB2ZWx2ZXR5IHNtb290aCBibGVuZCBvZiBFc3ByZXNzbyBhbmQgc3RlYW1lZCBtaWxrIHRoYXQgYnJpbmdzIGEgbW9tZW50IG9mIHRyYW5xdWxpdHkgYW1pZHN0IGFsbCB0aGUgaHVzdGxlLiBXaGV0aGVyIHlvdXkncmUgd2luZGluZyBkb3duIGZyb20gdGhlIHdvcmtkYXkgb3IgY2F0Y2hpbmcgdXAgd2l0aCBmcmllbmRzLCBGbGF0bGluZSBhdCBGaXZlIHdpbGwgc29vdGhlIHlvdXIgc2Vuc2VzIGFuZCByZXN0b3JlIHlvdXIgZW5lcmd5IGZvciB3aGF0ZXZlciBjb21lcyBuZXh0LlwifSx7XCJtZW51TmFtZVwiOlwiTGF0dGUgdG8gdGhlIE1lZXRpbmdcIixcInJlYWxOYW1lXCI6XCJsYXR0ZVwiLFwiaXRlbVR5cGVcIjpcImRyaW5rc1wiLFwicHJpY2VGb29kXCI6bnVsbCxcInByaWNlRHJpbmtTbWFsbFwiOlwiwqMyLjE1XCIsXCJwcmljZURyaW5rTWVkXCI6XCLCozIuNDVcIixcInByaWNlRHJpbmtMYXJnZVwiOlwiwqMyLjc1XCIsXCJkZXNjcmlwdGlvblwiOlwiQXJyaXZlIHByZXBhcmVkIGFuZCByZWZyZXNoZWQgd2l0aCBvdXIgTGF0dGUgdG8gdGhlIE1lZXRpbmcsIGEgc21vb3RoIGFuZCBjcmVhbXkgYmxlbmQgb2YgZXNwcmVzc28gYW5kIHN0ZWFtZWQgbWlsayB0aGF0IGVuc3VyZXMgeW91J3JlIHJlYWR5IGZvciB3aGF0ZXZlciB0aGUgZGF5IHRocm93cyBhdCB5b3UuIFRoaXMgd2VsbC1iYWxhbmNlZCBkcmluayBvZmZlcnMgYSBnZW50bGUga2ljayBvZiBjYWZmZWluZSB3cmFwcGVkIGluIGEgY29tZm9ydGluZyBibGFua2V0IG9mIGZyb3RoeSBtaWxrLCBwZXJmZWN0IGZvciB0aG9zZSBsb25nLCBkcnkgbWVldGluZ3MuXCJ9LHtcIm1lbnVOYW1lXCI6XCJDb3Jwb3JhdGUgQ3JlYW1cIixcInJlYWxOYW1lXCI6XCJjYXBwdWNjaW5vXCIsXCJpdGVtVHlwZVwiOlwiZHJpbmtzXCIsXCJwcmljZUZvb2RcIjpudWxsLFwicHJpY2VEcmlua1NtYWxsXCI6XCLCozIuMTVcIixcInByaWNlRHJpbmtNZWRcIjpcIsKjMi40NVwiLFwicHJpY2VEcmlua0xhcmdlXCI6XCLCozIuNzVcIixcImRlc2NyaXB0aW9uXCI6XCJFbGV2YXRlIHlvdXIgY29mZmVlIGJyZWFrcyB3aXRoIG91ciBDb3Jwb3JhdGUgQ3JlYW0gQ2FwcHVjY2lubywgYSBsdXh1cmlvdXMgYmxlbmQgb2YgRXNwcmVzc28sIHZlbHZldHkgc3RlYW1lZCBtaWxrLCBhbmQgYSBkZWxpY2F0ZSBsYXllciBvZiBmcm90aC4gVGhpcyBpbmR1bGdlbnQgZHJpbmsgc3RyaWtlcyB0aGUgcGVyZmVjdCBiYWxhbmNlIGJldHdlZW4gc3Ryb25nIGVzcHJlc3NvIGFuZCBjcmVhbXkgdGV4dHVyZSwgb2ZmZXJpbmcgYSBzb3BoaXN0aWNhdGVkIGFuZCBzYXRpc2Z5aW5nIGV4cGVyaWVuY2UuXCJ9LHtcIm1lbnVOYW1lXCI6XCJCb2FyZHJvb20gQmxpc3NcIixcInJlYWxOYW1lXCI6XCJtb2NoYVwiLFwiaXRlbVR5cGVcIjpcImRyaW5rc1wiLFwicHJpY2VGb29kXCI6bnVsbCxcInByaWNlRHJpbmtTbWFsbFwiOlwiwqMyLjI1XCIsXCJwcmljZURyaW5rTWVkXCI6XCLCozIuNTVcIixcInByaWNlRHJpbmtMYXJnZVwiOlwiwqMyLjg1XCIsXCJkZXNjcmlwdGlvblwiOlwiRXhwZXJpZW5jZSBhIG1vbWVudCBvZiBlY3N0YXN5IHdpdGggb3VyIEJvYXJkcm9vbSBCbGlzcyBNb2NoYSwgYSBkZWNhZGVudCBmdXNpb24gb2YgcmljaCBlc3ByZXNzbywgdmVsdmV0eSBjaG9jb2xhdGUsIGFuZCBzdGVhbWVkIG1pbGsuIFRoaXMgaW5kdWxnZW50IHRyZWF0IGlzIGNyYWZ0ZWQgdG8gcGVyZmVjdGlvbiwgb2ZmZXJpbmcgYSBoYXJtb25pb3VzIGJhbGFuY2Ugb2YgY29mZmVlIGFuZCBjaG9jb2xhdGUgZmxhdm91cnMgdGhhdCBkZWxpZ2h0IHRoZSBzZW5zZXMuXCJ9LHtcIm1lbnVOYW1lXCI6XCJTdHJlc3MgQnVzdGVyXCIsXCJyZWFsTmFtZVwiOlwiY3JvaXNzYW50XCIsXCJpdGVtVHlwZVwiOlwiZm9vZFwiLFwicHJpY2VGb29kXCI6XCLCozEuNTBcIixcInByaWNlRHJpbmtTbWFsbFwiOm51bGwsXCJwcmljZURyaW5rTWVkXCI6bnVsbCxcInByaWNlRHJpbmtMYXJnZVwiOm51bGwsXCJkZXNjcmlwdGlvblwiOlwiRmluZCBibGlzcyBpbiBldmVyeSBiaXRlIHdpdGggb3VyIFN0cmVzcyBCdXN0ZXIgQ3JvaXNzYW50LCBhIGZsYWt5IGFuZCBidXR0ZXJ5IHBhc3RyeSB0aGF0IHByb21pc2VzIHRvIG1lbHQgYXdheSB0ZW5zaW9uLiBUaGlzIGNsYXNzaWMgRnJlbmNoIGRlbGlnaHQgaXMgYmFrZWQgdG8gZ29sZGVuIHBlcmZlY3Rpb24sIG9mZmVyaW5nIGxheWVycyBvZiBsaWdodCwgY3Jpc3B5IGRvdWdoIHRoYXQgcGFpciBwZXJmZWN0bHkgd2l0aCBhIHN0ZWFtaW5nIGN1cCBvZiBjb2ZmZWUuXCJ9LHtcIm1lbnVOYW1lXCI6XCJEZWFkbGluZSBEZWxpZ2h0XCIsXCJyZWFsTmFtZVwiOlwicGFpbkF1Q2hvY29sYXRcIixcIml0ZW1UeXBlXCI6XCJmb29kXCIsXCJwcmljZUZvb2RcIjpcIsKjMS45MFwiLFwicHJpY2VEcmlua1NtYWxsXCI6bnVsbCxcInByaWNlRHJpbmtNZWRcIjpudWxsLFwicHJpY2VEcmlua0xhcmdlXCI6bnVsbCxcImRlc2NyaXB0aW9uXCI6XCJTYXZvdXIgYSBtb21lbnQgb2YgcHVyZSBpbmR1bGdlbmNlIHdpdGggb3VyIERlYWRsaW5lIERlbGlnaHQgUGFpbiBhdSBDaG9jb2xhdCwgYSBkZWNhZGVudCBwYXN0cnkgdGhhdCB0dXJucyBkZWFkbGluZXMgaW50byBkZWxpY2lvdXMgZXNjYXBlcy4gRGVsaWNhdGUgbGF5ZXJzIG9mIGJ1dHRlcnksIGZsYWt5IGRvdWdoIGVudmVsb3AgYSByaWNoLCBnb29leSBjaG9jb2xhdGUgY29yZSwgY3JlYXRpbmcgYSBwZXJmZWN0IGhhcm1vbnkgb2YgZmxhYm91cnMgYW5kIHRleHR1cmVzLlwifSx7XCJtZW51TmFtZVwiOlwiQ3ViaWNsZSBDb21mb3J0XCIsXCJyZWFsTmFtZVwiOlwiZGFuaXNoXCIsXCJpdGVtVHlwZVwiOlwiZm9vZFwiLFwicHJpY2VGb29kXCI6XCLCozEuODVcIixcInByaWNlRHJpbmtTbWFsbFwiOm51bGwsXCJwcmljZURyaW5rTWVkXCI6bnVsbCxcInByaWNlRHJpbmtMYXJnZVwiOm51bGwsXCJkZXNjcmlwdGlvblwiOlwiRXhwZXJpZW5jZSBhIG1vbWVudCBvZiBjb3p5IHJlbGF4YXRpb24gd2l0aCBvdXIgQ3ViaWNsZSBDb21mb3J0IENpbm5hbW9uIERhbmlzaCwgYSB3YXJtIGFuZCBjb21mb3J0aW5nIHBhc3RyeSB0aGF0IGJyaW5nIGEgdG91Y2ggb2YgaG9tZSB0byB5b3VyIHdvcmtzcGFjZS4gTGF5ZXJzIG9mIGZsYWt5IHBhc3RyeSBnZW5lcm91c2x5IGZpbGxlZCB3aXRoIGEgc3dlZXQgY2lubmFtb24gc3dpcmwsIG9mZmVyaW5nIGEgcGVyZmVjdCBiYWxhbmNlIG9mIHN3ZWV0bmVzcyBhbmQgc3BpY2UuXCJ9LHtcIm1lbnVOYW1lXCI6XCJPZmZpY2UgT2FzaXNcIixcInJlYWxOYW1lXCI6XCJibHVlYmVycnlNdWZmaW5cIixcIml0ZW1UeXBlXCI6XCJmb29kXCIsXCJwcmljZUZvb2RcIjpcIsKjMi4yMFwiLFwicHJpY2VEcmlua1NtYWxsXCI6bnVsbCxcInByaWNlRHJpbmtNZWRcIjpudWxsLFwicHJpY2VEcmlua0xhcmdlXCI6bnVsbCxcImRlc2NyaXB0aW9uXCI6XCJEaXNjb3ZlciBhIGJ1cnN0IG9mIGZydWl0eSBnb29kbmVzcyB3aXRoIG91ciBPZmZpY2UgT2FzaXMgQmx1ZWJlcnJ5IE11ZmZpbnMsIGEgZGVsaWdodGZ1bCB0cmVhdCB0aGF0IGJyaW5ncyBhIHRhc3RlIG9mIHN1bnNoaW5lIHRvIHlvdXIgb2ZmaWNlIGFuZCByb3V0aW5lLiBQYWNrZWQgd2l0aCBwbHVtcCBibHVlYmVycmllcyBhbmQgYmFrZWQgdG8gcGVyZmVjdGlvbiwgZWFjaCBiaXRlIG9mZmVycyBhIHJlZnJlc2hpbmcgYmxlbmQgb2Ygc3dlZXQgYW5kIHRhcnQgZmxhYm91cnMuXCJ9XSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdmdMb2dvIGZyb20gXCIuL2Fzc2V0cy9pbWcvY29mZmVlLWJlYW5zLWxlZnQtc3ZncmVwby1jb20uc3ZnXCI7XG5pbXBvcnQgY29mZmVlUG9ydGFmaWx0ZXJzIGZyb20gXCIuL2Fzc2V0cy9pbWcvbmF0aGFuLWR1bWxhby1ZM0FxbWJtdExRSS11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2Fzc2V0cy9kYXRhL21lbnUtaXRlbXMuY3N2XCI7XG5cbmZ1bmN0aW9uIGNvbG9yQWN0aXZlVGFiKHRhYklkKSB7XG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJ0bnNbaV0uaWQgPT09IHRhYklkICYmIGJ0bnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsaW5rJykpIHtcbiAgICAgICAgICAgIGJ0bnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgndGFibGluaycpO1xuICAgICAgICAgICAgYnRuc1tpXS5jbGFzc0xpc3QuYWRkKCd0YWJsaW5rQWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnRuc1tpXS5pZCAhPSB0YWJJZCAmJiBidG5zW2ldLmNsYXNzTGlzdC5jb250YWlucygndGFibGlua0FjdGl2ZScpKSB7XG4gICAgICAgICAgICBidG5zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYmxpbmtBY3RpdmUnKTtcbiAgICAgICAgICAgIGJ0bnNbaV0uY2xhc3NMaXN0LmFkZCgndGFibGluaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbG9yQWN0aXZlVGFiKCdob21lQnRuJyk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBib2R5TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHlMb2dvLmNsYXNzTGlzdC5hZGQoJ2JvZHktbG9nbycpO1xuXG4gICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29JbWcuc3JjID0gc3ZnTG9nbztcbiAgICBsb2dvSW1nLmFsdCA9IFwiQ29mZmVlIEJlYW5zIExvZ29cIjtcbiAgICBsb2dvSW1nLmlkID0gXCJib2R5LWNvZmZlZS1sb2dvXCI7XG5cbiAgICBjb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UaXRsZS5pbm5lckhUTUwgPSBcIkRhaWx5IEdyaW5kXCI7XG5cbiAgICBjb25zdCBsb2dvTW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxvZ29Nb3R0by5pbm5lckhUTUwgPSBcIkZ1ZWxsaW5nIG9mZmljZSBoZXJvZXMgc2luY2UgMjAyNFwiO1xuXG4gICAgYm9keUxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgYm9keUxvZ28uYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcbiAgICBib2R5TG9nby5hcHBlbmRDaGlsZChsb2dvTW90dG8pO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChib2R5TG9nbyk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQWJvdXRQYWdlKCkge1xuICAgIGNvbG9yQWN0aXZlVGFiKCdhYm91dEJ0bicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgYWJvdXQgdGFiXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgLy8gY3JlYXRlIGEgbGluZSB0byBzZXBhcmF0ZSBjb250ZW50IHNlY3Rpb25zXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhYm91dFRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXRcIjtcblxuICAgIC8vIGNyZWF0ZSBjb250ZW50IHRvIHBvcHVsYXRlIHRoZSBkZXNjcmlwdGlvbiBzZWN0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGRlc2NQYXJhT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlc2NQYXJhVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlc2NQYXJhVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY1BhcmFPbmUuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIERhaWx5IEdyaW5kLCB3aGVyZSB3ZSBjZWxlYnJhdGUgdGhlIGV2ZXJ5ZGF5IGh1c3RsZSB3aXRoIGEgZGFzaCBvZiBodW1vdXIgYW5kIGEgbG90IG9mIGNhZmZlaW5lLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBMb25kb24sIG91ciBjb3p5IGNhZiYjMjMzOyBpcyB5b3VyIGdvLXRvIHNwb3QgZm9yIGEgd2VsbC1kZXNlcnZlZCBjb2ZmZWUgYnJlYWsgaW4gdGhlIG1pZHN0IG9mIHlvdXIgZGFpbHkgZ3JpbmQuXCI7XG4gICAgZGVzY1BhcmFUd28uaW5uZXJIVE1MID0gXCJXZSBiZWxpZXZlIGluIHR1cm5pbmcgdGhlIG9yZGluYXRyeSBpbnRvIHRoZSBleHRyYW9yZGluYXJ5LiBXaGV0aGVyIHlvdSdyZSBmdWVsaW5nIHVwIGZvciB0aGF0IGVhcmx5IG1vcm5pbmcgbWVldGluZyBvciB0YWtpbmcgYSB3ZWxsLWVhcm50ZWQgYnJlYXRoZXIgZnJvbSB0aGUgZGFpbHkgb2ZmaWNlIGNoYW9zLCBvdXIgY2FyZWZ1bGx5IGNyYWZ0ZWQgY29mZmVlcyBhbmQgZGVsZWN0YWJsZSBwYXN0cmllcyBhcmUgaGVyZSB0byBtYWtlIHlvdXIgZGF5IGEgbGl0dGxlIGJyaWdodGVyLlwiO1xuICAgIGRlc2NQYXJhVGhyZWUuaW5uZXJIVE1MID0gXCJGcm9tIG91ciBzaWduYXR1cmUgYmxlbmRzIHRvIG91ciB0b25ndWUtaW4tY2hlZWsgbWVudSwgZXZlcnkgc2lwIGFuZCBiaXRlIGF0IERhaWx5IEdyaW5kIGlzIGRlc2lnbmVkIHRvIHVwbGlmdCBhbmQgZW5lcmdpc2UuIE91ciBmcmllbmRseSBiYXJpc3RhcyBhcmUgcGFzc2lvbmF0ZSBhYm91dCBjb2ZmZWUgYW5kIGRlZGljYXRlZCB0byBlbnN1cmluZyBlYWNoIGN1cCBpcyBicmV3ZWQgdG8gcGVyZmVjdGlvbiwganVzdCBmb3IgeW91LlwiO1xuICAgIFxuICAgIGNvbnN0IGRlc2NDb250ZW50ID0gW1xuICAgICAgICBkZXNjUGFyYU9uZSwgXG4gICAgICAgIGRlc2NQYXJhVHdvLCBcbiAgICAgICAgZGVzY1BhcmFUaHJlZVxuICAgIF1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IGRlc2NDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NDb250ZW50W2ldKTtcbiAgICB9XG5cblxuICAgIC8vIGNyZWF0ZSBjb250bmV0IHRvIHBvcHVsYXRlIHRoZSBvcGVuaW5nIHRpbWVzIHNlY3Rpb25cbiAgICBjb25zdCBvcGVuaW5nVGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgb3BlbmluZ1RpbWVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbmluZ1RpbWVzJyk7XG4gICAgY29uc3Qgb3BlbmluZ1RpbWVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG9wZW5pbmdUaW1lc1RpdGxlLmlubmVySFRNTCA9IFwiT3BlbmluZyBUaW1lc1wiO1xuXG4gICAgY29uc3QgdGltZVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIGNvbnN0IGRheXMgPSBbXG4gICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgIFwiTW9uZGF5XCIsXG4gICAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICBcIlRodXJzZGF5XCIsXG4gICAgICAgIFwiRnJpZGF5XCIsXG4gICAgICAgIFwiU2F0dXJkYXlcIlxuICAgIF1cblxuICAgIGNvbnN0IHRpbWVzID0gW1xuICAgICAgICBcIjEwOjAwIC0gMTY6MDBcIixcbiAgICAgICAgXCIwNjowMCAtIDE5OjAwXCIsXG4gICAgICAgIFwiMDY6MDAgLSAxOTowMFwiLFxuICAgICAgICBcIjA2OjAwIC0gMTk6MDBcIixcbiAgICAgICAgXCIwNjowMCAtIDE5OjAwXCIsXG4gICAgICAgIFwiMDY6MDAgLSAxOTowMFwiLFxuICAgICAgICBcIjA2OjAwIC0gMTg6MDBcIixcbiAgICBdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJvdyA9IHRpbWVUYWJsZS5pbnNlcnRSb3coaSk7XG4gICAgICAgIGxldCBjZWxsT25lID0gcm93Lmluc2VydENlbGwoMCk7XG4gICAgICAgIGNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnZGF5cycpO1xuICAgICAgICBsZXQgY2VsbFR3byA9IHJvdy5pbnNlcnRDZWxsKDEpO1xuICAgICAgICBjZWxsT25lLmlubmVySFRNTCA9IGRheXNbaV07XG4gICAgICAgIGNlbGxUd28uaW5uZXJIVE1MID0gdGltZXNbaV07XG4gICAgfVxuXG4gICAgY29uc3QgdGltZVRhYmxlQ29udGVudCA9IFtcbiAgICAgICAgb3BlbmluZ1RpbWVzVGl0bGUsXG4gICAgICAgIHRpbWVUYWJsZVxuICAgIF1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRpbWVUYWJsZUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3BlbmluZ1RpbWVzLmFwcGVuZENoaWxkKHRpbWVUYWJsZUNvbnRlbnRbaV0pO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBjb250ZW50IGZvciBjb250YWN0IHVzIHNlY3Rpb25cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0VXMnKTtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBjb25zdCBlbWFpbFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGhvbmVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsUGFyYS5pbm5lckhUTUwgPSBcIjxiPkVtYWlsOjwvYj4gYXJlYWxlbWFpbEBkYWlseWdyaW5kY29mZmVlLmNvbVwiO1xuICAgIHBob25lUGFyYS5pbm5lckhUTUwgPSBcIjxiPlBob25lOjwvYj4gMDEyMzQ1Njc4OTBcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gW1xuICAgICAgICBjb250YWN0VGl0bGUsXG4gICAgICAgIGVtYWlsUGFyYSxcbiAgICAgICAgcGhvbmVQYXJhXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY29udGFjdENvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudFtpXSk7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIGV2ZXJ5dGhpbmcgdG8gYWJvdXQgZGl2XG4gICAgY29uc3QgYWJvdXRDb250ZW50ID0gW1xuICAgICAgICBhYm91dFRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgbGluZSxcbiAgICAgICAgdGltZVRhYmxlLFxuICAgICAgICBsaW5lLFxuICAgICAgICBjb250YWN0XG4gICAgXVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgYWJvdXRDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0Q29udGVudFtpXSk7XG4gICAgfVxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dERpdik7XG5cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51UGFnZSgpIHtcbiAgICBjb2xvckFjdGl2ZVRhYignbWVudUJ0bicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgbWVudSB0YWJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICAvLyBjcmVhdGUgYSB0aXRsZSBhbmQgZGVzY3JpcHRpb24gc2VjdGlvblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudVRpdGxlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIC8vIGNyZWF0ZSBhcnRpY2xlcyBmb3IgY29udGVudFxuICAgIGNvbnN0IGFydGljbGVMaXN0ID0gW1xuICAgICAgICBcIm1lbnVEZXNjcmlwdGlvblwiLFxuICAgICAgICBcImRyaW5rc1wiLFxuICAgICAgICBcImZvb2RcIixcbiAgICAgICAgXCJvZmZlcnNcIlxuICAgIF1cblxuICAgIGNvbnN0IGFydGljbGVzID0ge307XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgYXJ0aWNsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJ0aWNsZXNbYXJ0aWNsZUxpc3RbaV1dID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICBhcnRpY2xlc1thcnRpY2xlTGlzdFtpXV0uc2V0QXR0cmlidXRlKCdpZCcsIGFydGljbGVMaXN0W2ldKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgY29udGVudCBmb3IgTWVudSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IG1lbnVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51RGVzY1BhcmEuaW5uZXJIVE1MID0gXCJBdCBEYWlseSBHcmluZCwgb3VyIGV4cGVydCBiYXJpc3RhcyB0YWtlIHByaWRlIGluIHRyYW5zZm9ybWluZyBvdXIgcmljaCwgcHJlbWl1bSBDdWJhbiBjb2ZmZWUgYmVhbnMgaW50byBhbiBleGNxdWlzaXRlIGN1cCBvZiBjb2ZmZWUgcGVyZmVjdGlvbi4gT3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBleHRlbmRzIGJleW9uZCBvdXIgY29mZmVlIHRvIG91ciBmcmVzaGx5IGJha2VkIHBhc3RyaWVzLCBjcmFmdGVkIGRhaWx5IHRvIGNvbXBsZW1lbnQgeW91ciBmYXZvdXJpdGUgYnJldy4gV2hldGhlciB5b3UncmUgc2Vla2luZyBhIHJvYnVzdCBlc3ByZXNzbywgdmVsdmV0eSBsYXR0ZSwgb3IgYSBzd2VldCB0cmVhdCwgZWFjaCB2aXNpdCBwcm9taXNlcyBhIHRhc3RlIG9mIHBhc3Npb24gYW5kIGRlZGljYXRpb24gaW4gZXZlcnkgc2lwIGFuZCBiaXRlLlwiO1xuICAgIGNvbnN0IG1lbnVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51SW1nLnNyYyA9IGNvZmZlZVBvcnRhZmlsdGVycztcbiAgICBtZW51SW1nLmFsdCA9IFwiQ29mZmVlIFBvcnRhZmlsdGVyc1wiO1xuICAgIG1lbnVJbWcuaWQgPSBcIm1lbnVJbWdcIjtcblxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gW1xuICAgICAgICBtZW51RGVzY1BhcmEsIFxuICAgICAgICBtZW51SW1nXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbWVudUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJ0aWNsZXNbXCJtZW51RGVzY3JpcHRpb25cIl0uYXBwZW5kQ2hpbGQobWVudUNvbnRlbnRbaV0pO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBvYmplY3QgdG8gc3RvcmUgdGhlIGRyaW5rIERPTSBpdGVtc1xuICAgIGNvbnN0IGRyaW5rc0RPTUVsZW1lbnRzID0gW107XG4gICAgLy8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCB0byBzdG9yZSB0aGUgZm9vZCBET00gaXRlbXNcbiAgICBjb25zdCBmb29kRE9NRWxlbWVudHMgPSBbXTtcbiAgICAvLyBmdW5jdGlvbiB0byBjcmVhdGUgbWVudSBET00gaXRlbXNcbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbXMgKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIC8vIG5lZWQgZGlmZmVyZW50IG9wdGlvbnMgZm9yIGZvb2QgYW5kIGRyaW5rIGJlY2F1c2Ugb2YgdGhlIGRpZmZlcmVudCBwcmljZSBzdHJ1Y3R1cmVcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2RyaW5rcycpO1xuICAgICAgICBpdGVtRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtWydyZWFsTmFtZSddKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBpdGVtSGVhZGVyLmlubmVySFRNTCA9IGl0ZW1bJ21lbnVOYW1lJ107XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjLmlubmVySFRNTCA9IGl0ZW1bJ2Rlc2NyaXB0aW9uJ107XG5cbiAgICAgICAgY29uc3QgcHJpY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpZiAoaXRlbVsnaXRlbVR5cGUnXSA9PT0gXCJkcmlua3NcIikge1xuICAgICAgICAgICAgcHJpY2VzLmlubmVySFRNTCA9IGA8Yj5TOjwvYj4gJHtpdGVtWydwcmljZURyaW5rU21hbGwnXX0mZW1zcDs8Yj5NOjwvYj4gJHtpdGVtWydwcmljZURyaW5rTWVkJ119JmVtc3A7PGI+TDo8L2I+ICR7aXRlbVsncHJpY2VEcmlua0xhcmdlJ119YFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJpY2VzLmlubmVySFRNTCA9IGAke2l0ZW1bJ3ByaWNlRm9vZCddfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50cyA9IFtpdGVtSGVhZGVyLCBkZXNjLCBsaW5lLCBwcmljZXNdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRWxlbWVudHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1bJ2l0ZW1UeXBlJ10gPT09IFwiZHJpbmtzXCIpIHtcbiAgICAgICAgICAgIGRyaW5rc0RPTUVsZW1lbnRzLnB1c2goaXRlbURpdik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb29kRE9NRWxlbWVudHMucHVzaChpdGVtRGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY3JlYXRlTWVudUl0ZW1zKGl0ZW0pO1xuICAgIH0pXG5cbiAgICAvLyBzb3J0IG91dCB0aGUgZHJpbmsgc2VjdGlvbiBvZiB0aGUgcGFnZVxuICAgIGNvbnN0IGRyaW5rTWVudVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtNZW51VGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsIFwibWVudURyaW5rVGl0bGVcIik7XG4gICAgY29uc3QgZHJpbmtNZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRyaW5rTWVudVRpdGxlLmlubmVySFRNTCA9IFwiRHJpbmtzXCI7XG4gICAgZHJpbmtNZW51VGl0bGVEaXYuYXBwZW5kQ2hpbGQoZHJpbmtNZW51VGl0bGUpO1xuXG4gICAgYXJ0aWNsZXNbJ2RyaW5rcyddLmFwcGVuZENoaWxkKGRyaW5rTWVudVRpdGxlRGl2KTtcbiAgICBkcmlua3NET01FbGVtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBhcnRpY2xlc1snZHJpbmtzJ10uYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxuICAgIC8vIHNvcnQgb3V0IGZvb2Qgc2VjdGlvbiBvZiB0aGUgcGFnZVxuICAgIGNvbnN0IGZvb2RNZW51VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kTWVudVRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBcIm1lbnVGb29kVGl0bGVcIik7XG4gICAgY29uc3QgZm9vZE1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9vZE1lbnVUaXRsZS5pbm5lckhUTUwgPSBcIlBhc3RyaWVzXCI7XG4gICAgZm9vZE1lbnVUaXRsZURpdi5hcHBlbmRDaGlsZChmb29kTWVudVRpdGxlKTtcblxuICAgIGFydGljbGVzWydmb29kJ10uYXBwZW5kQ2hpbGQoZm9vZE1lbnVUaXRsZURpdik7XG4gICAgZm9vZERPTUVsZW1lbnRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGFydGljbGVzWydmb29kJ10uYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxuICAgIC8vIGNyZWF0ZSB0aGUgZWxlbWVudHMgdG8gZ28gaW4gdGhlIG9mZmVyIHNlY3Rpb25cbiAgICBjb25zdCBvZmZlcnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb2ZmZXJzVGl0bGUuaW5uZXJIVE1MID0gXCJPZmZlcnNcIjtcbiAgICBjb25zdCBvZmZlcnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9mZmVyc1BhcmEuaW5uZXJIVE1MID0gXCJCZWZvcmUgMTBhbSwgYnV5IGFueSBjb2ZmZWUgYW5kIGdldCDCozAuNTAgb2ZmIGFueSBwYXN0cnkuXCI7XG5cbiAgICBhcnRpY2xlc1snb2ZmZXJzJ10uYXBwZW5kQ2hpbGQob2ZmZXJzVGl0bGUpO1xuICAgIGFydGljbGVzWydvZmZlcnMnXS5hcHBlbmRDaGlsZChvZmZlcnNQYXJhKTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8IGFydGljbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYXJ0aWNsZXNbYXJ0aWNsZUxpc3RbaV1dKTtcbiAgICB9XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBwb3B1bGF0ZUhvbWVQYWdlLCBwb3B1bGF0ZUFib3V0UGFnZSwgcG9wdWxhdGVNZW51UGFnZSwgY2xlYXJDb250ZW50IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHBvcHVsYXRlSG9tZVBhZ2UsIHBvcHVsYXRlQWJvdXRQYWdlLCBwb3B1bGF0ZU1lbnVQYWdlLCBjbGVhckNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlLWNyZWF0aW9uXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJyk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJyk7XG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRCdG4nKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBwb3B1bGF0ZUhvbWVQYWdlKCk7XG4gICAgfSk7XG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgcG9wdWxhdGVNZW51UGFnZSgpO1xuICAgIH0pO1xuXG4gICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIHBvcHVsYXRlQWJvdXRQYWdlKCk7XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUhvbWVQYWdlKCk7XG59O1xuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==