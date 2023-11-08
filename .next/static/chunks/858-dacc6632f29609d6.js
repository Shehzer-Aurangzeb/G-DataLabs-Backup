'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [858],
  {
    8390: function (a, e, t) {
      t.r(e);
      var l = t(7437),
        n = t(2265),
        s = t(9907),
        r = t(6791),
        o = t(1846),
        i = t(1839);
      e.default = function (a) {
        let { children: e, className: t = '' } = a,
          { width: c } = (0, s.i)(),
          [d, u] = (0, n.useState)(!1),
          p = (0, n.useRef)(null);
        return (
          (0, o.O)(p, () => {
            u(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: p,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(d ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  t,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, l.jsx)(i.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => u(!d),
                      type: 'button',
                      src: r.tp,
                    }),
                  e,
                ],
              }),
            ],
          })
        );
      };
    },
    4697: function (a, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return i;
          },
        });
      var l = t(7437),
        n = t(2265),
        s = t(6571),
        r = t(9611),
        o = function (a) {
          let { data: e } = a,
            [t, s] = (0, n.useState)(!1);
          return (0, l.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                s(!t);
              },
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, l.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: e.date,
                    }),
                    (0, l.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, l.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, l.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 '.concat(
                              t ? 'rotate-0' : 'rotate-90',
                              ' bg-main dark:bg-darkMain rounded-md',
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    t ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    e.detail.length > 0 &&
                      (0, l.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: e.detail,
                      }),
                    (0, l.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        e.screenRecording &&
                          (0, l.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              t ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, l.jsx)('source', { src: e.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, l.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        e.cameraRecording.length > 0 &&
                          (0, l.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              t ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, l.jsx)('source', { src: e.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, l.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            e.id,
          );
        },
        i = function () {
          let { screenData: a } = (0, s.T)();
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    r.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, l.jsx)('div', {
                className: 'max-w-['.concat(r.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: a.map((a) => (0, l.jsx)(o, { data: a }, a.id)),
              }),
            ],
          });
        };
    },
    289: function (a, e, t) {
      t.d(e, {
        Z: function () {
          return v;
        },
        q: function () {
          return g;
        },
      });
      var l = t(7437),
        n = t(2265),
        s = t(2164),
        r = t(5888),
        o = t(6171),
        i = t(6118),
        c = t(1515),
        d = t(7350),
        u = t(9222);
      let p = (a) => {
        let { successCallback: e, errorCallback: t } = a;
        navigator.geolocation.getCurrentPosition(e, t, { enableHighAccuracy: !0 });
      };
      var m = t(1799);
      let h = () => {
        let { setWeather: a } = (0, m.I)(),
          { user: e } = (0, i.a)(),
          t = (0, n.useCallback)(
            async (e) => {
              try {
                let { coords: t } = e,
                  { data: l } = await u.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(t.latitude, '&lon=')
                      .concat(t.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!l.main) return;
                let n = { lowestTemperature: l.main.temp_min, highestTemperature: l.main.temp_max };
                a(n);
              } catch (a) {}
            },
            [a],
          ),
          l = (0, n.useCallback)(async () => {}, []);
        return (
          (0, n.useEffect)(() => {
            e && p({ successCallback: t, errorCallback: l }),
              setInterval(() => {
                p({ successCallback: t, errorCallback: l });
              }, 36e5);
          }, [l, t, e]),
          { getCurrentLocationWeather: t }
        );
      };
      var f = t(7999),
        x = t(346);
      let b = (0, n.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
        }),
        g = () => (0, n.useContext)(b);
      var v = function (a) {
        let { children: e } = a,
          { setPersonalData: t, setGData: u, setRData: p, setCData: m, setScreenData: g } = (0, r.h)(),
          { fetchChatHistory: v, fetchRecentChats: y } = (0, f.L)(),
          [w, k] = (0, n.useState)([]),
          { user: _ } = (0, i.a)(),
          { logoutUser: C } = (0, x.a)();
        h();
        let j = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/personal_data_consents_rewards'),
                e = (0, c.uR)({ tableName: d.me.PData, data: a.data });
              t(e);
            } catch (t) {
              var a, e;
              t instanceof s.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                _ &&
                C();
            }
          }, [t, C, _]),
          N = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_consents_rewards'),
                e = (0, c.uR)({ tableName: d.me.RData, data: a.data }),
                t = (0, c.uR)({ tableName: d.me.CData, data: a.data });
              p(e), m(t);
            } catch (t) {
              var a, e;
              t instanceof s.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                _ &&
                C();
            }
          }, [p, m, C, _]),
          D = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_personal_data/last_five'),
                e = (0, c.uR)({ tableName: d.me.GData, data: a });
              if (0 === a.length) return;
              let t = (0, c.Yn)(a);
              k(t), u(e);
            } catch (t) {
              var a, e;
              t instanceof s.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                _ &&
                C();
            }
          }, [u, C, _]),
          R = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/file-data/'),
                e = (0, c.Xe)(a.data);
              g(e);
            } catch (t) {
              var a, e;
              t instanceof s.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                _ &&
                C();
            }
          }, [g, C, _]),
          T = (0, n.useCallback)(() => {
            j(), D(), v(), y(), N(), R();
          }, [j, D, N, v, R, y]),
          Y = (0, n.useMemo)(
            () => ({ gTableColumns: w, getAllConsentData: N, updateMyGData: D, getAllPersonalData: j }),
            [w, N, D, j],
          );
        return (
          (0, n.useEffect)(() => {
            _ && T();
          }, [_, T]),
          (0, l.jsx)(b.Provider, { value: Y, children: e })
        );
      };
    },
    6571: function (a, e, t) {
      t.d(e, {
        T: function () {
          return m;
        },
      });
      var l = t(2265),
        n = t(171),
        s = t(4548),
        r = t.n(s),
        o = t(6171),
        i = t(7445),
        c = t(5888),
        d = t(1515),
        u = t(7350),
        p = t(289);
      let m = () => {
        let { isLoading: a, setIsLoading: e } = (0, i.r)(),
          { personalData: t, setPersonalData: s, gData: m, rData: h, cData: f, screenData: x } = (0, c.h)(),
          { getAllConsentData: b, gTableColumns: g, updateMyGData: v, getAllPersonalData: y } = (0, p.q)(),
          w = (0, l.useCallback)(
            async (a) => {
              try {
                if ((e(!0), a.photos)) {
                  let e = new FormData();
                  for (let t of (e.append('field_name', 'photos'), a.photos)) e.append('image_files', t);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', e);
                }
                delete a.photos;
                let t = (0, d.Z4)(a),
                  { data: l } = await o.h.post('api/personal_data_consents_rewards', t),
                  n = (0, d.uR)({ tableName: u.me.PData, data: l.data });
                s(n), await v(), await b(), await y();
              } catch (a) {
              } finally {
                e(!1);
              }
            },
            [e, s, v, b, y],
          ),
          k = (0, l.useCallback)(
            async (a) => {
              let { id: t, payload: l } = a;
              try {
                e(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(t, '/'), l),
                  await b(),
                  await v(),
                  n.toast.success('Consent updated');
              } catch (a) {
                n.toast.error('Some problem updating consent');
              } finally {
                e(!1);
              }
            },
            [e, b, v],
          ),
          _ = (0, l.useCallback)(
            (a) => {
              var e;
              let l = null !== (e = a.date) && void 0 !== e ? e : r()().format('YYYY-MM-DD'),
                n = [];
              for (let e of a.photos) {
                let a = new FileReader();
                (a.onload = (a) => {
                  console.log('phot:>> '),
                    n.push({ file_url: a.target && null !== a.target.result ? a.target.result : '' });
                }),
                  a.readAsDataURL(e);
              }
              setTimeout(() => {
                let e = { ...t, [l]: { ...a, photos: [...n] } };
                s(e);
              }, 3e3);
            },
            [t, s],
          );
        return {
          savePersonalData: w,
          isLoading: a,
          personalData: t,
          updateConsentRewards: k,
          savePersonalDataTemporarily: _,
          gData: m,
          rData: h,
          cData: f,
          screenData: x,
          gTableColumns: g,
        };
      };
    },
    5888: function (a, e, t) {
      t.d(e, {
        h: function () {
          return o;
        },
      });
      var l = t(3198),
        n = t(2265),
        s = t(5531),
        r = t(859);
      let o = () => {
        let { personalData: a, gData: e, rData: t, cData: o, screenData: i } = (0, l.v9)((a) => a.my_g_data),
          c = (0, s.TL)(),
          d = (0, n.useCallback)(
            (a) => {
              c((0, r.O$)(a));
            },
            [c],
          ),
          u = (0, n.useCallback)(
            (a) => {
              c((0, r.Pn)(a));
            },
            [c],
          ),
          p = (0, n.useCallback)(
            (a) => {
              c((0, r.Jg)(a));
            },
            [c],
          ),
          m = (0, n.useCallback)(
            (a) => {
              c((0, r.py)(a));
            },
            [c],
          ),
          h = (0, n.useCallback)(
            (a) => {
              c((0, r.Y4)(a));
            },
            [c],
          );
        return {
          setPersonalData: d,
          setGData: u,
          setRData: p,
          setCData: m,
          setScreenData: h,
          screenData: i,
          cData: o,
          rData: t,
          personalData: a,
          gData: e,
        };
      };
    },
    1799: function (a, e, t) {
      t.d(e, {
        I: function () {
          return o;
        },
      });
      var l = t(3198),
        n = t(2265),
        s = t(5531),
        r = t(54);
      let o = () => {
        let { weather: a } = (0, l.v9)((a) => a.weather),
          e = (0, s.TL)(),
          t = (0, n.useCallback)(
            (a) => {
              e((0, r._)(a));
            },
            [e],
          );
        return { weather: a, setWeather: t };
      };
    },
  },
]);
