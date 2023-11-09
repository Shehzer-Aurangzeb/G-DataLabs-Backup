(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    9917: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 8390)), Promise.resolve().then(s.bind(s, 8067));
    },
    9109: function (e, a, s) {
      'use strict';
      var l = s(7437),
        t = s(2265),
        n = s(1872),
        r = s(6421),
        i = s(1515),
        o = s(1846),
        c = s(3427);
      a.Z = function (e) {
        let { className: a, options: s, style: m, value: d, onClick: x } = e,
          [u, p] = (0, t.useState)(!1),
          f = (0, t.useRef)(null),
          h = () => {
            p(!u);
          };
        return (
          (0, o.O)(f, () => {
            p(!1);
          }),
          (0, l.jsxs)('div', {
            ref: f,
            style: m,
            className: [
              'relative bg-chat py-[10px] dark:bg-darkChat dark:text-main px-4 '.concat(
                u ? 'rounded-md rounded-b-none' : 'rounded-md',
                ' w-full',
              ),
              a,
            ].join(' '),
            children: [
              (0, l.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: h,
                onKeyDown: h,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, l.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, i.kC)(d),
                  }),
                  (0, l.jsx)(c.Z, {
                    src: r.x7,
                    alt: 'dropdown-icon',
                    className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                      u ? 'rotate-180 ' : 'rotate-0',
                    ),
                  }),
                ],
              }),
              u &&
                (0, l.jsx)('ul', {
                  className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                  children: s
                    .filter((e) => e.value !== d)
                    .map((e) =>
                      (0, l.jsx)(
                        'li',
                        {
                          children: (0, l.jsx)('div', {
                            tabIndex: 0,
                            className:
                              'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 py-[10px]',
                            role: 'button',
                            onClick: () => {
                              x(e.value), h();
                            },
                            onKeyDown: () => {
                              x(e.value), h();
                            },
                            children: (0, i.kC)(e.value),
                          }),
                        },
                        (0, n.Z)(),
                      ),
                    ),
                }),
            ],
          })
        );
      };
    },
    8067: function (e, a, s) {
      'use strict';
      s.r(a),
        s.d(a, {
          default: function () {
            return b;
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
        d = s(9109),
        x = s(446),
        u = s(6845),
        p = s.n(u),
        f = function (e) {
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
                      p().checkmark,
                    ].join(' '),
                  }),
                  t,
                ],
              }),
              o && (0, l.jsx)('p', { className: 'block w-full font-sans text-sm text-error -mt-4', children: o }),
            ],
          });
        },
        h = function (e) {
          let { isLoading: a, registerUser: s } = e,
            {
              handleSubmit: t,
              handleChange: r,
              values: u,
              touched: p,
              errors: h,
              setFieldValue: b,
            } = (0, n.TA)({
              initialValues: c.vK,
              validationSchema: o.fb,
              onSubmit: async (e, a) => {
                let l = {
                  email: e.email,
                  first_name: e.firstName,
                  last_name: e.lastName,
                  password: e.password,
                  is_company: e.accountType === c.Z8.COMPANY,
                };
                s(l), a.setSubmitting(!1);
              },
            });
          return (0, l.jsxs)('form', {
            className: 'flex flex-row flex-wrap gap-5 items-center',
            noValidate: !0,
            onSubmit: t,
            children: [
              (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-3 relative w-full',
                children: [
                  (0, l.jsx)('span', {
                    className: 'block text-base font-bold font-sans text-black dark:text-white',
                    children: 'Account Type',
                  }),
                  (0, l.jsx)(d.Z, {
                    value: u.accountType,
                    options: c.pY,
                    className: 'w-auto max-w-[450px]',
                    onClick: (e) => {
                      b('accountType', e);
                    },
                  }),
                ],
              }),
              (0, l.jsx)(m.Z, {
                label: 'First Name',
                placeholder: 'First Name',
                name: 'firstName',
                error: p.firstName && h.firstName,
                onChange: r,
                value: u.firstName,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsx)(m.Z, {
                label: 'Last Name',
                placeholder: 'Last Name',
                name: 'lastName',
                error: p.lastName && h.lastName,
                onChange: r,
                value: u.lastName,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsx)(m.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: p.email && h.email,
                onChange: r,
                value: u.email,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsx)(m.Z, {
                label: 'Password',
                placeholder: 'Password',
                name: 'password',
                type: 'password',
                error: p.password && h.password,
                onChange: r,
                value: u.password,
                className: 'w-full max-w-[450px]',
              }),
              (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-5 w-full',
                children: [
                  (0, l.jsx)(f, {
                    checked: u.termsConditions,
                    onChange: r,
                    name: 'termsConditions',
                    id: 'termsConditions',
                    className: 'w-fit',
                    error: h.termsConditions,
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
                  (0, l.jsx)(f, {
                    checked: u.privacyPolicy,
                    onChange: r,
                    name: 'privacyPolicy',
                    id: 'privacyPolicy',
                    className: 'w-fit',
                    error: h.privacyPolicy,
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
                  (0, l.jsx)(f, {
                    checked: u.cookiePolicy,
                    onChange: r,
                    name: 'cookiePolicy',
                    id: 'cookiePolicy',
                    className: 'w-fit',
                    error: h.cookiePolicy,
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
                ],
              }),
              (0, l.jsx)(x.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue max-w-[450px]',
                title: 'Sign up',
                isLoading: a,
              }),
            ],
          });
        },
        b = function () {
          let { registerUser: e, isLoading: a } = (0, t.a)();
          return (0, l.jsxs)('div', {
            className: 'w-full py-2  max-w-[950px] mx-auto mt-10',
            children: [
              (0, l.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5 dark:text-main',
                children: 'Sign up to G-Data Labs',
              }),
              (0, l.jsx)(h, { registerUser: e, isLoading: a }),
            ],
          });
        };
    },
    6845: function (e) {
      e.exports = { checkmark: 'styles_checkmark__BaDN0' };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 396, 707, 849, 971, 596, 744], function () {
      return e((e.s = 9917));
    }),
      (_N_E = e.O());
  },
]);
