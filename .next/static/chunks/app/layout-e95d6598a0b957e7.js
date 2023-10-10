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
            return o;
          },
        });
      var s = a(7437);
      a(2265);
      var r = a(3198),
        n = a(5531),
        l = a(764),
        i = a(289);
      function o(e) {
        let { children: t } = e;
        return (0, s.jsx)(r.zt, {
          store: n.ZP,
          children: (0, s.jsx)(i.Z, { children: (0, s.jsx)(l.Z, { children: t }) }),
        });
      }
    },
    4193: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return O;
          },
        });
      var s = a(7437),
        r = a(2265),
        n = a(4033),
        l = a(9611),
        i = function (e) {
          let { children: t } = e;
          return (0, s.jsx)('div', { className: 'h-screen w-screen', children: t });
        },
        o = a(9907),
        c = a(6791),
        d = a(1846),
        u = a(346),
        x = a(3198),
        m = a(5531),
        f = a(8421);
      let h = () => {
        let { isOpen: e } = (0, x.v9)((e) => e.sidebar),
          t = (0, m.TL)(),
          a = (0, r.useCallback)(
            (e) => {
              t((0, f.H)(e));
            },
            [t],
          );
        return { isOpen: e, setIsOpen: a };
      };
      var p = a(6691),
        b = a.n(p),
        w = a(1396),
        g = a.n(w),
        y = a(3808),
        v = function () {
          return (0, s.jsxs)(g(), {
            href: l.yy.HOME,
            className: 'flex flex-row gap-x-3 items-center',
            children: [
              (0, s.jsx)('div', {
                className: 'relative w-[72px] h-[72px] laptop:w-[60px] laptop:h-[60px]',
                children: (0, s.jsx)(b(), { src: y.Z, alt: 'logo', fill: !0, className: 'object-contain ' }),
              }),
              (0, s.jsx)('h3', {
                className: 'text-main font-sans laptop:text-2xl text-3xl font-bold dark:text-primary',
                children: 'G-DataLabs',
              }),
            ],
          });
        },
        j = a(3427),
        N = function (e) {
          let { items: t } = e,
            a = (0, n.usePathname)();
          return (0, s.jsx)('ul', {
            className: 'max-w-sidebarItem w-4/5 flex flex-col gap-y-4',
            children: t.map((e) =>
              (0, s.jsxs)(
                'li',
                {
                  children: [
                    (0, s.jsxs)(g(), {
                      href: e.to,
                      className:
                        'flex flex-row items-center gap-x-3 py-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                          a === e.to ? 'bg-active dark:bg-[#888888]' : 'bg-transparent',
                        ),
                      children: [
                        (0, s.jsx)(j.Z, { src: e.icon, alt: 'icon', className: 'w-[30px] h-[30px]' }),
                        (0, s.jsx)('span', {
                          className: 'font-sans text-main dark:text-primary text-xl font-medium',
                          children: e.title,
                        }),
                      ],
                    }),
                    e.nestedItems &&
                      (0, s.jsx)('ul', {
                        className: 'flex flex-col gap-y-[18px] ml-10 mt-5',
                        children: e.nestedItems.map((e) =>
                          (0, s.jsx)(
                            'li',
                            {
                              children: (0, s.jsxs)(g(), {
                                href: e.to,
                                className:
                                  'flex flex-row items-center gap-x-3 px-4 transition-all duration-200 w-full rounded-xl '.concat(
                                    a === e.to ? 'bg-active  dark:bg-chat py-3' : 'bg-transparent',
                                  ),
                                children: [
                                  (0, s.jsx)('span', {
                                    className: 'w-[30px] inline-block transition-all duration-200 bg-yellow '.concat(
                                      a === e.to ? 'h-[13px]' : 'h-[6px]',
                                    ),
                                  }),
                                  (0, s.jsx)('span', {
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
        _ = a(764),
        k = a(7350),
        C = function (e) {
          let { className: t = '' } = e,
            { theme: a, setTheme: n } = (0, _.F)(),
            [l, i] = (0, r.useState)(a !== k.Q2.DARK);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('input', {
                type: 'checkbox',
                id: 'switch',
                className: 'hidden',
                onChange: () => {
                  l ? n(k.Q2.DARK) : n(k.Q2.LIGHT), i(!l);
                },
              }),
              (0, s.jsx)('div', {
                className: ['bg-gray rounded-md py-3 px-4 w-full ] dark:bg-[#888888]', t].join(' '),
                children: (0, s.jsxs)('label', {
                  htmlFor: 'switch',
                  className: 'flex gap-x-3 items-center cursor-pointer justify-center',
                  children: [
                    (0, s.jsxs)('div', {
                      className:
                        'flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 '.concat(
                          l ? 'bg-dark dark:bg-darkActive' : 'bg-transparent',
                          ' ',
                        ),
                      children: [
                        (0, s.jsx)(j.Z, {
                          src: l ? c.T7 : c.LI,
                          alt: 'light-bulb-icon',
                          className: 'h-5 w-4 dark:invert-1',
                        }),
                        (0, s.jsx)('span', {
                          className: 'font-sans font-bold text-base dark:text-white '.concat(
                            l ? 'text-active ' : 'text-inactive ',
                          ),
                          children: 'Light',
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className:
                        'flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 '.concat(
                          l ? 'bg-transparent' : 'bg-dark dark:bg-darkActive',
                          ' ',
                        ),
                      children: [
                        (0, s.jsx)(j.Z, {
                          src: l ? c.LI : c.T7,
                          alt: 'light-bulb-icon',
                          className: 'h-5 w-5 dark:invert-1',
                        }),
                        (0, s.jsx)('span', {
                          className: 'font-sans font-bold text-base  '.concat(
                            l ? 'text-inactive dark:text-white' : 'text-active dark:text-white',
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
        I = a(1515),
        S = function (e) {
          let { logoutUser: t, user: a } = e;
          return (0, s.jsxs)('div', {
            className:
              'mb-2 bg-gray flex flex-row items-center w-full pl-4 pr-6 py-3 rounded-md gap-x-4 dark:bg-darkActive',
            children: [
              (0, s.jsx)(j.Z, {
                src: a.image,
                alt: 'profile',
                className: 'w-[50px] h-[50px] rounded-full',
                rounded: !0,
              }),
              (0, s.jsxs)('div', {
                className: 'flex flex-col flex-1',
                children: [
                  (0, s.jsx)('h3', {
                    className: 'font-sans font-bold text-xl text-active  leading-6  max-w-[140px] truncate',
                    children: (0, I.kC)(''.concat(a.firstName, ' ').concat(a.lastName)),
                  }),
                  (0, s.jsx)('p', {
                    className: 'font-sans font-normal text-active text-base max-w-[140px] truncate',
                    children: a.email,
                  }),
                ],
              }),
              (0, s.jsx)('button', {
                type: 'submit',
                className: 'bg-transparent focus:outline-none focus:shadow-none',
                onClick: t,
                children: (0, s.jsx)(j.Z, { src: c.kS, alt: 'logout', className: 'w-[35px] h-[35px]' }),
              }),
            ],
          });
        },
        P = a(1839),
        L = function () {
          let { width: e } = (0, o.i)(),
            { isOpen: t, setIsOpen: a } = h(),
            i = (0, r.useRef)(null),
            x = (0, n.usePathname)(),
            { isAuthenticated: m, logoutUser: f, user: p } = (0, u.a)();
          return (
            (0, d.O)(i, () => {
              a(!1);
            }),
            (0, r.useEffect)(() => {
              a(!1);
            }, [x, a]),
            (0, s.jsxs)(s.Fragment, {
              children: [
                e < 1280 &&
                  (0, s.jsx)('div', {
                    className: 'h-[calc(100vh_-_2.5rem)] bg-main dark:bg-transparent relative w-[50px]',
                    children: (0, s.jsx)(P.Z, {
                      className: 'absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => a(!t),
                      type: 'button',
                      src: c.rc,
                    }),
                  }),
                (0, s.jsxs)('aside', {
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
                    (0, s.jsx)(v, {}),
                    e < 1280 &&
                      (0, s.jsx)(P.Z, {
                        className: 'z-10 absolute top-3 right-2 flex items-center justify-center w-[30px] h-[30px]',
                        onClick: () => a(!t),
                        type: 'button',
                        src: c.rc,
                      }),
                    (0, s.jsx)(N, { items: m ? l.a3 : l.x1 }),
                    (0, s.jsxs)('div', {
                      className: 'max-w-sidebarItem w-full',
                      children: [m && p && (0, s.jsx)(S, { logoutUser: f, user: p }), (0, s.jsx)(C, {})],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        R = function (e) {
          let { children: t } = e;
          return (0, s.jsxs)('div', {
            className: 'h-screen w-screen flex dark:bg-[#b6b6b5] flex-row py-5 pr-5',
            children: [(0, s.jsx)(L, {}), t],
          });
        },
        O = function (e) {
          let { children: t } = e,
            a = (0, n.usePathname)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              ' ',
              a === l.yy.COOKIEPOLICY || a === l.yy.PRIVACY || a === l.yy.TERMS
                ? (0, s.jsx)(i, { children: t })
                : (0, s.jsx)(R, { children: t }),
            ],
          });
        };
    },
    764: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return c;
        },
        F: function () {
          return o;
        },
      });
      var s = a(7437),
        r = a(2265),
        n = a(7350);
      let l = () => {
          if (window.localStorage) {
            let e = window.localStorage.getItem('current-theme');
            if ('string' == typeof e) return e;
          }
          return n.Q2.LIGHT;
        },
        i = (0, r.createContext)({ theme: n.Q2.LIGHT, setTheme: () => {} }),
        o = () => (0, r.useContext)(i);
      var c = function (e) {
        let { children: t } = e,
          [a, o] = (0, r.useState)(l()),
          c = (0, r.useMemo)(() => ({ theme: a, setTheme: o }), [a]),
          d = (e) => {
            let t = window.document.documentElement,
              a = e === n.Q2.DARK;
            t.classList.remove(a ? n.Q2.LIGHT : n.Q2.DARK),
              t.classList.add(e),
              localStorage.setItem('current-theme', e);
          };
        return (
          (0, r.useEffect)(() => {
            d(a);
          }, [a]),
          (0, s.jsx)(i.Provider, { value: c, children: t })
        );
      };
    },
    346: function (e, t, a) {
      'use strict';
      a.d(t, {
        a: function () {
          return m;
        },
      });
      var s = a(2265),
        r = a(4033),
        n = a(171),
        l = a(2164),
        i = a(6171),
        o = a(7445),
        c = a(6118),
        d = a(9611),
        u = a(1515),
        x = a(7152);
      let m = () => {
        let { isLoading: e, setIsLoading: t } = (0, o.r)(),
          { setUser: a, isAuthenticated: m, user: f } = (0, c.a)(),
          { deleteChats: h } = (0, x.P)(),
          p = (0, r.useRouter)(),
          b = (0, s.useCallback)(async (e) => {
            let { data: t } = await i.h.get('api/user_profile/1/', { headers: { Authorization: 'Bearer '.concat(e) } }),
              { email: a, first_name: s, last_name: r, phone_number: n, total_rewards: l, username: o, id: c } = t.data,
              { profile_picture_url: d } = t.data;
            d || (d = (0, u.El)(s));
            let x = {
              email: a,
              firstName: s,
              lastName: r,
              id: c,
              username: o,
              image: d,
              phoneNumber: n,
              totalRewards: l,
              key: '',
            };
            return x;
          }, []),
          w = (0, s.useCallback)(
            async (e) => {
              var s, r;
              try {
                t(!0);
                let { data: r } = await i.h.post('login_api', e),
                  l = await b(r.access_token),
                  o = {
                    ...l,
                    totalRewards: null !== (s = l.totalRewards) && void 0 !== s ? s : 0,
                    key: r.access_token,
                  };
                a({ user: o, isAuthenticated: !0 }), p.replace(d.yy.HOME), n.toast.success('Welcome to G-Data Labs');
              } catch (e) {
                e instanceof l.d7
                  ? n.toast.error(null === (r = e.response) || void 0 === r ? void 0 : r.data.error)
                  : n.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, p, b],
          ),
          g = (0, s.useCallback)(
            async (e) => {
              var s;
              try {
                t(!0);
                let s = new FormData();
                for (let [t, a] of Object.entries(e)) s.append(t, a);
                let { data: r } = await i.h.patch('api/user_profile/1/', s),
                  { profile_picture_url: l } = r.data;
                l || (l = (0, u.El)(r.data.first_name));
                let o = {
                  firstName: r.data.first_name,
                  lastName: r.data.last_name,
                  phoneNumber: r.data.phone_number,
                  totalRewards: r.data.total_rewards,
                  email: r.data.email,
                  image: l,
                  username: r.data.username,
                  id: r.data.id,
                  key: null == f ? void 0 : f.key,
                };
                a({ user: o, isAuthenticated: !0 }), n.toast.success('Personal information updated successfully');
              } catch (e) {
                e instanceof l.d7
                  ? n.toast.error(null === (s = e.response) || void 0 === s ? void 0 : s.data.error)
                  : n.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, f],
          ),
          y = (0, s.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await i.h.post('signup_api', e);
                if (a.error) {
                  n.toast.error(a.error);
                  return;
                }
                n.toast.success('Your account has been successfully created'), p.replace(d.yy.LOGIN);
              } catch (e) {
                n.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            },
            [t, p],
          ),
          v = (0, s.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await i.h.post('api/user/reset_password_email', e);
                n.toast.success(a.message), p.push(d.yy.CONFIRMPASSWORD);
              } catch (e) {
                var a;
                e instanceof l.d7
                  ? n.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : n.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, p],
          ),
          j = (0, s.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await i.h.post('api/user/reset_token_confirm', e);
                n.toast.success(a.message), p.push(d.yy.LOGIN);
              } catch (e) {
                var a;
                e instanceof l.d7
                  ? n.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : n.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, p],
          ),
          N = (0, s.useCallback)(() => {
            a({ user: void 0, isAuthenticated: !1 }), h(), n.toast.success('Logout Successful.'), p.replace(d.yy.LOGIN);
          }, [a, p, h]);
        return {
          loginUser: w,
          logoutUser: N,
          isLoading: e,
          registerUser: y,
          isAuthenticated: m,
          user: f,
          updateUser: g,
          resetPassword: v,
          confirmPassword: j,
        };
      };
    },
    8202: function () {},
    6518: function () {},
    5610: function () {},
    3808: function (e, t) {
      'use strict';
      t.Z = { src: '/_next/static/media/logo.0e5f45b2.svg', height: 72, width: 72, blurWidth: 0, blurHeight: 0 };
    },
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
    e.O(0, [986, 139, 638, 251, 442, 289, 971, 596, 744], function () {
      return e((e.s = 9194));
    }),
      (_N_E = e.O());
  },
]);
