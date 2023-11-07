(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9194: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 306)),
        Promise.resolve().then(a.bind(a, 4193)),
        Promise.resolve().then(a.bind(a, 171)),
        Promise.resolve().then(a.t.bind(a, 8202, 23)),
        Promise.resolve().then(a.t.bind(a, 5610, 23)),
        Promise.resolve().then(a.t.bind(a, 6518, 23)),
        Promise.resolve().then(a.t.bind(a, 6855, 23)),
        Promise.resolve().then(a.t.bind(a, 3776, 23));
    },
    306: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a(7437);
      a(2265);
      var s = a(3198),
        l = a(5531),
        r = a(764),
        i = a(289);
      function c(e) {
        let { children: t } = e;
        return (0, n.jsx)(s.zt, {
          store: l.ZP,
          children: (0, n.jsx)(i.Z, { children: (0, n.jsx)(r.Z, { children: t }) }),
        });
      }
    },
    4193: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return L;
          },
        });
      var n = a(7437),
        s = a(2265),
        l = a(4033),
        r = a(9611),
        i = function (e) {
          let { children: t } = e;
          return (0, n.jsx)('div', { className: 'h-screen w-screen', children: t });
        },
        c = a(9907),
        o = a(6791),
        d = a(1846),
        u = a(346),
        x = a(3198),
        m = a(5531),
        f = a(8421);
      let p = () => {
        let { isOpen: e } = (0, x.v9)((e) => e.sidebar),
          t = (0, m.TL)(),
          a = (0, s.useCallback)(
            (e) => {
              t((0, f.H)(e));
            },
            [t],
          );
        return { isOpen: e, setIsOpen: a };
      };
      var h = a(6691),
        b = a.n(h),
        v = a(1396),
        g = a.n(v),
        w = a(764),
        y = a(7350),
        j = function () {
          let { theme: e } = (0, w.F)();
          return (0, n.jsxs)(g(), {
            href: r.yy.HOME,
            className: 'flex flex-row gap-x-3 items-center',
            children: [
              (0, n.jsx)('div', {
                className: 'relative w-[50px] h-[50px] laptop:w-[40px] laptop:h-[40px]',
                children: (0, n.jsx)(b(), {
                  src: e === y.Q2.LIGHT ? o.jY : o.J2,
                  alt: 'logo',
                  fill: !0,
                  className: 'object-contain ',
                }),
              }),
              (0, n.jsx)('h3', {
                className: 'text-main font-sans laptop:text-2xl text-3xl font-bold dark:text-primary',
                children: 'G-DataLabs',
              }),
            ],
          });
        },
        k = a(3427),
        _ = function (e) {
          let { items: t } = e,
            { theme: a } = (0, w.F)(),
            s = (0, l.usePathname)();
          return (0, n.jsx)('ul', {
            className: 'max-w-sidebarItem w-4/5 flex flex-col gap-y-4',
            children: t.map((e) =>
              (0, n.jsxs)(
                'li',
                {
                  children: [
                    (0, n.jsxs)(g(), {
                      href: e.to,
                      className:
                        'flex flex-row items-center gap-x-3 py-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                          s === e.to ? 'bg-active dark:bg-[#888888]' : 'bg-transparent',
                        ),
                      children: [
                        (0, n.jsx)(k.Z, {
                          src: a === y.Q2.DARK && e.icon_dark ? e.icon_dark : e.icon,
                          alt: 'icon',
                          className: 'w-[30px] h-[30px]',
                        }),
                        (0, n.jsx)('span', {
                          className: 'font-sans text-main dark:text-primary text-xl font-medium',
                          children: e.title,
                        }),
                      ],
                    }),
                    e.nestedItems &&
                      (0, n.jsx)('ul', {
                        className: 'flex flex-col gap-y-[18px] ml-10 mt-5',
                        children: e.nestedItems.map((e) =>
                          (0, n.jsx)(
                            'li',
                            {
                              children: (0, n.jsxs)(g(), {
                                href: e.to,
                                className:
                                  'flex flex-row items-center gap-x-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                                    s === e.to ? 'bg-active  dark:bg-chat py-3' : 'bg-transparent',
                                  ),
                                children: [
                                  (0, n.jsx)('span', {
                                    className: 'w-[30px] inline-block transition-all duration-200 bg-yellow '.concat(
                                      s === e.to ? 'h-[13px]' : 'h-[6px]',
                                    ),
                                  }),
                                  (0, n.jsx)('span', {
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
        N = function (e) {
          let { className: t = '' } = e,
            { theme: a, setTheme: l } = (0, w.F)(),
            [r, i] = (0, s.useState)(a !== y.Q2.DARK);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('input', {
                type: 'checkbox',
                id: 'switch',
                className: 'hidden',
                onChange: () => {
                  r ? l(y.Q2.DARK) : l(y.Q2.LIGHT), i(!r);
                },
              }),
              (0, n.jsx)('div', {
                className: ['bg-gray rounded-md py-3 px-4 w-full ] dark:bg-[#888888]', t].join(' '),
                children: (0, n.jsxs)('label', {
                  htmlFor: 'switch',
                  className: 'flex gap-x-3 items-center cursor-pointer justify-center',
                  children: [
                    (0, n.jsxs)('div', {
                      className:
                        'flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 '.concat(
                          r ? 'bg-dark dark:bg-darkActive' : 'bg-transparent',
                          ' ',
                        ),
                      children: [
                        (0, n.jsx)(k.Z, {
                          src: r ? o.T7 : o.LI,
                          alt: 'light-bulb-icon',
                          className: 'h-5 w-4 dark:invert-1',
                        }),
                        (0, n.jsx)('span', {
                          className: 'font-sans font-bold text-base dark:text-white '.concat(
                            r ? 'text-active ' : 'text-inactive ',
                          ),
                          children: 'Light',
                        }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 '.concat(
                          r ? 'bg-transparent' : 'bg-dark dark:bg-darkActive',
                          ' ',
                        ),
                      children: [
                        (0, n.jsx)(k.Z, {
                          src: r ? o.LI : o.T7,
                          alt: 'light-bulb-icon',
                          className: 'h-5 w-5 dark:invert-1',
                        }),
                        (0, n.jsx)('span', {
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
        C = a(1515),
        P = function (e) {
          let { logoutUser: t, user: a } = e;
          return (0, n.jsxs)('div', {
            className:
              'mb-2 bg-gray flex flex-row items-center w-full pl-4 pr-6 py-3 rounded-md gap-x-4 dark:bg-darkActive',
            children: [
              (0, n.jsx)(k.Z, {
                src: a.image,
                alt: 'profile',
                className: 'w-[50px] h-[50px] rounded-full',
                rounded: !0,
              }),
              (0, n.jsxs)('div', {
                className: 'flex flex-col flex-1',
                children: [
                  (0, n.jsx)('h3', {
                    className: 'font-sans font-bold text-xl text-active  leading-6  max-w-[140px] truncate',
                    children: (0, C.kC)(''.concat(a.firstName, ' ').concat(a.lastName)),
                  }),
                  (0, n.jsx)('p', {
                    className: 'font-sans font-normal text-active text-base max-w-[140px] truncate',
                    children: a.email,
                  }),
                ],
              }),
              (0, n.jsx)('button', {
                type: 'submit',
                className: 'bg-transparent focus:outline-none focus:shadow-none',
                onClick: t,
                children: (0, n.jsx)(k.Z, { src: o.kS, alt: 'logout', className: 'w-[35px] h-[35px]' }),
              }),
            ],
          });
        },
        I = a(1839),
        T = function () {
          let { width: e } = (0, c.i)(),
            { isOpen: t, setIsOpen: a } = p(),
            i = (0, s.useRef)(null),
            x = (0, l.usePathname)(),
            { isAuthenticated: m, logoutUser: f, user: h } = (0, u.a)();
          return (
            (0, d.O)(i, () => {
              a(!1);
            }),
            (0, s.useEffect)(() => {
              a(!1);
            }, [x, a]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                e < 1280 &&
                  (0, n.jsx)('div', {
                    className: 'h-[calc(100vh_-_2.5rem)] bg-main dark:bg-transparent relative w-[50px]',
                    children: (0, n.jsx)(I.Z, {
                      className: 'absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => a(!t),
                      type: 'button',
                      src: o.rc,
                    }),
                  }),
                (0, n.jsxs)('aside', {
                  ref: i,
                  className:
                    'h-[calc(100vh_-_2.5rem)] flex flex-col max-w-[360px] mobile:max-w-full items-start justify-between overflow-y-auto '.concat(
                      e < 1280
                        ? 'fixed z-20 transition-all duration-300 bg-main dark:bg-[#9f9f9e] '.concat(
                            t ? 'w-full  pl-5' : 'w-0 p-0',
                          )
                        : ' pl-5 w-[25%] bg-transparent',
                      '\n     ',
                    ),
                  children: [
                    (0, n.jsx)(j, {}),
                    e < 1280 &&
                      (0, n.jsx)(I.Z, {
                        className: 'z-10 absolute top-3 right-2 flex items-center justify-center w-[30px] h-[30px]',
                        onClick: () => a(!t),
                        type: 'button',
                        src: o.rc,
                      }),
                    (0, n.jsx)(_, { items: m ? r.a3 : r.x1 }),
                    (0, n.jsxs)('div', {
                      className: 'max-w-sidebarItem w-full',
                      children: [m && h && (0, n.jsx)(P, { logoutUser: f, user: h }), (0, n.jsx)(N, {})],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        D = function (e) {
          let { children: t } = e;
          return (0, n.jsxs)('div', {
            className: 'h-screen w-screen flex dark:bg-[#b6b6b5] flex-row py-5 pr-5',
            children: [(0, n.jsx)(T, {}), t],
          });
        },
        L = function (e) {
          let { children: t } = e,
            a = (0, l.usePathname)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              ' ',
              a === r.yy.COOKIEPOLICY || a === r.yy.PRIVACY || a === r.yy.TERMS
                ? (0, n.jsx)(i, { children: t })
                : (0, n.jsx)(D, { children: t }),
            ],
          });
        };
    },
    289: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return g;
        },
        q: function () {
          return v;
        },
      });
      var n = a(7437),
        s = a(2265),
        l = a(2164),
        r = a(5888),
        i = a(6171),
        c = a(6118),
        o = a(1515),
        d = a(7350),
        u = a(9222);
      let x = (e) => {
        let { successCallback: t, errorCallback: a } = e;
        navigator.geolocation.getCurrentPosition(t, a, { enableHighAccuracy: !0 });
      };
      var m = a(1799);
      let f = () => {
        let { setWeather: e } = (0, m.I)(),
          { user: t } = (0, c.a)(),
          a = (0, s.useCallback)(
            async (t) => {
              try {
                let { coords: a } = t,
                  { data: n } = await u.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(a.latitude, '&lon=')
                      .concat(a.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!n.main) return;
                let s = { lowestTemperature: n.main.temp_min, highestTemperature: n.main.temp_max };
                e(s);
              } catch (e) {}
            },
            [e],
          ),
          n = (0, s.useCallback)(async () => {}, []);
        return (
          (0, s.useEffect)(() => {
            t && x({ successCallback: a, errorCallback: n }),
              setInterval(() => {
                x({ successCallback: a, errorCallback: n });
              }, 36e5);
          }, [n, a, t]),
          { getCurrentLocationWeather: a }
        );
      };
      var p = a(7999),
        h = a(346);
      let b = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
        }),
        v = () => (0, s.useContext)(b);
      var g = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: u, setRData: x, setCData: m, setScreenData: v } = (0, r.h)(),
          { fetchChatHistory: g, fetchRecentChats: w } = (0, p.L)(),
          [y, j] = (0, s.useState)([]),
          { user: k } = (0, c.a)(),
          { logoutUser: _ } = (0, h.a)();
        f();
        let N = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/personal_data_consents_rewards'),
                t = (0, o.uR)({ tableName: d.me.PData, data: e.data });
              a(t);
            } catch (a) {
              var e, t;
              a instanceof l.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                _();
            }
          }, [a, _, k]),
          C = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/user_consents_rewards'),
                t = (0, o.uR)({ tableName: d.me.RData, data: e.data }),
                a = (0, o.uR)({ tableName: d.me.CData, data: e.data });
              x(t), m(a);
            } catch (a) {
              var e, t;
              a instanceof l.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                _();
            }
          }, [x, m, _, k]),
          P = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/user_personal_data/last_five'),
                t = (0, o.uR)({ tableName: d.me.GData, data: e });
              if (0 === e.length) return;
              let a = (0, o.Yn)(e);
              j(a), u(t);
            } catch (a) {
              var e, t;
              a instanceof l.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                _();
            }
          }, [u, _, k]),
          I = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/file-data/'),
                t = (0, o.Xe)(e.data);
              v(t);
            } catch (a) {
              var e, t;
              a instanceof l.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                _();
            }
          }, [v, _, k]),
          T = (0, s.useCallback)(() => {
            N(), P(), g(), w(), C(), I();
          }, [N, P, C, g, I, w]),
          D = (0, s.useMemo)(
            () => ({ gTableColumns: y, getAllConsentData: C, updateMyGData: P, getAllPersonalData: N }),
            [y, C, P, N],
          );
        return (
          (0, s.useEffect)(() => {
            k && T();
          }, [k, T]),
          (0, n.jsx)(b.Provider, { value: D, children: t })
        );
      };
    },
    764: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return o;
        },
        F: function () {
          return c;
        },
      });
      var n = a(7437),
        s = a(2265),
        l = a(7350);
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
          [a, c] = (0, s.useState)(r()),
          o = (0, s.useMemo)(() => ({ theme: a, setTheme: c }), [a]),
          d = (e) => {
            let t = window.document.documentElement,
              a = e === l.Q2.DARK;
            t.classList.remove(a ? l.Q2.LIGHT : l.Q2.DARK),
              t.classList.add(e),
              localStorage.setItem('current-theme', e);
          };
        return (
          (0, s.useEffect)(() => {
            d(a);
          }, [a]),
          (0, n.jsx)(i.Provider, { value: o, children: t })
        );
      };
    },
    5888: function (e, t, a) {
      'use strict';
      a.d(t, {
        h: function () {
          return i;
        },
      });
      var n = a(3198),
        s = a(2265),
        l = a(5531),
        r = a(859);
      let i = () => {
        let { personalData: e, gData: t, rData: a, cData: i, screenData: c } = (0, n.v9)((e) => e.my_g_data),
          o = (0, l.TL)(),
          d = (0, s.useCallback)(
            (e) => {
              o((0, r.O$)(e));
            },
            [o],
          ),
          u = (0, s.useCallback)(
            (e) => {
              o((0, r.Pn)(e));
            },
            [o],
          ),
          x = (0, s.useCallback)(
            (e) => {
              o((0, r.Jg)(e));
            },
            [o],
          ),
          m = (0, s.useCallback)(
            (e) => {
              o((0, r.py)(e));
            },
            [o],
          ),
          f = (0, s.useCallback)(
            (e) => {
              o((0, r.Y4)(e));
            },
            [o],
          );
        return {
          setPersonalData: d,
          setGData: u,
          setRData: x,
          setCData: m,
          setScreenData: f,
          screenData: c,
          cData: i,
          rData: a,
          personalData: e,
          gData: t,
        };
      };
    },
    1799: function (e, t, a) {
      'use strict';
      a.d(t, {
        I: function () {
          return i;
        },
      });
      var n = a(3198),
        s = a(2265),
        l = a(5531),
        r = a(54);
      let i = () => {
        let { weather: e } = (0, n.v9)((e) => e.weather),
          t = (0, l.TL)(),
          a = (0, s.useCallback)(
            (e) => {
              t((0, r._)(e));
            },
            [t],
          );
        return { weather: e, setWeather: a };
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
    e.O(0, [986, 139, 16, 396, 707, 292, 971, 596, 744], function () {
      return e((e.s = 9194));
    }),
      (_N_E = e.O());
  },
]);
