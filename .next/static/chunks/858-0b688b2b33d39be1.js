'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [858],
  {
    8390: function (a, e, t) {
      t.r(e);
      var n = t(7437),
        s = t(2265),
        l = t(9907),
        r = t(6421),
        o = t(1846),
        i = t(1839);
      e.default = function (a) {
        let { children: e, className: t = '' } = a,
          { width: c } = (0, l.i)(),
          [d, u] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        return (
          (0, o.O)(p, () => {
            u(!1);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              c < 1024 &&
                (0, n.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, n.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, n.jsxs)('div', {
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
                    (0, n.jsx)(i.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
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
      var n = t(7437),
        s = t(2265),
        l = t(6571),
        r = t(9611),
        o = function (a) {
          let { data: e } = a,
            [t, l] = (0, s.useState)(!1);
          return (0, n.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                l(!t);
              },
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, n.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: e.date,
                    }),
                    (0, n.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, n.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, n.jsx)('span', {
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
                (0, n.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    t ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    e.detail.length > 0 &&
                      (0, n.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: e.detail,
                      }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        e.screenRecording &&
                          (0, n.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              t ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, n.jsx)('source', { src: e.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, n.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        e.cameraRecording.length > 0 &&
                          (0, n.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              t ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, n.jsx)('source', { src: e.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, n.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
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
          let { screenData: a } = (0, l.T)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    r.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, n.jsx)('div', {
                className: 'max-w-['.concat(r.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: a.map((a) => (0, n.jsx)(o, { data: a }, a.id)),
              }),
            ],
          });
        };
    },
    289: function (a, e, t) {
      t.d(e, {
        Z: function () {
          return g;
        },
        q: function () {
          return v;
        },
      });
      var n = t(7437),
        s = t(2265),
        l = t(2164),
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
          t = (0, s.useCallback)(
            async (e) => {
              try {
                let { coords: t } = e,
                  { data: n } = await u.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(t.latitude, '&lon=')
                      .concat(t.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!n.main) return;
                let s = { lowestTemperature: n.main.temp_min, highestTemperature: n.main.temp_max };
                a(s);
              } catch (a) {}
            },
            [a],
          ),
          n = (0, s.useCallback)(async () => {}, []);
        return (
          (0, s.useEffect)(() => {
            e && p({ successCallback: t, errorCallback: n }),
              setInterval(() => {
                p({ successCallback: t, errorCallback: n });
              }, 36e5);
          }, [n, t, e]),
          { getCurrentLocationWeather: t }
        );
      };
      var f = t(7999),
        x = t(346),
        b = t(9611);
      let y = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        v = () => (0, s.useContext)(y);
      var g = function (a) {
        let { children: e } = a,
          { setPersonalData: t, setGData: u, setRData: p, setCData: m, setScreenData: v, setCompData: g } = (0, r.h)(),
          { fetchChatHistory: w, fetchRecentChats: k } = (0, f.L)(),
          [C, _] = (0, s.useState)([]),
          { user: j } = (0, i.a)(),
          { logoutUser: N } = (0, x.a)();
        h();
        let D = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/personal_data_consents_rewards'),
                e = (0, c.uR)({ tableName: d.me.PData, data: a.data });
              t(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                j &&
                N();
            }
          }, [t, N, j]),
          T = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_consents_rewards'),
                e = (0, c.uR)({ tableName: d.me.RData, data: a.data }),
                t = (0, c.uR)({ tableName: d.me.CData, data: a.data });
              p(e), m(t);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                j &&
                N();
            }
          }, [p, m, N, j]),
          R = (0, s.useCallback)(async () => {
            try {
              if (!j || !j.accountType || j.accountType === b.Z8.PERSONAL) return;
              let { data: a } = await o.h.get('api/company_consents_rewards');
              console.log('data :>> ', a);
              let e = (0, c.uR)({ tableName: d.me.CompData, data: a.data });
              console.log('comp :>> ', e), g(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                j &&
                N();
            }
          }, [g, N, j]),
          Y = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_personal_data/last_five'),
                e = (0, c.uR)({ tableName: d.me.GData, data: a });
              if (0 === a.length) return;
              let t = (0, c.Yn)(a);
              _(t), u(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                j &&
                N();
            }
          }, [u, N, j]),
          E = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/file-data/'),
                e = (0, c.Xe)(a.data);
              v(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                j &&
                N();
            }
          }, [v, N, j]),
          L = (0, s.useCallback)(() => {
            D(), Y(), w(), k(), T(), E(), R();
          }, [D, Y, T, w, E, k, R]),
          M = (0, s.useMemo)(
            () => ({
              gTableColumns: C,
              getAllConsentData: T,
              updateMyGData: Y,
              getAllPersonalData: D,
              getAllCompanyConsentData: R,
            }),
            [C, T, Y, D, R],
          );
        return (
          (0, s.useEffect)(() => {
            j && L();
          }, [j, L]),
          (0, n.jsx)(y.Provider, { value: M, children: e })
        );
      };
    },
    6571: function (a, e, t) {
      t.d(e, {
        T: function () {
          return m;
        },
      });
      var n = t(2265),
        s = t(171),
        l = t(4548),
        r = t.n(l),
        o = t(6171),
        i = t(7445),
        c = t(5888),
        d = t(1515),
        u = t(7350),
        p = t(289);
      let m = () => {
        let { isLoading: a, setIsLoading: e } = (0, i.r)(),
          {
            personalData: t,
            setPersonalData: l,
            gData: m,
            rData: h,
            cData: f,
            screenData: x,
            compData: b,
          } = (0, c.h)(),
          {
            getAllConsentData: y,
            gTableColumns: v,
            updateMyGData: g,
            getAllPersonalData: w,
            getAllCompanyConsentData: k,
          } = (0, p.q)(),
          C = (0, n.useCallback)(
            async (a) => {
              try {
                if ((e(!0), a.photos)) {
                  let e = new FormData();
                  for (let t of (e.append('field_name', 'photos'), a.photos)) e.append('image_files', t);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', e);
                }
                delete a.photos;
                let t = (0, d.Z4)(a),
                  { data: n } = await o.h.post('api/personal_data_consents_rewards', t),
                  s = (0, d.uR)({ tableName: u.me.PData, data: n.data });
                l(s), await g(), await y(), await w();
              } catch (a) {
              } finally {
                e(!1);
              }
            },
            [e, l, g, y, w],
          ),
          _ = (0, n.useCallback)(
            async (a) => {
              let { id: t, payload: n } = a;
              try {
                e(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(t, '/'), n),
                  await y(),
                  await g(),
                  s.toast.success('Consent updated');
              } catch (a) {
                s.toast.error('Some problem updating consent');
              } finally {
                e(!1);
              }
            },
            [e, y, g],
          ),
          j = (0, n.useCallback)(
            async (a) => {
              try {
                e(!0), await o.h.post('api/company_consents_rewards', a), s.toast.success('Consent updated'), k();
              } catch (a) {
                s.toast.error('Some problem updating consent');
              } finally {
                e(!1);
              }
            },
            [e, k],
          ),
          N = (0, n.useCallback)(
            (a) => {
              var e;
              let n = null !== (e = a.date) && void 0 !== e ? e : r()().format('YYYY-MM-DD'),
                s = [];
              for (let e of a.photos) {
                let a = new FileReader();
                (a.onload = (a) => {
                  s.push({ file_url: a.target && null !== a.target.result ? a.target.result : '' });
                }),
                  a.readAsDataURL(e);
              }
              setTimeout(() => {
                let e = { ...t, [n]: { ...a, photos: [...s] } };
                l(e);
              }, 3e3);
            },
            [t, l],
          );
        return {
          savePersonalData: C,
          isLoading: a,
          personalData: t,
          updateConsentRewards: _,
          savePersonalDataTemporarily: N,
          updateCompanyConsentRewards: j,
          gData: m,
          rData: h,
          cData: f,
          screenData: x,
          gTableColumns: v,
          compData: b,
        };
      };
    },
    5888: function (a, e, t) {
      t.d(e, {
        h: function () {
          return o;
        },
      });
      var n = t(3198),
        s = t(2265),
        l = t(5531),
        r = t(859);
      let o = () => {
        let {
            personalData: a,
            gData: e,
            rData: t,
            cData: o,
            screenData: i,
            compData: c,
          } = (0, n.v9)((a) => a.my_g_data),
          d = (0, l.TL)(),
          u = (0, s.useCallback)(
            (a) => {
              d((0, r.O$)(a));
            },
            [d],
          ),
          p = (0, s.useCallback)(
            (a) => {
              d((0, r.Pn)(a));
            },
            [d],
          ),
          m = (0, s.useCallback)(
            (a) => {
              d((0, r.Jg)(a));
            },
            [d],
          ),
          h = (0, s.useCallback)(
            (a) => {
              d((0, r.py)(a));
            },
            [d],
          ),
          f = (0, s.useCallback)(
            (a) => {
              d((0, r.UD)(a));
            },
            [d],
          ),
          x = (0, s.useCallback)(
            (a) => {
              d((0, r.Y4)(a));
            },
            [d],
          );
        return {
          setPersonalData: u,
          setGData: p,
          setRData: m,
          setCData: h,
          setScreenData: x,
          setCompData: f,
          screenData: i,
          cData: o,
          rData: t,
          personalData: a,
          gData: e,
          compData: c,
        };
      };
    },
    1799: function (a, e, t) {
      t.d(e, {
        I: function () {
          return o;
        },
      });
      var n = t(3198),
        s = t(2265),
        l = t(5531),
        r = t(54);
      let o = () => {
        let { weather: a } = (0, n.v9)((a) => a.weather),
          e = (0, l.TL)(),
          t = (0, s.useCallback)(
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
