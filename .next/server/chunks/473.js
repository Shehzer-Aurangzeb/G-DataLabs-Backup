'use strict';
exports.id = 473;
exports.ids = [473];
exports.modules = {
  /***/ 7473: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80311);
    /* harmony import */ var _public_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83726);
    /* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14088);
    /* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95951);
    /* harmony import */ var _StyledImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29884);
    /* eslint-disable jsx-a11y/label-has-associated-control */

    function Select({ className, options, style, value, onClick, increasePadding }) {
      const [isOpen, setIsOpen] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
      const selectRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      const handleOutsideClick = () => {
        setIsOpen(false);
      };
      (0, _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__ /* .useOutsideClick */.O)(selectRef, handleOutsideClick);
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        ref: selectRef,
        style: style,
        className: [
          `relative bg-chat dark:bg-darkChat dark:text-main ${increasePadding ?? 'py-[10px]'} px-4 ${
            isOpen ? 'rounded-md rounded-b-none' : 'rounded-md'
          } w-full`,
          className,
        ].join(' '),
        children: [
          /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className: 'flex w-full justify-between items-center',
            onClick: toggleDropdown,
            onKeyDown: toggleDropdown,
            role: 'button',
            tabIndex: 0,
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('label', {
                className:
                  'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                children: (0, _lib__WEBPACK_IMPORTED_MODULE_3__ /* .capitalize */.kC)(value),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _StyledImage__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                {
                  src: _public_assets__WEBPACK_IMPORTED_MODULE_2__ /* .arrow */.x7,
                  alt: 'dropdown-icon',
                  className: `w-6 h-6 transition-all ease-in duration-250 dark:invert ${
                    isOpen ? 'rotate-180 ' : 'rotate-0'
                  }`,
                },
              ),
            ],
          }),
          isOpen &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('ul', {
              className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
              children: options
                .filter((item) => item.value !== value)
                .map((item) =>
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'li',
                    {
                      children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
                        tabIndex: 0,
                        className: `cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 ${
                          increasePadding ?? 'py-[10px]'
                        }`,
                        role: 'button',
                        onClick: () => {
                          onClick(item.value);
                          toggleDropdown();
                        },
                        onKeyDown: () => {
                          onClick(item.value);
                          toggleDropdown();
                        },
                        children: (0, _lib__WEBPACK_IMPORTED_MODULE_3__ /* .capitalize */.kC)(item.value),
                      }),
                    },
                    (0, uuid__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z)(),
                  ),
                ),
            }),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Select;

    /***/
  },
};
