(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    9917: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 8390)), Promise.resolve().then(s.bind(s, 8067));
    },
    8067: function (e, a, s) {
      'use strict';
      s.r(a),
        s.d(a, {
          default: function () {
            return f;
          },
        });
      var l = s(7437);
      s(2265);
      var t = s(346),
        n = s(6230),
        r = s(1396),
        i = s.n(r),
        o = s(5979),
        c = s(9611),
        m = s(2525),
        d = s(446),
        x = s(6845),
        h = s.n(x),
        p = function (e) {
          let { id: a, name: s, label: t, checked: n, className: r, onChange: i, error: o } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)('label', {
                className: ['flex items-center gap-x-3 relative', r].join(' '),
                htmlFor: a,
                children: [
                  (0, l.jsx)('input', {
                    type: 'checkbox',
                    id: a,
                    checked: n,
                    name: s,
                    className: 'hidden',
                    onChange: i,
                  }),
                  (0, l.jsx)('span', {
                    className: [
                      'w-4 h-4 rounded-[3px] bg-light border-solid border border-checkbox relative',
                      h().checkmark,
                    ].join(' '),
                  }),
                  t,
                ],
              }),
              o && (0, l.jsx)('p', { className: 'block w-full font-sans text-sm text-error -mt-4', children: o }),
            ],
          });
        },
        u = function (e) {
          let { isLoading: a, registerUser: s } = e,
            {
              handleSubmit: t,
              handleChange: r,
              values: x,
              touched: h,
              errors: u,
            } = (0, n.TA)({
              initialValues: c.vK,
              validationSchema: o.fb,
              onSubmit: async (e, a) => {
                let l = { email: e.email, first_name: e.firstName, last_name: e.lastName, password: e.password };
                s(l), a.setSubmitting(!1);
              },
            });
          return (0, l.jsxs)('form', {
            className: 'flex flex-row flex-wrap gap-5 items-center',
            noValidate: !0,
            onSubmit: t,
            children: [
              (0, l.jsx)(m.Z, {
                label: 'First Name',
                placeholder: 'First Name',
                name: 'firstName',
                error: h.firstName && u.firstName,
                onChange: r,
                value: x.firstName,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsx)(m.Z, {
                label: 'Last Name',
                placeholder: 'Last Name',
                name: 'lastName',
                error: h.lastName && u.lastName,
                onChange: r,
                value: x.lastName,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsx)(m.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: h.email && u.email,
                onChange: r,
                value: x.email,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsx)(m.Z, {
                label: 'Password',
                placeholder: 'Password',
                name: 'password',
                type: 'password',
                error: h.password && u.password,
                onChange: r,
                value: x.password,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-5',
                children: [
                  (0, l.jsx)(p, {
                    checked: x.termsConditions,
                    onChange: r,
                    name: 'termsConditions',
                    id: 'termsConditions',
                    error: u.termsConditions,
                    label: (0, l.jsxs)('p', {
                      className: 'text-primary dark:text-main font-sans font-semibold text-base',
                      children: [
                        ' ',
                        'I accept the',
                        (0, l.jsx)(i(), {
                          href: c.yy.LOGIN,
                          className: 'text-blue underline ml-1',
                          children: 'Terms and Conditions',
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(p, {
                    checked: x.privacyPolicy,
                    onChange: r,
                    name: 'privacyPolicy',
                    id: 'privacyPolicy',
                    error: u.privacyPolicy,
                    label: (0, l.jsxs)('p', {
                      className: 'text-primary dark:text-main font-sans font-semibold text-base',
                      children: [
                        ' ',
                        'I accept the',
                        (0, l.jsx)(i(), {
                          href: c.yy.LOGIN,
                          className: 'text-blue underline ml-1',
                          children: 'Privacy Policy',
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(p, {
                    checked: x.cookiePolicy,
                    onChange: r,
                    name: 'cookiePolicy',
                    id: 'cookiePolicy',
                    error: u.cookiePolicy,
                    label: (0, l.jsxs)('p', {
                      className: 'text-primary dark:text-main font-sans font-semibold text-base',
                      children: [
                        ' ',
                        'I accept the',
                        (0, l.jsx)(i(), {
                          href: c.yy.LOGIN,
                          className: 'text-blue underline ml-1',
                          children: 'Cookie Policy',
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsxs)('p', {
                    className: 'text-primary  dark:text-main font-sans font-semibold text-base',
                    children: [
                      ' ',
                      'Already have an account?',
                      (0, l.jsx)(i(), {
                        href: c.yy.LOGIN,
                        className: 'text-blue underline ml-1',
                        children: 'Click here to Login',
                      }),
                    ],
                  }),
                  (0, l.jsx)(d.Z, {
                    type: 'submit',
                    className: 'bg-blue w-full disabled:bg-disabledBlue',
                    title: 'Sign up',
                    isLoading: a,
                  }),
                ],
              }),
            ],
          });
        },
        f = function () {
          let { registerUser: e, isLoading: a } = (0, t.a)();
          return (0, l.jsxs)('div', {
            className: 'w-full py-2  max-w-[950px] mx-auto mt-10',
            children: [
              (0, l.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5 dark:text-main',
                children: 'Sign up to G-Data Labs',
              }),
              (0, l.jsx)(u, { registerUser: e, isLoading: a }),
            ],
          });
        };
    },
    6845: function (e) {
      e.exports = { checkmark: 'styles_checkmark__BaDN0' };
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 842, 251, 442, 849, 971, 596, 744], function () {
      return e((e.s = 9917));
    }),
      (_N_E = e.O());
  },
]);
