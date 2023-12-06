exports.id = 253;
exports.ids = [253];
exports.modules = {
  /***/ 69055: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92709));
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34751));
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89311));

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
    /* harmony import */ var _public_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83726);
    /* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95951);
    /* harmony import */ var components_UI_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17223);
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
                  components_UI_IconButton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                  {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => setIsOpen(!isOpen),
                    type: 'button',
                    src: _public_assets__WEBPACK_IMPORTED_MODULE_3__ /* .sidebar_dark */.tp,
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
                    components_UI_IconButton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                    {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => setIsOpen(!isOpen),
                      type: 'button',
                      src: _public_assets__WEBPACK_IMPORTED_MODULE_3__ /* .sidebar_dark */.tp,
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

    function IconButton({ onClick, type = 'button', isLoading = false, src, className = '', disabled }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('button', {
        className: ['disabled:cursor-not-allowed', className].join(' '),
        onClick: onClick,
        type: type,
        disabled: isLoading || disabled,
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
                className: 'h-full w-full',
              },
            ),
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = IconButton;

    /***/
  },

  /***/ 89311: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    // EXTERNAL MODULE: ./constants/navigation.ts
    var constants_navigation = __webpack_require__(15615); // CONCATENATED MODULE: ./components/UI/Layout/NoSidebar/index.tsx
    function NoSidebarLayout({ children }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('div', {
        className: 'h-screen w-screen',
        children: children,
      });
    }
    /* harmony default export */ const NoSidebar = NoSidebarLayout;

    // EXTERNAL MODULE: ./constants/auth.ts
    var auth = __webpack_require__(86835);
    // EXTERNAL MODULE: ./public/assets/index.ts + 32 modules
    var assets = __webpack_require__(83726); // CONCATENATED MODULE: ./constants/sidebar.ts
    const SIDEBARLINKSCOLORS = {
      DARK: ['#907CB4', '#F5B11A', '#A1BF8C', '#046C98', '#EA6D24'],
      LIGHT: ['#EE3E2E', '#3B7BBE', '#EFDCB1', '#DDAF40', '#E9CB84'],
    };
    const AUTHITEMS = [
      {
        title: 'Home',
        icon: assets /* home */.LE,
        to: constants_navigation /* PATHS */.y.HOME,
      },
      {
        title: 'Login',
        icon: assets /* logout */.kS,
        to: constants_navigation /* PATHS */.y.LOGIN,
      },
      {
        title: 'Register',
        icon: assets /* account */.JT,
        to: constants_navigation /* PATHS */.y.SIGNUP,
      },
    ];
    const APPITEMS = [
      {
        title: 'Home',
        icon: assets /* home */.LE,
        to: constants_navigation /* PATHS */.y.HOME,
        icon_dark: assets /* home_dark */.kP,
      },
      {
        title: 'History',
        icon: assets /* history */.m8,
        to: constants_navigation /* PATHS */.y.HISTORY,
        icon_dark: assets /* history_dark */.nm,
      },
      {
        title: 'My G-Data',
        icon: assets /* logo */.jY,
        icon_dark: assets /* logo_dark */.J2,
        to: constants_navigation /* PATHS */.y.MYGDATA,
        nestedItems: [
          {
            title: 'Personal Data',
            icon: '',
            to: constants_navigation /* PATHS */.y.PERSONAL,
          },
          {
            title: 'Consent',
            icon: '',
            to: constants_navigation /* PATHS */.y.CONSENT,
          },
          {
            title: 'Rewards',
            icon: '',
            to: constants_navigation /* PATHS */.y.REWARDS,
          },
          {
            title: 'Screen Data',
            icon: '',
            to: constants_navigation /* PATHS */.y.SCREEN,
          },
        ],
      },
      {
        title: 'Our G-Data',
        icon: assets /* logo */.jY,
        icon_dark: assets /* logo_dark */.J2,
        to: constants_navigation /* PATHS */.y.OURGDATA,
      },
      {
        title: 'My Account',
        icon: assets /* account */.JT,
        to: constants_navigation /* PATHS */.y.ACCOUNT,
        icon_dark: assets /* account_dark */.zE,
      },
    ];

    // EXTERNAL MODULE: ./hooks/useWindowSize.ts
    var useWindowSize = __webpack_require__(6889);
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
    // EXTERNAL MODULE: ./context/ThemeProvider.tsx + 1 modules
    var ThemeProvider = __webpack_require__(79323);
    // EXTERNAL MODULE: ./types/index.ts
    var types = __webpack_require__(11923); // CONCATENATED MODULE: ./components/UI/Sidebar/Logo/index.tsx
    /* __next_internal_client_entry_do_not_use__ default auto */

    function Logo() {
      const { theme } = (0, ThemeProvider /* useTheme */.F)();
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(link_default(), {
        href: constants_navigation /* PATHS */.y.HOME,
        className: 'flex flex-row gap-x-3 items-center',
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            className: 'relative w-[50px] h-[50px] laptop:w-[40px] laptop:h-[40px]',
            children: /*#__PURE__*/ jsx_runtime_.jsx(image_default(), {
              src: theme === types /* Theme */.Q2.LIGHT ? assets /* logo */.jY : assets /* logo_dark */.J2,
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
      const { theme } = (0, ThemeProvider /* useTheme */.F)();
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
                      src: theme === types /* Theme */.Q2.DARK && item.icon_dark ? item.icon_dark : item.icon,
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
                    children: item.nestedItems.map((nestedItem, index) =>
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
                                className: `w-[30px] inline-block transition-all duration-200 ${
                                  pathname === nestedItem.to ? 'h-[13px]' : 'h-[6px]'
                                }`,
                                style: {
                                  backgroundColor:
                                    theme === types /* Theme */.Q2.DARK
                                      ? SIDEBARLINKSCOLORS.DARK[index]
                                      : SIDEBARLINKSCOLORS.LIGHT[index],
                                },
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
    /* harmony default export */ const Sidebar_Items = Items; // CONCATENATED MODULE: ./components/UI/Sidebar/Switch/index.tsx

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
      const navItems = (0, react_.useMemo)(() => {
        if (!isAuthenticated || !user) return AUTHITEMS;
        if (user.accountType === auth /* ACCOUNTTYPE */.Z8.COMPANY)
          return APPITEMS.map((item) => {
            if (item.to === constants_navigation /* PATHS */.y.MYGDATA && item.nestedItems) {
              return {
                ...item,
                nestedItems: [
                  ...item.nestedItems,
                  {
                    title: 'Company',
                    icon: '',
                    to: constants_navigation /* PATHS */.y.COMPANY,
                  },
                ],
              };
            }
            return item;
          });
        return APPITEMS;
      }, [isAuthenticated, user]);
      (0, react_.useEffect)(() => {
        setIsOpen(false);
      }, [pathname, setIsOpen]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          width < 1280 &&
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className: 'h-[calc(100vh_-_2.5rem)] bg-main dark:bg-transparent relative w-[50px]',
              children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton /* default */.Z, {
                className: 'absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                onClick: () => setIsOpen(!isOpen),
                type: 'button',
                src: assets /* sidebar */.rc,
              }),
            }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)('aside', {
            ref: containerRef,
            className: `h-[calc(100vh_-_2.5rem)] flex flex-col gap-y-4 max-w-[360px] mobile:max-w-full items-start justify-between overflow-y-auto ${
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
                  className:
                    'z-10 absolute top-3 right-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                  onClick: () => setIsOpen(!isOpen),
                  type: 'button',
                  src: assets /* sidebar */.rc,
                }),
              /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_Items, {
                items: navItems,
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
          pathname === constants_navigation /* PATHS */.y.COOKIEPOLICY ||
          pathname === constants_navigation /* PATHS */.y.PRIVACY ||
          pathname === constants_navigation /* PATHS */.y.TERMS
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
      baseURL: 'https://api.g-datalabs.com/',
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

  /***/ 86835: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ CQ: () => /* binding */ CONFIRMPASSWORDFORMINITIALVALUES,
      /* harmony export */ D$: () => /* binding */ LOGINFORMINITIALVALUES,
      /* harmony export */ E0: () => /* binding */ RESETPASSWORDFORMINITIALVALUES,
      /* harmony export */ Z8: () => /* binding */ ACCOUNTTYPE,
      /* harmony export */ pY: () => /* binding */ ACCOUNTTYPESOPTIONS,
      /* harmony export */ vK: () => /* binding */ SIGNUPFORMINITIALVALUES,
      /* harmony export */
    });
    var ACCOUNTTYPE;
    (function (ACCOUNTTYPE) {
      ACCOUNTTYPE['PERSONAL'] = 'Personal';
      ACCOUNTTYPE['COMPANY'] = 'Company';
    })(ACCOUNTTYPE || (ACCOUNTTYPE = {}));
    const ACCOUNTTYPESOPTIONS = [
      {
        label: ACCOUNTTYPE.PERSONAL,
        value: ACCOUNTTYPE.PERSONAL,
      },
      {
        label: ACCOUNTTYPE.COMPANY,
        value: ACCOUNTTYPE.COMPANY,
      },
    ];
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
      accountType: ACCOUNTTYPESOPTIONS[0].label,
    };

    /***/
  },

  /***/ 96107: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ A: () => /* binding */ COMPANYTABLEDATA,
      /* harmony export */ r: () => /* binding */ COMPANYTABLECOLUMNS,
      /* harmony export */
    });
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70880);

    const COMPANYTABLECOLUMNS = [
      {
        Header: 'Personal Data and Webcam',
        accessor: 'PDataAndWeb',
      },
      {
        Header: 'Definition',
        accessor: 'Definition',
      },
      {
        Header: 'List Of Unit',
        accessor: 'Unit',
      },
      {
        Header: 'Use',
        accessor: 'Use',
      },
      {
        Header: 'Pricing',
        accessor: 'Pricing',
      },
      {
        Header: 'Threshold',
        accessor: 'threshold',
      },
      {
        Header: 'Consent',
        accessor: 'Consent',
      },
      {
        Header: 'Field Name',
        accessor: 'fieldName',
      },
    ];
    const COMPANYTABLEDATA = {
      'EMOTIONAL OVERALL': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_overall.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_overall.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'EMOTIONAL OVERALL',
      },
      WEATHER: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weather.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weather.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'WEATHER',
      },
      'RELATIVE FINANCE STATUS': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.relative_finance_status.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.relative_finance_status.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'RELATIVE FINANCE STATUS',
      },
      'EXERCISE TIME': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.exercise_time.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.exercise_time.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'EXERCISE TIME',
      },
      'ANY SOCIAL LIFE': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.any_social_life.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.any_social_life.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'ANY SOCIAL LIFE',
      },
      'SOCIAL LIFE LIST': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.social_life_list.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.social_life_list.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'SOCIAL LIFE LIST',
      },
      'HEALTH OVERALL': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.health_overall.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.health_overall.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'HEALTH OVERALL',
      },
      WEIGHT: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weight.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weight.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'WEIGHT',
      },
      'FAMILY STATUS': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.family_status.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.family_status.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'FAMILY STATUS',
      },
      'DEVICE SCREEN TIME': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.device_screen_time.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.device_screen_time.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'DEVICE SCREEN TIME',
      },
      'WORK LIFE BALANCE': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.work_life_balance.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.work_life_balance.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'WORK LIFE BALANCE',
      },
      JOURNALING: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.journaling.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.journaling.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'JOURNALING',
      },
      DATE: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.date.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.date.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'DATE',
      },
      'EMOTIONAL LIST': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_list.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_list.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'EMOTIONAL LIST',
      },
      'HIGH TEMPERATURE': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.high_temperature.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.high_temperature.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'HIGH TEMPERATURE',
      },
      Photos: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.photos.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.photos.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'Photos',
      },
      'LOW TEMPERATURE': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.low_temperature.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.low_temperature.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'LOW TEMPERATURE',
      },
      'SCREEN RECORDING': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.low_temperature.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'SCREEN RECORDING',
      },
      'CAMERA RECORDING': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.camera_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.camera_recording.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'CAMERA RECORDING',
      },
      'SCREEN + CAMERA RECORDING': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_camera_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_camera_recording.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'SCREEN + CAMERA RECORDING',
      },
      'MICROPHONE AUDIO RECORDING': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.microphone_audio_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.microphone_audio_recording.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'MICROPHONE AUDIO RECORDING',
      },
      'SYSTEM AUDIO RECORDING': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.system_audio_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.system_audio_recording.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'SYSTEM AUDIO RECORDING',
      },
      'MIC + SYSTEM RECORDING': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.mic_system_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.mic_system_recording.unit,
        Pricing: '',
        Use: '',
        Threshold: '',
        fieldName: 'MIC + SYSTEM RECORDING',
      },
    };

    /***/
  },

  /***/ 2180: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ E: () => /* binding */ CONSENTTABLEDATA,
      /* harmony export */ J: () => /* binding */ CONSENTTABLECOLUMNS,
      /* harmony export */
    });
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70880);

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
        Header: 'List Of Unit',
        accessor: 'Unit',
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
        Header: 'Price Offering',
        accessor: 'Pricing',
      },
      {
        Header: 'Threshold',
        accessor: 'Threshold',
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
    const CONSENTTABLEDATA = {
      'Emotional Overall': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_overall.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_overall.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      Weather: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weather.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weather.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Relative Finance Status': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.relative_finance_status.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.relative_finance_status.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Exercise Time': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.exercise_time.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.exercise_time.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Any Social Life': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.any_social_life.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.any_social_life.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Social Life List': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.social_life_list.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.social_life_list.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Health Overall': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.health_overall.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.health_overall.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      Weight: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weight.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weight.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Family Status': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.family_status.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.family_status.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Device Screen Time': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.device_screen_time.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.device_screen_time.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Work Life Balance': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.work_life_balance.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.work_life_balance.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      Journaling: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.journaling.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.journaling.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      Date: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.date.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.date.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Emotional List': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_list.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_list.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'High Temperature': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.high_temperature.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.high_temperature.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      Photos: {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.photos.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.photos.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Low Temperature': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.low_temperature.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.low_temperature.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Screen Recording': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_recording.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Camera Recording': {
        Consent: 'FALSE',
        Definition: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.camera_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.camera_recording.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Screen Camera Recording': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_camera_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_camera_recording.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Microphone Audio Recording': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.microphone_audio_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.microphone_audio_recording.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'System Audio Recording': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.system_audio_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.system_audio_recording.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
      'Mic System Recording': {
        Consent: 'FALSE',
        Definition:
          ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.mic_system_recording.definition,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.mic_system_recording.unit,
        Companies: [],
        Use: '',
        Threshold: '',
        Pricing: '',
        id: null,
      },
    };

    /***/
  },

  /***/ 70880: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Gj: () => /* binding */ DESCRIPTIONANDUNITOFVARIABLES,
      /* harmony export */ kk: () => /* binding */ maxWidth,
      /* harmony export */ nz: () => /* binding */ PROMPTRESPONSEOPTIONS,
      /* harmony export */
    });
    /* harmony import */ var _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39516);

    const PROMPTRESPONSEOPTIONS = [
      {
        title: 'Text',
        color: '#046C98',
        value: _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.TEXT,
        darkColor: '#A1BF8C',
      },
      {
        title: 'Image',
        color: '#F5B11A',
        value: _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.IMAGES,
        darkColor: '#F5B11A',
      },
      {
        title: 'Text + Image',
        color: '#E62431',
        value: _state_chats_types__WEBPACK_IMPORTED_MODULE_0__ /* .ResponseChoice */.D.BOTH,
        darkColor: '#907CB4',
      },
    ];
    const DESCRIPTIONANDUNITOFVARIABLES = {
      emotional_list: {
        definition: 'list of emotions experienced throughout the day',
        unit: 'Price per list of daily emotions',
      },
      high_temperature: {
        definition: 'highest temperature of the day',
        unit: 'Price per record of environment high temperature',
      },
      emotional_overall: {
        definition: 'an overall assessment of the days feelings',
        unit: 'Price per daily emotional index',
      },
      low_temperature: {
        definition: 'lowest temperature of the day',
        unit: 'Price per record of environment low temperature',
      },
      relative_finance_status: {
        definition: 'relative financial status ',
        unit: 'Price per daily financial status index',
      },
      weather: {
        definition: 'list of the weather of the day',
        unit: ' Price per daily weather record',
      },
      exercise_time: {
        definition: 'total amount of exercise during the day',
        unit: 'Price per record of exercise duration',
      },
      photos: {
        definition: 'any personal images that describe the day',
        unit: ' Price per personal digital image of at least 256x256 pixels',
      },
      exercise_total_time: {
        definition: 'total amount of exercise during the day',
        unit: 'Price per record of exercise duration',
      },
      health_overall: {
        definition: 'an assessment of the days health',
        unit: 'Price per daily comprehensive health report',
      },
      any_social_life: {
        definition: 'whether or not any social life occurred',
        unit: 'Price per record of daily social interaction',
      },
      social_life_list: {
        definition: 'list of social activities',
        unit: 'Price per itemized list of daily social activities',
      },
      weight: {
        definition: 'measure of weight in pounds',
        unit: 'Price per individual daily weight measurement',
      },
      family_status: {
        definition: 'status of close friends and family',
        unit: 'Price per record of family emotional status',
      },
      device_screen_time: {
        definition: 'amount of time spent on personal devices',
        unit: 'Price per record of screen time logged',
      },
      work_life_balance: {
        definition: 'overall focus of the day in a range between 0(work)-10(relaxation)',
        unit: 'Price per work-life balance assessment',
      },
      journaling: {
        definition: 'any points throughout the day worthy of note',
        unit: '',
      },
      date: {
        definition: 'the current day’s date',
        unit: '',
      },
      screen_recording: {
        definition: 'video recording of on-screen device activity',
        unit: 'Screen Recording: Price per second of device screen recording',
      },
      camera_recording: {
        definition: 'video recording from device webcam where face and or body are clearly visible',
        unit: ' Price per second of device webcam recording where face\body are clearly visible',
      },
      screen_camera_recording: {
        definition:
          'simultaneous combination of video recording of on-screen device activity and video recording from device webcam where face and or body are clearly visible',
        unit: 'Price per second of device screen + webcam recording where face\body are clearly visible',
      },
      microphone_audio_recording: {
        definition: 'audio recording from device microphone with clearly audible feedback',
        unit: 'Price per second of device microphone recording',
      },
      system_audio_recording: {
        definition: 'audio recording from device system audio with clearly audible feedback',
        unit: 'Price per second of device system audio recording',
      },
      mic_system_recording: {
        definition:
          'simultaneous combination of audio recording from device microphone and audio recording from device system audio with clearly audible feedback',
        unit: ' Price per second of device microphone and system audio recording',
      },
    };
    const maxWidth = '1450px';

    /***/
  },

  /***/ 15615: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ y: () => /* binding */ PATHS,
      /* harmony export */
    });
    const PATHS = {
      HOME: '/',
      HISTORY: '/history',
      MYGDATA: '/my_g-data',
      OURGDATA: '/our_g-data',
      ACCOUNT: '/account',
      PERSONAL: '/my_g-data/personal-data',
      CONSENT: '/my_g-data/consent',
      COMPANY: '/my_g-data/company',
      REWARDS: '/my_g-data/rewards',
      SCREEN: '/my_g-data/screen-data',
      SIGNUP: '/signup',
      LOGIN: '/login',
      RESETPASSWORD: '/reset_password',
      PRIVACY: 'https://www.g-datalabs.com/privacy_policy',
      COOKIEPOLICY: 'https://www.g-datalabs.com/cookie_and_policy',
      TERMS: 'https://www.g-datalabs.com/terms_condition',
      CONFIRMPASSWORD: '/reset_password/confirm',
    };

    /***/
  },

  /***/ 75155: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ f: () => /* binding */ REWARDSTABLECOLUMNS,
      /* harmony export */ p: () => /* binding */ REWARDSTABLEDATA,
      /* harmony export */
    });
    /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70880);

    const REWARDSTABLECOLUMNS = [
      {
        Header: 'Personal Data and ScreenData',
        accessor: 'PDataAndScreen',
      },
      {
        Header: 'List Of Unit',
        accessor: 'Unit',
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
    const REWARDSTABLEDATA = {
      'Emotional Overall': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_overall.unit,
      },
      'Relative Finance Status': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.relative_finance_status.unit,
        OtherCompValue: '0.0',
        id: null,
      },
      'Exercise Time': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.exercise_time.unit,
        OtherCompValue: '0.0',
        id: null,
      },
      'Any Social Life': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.any_social_life.unit,
      },
      'Social Life List': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.social_life_list.unit,
      },
      'Health Overall': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.health_overall.unit,
      },
      Weight: {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weight.unit,
      },
      'Family Status': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.family_status.unit,
      },
      'Device Screen Time': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.device_screen_time.unit,
      },
      'Work Life Balance': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.work_life_balance.unit,
      },
      Journaling: {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.journaling.unit,
      },
      Date: {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.date.unit,
      },
      'Emotional List': {
        Consent: 'FALSE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.emotional_list.unit,
      },
      'High Temperature': {
        Consent: 'FALSE',
        PDefinedValue: '1.20',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.high_temperature.unit,
      },
      Photos: {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.photos.unit,
      },
      'Low Temperature': {
        Consent: 'FALSE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.low_temperature.unit,
      },
      Weather: {
        Consent: 'FALSE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.weather.unit,
      },
      'Screen Recording': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_recording.unit,
      },
      'Camera Recording': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.camera_recording.unit,
      },
      'Screen Camera Recording': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.screen_camera_recording.unit,
      },
      'Microphone Audio Recording': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.microphone_audio_recording.unit,
      },
      'System Audio Recording': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.system_audio_recording.unit,
      },
      'Mic System Recording': {
        Consent: 'TRUE',
        PDefinedValue: '0.00',
        OtherCompValue: '0.0',
        id: null,
        Unit: ___WEBPACK_IMPORTED_MODULE_0__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj.mic_system_recording.unit,
      },
    };

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
    // EXTERNAL MODULE: ./node_modules/axios/index.js
    var axios = __webpack_require__(64722);
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
    var lib_axios = __webpack_require__(93258); // CONCATENATED MODULE: ./lib/location.ts
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
            const { data } = await lib_axios['default'].get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${
                coords.longitude
              }&appid=${'b9a5327fe46885fda6abefa8e7b61e7e'}&units=imperial`,
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

    // EXTERNAL MODULE: ./hooks/useChatBot.ts + 1 modules
    var useChatBot = __webpack_require__(99048);
    // EXTERNAL MODULE: ./hooks/useAuth.ts
    var useAuth = __webpack_require__(64260);
    // EXTERNAL MODULE: ./constants/auth.ts
    var auth = __webpack_require__(86835); // CONCATENATED MODULE: ./context/AppProvider.tsx
    /* __next_internal_client_entry_do_not_use__ useApp,default auto */

    const AppContext = /*#__PURE__*/ (0, react_.createContext)({
      gTableColumns: [],
      getAllConsentData: async () => {},
      updateMyGData: async () => {},
      getAllPersonalData: async () => {},
      getAllCompanyConsentData: async () => {},
    });
    function AppProvider({ children }) {
      const { setPersonalData, setGData, setRData, setCData, setScreenData, setCompData } = (0,
      hooks /* usePersonalData */.h)();
      const { fetchChatHistory, fetchRecentChats } = (0, useChatBot /* useChatBot */.L)();
      const [gTableColumns, setGTableColumns] = (0, react_.useState)([]);
      const { user } = (0, user_hooks /* useUser */.a)();
      const { logoutUser } = (0, useAuth /* useAuth */.a)();
      //* weather hook
      useWeather();
      //* functions
      const getAllPersonalData = (0, react_.useCallback)(async () => {
        try {
          const { data } = await config /* api */.h
            .get('api/personal_data_consents_rewards');
          const PData = (0, lib /* createTableData */.uR)({
            tableName: types /* TableName */.me.PData,
            data: data.data,
          });
          setPersonalData(PData);
        } catch (e) {
          if (
            e instanceof axios /* AxiosError */.d7 &&
            (e.response?.status === 401 || e.response?.data.msg === 'Token has expired') &&
            user
          ) {
            logoutUser();
          }
        }
      }, [setPersonalData, logoutUser, user]);
      const getAllConsentData = (0, react_.useCallback)(async () => {
        try {
          const { data } = await config /* api */.h
            .get('api/user_consents_rewards');
          const rData = (0, lib /* createTableData */.uR)({
            tableName: types /* TableName */.me.RData,
            data: data.data,
          });
          setRData(rData);
          const consentTableData = (0, lib /* createTableData */.uR)({
            tableName: types /* TableName */.me.CData,
            data: data.data,
          });
          setCData(consentTableData);
        } catch (e) {
          // console.log('e', e);
        }
      }, [setRData, setCData]);
      const getAllCompanyConsentData = (0, react_.useCallback)(async () => {
        try {
          if (!user || !user.accountType || user.accountType === auth /* ACCOUNTTYPE */.Z8.PERSONAL) return;
          const { data } = await config /* api */.h
            .get('api/company_consents_rewards');
          const compData = (0, lib /* createTableData */.uR)({
            tableName: types /* TableName */.me.CompData,
            data: data.data,
          });
          setCompData(compData);
        } catch (e) {
          // console.log('e', e)
        }
      }, [setCompData, user]);
      const getLastFivePersonalData = (0, react_.useCallback)(async () => {
        try {
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
        } catch (e) {
          // console.log('e', e);
        }
      }, [setGData]);
      const getAllScreenData = (0, react_.useCallback)(async () => {
        try {
          const { data } = await config /* api */.h
            .get('api/file-data/');
          const screenData = (0, lib /* createScreenData */.Xe)(data.data);
          setScreenData(screenData);
        } catch (e) {
          // console.log('e', e);
        }
      }, [setScreenData]);
      const initApp = (0, react_.useCallback)(() => {
        getAllPersonalData();
        getLastFivePersonalData();
        fetchChatHistory();
        fetchRecentChats();
        getAllConsentData();
        getAllScreenData();
        getAllCompanyConsentData();
      }, [
        getAllPersonalData,
        getLastFivePersonalData,
        getAllConsentData,
        fetchChatHistory,
        getAllScreenData,
        fetchRecentChats,
        getAllCompanyConsentData,
      ]);
      // values
      const value = (0, react_.useMemo)(
        () => ({
          gTableColumns,
          getAllConsentData,
          updateMyGData: getLastFivePersonalData,
          getAllPersonalData,
          getAllCompanyConsentData,
        }),
        [gTableColumns, getAllConsentData, getLastFivePersonalData, getAllPersonalData, getAllCompanyConsentData],
      );
      //* initialize the app.
      (0, react_.useEffect)(() => {
        if (!user) return;
        initApp();
      }, [user, initApp]);
      return /*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: value,
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
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64722);
    /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52122);
    /* harmony import */ var _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90634);
    /* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25861);
    /* harmony import */ var _constants_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86835);
    /* harmony import */ var _constants_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15615);
    /* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14088);
    /* harmony import */ var _state_chats_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81178);
    /* eslint-disable no-restricted-syntax */ /* eslint-disable @typescript-eslint/naming-convention */ /* __next_internal_client_entry_do_not_use__ useAuth auto */

    const useAuth = () => {
      const { isLoading, setIsLoading } = (0, _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useLoading */.r)();
      const { setUser, isAuthenticated, user } = (0, _state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ /* .useUser */.a)();
      const { deleteChats } = (0, _state_chats_hooks__WEBPACK_IMPORTED_MODULE_9__ /* .useChats */.P)();
      const router = (0, next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      const getUserInfo = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (token) => {
        const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
          .get('api/user_profile/1/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        const { email, first_name, last_name, phone_number, total_rewards, username, id, is_company } = data.data;
        let { profile_picture_url } = data.data;
        if (!profile_picture_url) {
          profile_picture_url = (0, _lib__WEBPACK_IMPORTED_MODULE_8__ /* .generateAvatar */.El)(first_name);
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
          accountType: is_company
            ? _constants_auth__WEBPACK_IMPORTED_MODULE_6__ /* .ACCOUNTTYPE */.Z8.COMPANY
            : _constants_auth__WEBPACK_IMPORTED_MODULE_6__ /* .ACCOUNTTYPE */.Z8.PERSONAL,
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
            router.replace(_constants_navigation__WEBPACK_IMPORTED_MODULE_7__ /* .PATHS */.y.HOME);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Welcome to G-Data Labs');
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_10__ /* .AxiosError */.d7)
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
              profile_picture_url = (0, _lib__WEBPACK_IMPORTED_MODULE_8__ /* .generateAvatar */.El)(
                data.data.first_name,
              );
            }
            const updatedUserInfo = {
              ...user,
              firstName: data.data.first_name,
              lastName: data.data.last_name,
              phoneNumber: data.data.phone_number,
              totalRewards: data.data.total_rewards ?? 0,
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
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_10__ /* .AxiosError */.d7)
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
            router.replace(_constants_navigation__WEBPACK_IMPORTED_MODULE_7__ /* .PATHS */.y.LOGIN);
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
            router.push(_constants_navigation__WEBPACK_IMPORTED_MODULE_7__ /* .PATHS */.y.CONFIRMPASSWORD);
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_10__ /* .AxiosError */.d7)
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
            router.push(_constants_navigation__WEBPACK_IMPORTED_MODULE_7__ /* .PATHS */.y.LOGIN);
          } catch (e) {
            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_10__ /* .AxiosError */.d7)
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
        router.replace(_constants_navigation__WEBPACK_IMPORTED_MODULE_7__ /* .PATHS */.y.LOGIN);
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

  /***/ 99048: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      L: () => /* binding */ useChatBot,
    });

    // EXTERNAL MODULE: external "next/dist/compiled/react"
    var react_ = __webpack_require__(18038);
    // EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
    var react_toastify_esm = __webpack_require__(34751);
    // EXTERNAL MODULE: ./node_modules/axios/index.js
    var axios = __webpack_require__(64722);
    // EXTERNAL MODULE: ./config/index.ts
    var config = __webpack_require__(52122);
    // EXTERNAL MODULE: ./state/loading/hooks.ts
    var hooks = __webpack_require__(90634);
    // EXTERNAL MODULE: ./state/chats/hooks.ts
    var chats_hooks = __webpack_require__(81178);
    // EXTERNAL MODULE: ./lib/index.ts
    var lib = __webpack_require__(14088);
    // EXTERNAL MODULE: ./state/user/hooks.ts
    var user_hooks = __webpack_require__(25861); // CONCATENATED MODULE: ./lib/chats.ts
    /* eslint-disable no-continue */ /* eslint-disable no-restricted-syntax */ const findActiveChats = (
      recentChatHistory,
      targetID,
    ) => {
      let chatHistory;
      for (const [, value] of Object.entries(recentChatHistory)) {
        for (const chats of value) {
          if (chats.id !== targetID) continue;
          else {
            chatHistory = chats;
            break;
          }
        }
      }
      return chatHistory;
    }; // CONCATENATED MODULE: ./hooks/useChatBot.ts

    /* __next_internal_client_entry_do_not_use__ useChatBot auto */

    const useChatBot = () => {
      const { isLoading, setIsLoading } = (0, hooks /* useLoading */.r)();
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
      } = (0, chats_hooks /* useChats */.P)();
      const { user } = (0, user_hooks /* useUser */.a)();
      const fetchRecentChats = (0, react_.useCallback)(async () => {
        try {
          const { data } = await config /* api */.h
            .get('api/chat/');
          const recentchatHistory = (0, lib /* createRecentChatHistory */.Cf)(data.data);
          const groupedMessages = (0, lib /* groupMessagesByDate */.py)(recentchatHistory);
          if (!groupedMessages) return;
          setRecentChatHistory(groupedMessages);
          if (!activeChatID) return;
          // update the opened chat if any
          const activeChats = findActiveChats(groupedMessages, activeChatID);
          if (!activeChats) return;
          openPreviousChats(activeChats);
        } catch (e) {
          // console.log('e :>> ', e);
        }
      }, [setRecentChatHistory, openPreviousChats, activeChatID]);
      const fetchChatHistory = (0, react_.useCallback)(async () => {
        try {
          const { data } = await config /* api */.h
            .get('api/history/');
          const chatHistoryTableData = (0, lib /* createHistoryTableData */.ef)(data.data);
          setChatHistory(chatHistoryTableData);
        } catch (e) {
          // console.log('e :>> ', e);
        }
      }, [setChatHistory]);
      const fetchNewChatID = (0, react_.useCallback)(
        async (chatName) => {
          try {
            const { data } = await config /* api */.h
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
      const provideResponseFeedback = (0, react_.useCallback)(
        async (payload) => {
          const { responseId, feedback } = payload;
          try {
            const { data } = await config /* api */.h
              .post(`choice/${responseId}`, {
                data: feedback,
              });
            if (!data.response) return;
            if (data.response === 'success') react_toastify_esm.toast.success('Feedback provided');
            fetchRecentChats();
            fetchChatHistory();
          } catch (e) {
            // console.log('e :>> ', e);
          }
        },
        [fetchRecentChats, fetchChatHistory],
      );
      const fetchBotResponse = (0, react_.useCallback)(async () => {
        try {
          const userMessage = (0, lib /* createChat */.P4)({
            isBotResponse: false,
            isLoading: false,
            text: userPrompt.data,
            images: [],
          });
          const botResponseLoading = (0, lib /* createChat */.P4)({
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
          const { data } = await config /* api */.h
            .post('get-answer-images', payload);
          let images = [];
          let text = '';
          // @ts-ignore
          if (data.images) images = data.images.map((url) => url);
          if (data.response?.length) text = data.response;
          updateChat(
            {
              ...botResponseLoading,
              isLoading: false,
              content: {
                text,
                images,
              },
            },
            data.id,
          );
          if (user) {
            fetchRecentChats();
            fetchChatHistory();
          }
        } catch (e) {
          console.log('e', e);
          if (e instanceof axios /* AxiosError */.d7) react_toastify_esm.toast.error(e.response?.data.error);
          else react_toastify_esm.toast.error('Something went wrong');
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
        provideResponseFeedback,
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

  /***/ 73057: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ F3: () => /* binding */ createConsentTableState,
      /* harmony export */ XL: () => /* binding */ createCompanyToFieldMapping,
      /* harmony export */ fy: () => /* binding */ createCompaniesDropdown,
      /* harmony export */ im: () => /* binding */ createFieldToCompanyMapping,
      /* harmony export */
    });
    /* eslint-disable no-restricted-syntax */ const createConsentTableState = (tableData) => {
      const result = {};
      for (const d of tableData) {
        result[d.PDataAndWeb] = {
          use: d.Use,
          pricing: d.Pricing,
          threshold: d.Threshold,
        };
      }
      return result;
    };
    const createFieldToCompanyMapping = (tableData) => {
      const result = {};
      for (const d of tableData) {
        result[d.PDataAndWeb] = d.Companies.length > 0 ? d.Companies[0].value : '';
      }
      return result;
    };
    const createCompanyToFieldMapping = ({ fieldName, data }) => {
      const result = {};
      for (const d of data) {
        result[d.first_name] = d[fieldName]?.toString();
      }
      return result;
    };
    const createCompaniesDropdown = (data) => {
      const result = [];
      for (const d of data) {
        if (d.consents_to_buy && d.first_name) {
          result.push({
            label: d.first_name,
            value: d.first_name,
          });
        }
      }
      return result;
    };

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
      /* harmony export */ DQ: () => /* binding */ createCompanyState,
      /* harmony export */ El: () => /* binding */ generateAvatar,
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
    /* harmony import */ var _consent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73057);
    /* eslint-disable consistent-return */ /* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */

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
      const text = arg.split(' ').filter((item) => item.length > 0);
      let result = '';
      if (text.length > 0) {
        result = text.map((word) => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');
      }
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
      const { isBotResponse, isLoading, text, choice, messageId } = arg;
      const images = arg.images.map((img) => img.url);
      return {
        messageID: messageId ?? (0, uuid__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z)(),
        isBotResponse,
        isLoading,
        choice,
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
          const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.created_at).format('YYYY-MM-DD');
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
            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format('YYYY-MM-DD');
            result[fieldName] = {
              ...result[fieldName],
              [date]: fieldName === 'Photos' ? value.files.map((file) => file) : value.value,
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
          const fieldName = capitalize(d.field_name.toLowerCase().replaceAll('_', ' '));
          result[fieldName] = {
            ...result[fieldName],
            Consent: d.consents_to_sell.toString().toUpperCase(),
            Unit: _constants__WEBPACK_IMPORTED_MODULE_2__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj[
              d.field_name.toLowerCase()
            ].unit,
            PDefinedValue: d.demanded_reward_value,
            OtherCompValue: '0.0',
            id: d.id,
          };
        }
      }
      if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__ /* .TableName */.me.CData) {
        for (const d of data) {
          const fieldName = capitalize(d.field_name.toLowerCase().replaceAll('_', ' '));
          result[fieldName] = {
            ...result[fieldName],
            Consent: d.consents_to_sell.toString().toUpperCase(),
            Definition:
              _constants__WEBPACK_IMPORTED_MODULE_2__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj[
                d.field_name.toLowerCase()
              ].definition,
            Unit: _constants__WEBPACK_IMPORTED_MODULE_2__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj[
              d.field_name.toLowerCase()
            ].unit,
            Companies: (0, _consent__WEBPACK_IMPORTED_MODULE_4__ /* .createCompaniesDropdown */.fy)(d.company_consent),
            Use: (0, _consent__WEBPACK_IMPORTED_MODULE_4__ /* .createCompanyToFieldMapping */.XL)({
              fieldName: 'usage',
              data: d.company_consent,
            }),
            Threshold: (0, _consent__WEBPACK_IMPORTED_MODULE_4__ /* .createCompanyToFieldMapping */.XL)({
              fieldName: 'threshold',
              data: d.company_consent,
            }),
            Pricing: (0, _consent__WEBPACK_IMPORTED_MODULE_4__ /* .createCompanyToFieldMapping */.XL)({
              fieldName: 'demanded_reward_value',
              data: d.company_consent,
            }),
            id: d.id,
          };
        }
      }
      if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__ /* .TableName */.me.CompData) {
        for (const d of data) {
          result[d.personal_data_field.field_name] = {
            ...result[d.personal_data_field.field_name],
            Consent: d.consents_to_buy.toString().toUpperCase(),
            Definition:
              _constants__WEBPACK_IMPORTED_MODULE_2__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj[
                d.personal_data_field.field_name.replaceAll(' ', '_').toLowerCase()
              ].definition,
            Unit: _constants__WEBPACK_IMPORTED_MODULE_2__ /* .DESCRIPTIONANDUNITOFVARIABLES */.Gj[
              d.personal_data_field.field_name.replaceAll(' ', '_').toLowerCase()
            ].unit,
            Use: d.usage,
            Pricing: d.demanded_reward_value,
            fieldName: d.personal_data_field.field_name,
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
      const columns = data[index].values
        .map((item) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format('YYYY-MM-DD'))
        .filter((value, ind, self) => self.indexOf(value) === ind);
      result = ['Consent', ...columns, 'Consent Value', 'Rewards'];
      const tableColumns = result.map((col) => ({
        Header: col,
        accessor: col,
      }));
      return tableColumns;
    };
    //* comapny table state
    const createCompanyState = (data) => {
      const result = {};
      for (const d of data) {
        result[d.fieldName] = {
          consents_to_buy: d.Consent === 'TRUE',
          use: d.Use,
          pricing: d.Pricing,
          threshold: d.Threshold,
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
        const descOrderedChats = chats.history.sort((a, b) =>
          dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.timestamp).isAfter(
            dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.timestamp),
          )
            ? 1
            : -1,
        );
        for (const chat of descOrderedChats) {
          const response = createChat({
            text: chat.answer,
            choice: chat.choice,
            messageId: chat.id,
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
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format('YYYY-MM-DD HH:mm:ss'),
          id: chats.id,
          messages,
        };
      });

    /***/
  },

  /***/ 83726: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      JT: () => /* reexport */ account_icon,
      zE: () => /* reexport */ account_icon_dark,
      IH: () => /* reexport */ add_icon,
      x7: () => /* reexport */ arrow_icon,
      T7: () => /* reexport */ bulb_active_icon,
      LI: () => /* reexport */ bulb_inactive_icon,
      W6: () => /* reexport */ chat_icon,
      BF: () => /* reexport */ check_icon,
      Xv: () => /* reexport */ check_active_icon,
      WA: () => /* reexport */ check_disable_icon,
      JG: () => /* reexport */ copy_icon,
      JE: () => /* reexport */ cross_active_icon,
      QM: () => /* reexport */ cross_disable_icon,
      oB: () => /* reexport */ default_profile,
      eP: () => /* reexport */ edit_icon,
      th: () => /* reexport */ hidepassword_icon,
      m8: () => /* reexport */ history_icon,
      nm: () => /* reexport */ history_icon_dark,
      LE: () => /* reexport */ home_icon,
      kP: () => /* reexport */ home_icon_dark,
      wb: () => /* reexport */ like_filled_icon,
      jA: () => /* reexport */ like_outlined_icon,
      jY: () => /* reexport */ logo /* default */.Z,
      J2: () => /* reexport */ logo_dark /* default */.Z,
      kS: () => /* reexport */ logout_icon,
      PA: () => /* reexport */ no_chats,
      HB: () => /* reexport */ no_data,
      PD: () => /* reexport */ plus_icon,
      lW: () => /* reexport */ send_icon,
      fR: () => /* reexport */ showpassword_icon,
      rc: () => /* reexport */ sidebar_icon,
      tp: () => /* reexport */ sidebar_dark_icon,
      ws: () => /* reexport */ upload_icon,
    }); // CONCATENATED MODULE: ./public/assets/icons/home__icon.svg

    // UNUSED EXPORTS: myGData

    /* harmony default export */ const home_icon = {
      src: '/_next/static/media/home__icon.77c058d5.svg',
      height: 31,
      width: 31,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/icons/home__icon_dark.svg
    /* harmony default export */ const home_icon_dark = {
      src: '/_next/static/media/home__icon_dark.836472a3.svg',
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
    }; // CONCATENATED MODULE: ./public/assets/icons/history__icon_dark.svg
    /* harmony default export */ const history_icon_dark = {
      src: '/_next/static/media/history__icon_dark.970311ed.svg',
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
    }; // CONCATENATED MODULE: ./public/assets/icons/account__icon_dark.svg
    /* harmony default export */ const account_icon_dark = {
      src: '/_next/static/media/account__icon_dark.8bdda029.svg',
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
    }; // CONCATENATED MODULE: ./public/assets/icons/like_outlined__icon.png
    /* harmony default export */ const like_outlined_icon = {
      src: '/_next/static/media/like_outlined__icon.49977db7.png',
      height: 100,
      width: 100,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42g3CIQ6CUAAA0MfHpAewGLBrdGaCBudMbkSnxQIjEAjwxzHoRE4Jbw8gVdkjsU5xMSmwAbY6TzUSdlqzl6NRKXD285CDKOPkLXdFECHTiwYHH1/gpnDX+Ass9nENAMaoK48AAAAASUVORK5CYII=',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/icons/like_filled__icon.png
    /* harmony default export */ const like_filled_icon = {
      src: '/_next/static/media/like_filled__icon.b3e53afd.png',
      height: 96,
      width: 96,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42i3IMQqCYBgA0CfRYjTU0l2abQg6Rudo6zYuIoI3cBQEBw/h4CI4ffKD2+MBGQoXgBPOVsVh8BceyNI1SqNQ+cFdmHRCmOXcLHq9FDVcbQatFF/g7Sn38oEdS9IYoPArmjwAAAAASUVORK5CYII=',
      blurWidth: 8,
      blurHeight: 8,
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
    };
    // EXTERNAL MODULE: ./public/assets/images/logo-dark.png
    var logo_dark = __webpack_require__(95010);
    // EXTERNAL MODULE: ./public/assets/images/logo.png
    var logo = __webpack_require__(95600); // CONCATENATED MODULE: ./public/assets/icons/copy__icon.png
    /* harmony default export */ const copy_icon = {
      src: '/_next/static/media/copy__icon.b0481f58.png',
      height: 96,
      width: 96,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWklEQVR42g3EMQqCYBgA0NfYXhB8BU315+51ghZTBB30Cp7ARcHRg/rz4EFInm4AYVGb7EpXJwo/zPnWJnirPPTgL1H4OhtB50VYDSpQ+8BFadVkiwC4S1lwAMKXDflgffsSAAAAAElFTkSuQmCC',
      blurWidth: 8,
      blurHeight: 8,
    }; // CONCATENATED MODULE: ./public/assets/icons/check__icon.svg
    /* harmony default export */ const check_icon = {
      src: '/_next/static/media/check__icon.a4f74bfb.svg',
      height: 24,
      width: 24,
      blurWidth: 0,
      blurHeight: 0,
    }; // CONCATENATED MODULE: ./public/assets/index.ts

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
        (payload, newMessageID) => {
          dispatch(
            (0, ___WEBPACK_IMPORTED_MODULE_4__ /* .updateChatAction */.IM)({
              chat: payload,
              newMessageID,
            }),
          );
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
            if (chat.messageID === action.payload.chat.messageID) {
              return {
                ...action.payload.chat,
                messageID: action.payload.newMessageID,
              };
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
          activeChatID: undefined,
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
      const { personalData, gData, rData, cData, screenData, compData } = (0,
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
      const setCompData = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
        (payload) => {
          dispatch((0, ___WEBPACK_IMPORTED_MODULE_3__ /* .setCompDataAction */.UD)(payload));
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
        setCompData,
        screenData,
        cData,
        rData,
        personalData,
        gData,
        compData,
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
      /* harmony export */ UD: () => /* binding */ setCompDataAction,
      /* harmony export */ Y4: () => /* binding */ setScreenDataAction,
      /* harmony export */ ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */ py: () => /* binding */ setCDataAction,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91388);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _constants_consent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2180);
    /* harmony import */ var _constants_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96107);
    /* harmony import */ var _constants_rewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75155);

    const initialState = {
      personalData: {},
      gData: {},
      rData: _constants_rewards__WEBPACK_IMPORTED_MODULE_2__ /* .REWARDSTABLEDATA */.p,
      cData: _constants_consent__WEBPACK_IMPORTED_MODULE_0__ /* .CONSENTTABLEDATA */.E,
      compData: _constants_company__WEBPACK_IMPORTED_MODULE_1__ /* .COMPANYTABLEDATA */.A,
      screenData: [],
    };
    const personalDataSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
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
          rData: {
            ...state.rData,
            ...action.payload,
          },
        }),
        setCDataAction: (state, action) => ({
          ...state,
          cData: {
            ...state.cData,
            ...action.payload,
          },
        }),
        setCompDataAction: (state, action) => ({
          ...state,
          compData: {
            ...state.compData,
            ...action.payload,
          },
        }),
        setScreenDataAction: (state, action) => ({
          ...state,
          screenData: action.payload,
        }),
      },
    });
    const {
      setPersonalDataAction,
      setGDataAction,
      setRDataAction,
      setCDataAction,
      setScreenDataAction,
      setCompDataAction,
    } = personalDataSlice.actions;
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
      TableName['CompData'] = 'Company Data';
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
        limit: 1,
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

  /***/ 95010: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
      src: '/_next/static/media/logo-dark.ecd0cb6d.png',
      height: 2335,
      width: 2146,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyUlEQVR42mOAgdeKBh5vGWQNGZBBh0WOEIj+Jqmi+srGwwjEnlK82Wx510ZOhgabwvSOoBo7BgaG9o2bN266c/fB+trYTZ4MDDAgYB9VGadz89T84JJrl85++PDuseP/BAZehv9lihlpunoz5jU7bX2/gCHszKGt9+/euNL9fyaDJsOvIsWMjgDXIAYGhmsHNy84cPfu3f+PHv2UZkABZknZizccN7n+4HLg3L3N8Qwg8L+AgckprotTqXhxBUzd0oMTU+o3WjACAF57UDMfW/v+AAAAAElFTkSuQmCC',
      blurWidth: 7,
      blurHeight: 8,
    };

    /***/
  },

  /***/ 95600: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
      src: '/_next/static/media/logo.eaf39e0e.png',
      height: 2335,
      width: 2145,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzElEQVR42mOAgQeb1TwebRUxZEAGb04VC4Ml90qq3l1nacLAwMDw8Qij2euDFlwMby9UZLw4V2f3i4Ghc1na9BUqbQen/zrG4MMAA++MraNepWndPjPfMy+ufvNlhoLTNv//M/AzPD8hk/k2TGvGs0bLrW8PM0S1t80/mN29ver/UwZdhheHpDNf5loFfdVjuLGtoW0PQ82hewwMT8QYkMHbCobsifrzjKes3eT3/2VOAgMIfL3ExfR4vhDnrdW6lTCFPx+Xp/z/6cUIAFNBVIf10k5KAAAAAElFTkSuQmCC',
      blurWidth: 7,
      blurHeight: 8,
    };

    /***/
  },

  /***/ 7633: /***/ () => {
    /***/
  },
};
