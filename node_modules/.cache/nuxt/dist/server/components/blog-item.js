exports.ids = [3];
exports.modules = {

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogItem.vue?vue&type=template&id=7a941207&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<article class=\"relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]\">", "</article>", [_vm._ssrNode("<h3 class=\"mb-2 text-2xl text-slate-700 tracking-tight font-bold dark:text-slate-200\">", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": {
        name: 'blog-slug',
        params: {
          slug: _vm.postSlug
        }
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.postTitle))])], 1), _vm._ssrNode(" <div class=\"mb-6 prose prose-slate dark:prose-dark\"><p>" + _vm._ssrEscape("\n        " + _vm._s(_vm.postDescription) + "\n      ") + "</p></div> <div class=\"mt-auto flex flex-row-reverse items-center justify-end\"><dl><dt class=\"sr-only\">Date</dt> <dd class=\"text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold\"><time datetime=\"2022-02-24T12:00:00.000Z\" class=\"bg-green-500 text-white py-1 px-2 rounded-md\">" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.postDate))) + "</time></dd></dl></div> <br>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blogItem.vue?vue&type=template&id=7a941207&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogItem.vue?vue&type=script&lang=js&
/* harmony default export */ var blogItemvue_type_script_lang_js_ = ({
  props: ["title", "description", "date", "slug", "tags"],
  data() {
    return {
      postTitle: this.title,
      postDescription: this.description,
      postSlug: this.slug,
      postDate: this.date,
      postTag: this.tags
    };
  },
  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  mounted() {
    console.log("postTag:", this.postTag);
  }
});
// CONCATENATED MODULE: ./components/blogItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blogItemvue_type_script_lang_js_ = (blogItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/blogItem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_blogItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7e144d2d"
  
)

/* harmony default export */ var blogItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-item.js.map