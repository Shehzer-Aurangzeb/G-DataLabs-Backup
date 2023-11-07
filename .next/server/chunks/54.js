'use strict';
exports.id = 54;
exports.ids = [54];
exports.modules = {
  /***/ 79054: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var _components_UI_StyledImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29884);
    /* harmony import */ var _constants_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98739);

    function NoData({ message = undefined, icon = undefined, isParentFixed }) {
      const messageContainerRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
      (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!isParentFixed) return;
        if (!messageContainerRef) return;
        if (!messageContainerRef.current) return;
        if (!messageContainerRef.current.parentElement) return;
        messageContainerRef.current.parentElement.classList.add('relative');
      }, [isParentFixed]);
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: `flex flex-col gap-y-3 dark:text-main ${
          !isParentFixed && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
        } items-center`,
        ref: messageContainerRef,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            _components_UI_StyledImage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
            {
              src: icon ?? _constants_assets__WEBPACK_IMPORTED_MODULE_3__ /* .no_data */.HB,
              alt: 'no-data',
              className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
            },
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('p', {
            className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
            children: message ?? 'No data to display',
          }),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = NoData;

    /***/
  },
};
