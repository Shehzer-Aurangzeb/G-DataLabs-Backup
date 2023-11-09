'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    8390: function (a, e, t) {
      t.r(e);
      var l = t(7437),
        s = t(2265),
        n = t(9907),
        r = t(6421),
        o = t(1846),
        c = t(1839);
      e.default = function (a) {
        let { children: e, className: t = '' } = a,
          { width: i } = (0, n.i)(),
          [u, d] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        return (
          (0, o.O)(p, () => {
            d(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              i < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(c.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: p,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    i < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(u ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  t,
                ].join(' '),
                children: [
                  i < 1024 &&
                    (0, l.jsx)(c.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => d(!u),
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
    4118: function (a, e, t) {
      var l = t(7437),
        s = t(2265),
        n = t(3427),
        r = t(6421);
      e.Z = function (a) {
        let { message: e, icon: t, isParentFixed: o } = a,
          c = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            o && c && c.current && c.current.parentElement && c.current.parentElement.classList.add('relative');
          }, [o]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !o && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: c,
            children: [
              (0, l.jsx)(n.Z, {
                src: null != t ? t : r.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, l.jsx)('p', {
                className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
                children: null != e ? e : 'No data to display',
              }),
            ],
          })
        );
      };
    },
    3739: function (a, e, t) {
      var l = t(7437);
      t(2265);
      var s = t(6421),
        n = t(1839);
      e.Z = function (a) {
        let { isAllowed: e, onClick: t, isDisabled: r } = a;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(n.Z, {
              src: e && !r ? s.Xv : s.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                e || r || t();
              },
            }),
            (0, l.jsx)(n.Z, {
              src: e || r ? s.QM : s.JE,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                e && !r && t();
              },
            }),
          ],
        });
      };
    },
    289: function (a, e, t) {
      t.d(e, {
        Z: function () {
          return y;
        },
        q: function () {
          return w;
        },
      });
      var l = t(7437),
        s = t(2265),
        n = t(2164),
        r = t(5888),
        o = t(6171),
        c = t(6118),
        i = t(1515),
        u = t(7350),
        d = t(9222);
      let p = (a) => {
        let { successCallback: e, errorCallback: t } = a;
        navigator.geolocation.getCurrentPosition(e, t, { enableHighAccuracy: !0 });
      };
      var f = t(1799);
      let m = () => {
        let { setWeather: a } = (0, f.I)(),
          { user: e } = (0, c.a)(),
          t = (0, s.useCallback)(
            async (e) => {
              try {
                let { coords: t } = e,
                  { data: l } = await d.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(t.latitude, '&lon=')
                      .concat(t.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!l.main) return;
                let s = { lowestTemperature: l.main.temp_min, highestTemperature: l.main.temp_max };
                a(s);
              } catch (a) {}
            },
            [a],
          ),
          l = (0, s.useCallback)(async () => {}, []);
        return (
          (0, s.useEffect)(() => {
            e && p({ successCallback: t, errorCallback: l }),
              setInterval(() => {
                p({ successCallback: t, errorCallback: l });
              }, 36e5);
          }, [l, t, e]),
          { getCurrentLocationWeather: t }
        );
      };
      var h = t(7999),
        v = t(346),
        b = t(9611);
      let x = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        w = () => (0, s.useContext)(x);
      var y = function (a) {
        let { children: e } = a,
          { setPersonalData: t, setGData: d, setRData: p, setCData: f, setScreenData: w, setCompData: y } = (0, r.h)(),
          { fetchChatHistory: g, fetchRecentChats: k } = (0, h.L)(),
          [C, _] = (0, s.useState)([]),
          { user: N } = (0, c.a)(),
          { logoutUser: j } = (0, v.a)();
        m();
        let D = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/personal_data_consents_rewards'),
                e = (0, i.uR)({ tableName: u.me.PData, data: a.data });
              t(e);
            } catch (t) {
              var a, e;
              t instanceof n.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                N &&
                j();
            }
          }, [t, j, N]),
          T = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_consents_rewards'),
                e = (0, i.uR)({ tableName: u.me.RData, data: a.data }),
                t = (0, i.uR)({ tableName: u.me.CData, data: a.data });
              p(e), f(t);
            } catch (t) {
              var a, e;
              t instanceof n.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                N &&
                j();
            }
          }, [p, f, j, N]),
          R = (0, s.useCallback)(async () => {
            try {
              if (!N || !N.accountType || N.accountType === b.Z8.PERSONAL) return;
              let { data: a } = await o.h.get('api/company_consents_rewards');
              console.log('data :>> ', a);
              let e = (0, i.uR)({ tableName: u.me.CompData, data: a.data });
              console.log('comp :>> ', e), y(e);
            } catch (t) {
              var a, e;
              t instanceof n.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                N &&
                j();
            }
          }, [y, j, N]),
          Z = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_personal_data/last_five'),
                e = (0, i.uR)({ tableName: u.me.GData, data: a });
              if (0 === a.length) return;
              let t = (0, i.Yn)(a);
              _(t), d(e);
            } catch (t) {
              var a, e;
              t instanceof n.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                N &&
                j();
            }
          }, [d, j, N]),
          E = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/file-data/'),
                e = (0, i.Xe)(a.data);
              w(e);
            } catch (t) {
              var a, e;
              t instanceof n.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                N &&
                j();
            }
          }, [w, j, N]),
          A = (0, s.useCallback)(() => {
            D(), Z(), g(), k(), T(), E(), R();
          }, [D, Z, T, g, E, k, R]),
          P = (0, s.useMemo)(
            () => ({
              gTableColumns: C,
              getAllConsentData: T,
              updateMyGData: Z,
              getAllPersonalData: D,
              getAllCompanyConsentData: R,
            }),
            [C, T, Z, D, R],
          );
        return (
          (0, s.useEffect)(() => {
            N && A();
          }, [N, A]),
          (0, l.jsx)(x.Provider, { value: P, children: e })
        );
      };
    },
    6571: function (a, e, t) {
      t.d(e, {
        T: function () {
          return f;
        },
      });
      var l = t(2265),
        s = t(171),
        n = t(4548),
        r = t.n(n),
        o = t(6171),
        c = t(7445),
        i = t(5888),
        u = t(1515),
        d = t(7350),
        p = t(289);
      let f = () => {
        let { isLoading: a, setIsLoading: e } = (0, c.r)(),
          {
            personalData: t,
            setPersonalData: n,
            gData: f,
            rData: m,
            cData: h,
            screenData: v,
            compData: b,
          } = (0, i.h)(),
          {
            getAllConsentData: x,
            gTableColumns: w,
            updateMyGData: y,
            getAllPersonalData: g,
            getAllCompanyConsentData: k,
          } = (0, p.q)(),
          C = (0, l.useCallback)(
            async (a) => {
              try {
                if ((e(!0), a.photos)) {
                  let e = new FormData();
                  for (let t of (e.append('field_name', 'photos'), a.photos)) e.append('image_files', t);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', e);
                }
                delete a.photos;
                let t = (0, u.Z4)(a),
                  { data: l } = await o.h.post('api/personal_data_consents_rewards', t),
                  s = (0, u.uR)({ tableName: d.me.PData, data: l.data });
                n(s), await y(), await x(), await g();
              } catch (a) {
              } finally {
                e(!1);
              }
            },
            [e, n, y, x, g],
          ),
          _ = (0, l.useCallback)(
            async (a) => {
              let { id: t, payload: l } = a;
              try {
                e(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(t, '/'), l),
                  await x(),
                  await y(),
                  s.toast.success('Consent updated');
              } catch (a) {
                s.toast.error('Some problem updating consent');
              } finally {
                e(!1);
              }
            },
            [e, x, y],
          ),
          N = (0, l.useCallback)(
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
          j = (0, l.useCallback)(
            (a) => {
              var e;
              let l = null !== (e = a.date) && void 0 !== e ? e : r()().format('YYYY-MM-DD'),
                s = [];
              for (let e of a.photos) {
                let a = new FileReader();
                (a.onload = (a) => {
                  s.push({ file_url: a.target && null !== a.target.result ? a.target.result : '' });
                }),
                  a.readAsDataURL(e);
              }
              setTimeout(() => {
                let e = { ...t, [l]: { ...a, photos: [...s] } };
                n(e);
              }, 3e3);
            },
            [t, n],
          );
        return {
          savePersonalData: C,
          isLoading: a,
          personalData: t,
          updateConsentRewards: _,
          savePersonalDataTemporarily: j,
          updateCompanyConsentRewards: N,
          gData: f,
          rData: m,
          cData: h,
          screenData: v,
          gTableColumns: w,
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
      var l = t(3198),
        s = t(2265),
        n = t(5531),
        r = t(859);
      let o = () => {
        let {
            personalData: a,
            gData: e,
            rData: t,
            cData: o,
            screenData: c,
            compData: i,
          } = (0, l.v9)((a) => a.my_g_data),
          u = (0, n.TL)(),
          d = (0, s.useCallback)(
            (a) => {
              u((0, r.O$)(a));
            },
            [u],
          ),
          p = (0, s.useCallback)(
            (a) => {
              u((0, r.Pn)(a));
            },
            [u],
          ),
          f = (0, s.useCallback)(
            (a) => {
              u((0, r.Jg)(a));
            },
            [u],
          ),
          m = (0, s.useCallback)(
            (a) => {
              u((0, r.py)(a));
            },
            [u],
          ),
          h = (0, s.useCallback)(
            (a) => {
              u((0, r.UD)(a));
            },
            [u],
          ),
          v = (0, s.useCallback)(
            (a) => {
              u((0, r.Y4)(a));
            },
            [u],
          );
        return {
          setPersonalData: d,
          setGData: p,
          setRData: f,
          setCData: m,
          setScreenData: v,
          setCompData: h,
          screenData: c,
          cData: o,
          rData: t,
          personalData: a,
          gData: e,
          compData: i,
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
        s = t(2265),
        n = t(5531),
        r = t(54);
      let o = () => {
        let { weather: a } = (0, l.v9)((a) => a.weather),
          e = (0, n.TL)(),
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
