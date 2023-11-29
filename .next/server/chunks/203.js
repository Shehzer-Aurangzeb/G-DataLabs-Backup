'use strict';
exports.id = 203;
exports.ids = [203];
exports.modules = {
  /***/ 23488: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    /* harmony import */ var _public_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83726);
    /* harmony import */ var _components_UI_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17223);
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Actions({ isAllowed, onClick, isDisabled }) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            _components_UI_IconButton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
            {
              src:
                isAllowed && !isDisabled
                  ? _public_assets__WEBPACK_IMPORTED_MODULE_2__ /* .check_active */.Xv
                  : _public_assets__WEBPACK_IMPORTED_MODULE_2__ /* .check_disable */.WA,
              disabled: isDisabled,
              className: `relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] ${isDisabled && 'cursor-default'}`,
              onClick: () => {
                if (!isAllowed && !isDisabled) onClick();
              },
            },
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            _components_UI_IconButton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
            {
              src:
                !isAllowed && !isDisabled
                  ? _public_assets__WEBPACK_IMPORTED_MODULE_2__ /* .cross_active */.JE
                  : _public_assets__WEBPACK_IMPORTED_MODULE_2__ /* .cross_disable */.QM,
              disabled: isDisabled,
              className: `relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] ${isDisabled && 'cursor-default'}`,
              onClick: () => {
                if (isAllowed && !isDisabled) onClick();
              },
            },
          ),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Actions;

    /***/
  },

  /***/ 42405: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    /* harmony import */ var _public_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83726);
    /* eslint-disable jsx-a11y/label-has-associated-control */ /* __next_internal_client_entry_do_not_use__ default auto */

    function Input({
      readOnly,
      name,
      onChange,
      value,
      type,
      pattern,
      className,
      currency = '$',
      isMonetaryInput = false,
    }) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: [
          'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
          className,
        ].join(' '),
        children: [
          isMonetaryInput &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('span', {
              className: `absolute top-[23%] ${
                readOnly ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]'
              } text-white font-sans text-xl font-medium`,
              children: currency,
            }),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('input', {
            autoComplete: 'off',
            pattern: pattern,
            onChange: onChange,
            name: name,
            readOnly: readOnly,
            id: name,
            type: type || 'number',
            value: value,
            className:
              'bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]',
          }),
          !readOnly &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('label', {
              htmlFor: name,
              className: 'cursor-pointer',
              children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _components_UI_StyledImage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                {
                  src: _public_assets__WEBPACK_IMPORTED_MODULE_3__ /* .edit */.eP,
                  alt: 'edit-icon',
                  className: 'w-[24px] h-[24px] dark:invert',
                },
              ),
            }),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Input;

    /***/
  },
};
