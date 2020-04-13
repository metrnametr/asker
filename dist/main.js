/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../image/puh.png */ \"./src/image/puh.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../image/pacage.png */ \"./src/image/pacage.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../image/search_go.png */ \"./src/image/search_go.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v5.0.1 | 20191019\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, menu, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmain, menu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, main, menu, nav, section {\\n  display: block; }\\n\\n/* HTML5 hidden-attribute fix for newer browsers */\\n*[hidden] {\\n  display: none; }\\n\\nbody {\\n  line-height: 1; }\\n\\nmenu, ol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n.header-top {\\n  display: flex;\\n  justify-content: space-between;\\n  background: #eeeeee;\\n  border-bottom: #eaeaea;\\n  vertical-align: center; }\\n  .header-top .puh-container {\\n    width: 100%;\\n    height: 40px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n  .header-top .login-buttons {\\n    display: flex;\\n    justify-content: flex-end;\\n    height: 100%;\\n    padding: 13px 0;\\n    font-size: 13px;\\n    font-weight: 400; }\\n    .header-top .login-buttons a {\\n      display: block;\\n      border-bottom: 1px solid transparent;\\n      color: #666666; }\\n    .header-top .login-buttons a:hover {\\n      border-bottom: 1px solid #666666; }\\n    .header-top .login-buttons li:first-of-type {\\n      padding-right: 8px;\\n      border-right: 1px solid white; }\\n    .header-top .login-buttons li:nth-of-type(2) {\\n      padding-left: 8px;\\n      border-left: 1px solid #bbb7b7; }\\n\\n.header-center {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  padding: 25px 8% !important; }\\n  .header-center .brand {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-between; }\\n    .header-center .brand img {\\n      object-fit: contain; }\\n  .header-center .pacage-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    position: relative;\\n    color: #666666;\\n    font-weight: 400; }\\n    .header-center .pacage-container p:first-of-type {\\n      margin-bottom: 4px; }\\n    .header-center .pacage-container span {\\n      cursor: pointer;\\n      color: #64a0a2; }\\n      .header-center .pacage-container span:hover {\\n        border-bottom: 1px dashed #64a0a2; }\\n    .header-center .pacage-container::before {\\n      content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n      position: absolute;\\n      left: -42px; }\\n\\n.header-bottom {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background: #5f8591; }\\n  .header-bottom .input-container {\\n    position: relative; }\\n    .header-bottom .input-container::before {\\n      position: absolute;\\n      content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n      right: 10px;\\n      top: 35%; }\\n  .header-bottom .nav-container {\\n    display: flex; }\\n    .header-bottom .nav-container a {\\n      font-size: 18px;\\n      text-transform: uppercase;\\n      color: white;\\n      text-shadow: .5px -1px 0px black; }\\n      .header-bottom .nav-container a:hover {\\n        border-bottom: 1px solid #666666;\\n        box-shadow: 0 1px 0 #eaeaea; }\\n    .header-bottom .nav-container li {\\n      border-right: 1px dashed #89cac9;\\n      border-left: 1px dashed #223d3d;\\n      padding: 0 22px; }\\n      .header-bottom .nav-container li:first-of-type {\\n        padding-left: 0;\\n        border-left: 0; }\\n      .header-bottom .nav-container li:last-of-type {\\n        border-right: 0; }\\n\\n.numbers-container {\\n  display: flex;\\n  font-weight: 400;\\n  margin-left: 70px; }\\n  .numbers-container a {\\n    color: #64a0a2; }\\n  .numbers-container .number {\\n    font-size: 30px;\\n    margin-bottom: 10px; }\\n  .numbers-container div:nth-of-type(2) {\\n    margin-left: 40px; }\\n\\ninput.search {\\n  margin: 10px 0;\\n  height: 25px;\\n  width: 370px;\\n  border: 1px solid #b8b4b4;\\n  padding-left: 10px; }\\n  input.search::placeholder {\\n    font-size: 13px;\\n    color: #b9baba;\\n    font-style: italic; }\\n\\n.main-page {\\n  margin: 30px 0;\\n  display: grid;\\n  grid-template-columns: 25% 71%;\\n  column-gap: 4%; }\\n  .main-page aside {\\n    background: #eeeeee; }\\n    .main-page aside ul > a {\\n      padding-left: 20px; }\\n    .main-page aside a {\\n      font-size: 15px;\\n      padding-left: 20px;\\n      font-weight: 500;\\n      color: #666666; }\\n    .main-page aside .collapse.active ul {\\n      display: block; }\\n    .main-page aside .collapse.active > a::after {\\n      position: absolute;\\n      top: 5px;\\n      right: -20px;\\n      content: '';\\n      width: 0;\\n      height: 0;\\n      border-bottom: 7px solid #608c86;\\n      border-right: 7px solid transparent;\\n      border-left: 7px solid transparent; }\\n    .main-page aside .collapse.active > a::before {\\n      display: none; }\\n    .main-page aside .collapse > a {\\n      position: relative; }\\n      .main-page aside .collapse > a ~ ul {\\n        display: none; }\\n      .main-page aside .collapse > a::before {\\n        position: absolute;\\n        top: 5px;\\n        right: -20px;\\n        content: '';\\n        width: 0;\\n        height: 0;\\n        border-top: 7px solid #608c86;\\n        border-right: 7px solid transparent;\\n        border-left: 7px solid transparent; }\\n    .main-page aside ul.top-list a {\\n      text-transform: uppercase; }\\n    .main-page aside ul.top-list li ul > li > a {\\n      padding-left: 40px;\\n      text-transform: none; }\\n    .main-page aside ul.top-list * li {\\n      text-transform: none; }\\n      .main-page aside ul.top-list * li:hover {\\n        background: #6da5a7; }\\n        .main-page aside ul.top-list * li:hover a {\\n          color: white; }\\n    .main-page aside li {\\n      cursor: pointer;\\n      padding: 5px 0;\\n      font-size: 16px;\\n      line-height: 39px; }\\n  .main-page .title {\\n    font-size: 18px;\\n    font-weight: 700;\\n    padding: 20px 0 20px 20px;\\n    color: white;\\n    text-shadow: .5px -1px 0px black;\\n    text-transform: uppercase;\\n    background: #5f8591;\\n    margin: 1px; }\\n  .main-page .slider-container {\\n    position: relative; }\\n    .main-page .slider-container .slider-item {\\n      height: 100%;\\n      display: none; }\\n      .main-page .slider-container .slider-item img {\\n        width: 100%;\\n        object-fit: cover;\\n        object-position: 50% 50%; }\\n      .main-page .slider-container .slider-item.active {\\n        display: flex; }\\n    .main-page .slider-container .slider-controls {\\n      width: 100%;\\n      position: absolute;\\n      top: 45%;\\n      display: flex;\\n      justify-content: space-between; }\\n    .main-page .slider-container .slider-controls button {\\n      cursor: pointer;\\n      width: 40px;\\n      height: 40px;\\n      padding: 0;\\n      background: none;\\n      border: none; }\\n      .main-page .slider-container .slider-controls button:last-of-type {\\n        margin-right: 6px; }\\n      .main-page .slider-container .slider-controls button:first-of-type {\\n        margin-left: 6px; }\\n    .main-page .slider-container .slider-dots {\\n      position: absolute;\\n      width: 100%;\\n      display: flex;\\n      justify-content: center;\\n      bottom: 15px; }\\n      .main-page .slider-container .slider-dots .dot-item {\\n        width: 13px;\\n        height: 13px;\\n        border: 5px solid white;\\n        border-radius: 50%;\\n        background: #999999;\\n        margin-right: 5px;\\n        cursor: pointer; }\\n        .main-page .slider-container .slider-dots .dot-item:hover {\\n          border: 5px solid black;\\n          background: white; }\\n        .main-page .slider-container .slider-dots .dot-item.active {\\n          border: 5px solid black;\\n          background: white; }\\n  .main-page .advertising-container {\\n    display: grid;\\n    grid-template-columns: 70% 25%;\\n    grid-template-rows: 340px;\\n    column-gap: 5%; }\\n    .main-page .advertising-container .about-container .about-item {\\n      display: flex;\\n      align-items: center;\\n      background: #eeeeee;\\n      padding: 28px 10%;\\n      margin-bottom: 30px; }\\n      .main-page .advertising-container .about-container .about-item:last-of-type {\\n        margin-bottom: 0; }\\n    .main-page .advertising-container .about-container img {\\n      margin-right: 15px; }\\n  .main-page .about-us {\\n    display: flex;\\n    padding: 1px;\\n    border: 1px solid #eeeeee;\\n    margin: 30px 0; }\\n    .main-page .about-us .about-title {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: 47%;\\n      padding: 0 15px;\\n      background: #eeeeee;\\n      text-transform: uppercase;\\n      margin-right: 1px; }\\n    .main-page .about-us .description {\\n      border-left: 1px solid #eeeeee;\\n      padding: 15px; }\\n      .main-page .about-us .description span {\\n        display: block;\\n        margin-top: 5px;\\n        margin-left: auto;\\n        text-align: right; }\\n      .main-page .about-us .description a {\\n        color: #64a0a2; }\\n  .main-page .data-container {\\n    display: grid;\\n    grid-template-columns: repeat(4, 23%);\\n    column-gap: 2.5%;\\n    row-gap: 2.5%; }\\n    .main-page .data-container .data-item {\\n      text-align: center; }\\n      .main-page .data-container .data-item img {\\n        width: 100%;\\n        height: 200px; }\\n      .main-page .data-container .data-item span {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        height: 50px;\\n        background: #eeeeee;\\n        margin-top: -3px; }\\n\\n.tabs-container {\\n  padding: 30px 0;\\n  border-bottom: 1px solid #c7c7c7; }\\n  .tabs-container .controls-container, .tabs-container .tabs-items {\\n    display: flex;\\n    flex-wrap: wrap; }\\n    @media screen and (max-width: 768px) {\\n      .tabs-container .controls-container, .tabs-container .tabs-items {\\n        flex-direction: column; } }\\n  .tabs-container .controls-container {\\n    margin-bottom: 15px; }\\n    .tabs-container .controls-container button.button-item {\\n      cursor: pointer;\\n      background: #ececec;\\n      padding: 15px 20px;\\n      border: 1px solid #bababa;\\n      margin: 1px;\\n      margin-right: 1px;\\n      color: #666666; }\\n      @media screen and (max-width: 768px) {\\n        .tabs-container .controls-container button.button-item {\\n          width: 100%; } }\\n      .tabs-container .controls-container button.button-item.active {\\n        background: #619896;\\n        border: 1px solid #757676;\\n        color: white; }\\n        .tabs-container .controls-container button.button-item.active span {\\n          border-bottom: 1px dashed white; }\\n      .tabs-container .controls-container button.button-item span {\\n        font-size: 18px;\\n        text-transform: uppercase;\\n        border-bottom: 1px solid transparent;\\n        padding-bottom: 2px; }\\n      .tabs-container .controls-container button.button-item:hover > span {\\n        color: white;\\n        border-bottom: 1px dashed white; }\\n      .tabs-container .controls-container button.button-item:hover {\\n        background: #619896;\\n        border: 1px solid #757676; }\\n  .tabs-container .tabs-items {\\n    flex-wrap: wrap;\\n    justify-content: space-between; }\\n    .tabs-container .tabs-items .tab-item {\\n      max-width: 17%;\\n      min-width: 17%;\\n      text-align: center; }\\n      @media screen and (max-width: 768px) {\\n        .tabs-container .tabs-items .tab-item {\\n          min-width: 100%;\\n          margin-bottom: 30px; } }\\n    .tabs-container .tabs-items img {\\n      width: 100%;\\n      object-fit: contain;\\n      margin-bottom: 20px; }\\n    .tabs-container .tabs-items p {\\n      margin-bottom: 10px; }\\n    .tabs-container .tabs-items span {\\n      font-weight: 600;\\n      color: #64a0a2; }\\n  .tabs-container .tab-item {\\n    position: relative; }\\n    .tabs-container .tab-item:hover > .tools-button {\\n      opacity: 1; }\\n    .tabs-container .tab-item .tools-button {\\n      transition: opacity .5s ease-in-out;\\n      opacity: 0;\\n      position: absolute;\\n      top: 15px;\\n      left: 1px;\\n      text-align: left; }\\n      .tabs-container .tab-item .tools-button .flag-category {\\n        position: relative;\\n        margin-bottom: 15px;\\n        background: #1f56ae; }\\n        .tabs-container .tab-item .tools-button .flag-category span {\\n          display: block;\\n          padding: 8px 8px;\\n          color: white; }\\n        .tabs-container .tab-item .tools-button .flag-category::after {\\n          position: absolute;\\n          top: 0;\\n          right: -15px;\\n          content: '';\\n          width: 0;\\n          height: 0;\\n          border-top: 15px solid #1f56ae;\\n          border-right: 15px solid transparent; }\\n        .tabs-container .tab-item .tools-button .flag-category::before {\\n          position: absolute;\\n          top: calc(100% - 15px);\\n          right: -15px;\\n          content: '';\\n          width: 0;\\n          height: 0;\\n          border-bottom: 15px solid #1f56ae;\\n          border-right: 15px solid transparent; }\\n      .tabs-container .tab-item .tools-button button {\\n        border: 0;\\n        width: 30px;\\n        height: 30px;\\n        margin-bottom: 4px;\\n        cursor: pointer; }\\n        .tabs-container .tab-item .tools-button button:hover {\\n          background: #64a0a2; }\\n      .tabs-container .tab-item .tools-button img {\\n        margin: 0; }\\n\\n.brands-container {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 35px 0; }\\n  .brands-container img {\\n    object-fit: contain; }\\n    @media screen and (max-width: 768px) {\\n      .brands-container img {\\n        display: none; }\\n        .brands-container img:first-of-type {\\n          display: block; } }\\n  @media screen and (max-width: 768px) {\\n    .brands-container {\\n      justify-content: center; } }\\n\\nfooter {\\n  background: #ececec;\\n  border-top: 1px solid #aaaaaa;\\n  padding: 30px 0; }\\n  footer .footer-items {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-between; }\\n  footer .since-in {\\n    font-weight: 600;\\n    margin-left: auto;\\n    text-align: right; }\\n  footer .footer-nav {\\n    display: flex;\\n    width: 30%;\\n    height: 100%; }\\n    footer .footer-nav a {\\n      color: #666666; }\\n    footer .footer-nav ul:first-of-type {\\n      padding-right: 9%;\\n      border-right: 1px solid white; }\\n    footer .footer-nav ul:last-of-type {\\n      padding-left: 9%;\\n      border-left: 1px solid #c1bfbf; }\\n    footer .footer-nav ul li {\\n      width: 100%;\\n      margin-bottom: 15px; }\\n    footer .footer-nav ul li:last-of-type {\\n      margin-bottom: 0; }\\n  footer .footer-right {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 65%; }\\n  footer .map {\\n    width: 38%;\\n    margin-right: 20px;\\n    border-right: 1px solid white;\\n    height: 140px; }\\n  footer .about-container {\\n    width: 60%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    padding-left: 20px;\\n    border-left: 1px solid #bcbaba; }\\n  footer .numbers-container {\\n    display: flex;\\n    justify-content: space-between;\\n    margin: 0; }\\n  footer .search {\\n    width: 100%; }\\n\\nhtml {\\n  line-height: 1.4;\\n  font-size: 16px;\\n  color: #666666;\\n  height: 100%; }\\n  @media screen and (max-width: 1280px) {\\n    html {\\n      font-size: 16px; } }\\n  @media screen and (max-width: 768px) {\\n    html {\\n      font-size: 15px; } }\\n  @media screen and (max-width: 480px) {\\n    html {\\n      font-size: 14px; } }\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", Helvetica, Arial, sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  transition: all .5s ease; }\\n\\n.container {\\n  padding: 0 8%; }\\n  @media screen and (max-width: 768px) {\\n    .container {\\n      padding: 0 1%; } }\\n\\na {\\n  text-decoration: none;\\n  color: #64a0a2; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/image/pacage.png":
/*!******************************!*\
  !*** ./src/image/pacage.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d22249c7fd342120f25ce249769b8247.png\");\n\n//# sourceURL=webpack:///./src/image/pacage.png?");

/***/ }),

/***/ "./src/image/puh.png":
/*!***************************!*\
  !*** ./src/image/puh.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4811916611284e722633e7401550288a.png\");\n\n//# sourceURL=webpack:///./src/image/puh.png?");

/***/ }),

/***/ "./src/image/search_go.png":
/*!*********************************!*\
  !*** ./src/image/search_go.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0e2a8692e4a3b80422ae17f85137bdd3.png\");\n\n//# sourceURL=webpack:///./src/image/search_go.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n__webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\nconst collapsedItems = document.querySelectorAll('.collapse');\n\n\ncollapsedItems.forEach(it => it.addEventListener('click', function(e) {\n    e.preventDefault();\n    this.classList.toggle('active');\n}))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!(function(){\n    const sliderContainer = document.querySelector('.slider-container');\n    const sliderItems = document.querySelectorAll('.slider-item');\n    const sliderCount = sliderItems.length;\n    let currentItem = 0;\n    const nextButton = document.querySelector('.next');\n    const prevButton = document.querySelector('.prev');\n    const dotContainer = document.createElement('div');\n    dotContainer.classList.add('slider-dots');\n\n    \n\n    sliderItems.forEach((_, i) => {\n        const dot = document.createElement('div');\n        dot.classList.add('dot-item');\n        if (i === 0) dot.classList.add('active');\n        dot.onclick = function(){\n            const dots = document.querySelectorAll('.dot-item');\n            dots.forEach(it => it.classList.remove('active'));\n            this.classList.add('active');\n            currentItem = i;\n            toggleSliderVisible();\n        }\n        dotContainer.appendChild(dot);\n    });\n\n    nextButton.onclick = () => {\n        if (currentItem < sliderCount - 1) {\n            currentItem++;\n        } else {\n            currentItem = 0;\n        }\n        toggleSliderVisible();\n    }\n\n    prevButton.onclick = () => {\n        if (currentItem > 0) {\n            currentItem--;\n        } else {\n            currentItem = sliderCount - 1;\n        }\n        toggleSliderVisible();\n    }\n\n    function toggleSliderVisible() {\n        const dots = document.querySelectorAll('.dot-item');\n        sliderItems.forEach((it, i) => (i === currentItem) ? it.classList.add('active') : it.classList.remove('active'))\n        dots.forEach((it, i) => (i === currentItem) ? it.classList.add('active') : it.classList.remove('active'))\n    }\n\n    sliderContainer.appendChild(dotContainer);\n\n})()\n\n//# sourceURL=webpack:///./src/slider.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style/main.scss?");

/***/ })

/******/ });