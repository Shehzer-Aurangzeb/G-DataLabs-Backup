'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [289],
  {
    6171: function (e, t, a) {
      a.d(t, {
        h: function () {
          return l;
        },
      });
      var n = a(9222),
        r = a(6022);
      let l = n.default.create({ baseURL: 'https://g-datalabs.com/' });
      l.interceptors.request.use(
        async (e) => {
          let t = (0, r.dT)();
          return t && (e.headers.Authorization = 'Bearer '.concat(t.key)), e;
        },
        (e) => Promise.reject(e),
      ),
        l.interceptors.response.use(
          (e) => e,
          (e) => {
            throw e;
          },
        );
    },
    289: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return C;
        },
        q: function () {
          return h;
        },
      });
      var n = a(7437),
        r = a(2265),
        l = a(5888),
        s = a(6171),
        i = a(6118),
        o = a(1515),
        u = a(7350),
        c = a(9222);
      let d = (e) => {
        let { successCallback: t, errorCallback: a } = e;
        navigator.geolocation.getCurrentPosition(t, a, { enableHighAccuracy: !0 });
      };
      var f = a(1799);
      let m = () => {
        let { setWeather: e } = (0, f.I)(),
          { user: t } = (0, i.a)(),
          a = (0, r.useCallback)(
            async (t) => {
              try {
                let { coords: a } = t,
                  { data: n } = await c.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(a.latitude, '&lon=')
                      .concat(a.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=metric'),
                  );
                if (!n.main) return;
                let r = { lowestTemperature: n.main.temp_min, highestTemperature: n.main.temp_max };
                e(r);
              } catch (e) {}
            },
            [e],
          ),
          n = (0, r.useCallback)(async () => {}, []);
        return (
          (0, r.useEffect)(() => {
            t && d({ successCallback: a, errorCallback: n }),
              setInterval(() => {
                d({ successCallback: a, errorCallback: n });
              }, 36e5);
          }, [n, a, t]),
          { getCurrentLocationWeather: a }
        );
      };
      var p = a(7999);
      let g = (0, r.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
        }),
        h = () => (0, r.useContext)(g);
      var C = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: c, setRData: d, setCData: f, setScreenData: h } = (0, l.h)(),
          { fetchChatHistory: C, fetchRecentChats: _ } = (0, p.L)(),
          [y, D] = (0, r.useState)([]),
          { user: b } = (0, i.a)();
        m();
        let v = (0, r.useCallback)(async () => {
            let { data: e } = await s.h.get('api/personal_data_consents_rewards'),
              t = (0, o.uR)({ tableName: u.me.PData, data: e.data });
            a(t);
          }, [a]),
          w = (0, r.useCallback)(async () => {
            let { data: e } = await s.h.get('api/user_consents_rewards'),
              t = (0, o.uR)({ tableName: u.me.RData, data: e.data }),
              a = (0, o.uR)({ tableName: u.me.CData, data: e.data });
            d(t), f(a);
          }, [d, f]),
          k = (0, r.useCallback)(async () => {
            let { data: e } = await s.h.get('api/user_personal_data/last_five'),
              t = (0, o.uR)({ tableName: u.me.GData, data: e });
            if (0 === e.length) return;
            let a = (0, o.Yn)(e);
            D(a), c(t);
          }, [c]),
          Y = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await s.h.get('api/file-data/'),
                t = (0, o.Xe)(e.data);
              h(t);
            } catch (e) {}
          }, [h]),
          R = (0, r.useCallback)(() => {
            v(), k(), C(), _(), w(), Y();
          }, [v, k, w, C, Y, _]);
        return (
          (0, r.useEffect)(() => {
            b && R();
          }, [b, R]),
          (0, n.jsx)(g.Provider, {
            value: { gTableColumns: y, getAllConsentData: w, updateMyGData: k, getAllPersonalData: v },
            children: t,
          })
        );
      };
    },
    7999: function (e, t, a) {
      a.d(t, {
        L: function () {
          return d;
        },
      });
      var n = a(2265),
        r = a(171),
        l = a(2164),
        s = a(6171),
        i = a(7445),
        o = a(7152),
        u = a(1515),
        c = a(6118);
      let d = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          {
            chats: a,
            userPrompt: d,
            setUserPrompt: f,
            setChats: m,
            resetUserPrompt: p,
            updateChat: g,
            recentChatHistory: h,
            startNewChat: C,
            openPreviousChats: _,
            activeChatID: y,
            setActiveChatID: D,
            setChatHistory: b,
            setRecentChatHistory: v,
          } = (0, o.P)(),
          { user: w } = (0, c.a)(),
          k = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await s.h.get('api/chat/'),
                t = (0, u.Cf)(e.data),
                a = (0, u.py)(t);
              a && v(a);
            } catch (e) {}
          }, [v]),
          Y = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await s.h.get('api/history/'),
                t = (0, u.ef)(e.data);
              b(t);
            } catch (e) {}
          }, [b]),
          R = (0, n.useCallback)(
            async (e) => {
              try {
                let { data: t } = await s.h.post('api/chat/', { name: e });
                return t.data.id && D(t.data.id), t.data.id;
              } catch (e) {
                return e;
              }
            },
            [D],
          ),
          E = (0, n.useCallback)(async () => {
            try {
              let e = (0, u.P4)({ isBotResponse: !1, isLoading: !1, text: d.data, images: [] }),
                a = (0, u.P4)({ isBotResponse: !0, isLoading: !0, text: '', images: [] });
              m(e), m(a), t(!0), p();
              let n = y;
              w && !n && (n = await R(d.data));
              let r = w ? { ...d, chat_id: n } : d,
                { data: l } = await s.h.post('get-answer-images', r),
                i = [],
                o = '';
              l.images &&
                (i = l.images.map((e) => {
                  let { url: t } = e;
                  return t;
                })),
                l.response && (o = l.response),
                g({ ...a, isLoading: !1, content: { text: o, images: i } }),
                w && (k(), Y());
            } catch (t) {
              var e;
              t instanceof l.d7
                ? r.toast.error(null === (e = t.response) || void 0 === e ? void 0 : e.data.error)
                : r.toast.error('Something went wrong');
            } finally {
              t(!1);
            }
          }, [t, d, m, p, g, w, y, R, Y, k]);
        return {
          fetchBotResponse: E,
          isLoading: e,
          chats: a,
          userPrompt: d,
          setUserPrompt: f,
          recentChatHistory: h,
          startNewChat: C,
          openPreviousChats: _,
          fetchChatHistory: Y,
          fetchRecentChats: k,
        };
      };
    },
    6022: function (e, t, a) {
      a.d(t, {
        Fx: function () {
          return s;
        },
        KV: function () {
          return i;
        },
        dT: function () {
          return l;
        },
      });
      var n = a(1490),
        r = a(7350);
      let l = () => {
          let e = n.Z.get(r.E9.USER);
          if (e) {
            let t = JSON.parse(e);
            return t;
          }
          return null;
        },
        s = (e) => {
          let t = JSON.stringify(e),
            a = e.key;
          n.Z.set(r.E9.TOKEN, a), n.Z.set(r.E9.USER, t);
        },
        i = () => {
          n.Z.remove(r.E9.USER), n.Z.remove(r.E9.TOKEN);
        };
    },
    1515: function (e, t, a) {
      a.d(t, {
        Cf: function () {
          return y;
        },
        El: function () {
          return _;
        },
        O5: function () {
          return g;
        },
        P4: function () {
          return f;
        },
        Xe: function () {
          return C;
        },
        Yn: function () {
          return p;
        },
        Z4: function () {
          return d;
        },
        ef: function () {
          return h;
        },
        kC: function () {
          return c;
        },
        py: function () {
          return u;
        },
        uR: function () {
          return m;
        },
      });
      var n = a(4548),
        r = a.n(n),
        l = a(1872),
        s = a(7350),
        i = a(9611);
      let o = (e, t, a) => {
          e[t] || (e[t] = []), e[t].push(a);
        },
        u = (e) => {
          if (0 === e.length) return;
          let t = {},
            a = r()(),
            n = e.sort((e, t) => {
              let a = r()(e.date),
                n = r()(t.date);
              return n.diff(a);
            });
          return (
            n.forEach((e) => {
              let n = a.diff(e.date, 'day');
              if (0 === n) {
                o(t, 'Today', e);
                return;
              }
              if (1 === n) {
                o(t, 'Yesterday', e);
                return;
              }
              if (n <= 7) {
                o(t, 'Last 7 days', e);
                return;
              }
              if (n <= 30) o(t, 'Last 30 days', e);
              else {
                let a = r()(e.date).format('MMMM');
                o(t, a, e);
              }
            }),
            t
          );
        },
        c = (e) => {
          let t = e.split(' '),
            a = t.map((e) => e[0].toUpperCase() + e.slice(1, e.length)).join(' ');
          return a;
        },
        d = (e) =>
          Object.entries(e).map((e) => {
            let [t, a] = e;
            return {
              value: 'object' == typeof a ? ''.concat(a) : a.toString(),
              personal_data_field: { field_name: t.toUpperCase() },
            };
          }),
        f = (e) => {
          let { isBotResponse: t, isLoading: a, text: n } = e,
            r = e.images.map((e) => e.url);
          return { messageID: (0, l.Z)(), isBotResponse: t, isLoading: a, content: { text: n, images: r } };
        },
        m = (e) => {
          let { tableName: t, data: a } = e,
            n = {};
          if (t === s.me.PData)
            for (let e of a) {
              let t = r()(e.created_at).format('YYYY-MM-DD HH:mm:ss'),
                a = e.personal_data_field.field_name.toLowerCase(),
                { files: l } = e;
              n[t] = { ...n[t], [a]: 'photos' === a && l.length > 0 ? l : e.value };
            }
          if (t === s.me.GData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              for (let a of e.values) {
                let e = r()(a.created_at).format('YYYY-MM-DD HH:mm:ss');
                n[t] = { ...n[t], [e]: a.value };
              }
              n[t] = {
                ...n[t],
                'Consent Value': e.consents_to_sell.toString().toUpperCase(),
                Rewards: e.demanded_reward_value,
              };
            }
          if (t === s.me.RData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              n[t] = {
                ...n[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                PDefinedValue: e.demanded_reward_value,
                OtherCompValue: '0.0',
                id: e.id,
              };
            }
          if (t === s.me.CData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              n[t] = {
                ...n[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                Definition: i.JT[e.field_name.toLowerCase()],
                Companies: '',
                Use: '',
                id: e.id,
              };
            }
          return n;
        },
        p = (e) => {
          let t = [],
            a = 0;
          for (let t of e) {
            let n = t.values.length;
            n > e[a].values.length && (a = e.indexOf(t));
          }
          let n = e[a].values.map((e) => r()(e.created_at).format('YYYY-MM-DD HH:mm:ss'));
          t = ['Consent', ...n, 'Consent Value', 'Rewards'];
          let l = t.map((e) => ({ Header: e, accessor: e }));
          return l;
        },
        g = (e) => {
          let t = {};
          for (let a of e)
            t[a.id] = { consents_to_sell: 'TRUE' === a.Consent, demanded_reward_value: Number(a.PDefinedValue) };
          return t;
        },
        h = (e) => {
          let t = e.map((e) => {
            let { answer: t, images: a, chat_id: n, choice: l, question: s, timestamp: i } = e;
            return {
              answer: t,
              chatID: n,
              choice: l,
              question: s,
              date: r()(i).format('YYYY-MM-DD'),
              images: null != a ? JSON.parse(a.replace(/'/g, '"')) : [],
            };
          });
          return t;
        },
        C = (e) =>
          e.map((e) => {
            let { id: t, screen_recording_url: a, camera_recording_url: n, timestamp: l, data: s } = e;
            return {
              id: t,
              screenRecording: a,
              cameraRecording: null != n ? n : '',
              date: r()(l).format('YYYY-MM-DD'),
              detail: s,
            };
          }),
        _ = (e) => {
          let t = e[0].toUpperCase(),
            a = document.createElement('canvas'),
            n = a.getContext('2d');
          return (
            (a.width = 100),
            (a.height = 100),
            n &&
              ((n.fillStyle = '#F3511C'),
              n.fillRect(0, 0, a.width, a.height),
              (n.font = 'bold 50px DM-Sans'),
              (n.fillStyle = '#ffffff'),
              (n.textAlign = 'center'),
              (n.textBaseline = 'middle'),
              n.fillText(t, a.width / 2, a.height / 2)),
            a.toDataURL('image/png')
          );
        },
        y = (e) =>
          e.map((e) => {
            let t = [];
            for (let a of e.history) {
              let e = f({
                  text: a.answer,
                  images: null != a.images ? JSON.parse(a.images.replace(/'/g, '"')).map((e) => ({ url: e })) : [],
                  isBotResponse: !0,
                  isLoading: !1,
                }),
                n = f({ text: a.question, images: [], isBotResponse: !1, isLoading: !1 });
              t.push(n), t.push(e);
            }
            return { title: e.name, date: r()(e.created_at).format('YYYY-MM-DD'), id: e.id, messages: t };
          });
    },
    7445: function (e, t, a) {
      a.d(t, {
        r: function () {
          return i;
        },
      });
      var n = a(3198),
        r = a(2265),
        l = a(5531),
        s = a(22);
      let i = () => {
        let { isLoading: e } = (0, n.v9)((e) => e.loading),
          t = (0, l.TL)(),
          a = (0, r.useCallback)(
            (e) => {
              t((0, s.d)(e));
            },
            [t],
          );
        return { isLoading: e, setIsLoading: a };
      };
    },
    5888: function (e, t, a) {
      a.d(t, {
        h: function () {
          return i;
        },
      });
      var n = a(3198),
        r = a(2265),
        l = a(5531),
        s = a(859);
      let i = () => {
        let { personalData: e, gData: t, rData: a, cData: i, screenData: o } = (0, n.v9)((e) => e.my_g_data),
          u = (0, l.TL)(),
          c = (0, r.useCallback)(
            (e) => {
              u((0, s.O$)(e));
            },
            [u],
          ),
          d = (0, r.useCallback)(
            (e) => {
              u((0, s.Pn)(e));
            },
            [u],
          ),
          f = (0, r.useCallback)(
            (e) => {
              u((0, s.Jg)(e));
            },
            [u],
          ),
          m = (0, r.useCallback)(
            (e) => {
              u((0, s.py)(e));
            },
            [u],
          ),
          p = (0, r.useCallback)(
            (e) => {
              u((0, s.Y4)(e));
            },
            [u],
          );
        return {
          setPersonalData: c,
          setGData: d,
          setRData: f,
          setCData: m,
          setScreenData: p,
          screenData: o,
          cData: i,
          rData: a,
          personalData: e,
          gData: t,
        };
      };
    },
    6118: function (e, t, a) {
      a.d(t, {
        a: function () {
          return o;
        },
      });
      var n = a(3198),
        r = a(2265),
        l = a(5531),
        s = a(6022),
        i = a(8557);
      let o = () => {
        let { isAuthenticated: e, user: t } = (0, n.v9)((e) => e.user),
          a = (0, l.TL)(),
          o = (0, r.useCallback)(
            (e) => {
              a((0, i.K)(e)), e.user ? (0, s.Fx)(e.user) : (0, s.KV)();
            },
            [a],
          );
        return (
          (0, r.useEffect)(() => {
            let e = (0, s.dT)();
            e && !t && o({ user: e, isAuthenticated: !0 });
          }, []),
          { isAuthenticated: e, user: t, setUser: o }
        );
      };
    },
    1799: function (e, t, a) {
      a.d(t, {
        I: function () {
          return i;
        },
      });
      var n = a(3198),
        r = a(2265),
        l = a(5531),
        s = a(54);
      let i = () => {
        let { weather: e } = (0, n.v9)((e) => e.weather),
          t = (0, l.TL)(),
          a = (0, r.useCallback)(
            (e) => {
              t((0, s._)(e));
            },
            [t],
          );
        return { weather: e, setWeather: a };
      };
    },
    7350: function (e, t, a) {
      var n, r, l, s, i, o;
      a.d(t, {
        E9: function () {
          return r;
        },
        Q2: function () {
          return n;
        },
        me: function () {
          return l;
        },
      }),
        ((s = n || (n = {})).DARK = 'dark'),
        (s.LIGHT = 'light'),
        ((i = r || (r = {})).USER = 'user'),
        (i.TOKEN = 'token_datalabs'),
        ((o = l || (l = {})).PData = 'Personal Data'),
        (o.GData = 'My G-Data'),
        (o.RData = 'Rewards Data'),
        (o.CData = 'Consent Data');
    },
  },
]);
