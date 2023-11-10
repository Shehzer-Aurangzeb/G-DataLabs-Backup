(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    909: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 581));
    },
    446: function (e, t, a) {
      'use strict';
      var r = a(7437);
      a(2265);
      var s = a(3427),
        l = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: i, isLoading: n = !1, icon: o, className: c = '', style: u } = e;
        return (0, r.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: t,
          type: a,
          style: u,
          disabled: n,
          children: [
            o &&
              !n &&
              (0, r.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, r.jsx)(s.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            n ? (0, r.jsx)(l.Z, { style: { color: '#fff', margin: '0 auto' } }) : i,
          ],
        });
      };
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var r = a(7437),
        s = a(2265),
        l = a(9907),
        i = a(6421),
        n = a(1846),
        o = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, l.i)(),
          [u, d] = (0, s.useState)(!1),
          m = (0, s.useRef)(null);
        return (
          (0, n.O)(m, () => {
            d(!1);
          }),
          (0, r.jsxs)(r.Fragment, {
            children: [
              c < 1024 &&
                (0, r.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, r.jsx)(o.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: i.tp,
                  }),
                }),
              (0, r.jsxs)('div', {
                ref: m,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(u ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, r.jsx)(o.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => d(!u),
                      type: 'button',
                      src: i.tp,
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
      var r = a(7437),
        s = a(2265),
        l = a(6691),
        i = a.n(l),
        n = a(6421);
      t.Z = function (e) {
        let {
            label: t,
            placeholder: a,
            onChange: l,
            error: o,
            type: c,
            style: u,
            className: d,
            value: m,
            name: f,
            readOnly: x,
            isMonetaryInput: p,
            currency: h,
          } = e,
          [_, b] = (0, s.useState)(!1);
        return (0, r.jsxs)('div', {
          className: ['flex flex-col gap-y-3 relative', d].join(' '),
          style: u,
          children: [
            (0, r.jsx)('label', {
              className: 'text-base font-bold font-sans text-black dark:text-white',
              htmlFor: f,
              children: t,
            }),
            p &&
              (0, r.jsx)('span', {
                className: 'text-black font-sans font-normal text-xl absolute top-[54%] left-[15px]',
                children: h,
              }),
            'password' === c
              ? (0, r.jsxs)('div', {
                  className: 'relative w-full ',
                  children: [
                    (0, r.jsx)('input', {
                      autoComplete: 'off',
                      placeholder: a,
                      onChange: l,
                      name: f,
                      readOnly: x,
                      id: f,
                      type: _ ? 'text' : 'password',
                      value: m,
                      className:
                        'bg-chat dark:bg-darkChat py-5 px-7 rounded-md text-black dark:text-main font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder  focus:outline-none w-full',
                    }),
                    (0, r.jsx)(i(), {
                      src: _ ? n.fR : n.th,
                      alt: _ ? 'hide-password-icon' : 'show-password-icon',
                      className:
                        'h-5 w-5 dark:invert-[1] cursor-pointer absolute top-[50%] right-[10px] transform translate-y-[-50%]',
                      onClick: () => {
                        b(!_);
                      },
                    }),
                  ],
                })
              : (0, r.jsx)('input', {
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
            o && (0, r.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: o }),
          ],
        });
      };
    },
    581: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var r = a(7437);
      a(2265);
      var s = a(346),
        l = a(6230),
        i = a(1396),
        n = a.n(i),
        o = a(5979),
        c = a(9611),
        u = a(2525),
        d = a(446),
        m = function (e) {
          let { isLoading: t, resetPassword: a } = e,
            {
              handleSubmit: s,
              handleChange: i,
              values: m,
              touched: f,
              errors: x,
            } = (0, l.TA)({
              initialValues: c.E0,
              validationSchema: o.gf,
              onSubmit: async (e, t) => {
                a(e), t.setSubmitting(!1);
              },
            });
          return (0, r.jsxs)('form', {
            className: 'flex flex-col gap-y-5',
            noValidate: !0,
            onSubmit: s,
            children: [
              (0, r.jsx)(u.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: f.email && x.email,
                onChange: i,
                value: m.email,
                className: 'w-full',
              }),
              (0, r.jsx)(n(), {
                href: c.yy.LOGIN,
                className: 'font-sans font-semibold text-base text-blue underline text-center',
                children: 'Go back to Login',
              }),
              (0, r.jsx)(d.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue',
                title: 'Submit',
                isLoading: t,
              }),
            ],
          });
        },
        f = function () {
          let { resetPassword: e, isLoading: t } = (0, s.a)();
          return (0, r.jsxs)('div', {
            className: 'absolute-center w-full max-w-[450px] overflow-y-auto',
            children: [
              (0, r.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5',
                children: 'Forgot Password',
              }),
              (0, r.jsx)(m, { resetPassword: e, isLoading: t }),
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
          return n;
        },
        gf: function () {
          return o;
        },
        nN: function () {
          return s;
        },
        wD: function () {
          return l;
        },
        y1: function () {
          return i;
        },
      });
      var r = a(5691);
      let s = (0, r.Ry)({
          firstName: (0, r.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, r.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)(),
          username: (0, r.Z_)().nullable(),
          phone: (0, r.Rx)().nullable(),
          totalRewards: (0, r.Rx)(),
          accountNo: (0, r.Z_)(),
          accountTitle: (0, r.Z_)(),
          bankName: (0, r.Z_)(),
        }),
        l = (0, r.Ry)({
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
        i = (0, r.Ry)({
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)().required('Password is required'),
        }),
        n = (0, r.Ry)({
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
        o = (0, r.Ry)({ email: (0, r.Z_)().email().required('Email is required') }),
        c = (0, r.Ry)({
          token: (0, r.Z_)().required('Token cannot be empty'),
          password: (0, r.Z_)().required('Password is required'),
          confirm_password: (0, r.Z_)()
            .oneOf([(0, r.iH)('password'), ''], 'Password must match')
            .required('Confirm Password is required'),
        });
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 396, 707, 100, 971, 596, 744], function () {
      return e((e.s = 909));
    }),
      (_N_E = e.O());
  },
]);
