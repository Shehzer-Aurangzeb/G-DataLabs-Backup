(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [760],
  {
    3392: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 3300));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        s = a(2265),
        n = a(9907),
        r = a(6791),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, n.i)(),
          [u, d] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        return (
          (0, o.O)(p, () => {
            d(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: p,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(u ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, l.jsx)(i.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => d(!u),
                      type: 'button',
                      src: r.tp,
                    }),
                  t,
                ],
              }),
            ],
          })
        );
      };
    },
    4118: function (e, t, a) {
      'use strict';
      var l = a(7437),
        s = a(2265),
        n = a(3427),
        r = a(6791);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: o } = e,
          i = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            o && i && i.current && i.current.parentElement && i.current.parentElement.classList.add('relative');
          }, [o]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !o && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: i,
            children: [
              (0, l.jsx)(n.Z, {
                src: null != a ? a : r.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, l.jsx)('p', {
                className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
                children: null != t ? t : 'No data to display',
              }),
            ],
          })
        );
      };
    },
    3739: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var s = a(6791),
        n = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(n.Z, {
              src: t && !r ? s.Xv : s.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, l.jsx)(n.Z, {
              src: t || r ? s.QM : s.JE,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t && !r && a();
              },
            }),
          ],
        });
      };
    },
    3300: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(9611),
        r = a(6571),
        o = a(4118),
        i = a(4010),
        c = a(3739),
        u = a(1515),
        d = a(3427),
        p = a(6791),
        m = function (e) {
          let { readOnly: t, name: a, onChange: s, value: n } = e;
          return (0, l.jsxs)('div', {
            className: 'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            children: [
              (0, l.jsx)('span', {
                className: 'absolute top-[23%] '.concat(
                  t ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]',
                  ' text-white font-sans text-xl font-medium',
                ),
                children: '$',
              }),
              (0, l.jsx)('input', {
                autoComplete: 'off',
                onChange: s,
                name: a,
                readOnly: t,
                id: a,
                type: 'number',
                value: n,
                className:
                  'bg-chat dark:bg-darkChat py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]',
              }),
              !t &&
                (0, l.jsx)('label', {
                  htmlFor: a,
                  className: 'cursor-pointer',
                  children: (0, l.jsx)(d.Z, { src: p.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px]' }),
                }),
            ],
          });
        },
        f = function (e) {
          let { columns: t, data: a, updateConsentRewards: n } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: d,
              rows: p,
              prepareRow: f,
            } = (0, i.useTable)({ columns: t, data: a }),
            [x, h] = (0, s.useState)((0, u.O5)(a)),
            [b, v] = (0, s.useState)(''),
            w = (e) => {
              let { value: t, id: a } = e.target;
              h((e) => ({ ...e, [a]: { ...e[a], demanded_reward_value: Number(Number(t).toFixed(3)) } })), v(a);
            },
            g = (0, s.useCallback)(
              (e) => {
                let t = x[e];
                n({ id: Number(e), payload: { consents_to_sell: !t.consents_to_sell } });
              },
              [n, x],
            );
          return (
            (0, s.useEffect)(() => {
              let e = setTimeout(() => {
                b && n({ id: Number(b), payload: x[b] });
              }, 500);
              return () => clearTimeout(e);
            }, [x, b, n]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: d.map((e) =>
                    (0, l.jsx)('tr', {
                      ...e.getHeaderGroupProps(),
                      children: e.headers.map((t, a) =>
                        (0, l.jsx)('th', {
                          ...t.getHeaderProps(),
                          className:
                            'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap '.concat(
                              a === e.headers.length - 1 && 'hidden',
                            ),
                          children: t.render('Header'),
                        }),
                      ),
                    }),
                  ),
                }),
                (0, l.jsx)('tbody', {
                  ...o(),
                  children: p.map(
                    (e) => (
                      f(e),
                      (0, l.jsx)('tr', {
                        ...e.getRowProps(),
                        children: e.cells.map((t, a) => {
                          var s;
                          return (0, l.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap '.concat(
                                  a === e.cells.length - 1 && 'hidden',
                                ),
                              children: [
                                0 === a && t.render('Cell'),
                                1 === a &&
                                  (0, l.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => g(e.values.id),
                                  }),
                                2 === a &&
                                  (0, l.jsx)(m, {
                                    name: e.values.id,
                                    readOnly: !1,
                                    value:
                                      null === (s = x[e.values.id].demanded_reward_value) || void 0 === s
                                        ? void 0
                                        : s.toString(),
                                    onChange: w,
                                  }),
                                3 === a &&
                                  (0, l.jsx)(m, {
                                    name: 'OtherCompValue-'.concat(e.values.id),
                                    readOnly: !0,
                                    value: e.values.OtherCompValue,
                                  }),
                              ],
                            },
                            t.id,
                          );
                        }),
                      })
                    ),
                  ),
                }),
              ],
            })
          );
        },
        x = function () {
          let { rData: e, updateConsentRewards: t } = (0, r.T)(),
            a = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndScreen: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(n.kk, ']'),
            children: [
              Object.keys(e).length > 0 && (0, l.jsx)(f, { data: a, columns: n.f6, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(o.Z, {}),
            ],
          });
        };
    },
    289: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return w;
        },
        q: function () {
          return v;
        },
      });
      var l = a(7437),
        s = a(2265),
        n = a(2164),
        r = a(5888),
        o = a(6171),
        i = a(6118),
        c = a(1515),
        u = a(7350),
        d = a(9222);
      let p = (e) => {
        let { successCallback: t, errorCallback: a } = e;
        navigator.geolocation.getCurrentPosition(t, a, { enableHighAccuracy: !0 });
      };
      var m = a(1799);
      let f = () => {
        let { setWeather: e } = (0, m.I)(),
          { user: t } = (0, i.a)(),
          a = (0, s.useCallback)(
            async (t) => {
              try {
                let { coords: a } = t,
                  { data: l } = await d.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(a.latitude, '&lon=')
                      .concat(a.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!l.main) return;
                let s = { lowestTemperature: l.main.temp_min, highestTemperature: l.main.temp_max };
                e(s);
              } catch (e) {}
            },
            [e],
          ),
          l = (0, s.useCallback)(async () => {}, []);
        return (
          (0, s.useEffect)(() => {
            t && p({ successCallback: a, errorCallback: l }),
              setInterval(() => {
                p({ successCallback: a, errorCallback: l });
              }, 36e5);
          }, [l, a, t]),
          { getCurrentLocationWeather: a }
        );
      };
      var x = a(7999),
        h = a(346);
      let b = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
        }),
        v = () => (0, s.useContext)(b);
      var w = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: d, setRData: p, setCData: m, setScreenData: v } = (0, r.h)(),
          { fetchChatHistory: w, fetchRecentChats: g } = (0, x.L)(),
          [k, y] = (0, s.useState)([]),
          { user: C } = (0, i.a)(),
          { logoutUser: _ } = (0, h.a)();
        f();
        let j = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await o.h.get('api/personal_data_consents_rewards'),
                t = (0, c.uR)({ tableName: u.me.PData, data: e.data });
              a(t);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                _();
            }
          }, [a, _, C]),
          N = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await o.h.get('api/user_consents_rewards'),
                t = (0, c.uR)({ tableName: u.me.RData, data: e.data }),
                a = (0, c.uR)({ tableName: u.me.CData, data: e.data });
              p(t), m(a);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                _();
            }
          }, [p, m, _, C]),
          T = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await o.h.get('api/user_personal_data/last_five'),
                t = (0, c.uR)({ tableName: u.me.GData, data: e });
              if (0 === e.length) return;
              let a = (0, c.Yn)(e);
              y(a), d(t);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                _();
            }
          }, [d, _, C]),
          D = (0, s.useCallback)(async () => {
            try {
              let { data: e } = await o.h.get('api/file-data/'),
                t = (0, c.Xe)(e.data);
              v(t);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                _();
            }
          }, [v, _, C]),
          P = (0, s.useCallback)(() => {
            j(), T(), w(), g(), N(), D();
          }, [j, T, N, w, D, g]),
          O = (0, s.useMemo)(
            () => ({ gTableColumns: k, getAllConsentData: N, updateMyGData: T, getAllPersonalData: j }),
            [k, N, T, j],
          );
        return (
          (0, s.useEffect)(() => {
            C && P();
          }, [C, P]),
          (0, l.jsx)(b.Provider, { value: O, children: t })
        );
      };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return m;
        },
      });
      var l = a(2265),
        s = a(171),
        n = a(4548),
        r = a.n(n),
        o = a(6171),
        i = a(7445),
        c = a(5888),
        u = a(1515),
        d = a(7350),
        p = a(289);
      let m = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          { personalData: a, setPersonalData: n, gData: m, rData: f, cData: x, screenData: h } = (0, c.h)(),
          { getAllConsentData: b, gTableColumns: v, updateMyGData: w, getAllPersonalData: g } = (0, p.q)(),
          k = (0, l.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, u.Z4)(e),
                  { data: l } = await o.h.post('api/personal_data_consents_rewards', a),
                  s = (0, u.uR)({ tableName: d.me.PData, data: l.data });
                n(s), await w(), await b(), await g();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, n, w, b, g],
          ),
          y = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await b(),
                  await w(),
                  s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, b, w],
          ),
          C = (0, l.useCallback)(
            (e) => {
              var t;
              let l = null !== (t = e.date) && void 0 !== t ? t : r()().format('YYYY-MM-DD'),
                s = [];
              for (let t of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  console.log('phot:>> '),
                    s.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...a, [l]: { ...e, photos: [...s] } };
                n(t);
              }, 3e3);
            },
            [a, n],
          );
        return {
          savePersonalData: k,
          isLoading: e,
          personalData: a,
          updateConsentRewards: y,
          savePersonalDataTemporarily: C,
          gData: m,
          rData: f,
          cData: x,
          screenData: h,
          gTableColumns: v,
        };
      };
    },
    5888: function (e, t, a) {
      'use strict';
      a.d(t, {
        h: function () {
          return o;
        },
      });
      var l = a(3198),
        s = a(2265),
        n = a(5531),
        r = a(859);
      let o = () => {
        let { personalData: e, gData: t, rData: a, cData: o, screenData: i } = (0, l.v9)((e) => e.my_g_data),
          c = (0, n.TL)(),
          u = (0, s.useCallback)(
            (e) => {
              c((0, r.O$)(e));
            },
            [c],
          ),
          d = (0, s.useCallback)(
            (e) => {
              c((0, r.Pn)(e));
            },
            [c],
          ),
          p = (0, s.useCallback)(
            (e) => {
              c((0, r.Jg)(e));
            },
            [c],
          ),
          m = (0, s.useCallback)(
            (e) => {
              c((0, r.py)(e));
            },
            [c],
          ),
          f = (0, s.useCallback)(
            (e) => {
              c((0, r.Y4)(e));
            },
            [c],
          );
        return {
          setPersonalData: u,
          setGData: d,
          setRData: p,
          setCData: m,
          setScreenData: f,
          screenData: i,
          cData: o,
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
          return o;
        },
      });
      var l = a(3198),
        s = a(2265),
        n = a(5531),
        r = a(54);
      let o = () => {
        let { weather: e } = (0, l.v9)((e) => e.weather),
          t = (0, n.TL)(),
          a = (0, s.useCallback)(
            (e) => {
              t((0, r._)(e));
            },
            [t],
          );
        return { weather: e, setWeather: a };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 292, 971, 596, 744], function () {
      return e((e.s = 3392));
    }),
      (_N_E = e.O());
  },
]);
