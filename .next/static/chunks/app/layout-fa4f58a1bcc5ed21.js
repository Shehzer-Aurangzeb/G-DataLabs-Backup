(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9194: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 306)),
        Promise.resolve().then(a.bind(a, 7389)),
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
            return i;
          },
        });
      var n = a(7437);
      a(2265);
      var s = a(3198),
        l = a(5531),
        r = a(764),
        c = a(289);
      function i(e) {
        let { children: t } = e;
        return (0, n.jsx)(s.zt, {
          store: l.ZP,
          children: (0, n.jsx)(c.Z, { children: (0, n.jsx)(r.Z, { children: t }) }),
        });
      }
    },
    7389: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var n = a(7437),
        s = a(2265),
        l = a(4033),
        r = a(6548),
        c = function (e) {
          let { children: t } = e;
          return (0, n.jsx)('div', { className: 'h-screen w-screen', children: t });
        },
        i = a(910),
        o = a(1419);
      let d = {
          DARK: ['#907CB4', '#F5B11A', '#A1BF8C', '#046C98', '#EA6D24'],
          LIGHT: ['#EE3E2E', '#3B7BBE', '#EFDCB1', '#DDAF40', '#E9CB84'],
        },
        u = [
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
      var x = a(9907),
        f = a(1846),
        p = a(346),
        h = a(3198),
        b = a(5531),
        y = a(8421);
      let g = () => {
        let { isOpen: e } = (0, h.v9)((e) => e.sidebar),
          t = (0, b.TL)(),
          a = (0, s.useCallback)(
            (e) => {
              t((0, y.H)(e));
            },
            [t],
          );
        return { isOpen: e, setIsOpen: a };
      };
      var v = a(6691),
        k = a.n(v),
        w = a(1396),
        j = a.n(w),
        _ = a(764),
        C = a(7350),
        N = function () {
          let { theme: e } = (0, _.F)();
          return (0, n.jsxs)(j(), {
            href: r.y.HOME,
            className: 'flex flex-row gap-x-3 items-center',
            children: [
              (0, n.jsx)('div', {
                className: 'relative w-[50px] h-[50px] laptop:w-[40px] laptop:h-[40px]',
                children: (0, n.jsx)(k(), {
                  src: e === C.Q2.LIGHT ? o.jY : o.J2,
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
        D = a(3427),
        A = function (e) {
          let { items: t } = e,
            { theme: a } = (0, _.F)(),
            s = (0, l.usePathname)();
          return (0, n.jsx)('ul', {
            className: 'max-w-sidebarItem w-4/5 flex flex-col gap-y-4',
            children: t.map((e) =>
              (0, n.jsxs)(
                'li',
                {
                  children: [
                    (0, n.jsxs)(j(), {
                      href: e.to,
                      className:
                        'flex flex-row items-center gap-x-3 py-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                          s === e.to ? 'bg-active dark:bg-[#888888]' : 'bg-transparent',
                        ),
                      children: [
                        (0, n.jsx)(D.Z, {
                          src: a === C.Q2.DARK && e.icon_dark ? e.icon_dark : e.icon,
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
                        children: e.nestedItems.map((e, t) =>
                          (0, n.jsx)(
                            'li',
                            {
                              children: (0, n.jsxs)(j(), {
                                href: e.to,
                                className:
                                  'flex flex-row items-center gap-x-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                                    s === e.to ? 'bg-active  dark:bg-chat py-3' : 'bg-transparent',
                                  ),
                                children: [
                                  (0, n.jsx)('span', {
                                    className: 'w-[30px] inline-block transition-all duration-200 '.concat(
                                      s === e.to ? 'h-[13px]' : 'h-[6px]',
                                    ),
                                    style: { backgroundColor: a === C.Q2.DARK ? d.DARK[t] : d.LIGHT[t] },
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
        E = function (e) {
          let { className: t = '' } = e,
            { theme: a, setTheme: l } = (0, _.F)(),
            [r, c] = (0, s.useState)(a !== C.Q2.DARK);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('input', {
                type: 'checkbox',
                id: 'switch',
                className: 'hidden',
                onChange: () => {
                  r ? l(C.Q2.DARK) : l(C.Q2.LIGHT), c(!r);
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
                        (0, n.jsx)(D.Z, {
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
                        (0, n.jsx)(D.Z, {
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
        P = a(1515),
        R = function (e) {
          let { logoutUser: t, user: a } = e;
          return (0, n.jsxs)('div', {
            className:
              'mb-2 bg-gray flex flex-row items-center w-full pl-4 pr-6 py-3 rounded-md gap-x-4 dark:bg-darkActive',
            children: [
              (0, n.jsx)(D.Z, {
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
                    children: (0, P.kC)(''.concat(a.firstName, ' ').concat(a.lastName)),
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
                children: (0, n.jsx)(D.Z, { src: o.kS, alt: 'logout', className: 'w-[35px] h-[35px]' }),
              }),
            ],
          });
        },
        T = a(1839),
        I = function () {
          let { width: e } = (0, x.i)(),
            { isOpen: t, setIsOpen: a } = g(),
            c = (0, s.useRef)(null),
            d = (0, l.usePathname)(),
            { isAuthenticated: h, logoutUser: b, user: y } = (0, p.a)();
          (0, f.O)(c, () => {
            a(!1);
          });
          let v = (0, s.useMemo)(
            () =>
              h && y
                ? y.accountType === i.Z8.COMPANY
                  ? m.map((e) =>
                      e.to === r.y.MYGDATA && e.nestedItems
                        ? { ...e, nestedItems: [...e.nestedItems, { title: 'Company', icon: '', to: r.y.COMPANY }] }
                        : e,
                    )
                  : m
                : u,
            [h, y],
          );
          return (
            (0, s.useEffect)(() => {
              a(!1);
            }, [d, a]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                e < 1280 &&
                  (0, n.jsx)('div', {
                    className: 'h-[calc(100vh_-_2.5rem)] bg-main dark:bg-transparent relative w-[50px]',
                    children: (0, n.jsx)(T.Z, {
                      className:
                        'absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => a(!t),
                      type: 'button',
                      src: o.rc,
                    }),
                  }),
                (0, n.jsxs)('aside', {
                  ref: c,
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
                    (0, n.jsx)(N, {}),
                    e < 1280 &&
                      (0, n.jsx)(T.Z, {
                        className:
                          'z-10 absolute top-3 right-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                        onClick: () => a(!t),
                        type: 'button',
                        src: o.rc,
                      }),
                    (0, n.jsx)(A, { items: v }),
                    (0, n.jsxs)('div', {
                      className: 'max-w-sidebarItem w-full',
                      children: [h && y && (0, n.jsx)(R, { logoutUser: b, user: y }), (0, n.jsx)(E, {})],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        L = function (e) {
          let { children: t } = e;
          return (0, n.jsxs)('div', {
            className: 'h-screen w-screen flex dark:bg-[#b6b6b5] flex-row py-5 pr-5',
            children: [(0, n.jsx)(I, {}), t],
          });
        },
        S = function (e) {
          let { children: t } = e,
            a = (0, l.usePathname)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              ' ',
              a === r.y.COOKIEPOLICY || a === r.y.PRIVACY || a === r.y.TERMS
                ? (0, n.jsx)(c, { children: t })
                : (0, n.jsx)(L, { children: t }),
            ],
          });
        };
    },
    289: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return v;
        },
        q: function () {
          return g;
        },
      });
      var n = a(7437),
        s = a(2265),
        l = a(2164),
        r = a(5888),
        c = a(6171),
        i = a(6118),
        o = a(1515),
        d = a(7350),
        u = a(9222);
      let m = (e) => {
        let { successCallback: t, errorCallback: a } = e;
        navigator.geolocation.getCurrentPosition(t, a, { enableHighAccuracy: !0 });
      };
      var x = a(1799);
      let f = () => {
        let { setWeather: e } = (0, x.I)(),
          { user: t } = (0, i.a)(),
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
            t && m({ successCallback: a, errorCallback: n }),
              setInterval(() => {
                m({ successCallback: a, errorCallback: n });
              }, 36e5);
          }, [n, a, t]),
          { getCurrentLocationWeather: a }
        );
      };
      var p = a(4683),
        h = a(346),
        b = a(910);
      let y = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        g = () => (0, s.useContext)(y);
      var v = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: u, setRData: m, setCData: x, setScreenData: g, setCompData: v } = (0, r.h)(),
          { fetchChatHistory: k, fetchRecentChats: w } = (0, p.L)(),
          [j, _] = (0, s.useState)([]),
          { user: C } = (0, i.a)(),
          { logoutUser: N } = (0, h.a)();
        f();
        let D = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await c.h.get('api/personal_data_consents_rewards'),
                t = (0, o.uR)({ tableName: d.me.PData, data: e.data });
              a(t);
            } catch (a) {
              var e, t;
              a instanceof l.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                N();
            }
          }, [a, N, C]),
          A = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await c.h.get('api/user_consents_rewards'),
                t = (0, o.uR)({ tableName: d.me.RData, data: e.data });
              m(t);
              let a = (0, o.uR)({ tableName: d.me.CData, data: e.data });
              x(a);
            } catch (e) {}
          }, [m, x]),
          E = (0, s.useCallback)(async () => {
            try {
              if (!C || !C.accountType || C.accountType === b.Z8.PERSONAL) return;
              let { data: e } = await c.h.get('api/company_consents_rewards'),
                t = (0, o.uR)({ tableName: d.me.CompData, data: e.data });
              v(t);
            } catch (e) {}
          }, [v, C]),
          P = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await c.h.get('api/user_personal_data/last_five'),
                t = (0, o.uR)({ tableName: d.me.GData, data: e });
              if (0 === e.length) return;
              let a = (0, o.Yn)(e);
              _(a), u(t);
            } catch (e) {}
          }, [u]),
          R = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await c.h.get('api/file-data/'),
                t = (0, o.Xe)(e.data);
              g(t);
            } catch (e) {}
          }, [g]),
          T = (0, s.useCallback)(() => {
            D(), P(), k(), w(), A(), R(), E();
          }, [D, P, A, k, R, w, E]),
          I = (0, s.useMemo)(
            () => ({
              gTableColumns: j,
              getAllConsentData: A,
              updateMyGData: P,
              getAllPersonalData: D,
              getAllCompanyConsentData: E,
            }),
            [j, A, P, D, E],
          );
        return (
          (0, s.useEffect)(() => {
            C && T();
          }, [C, T]),
          (0, n.jsx)(y.Provider, { value: I, children: t })
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
          return i;
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
        c = (0, s.createContext)({ theme: l.Q2.LIGHT, setTheme: () => {} }),
        i = () => (0, s.useContext)(c);
      var o = function (e) {
        let { children: t } = e,
          [a, i] = (0, s.useState)(r()),
          o = (0, s.useMemo)(() => ({ theme: a, setTheme: i }), [a]),
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
          (0, n.jsx)(c.Provider, { value: o, children: t })
        );
      };
    },
    4683: function (e, t, a) {
      'use strict';
      a.d(t, {
        L: function () {
          return m;
        },
      });
      var n = a(2265),
        s = a(171),
        l = a(2164),
        r = a(6171),
        c = a(7445),
        i = a(7152),
        o = a(1515),
        d = a(6118);
      let u = (e, t) => {
          let a;
          for (let [, n] of Object.entries(e))
            for (let e of n)
              if (e.id === t) {
                a = e;
                break;
              }
          return a;
        },
        m = () => {
          let { isLoading: e, setIsLoading: t } = (0, c.r)(),
            {
              chats: a,
              userPrompt: m,
              setUserPrompt: x,
              setChats: f,
              resetUserPrompt: p,
              updateChat: h,
              recentChatHistory: b,
              startNewChat: y,
              openPreviousChats: g,
              activeChatID: v,
              setActiveChatID: k,
              setChatHistory: w,
              setRecentChatHistory: j,
            } = (0, i.P)(),
            { user: _ } = (0, d.a)(),
            C = (0, n.useCallback)(async () => {
              try {
                let { data: e } = await r.h.get('api/chat/'),
                  t = (0, o.Cf)(e.data),
                  a = (0, o.py)(t);
                if (!a || (j(a), !v)) return;
                let n = u(a, v);
                if (!n) return;
                g(n);
              } catch (e) {}
            }, [j, g, v]),
            N = (0, n.useCallback)(async () => {
              try {
                let { data: e } = await r.h.get('api/history/'),
                  t = (0, o.ef)(e.data);
                w(t);
              } catch (e) {}
            }, [w]),
            D = (0, n.useCallback)(
              async (e) => {
                try {
                  let { data: t } = await r.h.post('api/chat/', { name: e });
                  return t.data.id && k(t.data.id), t.data.id;
                } catch (e) {
                  return e;
                }
              },
              [k],
            ),
            A = (0, n.useCallback)(
              async (e) => {
                let { responseId: t, feedback: a } = e;
                try {
                  let { data: e } = await r.h.post('choice/'.concat(t), { data: a });
                  if (!e.response) return;
                  'success' === e.response && s.toast.success('Feedback provided'), C(), N();
                } catch (e) {}
              },
              [C, N],
            ),
            E = (0, n.useCallback)(async () => {
              var e, a;
              try {
                let a = (0, o.P4)({ isBotResponse: !1, isLoading: !1, text: m.data, images: [] }),
                  n = (0, o.P4)({ isBotResponse: !0, isLoading: !0, text: '', images: [] });
                f(a), f(n), t(!0), p();
                let s = v;
                _ && !s && (s = await D(m.data));
                let l = _ ? { ...m, chat_id: s } : m,
                  { data: c } = await r.h.post('get-answer-images', l),
                  i = [],
                  d = '';
                c.images && (i = c.images.map((e) => e)),
                  (null === (e = c.response) || void 0 === e ? void 0 : e.length) && (d = c.response),
                  h({ ...n, isLoading: !1, content: { text: d, images: i } }, c.id),
                  _ && (C(), N());
              } catch (e) {
                console.log('e', e),
                  e instanceof l.d7
                    ? s.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                    : s.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            }, [t, m, f, p, h, _, v, D, N, C]);
          return {
            fetchBotResponse: E,
            isLoading: e,
            chats: a,
            userPrompt: m,
            setUserPrompt: x,
            recentChatHistory: b,
            startNewChat: y,
            openPreviousChats: g,
            fetchChatHistory: N,
            fetchRecentChats: C,
            provideResponseFeedback: A,
          };
        };
    },
    5888: function (e, t, a) {
      'use strict';
      a.d(t, {
        h: function () {
          return c;
        },
      });
      var n = a(3198),
        s = a(2265),
        l = a(5531),
        r = a(859);
      let c = () => {
        let {
            personalData: e,
            gData: t,
            rData: a,
            cData: c,
            screenData: i,
            compData: o,
          } = (0, n.v9)((e) => e.my_g_data),
          d = (0, l.TL)(),
          u = (0, s.useCallback)(
            (e) => {
              d((0, r.O$)(e));
            },
            [d],
          ),
          m = (0, s.useCallback)(
            (e) => {
              d((0, r.Pn)(e));
            },
            [d],
          ),
          x = (0, s.useCallback)(
            (e) => {
              d((0, r.Jg)(e));
            },
            [d],
          ),
          f = (0, s.useCallback)(
            (e) => {
              d((0, r.py)(e));
            },
            [d],
          ),
          p = (0, s.useCallback)(
            (e) => {
              d((0, r.UD)(e));
            },
            [d],
          ),
          h = (0, s.useCallback)(
            (e) => {
              d((0, r.Y4)(e));
            },
            [d],
          );
        return {
          setPersonalData: u,
          setGData: m,
          setRData: x,
          setCData: f,
          setScreenData: h,
          setCompData: p,
          screenData: i,
          cData: c,
          rData: a,
          personalData: e,
          gData: t,
          compData: o,
        };
      };
    },
    1799: function (e, t, a) {
      'use strict';
      a.d(t, {
        I: function () {
          return c;
        },
      });
      var n = a(3198),
        s = a(2265),
        l = a(5531),
        r = a(54);
      let c = () => {
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
    e.O(0, [986, 139, 16, 396, 254, 100, 971, 596, 744], function () {
      return e((e.s = 9194));
    }),
      (_N_E = e.O());
  },
]);
