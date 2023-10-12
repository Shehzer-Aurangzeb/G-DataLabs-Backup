"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 67782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_StyledImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29884);
/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65726);
/* eslint-disable react/button-has-type */ /* __next_internal_client_entry_do_not_use__ default auto */ 



function Button({ onClick, type = "button", title, isLoading = false, icon, className = "", style }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: [
            "text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed",
            className
        ].join(" "),
        onClick: onClick,
        type: type,
        style: style,
        disabled: isLoading,
        children: [
            icon && !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-[9%] top-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_StyledImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: icon,
                    alt: "icon",
                    className: "h-[35px] w-[35px]"
                })
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                style: {
                    color: "#fff",
                    margin: "0 auto"
                }
            }) : title
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;