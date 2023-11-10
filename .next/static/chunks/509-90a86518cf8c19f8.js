'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [509],
  {
    8390: function (a, e, t) {
      t.r(e);
      var s = t(7437),
        n = t(2265),
        l = t(9907),
        r = t(6421),
        o = t(1846),
        c = t(1839);
      e.default = function (a) {
        let { children: e, className: t = '' } = a,
          { width: i } = (0, l.i)(),
          [u, d] = (0, n.useState)(!1),
          p = (0, n.useRef)(null);
        return (
          (0, o.O)(p, () => {
            d(!1);
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              i < 1024 &&
                (0, s.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, s.jsx)(c.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, s.jsxs)('div', {
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
                    (0, s.jsx)(c.Z, {
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
    289: function (a, e, t) {
      t.d(e, {
        Z: function () {
          return w;
        },
        q: function () {
          return b;
        },
      });
      var s = t(7437),
        n = t(2265),
        l = t(2164),
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
      var h = t(1799);
      let m = () => {
        let { setWeather: a } = (0, h.I)(),
          { user: e } = (0, c.a)(),
          t = (0, n.useCallback)(
            async (e) => {
              try {
                let { coords: t } = e,
                  { data: s } = await d.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(t.latitude, '&lon=')
                      .concat(t.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!s.main) return;
                let n = { lowestTemperature: s.main.temp_min, highestTemperature: s.main.temp_max };
                a(n);
              } catch (a) {}
            },
            [a],
          ),
          s = (0, n.useCallback)(async () => {}, []);
        return (
          (0, n.useEffect)(() => {
            e && p({ successCallback: t, errorCallback: s }),
              setInterval(() => {
                p({ successCallback: t, errorCallback: s });
              }, 36e5);
          }, [s, t, e]),
          { getCurrentLocationWeather: t }
        );
      };
      var f = t(7999),
        v = t(346),
        y = t(9611);
      let g = (0, n.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        b = () => (0, n.useContext)(g);
      var w = function (a) {
        let { children: e } = a,
          { setPersonalData: t, setGData: d, setRData: p, setCData: h, setScreenData: b, setCompData: w } = (0, r.h)(),
          { fetchChatHistory: C, fetchRecentChats: k } = (0, f.L)(),
          [_, x] = (0, n.useState)([]),
          { user: D } = (0, c.a)(),
          { logoutUser: N } = (0, v.a)();
        m();
        let R = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/personal_data_consents_rewards'),
                e = (0, i.uR)({ tableName: u.me.PData, data: a.data });
              t(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                D &&
                N();
            }
          }, [t, N, D]),
          T = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_consents_rewards'),
                e = (0, i.uR)({ tableName: u.me.RData, data: a.data }),
                t = (0, i.uR)({ tableName: u.me.CData, data: a.data });
              p(e), h(t);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                D &&
                N();
            }
          }, [p, h, N, D]),
          P = (0, n.useCallback)(async () => {
            try {
              if (!D || !D.accountType || D.accountType === y.Z8.PERSONAL) return;
              let { data: a } = await o.h.get('api/company_consents_rewards'),
                e = (0, i.uR)({ tableName: u.me.CompData, data: a.data });
              w(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                D &&
                N();
            }
          }, [w, N, D]),
          j = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/user_personal_data/last_five'),
                e = (0, i.uR)({ tableName: u.me.GData, data: a });
              if (0 === a.length) return;
              let t = (0, i.Yn)(a);
              x(t), d(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                D &&
                N();
            }
          }, [d, N, D]),
          L = (0, n.useCallback)(async () => {
            try {
              let { data: a } = await o.h.get('api/file-data/'),
                e = (0, i.Xe)(a.data);
              b(e);
            } catch (t) {
              var a, e;
              t instanceof l.d7 &&
                ((null === (a = t.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (e = t.response) || void 0 === e ? void 0 : e.data.msg) === 'Token has expired') &&
                D &&
                N();
            }
          }, [b, N, D]),
          A = (0, n.useCallback)(() => {
            R(), j(), C(), k(), T(), L(), P();
          }, [R, j, T, C, L, k, P]),
          S = (0, n.useMemo)(
            () => ({
              gTableColumns: _,
              getAllConsentData: T,
              updateMyGData: j,
              getAllPersonalData: R,
              getAllCompanyConsentData: P,
            }),
            [_, T, j, R, P],
          );
        return (
          (0, n.useEffect)(() => {
            D && A();
          }, [D, A]),
          (0, s.jsx)(g.Provider, { value: S, children: e })
        );
      };
    },
    7999: function (a, e, t) {
      t.d(e, {
        L: function () {
          return d;
        },
      });
      var s = t(2265),
        n = t(171),
        l = t(2164),
        r = t(6171),
        o = t(7445),
        c = t(7152),
        i = t(1515),
        u = t(6118);
      let d = () => {
        let { isLoading: a, setIsLoading: e } = (0, o.r)(),
          {
            chats: t,
            userPrompt: d,
            setUserPrompt: p,
            setChats: h,
            resetUserPrompt: m,
            updateChat: f,
            recentChatHistory: v,
            startNewChat: y,
            openPreviousChats: g,
            activeChatID: b,
            setActiveChatID: w,
            setChatHistory: C,
            setRecentChatHistory: k,
          } = (0, c.P)(),
          { user: _ } = (0, u.a)(),
          x = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await r.h.get('api/chat/'),
                e = (0, i.Cf)(a.data),
                t = (0, i.py)(e);
              t && k(t);
            } catch (a) {}
          }, [k]),
          D = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await r.h.get('api/history/'),
                e = (0, i.ef)(a.data);
              C(e);
            } catch (a) {}
          }, [C]),
          N = (0, s.useCallback)(
            async (a) => {
              try {
                let { data: e } = await r.h.post('api/chat/', { name: a });
                return e.data.id && w(e.data.id), e.data.id;
              } catch (a) {
                return a;
              }
            },
            [w],
          ),
          R = (0, s.useCallback)(
            async (a) => {
              let { responseId: e, feedback: t } = a;
              try {
                let { data: a } = await r.h.post('choice/'.concat(e), { data: t });
                if (!a.response) return;
                x(), D();
              } catch (a) {}
            },
            [x, D],
          ),
          T = (0, s.useCallback)(async () => {
            try {
              let a = (0, i.P4)({ isBotResponse: !1, isLoading: !1, text: d.data, images: [] }),
                t = (0, i.P4)({ isBotResponse: !0, isLoading: !0, text: '', images: [] });
              h(a), h(t), e(!0), m();
              let s = b;
              _ && !s && (s = await N(d.data));
              let n = _ ? { ...d, chat_id: s } : d,
                { data: l } = await r.h.post('get-answer-images', n),
                o = [],
                c = '';
              l.images &&
                (o = l.images.map((a) => {
                  let { url: e } = a;
                  return e;
                })),
                l.response && (c = l.response),
                f({ ...t, isLoading: !1, content: { text: c, images: o } }),
                _ && (x(), D());
            } catch (e) {
              var a;
              e instanceof l.d7
                ? n.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                : n.toast.error('Something went wrong');
            } finally {
              e(!1);
            }
          }, [e, d, h, m, f, _, b, N, D, x]);
        return {
          fetchBotResponse: T,
          isLoading: a,
          chats: t,
          userPrompt: d,
          setUserPrompt: p,
          recentChatHistory: v,
          startNewChat: y,
          openPreviousChats: g,
          fetchChatHistory: D,
          fetchRecentChats: x,
          provideResponseFeedback: R,
        };
      };
    },
    6571: function (a, e, t) {
      t.d(e, {
        T: function () {
          return h;
        },
      });
      var s = t(2265),
        n = t(171),
        l = t(4548),
        r = t.n(l),
        o = t(6171),
        c = t(7445),
        i = t(5888),
        u = t(1515),
        d = t(7350),
        p = t(289);
      let h = () => {
        let { isLoading: a, setIsLoading: e } = (0, c.r)(),
          {
            personalData: t,
            setPersonalData: l,
            gData: h,
            rData: m,
            cData: f,
            screenData: v,
            compData: y,
            setCompData: g,
          } = (0, i.h)(),
          { getAllConsentData: b, gTableColumns: w, updateMyGData: C, getAllPersonalData: k } = (0, p.q)(),
          _ = (0, s.useCallback)(
            async (a) => {
              try {
                if ((e(!0), a.photos)) {
                  let e = new FormData();
                  for (let t of (e.append('field_name', 'photos'), a.photos)) e.append('image_files', t);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', e);
                }
                delete a.photos;
                let t = (0, u.Z4)(a),
                  { data: s } = await o.h.post('api/personal_data_consents_rewards', t),
                  n = (0, u.uR)({ tableName: d.me.PData, data: s.data });
                l(n), await C(), await b(), await k();
              } catch (a) {
              } finally {
                e(!1);
              }
            },
            [e, l, C, b, k],
          ),
          x = (0, s.useCallback)(
            async (a) => {
              let { id: t, payload: s } = a;
              try {
                e(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(t, '/'), s),
                  await b(),
                  await C(),
                  n.toast.success('Consent updated');
              } catch (a) {
                n.toast.error('Some problem updating consent');
              } finally {
                e(!1);
              }
            },
            [e, b, C],
          ),
          D = (0, s.useCallback)(
            async (a) => {
              try {
                e(!0);
                let { data: t } = await o.h.post('api/company_consents_rewards', a),
                  s = (0, u.uR)({ tableName: d.me.CompData, data: t.data });
                g(s), n.toast.success('Consent updated');
              } catch (a) {
                n.toast.error('Some problem updating consent');
              } finally {
                e(!1);
              }
            },
            [e, g],
          ),
          N = (0, s.useCallback)(
            (a) => {
              var e;
              let s = null !== (e = a.date) && void 0 !== e ? e : r()().format('YYYY-MM-DD'),
                n = [];
              for (let e of a.photos) {
                let a = new FileReader();
                (a.onload = (a) => {
                  n.push({ file_url: a.target && null !== a.target.result ? a.target.result : '' });
                }),
                  a.readAsDataURL(e);
              }
              setTimeout(() => {
                let e = { ...t, [s]: { ...a, photos: [...n] } };
                l(e);
              }, 3e3);
            },
            [t, l],
          );
        return {
          savePersonalData: _,
          isLoading: a,
          personalData: t,
          updateConsentRewards: x,
          savePersonalDataTemporarily: N,
          updateCompanyConsentRewards: D,
          gData: h,
          rData: m,
          cData: f,
          screenData: v,
          gTableColumns: w,
          compData: y,
        };
      };
    },
    5888: function (a, e, t) {
      t.d(e, {
        h: function () {
          return o;
        },
      });
      var s = t(3198),
        n = t(2265),
        l = t(5531),
        r = t(859);
      let o = () => {
        let {
            personalData: a,
            gData: e,
            rData: t,
            cData: o,
            screenData: c,
            compData: i,
          } = (0, s.v9)((a) => a.my_g_data),
          u = (0, l.TL)(),
          d = (0, n.useCallback)(
            (a) => {
              u((0, r.O$)(a));
            },
            [u],
          ),
          p = (0, n.useCallback)(
            (a) => {
              u((0, r.Pn)(a));
            },
            [u],
          ),
          h = (0, n.useCallback)(
            (a) => {
              u((0, r.Jg)(a));
            },
            [u],
          ),
          m = (0, n.useCallback)(
            (a) => {
              u((0, r.py)(a));
            },
            [u],
          ),
          f = (0, n.useCallback)(
            (a) => {
              u((0, r.UD)(a));
            },
            [u],
          ),
          v = (0, n.useCallback)(
            (a) => {
              u((0, r.Y4)(a));
            },
            [u],
          );
        return {
          setPersonalData: d,
          setGData: p,
          setRData: h,
          setCData: m,
          setScreenData: v,
          setCompData: f,
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
      var s = t(3198),
        n = t(2265),
        l = t(5531),
        r = t(54);
      let o = () => {
        let { weather: a } = (0, s.v9)((a) => a.weather),
          e = (0, l.TL)(),
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
