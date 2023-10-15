(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [626],
  {
    5326: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 8390)), Promise.resolve().then(s.bind(s, 2224));
    },
    2224: function (e, a, s) {
      'use strict';
      s.r(a),
        s.d(a, {
          default: function () {
            return f;
          },
        });
      var l = s(7437);
      s(2265);
      var n = s(346),
        t = s(6230),
        i = s(1396),
        r = s.n(i),
        o = s(5979),
        u = s(9611),
        c = s(2525),
        d = s(446),
        m = function (e) {
          let { isLoading: a, loginUser: s } = e,
            {
              handleSubmit: n,
              handleChange: i,
              values: m,
              touched: f,
              errors: b,
            } = (0, t.TA)({
              initialValues: u.D$,
              validationSchema: o.y1,
              onSubmit: async (e, a) => {
                s(e), a.setSubmitting(!1);
              },
            });
          return (0, l.jsxs)('form', {
            className: 'flex flex-col gap-y-5',
            noValidate: !0,
            onSubmit: n,
            children: [
              (0, l.jsx)(c.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: f.email && b.email,
                onChange: i,
                value: m.email,
                className: 'w-full',
              }),
              (0, l.jsx)(c.Z, {
                label: 'Password',
                placeholder: 'Password',
                name: 'password',
                type: 'password',
                error: f.password && b.password,
                onChange: i,
                value: m.password,
                className: 'w-full',
              }),
              (0, l.jsxs)('p', {
                className: 'text-primary dark:text-main font-sans font-semibold text-base',
                children: [
                  ' ',
                  "Don't have an account?",
                  (0, l.jsx)(r(), {
                    href: u.yy.SIGNUP,
                    className: 'text-blue underline ml-1',
                    children: 'Click here to Sign up',
                  }),
                ],
              }),
              (0, l.jsx)(d.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue',
                title: 'Sign In',
                isLoading: a,
              }),
              (0, l.jsx)(r(), {
                href: u.yy.RESETPASSWORD,
                className: 'text-blue underline text-center font-sans font-semibold text-base',
                children: 'Forgot Password?',
              }),
            ],
          });
        },
        f = function () {
          let { loginUser: e, isLoading: a } = (0, n.a)();
          return (0, l.jsxs)('div', {
            className: 'absolute-center w-full max-w-[450px] overflow-y-auto',
            children: [
              (0, l.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5',
                children: 'Sign in to G-Data Labs',
              }),
              (0, l.jsx)(m, { loginUser: e, isLoading: a }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 842, 251, 442, 849, 971, 596, 744], function () {
      return e((e.s = 5326));
    }),
      (_N_E = e.O());
  },
]);
