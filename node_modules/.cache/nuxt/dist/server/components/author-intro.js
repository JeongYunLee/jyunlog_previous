exports.ids = [2];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("06483661", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorIntro_vue_vue_type_style_index_0_id_1bc47908_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorIntro_vue_vue_type_style_index_0_id_1bc47908_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorIntro_vue_vue_type_style_index_0_id_1bc47908_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorIntro_vue_vue_type_style_index_0_id_1bc47908_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorIntro_vue_vue_type_style_index_0_id_1bc47908_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#typing-container span{animation:typing 3.5s steps(40),blink-caret 1s step-end infinite;border-right:0 solid;margin:0 auto;overflow:hidden;white-space:nowrap}@keyframes typing{0%{width:0}to{width:100%}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#000}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AuthorIntro.vue?vue&type=template&id=1bc47908&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-6",
    attrs: {
      "id": "typing-container"
    }
  }, [_vm._ssrNode("<div class=\"flex\"><img src=\"https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png\" class=\"mt-4\" style=\"width: 10%\"> <h2 class=\"ml-2 mt-8 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200\"><span" + _vm._ssrStyle(null, null, {
    display: _vm.textVisible ? '' : 'none'
  }) + ">" + _vm._ssrEscape(_vm._s(_vm.text)) + "</span></h2></div> <p class=\"mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify\">\n    I’m JeongYun Lee, an undergraduate student majoring in department of LIS(Library and Information Science) and Data Science in Chung-Ang University, Seoul. \n    I’m going to write down my current learnings and as I am interested in various fields and topics, the content that I coverd will be diverse as well. \n    This blog will be a good record of my studyings and I hope it will be helpful for someone. Have a nice day!\n  </p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AuthorIntro.vue?vue&type=template&id=1bc47908&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AuthorIntro.vue?vue&type=script&lang=js&
/* harmony default export */ var AuthorIntrovue_type_script_lang_js_ = ({
  data() {
    return {
      text: '',
      textVisible: true
    };
  },
  methods: {
    type() {
      const message = "Hi, 안녕하세요! ";
      let i = 0;
      const interval = setInterval(() => {
        this.text += message[i];
        i++;
        if (i > message.length - 1) {
          clearInterval(interval);
        }
      }, 100);
    }
  },
  mounted() {
    this.type();
  }
});
// CONCATENATED MODULE: ./components/AuthorIntro.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AuthorIntrovue_type_script_lang_js_ = (AuthorIntrovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AuthorIntro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AuthorIntrovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4c82234e"
  
)

/* harmony default export */ var AuthorIntro = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=author-intro.js.map