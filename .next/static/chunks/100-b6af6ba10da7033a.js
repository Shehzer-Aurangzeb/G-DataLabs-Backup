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
      var n = a(9222),
        r = a(6022);
      let o = n.default.create({ baseURL: 'https://api.g-datalabs.com/' });
      o.interceptors.request.use(
        async (e) => {
          let t = (0, r.dT)();
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
      var n, r;
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
          return n;
        },
        pY: function () {
          return o;
        },
        vK: function () {
          return u;
        },
      }),
        ((r = n || (n = {})).PERSONAL = 'Personal'),
        (r.COMPANY = 'Company');
      let o = [
          { label: n.PERSONAL, value: n.PERSONAL },
          { label: n.COMPANY, value: n.COMPANY },
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
          return n;
        },
      });
      let n = {
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
      var n = a(2265),
        r = a(4033),
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
          { deleteChats: h } = (0, m.P)(),
          g = (0, r.useRouter)(),
          y = (0, n.useCallback)(async (e) => {
            let { data: t } = await l.h.get('api/user_profile/1/', { headers: { Authorization: 'Bearer '.concat(e) } }),
              {
                email: a,
                first_name: n,
                last_name: r,
                phone_number: o,
                total_rewards: s,
                username: i,
                id: u,
                is_company: d,
              } = t.data,
              { profile_picture_url: m } = t.data;
            m || (m = (0, f.El)(n));
            let p = {
              email: a,
              firstName: n,
              lastName: r,
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
          C = (0, n.useCallback)(
            async (e) => {
              var n, r;
              try {
                t(!0);
                let { data: r } = await l.h.post('login_api', e),
                  s = await y(r.access_token),
                  i = {
                    ...s,
                    totalRewards: null !== (n = s.totalRewards) && void 0 !== n ? n : 0,
                    key: r.access_token,
                  };
                a({ user: i, isAuthenticated: !0 }), g.replace(d.y.HOME), o.toast.success('Welcome to G-Data Labs');
              } catch (e) {
                e instanceof s.d7
                  ? o.toast.error(null === (r = e.response) || void 0 === r ? void 0 : r.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, g, y],
          ),
          w = (0, n.useCallback)(
            async (e) => {
              var n, r;
              try {
                t(!0);
                let r = new FormData();
                for (let [t, a] of Object.entries(e)) r.append(t, a);
                let { data: s } = await l.h.patch('api/user_profile/1/', r),
                  { profile_picture_url: i } = s.data;
                i || (i = (0, f.El)(s.data.first_name));
                let u = {
                  ..._,
                  firstName: s.data.first_name,
                  lastName: s.data.last_name,
                  phoneNumber: s.data.phone_number,
                  totalRewards: null !== (n = s.data.total_rewards) && void 0 !== n ? n : 0,
                  email: s.data.email,
                  image: i,
                  username: s.data.username,
                  id: s.data.id,
                  key: null == _ ? void 0 : _.key,
                };
                a({ user: u, isAuthenticated: !0 }), o.toast.success('Personal information updated successfully');
              } catch (e) {
                e instanceof s.d7
                  ? o.toast.error(null === (r = e.response) || void 0 === r ? void 0 : r.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, _],
          ),
          v = (0, n.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('signup_api', e);
                if (a.error) {
                  o.toast.error(a.error);
                  return;
                }
                o.toast.success('Your account has been successfully created'), g.replace(d.y.LOGIN);
              } catch (e) {
                o.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          D = (0, n.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_password_email', e);
                o.toast.success(a.message), g.push(d.y.CONFIRMPASSWORD);
              } catch (e) {
                var a;
                e instanceof s.d7
                  ? o.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          N = (0, n.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_token_confirm', e);
                o.toast.success(a.message), g.push(d.y.LOGIN);
              } catch (e) {
                var a;
                e instanceof s.d7
                  ? o.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : o.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, g],
          ),
          R = (0, n.useCallback)(() => {
            a({ user: void 0, isAuthenticated: !1 }), h(), o.toast.success('Logout Successful.'), g.replace(d.y.LOGIN);
          }, [a, g, h]);
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
          return n;
        },
        XL: function () {
          return o;
        },
        im: function () {
          return r;
        },
      });
      let n = (e) => {
          let t = {};
          for (let a of e) t[a.PDataAndWeb] = { use: a.Use, pricing: a.Pricing, threshold: a.Threshold };
          return t;
        },
        r = (e) => {
          let t = {};
          for (let a of e) t[a.PDataAndWeb] = a.Companies.length > 0 ? a.Companies[0].value : '';
          return t;
        },
        o = (e) => {
          let { fieldName: t, data: a } = e,
            n = {};
          for (let e of a) n[e.company_name] = e[t].toString();
          return n;
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
      var n = a(1490),
        r = a(7350);
      let o = () => {
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
        l = () => {
          n.Z.remove(r.E9.USER), n.Z.remove(r.E9.TOKEN);
        };
    },
    1515: function (e, t, a) {
      a.d(t, {
        Cf: function () {
          return w;
        },
        DQ: function () {
          return h;
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
          return g;
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
      var n = a(4548),
        r = a.n(n),
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
                u(t, 'Today', e);
                return;
              }
              if (1 === n) {
                u(t, 'Yesterday', e);
                return;
              }
              if (n <= 7) {
                u(t, 'Last 7 days', e);
                return;
              }
              if (n <= 30) u(t, 'Last 30 days', e);
              else {
                let a = r()(e.date).format('MMMM');
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
          let { isBotResponse: t, isLoading: a, text: n, choice: r, messageId: s } = e,
            l = e.images.map((e) => e.url);
          return {
            messageID: null != s ? s : (0, o.Z)(),
            isBotResponse: t,
            isLoading: a,
            choice: r,
            content: { text: n, images: l },
          };
        },
        p = (e) => {
          let { tableName: t, data: a } = e,
            n = {};
          if (t === s.me.PData)
            for (let e of a) {
              let t = r()(e.created_at).format('YYYY-MM-DD'),
                a = e.personal_data_field.field_name.toLowerCase(),
                { files: o } = e;
              n[t] = { ...n[t], [a]: 'photos' === a && o.length > 0 ? o : e.value };
            }
          if (t === s.me.GData)
            for (let e of a) {
              let t = d(e.field_name.replaceAll('_', ' '));
              for (let a of e.values) {
                let e = r()(a.created_at).format('YYYY-MM-DD');
                n[t] = { ...n[t], [e]: 'Photos' === t ? a.files.map((e) => e) : a.value };
              }
              n[t] = {
                ...n[t],
                'Consent Value': e.consents_to_sell.toString().toUpperCase(),
                Rewards: e.demanded_reward_value,
              };
            }
          if (t === s.me.RData)
            for (let e of a) {
              let t = d(e.field_name.replaceAll('_', ' '));
              n[t] = {
                ...n[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                Unit: l.Gj[e.field_name.toLowerCase()].unit,
                PDefinedValue: e.demanded_reward_value,
                OtherCompValue: '0.0',
                id: e.id,
              };
            }
          if (t === s.me.CData)
            for (let e of a) {
              let t = d(e.field_name.replaceAll('_', ' '));
              n[t] = {
                ...n[t],
                Consent: e.consents_to_sell.toString().toUpperCase(),
                Definition: l.Gj[e.field_name.toLowerCase()].definition,
                Unit: l.Gj[e.field_name.toLowerCase()].unit,
                Companies: e.company_consent.map((e) => ({ label: e.company_name, value: e.company_name })),
                Use: (0, i.XL)({ fieldName: 'usage', data: e.company_consent }),
                Threshold: (0, i.XL)({ fieldName: 'threshold', data: e.company_consent }),
                Pricing: (0, i.XL)({ fieldName: 'demanded_reward_value', data: e.company_consent }),
                id: e.id,
              };
            }
          if (t === s.me.CompData)
            for (let e of a)
              n[e.personal_data_field.field_name] = {
                ...n[e.personal_data_field.field_name],
                Consent: e.consents_to_buy.toString().toUpperCase(),
                Definition: l.Gj[e.personal_data_field.field_name.replaceAll(' ', '_').toLowerCase()].definition,
                Unit: l.Gj[e.personal_data_field.field_name.replaceAll(' ', '_').toLowerCase()].unit,
                Use: e.usage,
                Pricing: e.demanded_reward_value,
                fieldName: e.personal_data_field.field_name,
              };
          return n;
        },
        _ = (e) => {
          let t = [],
            a = 0;
          for (let t of e) {
            let n = t.values.length;
            n > e[a].values.length && (a = e.indexOf(t));
          }
          let n = e[a].values
            .map((e) => r()(e.created_at).format('YYYY-MM-DD'))
            .filter((e, t, a) => a.indexOf(e) === t);
          t = ['Consent', ...n, 'Consent Value', 'Rewards'];
          let o = t.map((e) => ({ Header: e, accessor: e }));
          return o;
        },
        h = (e) => {
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
        g = (e) => {
          let t = e.map((e) => {
            let { answer: t, images: a, chat_id: n, choice: o, question: s, timestamp: l } = e;
            return {
              answer: t,
              chatID: n,
              choice: o,
              question: s,
              date: r()(l).format('YYYY-MM-DD'),
              images: null != a ? JSON.parse(a.replace(/'/g, '"')) : [],
            };
          });
          return t;
        },
        y = (e) =>
          e.map((e) => {
            let { id: t, screen_recording_url: a, camera_recording_url: n, timestamp: o, data: s } = e;
            return {
              id: t,
              screenRecording: a,
              cameraRecording: null != n ? n : '',
              date: r()(o).format('YYYY-MM-DD'),
              detail: s,
            };
          }),
        C = (e) => {
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
        w = (e) =>
          e.map((e) => {
            let t = [],
              a = e.history.sort((e, t) => (r()(e.timestamp).isAfter(r()(t.timestamp)) ? 1 : -1));
            for (let e of a) {
              let a = m({
                  text: e.answer,
                  choice: e.choice,
                  messageId: e.id,
                  images: null != e.images ? JSON.parse(e.images.replace(/'/g, '"')).map((e) => ({ url: e })) : [],
                  isBotResponse: !0,
                  isLoading: !1,
                }),
                n = m({ text: e.question, images: [], isBotResponse: !1, isLoading: !1 });
              t.push(n), t.push(a);
            }
            return { title: e.name, date: r()(e.created_at).format('YYYY-MM-DD HH:mm:ss'), id: e.id, messages: t };
          });
    },
    7445: function (e, t, a) {
      a.d(t, {
        r: function () {
          return l;
        },
      });
      var n = a(3198),
        r = a(2265),
        o = a(5531),
        s = a(22);
      let l = () => {
        let { isLoading: e } = (0, n.v9)((e) => e.loading),
          t = (0, o.TL)(),
          a = (0, r.useCallback)(
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
      var n = a(3198),
        r = a(2265),
        o = a(5531),
        s = a(6022),
        l = a(8557);
      let i = () => {
        let { isAuthenticated: e, user: t } = (0, n.v9)((e) => e.user),
          a = (0, o.TL)(),
          i = (0, r.useCallback)(
            (e) => {
              a((0, l.K)(e)), e.user ? (0, s.Fx)(e.user) : (0, s.KV)();
            },
            [a],
          );
        return (
          (0, r.useEffect)(() => {
            let e = (0, s.dT)();
            e && !t && i({ user: e, isAuthenticated: !0 });
          }, []),
          { isAuthenticated: e, user: t, setUser: i }
        );
      };
    },
    7350: function (e, t, a) {
      var n, r, o, s, l, i;
      a.d(t, {
        E9: function () {
          return r;
        },
        Q2: function () {
          return n;
        },
        me: function () {
          return o;
        },
      }),
        ((s = n || (n = {})).DARK = 'dark'),
        (s.LIGHT = 'light'),
        ((l = r || (r = {})).USER = 'user'),
        (l.TOKEN = 'token_datalabs'),
        ((i = o || (o = {})).PData = 'Personal Data'),
        (i.GData = 'My G-Data'),
        (i.RData = 'Rewards Data'),
        (i.CData = 'Consent Data'),
        (i.CompData = 'Company Data');
    },
  },
]);
