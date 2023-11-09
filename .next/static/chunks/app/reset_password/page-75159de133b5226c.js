(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    909: function (e, l, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 581));
    },
    581: function (e, l, a) {
      'use strict';
      a.r(l),
        a.d(l, {
          default: function () {
            return f;
          },
        });
      var t = a(7437);
      a(2265);
      var n = a(346),
        s = a(6230),
        i = a(1396),
        o = a.n(i),
        r = a(5979),
        u = a(9611),
        c = a(2525),
        m = a(446),
        d = function (e) {
          let { isLoading: l, resetPassword: a } = e,
            {
              handleSubmit: n,
              handleChange: i,
              values: d,
              touched: f,
              errors: b,
            } = (0, s.TA)({
              initialValues: u.E0,
              validationSchema: r.gf,
              onSubmit: async (e, l) => {
                a(e), l.setSubmitting(!1);
              },
            });
          return (0, t.jsxs)('form', {
            className: 'flex flex-col gap-y-5',
            noValidate: !0,
            onSubmit: n,
            children: [
              (0, t.jsx)(c.Z, {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                error: f.email && b.email,
                onChange: i,
                value: d.email,
                className: 'w-full',
              }),
              (0, t.jsx)(o(), {
                href: u.yy.LOGIN,
                className: 'font-sans font-semibold text-base text-blue underline text-center',
                children: 'Go back to Login',
              }),
              (0, t.jsx)(m.Z, {
                type: 'submit',
                className: 'bg-blue w-full disabled:bg-disabledBlue',
                title: 'Submit',
                isLoading: l,
              }),
            ],
          });
        },
        f = function () {
          let { resetPassword: e, isLoading: l } = (0, n.a)();
          return (0, t.jsxs)('div', {
            className: 'absolute-center w-full max-w-[450px] overflow-y-auto',
            children: [
              (0, t.jsx)('h1', {
                className: 'text-3xl font-sans font-bold text-primary mb-5',
                children: 'Forgot Password',
              }),
              (0, t.jsx)(d, { resetPassword: e, isLoading: l }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 396, 707, 849, 971, 596, 744], function () {
      return e((e.s = 909));
    }),
      (_N_E = e.O());
  },
]);
