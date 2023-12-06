'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [509],
  {
    8390: function (a, t, e) {
      e.r(t);
      var l = e(7437),
        s = e(2265),
        n = e(9907),
        r = e(1419),
        c = e(1846),
        o = e(1839);
      t.default = function (a) {
        let { children: t, className: e = '' } = a,
          { width: i } = (0, n.i)(),
          [u, d] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        return (
          (0, c.O)(p, () => {
            d(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              i < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(o.Z, {
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
                  e,
                ].join(' '),
                children: [
                  i < 1024 &&
                    (0, l.jsx)(o.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
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
    289: function (a, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
        q: function () {
          return w;
        },
      });
      var l = e(7437),
        s = e(2265),
        n = e(2164),
        r = e(5888),
        c = e(6171),
        o = e(6118),
        i = e(1515),
        u = e(7350),
        d = e(9222);
      let p = (a) => {
        let { successCallback: t, errorCallback: e } = a;
        navigator.geolocation.getCurrentPosition(t, e, { enableHighAccuracy: !0 });
      };
      var h = e(1799);
      let f = () => {
        let { setWeather: a } = (0, h.I)(),
          { user: t } = (0, o.a)(),
          e = (0, s.useCallback)(
            async (t) => {
              try {
                let { coords: e } = t,
                  { data: l } = await d.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(e.latitude, '&lon=')
                      .concat(e.longitude, '&appid=')
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
            t && p({ successCallback: e, errorCallback: l }),
              setInterval(() => {
                p({ successCallback: e, errorCallback: l });
              }, 36e5);
          }, [l, e, t]),
          { getCurrentLocationWeather: e }
        );
      };
      var m = e(4683),
        y = e(346),
        b = e(910);
      let g = (0, s.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        w = () => (0, s.useContext)(g);
      var C = function (a) {
        let { children: t } = a,
          { setPersonalData: e, setGData: d, setRData: p, setCData: h, setScreenData: w, setCompData: C } = (0, r.h)(),
          { fetchChatHistory: k, fetchRecentChats: _ } = (0, m.L)(),
          [v, x] = (0, s.useState)([]),
          { user: D } = (0, o.a)(),
          { logoutUser: N } = (0, y.a)();
        f();
        let R = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await c.h.get('api/personal_data_consents_rewards'),
                t = (0, i.uR)({ tableName: u.me.PData, data: a.data });
              e(t);
            } catch (e) {
              var a, t;
              e instanceof n.d7 &&
                ((null === (a = e.response) || void 0 === a ? void 0 : a.status) === 401 ||
                  (null === (t = e.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                D &&
                N();
            }
          }, [e, N, D]),
          j = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await c.h.get('api/user_consents_rewards'),
                t = (0, i.uR)({ tableName: u.me.RData, data: a.data });
              p(t);
              let e = (0, i.uR)({ tableName: u.me.CData, data: a.data });
              h(e);
            } catch (a) {}
          }, [p, h]),
          P = (0, s.useCallback)(async () => {
            try {
              if (!D || !D.accountType || D.accountType === b.Z8.PERSONAL) return;
              let { data: a } = await c.h.get('api/company_consents_rewards'),
                t = (0, i.uR)({ tableName: u.me.CompData, data: a.data });
              C(t);
            } catch (a) {}
          }, [C, D]),
          T = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await c.h.get('api/user_personal_data/last_five'),
                t = (0, i.uR)({ tableName: u.me.GData, data: a });
              if (0 === a.length) return;
              let e = (0, i.Yn)(a);
              x(e), d(t);
            } catch (a) {}
          }, [d]),
          L = (0, s.useCallback)(async () => {
            try {
              let { data: a } = await c.h.get('api/file-data/'),
                t = (0, i.Xe)(a.data);
              w(t);
            } catch (a) {}
          }, [w]),
          A = (0, s.useCallback)(() => {
            R(), T(), k(), _(), j(), L(), P();
          }, [R, T, j, k, L, _, P]),
          S = (0, s.useMemo)(
            () => ({
              gTableColumns: v,
              getAllConsentData: j,
              updateMyGData: T,
              getAllPersonalData: R,
              getAllCompanyConsentData: P,
            }),
            [v, j, T, R, P],
          );
        return (
          (0, s.useEffect)(() => {
            D && A();
          }, [D, A]),
          (0, l.jsx)(g.Provider, { value: S, children: t })
        );
      };
    },
    4683: function (a, t, e) {
      e.d(t, {
        L: function () {
          return p;
        },
      });
      var l = e(2265),
        s = e(171),
        n = e(2164),
        r = e(6171),
        c = e(7445),
        o = e(7152),
        i = e(1515),
        u = e(6118);
      let d = (a, t) => {
          let e;
          for (let [, l] of Object.entries(a))
            for (let a of l)
              if (a.id === t) {
                e = a;
                break;
              }
          return e;
        },
        p = () => {
          let { isLoading: a, setIsLoading: t } = (0, c.r)(),
            {
              chats: e,
              userPrompt: p,
              setUserPrompt: h,
              setChats: f,
              resetUserPrompt: m,
              updateChat: y,
              recentChatHistory: b,
              startNewChat: g,
              openPreviousChats: w,
              activeChatID: C,
              setActiveChatID: k,
              setChatHistory: _,
              setRecentChatHistory: v,
            } = (0, o.P)(),
            { user: x } = (0, u.a)(),
            D = (0, l.useCallback)(async () => {
              try {
                let { data: a } = await r.h.get('api/chat/'),
                  t = (0, i.Cf)(a.data),
                  e = (0, i.py)(t);
                if (!e || (v(e), !C)) return;
                let l = d(e, C);
                if (!l) return;
                w(l);
              } catch (a) {}
            }, [v, w, C]),
            N = (0, l.useCallback)(async () => {
              try {
                let { data: a } = await r.h.get('api/history/'),
                  t = (0, i.ef)(a.data);
                _(t);
              } catch (a) {}
            }, [_]),
            R = (0, l.useCallback)(
              async (a) => {
                try {
                  let { data: t } = await r.h.post('api/chat/', { name: a });
                  return t.data.id && k(t.data.id), t.data.id;
                } catch (a) {
                  return a;
                }
              },
              [k],
            ),
            j = (0, l.useCallback)(
              async (a) => {
                let { responseId: t, feedback: e } = a;
                try {
                  let { data: a } = await r.h.post('choice/'.concat(t), { data: e });
                  if (!a.response) return;
                  'success' === a.response && s.toast.success('Feedback provided'), D(), N();
                } catch (a) {}
              },
              [D, N],
            ),
            P = (0, l.useCallback)(async () => {
              var a, e;
              try {
                let e = (0, i.P4)({ isBotResponse: !1, isLoading: !1, text: p.data, images: [] }),
                  l = (0, i.P4)({ isBotResponse: !0, isLoading: !0, text: '', images: [] });
                f(e), f(l), t(!0), m();
                let s = C;
                x && !s && (s = await R(p.data));
                let n = x ? { ...p, chat_id: s } : p,
                  { data: c } = await r.h.post('get-answer-images', n),
                  o = [],
                  u = '';
                c.images &&
                  (o = c.images.map((a) => {
                    let { url: t } = a;
                    return t;
                  })),
                  (null === (a = c.response) || void 0 === a ? void 0 : a.length) && (u = c.response),
                  y({ ...l, isLoading: !1, content: { text: u, images: o } }, c.id),
                  x && (D(), N());
              } catch (a) {
                console.log('e', a),
                  a instanceof n.d7
                    ? s.toast.error(null === (e = a.response) || void 0 === e ? void 0 : e.data.error)
                    : s.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            }, [t, p, f, m, y, x, C, R, N, D]);
          return {
            fetchBotResponse: P,
            isLoading: a,
            chats: e,
            userPrompt: p,
            setUserPrompt: h,
            recentChatHistory: b,
            startNewChat: g,
            openPreviousChats: w,
            fetchChatHistory: N,
            fetchRecentChats: D,
            provideResponseFeedback: j,
          };
        };
    },
    6571: function (a, t, e) {
      e.d(t, {
        T: function () {
          return h;
        },
      });
      var l = e(2265),
        s = e(171),
        n = e(4548),
        r = e.n(n),
        c = e(6171),
        o = e(7445),
        i = e(5888),
        u = e(1515),
        d = e(7350),
        p = e(289);
      let h = () => {
        let { isLoading: a, setIsLoading: t } = (0, o.r)(),
          {
            personalData: e,
            setPersonalData: n,
            gData: h,
            rData: f,
            cData: m,
            screenData: y,
            compData: b,
            setCompData: g,
          } = (0, i.h)(),
          { getAllConsentData: w, gTableColumns: C, updateMyGData: k, getAllPersonalData: _ } = (0, p.q)(),
          v = (0, l.useCallback)(
            async (a) => {
              try {
                if ((t(!0), a.photos)) {
                  let t = new FormData();
                  for (let e of (t.append('field_name', 'photos'), a.photos)) t.append('image_files', e);
                  await c.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete a.photos;
                let e = (0, u.Z4)(a),
                  { data: l } = await c.h.post('api/personal_data_consents_rewards', e),
                  s = (0, u.uR)({ tableName: d.me.PData, data: l.data });
                n(s), await k(), await w(), await _();
              } catch (a) {
              } finally {
                t(!1);
              }
            },
            [t, n, k, w, _],
          ),
          x = (0, l.useCallback)(
            async (a) => {
              let { id: e, payload: l } = a;
              try {
                t(!0),
                  await c.h.patch('api/user_consents_rewards/'.concat(e, '/'), l),
                  await w(),
                  await k(),
                  s.toast.success('Consent updated');
              } catch (a) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, w, k],
          ),
          D = (0, l.useCallback)(
            async (a) => {
              try {
                t(!0);
                let { data: e } = await c.h.post('api/company_consents_rewards', a),
                  l = (0, u.uR)({ tableName: d.me.CompData, data: e.data });
                g(l), s.toast.success('Consent updated');
              } catch (a) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          N = (0, l.useCallback)(
            (a) => {
              var t;
              let l = null !== (t = a.date) && void 0 !== t ? t : r()().format('YYYY-MM-DD'),
                s = [];
              for (let t of a.photos) {
                let a = new FileReader();
                (a.onload = (a) => {
                  s.push({ file_url: a.target && null !== a.target.result ? a.target.result : '' });
                }),
                  a.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...e, [l]: { ...a, photos: [...s] } };
                n(t);
              }, 3e3);
            },
            [e, n],
          );
        return {
          savePersonalData: v,
          isLoading: a,
          personalData: e,
          updateConsentRewards: x,
          savePersonalDataTemporarily: N,
          updateCompanyConsentRewards: D,
          gData: h,
          rData: f,
          cData: m,
          screenData: y,
          gTableColumns: C,
          compData: b,
        };
      };
    },
    5888: function (a, t, e) {
      e.d(t, {
        h: function () {
          return c;
        },
      });
      var l = e(3198),
        s = e(2265),
        n = e(5531),
        r = e(859);
      let c = () => {
        let {
            personalData: a,
            gData: t,
            rData: e,
            cData: c,
            screenData: o,
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
          h = (0, s.useCallback)(
            (a) => {
              u((0, r.Jg)(a));
            },
            [u],
          ),
          f = (0, s.useCallback)(
            (a) => {
              u((0, r.py)(a));
            },
            [u],
          ),
          m = (0, s.useCallback)(
            (a) => {
              u((0, r.UD)(a));
            },
            [u],
          ),
          y = (0, s.useCallback)(
            (a) => {
              u((0, r.Y4)(a));
            },
            [u],
          );
        return {
          setPersonalData: d,
          setGData: p,
          setRData: h,
          setCData: f,
          setScreenData: y,
          setCompData: m,
          screenData: o,
          cData: c,
          rData: e,
          personalData: a,
          gData: t,
          compData: i,
        };
      };
    },
    1799: function (a, t, e) {
      e.d(t, {
        I: function () {
          return c;
        },
      });
      var l = e(3198),
        s = e(2265),
        n = e(5531),
        r = e(54);
      let c = () => {
        let { weather: a } = (0, l.v9)((a) => a.weather),
          t = (0, n.TL)(),
          e = (0, s.useCallback)(
            (a) => {
              t((0, r._)(a));
            },
            [t],
          );
        return { weather: a, setWeather: e };
      };
    },
  },
]);
