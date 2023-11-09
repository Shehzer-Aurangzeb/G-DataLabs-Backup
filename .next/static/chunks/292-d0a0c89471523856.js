'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [292],
  {
    6171: function (e, t, a) {
      a.d(t, {
        h: function () {
          return s;
        },
      });
      var r = a(9222),
        n = a(6022);
      let s = r.default.create({ baseURL: 'https://api.g-datalabs.com/' });
      s.interceptors.request.use(
        async (e) => {
          let t = (0, n.dT)();
          return t && (e.headers.Authorization = 'Bearer '.concat(t.key)), e;
        },
        (e) => Promise.reject(e),
      ),
        s.interceptors.response.use(
          (e) => e,
          (e) => {
            throw e;
          },
        );
    },
    346: function (e, t, a) {
      a.d(t, {
        a: function () {
          return p;
        },
      });
      var r = a(2265),
        n = a(4033),
        s = a(171),
        o = a(2164),
        l = a(6171),
        i = a(7445),
        u = a(6118),
        c = a(9611),
        d = a(1515),
        f = a(7152);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          { setUser: a, isAuthenticated: p, user: m } = (0, u.a)(),
          { deleteChats: h } = (0, f.P)(),
          g = (0, n.useRouter)(),
          y = (0, r.useCallback)(async (e) => {
            let { data: t } = await l.h.get('api/user_profile/1/', { headers: { Authorization: 'Bearer '.concat(e) } }),
              { email: a, first_name: r, last_name: n, phone_number: s, total_rewards: o, username: i, id: u } = t.data,
              { profile_picture_url: c } = t.data;
            c || (c = (0, d.El)(r));
            let f = {
              email: a,
              firstName: r,
              lastName: n,
              id: u,
              username: i,
              image: c,
              phoneNumber: s,
              totalRewards: o,
              key: '',
            };
            return f;
          }, []),
          _ = (0, r.useCallback)(
            async (e) => {
              var r, n;
              try {
                t(!0);
                let { data: n } = await l.h.post('login_api', e),
                  o = await y(n.access_token),
                  i = {
                    ...o,
                    totalRewards: null !== (r = o.totalRewards) && void 0 !== r ? r : 0,
                    key: n.access_token,
                  };
                a({ user: i, isAuthenticated: !0 }), g.replace(c.yy.HOME), s.toast.success('Welcome to G-Data Labs');
              } catch (e) {
                e instanceof o.d7
                  ? s.toast.error(null === (n = e.response) || void 0 === n ? void 0 : n.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, g, y],
          ),
          w = (0, r.useCallback)(
            async (e) => {
              var r, n;
              try {
                t(!0);
                let n = new FormData();
                for (let [t, a] of Object.entries(e)) n.append(t, a);
                let { data: o } = await l.h.patch('api/user_profile/1/', n),
                  { profile_picture_url: i } = o.data;
                i || (i = (0, d.El)(o.data.first_name));
                let u = {
                  ...m,
                  firstName: o.data.first_name,
                  lastName: o.data.last_name,
                  phoneNumber: o.data.phone_number,
                  totalRewards: null !== (r = o.data.total_rewards) && void 0 !== r ? r : 0,
                  email: o.data.email,
                  image: i,
                  username: o.data.username,
                  id: o.data.id,
                  key: null == m ? void 0 : m.key,
                };
                a({ user: u, isAuthenticated: !0 }), s.toast.success('Personal information updated successfully');
              } catch (e) {
                e instanceof o.d7
                  ? s.toast.error(null === (n = e.response) || void 0 === n ? void 0 : n.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, m],
          ),
          v = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('signup_api', e);
                if (a.error) {
                  s.toast.error(a.error);
                  return;
                }
                s.toast.success('Your account has been successfully created'), g.replace(c.yy.LOGIN);
              } catch (e) {
                s.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          C = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_password_email', e);
                s.toast.success(a.message), g.push(c.yy.CONFIRMPASSWORD);
              } catch (e) {
                var a;
                e instanceof o.d7
                  ? s.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          D = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_token_confirm', e);
                s.toast.success(a.message), g.push(c.yy.LOGIN);
              } catch (e) {
                var a;
                e instanceof o.d7
                  ? s.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          k = (0, r.useCallback)(() => {
            a({ user: void 0, isAuthenticated: !1 }), h(), s.toast.success('Logout Successful.'), g.replace(c.yy.LOGIN);
          }, [a, g, h]);
        return {
          loginUser: _,
          logoutUser: k,
          isLoading: e,
          registerUser: v,
          isAuthenticated: p,
          user: m,
          updateUser: w,
          resetPassword: C,
          confirmPassword: D,
        };
      };
    },
    7999: function (e, t, a) {
      a.d(t, {
        L: function () {
          return d;
        },
      });
      var r = a(2265),
        n = a(171),
        s = a(2164),
        o = a(6171),
        l = a(7445),
        i = a(7152),
        u = a(1515),
        c = a(6118);
      let d = () => {
        let { isLoading: e, setIsLoading: t } = (0, l.r)(),
          {
            chats: a,
            userPrompt: d,
            setUserPrompt: f,
            setChats: p,
            resetUserPrompt: m,
            updateChat: h,
            recentChatHistory: g,
            startNewChat: y,
            openPreviousChats: _,
            activeChatID: w,
            setActiveChatID: v,
            setChatHistory: C,
            setRecentChatHistory: D,
          } = (0, i.P)(),
          { user: k } = (0, c.a)(),
          b = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await o.h.get('api/chat/'),
                t = (0, u.Cf)(e.data),
                a = (0, u.py)(t);
              a && D(a);
            } catch (e) {}
          }, [D]),
          R = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await o.h.get('api/history/'),
                t = (0, u.ef)(e.data);
              C(t);
            } catch (e) {}
          }, [C]),
          Y = (0, r.useCallback)(
            async (e) => {
              try {
                let { data: t } = await o.h.post('api/chat/', { name: e });
                return t.data.id && v(t.data.id), t.data.id;
              } catch (e) {
                return e;
              }
            },
            [v],
          ),
          S = (0, r.useCallback)(async () => {
            try {
              let e = (0, u.P4)({ isBotResponse: !1, isLoading: !1, text: d.data, images: [] }),
                a = (0, u.P4)({ isBotResponse: !0, isLoading: !0, text: '', images: [] });
              p(e), p(a), t(!0), m();
              let r = w;
              k && !r && (r = await Y(d.data));
              let n = k ? { ...d, chat_id: r } : d,
                { data: s } = await o.h.post('get-answer-images', n),
                l = [],
                i = '';
              s.images &&
                (l = s.images.map((e) => {
                  let { url: t } = e;
                  return t;
                })),
                s.response && (i = s.response),
                h({ ...a, isLoading: !1, content: { text: i, images: l } }),
                k && (b(), R());
            } catch (t) {
              var e;
              t instanceof s.d7
                ? n.toast.error(null === (e = t.response) || void 0 === e ? void 0 : e.data.error)
                : n.toast.error('Something went wrong');
            } finally {
              t(!1);
            }
          }, [t, d, p, m, h, k, w, Y, R, b]);
        return {
          fetchBotResponse: S,
          isLoading: e,
          chats: a,
          userPrompt: d,
          setUserPrompt: f,
          recentChatHistory: g,
          startNewChat: y,
          openPreviousChats: _,
          fetchChatHistory: R,
          fetchRecentChats: b,
        };
      };
    },
    6022: function (e, t, a) {
      a.d(t, {
        Fx: function () {
          return o;
        },
        KV: function () {
          return l;
        },
        dT: function () {
          return s;
        },
      });
      var r = a(1490),
        n = a(7350);
      let s = () => {
          let e = r.Z.get(n.E9.USER);
          if (e) {
            let t = JSON.parse(e);
            return t;
          }
          return null;
        },
        o = (e) => {
          let t = JSON.stringify(e),
            a = e.key;
          r.Z.set(n.E9.TOKEN, a), r.Z.set(n.E9.USER, t);
        },
        l = () => {
          r.Z.remove(n.E9.USER), r.Z.remove(n.E9.TOKEN);
        };
    },
    1515: function (e, t, a) {
      a.d(t, {
        Cf: function () {
          return w;
        },
        El: function () {
          return _;
        },
        O5: function () {
          return h;
        },
        P4: function () {
          return f;
        },
        Xe: function () {
          return y;
        },
        Yn: function () {
          return m;
        },
        Z4: function () {
          return d;
        },
        ef: function () {
          return g;
        },
        kC: function () {
          return c;
        },
        py: function () {
          return u;
        },
        uR: function () {
          return p;
        },
      });
      var r = a(4548),
        n = a.n(r),
        s = a(1872),
        o = a(7350),
        l = a(9611);
      let i = (e, t, a) => {
          e[t] || (e[t] = []), e[t].push(a);
        },
        u = (e) => {
          if (0 === e.length) return;
          let t = {},
            a = n()(),
            r = e.sort((e, t) => {
              let a = n()(e.date),
                r = n()(t.date);
              return r.diff(a);
            });
          return (
            r.forEach((e) => {
              let r = a.diff(e.date, 'day');
              if (0 === r) {
                i(t, 'Today', e);
                return;
              }
              if (1 === r) {
                i(t, 'Yesterday', e);
                return;
              }
              if (r <= 7) {
                i(t, 'Last 7 days', e);
                return;
              }
              if (r <= 30) i(t, 'Last 30 days', e);
              else {
                let a = n()(e.date).format('MMMM');
                i(t, a, e);
              }
            }),
            t
          );
        },
        c = (e) => {
          let t = e.split(' ').filter((e) => e.length > 0),
            a = '';
          return t.length > 0 && (a = t.map((e) => e[0].toUpperCase() + e.slice(1, e.length)).join(' ')), a;
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
          let { isBotResponse: t, isLoading: a, text: r } = e,
            n = e.images.map((e) => e.url);
          return { messageID: (0, s.Z)(), isBotResponse: t, isLoading: a, content: { text: r, images: n } };
        },
        p = (e) => {
          let { tableName: t, data: a } = e,
            r = {};
          if (t === o.me.PData)
            for (let e of a) {
              let t = n()(e.created_at).format('YYYY-MM-DD'),
                a = e.personal_data_field.field_name.toLowerCase(),
                { files: s } = e;
              r[t] = { ...r[t], [a]: 'photos' === a && s.length > 0 ? s : e.value };
            }
          if (t === o.me.GData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              for (let a of e.values) {
                let e = n()(a.created_at).format('YYYY-MM-DD');
                r[t] = { ...r[t], [e]: 'Photos' === t ? a.files.map((e) => e) : a.value };
              }
              r[t] = {
                ...r[t],
                'Consent Value': e.consents_to_sell.toString().toUpperCase(),
                Rewards: e.demanded_reward_value,
              };
            }
          if (t === o.me.RData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              r[t] = {
                ...r[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                PDefinedValue: e.demanded_reward_value,
                OtherCompValue: '0.0',
                id: e.id,
              };
            }
          if (t === o.me.CData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              r[t] = {
                ...r[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                Definition: l.JT[e.field_name.toLowerCase()],
                Companies: '',
                Use: '',
                id: e.id,
              };
            }
          return r;
        },
        m = (e) => {
          let t = [],
            a = 0;
          for (let t of e) {
            let r = t.values.length;
            r > e[a].values.length && (a = e.indexOf(t));
          }
          let r = e[a].values
            .map((e) => n()(e.created_at).format('YYYY-MM-DD'))
            .filter((e, t, a) => a.indexOf(e) === t);
          t = ['Consent', ...r, 'Consent Value', 'Rewards'];
          let s = t.map((e) => ({ Header: e, accessor: e }));
          return s;
        },
        h = (e) => {
          let t = {};
          for (let a of e)
            t[a.id] = { consents_to_sell: 'TRUE' === a.Consent, demanded_reward_value: Number(a.PDefinedValue) };
          return t;
        },
        g = (e) => {
          let t = e.map((e) => {
            let { answer: t, images: a, chat_id: r, choice: s, question: o, timestamp: l } = e;
            return {
              answer: t,
              chatID: r,
              choice: s,
              question: o,
              date: n()(l).format('YYYY-MM-DD'),
              images: null != a ? JSON.parse(a.replace(/'/g, '"')) : [],
            };
          });
          return t;
        },
        y = (e) =>
          e.map((e) => {
            let { id: t, screen_recording_url: a, camera_recording_url: r, timestamp: s, data: o } = e;
            return {
              id: t,
              screenRecording: a,
              cameraRecording: null != r ? r : '',
              date: n()(s).format('YYYY-MM-DD'),
              detail: o,
            };
          }),
        _ = (e) => {
          let t = e[0].toUpperCase(),
            a = document.createElement('canvas'),
            r = a.getContext('2d');
          return (
            (a.width = 100),
            (a.height = 100),
            r &&
              ((r.fillStyle = '#F3511C'),
              r.fillRect(0, 0, a.width, a.height),
              (r.font = 'bold 50px DM-Sans'),
              (r.fillStyle = '#ffffff'),
              (r.textAlign = 'center'),
              (r.textBaseline = 'middle'),
              r.fillText(t, a.width / 2, a.height / 2)),
            a.toDataURL('image/png')
          );
        },
        w = (e) =>
          e.map((e) => {
            let t = [],
              a = e.history.sort((e, t) => (n()(e.timestamp).isAfter(n()(t.timestamp)) ? 1 : -1));
            for (let e of a) {
              let a = f({
                  text: e.answer,
                  images: null != e.images ? JSON.parse(e.images.replace(/'/g, '"')).map((e) => ({ url: e })) : [],
                  isBotResponse: !0,
                  isLoading: !1,
                }),
                r = f({ text: e.question, images: [], isBotResponse: !1, isLoading: !1 });
              t.push(r), t.push(a);
            }
            return { title: e.name, date: n()(e.created_at).format('YYYY-MM-DD HH:mm:ss'), id: e.id, messages: t };
          });
    },
    7445: function (e, t, a) {
      a.d(t, {
        r: function () {
          return l;
        },
      });
      var r = a(3198),
        n = a(2265),
        s = a(5531),
        o = a(22);
      let l = () => {
        let { isLoading: e } = (0, r.v9)((e) => e.loading),
          t = (0, s.TL)(),
          a = (0, n.useCallback)(
            (e) => {
              t((0, o.d)(e));
            },
            [t],
          );
        return { isLoading: e, setIsLoading: a };
      };
    },
    6118: function (e, t, a) {
      a.d(t, {
        a: function () {
          return i;
        },
      });
      var r = a(3198),
        n = a(2265),
        s = a(5531),
        o = a(6022),
        l = a(8557);
      let i = () => {
        let { isAuthenticated: e, user: t } = (0, r.v9)((e) => e.user),
          a = (0, s.TL)(),
          i = (0, n.useCallback)(
            (e) => {
              a((0, l.K)(e)), e.user ? (0, o.Fx)(e.user) : (0, o.KV)();
            },
            [a],
          );
        return (
          (0, n.useEffect)(() => {
            let e = (0, o.dT)();
            e && !t && i({ user: e, isAuthenticated: !0 });
          }, []),
          { isAuthenticated: e, user: t, setUser: i }
        );
      };
    },
    7350: function (e, t, a) {
      var r, n, s, o, l, i;
      a.d(t, {
        E9: function () {
          return n;
        },
        Q2: function () {
          return r;
        },
        me: function () {
          return s;
        },
      }),
        ((o = r || (r = {})).DARK = 'dark'),
        (o.LIGHT = 'light'),
        ((l = n || (n = {})).USER = 'user'),
        (l.TOKEN = 'token_datalabs'),
        ((i = s || (s = {})).PData = 'Personal Data'),
        (i.GData = 'My G-Data'),
        (i.RData = 'Rewards Data'),
        (i.CData = 'Consent Data');
    },
  },
]);