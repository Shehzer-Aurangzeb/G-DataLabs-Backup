exports.id = 702;
exports.ids = [702];
exports.modules = {
  /***/ 84357: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92709));
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17076));
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34751));

    /***/
  },

  /***/ 38969: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
    Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
    Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
    Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
    Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
    Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));

    /***/
  },

  /***/ 95341: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43285));
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86135));

    /***/
  },

  /***/ 92709: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ Providers,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_2__,
    );
    /* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55867);
    /* harmony import */ var _context_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79323);
    /* harmony import */ var _context_AppProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66233);
    // Providers.jsx
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Providers({ children }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider,
        {
          store: _state_store__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP,
          children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            _context_AppProvider__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
            {
              children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                _context_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                {
                  children: children,
                },
              ),
            },
          ),
        },
      );
    }

    /***/
  },

  /***/ 86135: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6889);
    /* harmony import */ var _constants_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98739);
    /* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95951);
    /* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17223);
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Side({ children, className = '' }) {
      const { width } = (0, _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ /* .useWindowSize */.i)();
      const [isOpen, setIsOpen] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
      const containerRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
      const handleOutsideClick = () => {
        setIsOpen(false);
      };
      (0, _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__ /* .useOutsideClick */.O)(
        containerRef,
        handleOutsideClick,
      );
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children: [
            width < 1024 &&
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
                className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  _IconButton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                  {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => setIsOpen(!isOpen),
                    type: 'button',
                    src: _constants_assets__WEBPACK_IMPORTED_MODULE_3__ /* .sidebar_dark */.tp,
                  },
                ),
              }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              ref: containerRef,
              className: [
                `bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto ${
                  width < 1024
                    ? `fixed right-0 z-20 transition-all duration-300 ${isOpen ? 'w-full pl-5 pr-3' : 'w-0 p-0'}`
                    : 'w-full pl-5 pr-3'
                }`,
                className,
              ].join(' '),
              children: [
                width < 1024 &&
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _IconButton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                    {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => setIsOpen(!isOpen),
                      type: 'button',
                      src: _constants_assets__WEBPACK_IMPORTED_MODULE_3__ /* .sidebar_dark */.tp,
                    },
                  ),
                children,
              ],
            }),
          ],
        },
      );
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Side;

    /***/
  },

  /***/ 17223: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
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
    /* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65726);
    /* eslint-disable react/button-has-type */ /* __next_internal_client_entry_do_not_use__ default auto */

    function IconButton({ onClick, type = 'button', isLoading = false, src, className = '' }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('button', {
        className: ['disabled:cursor-not-allowed', className].join(' '),
        onClick: onClick,
        type: type,
        disabled: isLoading,
        children: isLoading
          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              _components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
              {
                style: {
                  color: '#fff',
                  margin: '0 auto',
                },
              },
            )
          : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              _components_UI_StyledImage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
              {
                src: src,
                alt: 'icon',
                className: 'h-full w-full dark:invert-[1]',
              },
            ),
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = IconButton;

    /***/
  },

  /***/ 17076: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: () => /* binding */ UI_Layout,
    });

    // EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(56786);
    // EXTERNAL MODULE: external "next/dist/compiled/react"
    var react_ = __webpack_require__(18038);
    // EXTERNAL MODULE: ./node_modules/next/navigation.js
    var navigation = __webpack_require__(57114);
    // EXTERNAL MODULE: ./constants/index.ts
    var constants = __webpack_require__(70880); // CONCATENATED MODULE: ./components/UI/Layout/NoSidebar/index.tsx
    function NoSidebarLayout({ children }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('div', {
        className: 'h-screen w-screen',
        children: children,
      });
    }
    /* harmony default export */ const NoSidebar = NoSidebarLayout;

    // EXTERNAL MODULE: ./hooks/useWindowSize.ts
    var useWindowSize = __webpack_require__(6889);
    // EXTERNAL MODULE: ./constants/assets.ts + 27 modules
    var assets = __webpack_require__(98739);
    // EXTERNAL MODULE: ./hooks/useOutsideClick.ts
    var useOutsideClick = __webpack_require__(95951);
    // EXTERNAL MODULE: ./hooks/useAuth.ts
    var useAuth = __webpack_require__(64260);
    // EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
    var lib = __webpack_require__(8250);
    // EXTERNAL MODULE: ./state/store.ts
    var store = __webpack_require__(55867);
    // EXTERNAL MODULE: ./state/sidebar/index.ts
    var sidebar = __webpack_require__(2934); // CONCATENATED MODULE: ./state/sidebar/hooks.ts
    const useSidebar = () => {
      const { isOpen } = (0, lib.useSelector)((state) => state.sidebar);
      const dispatch = (0, store /* useAppDispatch */.TL)();
      const setIsOpen = (0, react_.useCallback)(
        (payload) => {
          dispatch((0, sidebar /* setIsOpenAction */.H)(payload));
        },
        [dispatch],
      );
      return {
        isOpen,
        setIsOpen,
      };
    };

    // EXTERNAL MODULE: ./node_modules/next/image.js
    var next_image = __webpack_require__(52451);
    var image_default = /*#__PURE__*/ __webpack_require__.n(next_image);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(11440);
    var link_default = /*#__PURE__*/ __webpack_require__.n(next_link);
    // EXTERNAL MODULE: ./public/assets/images/logo.svg
    var logo = __webpack_require__(4081); // CONCATENATED MODULE: ./components/UI/Sidebar/Logo/index.tsx
    function Logo() {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(link_default(), {
        href: constants /* PATHS */.yy.HOME,
        className: 'flex flex-row gap-x-3 items-center',
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            className: 'relative w-[72px] h-[72px] laptop:w-[60px] laptop:h-[60px]',
            children: /*#__PURE__*/ jsx_runtime_.jsx(image_default(), {
              src: logo /* default */.Z,
              alt: 'logo',
              fill: true,
              className: 'object-contain ',
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx('h3', {
            className: 'text-main font-sans laptop:text-2xl text-3xl font-bold dark:text-primary',
            children: 'G-DataLabs',
          }),
        ],
      });
    }
    /* harmony default export */ const Sidebar_Logo = Logo;

    // EXTERNAL MODULE: ./components/UI/StyledImage/index.tsx
    var StyledImage = __webpack_require__(29884); // CONCATENATED MODULE: ./components/UI/Sidebar/Items/index.tsx
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Items({ items }) {
      const pathname = (0, navigation.usePathname)();
      return /*#__PURE__*/ jsx_runtime_.jsx('ul', {
        className: 'max-w-sidebarItem w-4/5 flex flex-col gap-y-4',
        children: items.map((item) =>
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            'li',
            {
              children: [
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(link_default(), {
                  href: item.to,
                  className: `flex flex-row items-center gap-x-3 py-3 px-4 transition-all duration-200 w-full rounded-xl ${
                    pathname === item.to ? 'bg-active dark:bg-[#888888]' : 'bg-transparent'
                  }`,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledImage /* default */.Z, {
                      src: item.icon,
                      alt: 'icon',
                      className: 'w-[30px] h-[30px]',
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('span', {
                      className: 'font-sans text-main dark:text-primary text-xl font-medium',
                      children: item.title,
                    }),
                  ],
                }),
                item.nestedItems &&
                  /*#__PURE__*/ jsx_runtime_.jsx('ul', {
                    className: 'flex flex-col gap-y-[18px] ml-10 mt-5',
                    children: item.nestedItems.map((nestedItem) =>
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        'li',
                        {
                          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(link_default(), {
                            href: nestedItem.to,
                            className: `flex flex-row items-center gap-x-3 px-4 transition-all duration-200 w-full rounded-xl ${
                              pathname === nestedItem.to ? 'bg-active  dark:bg-chat py-3' : 'bg-transparent'
                            }`,
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: `w-[30px] inline-block transition-all duration-200 bg-yellow ${
                                  pathname === nestedItem.to ? 'h-[13px]' : 'h-[6px]'
                                }`,
                              }),
                              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'font-sans text-main dark:text-primary text-base font-medium',
                                children: nestedItem.title,
                              }),
                            ],
                          }),
                        },
                        nestedItem.title,
                      ),
                    ),
                  }),
              ],
            },
            item.title,
          ),
        ),
      });
    }
    /* harmony default export */ const Sidebar_Items = Items;

    // EXTERNAL MODULE: ./context/ThemeProvider.tsx + 1 modules
    var ThemeProvider = __webpack_require__(79323);
    // EXTERNAL MODULE: ./types/index.ts
    var types = __webpack_require__(11923); // CONCATENATED MODULE: ./components/UI/Sidebar/Switch/index.tsx
    /* eslint-disable jsx-a11y/label-has-associated-control */ /* __next_internal_client_entry_do_not_use__ default auto */

    function Switch({ className = '' }) {
      const { theme, setTheme } = (0, ThemeProvider /* useTheme */.F)();
      const [checked, setChecked] = (0, react_.useState)(theme !== types /* Theme */.Q2.DARK);
      const handleChange = () => {
        if (checked) setTheme(types /* Theme */.Q2.DARK);
        else setTheme(types /* Theme */.Q2.LIGHT);
        setChecked(!checked);
      };
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('input', {
            type: 'checkbox',
            id: 'switch',
            className: 'hidden',
            onChange: handleChange,
          }),
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            className: ['bg-gray rounded-md py-3 px-4 w-full ] dark:bg-[#888888]', className].join(' '),
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('label', {
              htmlFor: 'switch',
              className: 'flex gap-x-3 items-center cursor-pointer justify-center',
              children: [
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: `flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 ${
                    checked ? 'bg-dark dark:bg-darkActive' : 'bg-transparent'
                  } `,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledImage /* default */.Z, {
                      src: checked ? assets /* bulb_active */.T7 : assets /* bulb_inactive */.LI,
                      alt: 'light-bulb-icon',
                      className: 'h-5 w-4 dark:invert-1',
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('span', {
                      className: `font-sans font-bold text-base dark:text-white ${
                        checked ? 'text-active ' : 'text-inactive '
                      }`,
                      children: 'Light',
                    }),
                  ],
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: `flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 ${
                    !checked ? 'bg-dark dark:bg-darkActive' : 'bg-transparent'
                  } `,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledImage /* default */.Z, {
                      src: checked ? assets /* bulb_inactive */.LI : assets /* bulb_active */.T7,
                      alt: 'light-bulb-icon',
                      className: 'h-5 w-5 dark:invert-1',
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('span', {
                      className: `font-sans font-bold text-base  ${
                        !checked ? 'text-active dark:text-white' : 'text-inactive dark:text-white'
                      }`,
                      children: 'Dark',
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    /* harmony default export */ const Sidebar_Switch = Switch;

    // EXTERNAL MODULE: ./lib/index.ts
    var lib_0 = __webpack_require__(14088); // CONCATENATED MODULE: ./components/UI/Sidebar/Profile/index.tsx
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Profile({ logoutUser, user }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className:
          'mb-2 bg-gray flex flex-row items-center w-full pl-4 pr-6 py-3 rounded-md gap-x-4 dark:bg-darkActive',
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(StyledImage /* default */.Z, {
            src: user.image,
            alt: 'profile',
            className: 'w-[50px] h-[50px] rounded-full',
            rounded: true,
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className: 'flex flex-col flex-1',
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx('h3', {
                className: 'font-sans font-bold text-xl text-active  leading-6  max-w-[140px] truncate',
                children: (0, lib_0 /* capitalize */.kC)(`${user.firstName} ${user.lastName}`),
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('p', {
                className: 'font-sans font-normal text-active text-base max-w-[140px] truncate',
                children: user.email,
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx('button', {
            type: 'submit',
            className: 'bg-transparent focus:outline-none focus:shadow-none',
            onClick: logoutUser,
            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledImage /* default */.Z, {
              src: assets /* logout */.kS,
              alt: 'logout',
              className: 'w-[35px] h-[35px]',
            }),
          }),
        ],
      });
    }
    /* harmony default export */ const Sidebar_Profile = Profile;

    // EXTERNAL MODULE: ./components/UI/IconButton/index.tsx
    var IconButton = __webpack_require__(17223); // CONCATENATED MODULE: ./components/UI/Sidebar/index.tsx
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Sidebar() {
      const { width } = (0, useWindowSize /* useWindowSize */.i)();
      const { isOpen, setIsOpen } = useSidebar();
      const containerRef = (0, react_.useRef)(null);
      const pathname = (0, navigation.usePathname)();
      const { isAuthenticated, logoutUser, user } = (0, useAuth /* useAuth */.a)();
      const handleOutsideClick = () => {
        setIsOpen(false);
      };
      (0, useOutsideClick /* useOutsideClick */.O)(containerRef, handleOutsideClick);
      (0, react_.useEffect)(() => {
        setIsOpen(false);
      }, [pathname, setIsOpen]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          width < 1280 &&
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className: 'h-[calc(100vh_-_2.5rem)] bg-main dark:bg-transparent relative w-[50px]',
              children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton /* default */.Z, {
                className: 'absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px]',
                onClick: () => setIsOpen(!isOpen),
                type: 'button',
                src: assets /* sidebar */.rc,
              }),
            }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('aside', {
            ref: containerRef,
            className: `h-[calc(100vh_-_2.5rem)] flex flex-col max-w-[360px] mobile:max-w-full items-start justify-between overflow-y-auto ${
              width < 1280
                ? `fixed z-20 transition-all duration-300 bg-main dark:bg-[#9f9f9e] ${
                    isOpen ? 'w-full  pl-5' : 'w-0 p-0'
                  }`
                : ' pl-5 w-[25%] bg-transparent'
            }
     `,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_Logo, {}),
              width < 1280 &&
                /*#__PURE__*/ jsx_runtime_.jsx(IconButton /* default */.Z, {
                  className: 'z-10 absolute top-3 right-2 flex items-center justify-center w-[30px] h-[30px]',
                  onClick: () => setIsOpen(!isOpen),
                  type: 'button',
                  src: assets /* sidebar */.rc,
                }),
              /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_Items, {
                items: isAuthenticated ? constants /* APPITEMS */.a3 : constants /* AUTHITEMS */.x1,
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: 'max-w-sidebarItem w-full',
                children: [
                  isAuthenticated &&
                    user &&
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_Profile, {
                      logoutUser: logoutUser,
                      user: user,
                    }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_Switch, {}),
                ],
              }),
            ],
          }),
        ],
      });
    }
    /* harmony default export */ const UI_Sidebar = Sidebar; // CONCATENATED MODULE: ./components/UI/Layout/Main/index.tsx

    function MainLayout({ children }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        className: 'h-screen w-screen flex dark:bg-[#b6b6b5] flex-row py-5 pr-5',
        children: [/*#__PURE__*/ jsx_runtime_.jsx(UI_Sidebar, {}), children],
      });
    }
    /* harmony default export */ const Main = MainLayout; // CONCATENATED MODULE: ./components/UI/Layout/index.tsx

    /* __next_internal_client_entry_do_not_use__ default auto */

    function Layout({ children }) {
      const pathname = (0, navigation.usePathname)();
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          ' ',
          pathname === constants /* PATHS */.yy.COOKIEPOLICY ||
          pathname === constants /* PATHS */.yy.PRIVACY ||
          pathname === constants /* PATHS */.yy.TERMS
            ? /*#__PURE__*/ jsx_runtime_.jsx(NoSidebar, {
                children: children,
              })
            : /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: children,
              }),
        ],
      });
    }
    /* harmony default export */ const UI_Layout = Layout;

    /***/
  },

  /***/ 65726: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
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

    function Loader({ style }) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
        className: 'animate-spin -ml-1 mr-3 h-5 w-5 text-disabled',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        style: style,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('circle', {
            className: 'opacity-25',
            cx: '12',
            cy: '12',
            r: '10',
            stroke: 'currentColor',
            strokeWidth: '4',
          }),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('path', {
            className: 'opacity-75',
            fill: 'currentColor',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
          }),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Loader;

    /***/
  },

  /***/ 29884: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
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
    /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
    /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      next_image__WEBPACK_IMPORTED_MODULE_2__,
    );

    function StyledImage({ className, src, alt, rounded = false }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
        className: ['relative', className].join(' '),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          next_image__WEBPACK_IMPORTED_MODULE_2___default(),
          {
            src: src,
            alt: alt,
            fill: true,
            className: `${rounded ? 'object-cover rounded-full' : 'object-contain'} `,
            sizes: '(max-width: 768px)',
          },
        ),
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = StyledImage;

    /***/
  },

  /***/ 52122: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ h: () => /* binding */ api,
      /* harmony export */
    });
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93258);
    /* harmony import */ var _lib_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73606);

    /**
     * axios instance
     */ const api = axios__WEBPACK_IMPORTED_MODULE_1__['default'].create({
      baseURL: 'https://g-datalabs.com/',
    });
    // request header
    api.interceptors.request.use(
      async (config) => {
        const user = (0, _lib_cookies__WEBPACK_IMPORTED_MODULE_0__ /* .getUserInfoFromCookies */.dT)();
        if (user) {
          config.headers.Authorization = `Bearer ${user.key}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    // response parse
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        throw error;
      },
    );

    /***/
  },

  /***/ 98739: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      JT: () => /* reexport */ account_icon,
      IH: () => /* reexport */ add_icon,
      x7: () => /* reexport */ arrow_icon,
      T7: () => /* reexport */ bulb_active_icon,
      LI: () => /* reexport */ bulb_inactive_icon,
      W6: () => /* reexport */ chat_icon,
      Xv: () => /* reexport */ check_active_icon,
      WA: () => /* reexport */ check_disable_icon,
      JE: () => /* reexport */ cross_active_icon,
      QM: () => /* reexport */ cross_disable_icon,
      oB: () => /* reexport */ default_profile,
      DV: () => /* reexport */ dislike_icon,
      eP: () => /* reexport */ edit_icon,
      th: () => /* reexport */ hidepassword_icon,
      m8: () => /* reexport */ history_icon,
      LE: () => /* reexport */ home_icon,
      vL: () => /* reexport */ like_icon,
      kS: () => /* reexport */ logout_icon,
      i1: () => /* reexport */ my_g_data_icon,
      PA: () => /* reexport */ no_chats,
      HB: () => /* reexport */ no_data,
      PD: () => /* reexport */ plus_icon,
      lW: () => /* reexport */ send_icon,
      fR: () => /* reexport */ showpassword_icon,
      rc: () => /* reexport */ sidebar_icon,
      tp: () => /* reexport */ sidebar_dark_icon,
      ws: () => /* reexport */ upload_icon,
    }); // CONCATENATED MODULE: ./public/assets/icons/home__icon.svg

    /* harmony default export */ const home_icon = {
      src: '/_next/static/media/home__icon.77c058d5.svg',
      height: 31,
      width: 31,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/history__icon.svg
    /* harmony default export */ const history_icon = {
      src: '/_next/static/media/history__icon.317786c2.svg',
      height: 31,
      width: 31,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/my_g-data__icon.svg
    /* harmony default export */ const my_g_data_icon = {
      src: '/_next/static/media/my_g-data__icon.c8d315f8.svg',
      height: 31,
      width: 31,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/account__icon.svg
    /* harmony default export */ const account_icon = {
      src: '/_next/static/media/account__icon.b91bce68.svg',
      height: 30,
      width: 30,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/bulb_active__icon.svg
    /* harmony default export */ const bulb_active_icon = {
      src: '/_next/static/media/bulb_active__icon.c172f270.svg',
      height: 22,
      width: 16,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/bulb_inactive__icon.svg
    /* harmony default export */ const bulb_inactive_icon = {
      src: '/_next/static/media/bulb_inactive__icon.0279f459.svg',
      height: 26,
      width: 25,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/logout__icon.svg
    /* harmony default export */ const logout_icon = {
      src: '/_next/static/media/logout__icon.fef64a12.svg',
      height: 36,
      width: 35,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/send__icon.svg
    /* harmony default export */ const send_icon = {
      src: '/_next/static/media/send__icon.ef522f85.svg',
      height: 41,
      width: 40,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/sidebar__icon.png
    /* harmony default export */ const sidebar_icon = {
      src: '/_next/static/media/sidebar__icon.ffb450fe.png',
      height: 256,
      width: 256,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATklEQVR42mWNMQ5AQBQF5wgbJ1AIsYnSAXRarUSpwiV0Sg48kSj98r1kZgALK0sbs4lvnt4+ru5eJuyc7R0B3MzYujg4AXhYhyMgUfrPvqNHQdEzcD6aAAAAAElFTkSuQmCC',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/icons/sidebar_dark__icon.png
    /* harmony default export */ const sidebar_dark_icon = {
      src: '/_next/static/media/sidebar_dark__icon.058fcac0.png',
      height: 256,
      width: 256,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mXNoQ2AMBQA0TdC0wkQBEITJAPgsFgSJApYAoeEiTvAt5fcHWStRq9IkD0+v8PllRhtJgs4FQa72QpuXQBBCdGwrcRpDjk8OG1xAAAAAElFTkSuQmCC',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/icons/chat__icon.svg
    /* harmony default export */ const chat_icon = {
      src: '/_next/static/media/chat__icon.a90e55c7.svg',
      height: 25,
      width: 25,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/add__icon.svg
    /* harmony default export */ const add_icon = {
      src: '/_next/static/media/add__icon.759b9985.svg',
      height: 31,
      width: 30,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/upload__icon.svg
    /* harmony default export */ const upload_icon = {
      src: '/_next/static/media/upload__icon.155b8d29.svg',
      height: 37,
      width: 36,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/cross_disable__icon.svg
    /* harmony default export */ const cross_disable_icon = {
      src: '/_next/static/media/cross_disable__icon.5c8e8498.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/cross_active__icon.svg
    /* harmony default export */ const cross_active_icon = {
      src: '/_next/static/media/cross_active__icon.4db9eef5.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/check_disable__icon.svg
    /* harmony default export */ const check_disable_icon = {
      src: '/_next/static/media/check_disable__icon.f95d0a9b.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/check_active__icon.svg
    /* harmony default export */ const check_active_icon = {
      src: '/_next/static/media/check_active__icon.0ce21cf2.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/edit__icon.svg
    /* harmony default export */ const edit_icon = {
      src: '/_next/static/media/edit__icon.0dee8109.svg',
      height: 25,
      width: 24,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/arrow__icon.svg
    /* harmony default export */ const arrow_icon = {
      src: '/_next/static/media/arrow__icon.c780bc0f.svg',
      height: 24,
      width: 28,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/plus__icon.svg
    /* harmony default export */ const plus_icon = {
      src: '/_next/static/media/plus__icon.30d10bc7.svg',
      height: 21,
      width: 23,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/images/default-profile.png
    /* harmony default export */ const default_profile = {
      src: '/_next/static/media/default-profile.b62773a2.png',
      height: 90,
      width: 90,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXyeRjxeRjxeBfxeBjxeBfxeBfxeRfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBjxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeRjxeBjxeBdyAzjlAAAAHHRSTlMAAAACAgMKCg0OHSMwMTJFV15fYGGFlMbJ0fn7h3ig8gAAAEBJREFUeNoFQIURgDAQC8GrSL309x+Tw0wYAy6gKiJFEchyvSMDVtp5NLFwfYTwdQfUNCFVgDreT9TEyt37jesPgBMDgQkeLc8AAAAASUVORK5CYII=',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/images/no-data.png
    /* harmony default export */ const no_data = {
      src: '/_next/static/media/no-data.de51b600.png',
      height: 100,
      width: 100,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3BPQqCYAAA0Df0gwfQo0QQ7UERtEVT0VRBXxiCLcFHCU05eBg9nr4Hqcx2mEmBqNUMOxGm7pZugrmrhLHcwsvFTgUTDxulk7efAyMFEqVCUEFt7ewvyH1gZm/lKfo69vEEFGYLsWa/AAAAAElFTkSuQmCC',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/images/no-chats.png
    /* harmony default export */ const no_chats = {
      src: '/_next/static/media/no-chats.8d8a2b29.png',
      height: 100,
      width: 100,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/icons/like__icon.svg
    /* harmony default export */ const like_icon = {
      src: '/_next/static/media/like__icon.e95d69bd.svg',
      height: 800,
      width: 800,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/dislike__icon.svg
    /* harmony default export */ const dislike_icon = {
      src: '/_next/static/media/dislike__icon.8d708f09.svg',
      height: 800,
      width: 800,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/showpassword__icon.png
    /* harmony default export */ const showpassword_icon = {
      src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
      height: 24,
      width: 24,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42l2NsQ0AIQwD76fkV4CSHjahh4oRg4sgEGcpsiw5hk9yjv+ZUsBpGIWKyYmMERl0XSPvoEsJBbtSveKE6+k7uwD0YxaTHd0JgAAAAABJRU5ErkJggg==',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/icons/hidepassword__icon.png
    /* harmony default export */ const hidepassword_icon = {
      src: '/_next/static/media/hidepassword__icon.84b28e09.png',
      height: 60,
      width: 60,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42kXBIQ6CUAAA0CcWj6HBjU2L0WYyewCLm3YP4eacBps3sHAANjYaGwQ4AaMRuMUn8h5vMYDIjJWHq5+/MzB30Xo66qVQCDYyuZ0gpxTsbWXugpqFyuDkoNMA3CS+Yi9LIpO1zwh58RiIbBbx+wAAAABJRU5ErkJggg==',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./constants/assets.ts

    /***/
  },

  /***/ 70880: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Ac: () => /* binding */ HISTORYDATATABLECOLUMNS,
      /* harmony export */ CQ: () => /* binding */ CONFIRMPASSWORDFORMINITIALVALUES,
      /* harmony export */ D$: () => /* binding */ LOGINFORMINITIALVALUES,
      /* harmony export */ E0: () => /* binding */ RESETPASSWORDFORMINITIALVALUES,
      /* harmony export */ JT: () => /* binding */ DESCRIPTIONOFVARIABLES,
      /* harmony export */ JU: () => /* binding */ CONSENTTABLECOLUMNS,
      /* harmony export */ KR: () => /* binding */ PAGEOPTION,
      /* harmony export */ KV: () => /* binding */ PERSONALINFOINITIALVALUES,
      /* harmony export */ TB: () => /* binding */ MYGDATATABLECOLUMNS,
      /* harmony export */ XZ: () => /* binding */ SOCIALLIFEOPTIONS,
      /* harmony export */ a3: () => /* binding */ APPITEMS,
      /* harmony export */ f6: () => /* binding */ REWARDSTABLECOLUMNS,
      /* harmony export */ kk: () => /* binding */ maxWidth,
      /* harmony export */ nz: () => /* binding */ PROMPTRESPONSEOPTIONS,
      /* harmony export */ qQ: () => /* binding */ PERSONALDATATABLECOLUMNS,
      /* harmony export */ sw: () => /* binding */ PERSONALDATAINITIALVALUES,
      /* harmony export */ vK: () => /* binding */ SIGNUPFORMINITIALVALUES,
      /* harmony export */ x1: () => /* binding */ AUTHITEMS,
      /* harmony export */ yy: () => /* binding */ PATHS,
      /* harmony export */
    });
    /* harmony import */ var _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39516);
    /* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98739);

    const PATHS = {
      HOME: '/',
      HISTORY: '/history',
      MYGDATA: '/my_g-data',
      OURGDATA: '/our_g-data',
      ACCOUNT: '/account',
      PERSONAL: '/my_g-data/personal-data',
      CONSENT: '/my_g-data/consent',
      REWARDS: '/my_g-data/rewards',
      SCREEN: '/my_g-data/screen-data',
      SIGNUP: '/signup',
      LOGIN: '/login',
      RESETPASSWORD: '/reset_password',
      PRIVACY: '/privacy_policy',
      COOKIEPOLICY: '/cookie_policy',
      TERMS: '/terms_condition',
      CONFIRMPASSWORD: '/reset_password/confirm',
    };
    const APPITEMS = [
      {
        title: 'Home',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .home */.LE,
        to: PATHS.HOME,
      },
      {
        title: 'History',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .history */.m8,
        to: PATHS.HISTORY,
      },
      {
        title: 'My G-Data',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .myGData */.i1,
        to: PATHS.MYGDATA,
        nestedItems: [
          {
            title: 'Personal Data',
            icon: '',
            to: PATHS.PERSONAL,
          },
          {
            title: 'Consent',
            icon: '',
            to: PATHS.CONSENT,
          },
          {
            title: 'Rewards',
            icon: '',
            to: PATHS.REWARDS,
          },
          {
            title: 'Screen Data',
            icon: '',
            to: PATHS.SCREEN,
          },
        ],
      },
      {
        title: 'Our G-Data',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .myGData */.i1,
        to: PATHS.OURGDATA,
      },
      {
        title: 'My Account',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .account */.JT,
        to: PATHS.ACCOUNT,
      },
    ];
    const AUTHITEMS = [
      {
        title: 'Home',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .home */.LE,
        to: PATHS.HOME,
      },
      {
        title: 'Login',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .logout */.kS,
        to: PATHS.LOGIN,
      },
      {
        title: 'Register',
        icon: _assets__WEBPACK_IMPORTED_MODULE_1__ /* .account */.JT,
        to: PATHS.SIGNUP,
      },
    ];
    const SOCIALLIFEOPTIONS = [
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
    ];
    const PROMPTRESPONSEOPTIONS = [
      {
        title: 'Generate Text Only',
        color: '#046C98',
        value: _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.TEXT,
        darkColor: 'FAB515',
      },
      {
        title: 'Generate Image Only',
        color: '#F5B11A',
        value: _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.IMAGES,
        darkColor: '#E4C375',
      },
      {
        title: 'Generate Text + Image',
        color: '#E62431',
        value: _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.BOTH,
        darkColor: '#EE3E2E',
      },
    ];
    const PERSONALINFOINITIALVALUES = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: '',
    };
    const LOGINFORMINITIALVALUES = {
      email: '',
      password: '',
    };
    const RESETPASSWORDFORMINITIALVALUES = {
      email: '',
    };
    const CONFIRMPASSWORDFORMINITIALVALUES = {
      token: '',
      password: '',
      confirm_password: '',
    };
    const SIGNUPFORMINITIALVALUES = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      privacyPolicy: false,
      termsConditions: false,
      cookiePolicy: false,
    };
    const PERSONALDATAINITIALVALUES = {
      date: '',
      high_temperature: 0,
      low_temperature: 0,
      emotional_list: [],
      emotional_overall: '',
      weather: '',
      relative_finance_status: '',
      exercise_time: 0,
      any_social_life: SOCIALLIFEOPTIONS[0].value,
    };
    const CONSENTTABLECOLUMNS = [
      {
        Header: 'Personal Data and Webcam',
        accessor: 'PDataAndWeb',
      },
      {
        Header: 'Definition',
        accessor: 'Definition',
      },
      {
        Header: 'Companies',
        accessor: 'Companies',
      },
      {
        Header: 'Use',
        accessor: 'Use',
      },
      {
        Header: 'Consent',
        accessor: 'Consent',
      },
      {
        Header: 'id',
        accessor: 'id',
      },
    ];
    const REWARDSTABLECOLUMNS = [
      {
        Header: 'Personal Data and ScreenData',
        accessor: 'PDataAndScreen',
      },
      {
        Header: 'Consent',
        accessor: 'Consent',
      },
      {
        Header: 'Personal Defined Value',
        accessor: 'PDefinedValue',
      },
      {
        Header: 'Other Companies Value',
        accessor: 'OtherCompValue',
      },
      {
        Header: 'id',
        accessor: 'id',
      },
    ];
    const PERSONALDATATABLECOLUMNS = [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'High Temperature',
        accessor: 'high_temperature',
      },
      {
        Header: 'Low Temperature',
        accessor: 'low_temperature',
      },
      {
        Header: 'Weather Type',
        accessor: 'weather',
      },
      {
        Header: 'Emotional List',
        accessor: 'emotional_list',
      },
      {
        Header: 'Emotional Overall',
        accessor: 'emotional_overall',
      },
      {
        Header: 'Relative Finance Status',
        accessor: 'relative_finance_status',
      },
      {
        Header: 'Exercise Total Time',
        accessor: 'exercise_time',
      },
      {
        Header: 'Photos',
        accessor: 'photos',
      },
      {
        Header: 'Health Overall',
        accessor: 'health_overall',
      },
      {
        Header: 'Any Social Life',
        accessor: 'any_social_life',
      },
      {
        Header: 'Social Life List',
        accessor: 'social_life_list',
      },
      {
        Header: 'Weight',
        accessor: 'weight',
      },
      {
        Header: 'Family Status',
        accessor: 'family_status',
      },
      {
        Header: 'Device Screen Time',
        accessor: 'device_screen_time',
      },
      {
        Header: 'Work Life Balance',
        accessor: 'work_life_balance',
      },
      {
        Header: 'Journaling',
        accessor: 'journaling',
      },
    ];
    const HISTORYDATATABLECOLUMNS = [
      {
        Header: 'Questions',
        accessor: 'question',
      },
      {
        Header: 'Answers',
        accessor: 'answer',
      },
      {
        Header: 'Image',
        accessor: 'images',
      },
      {
        Header: 'Feedback',
        accessor: 'choice',
      },
    ];
    const MYGDATATABLECOLUMNS = [
      {
        Header: 'Consents',
        accessor: 'consents',
      },
      {
        Header: '08-13-2023',
        accessor: 'date1',
      },
      {
        Header: '08-14-2023',
        accessor: 'date2',
      },
      {
        Header: '08-15-2023',
        accessor: 'date3',
      },
      {
        Header: '08-16-2023',
        accessor: 'date4',
      },
      {
        Header: '08-17-2023',
        accessor: 'date5',
      },
      {
        Header: 'Consent Value',
        accessor: 'consentValue',
      },
      {
        Header: 'Rewards',
        accessor: 'rewards',
      },
    ];
    const DESCRIPTIONOFVARIABLES = {
      emotional_list: 'list of emotions experienced throughout the day',
      high_temperature: 'highest temperature of the day',
      emotional_overall: 'an overall assessment of the days feelings',
      low_temperature: 'lowest temperature of the day',
      relative_finance_status: 'relative financial status ',
      weather: 'list of the weather of the day',
      exercise_time: 'total amount of exercise during the day',
      photos: 'any personal images that describe the day',
      exercise_total_time: 'total amount of exercise during the day',
      health_overall: 'an assessment of the days health',
      any_social_life: 'whether or not any social life occurred',
      social_life_list: 'list of social activities',
      weight: 'measure of weight in pounds',
      family_status: 'status of close friends and family',
      device_screen_time: 'amount of time spent on personal devices',
      work_life_balance: 'overall focus of the day in a range between 0(work)-1(relaxation',
      journaling: 'any points throughout the day worthy of note',
    };
    const maxWidth = '1450px';
    const PAGEOPTION = [10, 20, 30, 40];

    /***/
  },

  /***/ 66233: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ context_AppProvider,
      q: () => /* binding */ useApp,
    });

    // EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(56786);
    // EXTERNAL MODULE: external "next/dist/compiled/react"
    var react_ = __webpack_require__(18038);
    // EXTERNAL MODULE: ./state/myGData/hooks.ts
    var hooks = __webpack_require__(70918);
    // EXTERNAL MODULE: ./config/index.ts
    var config = __webpack_require__(52122);
    // EXTERNAL MODULE: ./state/user/hooks.ts
    var user_hooks = __webpack_require__(25861);
    // EXTERNAL MODULE: ./lib/index.ts
    var lib = __webpack_require__(14088);
    // EXTERNAL MODULE: ./types/index.ts
    var types = __webpack_require__(11923);
    // EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
    var axios = __webpack_require__(93258); // CONCATENATED MODULE: ./lib/location.ts
    const getCurrentLocation = (arg) => {
      const { successCallback, errorCallback } = arg;
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
      });
    };

    // EXTERNAL MODULE: ./state/weather/hooks.ts
    var weather_hooks = __webpack_require__(6058); // CONCATENATED MODULE: ./hooks/useWeather.ts
    /* eslint-disable @typescript-eslint/naming-convention */ /* __next_internal_client_entry_do_not_use__ useWeather auto */

    const POLL_ONE_HOUR = 60 * 60 * 1000;
    const useWeather = () => {
      const { setWeather } = (0, weather_hooks /* useWeatherState */.I)();
      const { user } = (0, user_hooks /* useUser */.a)();
      const getCurrentLocationWeather = (0, react_.useCallback)(
        async (response) => {
          try {
            const { coords } = response;
            const { data } = await axios['default'].get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${
                coords.longitude
              }&appid=${'b9a5327fe46885fda6abefa8e7b61e7e'}&units=metric`,
            );
            if (!data.main) return;
            const payload = {
              lowestTemperature: data.main.temp_min,
              highestTemperature: data.main.temp_max,
            };
            setWeather(payload);
          } catch (e) {
            // console.log('e :>> ', e);
          }
        },
        [setWeather],
      );
      const errorCallback = (0, react_.useCallback)(async () => {}, []);
      (0, react_.useEffect)(() => {
        if (user)
          getCurrentLocation({
            successCallback: getCurrentLocationWeather,
            errorCallback,
          });
        setInterval(() => {
          getCurrentLocation({
            successCallback: getCurrentLocationWeather,
            errorCallback,
          });
        }, POLL_ONE_HOUR);
      }, [errorCallback, getCurrentLocationWeather, user]);
      return {
        getCurrentLocationWeather,
      };
    };

    // EXTERNAL MODULE: ./hooks/useChatBot.ts
    var useChatBot = __webpack_require__(62073); // CONCATENATED MODULE: ./context/AppProvider.tsx
    /* eslint-disable consistent-return */ /* eslint-disable react/jsx-no-constructed-context-values */ /* __next_internal_client_entry_do_not_use__ useApp,default auto */

    const AppContext = /*#__PURE__*/ (0, react_.createContext)({
      gTableColumns: [],
      getAllConsentData: async () => {},
      updateMyGData: async () => {},
      getAllPersonalData: async () => {},
    });
    function AppProvider({ children }) {
      const { setPersonalData, setGData, setRData, setCData, setScreenData } = (0, hooks /* usePersonalData */.h)();
      const { fetchChatHistory, fetchRecentChats } = (0, useChatBot /* useChatBot */.L)();
      const [gTableColumns, setGTableColumns] = (0, react_.useState)([]);
      const { user } = (0, user_hooks /* useUser */.a)();
      //* weather hook
      useWeather();
      //* functions
      const getAllPersonalData = (0, react_.useCallback)(async () => {
        const { data } = await config /* api */.h
          .get('api/personal_data_consents_rewards');
        const PData = (0, lib /* createTableData */.uR)({
          tableName: types /* TableName */.me.PData,
          data: data.data,
        });
        setPersonalData(PData);
      }, [setPersonalData]);
      const getAllConsentData = (0, react_.useCallback)(async () => {
        const { data } = await config /* api */.h
          .get('api/user_consents_rewards');
        const rData = (0, lib /* createTableData */.uR)({
          tableName: types /* TableName */.me.RData,
          data: data.data,
        });
        const consentTableData = (0, lib /* createTableData */.uR)({
          tableName: types /* TableName */.me.CData,
          data: data.data,
        });
        setRData(rData);
        setCData(consentTableData);
      }, [setRData, setCData]);
      const getLastFivePersonalData = (0, react_.useCallback)(async () => {
        const { data } = await config /* api */.h
          .get('api/user_personal_data/last_five');
        const gData = (0, lib /* createTableData */.uR)({
          tableName: types /* TableName */.me.GData,
          data,
        });
        if (data.length === 0) return;
        const gDataTableColumns = (0, lib /* createTableColumns */.Yn)(data);
        setGTableColumns(gDataTableColumns);
        setGData(gData);
      }, [setGData]);
      const getAllScreenData = (0, react_.useCallback)(async () => {
        try {
          const { data } = await config /* api */.h
            .get('api/file-data/');
          const screenData = (0, lib /* createScreenData */.Xe)(data.data);
          setScreenData(screenData);
        } catch (e) {
          // console.log('e :>> ', e);
        }
      }, [setScreenData]);
      const initApp = (0, react_.useCallback)(() => {
        getAllPersonalData();
        getLastFivePersonalData();
        fetchChatHistory();
        fetchRecentChats();
        getAllConsentData();
        getAllScreenData();
      }, [
        getAllPersonalData,
        getLastFivePersonalData,
        getAllConsentData,
        fetchChatHistory,
        getAllScreenData,
        fetchRecentChats,
      ]);
      //* initialize the app.
      (0, react_.useEffect)(() => {
        if (!user) return;
        initApp();
      }, [user, initApp]);
      return /*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: {
          gTableColumns,
          getAllConsentData,
          updateMyGData: getLastFivePersonalData,
          getAllPersonalData,
        },
        children: children,
      });
    }
    const useApp = () => (0, react_.useContext)(AppContext);
    /* harmony default export */ const context_AppProvider = AppProvider;

    /***/
  },

  /***/ 79323: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ context_ThemeProvider,
      F: () => /* binding */ useTheme,
    });

    // EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(56786);
    // EXTERNAL MODULE: external "next/dist/compiled/react"
    var react_ = __webpack_require__(18038);
    // EXTERNAL MODULE: ./types/index.ts
    var types = __webpack_require__(11923); // CONCATENATED MODULE: ./lib/theme.ts
    const getInitialTheme = () => {
      if (false) {
      }
      return types /* Theme */.Q2.LIGHT;
    };
    const toavoiderror = true; // CONCATENATED MODULE: ./context/ThemeProvider.tsx

    /* __next_internal_client_entry_do_not_use__ useTheme,default auto */

    const ThemeContext = /*#__PURE__*/ (0, react_.createContext)({
      theme: types /* Theme */.Q2.LIGHT,
      setTheme: () => {},
    });
    function ThemeProvider({ children }) {
      const [theme, setTheme] = (0, react_.useState)(getInitialTheme());
      const value = (0, react_.useMemo)(
        () => ({
          theme,
          setTheme,
        }),
        [theme],
      );
      const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === types /* Theme */.Q2.DARK;
        root.classList.remove(isDark ? types /* Theme */.Q2.LIGHT : types /* Theme */.Q2.DARK);
        root.classList.add(existing);
        localStorage.setItem('current-theme', existing);
      };
      (0, react_.useEffect)(() => {
        checkTheme(theme);
      }, [theme]);
      return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: value,
        children: children,
      });
    }
    const useTheme = () => (0, react_.useContext)(ThemeContext);
    /* harmony default export */ const context_ThemeProvider = ThemeProvider;

    /***/
  },

  /***/ 64260: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ a: () => /* binding */ useAuth,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
    /* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      next_navigation__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34751);
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64722);
    /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52122);
    /* harmony import */ var _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90634);
    /* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25861);
    /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70880);
    /* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14088);
    /* harmony import */ var _state_chats_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81178);
    /* eslint-disable no-restricted-syntax */ /* eslint-disable @typescript-eslint/naming-convention */ /* __next_internal_client_entry_do_not_use__ useAuth auto */

    const useAuth = () => {
      const { isLoading, setIsLoading } = (0, _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useLoading */.r)();
      const { setUser, isAuthenticated, user } = (0, _state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ /* .useUser */.a)();
      const { deleteChats } = (0, _state_chats_hooks__WEBPACK_IMPORTED_MODULE_8__ /* .useChats */.P)();
      const router = (0, next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      const getUserInfo = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (token) => {
        const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
          .get('api/user_profile/1/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        const { email, first_name, last_name, phone_number, total_rewards, username, id } = data.data;
        let { profile_picture_url } = data.data;
        if (!profile_picture_url) {
          profile_picture_url = (0, _lib__WEBPACK_IMPORTED_MODULE_7__ /* .generateAvatar */.El)(first_name);
        }
        const userInfo = {
          email,
          firstName: first_name,
          lastName: last_name,
          id,
          username,
          image: profile_picture_url,
          phoneNumber: phone_number,
          totalRewards: total_rewards,
          key: '',
        };
        return userInfo;
      }, []);
      const loginUser = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (credentials) => {
          try {
            setIsLoading(true);
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .post('login_api', credentials);
            const userInfo = await getUserInfo(data.access_token);
            const payload = {
              ...userInfo,
              totalRewards: userInfo.totalRewards ?? 0,
              key: data.access_token,
            };
            setUser({
              user: payload,
              isAuthenticated: true,
            });
            router.replace(_constants__WEBPACK_IMPORTED_MODULE_6__ /* .PATHS */.yy.HOME);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Welcome to G-Data Labs');
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__ /* .AxiosError */.d7)
              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(e.response?.data.error);
            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('Something went wrong ');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, setUser, router, getUserInfo],
      );
      const updateUser = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (payload) => {
          try {
            setIsLoading(true);
            const formdata = new FormData();
            for (const [key, value] of Object.entries(payload)) {
              formdata.append(key, value);
            }
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .patch('api/user_profile/1/', formdata);
            let { profile_picture_url } = data.data;
            if (!profile_picture_url) {
              profile_picture_url = (0, _lib__WEBPACK_IMPORTED_MODULE_7__ /* .generateAvatar */.El)(
                data.data.first_name,
              );
            }
            const updatedUserInfo = {
              firstName: data.data.first_name,
              lastName: data.data.last_name,
              phoneNumber: data.data.phone_number,
              totalRewards: data.data.total_rewards,
              email: data.data.email,
              image: profile_picture_url,
              username: data.data.username,
              id: data.data.id,
              key: user?.key,
            };
            setUser({
              user: updatedUserInfo,
              isAuthenticated: true,
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Personal information updated successfully');
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__ /* .AxiosError */.d7)
              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(e.response?.data.error);
            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('Something went wrong ');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, setUser, user],
      );
      const registerUser = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (credentials) => {
          try {
            setIsLoading(true);
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .post('signup_api', credentials);
            if (data.error) {
              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(data.error);
              return;
            }
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Your account has been successfully created');
            router.replace(_constants__WEBPACK_IMPORTED_MODULE_6__ /* .PATHS */.yy.LOGIN);
          } catch (e) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('Something went wrong');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, router],
      );
      const resetPassword = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (payload) => {
          try {
            setIsLoading(true);
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .post('api/user/reset_password_email', payload);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(data.message);
            router.push(_constants__WEBPACK_IMPORTED_MODULE_6__ /* .PATHS */.yy.CONFIRMPASSWORD);
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__ /* .AxiosError */.d7)
              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(e.response?.data.error);
            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('Something went wrong ');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, router],
      );
      const confirmPassword = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (payload) => {
          try {
            setIsLoading(true);
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .post('api/user/reset_token_confirm', payload);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(data.message);
            router.push(_constants__WEBPACK_IMPORTED_MODULE_6__ /* .PATHS */.yy.LOGIN);
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__ /* .AxiosError */.d7)
              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(e.response?.data.error);
            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('Something went wrong ');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, router],
      );
      const logoutUser = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setUser({
          user: undefined,
          isAuthenticated: false,
        });
        deleteChats();
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Logout Successful.');
        router.replace(_constants__WEBPACK_IMPORTED_MODULE_6__ /* .PATHS */.yy.LOGIN);
      }, [setUser, router, deleteChats]);
      return {
        loginUser,
        logoutUser,
        isLoading,
        registerUser,
        isAuthenticated,
        user,
        updateUser,
        resetPassword,
        confirmPassword,
      };
    };

    /***/
  },

  /***/ 62073: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ L: () => /* binding */ useChatBot,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34751);
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64722);
    /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52122);
    /* harmony import */ var _state_loading_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90634);
    /* harmony import */ var _state_chats_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81178);
    /* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14088);
    /* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25861);
    /* __next_internal_client_entry_do_not_use__ useChatBot auto */

    const useChatBot = () => {
      const { isLoading, setIsLoading } = (0, _state_loading_hooks__WEBPACK_IMPORTED_MODULE_3__ /* .useLoading */.r)();
      const {
        chats,
        userPrompt,
        setUserPrompt,
        setChats,
        resetUserPrompt,
        updateChat,
        recentChatHistory,
        startNewChat,
        openPreviousChats,
        activeChatID,
        setActiveChatID,
        setChatHistory,
        setRecentChatHistory,
      } = (0, _state_chats_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useChats */.P)();
      const { user } = (0, _state_user_hooks__WEBPACK_IMPORTED_MODULE_6__ /* .useUser */.a)();
      const fetchRecentChats = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        try {
          const { data } = await _config__WEBPACK_IMPORTED_MODULE_2__ /* .api */.h
            .get('api/chat/');
          const recentchatHistory = (0, _lib__WEBPACK_IMPORTED_MODULE_5__ /* .createRecentChatHistory */.Cf)(data.data);
          const groupedMessages = (0, _lib__WEBPACK_IMPORTED_MODULE_5__ /* .groupMessagesByDate */.py)(
            recentchatHistory,
          );
          if (groupedMessages) setRecentChatHistory(groupedMessages);
        } catch (e) {
          // console.log('e :>> ', e);
        }
      }, [setRecentChatHistory]);
      const fetchChatHistory = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        try {
          const { data } = await _config__WEBPACK_IMPORTED_MODULE_2__ /* .api */.h
            .get('api/history/');
          const chatHistoryTableData = (0, _lib__WEBPACK_IMPORTED_MODULE_5__ /* .createHistoryTableData */.ef)(
            data.data,
          );
          setChatHistory(chatHistoryTableData);
        } catch (e) {
          // console.log('e :>> ', e);
        }
      }, [setChatHistory]);
      const fetchNewChatID = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (chatName) => {
          try {
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_2__ /* .api */.h
              .post('api/chat/', {
                name: chatName,
              });
            if (data.data.id) setActiveChatID(data.data.id);
            return data.data.id;
          } catch (e) {
            // console.log('e :>> ', e);
            return e;
          }
        },
        [setActiveChatID],
      );
      const fetchBotResponse = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        try {
          const userMessage = (0, _lib__WEBPACK_IMPORTED_MODULE_5__ /* .createChat */.P4)({
            isBotResponse: false,
            isLoading: false,
            text: userPrompt.data,
            images: [],
          });
          const botResponseLoading = (0, _lib__WEBPACK_IMPORTED_MODULE_5__ /* .createChat */.P4)({
            isBotResponse: true,
            isLoading: true,
            text: '',
            images: [],
          });
          setChats(userMessage);
          setChats(botResponseLoading);
          setIsLoading(true);
          resetUserPrompt();
          let chatID = activeChatID;
          if (user && !chatID) chatID = await fetchNewChatID(userPrompt.data);
          const payload = user
            ? {
                ...userPrompt,
                chat_id: chatID,
              }
            : userPrompt;
          const { data } = await _config__WEBPACK_IMPORTED_MODULE_2__ /* .api */.h
            .post('get-answer-images', payload);
          let images = [];
          let text = '';
          // @ts-ignore
          if (data.images) images = data.images.map(({ url }) => url);
          if (data.response) text = data.response;
          updateChat({
            ...botResponseLoading,
            isLoading: false,
            content: {
              text,
              images,
            },
          });
          if (user) {
            fetchRecentChats();
            fetchChatHistory();
          }
        } catch (e) {
          if (e instanceof axios__WEBPACK_IMPORTED_MODULE_7__ /* .AxiosError */.d7)
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(e.response?.data.error);
          else react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Something went wrong');
        } finally {
          setIsLoading(false);
        }
      }, [
        setIsLoading,
        userPrompt,
        setChats,
        resetUserPrompt,
        updateChat,
        user,
        activeChatID,
        fetchNewChatID,
        fetchChatHistory,
        fetchRecentChats,
      ]);
      return {
        fetchBotResponse,
        isLoading,
        chats,
        userPrompt,
        setUserPrompt,
        recentChatHistory,
        startNewChat,
        openPreviousChats,
        fetchChatHistory,
        fetchRecentChats,
      };
    };

    /***/
  },

  /***/ 95951: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ O: () => /* binding */ useOutsideClick,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* __next_internal_client_entry_do_not_use__ useOutsideClick auto */
    const useOutsideClick = (ref, callback) => {
      const handleClickOutside = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        (event) => {
          if (ref && ref.current && !ref.current.contains(event.target)) {
            callback();
          }
        },
        [callback, ref],
      );
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [handleClickOutside]);
    };

    /***/
  },

  /***/ 6889: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ i: () => /* binding */ useWindowSize,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* __next_internal_client_entry_do_not_use__ useWindowSize auto */
    function useWindowSize() {
      const [windowSize, setWindowSize] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: 0,
        height: 0,
      });
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return {
        width: windowSize.width,
        height: windowSize.height,
      };
    }

    /***/
  },

  /***/ 73606: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Fx: () => /* binding */ saveUserInfoInCookies,
      /* harmony export */ KV: () => /* binding */ deleteUserInfoFromCookies,
      /* harmony export */ dT: () => /* binding */ getUserInfoFromCookies,
      /* harmony export */
    });
    /* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72479);
    /* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11923);

    const getUserInfoFromCookies = () => {
      const result = js_cookie__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z.get(
        types__WEBPACK_IMPORTED_MODULE_1__ /* .COOKIES */.E9.USER,
      );
      if (result) {
        const user = JSON.parse(result);
        return user;
      }
      return null;
    };
    const saveUserInfoInCookies = (user) => {
      const data = JSON.stringify(user);
      const token = user.key;
      js_cookie__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z.set(
        types__WEBPACK_IMPORTED_MODULE_1__ /* .COOKIES */.E9.TOKEN,
        token,
      );
      js_cookie__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z.set(
        types__WEBPACK_IMPORTED_MODULE_1__ /* .COOKIES */.E9.USER,
        data,
      );
    };
    const deleteUserInfoFromCookies = () => {
      js_cookie__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z.remove(
        types__WEBPACK_IMPORTED_MODULE_1__ /* .COOKIES */.E9.USER,
      );
      js_cookie__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z.remove(
        types__WEBPACK_IMPORTED_MODULE_1__ /* .COOKIES */.E9.TOKEN,
      );
    };

    /***/
  },

  /***/ 14088: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Cf: () => /* binding */ createRecentChatHistory,
      /* harmony export */ El: () => /* binding */ generateAvatar,
      /* harmony export */ O5: () => /* binding */ createRewardsState,
      /* harmony export */ P4: () => /* binding */ createChat,
      /* harmony export */ Xe: () => /* binding */ createScreenData,
      /* harmony export */ Yn: () => /* binding */ createTableColumns,
      /* harmony export */ Z4: () => /* binding */ createPayload,
      /* harmony export */ ef: () => /* binding */ createHistoryTableData,
      /* harmony export */ kC: () => /* binding */ capitalize,
      /* harmony export */ py: () => /* binding */ groupMessagesByDate,
      /* harmony export */ uR: () => /* binding */ createTableData,
      /* harmony export */
    });
    /* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83689);
    /* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      dayjs__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80311);
    /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11923);
    /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70880);
    /* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */

    const addToGroup = (categorizedMessagesMap, groupName, message) => {
      if (!categorizedMessagesMap[groupName]) {
        categorizedMessagesMap[groupName] = [];
      }
      categorizedMessagesMap[groupName].push(message);
    };
    const groupMessagesByDate = (messages) => {
      if (messages.length === 0) return;
      const CategorizedMessagesMap = {};
      const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
      //* sort the messages in array
      const sortedMessages = messages.sort((a, b) => {
        const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.date);
        const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.date);
        return dateB.diff(dateA);
      });
      //* group the sorted messages
      sortedMessages.forEach((msg) => {
        const daysDiffernce = today.diff(msg.date, 'day');
        if (daysDiffernce === 0) {
          addToGroup(CategorizedMessagesMap, 'Today', msg);
          return;
        }
        if (daysDiffernce === 1) {
          addToGroup(CategorizedMessagesMap, 'Yesterday', msg);
          return;
        }
        if (daysDiffernce <= 7) {
          addToGroup(CategorizedMessagesMap, 'Last 7 days', msg);
          return;
        }
        if (daysDiffernce <= 30) {
          addToGroup(CategorizedMessagesMap, 'Last 30 days', msg);
        } else {
          const month = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(msg.date).format('MMMM');
          addToGroup(CategorizedMessagesMap, month, msg);
        }
      });
      // eslint-disable-next-line consistent-return
      return CategorizedMessagesMap;
    };
    //* capatalize string
    const capitalize = (arg) => {
      const text = arg.split(' ');
      const result = text.map((word) => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');
      return result;
    };
    //* create a payload for personal data post api
    const createPayload = (personal_data) =>
      Object.entries(personal_data).map(([key, value]) => ({
        value: typeof value === 'object' ? `${value}` : value.toString(),
        personal_data_field: {
          field_name: key.toUpperCase(),
        },
      }));
    //* create a single chat
    const createChat = (arg) => {
      const { isBotResponse, isLoading, text } = arg;
      const images = arg.images.map((img) => img.url);
      return {
        messageID: (0, uuid__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z)(),
        isBotResponse,
        isLoading,
        content: {
          text,
          images,
        },
      };
    };
    //* create table data
    const createTableData = (arg) => {
      const { tableName, data } = arg;
      const result = {};
      if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__ /* .TableName */.me.PData) {
        for (const d of data) {
          const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.created_at).format('YYYY-MM-DD HH:mm:ss');
          const fieldName = d.personal_data_field.field_name.toLowerCase();
          const { files } = d;
          result[date] = {
            ...result[date],
            [fieldName]: fieldName === 'photos' && files.length > 0 ? files : d.value,
          };
        }
      }
      if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__ /* .TableName */.me.GData) {
        for (const d of data) {
          const fieldName = capitalize(d.field_name.replaceAll('_', ' '));
          for (const value of d.values) {
            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format('YYYY-MM-DD HH:mm:ss');
            result[fieldName] = {
              ...result[fieldName],
              [date]: value.value,
            };
          }
          result[fieldName] = {
            ...result[fieldName],
            'Consent Value': d.consents_to_sell.toString().toUpperCase(),
            Rewards: d.demanded_reward_value,
          };
        }
      }
      if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__ /* .TableName */.me.RData) {
        for (const d of data) {
          const fieldName = capitalize(d.field_name.replaceAll('_', ' '));
          result[fieldName] = {
            ...result[fieldName],
            Consent: d.consents_to_sell.toString().toUpperCase(),
            PDefinedValue: d.demanded_reward_value,
            OtherCompValue: '0.0',
            id: d.id,
          };
        }
      }
      if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__ /* .TableName */.me.CData) {
        for (const d of data) {
          const fieldName = capitalize(d.field_name.replaceAll('_', ' '));
          result[fieldName] = {
            ...result[fieldName],
            Consent: d.consents_to_sell.toString().toUpperCase(),
            Definition:
              _constants__WEBPACK_IMPORTED_MODULE_2__ /* .DESCRIPTIONOFVARIABLES */.JT[d.field_name.toLowerCase()],
            Companies: '',
            Use: '',
            id: d.id,
          };
        }
      }
      return result;
    };
    // * create Columns for My G-Data
    const createTableColumns = (data) => {
      let result = [];
      let index = 0;
      //* find index so that map will be run that many amount of time
      for (const d of data) {
        const values = d.values.length;
        if (values > data[index].values.length) {
          index = data.indexOf(d);
        }
      }
      const columns = data[index].values.map((item) =>
        dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format('YYYY-MM-DD HH:mm:ss'),
      );
      result = ['Consent', ...columns, 'Consent Value', 'Rewards'];
      const tableColumns = result.map((col) => ({
        Header: col,
        accessor: col,
      }));
      return tableColumns;
    };
    //* rewards table
    const createRewardsState = (data) => {
      const result = {};
      for (const d of data) {
        result[d.id] = {
          consents_to_sell: d.Consent === 'TRUE',
          demanded_reward_value: Number(d.PDefinedValue),
        };
      }
      return result;
    };
    //* create history table data
    const createHistoryTableData = (data) => {
      const result = data.map((chat) => {
        const { answer, images, chat_id, choice, question, timestamp } = chat;
        return {
          answer,
          chatID: chat_id,
          choice,
          question,
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format('YYYY-MM-DD'),
          images: images != null ? JSON.parse(images.replace(/'/g, '"')) : [],
        };
      });
      return result;
    };
    //* create screen data
    const createScreenData = (arg) =>
      arg.map((screenData) => {
        const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;
        return {
          id,
          screenRecording: screen_recording_url,
          cameraRecording: camera_recording_url ?? '',
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format('YYYY-MM-DD'),
          detail: data,
        };
      });
    //* create default avatar image
    const generateAvatar = (firstName) => {
      const initial = firstName[0].toUpperCase();
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 100;
      canvas.height = 100;
      if (context) {
        // Draw background
        context.fillStyle = '#F3511C';
        context.fillRect(0, 0, canvas.width, canvas.height);
        // Draw text
        context.font = 'bold 50px DM-Sans';
        context.fillStyle = '#ffffff';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(initial, canvas.width / 2, canvas.height / 2);
      }
      return canvas.toDataURL('image/png');
    };
    const createRecentChatHistory = (payload) =>
      payload.map((chats) => {
        const messages = [];
        for (const chat of chats.history) {
          const response = createChat({
            text: chat.answer,
            images:
              chat.images != null
                ? JSON.parse(chat.images.replace(/'/g, '"')).map((img) => ({
                    url: img,
                  }))
                : [],
            isBotResponse: true,
            isLoading: false,
          });
          const question = createChat({
            text: chat.question,
            images: [],
            isBotResponse: false,
            isLoading: false,
          });
          messages.push(question);
          messages.push(response);
        }
        return {
          title: chats.name,
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format('YYYY-MM-DD'),
          id: chats.id,
          messages,
        };
      });

    /***/
  },

  /***/ 81178: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ P: () => /* binding */ useChats,
      /* harmony export */
    });
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55867);
    /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39516);
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74259);

    const useChats = () => {
      const { chats, userPrompt, chatHistory, recentChatHistory, activeChatID } = (0,
      react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state) => state.chats);
      const dispatch = (0, state_store__WEBPACK_IMPORTED_MODULE_2__ /* .useAppDispatch */.TL)();
      const setChats = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setChatsAction */.hH)(payload));
        },
        [dispatch],
      );
      const deleteChats = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .deleteChatsActions */.Zp)());
      }, [dispatch]);
      const updateChat = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .updateChatAction */.IM)(payload));
        },
        [dispatch],
      );
      const setUserPrompt = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setUserPromptAction */.vV)(payload));
        },
        [dispatch],
      );
      const resetUserPrompt = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        dispatch(
          (0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setUserPromptAction */.vV)({
            data: '',
            choice: _types__WEBPACK_IMPORTED_MODULE_3__ /* .ResponseChoice */.D.TEXT,
          }),
        );
      }, [dispatch]);
      const setChatHistory = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setChatHistoryAction */._1)(payload));
        },
        [dispatch],
      );
      const setRecentChatHistory = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setRecentChatHistoryAction */.cM)(payload));
        },
        [dispatch],
      );
      const startNewChat = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .startNewChatAction */.vO)());
      }, [dispatch]);
      const setActiveChatID = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setActiveChatIdAction */.TK)(payload));
        },
        [dispatch],
      );
      const openPreviousChats = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          setActiveChatID(payload.id);
          if (payload.messages.length > 0)
            dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .openPreviousChatsAction */.NI)(payload.messages));
        },
        [dispatch, setActiveChatID],
      );
      return {
        chats,
        userPrompt,
        chatHistory,
        recentChatHistory,
        activeChatID,
        resetUserPrompt,
        updateChat,
        setUserPrompt,
        setChatHistory,
        setChats,
        deleteChats,
        startNewChat,
        setRecentChatHistory,
        openPreviousChats,
        setActiveChatID,
      };
    };

    /***/
  },

  /***/ 74259: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ IM: () => /* binding */ updateChatAction,
      /* harmony export */ NI: () => /* binding */ openPreviousChatsAction,
      /* harmony export */ TK: () => /* binding */ setActiveChatIdAction,
      /* harmony export */ ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */ Zp: () => /* binding */ deleteChatsActions,
      /* harmony export */ _1: () => /* binding */ setChatHistoryAction,
      /* harmony export */ cM: () => /* binding */ setRecentChatHistoryAction,
      /* harmony export */ hH: () => /* binding */ setChatsAction,
      /* harmony export */ vO: () => /* binding */ startNewChatAction,
      /* harmony export */ vV: () => /* binding */ setUserPromptAction,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39516);

    const initialState = {
      chats: [],
      chatHistory: [],
      recentChatHistory: {},
      activeChatID: undefined,
      userPrompt: {
        data: '',
        choice: _types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.TEXT,
      },
    };
    const chatSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
      name: 'chats',
      initialState,
      reducers: {
        setChatsAction: (state, action) => ({
          ...state,
          chats: [...state.chats, action.payload],
        }),
        updateChatAction: (state, action) => ({
          ...state,
          chats: state.chats.map((chat) => {
            if (chat.messageID === action.payload.messageID) {
              return action.payload;
            }
            return chat;
          }),
        }),
        setUserPromptAction: (state, action) => ({
          ...state,
          userPrompt: action.payload,
        }),
        setChatHistoryAction: (state, action) => ({
          ...state,
          chatHistory: action.payload,
        }),
        deleteChatsActions: (state) => ({
          ...state,
          chats: [],
        }),
        setRecentChatHistoryAction: (state, action) => ({
          ...state,
          recentChatHistory: action.payload,
        }),
        startNewChatAction: (state) => ({
          ...state,
          chats: [],
        }),
        openPreviousChatsAction: (state, action) => ({
          ...state,
          chats: action.payload,
        }),
        setActiveChatIdAction: (state, action) => ({
          ...state,
          activeChatID: action.payload,
        }),
      },
    });
    const {
      setChatsAction,
      setUserPromptAction,
      updateChatAction,
      setChatHistoryAction,
      deleteChatsActions,
      setRecentChatHistoryAction,
      startNewChatAction,
      openPreviousChatsAction,
      setActiveChatIdAction,
    } = chatSlice.actions;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = chatSlice.reducer;

    /***/
  },

  /***/ 39516: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ D: () => /* binding */ ResponseChoice,
      /* harmony export */
    });
    var ResponseChoice;
    (function (ResponseChoice) {
      ResponseChoice['BOTH'] = 'both';
      ResponseChoice['TEXT'] = 'answer';
      ResponseChoice['IMAGES'] = 'images';
    })(ResponseChoice || (ResponseChoice = {}));

    /***/
  },

  /***/ 90634: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ r: () => /* binding */ useLoading,
      /* harmony export */
    });
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55867);
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60818);

    const useLoading = () => {
      const { isLoading } = (0, react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state) => state.loading);
      const dispatch = (0, state_store__WEBPACK_IMPORTED_MODULE_2__ /* .useAppDispatch */.TL)();
      const setIsLoading = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setIsLoadingStateAction */.d)(payload));
        },
        [dispatch],
      );
      return {
        isLoading,
        setIsLoading,
      };
    };

    /***/
  },

  /***/ 60818: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */ d: () => /* binding */ setIsLoadingStateAction,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

    const initialState = {
      isLoading: false,
    };
    const loadingSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
      name: 'loading',
      initialState,
      reducers: {
        setIsLoadingStateAction: (state, action) => ({
          ...state,
          isLoading: action.payload,
        }),
      },
    });
    const { setIsLoadingStateAction } = loadingSlice.actions;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = loadingSlice.reducer;

    /***/
  },

  /***/ 70918: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ h: () => /* binding */ usePersonalData,
      /* harmony export */
    });
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55867);
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42257);

    const usePersonalData = () => {
      const { personalData, gData, rData, cData, screenData } = (0,
      react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state) => state.my_g_data);
      const dispatch = (0, state_store__WEBPACK_IMPORTED_MODULE_2__ /* .useAppDispatch */.TL)();
      const setPersonalData = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setPersonalDataAction */.O$)(payload));
        },
        [dispatch],
      );
      const setGData = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setGDataAction */.Pn)(payload));
        },
        [dispatch],
      );
      const setRData = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setRDataAction */.Jg)(payload));
        },
        [dispatch],
      );
      const setCData = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setCDataAction */.py)(payload));
        },
        [dispatch],
      );
      const setScreenData = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setScreenDataAction */.Y4)(payload));
        },
        [dispatch],
      );
      return {
        setPersonalData,
        setGData,
        setRData,
        setCData,
        setScreenData,
        screenData,
        cData,
        rData,
        personalData,
        gData,
      };
    };

    /***/
  },

  /***/ 42257: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Jg: () => /* binding */ setRDataAction,
      /* harmony export */ O$: () => /* binding */ setPersonalDataAction,
      /* harmony export */ Pn: () => /* binding */ setGDataAction,
      /* harmony export */ Y4: () => /* binding */ setScreenDataAction,
      /* harmony export */ ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */ py: () => /* binding */ setCDataAction,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

    const initialState = {
      personalData: {},
      gData: {},
      rData: {},
      cData: {},
      screenData: [],
    };
    const personalDataSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
      name: 'my_g_data',
      initialState,
      reducers: {
        setPersonalDataAction: (state, action) => ({
          ...state,
          personalData: {
            ...state.personalData,
            ...action.payload,
          },
        }),
        setGDataAction: (state, action) => ({
          ...state,
          gData: action.payload,
        }),
        setRDataAction: (state, action) => ({
          ...state,
          rData: action.payload,
        }),
        setCDataAction: (state, action) => ({
          ...state,
          cData: action.payload,
        }),
        setScreenDataAction: (state, action) => ({
          ...state,
          screenData: action.payload,
        }),
      },
    });
    const { setPersonalDataAction, setGDataAction, setRDataAction, setCDataAction, setScreenDataAction } =
      personalDataSlice.actions;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = personalDataSlice.reducer;

    /***/
  },

  /***/ 2934: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ H: () => /* binding */ setIsOpenAction,
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

    const initialState = {
      isOpen: false,
    };
    const sidebarSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
      name: 'sidebar',
      initialState,
      reducers: {
        setIsOpenAction: (state, action) => ({
          isOpen: action.payload,
        }),
      },
    });
    const { setIsOpenAction } = sidebarSlice.actions;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = sidebarSlice.reducer;

    /***/
  },

  /***/ 55867: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ TL: () => /* binding */ useAppDispatch,
      /* harmony export */ ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export persistor */
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22502);
    /* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      redux_persist__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21890);
    /* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66001);
    /* harmony import */ var _state_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30144);
    /* harmony import */ var _state_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60818);
    /* harmony import */ var _state_myGData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42257);
    /* harmony import */ var _state_chats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74259);
    /* harmony import */ var _state_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2934);
    /* harmony import */ var _state_weather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74606);

    //

    const rootReducer = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.combineReducers)({
      user: _state_user__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
      loading: _state_loading__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
      my_g_data: _state_myGData__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.ZP,
      chats: _state_chats__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.ZP,
      sidebar: _state_sidebar__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
      weather: _state_weather__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
    });
    const persistConfig = {
      key: 'root',
      storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
      blacklist: ['loading', 'user', 'chats', 'my_g_data'],
    };
    const persistedReducer = (0, redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, rootReducer);
    const store = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.configureStore)({
      reducer: persistedReducer,
      middleware: [redux_thunk__WEBPACK_IMPORTED_MODULE_10__['default']],
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = store;
    const persistor = (0, redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);
    const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;

    /***/
  },

  /***/ 25861: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ a: () => /* binding */ useUser,
      /* harmony export */
    });
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55867);
    /* harmony import */ var _lib_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73606);
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30144);

    const useUser = () => {
      const { isAuthenticated, user } = (0, react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(
        (state) => state.user,
      );
      const dispatch = (0, state_store__WEBPACK_IMPORTED_MODULE_2__ /* .useAppDispatch */.TL)();
      const setUser = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_4__ /* .setUserAction */.K)(payload));
          if (payload.user)
            (0, _lib_cookies__WEBPACK_IMPORTED_MODULE_3__ /* .saveUserInfoInCookies */.Fx)(payload.user);
          else (0, _lib_cookies__WEBPACK_IMPORTED_MODULE_3__ /* .deleteUserInfoFromCookies */.KV)();
        },
        [dispatch],
      );
      (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const userInfo = (0, _lib_cookies__WEBPACK_IMPORTED_MODULE_3__ /* .getUserInfoFromCookies */.dT)();
        if (userInfo && !user)
          setUser({
            user: userInfo,
            isAuthenticated: true,
          });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return {
        isAuthenticated,
        user,
        setUser,
      };
    };

    /***/
  },

  /***/ 30144: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ K: () => /* binding */ setUserAction,
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

    const initialState = {
      isAuthenticated: false,
      user: undefined,
    };
    const userSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
      name: 'user',
      initialState,
      reducers: {
        setUserAction: (state, action) => ({
          ...state,
          ...action.payload,
        }),
      },
    });
    const { setUserAction } = userSlice.actions;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = userSlice.reducer;

    /***/
  },

  /***/ 6058: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ I: () => /* binding */ useWeatherState,
      /* harmony export */
    });
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_redux__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__,
    );
    /* harmony import */ var state_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55867);
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74606);

    const useWeatherState = () => {
      const { weather } = (0, react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state) => state.weather);
      const dispatch = (0, state_store__WEBPACK_IMPORTED_MODULE_2__ /* .useAppDispatch */.TL)();
      const setWeather = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setWeatherAction */._)(payload));
        },
        [dispatch],
      );
      return {
        weather,
        setWeather,
      };
    };

    /***/
  },

  /***/ 74606: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */ _: () => /* binding */ setWeatherAction,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

    const initialState = {
      weather: undefined,
    };
    const weatherSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
      name: 'weather',
      initialState,
      reducers: {
        setWeatherAction: (state, action) => ({
          ...state,
          weather: action.payload,
        }),
      },
    });
    const { setWeatherAction } = weatherSlice.actions;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = weatherSlice.reducer;

    /***/
  },

  /***/ 11923: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ E9: () => /* binding */ COOKIES,
      /* harmony export */ Q2: () => /* binding */ Theme,
      /* harmony export */ me: () => /* binding */ TableName,
      /* harmony export */
    });
    var Theme;
    (function (Theme) {
      Theme['DARK'] = 'dark';
      Theme['LIGHT'] = 'light';
    })(Theme || (Theme = {}));
    var COOKIES;
    (function (COOKIES) {
      COOKIES['USER'] = 'user';
      COOKIES['TOKEN'] = 'token_datalabs';
    })(COOKIES || (COOKIES = {}));
    var TableName;
    (function (TableName) {
      TableName['PData'] = 'Personal Data';
      TableName['GData'] = 'My G-Data';
      TableName['RData'] = 'Rewards Data';
      TableName['CData'] = 'Consent Data';
    })(TableName || (TableName = {}));

    /***/
  },

  /***/ 6182: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: () => /* binding */ RootLayout,
      metadata: () => /* binding */ metadata,
    });

    // EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(56786);
    // EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
    var react_shared_subset = __webpack_require__(62947);
    // EXTERNAL MODULE: ./styles/globals.css
    var globals = __webpack_require__(7633);
    // EXTERNAL MODULE: ./node_modules/react-loading-skeleton/dist/skeleton.css
    var skeleton = __webpack_require__(78861);
    // EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"public/assets/fonts/index.ts","import":"DM_Sans","arguments":[{"subsets":["latin"],"variable":"--font-dm-sans","display":"swap"}],"variableName":"DMSANS"}
    var index_ts_import_DM_Sans_arguments_subsets_latin_variable_font_dm_sans_display_swap_variableName_DMSANS_ =
      __webpack_require__(16398);
    var index_ts_import_DM_Sans_arguments_subsets_latin_variable_font_dm_sans_display_swap_variableName_DMSANS_default =
      /*#__PURE__*/ __webpack_require__.n(
        index_ts_import_DM_Sans_arguments_subsets_latin_variable_font_dm_sans_display_swap_variableName_DMSANS_,
      );
    // EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"public/assets/fonts/index.ts","import":"Raleway","arguments":[{"subsets":["latin"],"variable":"--font-raleway","display":"swap"}],"variableName":"RALEWAY"}
    var index_ts_import_Raleway_arguments_subsets_latin_variable_font_raleway_display_swap_variableName_RALEWAY_ =
      __webpack_require__(34497);
    var index_ts_import_Raleway_arguments_subsets_latin_variable_font_raleway_display_swap_variableName_RALEWAY_default =
      /*#__PURE__*/ __webpack_require__.n(
        index_ts_import_Raleway_arguments_subsets_latin_variable_font_raleway_display_swap_variableName_RALEWAY_,
      );
    // EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
    var module_proxy = __webpack_require__(61363); // CONCATENATED MODULE: ./components/UI/Layout/index.tsx
    const proxy = (0, module_proxy.createProxy)(
      String.raw`/Users/muhammadharis/Desktop/G-DataLabs/components/UI/Layout/index.tsx`,
    );

    // Accessing the __esModule property and exporting $$typeof are required here.
    // The __esModule getter forces the proxy target to create the default export
    // and the $$typeof value is for rendering logic to determine if the module
    // is a client boundary.
    const { __esModule, $$typeof } = proxy;
    const __default__ = proxy.default;

    /* harmony default export */ const Layout = __default__;
    // EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
    var react_toastify_esm = __webpack_require__(91569);
    // EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
    var ReactToastify = __webpack_require__(97001); // CONCATENATED MODULE: ./components/UI/Notification/index.tsx
    function Toast() {
      return /*#__PURE__*/ jsx_runtime_.jsx(react_toastify_esm /* ToastContainer */.Ix, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: true,
        transition: react_toastify_esm /* Bounce */.sm,
        theme: 'colored',
      });
    }
    /* harmony default export */ const Notification = Toast; // CONCATENATED MODULE: ./app/provider.tsx

    const provider_proxy = (0, module_proxy.createProxy)(
      String.raw`/Users/muhammadharis/Desktop/G-DataLabs/app/provider.tsx`,
    );

    // Accessing the __esModule property and exporting $$typeof are required here.
    // The __esModule getter forces the proxy target to create the default export
    // and the $$typeof value is for rendering logic to determine if the module
    // is a client boundary.
    const { __esModule: provider_esModule, $$typeof: provider_$$typeof } = provider_proxy;
    const provider_default_ = provider_proxy.default;

    /* harmony default export */ const provider = provider_default_; // CONCATENATED MODULE: ./app/layout.tsx
    const metadata = {
      title: 'G-DataLabs',
      description: 'Unlocking Possibilities: The AI Tool for Seamless Innovation',
    };
    function RootLayout({ children }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('html', {
        lang: 'en',
        className: [
          index_ts_import_DM_Sans_arguments_subsets_latin_variable_font_dm_sans_display_swap_variableName_DMSANS_default()
            .variable,
          index_ts_import_Raleway_arguments_subsets_latin_variable_font_raleway_display_swap_variableName_RALEWAY_default()
            .variable,
        ].join(' '),
        children: /*#__PURE__*/ jsx_runtime_.jsx('body', {
          className: 'bg-main dark:bg-darkMain',
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(provider, {
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(Notification, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: children,
              }),
            ],
          }),
        }),
      });
    }

    /***/
  },

  /***/ 96330: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ Loading,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
    /* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39081);
    /* harmony import */ var _components_UI_Containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44060);

    function Loading() {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              _components_UI_Containers__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
              {
                type: 'main',
                className: 'px-10 pt-10',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP,
                  {
                    width: '90%',
                    height: 80,
                    borderRadius: 6,
                    baseColor: '#D9D9D9',
                    count: 4,
                    className: 'mb-4',
                  },
                ),
              },
            ),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _components_UI_Containers__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
              {
                type: 'side',
                className: 'px-10 pt-10',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP,
                    {
                      width: 150,
                      className: 'my-10',
                    },
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP,
                    {
                      width: 100,
                    },
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP,
                    {
                      width: '90%',
                      height: 80,
                      borderRadius: 6,
                      baseColor: '#D9D9D9',
                      count: 6,
                      className: 'my-4',
                    },
                  ),
                ],
              },
            ),
          ],
        },
      );
    }

    /***/
  },

  /***/ 44060: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Containers,
    });

    // EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(56786);
    // EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
    var react_shared_subset = __webpack_require__(62947); // CONCATENATED MODULE: ./components/UI/Containers/Main/index.tsx
    function Main({ children, className = ' ', style }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('div', {
        className: [
          'bg-light drop-shadow-container h-[calc(100vh_-_2.5rem)] w-full flex-1 rounded-l-lg relative overflow-hidden',
          className,
        ].join(' '),
        style: style,
        children: children,
      });
    }
    /* harmony default export */ const Containers_Main = Main;

    // EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
    var module_proxy = __webpack_require__(61363); // CONCATENATED MODULE: ./components/UI/Containers/Side/index.tsx
    const proxy = (0, module_proxy.createProxy)(
      String.raw`/Users/muhammadharis/Desktop/G-DataLabs/components/UI/Containers/Side/index.tsx`,
    );

    // Accessing the __esModule property and exporting $$typeof are required here.
    // The __esModule getter forces the proxy target to create the default export
    // and the $$typeof value is for rendering logic to determine if the module
    // is a client boundary.
    const { __esModule, $$typeof } = proxy;
    const __default__ = proxy.default;

    /* harmony default export */ const Side = __default__; // CONCATENATED MODULE: ./components/UI/Containers/index.tsx
    function Container({ children, type, className = '', style }) {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          type === 'main' &&
            /*#__PURE__*/ jsx_runtime_.jsx(Containers_Main, {
              className: `${className} dark:bg-main`,
              style: style,
              children: children,
            }),
          type === 'side' &&
            /*#__PURE__*/ jsx_runtime_.jsx(Side, {
              className: `${className} dark:bg-main`,
              children: children,
            }),
        ],
      });
    }
    /* harmony default export */ const Containers = Container;

    /***/
  },

  /***/ 4081: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
      src: '/_next/static/media/logo.0e5f45b2.svg',
      height: 72,
      width: 72,
      blurWidth: 0,
      blurHeight: 0,
    };

    /***/
  },

  /***/ 7633: /***/ () => {
    /***/
  },
};
