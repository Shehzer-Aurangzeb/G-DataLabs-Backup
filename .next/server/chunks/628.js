"use strict";
exports.id = 628;
exports.ids = [628];
exports.modules = {

/***/ 53628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98739);




function Input({ label, placeholder, onChange, error, type, style, className, value, name, readOnly, isMonetaryInput, currency }) {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            "flex flex-col gap-y-3 relative",
            className
        ].join(" "),
        style: style,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "text-base font-bold font-sans text-black dark:text-white",
                htmlFor: name,
                children: label
            }),
            isMonetaryInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-black font-sans font-normal text-xl absolute top-[54%] left-[15px]",
                children: currency
            }),
            type === "password" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        autoComplete: "off",
                        placeholder: placeholder,
                        onChange: onChange,
                        name: name,
                        readOnly: readOnly,
                        id: name,
                        type: showPassword ? "text" : "password",
                        value: value,
                        className: "bg-chat dark:bg-darkChat py-5 px-7 rounded-md text-black dark:text-main font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder  focus:outline-none w-full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: showPassword ? _constants_assets__WEBPACK_IMPORTED_MODULE_3__/* .showpassword */ .fR : _constants_assets__WEBPACK_IMPORTED_MODULE_3__/* .hidepassword */ .th,
                        alt: showPassword ? "hide-password-icon" : "show-password-icon",
                        className: "h-5 w-5 dark:filter dark:brightness-0 cursor-pointer absolute top-[50%] right-[10px] transform translate-y-[-50%]",
                        onClick: togglePasswordVisibility
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                autoComplete: "off",
                placeholder: placeholder,
                onChange: onChange,
                name: name,
                readOnly: readOnly,
                id: name,
                type: type || "text",
                value: value,
                className: "bg-chat dark:bg-darkChat py-5 px-7 rounded-md dark:text-main text-black font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none"
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-sans text-sm text-error -mt-2",
                children: error
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;