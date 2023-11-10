'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [849],
  {
    446: function (e, t, a) {
      var r = a(7437);
      a(2265);
      var n = a(3427),
        s = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: o, isLoading: l = !1, icon: i, className: u = '', style: c } = e;
        return (0, r.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            u,
          ].join(' '),
          onClick: t,
          type: a,
          style: c,
          disabled: l,
          children: [
            i &&
              !l &&
              (0, r.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, r.jsx)(n.Z, { src: i, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            l ? (0, r.jsx)(s.Z, { style: { color: '#fff', margin: '0 auto' } }) : o,
          ],
        });
      };
    },
    8390: function (e, t, a) {
      a.r(t);
      var r = a(7437),
        n = a(2265),
        s = a(9907),
        o = a(6421),
        l = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: u } = (0, s.i)(),
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null);
        return (
          (0, l.O)(f, () => {
            d(!1);
          }),
          (0, r.jsxs)(r.Fragment, {
            children: [
              u < 1024 &&
                (0, r.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, r.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => d(!c),
                    type: 'button',
                    src: o.tp,
                  }),
                }),
              (0, r.jsxs)('div', {
                ref: f,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    u < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(c ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  u < 1024 &&
                    (0, r.jsx)(i.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => d(!c),
                      type: 'button',
                      src: o.tp,
                    }),
                  t,
                ],
              }),
            ],
          })
        );
      };
    },
    2525: function (e, t, a) {
      var r = a(7437),
        n = a(2265),
        s = a(6691),
        o = a.n(s),
        l = a(6421);
      t.Z = function (e) {
        let {
            label: t,
            placeholder: a,
            onChange: s,
            error: i,
            type: u,
            style: c,
            className: d,
            value: f,
            name: m,
            readOnly: p,
            isMonetaryInput: h,
            currency: _,
          } = e,
          [y, x] = (0, n.useState)(!1);
        return (0, r.jsxs)('div', {
          className: ['flex flex-col gap-y-3 relative', d].join(' '),
          style: c,
          children: [
            (0, r.jsx)('label', {
              className: 'text-base font-bold font-sans text-black dark:text-white',
              htmlFor: m,
              children: t,
            }),
            h &&
              (0, r.jsx)('span', {
                className: 'text-black font-sans font-normal text-xl absolute top-[54%] left-[15px]',
                children: _,
              }),
            'password' === u
              ? (0, r.jsxs)('div', {
                  className: 'relative w-full ',
                  children: [
                    (0, r.jsx)('input', {
                      autoComplete: 'off',
                      placeholder: a,
                      onChange: s,
                      name: m,
                      readOnly: p,
                      id: m,
                      type: y ? 'text' : 'password',
                      value: f,
                      className:
                        'bg-chat dark:bg-darkChat py-5 px-7 rounded-md text-black dark:text-main font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder  focus:outline-none w-full',
                    }),
                    (0, r.jsx)(o(), {
                      src: y ? l.fR : l.th,
                      alt: y ? 'hide-password-icon' : 'show-password-icon',
                      className:
                        'h-5 w-5 dark:invert-[1] cursor-pointer absolute top-[50%] right-[10px] transform translate-y-[-50%]',
                      onClick: () => {
                        x(!y);
                      },
                    }),
                  ],
                })
              : (0, r.jsx)('input', {
                  autoComplete: 'off',
                  placeholder: a,
                  onChange: s,
                  name: m,
                  readOnly: p,
                  id: m,
                  type: u || 'text',
                  value: f,
                  className:
                    'bg-chat dark:bg-darkChat py-5 px-7 rounded-md dark:text-main text-black font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none',
                }),
            i && (0, r.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: i }),
          ],
        });
      };
    },
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
          return m;
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
      let m = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          { setUser: a, isAuthenticated: m, user: p } = (0, u.a)(),
          { deleteChats: h } = (0, f.P)(),
          _ = (0, n.useRouter)(),
          y = (0, r.useCallback)(async (e) => {
            let { data: t } = await l.h.get('api/user_profile/1/', { headers: { Authorization: 'Bearer '.concat(e) } }),
              {
                email: a,
                first_name: r,
                last_name: n,
                phone_number: s,
                total_rewards: o,
                username: i,
                id: u,
                is_company: f,
              } = t.data,
              { profile_picture_url: m } = t.data;
            m || (m = (0, d.El)(r));
            let p = {
              email: a,
              firstName: r,
              lastName: n,
              id: u,
              username: i,
              image: m,
              phoneNumber: s,
              totalRewards: o,
              key: '',
              accountType: f ? c.Z8.COMPANY : c.Z8.PERSONAL,
            };
            return p;
          }, []),
          x = (0, r.useCallback)(
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
                a({ user: i, isAuthenticated: !0 }), _.replace(c.yy.HOME), s.toast.success('Welcome to G-Data Labs');
              } catch (e) {
                e instanceof o.d7
                  ? s.toast.error(null === (n = e.response) || void 0 === n ? void 0 : n.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, a, _, y],
          ),
          g = (0, r.useCallback)(
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
                  ...p,
                  firstName: o.data.first_name,
                  lastName: o.data.last_name,
                  phoneNumber: o.data.phone_number,
                  totalRewards: null !== (r = o.data.total_rewards) && void 0 !== r ? r : 0,
                  email: o.data.email,
                  image: i,
                  username: o.data.username,
                  id: o.data.id,
                  key: null == p ? void 0 : p.key,
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
            [t, a, p],
          ),
          w = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('signup_api', e);
                if (a.error) {
                  s.toast.error(a.error);
                  return;
                }
                s.toast.success('Your account has been successfully created'), _.replace(c.yy.LOGIN);
              } catch (e) {
                s.toast.error('Something went wrong');
              } finally {
                t(!1);
              }
            },
            [t, _],
          ),
          v = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_password_email', e);
                s.toast.success(a.message), _.push(c.yy.CONFIRMPASSWORD);
              } catch (e) {
                var a;
                e instanceof o.d7
                  ? s.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, _],
          ),
          b = (0, r.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await l.h.post('api/user/reset_token_confirm', e);
                s.toast.success(a.message), _.push(c.yy.LOGIN);
              } catch (e) {
                var a;
                e instanceof o.d7
                  ? s.toast.error(null === (a = e.response) || void 0 === a ? void 0 : a.data.error)
                  : s.toast.error('Something went wrong ');
              } finally {
                t(!1);
              }
            },
            [t, _],
          ),
          C = (0, r.useCallback)(() => {
            a({ user: void 0, isAuthenticated: !1 }), h(), s.toast.success('Logout Successful.'), _.replace(c.yy.LOGIN);
          }, [a, _, h]);
        return {
          loginUser: x,
          logoutUser: C,
          isLoading: e,
          registerUser: w,
          isAuthenticated: m,
          user: p,
          updateUser: g,
          resetPassword: v,
          confirmPassword: b,
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
        DQ: function () {
          return h;
        },
        El: function () {
          return g;
        },
        O5: function () {
          return _;
        },
        P4: function () {
          return f;
        },
        Xe: function () {
          return x;
        },
        Yn: function () {
          return p;
        },
        Z4: function () {
          return d;
        },
        ef: function () {
          return y;
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
        m = (e) => {
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
          if (t === o.me.CompData)
            for (let e of a) {
              let t = c(e.field_name.replaceAll('_', ' '));
              r[t] = {
                ...r[t],
                Consent: e.consents_to_buy.toString().toUpperCase(),
                Definition: l.JT[e.field_name.toLowerCase()],
                Use: e.usage,
                Pricing: e.demanded_reward_value,
                fieldName: t,
              };
            }
          return r;
        },
        p = (e) => {
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
          let t = { Use: {}, Pricing: {} };
          for (let a of e)
            (t.Use[a.fieldName] = { consents_to_sell: 'TRUE' === a.Consent, value: a.Use }),
              (t.Pricing[a.fieldName] = { consents_to_sell: 'TRUE' === a.Consent, value: a.Pricing });
          return t;
        },
        _ = (e) => {
          let t = {};
          for (let a of e)
            t[a.id] = { consents_to_sell: 'TRUE' === a.Consent, demanded_reward_value: Number(a.PDefinedValue) };
          return t;
        },
        y = (e) => {
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
        x = (e) =>
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
        g = (e) => {
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
    5979: function (e, t, a) {
      a.d(t, {
        M9: function () {
          return u;
        },
        fb: function () {
          return l;
        },
        gf: function () {
          return i;
        },
        nN: function () {
          return n;
        },
        wD: function () {
          return s;
        },
        y1: function () {
          return o;
        },
      });
      var r = a(5691);
      let n = (0, r.Ry)({
          firstName: (0, r.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, r.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)(),
          username: (0, r.Z_)(),
          phone: (0, r.nK)().test(
            'is-phone-number',
            'Invalid phone number',
            (e) => null === e || 'number' == typeof e || 'string' == typeof e,
          ),
          totalRewards: (0, r.Rx)(),
          accountNo: (0, r.Z_)(),
          accountTitle: (0, r.Z_)(),
          bankName: (0, r.Z_)(),
        }),
        s = (0, r.Ry)({
          date: (0, r.Z_)(),
          high_temperature: (0, r.Rx)(),
          low_temperature: (0, r.Rx)(),
          emotional_list: (0, r.IX)().of((0, r.Z_)()),
          emotional_overall: (0, r.Z_)(),
          weather: (0, r.Z_)(),
          relative_finance_status: (0, r.Z_)(),
          exercise_time: (0, r.Rx)(),
          photos: (0, r.nK)(),
          health_overall: (0, r.Z_)(),
          any_social_life: (0, r.Z_)(),
          social_life_list: (0, r.IX)().of((0, r.Z_)()),
          weight: (0, r.Rx)(),
          family_status: (0, r.Z_)(),
          device_screen_time: (0, r.Z_)(),
          work_life_balance: (0, r.Rx)().min(0, 'Value must be at least 0').max(10, 'Value must not exceed 10'),
          journaling: (0, r.Z_)(),
        }),
        o = (0, r.Ry)({
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)().required('Password is required'),
        }),
        l = (0, r.Ry)({
          firstName: (0, r.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, r.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)().min(5, 'Password must be 5 characters long').required('Password is required'),
          accountType: (0, r.Z_)().required('Account type is required'),
          termsConditions: (0, r.O7)()
            .test('is-true', 'You must accept the terms and conditions.', (e) => !0 === e)
            .required('Please accept the Terms and Conditions in order to proceed'),
          privacyPolicy: (0, r.O7)().when('termsConditions', {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept privacy and policy.'),
          }),
          cookiePolicy: (0, r.O7)().when(['privacyPolicy'], {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept cookie policy.'),
          }),
        }),
        i = (0, r.Ry)({ email: (0, r.Z_)().email().required('Email is required') }),
        u = (0, r.Ry)({
          token: (0, r.Z_)().required('Token cannot be empty'),
          password: (0, r.Z_)().required('Password is required'),
          confirm_password: (0, r.Z_)()
            .oneOf([(0, r.iH)('password'), ''], 'Password must match')
            .required('Confirm Password is required'),
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
        (i.CData = 'Consent Data'),
        (i.CompData = 'Company Data');
    },
  },
]);
