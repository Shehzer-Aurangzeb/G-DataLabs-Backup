(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    9917: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 8390)), Promise.resolve().then(t.bind(t, 8067));
    },
    446: function (e, a, t) {
      'use strict';
      var s = t(7437);
      t(2265);
      var l = t(3427),
        r = t(4246);
      a.Z = function (e) {
        let { onClick: a, type: t = 'button', title: n, isLoading: i = !1, icon: o, className: c = '', style: d } = e;
        return (0, s.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: a,
          type: t,
          style: d,
          disabled: i,
          children: [
            o &&
              !i &&
              (0, s.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, s.jsx)(l.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            i ? (0, s.jsx)(r.Z, { style: { color: '#fff', margin: '0 auto' } }) : n,
          ],
        });
      };
    },
    8390: function (e, a, t) {
      'use strict';
      t.r(a);
      var s = t(7437),
        l = t(2265),
        r = t(9907),
        n = t(2854),
        i = t(1846),
        o = t(1839);
      a.default = function (e) {
        let { children: a, className: t = '' } = e,
          { width: c } = (0, r.i)(),
          [d, m] = (0, l.useState)(!1),
          u = (0, l.useRef)(null);
        return (
          (0, i.O)(u, () => {
            m(!1);
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              c < 1024 &&
                (0, s.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, s.jsx)(o.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => m(!d),
                    type: 'button',
                    src: n.Ix,
                  }),
                }),
              (0, s.jsxs)('div', {
                ref: u,
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
                    (0, s.jsx)(o.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => m(!d),
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
      var s = t(7437),
        l = t(2265),
        r = t(6691),
        n = t.n(r),
        i = t(2854);
      a.Z = function (e) {
        let {
            label: a,
            placeholder: t,
            onChange: r,
            error: o,
            type: c,
            style: d,
            className: m,
            value: u,
            name: x,
            readOnly: p,
            isMonetaryInput: f,
            currency: h,
          } = e,
          [b, y] = (0, l.useState)(!1);
        return (0, s.jsxs)('div', {
          className: ['flex flex-col gap-y-3 relative', m].join(' '),
          style: d,
          children: [
            (0, s.jsx)('label', {
              className: 'text-base font-bold font-sans text-black dark:text-white',
              htmlFor: x,
              children: a,
            }),
            f &&
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
                      placeholder: t,
                      onChange: r,
                      name: x,
                      readOnly: p,
                      id: x,
                      type: b ? 'text' : 'password',
                      value: u,
                      className:
                        'bg-chat dark:bg-darkChat py-5 px-7 rounded-md text-black dark:text-main font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder  focus:outline-none w-full',
                    }),
                    (0, s.jsx)(n(), {
                      src: b ? i.fR : i.th,
                      alt: b ? 'hide-password-icon' : 'show-password-icon',
                      className:
                        'h-5 w-5 dark:invert-[1] cursor-pointer absolute top-[50%] right-[10px] transform translate-y-[-50%]',
                      onClick: () => {
                        y(!b);
                      },
                    }),
                  ],
                })
              : (0, s.jsx)('input', {
                  autoComplete: 'off',
                  placeholder: t,
                  onChange: r,
                  name: x,
                  readOnly: p,
                  id: x,
                  type: c || 'text',
                  value: u,
                  className:
                    'bg-chat dark:bg-darkChat py-5 px-7 rounded-md dark:text-main text-black font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none',
                }),
            o && (0, s.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: o }),
          ],
        });
      };
    },
    9109: function (e, a, t) {
      'use strict';
      var s = t(7437),
        l = t(2265),
        r = t(1872),
        n = t(2854),
        i = t(1515),
        o = t(1846),
        c = t(3427);
      a.Z = function (e) {
        let { className: a, options: t, style: d, value: m, onClick: u, increasePadding: x } = e,
          [p, f] = (0, l.useState)(!1),
          h = (0, l.useRef)(null),
          b = () => {
            f(!p);
          };
        return (
          (0, o.O)(h, () => {
            f(!1);
          }),
          (0, s.jsxs)('div', {
            ref: h,
            style: d,
            className: [
              'relative bg-chat dark:bg-darkChat dark:text-main '
                .concat(null != x ? x : 'py-[10px]', ' px-4 ')
                .concat(p ? 'rounded-md rounded-b-none' : 'rounded-md', ' w-full'),
              a,
            ].join(' '),
            children: [
              (0, s.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: b,
                onKeyDown: b,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, s.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, i.kC)(m),
                  }),
                  (0, s.jsx)(c.Z, {
                    src: n.x7,
                    alt: 'dropdown-icon',
                    className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                      p ? 'rotate-180 ' : 'rotate-0',
                    ),
                  }),
                ],
              }),
              p &&
                (0, s.jsx)('ul', {
                  className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                  children: t
                    .filter((e) => e.value !== m)
                    .map((e) =>
                      (0, s.jsx)(
                        'li',
                        {
                          children: (0, s.jsx)('div', {
                            tabIndex: 0,
                            className:
                              'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 '.concat(
                                null != x ? x : 'py-[10px]',
                              ),
                            role: 'button',
                            onClick: () => {
                              u(e.value), b();
                            },
                            onKeyDown: () => {
                              u(e.value), b();
                            },
                            children: (0, i.kC)(e.value),
                          }),
                        },
                        (0, r.Z)(),
                      ),
                    ),
                }),
            ],
          })
        );
      };
    },
    8067: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return y;
          },
        });
      var s = t(7437);
      t(2265);
      var l = t(346),
        r = t(6230),
        n = t(1396),
        i = t.n(n),
        o = t(5979),
        c = t(910),
        d = t(6548),
        m = t(2525),
        u = t(9109),
        x = t(446),
        p = t(6845),
        f = t.n(p),
        h = function (e) {
          let { id: a, name: t, label: l, checked: r, className: n, onChange: i, error: o } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)('label', {
                className: ['flex items-center gap-x-3 relative', n].join(' '),
                htmlFor: a,
                children: [
                  (0, s.jsx)('input', {
                    type: 'checkbox',
                    id: a,
                    checked: r,
                    name: t,
                    className: 'hidden',
                    onChange: i,
                  }),
                  (0, s.jsx)('span', {
                    className: [
                      'w-4 h-4 rounded-[3px] bg-light border-solid border border-checkbox relative',
                      f().checkmark,
                    ].join(' '),
                  }),
                  l,
                ],
              }),
              o && (0, s.jsx)('p', { className: 'block w-full font-sans text-sm text-error -mt-4', children: o }),
            ],
          });
        },
        b = function (e) {
          let { isLoading: a, registerUser: t } = e,
            {
              handleSubmit: l,
              handleChange: n,
              values: p,
              touched: f,
              errors: b,
              setFieldValue: y,
            } = (0, r.TA)({
              initialValues: c.vK,
              validationSchema: o.fb,
              onSubmit: async (e, a) => {
                let s = {
                  email: e.email,
                  first_name: e.firstName,
                  last_name: e.lastName,
                  password: e.password,
                  is_company: e.accountType === c.Z8.COMPANY,
                };
                t(s), a.setSubmitting(!1);
              },
            });
          return (0, s.jsxs)('form', {
            className: 'flex flex-row flex-wrap gap-5 items-center',
            noValidate: !0,
            onSubmit: l,
            children: [
              (0, s.jsxs)('div', {
                className: 'flex flex-col gap-y-3 relative w-full',
                children: [
                  (0, s.jsx)('span', {
                    className: 'block text-base font-bold font-sans text-black dark:text-white',
                    children: 'Account Type',
                  }),
                  (0, s.jsx)(u.Z, {
                    value: p.accountType,
                    options: c.pY,
                    className: 'w-auto max-w-[450px]',
                    increasePadding: 'py-[22px]',
                    onClick: (e) => {
                      y('accountType', e);
                    },
                  }),
                ],
              }),
              (0, s.jsx)(m.Z, {
                label: 'First Name',
                placeholder: 'First Name',
                name: 'firstName',
                error: f.firstName && b.firstName,
                onChange: n,
                value: p.firstName,
                className: 'w-full max-w-[450px]',
              }),
              (0, s.jsx)(m.Z, {
                label: 'Last Name',
                placeholder: 'Last Name',
                name: 'lastName',
                error: f.lastName && b.lastName,
                onChange: n,
                value: p.lastName,
                className: 'w-full max-w-[450px]',
              }),
              (0, s.jsx)(m.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: f.email && b.email,
                onChange: n,
                value: p.email,
                className: 'w-full max-w-[450px]',
              }),
              (0, s.jsx)(m.Z, {
                label: 'Password',
                placeholder: 'Password',
                name: 'password',
                type: 'password',
                error: f.password && b.password,
                onChange: n,
                value: p.password,
                className: 'w-full max-w-[450px]',
              }),
              (0, s.jsxs)('div', {
                className: 'flex flex-col gap-y-5 w-full',
                children: [
                  (0, s.jsx)(h, {
                    checked: p.termsConditions,
                    onChange: n,
                    name: 'termsConditions',
                    id: 'termsConditions',
                    className: 'w-fit',
                    error: f.termsConditions && b.termsConditions,
                    label: (0, s.jsxs)('p', {
                      className: 'text-primary dark:text-main font-sans font-semibold text-base',
                      children: [
                        ' ',
                        'I accept the',
                        (0, s.jsx)(i(), {
                          href: d.y.TERMS,
                          className: 'text-blue underline ml-1',
                          children: 'Terms and Conditions',
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(h, {
                    checked: p.privacyPolicy,
                    onChange: n,
                    name: 'privacyPolicy',
                    id: 'privacyPolicy',
                    className: 'w-fit',
                    error: f.privacyPolicy && b.privacyPolicy,
                    label: (0, s.jsxs)('p', {
                      className: 'text-primary dark:text-main font-sans font-semibold text-base',
                      children: [
                        ' ',
                        'I accept the',
                        (0, s.jsx)(i(), {
                          href: d.y.PRIVACY,
                          className: 'text-blue underline ml-1',
                          children: 'Privacy Policy',
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(h, {
                    checked: p.cookiePolicy,
                    onChange: n,
                    name: 'cookiePolicy',
                    id: 'cookiePolicy',
                    className: 'w-fit',
                    error: f.cookiePolicy && b.cookiePolicy,
                    label: (0, s.jsxs)('p', {
                      className: 'text-primary dark:text-main font-sans font-semibold text-base',
                      children: [
                        ' ',
                        'I accept the',
                        (0, s.jsx)(i(), {
                          href: d.y.COOKIEPOLICY,
                          className: 'text-blue underline ml-1',
                          children: 'Cookie Policy',
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)('p', {
                    className: 'text-primary  dark:text-main font-sans font-semibold text-base',
                    children: [
                      ' ',
                      'Already have an account?',
                      (0, s.jsx)(i(), {
                        href: d.y.LOGIN,
                        className: 'text-blue underline ml-1',
                        children: 'Click here to Login',
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(x.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue max-w-[450px]',
                title: 'Sign up',
                isLoading: a,
              }),
            ],
          });
        },
        y = function () {
          let { registerUser: e, isLoading: a } = (0, l.a)();
          return (0, s.jsxs)('div', {
            className: 'w-full py-2  max-w-[950px] mx-auto mt-10',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5 dark:text-main',
                children: 'Sign up to G-Data Labs',
              }),
              (0, s.jsx)(b, { registerUser: e, isLoading: a }),
            ],
          });
        };
    },
    5979: function (e, a, t) {
      'use strict';
      t.d(a, {
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
          return l;
        },
        wD: function () {
          return r;
        },
        y1: function () {
          return n;
        },
      });
      var s = t(5691);
      let l = (0, s.Ry)({
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
        r = (0, s.Ry)({
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
    6845: function (e) {
      e.exports = { checkmark: 'styles_checkmark__BaDN0' };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 396, 897, 100, 971, 596, 744], function () {
      return e((e.s = 9917));
    }),
      (_N_E = e.O());
  },
]);
