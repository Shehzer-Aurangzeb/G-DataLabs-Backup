(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [626],
  {
    1376: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 2224));
    },
    446: function (e, t, a) {
      'use strict';
      var s = a(7437);
      a(2265);
      var r = a(3427),
        l = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: n, isLoading: i = !1, icon: o, className: c = '', style: d } = e;
        return (0, s.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: t,
          type: a,
          style: d,
          disabled: i,
          children: [
            o &&
              !i &&
              (0, s.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, s.jsx)(r.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            i ? (0, s.jsx)(l.Z, { style: { color: '#fff', margin: '0 auto' } }) : n,
          ],
        });
      };
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var s = a(7437),
        r = a(2265),
        l = a(9907),
        n = a(2854),
        i = a(1846),
        o = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, l.i)(),
          [d, u] = (0, r.useState)(!1),
          m = (0, r.useRef)(null);
        return (
          (0, i.O)(m, () => {
            u(!1);
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              c < 1024 &&
                (0, s.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, s.jsx)(o.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: n.Ix,
                  }),
                }),
              (0, s.jsxs)('div', {
                ref: m,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(d ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, s.jsx)(o.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => u(!d),
                      type: 'button',
                      src: n.Ix,
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
      'use strict';
      var s = a(7437),
        r = a(2265),
        l = a(6691),
        n = a.n(l),
        i = a(2854);
      t.Z = function (e) {
        let {
            label: t,
            placeholder: a,
            onChange: l,
            error: o,
            type: c,
            style: d,
            className: u,
            value: m,
            name: f,
            readOnly: x,
            isMonetaryInput: p,
            currency: h,
          } = e,
          [b, _] = (0, r.useState)(!1);
        return (0, s.jsxs)('div', {
          className: ['flex flex-col gap-y-3 relative', u].join(' '),
          style: d,
          children: [
            (0, s.jsx)('label', {
              className: 'text-base font-bold font-sans text-black dark:text-white',
              htmlFor: f,
              children: t,
            }),
            p &&
              (0, s.jsx)('span', {
                className: 'text-black font-sans font-normal text-xl absolute top-[54%] left-[15px]',
                children: h,
              }),
            'password' === c
              ? (0, s.jsxs)('div', {
                  className: 'relative w-full ',
                  children: [
                    (0, s.jsx)('input', {
                      autoComplete: 'off',
                      placeholder: a,
                      onChange: l,
                      name: f,
                      readOnly: x,
                      id: f,
                      type: b ? 'text' : 'password',
                      value: m,
                      className:
                        'bg-chat dark:bg-darkChat py-5 px-7 rounded-md text-black dark:text-main font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder  focus:outline-none w-full',
                    }),
                    (0, s.jsx)(n(), {
                      src: b ? i.fR : i.th,
                      alt: b ? 'hide-password-icon' : 'show-password-icon',
                      className:
                        'h-5 w-5 dark:invert-[1] cursor-pointer absolute top-[50%] right-[10px] transform translate-y-[-50%]',
                      onClick: () => {
                        _(!b);
                      },
                    }),
                  ],
                })
              : (0, s.jsx)('input', {
                  autoComplete: 'off',
                  placeholder: a,
                  onChange: l,
                  name: f,
                  readOnly: x,
                  id: f,
                  type: c || 'text',
                  value: m,
                  className:
                    'bg-chat dark:bg-darkChat py-5 px-7 rounded-md dark:text-main text-black font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none',
                }),
            o && (0, s.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: o }),
          ],
        });
      };
    },
    2224: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var s = a(7437);
      a(2265);
      var r = a(346),
        l = a(6230),
        n = a(1396),
        i = a.n(n),
        o = a(5979),
        c = a(910),
        d = a(6548),
        u = a(2525),
        m = a(446),
        f = function (e) {
          let { isLoading: t, loginUser: a } = e,
            {
              handleSubmit: r,
              handleChange: n,
              values: f,
              touched: x,
              errors: p,
            } = (0, l.TA)({
              initialValues: c.D$,
              validationSchema: o.y1,
              onSubmit: async (e, t) => {
                a(e), t.setSubmitting(!1);
              },
            });
          return (0, s.jsxs)('form', {
            className: 'flex flex-col gap-y-5',
            noValidate: !0,
            onSubmit: r,
            children: [
              (0, s.jsx)(u.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: x.email && p.email,
                onChange: n,
                value: f.email,
                className: 'w-full',
              }),
              (0, s.jsx)(u.Z, {
                label: 'Password',
                placeholder: 'Password',
                name: 'password',
                type: 'password',
                error: x.password && p.password,
                onChange: n,
                value: f.password,
                className: 'w-full',
              }),
              (0, s.jsxs)('p', {
                className: 'text-primary dark:text-main font-sans font-semibold text-base',
                children: [
                  ' ',
                  "Don't have an account?",
                  (0, s.jsx)(i(), {
                    href: d.y.SIGNUP,
                    className: 'text-blue underline ml-1',
                    children: 'Click here to Sign up',
                  }),
                ],
              }),
              (0, s.jsx)(m.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue',
                title: 'Sign In',
                isLoading: t,
              }),
              (0, s.jsx)(i(), {
                href: d.y.RESETPASSWORD,
                className: 'text-blue underline text-center font-sans font-semibold text-base',
                children: 'Forgot Password?',
              }),
            ],
          });
        },
        x = function () {
          let { loginUser: e, isLoading: t } = (0, r.a)();
          return (0, s.jsxs)('div', {
            className: 'absolute-center w-full max-w-[450px] overflow-y-auto',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5 dark:text-main',
                children: 'Sign in to G-Data Labs',
              }),
              (0, s.jsx)(f, { loginUser: e, isLoading: t }),
            ],
          });
        };
    },
    5979: function (e, t, a) {
      'use strict';
      a.d(t, {
        M9: function () {
          return c;
        },
        fb: function () {
          return i;
        },
        gf: function () {
          return o;
        },
        nN: function () {
          return r;
        },
        wD: function () {
          return l;
        },
        y1: function () {
          return n;
        },
      });
      var s = a(5691);
      let r = (0, s.Ry)({
          firstName: (0, s.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, s.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, s.Z_)().email().required('Email is required'),
          password: (0, s.Z_)(),
          username: (0, s.Z_)().nullable(),
          phone: (0, s.Rx)().nullable(),
          totalRewards: (0, s.Rx)(),
          accountNo: (0, s.Z_)(),
          accountTitle: (0, s.Z_)(),
          bankName: (0, s.Z_)(),
        }),
        l = (0, s.Ry)({
          date: (0, s.Z_)(),
          high_temperature: (0, s.Rx)(),
          low_temperature: (0, s.Rx)(),
          emotional_list: (0, s.IX)().of((0, s.Z_)()),
          emotional_overall: (0, s.Z_)(),
          weather: (0, s.Z_)(),
          relative_finance_status: (0, s.Z_)(),
          exercise_time: (0, s.Rx)(),
          photos: (0, s.nK)(),
          health_overall: (0, s.Z_)(),
          any_social_life: (0, s.Z_)(),
          social_life_list: (0, s.IX)().of((0, s.Z_)()),
          weight: (0, s.Rx)(),
          family_status: (0, s.Z_)(),
          device_screen_time: (0, s.Z_)(),
          work_life_balance: (0, s.Rx)().min(0, 'Value must be at least 0').max(10, 'Value must not exceed 10'),
          journaling: (0, s.Z_)(),
        }),
        n = (0, s.Ry)({
          email: (0, s.Z_)().email().required('Email is required'),
          password: (0, s.Z_)().required('Password is required'),
        }),
        i = (0, s.Ry)({
          firstName: (0, s.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, s.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, s.Z_)().email().required('Email is required'),
          password: (0, s.Z_)().min(5, 'Password must be 5 characters long').required('Password is required'),
          accountType: (0, s.Z_)().required('Account type is required'),
          termsConditions: (0, s.O7)()
            .test('is-true', 'You must accept the terms and conditions.', (e) => !0 === e)
            .required('Please accept the Terms and Conditions in order to proceed'),
          privacyPolicy: (0, s.O7)().when('termsConditions', {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept privacy and policy.'),
          }),
          cookiePolicy: (0, s.O7)().when(['privacyPolicy'], {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept cookie policy.'),
          }),
        }),
        o = (0, s.Ry)({ email: (0, s.Z_)().email().required('Email is required') }),
        c = (0, s.Ry)({
          token: (0, s.Z_)().required('Token cannot be empty'),
          password: (0, s.Z_)().required('Password is required'),
          confirm_password: (0, s.Z_)()
            .oneOf([(0, s.iH)('password'), ''], 'Password must match')
            .required('Confirm Password is required'),
        });
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 396, 897, 100, 971, 596, 744], function () {
      return e((e.s = 1376));
    }),
      (_N_E = e.O());
  },
]);
