'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [100],
  {
    6171: function (e, t, a) {
      a.d(t, {
        h: function () {
          return o;
        },
      });
      var r = a(9222),
        n = a(6022);
      let o = r.default.create({ baseURL: 'https://api.g-datalabs.com/' });
      o.interceptors.request.use(
        async (e) => {
          let t = (0, n.dT)();
          return t && (e.headers.Authorization = 'Bearer '.concat(t.key)), e;
        },
        (e) => Promise.reject(e),
      ),
        o.interceptors.response.use(
          (e) => e,
          (e) => {
            throw e;
          },
        );
    },
    910: function (e, t, a) {
      var r, n;
      a.d(t, {
        CQ: function () {
          return i;
        },
        D$: function () {
          return s;
        },
        E0: function () {
          return l;
        },
        Z8: function () {
          return r;
        },
        pY: function () {
          return o;
        },
        vK: function () {
          return u;
        },
      }),
        ((n = r || (r = {})).PERSONAL = 'Personal'),
        (n.COMPANY = 'Company');
      let o = [
          { label: r.PERSONAL, value: r.PERSONAL },
          { label: r.COMPANY, value: r.COMPANY },
        ],
        s = { email: '', password: '' },
        l = { email: '' },
        i = { token: '', password: '', confirm_password: '' },
        u = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          privacyPolicy: !1,
          termsConditions: !1,
          cookiePolicy: !1,
          accountType: o[0].label,
        };
    },
    6548: function (e, t, a) {
      a.d(t, {
        y: function () {
          return r;
        },
      });
      let r = {
        HOME: '/',
        HISTORY: '/history',
        MYGDATA: '/my_g-data',
        OURGDATA: '/our_g-data',
        ACCOUNT: '/account',
        PERSONAL: '/my_g-data/personal-data',
        CONSENT: '/my_g-data/consent',
        COMPANY: '/my_g-data/company',
        REWARDS: '/my_g-data/rewards',
        SCREEN: '/my_g-data/screen-data',
        SIGNUP: '/signup',
        LOGIN: '/login',
        RESETPASSWORD: '/reset_password',
        PRIVACY: 'https://www.g-datalabs.com/privacy_policy',
        COOKIEPOLICY: 'https://www.g-datalabs.com/cookie_and_policy',
        TERMS: 'https://www.g-datalabs.com/terms_condition',
        CONFIRMPASSWORD: '/reset_password/confirm',
      };
    },
    346: function (e, t, a) {
      a.d(t, {
        a: function () {
          return p;
        },
      });
      var r = a(2265),
        n = a(4033),
        o = a(171),
        s = a(2164),
        l = a(6171),
        i = a(7445),
        u = a(6118),
        c = a(910),
        d = a(6548),
        f = a(1515),
        m = a(7152);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          { setUser: a, isAuthenticated: p, user: _ } = (0, u.a)(),
          { deleteChats: g } = (0, m.P)(),
          h = (0, n.useRouter)(),
          y = (0, r.useCallback)(async (e) => {
            let { data: t } = await l.h.get('api/user_profile/1/', { headers: { Authorization: 'Bearer '.concat(e) } }),
              {
                email: a,
                first_name: r,
                last_name: n,
                phone_number: o,
                total_rewards: s,
                username: i,
                id: u,
                is_company: d,
              } = t.data,
              { profile_picture_url: m } = t.data;
            m || (m = (0, f.El)(r));
            let p = {
              email: a,
              firstName: r,
              lastName: n,
              id: u,
              username: i,
              image: m,
              phoneNumber: o,
              totalRewards: s,
              key: '',
              accountType: d ? c.Z8.COMPANY : c.Z8.PERSONAL,
            };
            return p;
          }, []),
          C = (0, r.useCallback)(
            async (e) => {
              var r, n;
              try {
                t(!0);
                let { data: n } = await l.h.post('login_api', e),
                  s = await y(n.access_token),
                  i = {
                    ...s,
                    totalRewards: null !== (r = s.totalRewards) && void 0 !== r ? r : 0,
                    key: n.access_token,
                  };
                a({ user: i, isAuthenticated: !0 }), h.replace(d.y.HOME), o.toast.success('Welcome to G-Data Labs');
              } catch (e) {
                e instanceof s.d7
                  ? o.toast.error(null === (n = e.response) || void 0 === n ? void 0 : n.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, h, y],
          ),
          w = (0, r.useCallback)(
            async (e) => {
              var r, n;
              try {
                t(!0);
                let n = new FormData();
                for (let [t, a] of Object.entries(e)) n.append(t, a);
                let { data: s } = await l.h.patch('api/user_profile/1/', n),
                  { profile_picture_url: i } = s.data;
                i || (i = (0, f.El)(s.data.first_name));
                let u = {
                  ..._,
                  firstName: s.data.first_name,
                  lastName: s.data.last_name,
                  phoneNumber: s.data.phone_number,
                  totalRewards: null !== (r = s.data.total_rewards) && void 0 !== r ? r : 0,
                  email: s.data.email,
                  image: i,
                  username: s.data.username,
                  id: s.data.id,
                  key: null == _ ? void 0 : _.key,
                };
                a({ user: u, isAuthenticated: !0 }), o.toast.success('Personal information updated successfully');
              } catch (e) {
                e instanceof s.d7
                  ? o.toast.error(null === (n = e.response) || void 0 === n ? void 0 : n.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, _],
          ),
          v = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('signup_api', e);
                if (a.error) {
                  o.toast.error(a.error);
                  return;
                }
                o.toast.success('Your account has been successfully created'), h.replace(d.y.LOGIN);
              } catch (e) {
                o.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            },
            [t, h],
          ),
          D = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_password_email', e);
                o.toast.success(a.message), h.push(d.y.CONFIRMPASSWORD);
              } catch (e) {
                var a;
                e instanceof s.d7
                  ? o.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, h],
          ),
          N = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_token_confirm', e);
                o.toast.success(a.message), h.push(d.y.LOGIN);
              } catch (e) {
                var a;
                e instanceof s.d7
                  ? o.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, h],
          ),
          R = (0, r.useCallback)(() => {
            a({ user: void 0, isAuthenticated: !1 }), g(), o.toast.success('Logout Successful.'), h.replace(d.y.LOGIN);
          }, [a, h, g]);
        return {
          loginUser: C,
          logoutUser: R,
          isLoading: e,
          registerUser: v,
          isAuthenticated: p,
          user: _,
          updateUser: w,
          resetPassword: D,
          confirmPassword: N,
        };
      };
    },
    3976: function (e, t, a) {
      a.d(t, {
        F3: function () {
          return r;
        },
        XL: function () {
          return o;
        },
        fy: function () {
          return s;
        },
        im: function () {
          return n;
        },
      });
      let r = (e) => {
          let t = {};
          for (let a of e) t[a.PDataAndWeb] = { use: a.Use, pricing: a.Pricing, threshold: a.Threshold };
          return t;
        },
        n = (e) => {
          let t = {};
          for (let a of e) t[a.PDataAndWeb] = a.Companies.length > 0 ? a.Companies[0].value : '';
          return t;
        },
        o = (e) => {
          let { fieldName: t, data: a } = e,
            r = {};
          for (let e of a) {
            var n;
            r[e.first_name] = null === (n = e[t]) || void 0 === n ? void 0 : n.toString();
          }
          return r;
        },
        s = (e) => {
          let t = [];
          for (let a of e) a.consents_to_buy && a.first_name && t.push({ label: a.first_name, value: a.first_name });
          return t;
        };
    },
    6022: function (e, t, a) {
      a.d(t, {
        Fx: function () {
          return s;
        },
        KV: function () {
          return l;
        },
        dT: function () {
          return o;
        },
      });
      var r = a(1490),
        n = a(7350);
      let o = () => {
          let e = r.Z.get(n.E9.USER);
          if (e) {
            let t = JSON.parse(e);
            return t;
          }
          return null;
        },
        s = (e) => {
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
        DQ: function () {
          return g;
        },
        El: function () {
          return C;
        },
        P4: function () {
          return m;
        },
        Xe: function () {
          return y;
        },
        Yn: function () {
          return _;
        },
        Z4: function () {
          return f;
        },
        ef: function () {
          return h;
        },
        kC: function () {
          return d;
        },
        py: function () {
          return c;
        },
        uR: function () {
          return p;
        },
      });
      var r = a(4548),
        n = a.n(r),
        o = a(1872),
        s = a(7350),
        l = a(9611),
        i = a(3976);
      let u = (e, t, a) => {
          e[t] || (e[t] = []), e[t].push(a);
        },
        c = (e) => {
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
                u(t, 'Today', e);
                return;
              }
              if (1 === r) {
                u(t, 'Yesterday', e);
                return;
              }
              if (r <= 7) {
                u(t, 'Last 7 days', e);
                return;
              }
              if (r <= 30) u(t, 'Last 30 days', e);
              else {
                let a = n()(e.date).format('MMMM');
                u(t, a, e);
              }
            }),
            t
          );
        },
        d = (e) => {
          let t = e.split(' ').filter((e) => e.length > 0),
            a = '';
          return t.length > 0 && (a = t.map((e) => e[0].toUpperCase() + e.slice(1, e.length)).join(' ')), a;
        },
        f = (e) =>
          Object.entries(e).map((e) => {
            let [t, a] = e;
            return {
              value: 'object' == typeof a ? ''.concat(a) : a.toString(),
              personal_data_field: { field_name: t.toUpperCase() },
            };
          }),
        m = (e) => {
          let { isBotResponse: t, isLoading: a, text: r, choice: n, messageId: s } = e,
            l = e.images.map((e) => e.url);
          return {
            messageID: null != s ? s : (0, o.Z)(),
            isBotResponse: t,
            isLoading: a,
            choice: n,
            content: { text: r, images: l },
          };
        },
        p = (e) => {
          let { tableName: t, data: a } = e,
            r = {};
          if (t === s.me.PData)
            for (let e of a) {
              let t = n()(e.created_at).format('YYYY-MM-DD'),
                a = e.personal_data_field.field_name.toLowerCase(),
                { files: o } = e;
              r[t] = { ...r[t], [a]: 'photos' === a && o.length > 0 ? o : e.value };
            }
          if (t === s.me.GData)
            for (let e of a) {
              let t = d(e.field_name.replaceAll('_', ' '));
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
          if (t === s.me.RData)
            for (let e of a) {
              let t = d(e.field_name.toLowerCase().replaceAll('_', ' '));
              r[t] = {
                ...r[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                Unit: l.Gj[e.field_name.replaceAll(/[\s+]+/g, '_').toLowerCase()].unit,
                PDefinedValue: e.demanded_reward_value,
                OtherCompValue: '0.0',
                id: e.id,
              };
            }
          if (t === s.me.CData)
            for (let e of a) {
              let t = d(e.field_name.toLowerCase().replaceAll('_', ' '));
              r[t] = {
                ...r[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                Definition: l.Gj[e.field_name.replaceAll(/[\s+]+/g, '_').toLowerCase()].definition,
                Unit: l.Gj[e.field_name.replaceAll(/[\s+]+/g, '_').toLowerCase()].unit,
                Companies: (0, i.fy)(e.company_consent),
                Use: (0, i.XL)({ fieldName: 'usage', data: e.company_consent }),
                Threshold: (0, i.XL)({ fieldName: 'threshold', data: e.company_consent }),
                Pricing: (0, i.XL)({ fieldName: 'demanded_reward_value', data: e.company_consent }),
                id: e.id,
              };
            }
          if (t === s.me.CompData)
            for (let e of a)
              r[e.personal_data_field.field_name] = {
                ...r[e.personal_data_field.field_name],
                Consent: e.consents_to_buy.toString().toUpperCase(),
                Definition: l.Gj[e.personal_data_field.field_name.replaceAll(/[\s+]+/g, '_').toLowerCase()].definition,
                Unit: l.Gj[e.personal_data_field.field_name.replaceAll(/[\s+]+/g, '_').toLowerCase()].unit,
                Use: e.usage,
                Pricing: e.demanded_reward_value,
                fieldName: e.personal_data_field.field_name,
              };
          return r;
        },
        _ = (e) => {
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
          let o = t.map((e) => ({ Header: e, accessor: e }));
          return o;
        },
        g = (e) => {
          let t = {};
          for (let a of e)
            t[a.fieldName] = {
              consents_to_buy: 'TRUE' === a.Consent,
              use: a.Use,
              pricing: a.Pricing,
              threshold: a.Threshold,
            };
          return t;
        },
        h = (e) => {
          let t = e.map((e) => {
            let { answer: t, images: a, chat_id: r, choice: o, question: s, timestamp: l } = e;
            return {
              answer: t,
              chatID: r,
              choice: o,
              question: s,
              date: n()(l).format('YYYY-MM-DD'),
              images: null != a ? JSON.parse(a.replace(/'/g, '"')) : [],
            };
          });
          return t;
        },
        y = (e) =>
          e.map((e) => {
            let { id: t, screen_recording_url: a, camera_recording_url: r, timestamp: o, data: s } = e;
            return {
              id: t,
              screenRecording: a,
              cameraRecording: null != r ? r : '',
              date: n()(o).format('YYYY-MM-DD'),
              detail: s,
            };
          }),
        C = (e) => {
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
              let a = m({
                  text: e.answer,
                  choice: e.choice,
                  messageId: e.id,
                  images: null != e.images ? JSON.parse(e.images.replace(/'/g, '"')).map((e) => ({ url: e })) : [],
                  isBotResponse: !0,
                  isLoading: !1,
                }),
                r = m({ text: e.question, images: [], isBotResponse: !1, isLoading: !1 });
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
        o = a(5531),
        s = a(22);
      let l = () => {
        let { isLoading: e } = (0, r.v9)((e) => e.loading),
          t = (0, o.TL)(),
          a = (0, n.useCallback)(
            (e) => {
              t((0, s.d)(e));
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
        o = a(5531),
        s = a(6022),
        l = a(8557);
      let i = () => {
        let { isAuthenticated: e, user: t } = (0, r.v9)((e) => e.user),
          a = (0, o.TL)(),
          i = (0, n.useCallback)(
            (e) => {
              a((0, l.K)(e)), e.user ? (0, s.Fx)(e.user) : (0, s.KV)();
            },
            [a],
          );
        return (
          (0, n.useEffect)(() => {
            let e = (0, s.dT)();
            e && !t && i({ user: e, isAuthenticated: !0 });
          }, []),
          { isAuthenticated: e, user: t, setUser: i }
        );
      };
    },
    7350: function (e, t, a) {
      var r, n, o, s, l, i;
      a.d(t, {
        E9: function () {
          return n;
        },
        Q2: function () {
          return r;
        },
        me: function () {
          return o;
        },
      }),
        ((s = r || (r = {})).DARK = 'dark'),
        (s.LIGHT = 'light'),
        ((l = n || (n = {})).USER = 'user'),
        (l.TOKEN = 'token_datalabs'),
        ((i = o || (o = {})).PData = 'Personal Data'),
        (i.GData = 'My G-Data'),
        (i.RData = 'Rewards Data'),
        (i.CData = 'Consent Data'),
        (i.CompData = 'Company Data');
    },
  },
]);
