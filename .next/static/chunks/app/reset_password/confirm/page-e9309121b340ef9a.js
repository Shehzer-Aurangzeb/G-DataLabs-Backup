(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [122],
  {
    6731: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 2156));
    },
    2156: function (e, s, a) {
      'use strict';
      a.r(s),
        a.d(s, {
          default: function () {
            return c;
          },
        });
      var o = a(7437);
      a(2265);
      var n = a(346),
        r = a(6230),
        l = a(5979),
        t = a(9611),
        i = a(2525),
        d = a(446),
        u = function (e) {
          let { isLoading: s, confirmPassword: a } = e,
            {
              handleSubmit: n,
              handleChange: u,
              values: c,
              touched: m,
              errors: f,
            } = (0, r.TA)({
              initialValues: t.CQ,
              validationSchema: l.M9,
              onSubmit: async (e, s) => {
                a(e), s.setSubmitting(!1);
              },
            });
          return (0, o.jsxs)('form', {
            className: 'flex flex-col gap-y-5',
            noValidate: !0,
            onSubmit: n,
            children: [
              (0, o.jsx)(i.Z, {
                label: 'Token',
                placeholder: 'Token',
                type: 'token',
                name: 'token',
                error: m.token && f.token,
                onChange: u,
                value: c.token,
                className: 'w-full',
              }),
              (0, o.jsx)(i.Z, {
                label: 'Password',
                placeholder: 'Password',
                type: 'password',
                name: 'password',
                error: m.password && f.password,
                onChange: u,
                value: c.password,
                className: 'w-full',
              }),
              (0, o.jsx)(i.Z, {
                label: 'Confirm Password',
                placeholder: 'Confirm Password',
                type: 'password',
                name: 'confirm_password',
                error: m.confirm_password && f.confirm_password,
                onChange: u,
                value: c.confirm_password,
                className: 'w-full',
              }),
              (0, o.jsx)(d.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue',
                title: 'Submit',
                isLoading: s,
              }),
            ],
          });
        },
        c = function () {
          let { confirmPassword: e, isLoading: s } = (0, n.a)();
          return (0, o.jsxs)('div', {
            className: 'absolute-center w-full max-w-[450px] overflow-y-auto',
            children: [
              (0, o.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5',
                children: 'Forgot Password',
              }),
              (0, o.jsx)(u, { confirmPassword: e, isLoading: s }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 707, 849, 971, 596, 744], function () {
      return e((e.s = 6731));
    }),
      (_N_E = e.O());
  },
]);