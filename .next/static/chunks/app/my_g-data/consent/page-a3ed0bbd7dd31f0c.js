(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    1733: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 2710));
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
    2710: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(9611),
        r = a(6571),
        o = a(4118),
        i = a(4010),
        c = a(3739),
        u = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: n,
              getTableBodyProps: r,
              headerGroups: o,
              rows: u,
              prepareRow: d,
            } = (0, i.useTable)({ columns: t, data: a });
          return (0, l.jsxs)('table', {
            ...n(),
            className: 'w-full',
            children: [
              (0, l.jsx)('thead', {
                children: o.map((e) =>
                  (0, l.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, l.jsx)('th', {
                        ...e.getHeaderProps(),
                        className:
                          'border-table dark:border-white border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap '.concat(
                            'id' === e.id && 'hidden',
                          ),
                        children: e.render('Header'),
                      }),
                    ),
                  }),
                ),
              }),
              (0, l.jsx)('tbody', {
                ...r(),
                children: u.map(
                  (e) => (
                    d(e),
                    (0, l.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((t, a) =>
                        (0, l.jsx)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap\n                  '.concat(
                                a === e.cells.length - 1 && 'hidden',
                              ),
                            children:
                              a === e.cells.length - 2
                                ? (0, l.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    isDisabled: null === e.values.id,
                                    onClick: () => {
                                      s({
                                        id: e.values.id,
                                        payload: { consents_to_sell: 'TRUE' !== e.values.Consent },
                                      });
                                    },
                                  })
                                : t.render('Cell'),
                          },
                          t.id,
                        ),
                      ),
                    })
                  ),
                ),
              }),
            ],
          });
        },
        d = function () {
          let { cData: e, updateConsentRewards: t } = (0, r.T)(),
            a = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndWeb: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(n.kk, ']'),
            children: [
              (0, l.jsx)(u, { data: a, columns: n.JU, updateConsentRewards: t }),
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
      var f = a(1799);
      let m = () => {
        let { setWeather: e } = (0, f.I)(),
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
      var h = a(7999),
        b = a(346);
      let x = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
        }),
        v = () => (0, s.useContext)(x);
      var w = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: d, setRData: p, setCData: f, setScreenData: v } = (0, r.h)(),
          { fetchChatHistory: w, fetchRecentChats: g } = (0, h.L)(),
          [k, y] = (0, s.useState)([]),
          { user: C } = (0, i.a)(),
          { logoutUser: _ } = (0, b.a)();
        m();
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
              p(t), f(a);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                _();
            }
          }, [p, f, _, C]),
          D = (0, s.useCallback)(async () => {
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
          T = (0, s.useCallback)(async () => {
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
            j(), D(), w(), g(), N(), T();
          }, [j, D, N, w, T, g]),
          R = (0, s.useMemo)(
            () => ({ gTableColumns: k, getAllConsentData: N, updateMyGData: D, getAllPersonalData: j }),
            [k, N, D, j],
          );
        return (
          (0, s.useEffect)(() => {
            C && P();
          }, [C, P]),
          (0, l.jsx)(x.Provider, { value: R, children: t })
        );
      };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return f;
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
      let f = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          { personalData: a, setPersonalData: n, gData: f, rData: m, cData: h, screenData: b } = (0, c.h)(),
          { getAllConsentData: x, gTableColumns: v, updateMyGData: w, getAllPersonalData: g } = (0, p.q)(),
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
                n(s), await w(), await x(), await g();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, n, w, x, g],
          ),
          y = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await x(),
                  await w(),
                  s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, x, w],
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
          gData: f,
          rData: m,
          cData: h,
          screenData: b,
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
          f = (0, s.useCallback)(
            (e) => {
              c((0, r.py)(e));
            },
            [c],
          ),
          m = (0, s.useCallback)(
            (e) => {
              c((0, r.Y4)(e));
            },
            [c],
          );
        return {
          setPersonalData: u,
          setGData: d,
          setRData: p,
          setCData: f,
          setScreenData: m,
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
      return e((e.s = 1733));
    }),
      (_N_E = e.O());
  },
]);
