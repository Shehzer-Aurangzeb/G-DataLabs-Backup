(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9194: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 306)),
        Promise.resolve().then(n.bind(n, 7389)),
        Promise.resolve().then(n.bind(n, 171)),
        Promise.resolve().then(n.t.bind(n, 8202, 23)),
        Promise.resolve().then(n.t.bind(n, 5610, 23)),
        Promise.resolve().then(n.t.bind(n, 6518, 23)),
        Promise.resolve().then(n.t.bind(n, 6855, 23)),
        Promise.resolve().then(n.t.bind(n, 3776, 23));
    },
    306: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n(7437);
      n(2265);
      var s = n(3198),
        l = n(5531),
        r = n(764),
        i = n(3136);
      function c(e) {
        let { children: t } = e;
        return (0, a.jsx)(s.zt, {
          store: l.ZP,
          children: (0, a.jsx)(i.Z, { children: (0, a.jsx)(r.Z, { children: t }) }),
        });
      }
    },
    7389: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var a = n(7437),
        s = n(2265),
        l = n(4033),
        r = n(6548),
        i = function (e) {
          let { children: t } = e;
          return (0, a.jsx)('div', { className: 'h-screen w-screen', children: t });
        },
        c = n(910),
        o = n(1419);
      let d = {
          DARK: ['#907CB4', '#F5B11A', '#A1BF8C', '#046C98', '#EA6D24'],
          LIGHT: ['#EE3E2E', '#3B7BBE', '#EFDCB1', '#DDAF40', '#E9CB84'],
        },
        x = [
          { title: 'Home', icon: o.LE, to: r.y.HOME },
          { title: 'Login', icon: o.kS, to: r.y.LOGIN },
          { title: 'Register', icon: o.JT, to: r.y.SIGNUP },
        ],
        m = [
          { title: 'Home', icon: o.LE, to: r.y.HOME, icon_dark: o.kP },
          { title: 'History', icon: o.m8, to: r.y.HISTORY, icon_dark: o.nm },
          {
            title: 'My G-Data',
            icon: o.jY,
            icon_dark: o.J2,
            to: r.y.MYGDATA,
            nestedItems: [
              { title: 'Personal Data', icon: '', to: r.y.PERSONAL },
              { title: 'Consent', icon: '', to: r.y.CONSENT },
              { title: 'Rewards', icon: '', to: r.y.REWARDS },
              { title: 'Screen Data', icon: '', to: r.y.SCREEN },
            ],
          },
          { title: 'Our G-Data', icon: o.jY, icon_dark: o.J2, to: r.y.OURGDATA },
          { title: 'My Account', icon: o.JT, to: r.y.ACCOUNT, icon_dark: o.zE },
        ];
      var u = n(9907),
        f = n(1846),
        p = n(346),
        h = n(3198),
        b = n(5531),
        j = n(8421);
      let y = () => {
        let { isOpen: e } = (0, h.v9)((e) => e.sidebar),
          t = (0, b.TL)(),
          n = (0, s.useCallback)(
            (e) => {
              t((0, j.H)(e));
            },
            [t],
          );
        return { isOpen: e, setIsOpen: n };
      };
      var g = n(6691),
        v = n.n(g),
        N = n(1396),
        w = n.n(N),
        k = n(764),
        _ = n(7350),
        A = function () {
          let { theme: e } = (0, k.F)();
          return (0, a.jsxs)(w(), {
            href: r.y.HOME,
            className: 'flex flex-row gap-x-3 items-center',
            children: [
              (0, a.jsx)('div', {
                className: 'relative w-[50px] h-[50px] laptop:w-[40px] laptop:h-[40px]',
                children: (0, a.jsx)(v(), {
                  src: e === _.Q2.LIGHT ? o.jY : o.J2,
                  alt: 'logo',
                  fill: !0,
                  className: 'object-contain ',
                }),
              }),
              (0, a.jsx)('h3', {
                className: 'text-main font-sans laptop:text-2xl text-3xl font-bold dark:text-primary',
                children: 'G-DataLabs',
              }),
            ],
          });
        },
        C = n(3427),
        E = function (e) {
          let { items: t } = e,
            { theme: n } = (0, k.F)(),
            s = (0, l.usePathname)();
          return (0, a.jsx)('ul', {
            className: 'max-w-sidebarItem w-4/5 flex flex-col gap-y-4',
            children: t.map((e) =>
              (0, a.jsxs)(
                'li',
                {
                  children: [
                    (0, a.jsxs)(w(), {
                      href: e.to,
                      className:
                        'flex flex-row items-center gap-x-3 py-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                          s === e.to ? 'bg-active dark:bg-[#888888]' : 'bg-transparent',
                        ),
                      children: [
                        (0, a.jsx)(C.Z, {
                          src: n === _.Q2.DARK && e.icon_dark ? e.icon_dark : e.icon,
                          alt: 'icon',
                          className: 'w-[30px] h-[30px]',
                        }),
                        (0, a.jsx)('span', {
                          className: 'font-sans text-main dark:text-primary text-xl font-medium',
                          children: e.title,
                        }),
                      ],
                    }),
                    e.nestedItems &&
                      (0, a.jsx)('ul', {
                        className: 'flex flex-col gap-y-[18px] ml-10 mt-5',
                        children: e.nestedItems.map((e, t) =>
                          (0, a.jsx)(
                            'li',
                            {
                              children: (0, a.jsxs)(w(), {
                                href: e.to,
                                className:
                                  'flex flex-row items-center gap-x-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                                    s === e.to ? 'bg-active  dark:bg-chat py-3' : 'bg-transparent',
                                  ),
                                children: [
                                  (0, a.jsx)('span', {
                                    className: 'w-[30px] inline-block transition-all duration-200 '.concat(
                                      s === e.to ? 'h-[13px]' : 'h-[6px]',
                                    ),
                                    style: { backgroundColor: n === _.Q2.DARK ? d.DARK[t] : d.LIGHT[t] },
                                  }),
                                  (0, a.jsx)('span', {
                                    className: 'font-sans text-main dark:text-primary text-base font-medium',
                                    children: e.title,
                                  }),
                                ],
                              }),
                            },
                            e.title,
                          ),
                        ),
                      }),
                  ],
                },
                e.title,
              ),
            ),
          });
        },
        I = function (e) {
          let { className: t = '' } = e,
            { theme: n, setTheme: l } = (0, k.F)(),
            [r, i] = (0, s.useState)(n !== _.Q2.DARK);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)('input', {
                type: 'checkbox',
                id: 'switch',
                className: 'hidden',
                onChange: () => {
                  r ? l(_.Q2.DARK) : l(_.Q2.LIGHT), i(!r);
                },
              }),
              (0, a.jsx)('div', {
                className: ['bg-gray rounded-md py-3 px-4 w-full ] dark:bg-[#888888]', t].join(' '),
                children: (0, a.jsxs)('label', {
                  htmlFor: 'switch',
                  className: 'flex gap-x-3 items-center cursor-pointer justify-center',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 '.concat(
                          r ? 'bg-dark dark:bg-darkActive' : 'bg-transparent',
                          ' ',
                        ),
                      children: [
                        (0, a.jsx)(C.Z, {
                          src: r ? o.T7 : o.LI,
                          alt: 'light-bulb-icon',
                          className: 'h-5 w-4 dark:invert-1',
                        }),
                        (0, a.jsx)('span', {
                          className: 'font-sans font-bold text-base dark:text-white '.concat(
                            r ? 'text-active ' : 'text-inactive ',
                          ),
                          children: 'Light',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className:
                        'flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 '.concat(
                          r ? 'bg-transparent' : 'bg-dark dark:bg-darkActive',
                          ' ',
                        ),
                      children: [
                        (0, a.jsx)(C.Z, {
                          src: r ? o.LI : o.T7,
                          alt: 'light-bulb-icon',
                          className: 'h-5 w-5 dark:invert-1',
                        }),
                        (0, a.jsx)('span', {
                          className: 'font-sans font-bold text-base  '.concat(
                            r ? 'text-inactive dark:text-white' : 'text-active dark:text-white',
                          ),
                          children: 'Dark',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        D = n(1515),
        P = function (e) {
          let { logoutUser: t, user: n } = e;
          return (0, a.jsxs)('div', {
            className:
              'mb-2 bg-gray flex flex-row items-center w-full pl-4 pr-6 py-3 rounded-md gap-x-4 dark:bg-darkActive',
            children: [
              (0, a.jsx)(C.Z, {
                src: n.image,
                alt: 'profile',
                className: 'w-[50px] h-[50px] rounded-full',
                rounded: !0,
              }),
              (0, a.jsxs)('div', {
                className: 'flex flex-col flex-1',
                children: [
                  (0, a.jsx)('h3', {
                    className: 'font-sans font-bold text-xl text-active  leading-6  max-w-[140px] truncate',
                    children: (0, D.kC)(''.concat(n.firstName, ' ').concat(n.lastName)),
                  }),
                  (0, a.jsx)('p', {
                    className: 'font-sans font-normal text-active text-base max-w-[140px] truncate',
                    children: n.email,
                  }),
                ],
              }),
              (0, a.jsx)('button', {
                type: 'submit',
                className: 'bg-transparent focus:outline-none focus:shadow-none',
                onClick: t,
                children: (0, a.jsx)(C.Z, { src: o.kS, alt: 'logout', className: 'w-[35px] h-[35px]' }),
              }),
            ],
          });
        },
        R = n(1839),
        T = function () {
          let { width: e } = (0, u.i)(),
            { isOpen: t, setIsOpen: n } = y(),
            i = (0, s.useRef)(null),
            d = (0, l.usePathname)(),
            { isAuthenticated: h, logoutUser: b, user: j } = (0, p.a)();
          (0, f.O)(i, () => {
            n(!1);
          });
          let g = (0, s.useMemo)(
            () =>
              h && j
                ? j.accountType === c.Z8.COMPANY
                  ? m.map((e) =>
                      e.to === r.y.MYGDATA && e.nestedItems
                        ? { ...e, nestedItems: [...e.nestedItems, { title: 'Company', icon: '', to: r.y.COMPANY }] }
                        : e,
                    )
                  : m
                : x,
            [h, j],
          );
          return (
            (0, s.useEffect)(() => {
              n(!1);
            }, [d, n]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                e < 1280 &&
                  (0, a.jsx)('div', {
                    className: 'h-[calc(100vh_-_2.5rem)] bg-main dark:bg-transparent relative w-[50px]',
                    children: (0, a.jsx)(R.Z, {
                      className:
                        'absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => n(!t),
                      type: 'button',
                      src: o.rc,
                    }),
                  }),
                (0, a.jsxs)('aside', {
                  ref: i,
                  className:
                    'h-[calc(100vh_-_2.5rem)] flex flex-col gap-y-4 max-w-[360px] mobile:max-w-full items-start justify-between overflow-y-auto '.concat(
                      e < 1280
                        ? 'fixed z-20 transition-all duration-300 bg-main dark:bg-[#9f9f9e] '.concat(
                            t ? 'w-full  pl-5' : 'w-0 p-0',
                          )
                        : ' pl-5 w-[25%] bg-transparent',
                      '\n     ',
                    ),
                  children: [
                    (0, a.jsx)(A, {}),
                    e < 1280 &&
                      (0, a.jsx)(R.Z, {
                        className:
                          'z-10 absolute top-3 right-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                        onClick: () => n(!t),
                        type: 'button',
                        src: o.rc,
                      }),
                    (0, a.jsx)(E, { items: g }),
                    (0, a.jsxs)('div', {
                      className: 'max-w-sidebarItem w-full',
                      children: [h && j && (0, a.jsx)(P, { logoutUser: b, user: j }), (0, a.jsx)(I, {})],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        L = function (e) {
          let { children: t } = e;
          return (0, a.jsxs)('div', {
            className: 'h-screen w-screen flex dark:bg-[#b6b6b5] flex-row py-5 pr-5',
            children: [(0, a.jsx)(T, {}), t],
          });
        },
        S = function (e) {
          let { children: t } = e,
            n = (0, l.usePathname)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              ' ',
              n === r.y.COOKIEPOLICY || n === r.y.PRIVACY || n === r.y.TERMS
                ? (0, a.jsx)(i, { children: t })
                : (0, a.jsx)(L, { children: t }),
            ],
          });
        };
    },
    764: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
        F: function () {
          return c;
        },
      });
      var a = n(7437),
        s = n(2265),
        l = n(7350);
      let r = () => {
          if (window.localStorage) {
            let e = window.localStorage.getItem('current-theme');
            if ('string' == typeof e) return e;
          }
          return l.Q2.LIGHT;
        },
        i = (0, s.createContext)({ theme: l.Q2.LIGHT, setTheme: () => {} }),
        c = () => (0, s.useContext)(i);
      var o = function (e) {
        let { children: t } = e,
          [n, c] = (0, s.useState)(r()),
          o = (0, s.useMemo)(() => ({ theme: n, setTheme: c }), [n]),
          d = (e) => {
            let t = window.document.documentElement,
              n = e === l.Q2.DARK;
            t.classList.remove(n ? l.Q2.LIGHT : l.Q2.DARK),
              t.classList.add(e),
              localStorage.setItem('current-theme', e);
          };
        return (
          (0, s.useEffect)(() => {
            d(n);
          }, [n]),
          (0, a.jsx)(i.Provider, { value: o, children: t })
        );
      };
    },
    8202: function () {},
    6518: function () {},
    5610: function () {},
    6855: function (e) {
      e.exports = {
        style: { fontFamily: "'__DM_Sans_6ff133', '__DM_Sans_Fallback_6ff133'", fontStyle: 'normal' },
        className: '__className_6ff133',
        variable: '__variable_6ff133',
      };
    },
    3776: function (e) {
      e.exports = {
        style: { fontFamily: "'__Raleway_bdd8fd', '__Raleway_Fallback_bdd8fd'", fontStyle: 'normal' },
        className: '__className_bdd8fd',
        variable: '__variable_bdd8fd',
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 396, 254, 100, 136, 971, 596, 744], function () {
      return e((e.s = 9194));
    }),
      (_N_E = e.O());
  },
]);
