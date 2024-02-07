(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [346],
  {
    7769: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 8390)),
        Promise.resolve().then(t.bind(t, 2761)),
        Promise.resolve().then(t.bind(t, 32));
    },
    446: function (e, a, t) {
      'use strict';
      var l = t(7437);
      t(2265);
      var r = t(3427),
        s = t(4246);
      a.Z = function (e) {
        let { onClick: a, type: t = 'button', title: n, isLoading: o = !1, icon: i, className: c = '', style: d } = e;
        return (0, l.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: a,
          type: t,
          style: d,
          disabled: o,
          children: [
            i &&
              !o &&
              (0, l.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, l.jsx)(r.Z, { src: i, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            o ? (0, l.jsx)(s.Z, { style: { color: '#fff', margin: '0 auto' } }) : n,
          ],
        });
      };
    },
    8390: function (e, a, t) {
      'use strict';
      t.r(a);
      var l = t(7437),
        r = t(2265),
        s = t(9907),
        n = t(2854),
        o = t(1846),
        i = t(1839);
      a.default = function (e) {
        let { children: a, className: t = '' } = e,
          { width: c } = (0, s.i)(),
          [d, u] = (0, r.useState)(!1),
          m = (0, r.useRef)(null);
        return (
          (0, o.O)(m, () => {
            u(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: n.Ix,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: m,
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
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => u(!d),
                      type: 'button',
                      src: n.Ix,
                    }),
                  a,
                ],
              }),
            ],
          })
        );
      };
    },
    2525: function (e, a, t) {
      'use strict';
      var l = t(7437),
        r = t(2265),
        s = t(6691),
        n = t.n(s),
        o = t(2854);
      a.Z = function (e) {
        let {
            label: a,
            placeholder: t,
            onChange: s,
            error: i,
            type: c,
            style: d,
            className: u,
            value: m,
            name: x,
            readOnly: p,
            isMonetaryInput: f,
            currency: h,
          } = e,
          [b, w] = (0, r.useState)(!1);
        return (0, l.jsxs)('div', {
          className: ['flex flex-col gap-y-3 relative', u].join(' '),
          style: d,
          children: [
            (0, l.jsx)('label', {
              className: 'text-base font-bold font-sans text-black dark:text-white',
              htmlFor: x,
              children: a,
            }),
            f &&
              (0, l.jsx)('span', {
                className: 'text-black font-sans font-normal text-xl absolute top-[54%] left-[15px]',
                children: h,
              }),
            'password' === c
              ? (0, l.jsxs)('div', {
                  className: 'relative w-full ',
                  children: [
                    (0, l.jsx)('input', {
                      autoComplete: 'off',
                      placeholder: t,
                      onChange: s,
                      name: x,
                      readOnly: p,
                      id: x,
                      type: b ? 'text' : 'password',
                      value: m,
                      className:
                        'bg-chat dark:bg-darkChat py-5 px-7 rounded-md text-black dark:text-main font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder  focus:outline-none w-full',
                    }),
                    (0, l.jsx)(n(), {
                      src: b ? o.fR : o.th,
                      alt: b ? 'hide-password-icon' : 'show-password-icon',
                      className:
                        'h-5 w-5 dark:invert-[1] cursor-pointer absolute top-[50%] right-[10px] transform translate-y-[-50%]',
                      onClick: () => {
                        w(!b);
                      },
                    }),
                  ],
                })
              : (0, l.jsx)('input', {
                  autoComplete: 'off',
                  placeholder: t,
                  onChange: s,
                  name: x,
                  readOnly: p,
                  id: x,
                  type: c || 'text',
                  value: m,
                  className:
                    'bg-chat dark:bg-darkChat py-5 px-7 rounded-md dark:text-main text-black font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none',
                }),
            i && (0, l.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: i }),
          ],
        });
      };
    },
    2761: function (e, a, t) {
      'use strict';
      t.r(a);
      var l = t(7437),
        r = t(2265),
        s = t(724),
        n = t(3427),
        o = t(346),
        i = t(1515),
        c = t(9611);
      a.default = (0, r.memo)(function () {
        let { user: e } = (0, o.a)();
        return (0, l.jsxs)('div', {
          className:
            'bg-lightGreen dark:bg-dark flex flex-row items-center w-full pl-4 mobile:pl-2 py-6 rounded-md gap-x-4 max-w-['.concat(
              c.kk,
              ']',
            ),
          children: [
            e
              ? (0, l.jsx)(n.Z, {
                  src: e.image,
                  alt: 'profile',
                  className: 'w-[50px] h-[50px] rounded-full',
                  rounded: !0,
                })
              : (0, l.jsx)(s.default, { circle: !0, width: 50, height: 50, containerClassName: 'avatar-skeleton' }),
            (0, l.jsxs)('div', {
              className: 'flex flex-col flex-1',
              children: [
                !e &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(s.default, { width: 150 }), (0, l.jsx)(s.default, { width: 190 })],
                  }),
                (0, l.jsx)('h3', {
                  className: 'font-sans font-bold text-xl text-primary  dark:text-main leading-6',
                  children: e && (0, i.kC)(''.concat(e.firstName, ' ').concat(e.lastName)),
                }),
                (0, l.jsx)('p', {
                  className: 'font-sans font-normal text-primary dark:text-main text-base',
                  children: e && e.email,
                }),
              ],
            }),
          ],
        });
      });
    },
    32: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return y;
          },
        });
      var l = t(7437),
        r = t(2265),
        s = t(346),
        n = t(9611),
        o = t(6230),
        i = t(5979),
        c = t(2525),
        d = t(446);
      let u = { firstName: '', lastName: '', email: '', password: '', username: '' };
      var m = t(8556),
        x = t(6171),
        p = t(6118);
      let f = () => {
        let [e, a] = (0, r.useState)(!1),
          [t, l] = (0, r.useState)(''),
          { setUser: s, user: n } = (0, p.a)(),
          o = (0, r.useCallback)(
            async (e) => {
              try {
                var t;
                a(!0);
                let { data: r } = await x.h.post('api/user_profile/add_and_verify_bank', e);
                n &&
                  s({
                    user: {
                      ...n,
                      accountNo: '**** '.concat(r.data.shortened_account_number),
                      accountTitle: null !== (t = r.data.bank_account_title) && void 0 !== t ? t : '',
                      bankName: r.data.bank_name,
                    },
                    isAuthenticated: !0,
                  }),
                  l('');
              } catch (e) {
              } finally {
                a(!1);
              }
            },
            [s, n],
          ),
          { ready: i, open: c } = (0, m.usePlaidLink)({
            token: t,
            onSuccess: (e, a) => {
              o({ public_token: e, account_id: a.account_id });
            },
          }),
          d = (0, r.useCallback)(async () => {
            try {
              a(!0);
              let { data: e } = await x.h.get('api/plaid/link_token');
              l(e.data.link_token);
            } catch (e) {
            } finally {
              a(!1);
            }
          }, []);
        return (
          (0, r.useEffect)(() => {
            t && i && c();
          }, [c, i, t]),
          { getPlaidLinkToken: d, isLoading: e }
        );
      };
      var h = function (e) {
          let { values: a, touched: t, errors: r } = e;
          return (0, l.jsxs)('div', {
            className: 'w-full',
            children: [
              (0, l.jsx)('h1', {
                className: 'text-primary dark:text-main text-2xl font-bold font-sans mt-8 mb-7',
                children: 'Bank Information',
              }),
              (0, l.jsxs)('div', {
                className: 'flex flex-row flex-wrap gap-x-14 gap-y-6 ',
                children: [
                  (0, l.jsx)(c.Z, {
                    label: 'Account No.',
                    placeholder: '**** 4568',
                    readOnly: !0,
                    name: 'accountNo',
                    error: t.accountNo && r.accountNo,
                    value: a.accountNo,
                    className: 'max-w-[450px] w-full',
                  }),
                  (0, l.jsx)(c.Z, {
                    label: 'Account Title',
                    placeholder: '12115 54515 4545 5454',
                    readOnly: !0,
                    name: 'accountTitle',
                    error: t.accountTitle && r.accountTitle,
                    value: a.accountTitle,
                    className: 'max-w-[450px] w-full',
                  }),
                  (0, l.jsx)(c.Z, {
                    label: 'Bank Name',
                    placeholder: 'Chase Bank',
                    readOnly: !0,
                    name: 'bankName',
                    error: t.bankName && r.bankName,
                    value: a.bankName,
                    className: 'max-w-[450px] w-full',
                  }),
                ],
              }),
            ],
          });
        },
        b = t(3427),
        w = t(2854),
        N = function (e) {
          let { handleChange: a, profile: t } = e;
          return (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-6 w-full',
            children: [
              (0, l.jsx)('label', {
                className: 'text-base font-bold font-sans text-black dark:text-main',
                htmlFor: 'profile',
                children: 'Upload Picture',
              }),
              (0, l.jsxs)('div', {
                className:
                  'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
                children: [
                  (0, l.jsx)(b.Z, {
                    src: 0 === t.length ? w.oB : t,
                    alt: 'profile',
                    className: 'w-[50px] h-[50px]',
                    rounded: !0,
                  }),
                  (0, l.jsx)(b.Z, { src: w.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px]  dark:invert' }),
                  (0, l.jsx)('p', {
                    className: 'text-black text-xl dark:text-main font-sans font-normal',
                    children: 'Upload Picture',
                  }),
                  (0, l.jsx)('input', {
                    onChange: a,
                    name: 'profile',
                    id: 'profile',
                    type: 'file',
                    accept: '.jpg, .jpeg, .png',
                    className: 'w-full h-full opacity-0 absolute z-1 cursor-pointer',
                  }),
                ],
              }),
            ],
          });
        },
        k = function (e) {
          var a;
          let { user: t, updateUser: s, isLoading: n } = e,
            [m, x] = (0, r.useState)(null),
            [p, b] = (0, r.useState)(null !== (a = t.image) && void 0 !== a ? a : ''),
            { getPlaidLinkToken: w, isLoading: k } = f(),
            {
              handleSubmit: y,
              handleChange: _,
              values: v,
              touched: g,
              errors: j,
            } = (0, o.TA)({
              initialValues: { ...u, ...t, phone: t.phoneNumber },
              validationSchema: i.nN,
              onSubmit: async (e, a) => {
                let { password: l } = e;
                if (!p) return;
                let r = {};
                for (let [a, l] of Object.entries(e))
                  t[a] !== l &&
                    ('firstName' === a && (r = { ...r, first_name: l }),
                    'lastName' === a && (r = { ...r, last_name: l }),
                    'phone' === a && t.phoneNumber !== e.phone && (r = { ...r, phone_number: l }),
                    'email' === a && (r = { ...r, email: l }));
                l && (r = { ...r, password: l }), m && (r = { ...r, profile_picture: m }), s(r), a.setSubmitting(!1);
              },
            });
          return (0, l.jsx)('form', {
            className: 'w-full',
            noValidate: !0,
            onSubmit: y,
            children: (0, l.jsxs)('div', {
              className: 'flex flex-row flex-wrap gap-x-14 gap-y-6',
              children: [
                (0, l.jsx)(N, {
                  handleChange: (e) => {
                    var a;
                    let t = null === (a = e.target.files) || void 0 === a ? void 0 : a[0];
                    if (t) {
                      x(t);
                      let e = new FileReader();
                      (e.onload = (e) => {
                        var a;
                        b(null === (a = e.target) || void 0 === a ? void 0 : a.result);
                      }),
                        e.readAsDataURL(t);
                    }
                  },
                  profile: p,
                }),
                (0, l.jsx)(c.Z, {
                  label: 'First Name',
                  placeholder: 'First Name',
                  name: 'firstName',
                  error: g.firstName && j.firstName,
                  onChange: _,
                  value: v.firstName,
                  className: 'max-w-[450px] w-full',
                }),
                (0, l.jsx)(c.Z, {
                  label: 'Email',
                  placeholder: 'Email',
                  type: 'email',
                  name: 'email',
                  error: g.email && j.email,
                  onChange: _,
                  value: v.email,
                  className: 'max-w-[450px] w-full',
                }),
                (0, l.jsx)(c.Z, {
                  label: 'Last Name',
                  placeholder: 'Last Name',
                  name: 'lastName',
                  error: g.lastName && j.lastName,
                  onChange: _,
                  value: v.lastName,
                  className: 'max-w-[450px] w-full',
                }),
                (0, l.jsx)(c.Z, {
                  label: 'Password',
                  placeholder: 'Password',
                  name: 'password',
                  error: g.password && j.password,
                  onChange: _,
                  value: v.password,
                  className: 'max-w-[450px] w-full',
                }),
                (0, l.jsx)(c.Z, {
                  label: 'Username',
                  placeholder: 'Username',
                  name: 'username',
                  readOnly: !0,
                  error: g.username && j.username,
                  onChange: _,
                  value: v.username,
                  className: 'max-w-[450px] w-full',
                }),
                (0, l.jsx)(c.Z, {
                  label: 'Phone',
                  placeholder: 'Phone',
                  name: 'phone',
                  type: 'number',
                  error: g.phone && j.phone,
                  onChange: _,
                  value: v.phone,
                  className: 'max-w-[450px] w-full',
                }),
                (0, l.jsx)(c.Z, {
                  label: 'Total Rewards',
                  placeholder: 'Total rewards',
                  name: 'totalRewards',
                  type: 'number',
                  readOnly: !0,
                  error: g.totalRewards && j.totalRewards,
                  value: v.totalRewards,
                  isMonetaryInput: !0,
                  currency: '$',
                  className: 'max-w-[450px] w-full',
                }),
                (t.accountNo || t.accountTitle || t.bankName) && (0, l.jsx)(h, { values: v, touched: g, errors: j }),
                (0, l.jsxs)('div', {
                  className:
                    'w-full flex flex-row mobile:flex-col items-center justify-between gap-x-4 mobile:gap-y-4 mt-10',
                  children: [
                    (0, l.jsx)(d.Z, {
                      type: 'button',
                      className:
                        'bg-transparent uppercase disabled:bg-disabledBlue max-w-[320px] w-full border-2 border-black dark:border-white mobile:order-2 connect_btn dark:text-white dark:bg-white',
                      style: { color: 'black' },
                      onClick: w,
                      title: t && t.accountNo ? 'Edit bank information' : 'Connect with my bank',
                      isLoading: k,
                    }),
                    (0, l.jsxs)('div', {
                      className: 'flex w-full gap-x-4 justify-end mobile:justify-between',
                      children: [
                        (0, l.jsx)(d.Z, {
                          type: 'button',
                          className: 'bg-chat dark:bg-darkChat max-w-[230px] w-full',
                          title: 'Cancel',
                        }),
                        (0, l.jsx)(d.Z, {
                          type: 'submit',
                          className: 'bg-blue disabled:bg-disabledBlue dark:bg-darkBlue max-w-[230px] w-full',
                          title: 'Save',
                          isLoading: n,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        y = (0, r.memo)(function () {
          let { user: e, updateUser: a, isLoading: t } = (0, s.a)();
          return (0, l.jsxs)('div', {
            className:
              'mt-4 bg-lightGreen  dark:bg-dark w-full pl-12 pr-8 py-7 mobile:px-2  rounded-md h-[calc(100%_-_6rem)] overflow-y-auto relative max-w-['.concat(
                n.kk,
                ']',
              ),
            children: [
              (0, l.jsx)('h1', {
                className: 'text-primary dark:text-main text-2xl font-bold font-sans mb-7',
                children: 'Personal Information',
              }),
              e && (0, l.jsx)(k, { user: e, updateUser: a, isLoading: t }),
            ],
          });
        });
    },
    5979: function (e, a, t) {
      'use strict';
      t.d(a, {
        M9: function () {
          return c;
        },
        fb: function () {
          return o;
        },
        gf: function () {
          return i;
        },
        nN: function () {
          return r;
        },
        wD: function () {
          return s;
        },
        y1: function () {
          return n;
        },
      });
      var l = t(5691);
      let r = (0, l.Ry)({
          firstName: (0, l.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, l.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)(),
          username: (0, l.Z_)().nullable(),
          phone: (0, l.Rx)().nullable(),
          totalRewards: (0, l.Rx)(),
          accountNo: (0, l.Z_)(),
          accountTitle: (0, l.Z_)(),
          bankName: (0, l.Z_)(),
        }),
        s = (0, l.Ry)({
          date: (0, l.Z_)(),
          high_temperature: (0, l.Rx)(),
          low_temperature: (0, l.Rx)(),
          emotional_list: (0, l.IX)().of((0, l.Z_)()),
          emotional_overall: (0, l.Z_)(),
          weather: (0, l.Z_)(),
          relative_finance_status: (0, l.Z_)(),
          exercise_time: (0, l.Rx)(),
          photos: (0, l.nK)(),
          health_overall: (0, l.Z_)(),
          any_social_life: (0, l.Z_)(),
          social_life_list: (0, l.IX)().of((0, l.Z_)()),
          weight: (0, l.Rx)(),
          family_status: (0, l.Z_)(),
          device_screen_time: (0, l.Z_)(),
          work_life_balance: (0, l.Rx)().min(0, 'Value must be at least 0').max(10, 'Value must not exceed 10'),
          journaling: (0, l.Z_)(),
        }),
        n = (0, l.Ry)({
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().required('Password is required'),
        }),
        o = (0, l.Ry)({
          firstName: (0, l.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, l.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().min(5, 'Password must be 5 characters long').required('Password is required'),
          accountType: (0, l.Z_)().required('Account type is required'),
          termsConditions: (0, l.O7)()
            .test('is-true', 'You must accept the terms and conditions.', (e) => !0 === e)
            .required('Please accept the Terms and Conditions in order to proceed'),
          privacyPolicy: (0, l.O7)().when('termsConditions', {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept privacy and policy.'),
          }),
          cookiePolicy: (0, l.O7)().when(['privacyPolicy'], {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept cookie policy.'),
          }),
        }),
        i = (0, l.Ry)({ email: (0, l.Z_)().email().required('Email is required') }),
        c = (0, l.Ry)({
          token: (0, l.Z_)().required('Token cannot be empty'),
          password: (0, l.Z_)().required('Password is required'),
          confirm_password: (0, l.Z_)()
            .oneOf([(0, l.iH)('password'), ''], 'Password must match')
            .required('Confirm Password is required'),
        });
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 905, 897, 100, 971, 596, 744], function () {
      return e((e.s = 7769));
    }),
      (_N_E = e.O());
  },
]);
