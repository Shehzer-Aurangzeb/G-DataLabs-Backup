(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [346],
  {
    964: function (e, a, l) {
      Promise.resolve().then(l.bind(l, 8390)),
        Promise.resolve().then(l.bind(l, 4344)),
        Promise.resolve().then(l.bind(l, 2761));
    },
    2761: function (e, a, l) {
      'use strict';
      l.r(a);
      var t = l(7437);
      l(2265);
      var n = l(724),
        s = l(3427),
        r = l(346),
        o = l(1515),
        i = l(9611);
      a.default = function () {
        let { user: e } = (0, r.a)();
        return (0, t.jsxs)('div', {
          className:
            'bg-lightGreen dark:bg-dark flex flex-row items-center w-full pl-4 mobile:pl-2 py-6 rounded-md gap-x-4 max-w-['.concat(
              i.kk,
              ']',
            ),
          children: [
            e
              ? (0, t.jsx)(s.Z, {
                  src: e.image,
                  alt: 'profile',
                  className: 'w-[50px] h-[50px] rounded-full',
                  rounded: !0,
                })
              : (0, t.jsx)(n.default, { circle: !0, width: 50, height: 50, containerClassName: 'avatar-skeleton' }),
            (0, t.jsxs)('div', {
              className: 'flex flex-col flex-1',
              children: [
                !e &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(n.default, { width: 150 }), (0, t.jsx)(n.default, { width: 190 })],
                  }),
                (0, t.jsx)('h3', {
                  className: 'font-sans font-bold text-xl text-primary  dark:text-main leading-6',
                  children: e && (0, o.kC)(''.concat(e.firstName, ' ').concat(e.lastName)),
                }),
                (0, t.jsx)('p', {
                  className: 'font-sans font-normal text-primary dark:text-main text-base',
                  children: e && e.email,
                }),
              ],
            }),
          ],
        });
      };
    },
    4344: function (e, a, l) {
      'use strict';
      l.r(a),
        l.d(a, {
          default: function () {
            return k;
          },
        });
      var t = l(7437),
        n = l(2265),
        s = l(346),
        r = l(9611),
        o = l(6230),
        i = l(5979),
        c = l(2525),
        m = l(446),
        d = l(8556),
        u = l(6171),
        x = l(6118);
      let p = () => {
        let [e, a] = (0, n.useState)(!1),
          [l, t] = (0, n.useState)(''),
          { setUser: s, user: r } = (0, x.a)(),
          o = (0, n.useCallback)(
            async (e) => {
              try {
                a(!0);
                let { data: l } = await u.h.post('api/user_profile/add_and_verify_bank', e);
                r &&
                  s({
                    user: {
                      ...r,
                      accountNo: '**** '.concat(l.data.shortened_account_number),
                      accountTitle: l.data.bank_account_title,
                      bankName: l.data.bank_name,
                    },
                    isAuthenticated: !0,
                  }),
                  t('');
              } catch (e) {
              } finally {
                a(!1);
              }
            },
            [s, r],
          ),
          { ready: i, open: c } = (0, d.usePlaidLink)({
            token: l,
            onSuccess: (e, a) => {
              o({ public_token: e, account_id: a.account_id });
            },
          }),
          m = (0, n.useCallback)(async () => {
            try {
              a(!0);
              let { data: e } = await u.h.get('api/plaid/link_token');
              t(e.data.link_token);
            } catch (e) {
            } finally {
              a(!1);
            }
          }, []);
        return (
          (0, n.useEffect)(() => {
            l && i && c();
          }, [c, i, l]),
          { getPlaidLinkToken: m, isLoading: e }
        );
      };
      var f = function (e) {
          let { values: a, touched: l, errors: n } = e;
          return (0, t.jsxs)('div', {
            className: 'w-full',
            children: [
              (0, t.jsx)('h1', {
                className: 'text-primary dark:text-main text-2xl font-bold font-sans mt-8 mb-7',
                children: 'Bank Information',
              }),
              (0, t.jsxs)('div', {
                className: 'flex flex-row flex-wrap gap-x-14 gap-y-6 ',
                children: [
                  (0, t.jsx)(c.Z, {
                    label: 'Account No.',
                    placeholder: '**** 4568',
                    readOnly: !0,
                    name: 'accountNo',
                    error: l.accountNo && n.accountNo,
                    value: a.accountNo,
                    className: 'max-w-[450px] w-full',
                  }),
                  (0, t.jsx)(c.Z, {
                    label: 'Account Title',
                    placeholder: '12115 54515 4545 5454',
                    readOnly: !0,
                    name: 'accountTitle',
                    error: l.accountTitle && n.accountTitle,
                    value: a.accountTitle,
                    className: 'max-w-[450px] w-full',
                  }),
                  (0, t.jsx)(c.Z, {
                    label: 'Bank Name',
                    placeholder: 'Chase Bank',
                    readOnly: !0,
                    name: 'bankName',
                    error: l.bankName && n.bankName,
                    value: a.bankName,
                    className: 'max-w-[450px] w-full',
                  }),
                ],
              }),
            ],
          });
        },
        h = l(3427),
        b = l(6791),
        w = function (e) {
          let { handleChange: a, profile: l } = e;
          return (0, t.jsxs)('div', {
            className: 'flex flex-col gap-y-6 w-full',
            children: [
              (0, t.jsx)('label', {
                className: 'text-base font-bold font-sans text-black dark:text-main',
                htmlFor: 'profile',
                children: 'Upload Picture',
              }),
              (0, t.jsxs)('div', {
                className:
                  'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
                children: [
                  (0, t.jsx)(h.Z, {
                    src: 0 === l.length ? b.oB : l,
                    alt: 'profile',
                    className: 'w-[50px] h-[50px] dark:invert',
                    rounded: !0,
                  }),
                  (0, t.jsx)(h.Z, { src: b.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px]  dark:invert' }),
                  (0, t.jsx)('p', {
                    className: 'text-black text-xl dark:text-main font-sans font-normal',
                    children: 'Upload Picture',
                  }),
                  (0, t.jsx)('input', {
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
        N = function (e) {
          var a;
          let { user: l, updateUser: s, isLoading: d } = e,
            [u, x] = (0, n.useState)(null),
            [h, b] = (0, n.useState)(null !== (a = l.image) && void 0 !== a ? a : ''),
            { getPlaidLinkToken: N, isLoading: k } = p(),
            {
              handleSubmit: g,
              handleChange: j,
              values: v,
              touched: y,
              errors: _,
            } = (0, o.TA)({
              initialValues: { ...r.KV, ...l, phone: l.phoneNumber },
              validationSchema: i.nN,
              onSubmit: async (e, a) => {
                let { password: t } = e;
                if (!h) return;
                let n = {};
                for (let [a, t] of Object.entries(e))
                  l[a] !== t &&
                    ('firstName' === a && (n = { ...n, first_name: t }),
                    'lastName' === a && (n = { ...n, last_name: t }),
                    'phone' === a && l.phoneNumber !== e.phone && (n = { ...n, phone_number: t }),
                    'email' === a && (n = { ...n, email: t }),
                    'username' === a && (n = { ...n, username: t }));
                t && (n = { ...n, password: t }), u && (n = { ...n, profile_picture: u }), s(n), a.setSubmitting(!1);
              },
            });
          return (0, t.jsx)('form', {
            className: 'w-full',
            noValidate: !0,
            onSubmit: g,
            children: (0, t.jsxs)('div', {
              className: 'flex flex-row flex-wrap gap-x-14 gap-y-6',
              children: [
                (0, t.jsx)(w, {
                  handleChange: (e) => {
                    var a;
                    let l = null === (a = e.target.files) || void 0 === a ? void 0 : a[0];
                    if (l) {
                      x(l);
                      let e = new FileReader();
                      (e.onload = (e) => {
                        var a;
                        b(null === (a = e.target) || void 0 === a ? void 0 : a.result);
                      }),
                        e.readAsDataURL(l);
                    }
                  },
                  profile: h,
                }),
                (0, t.jsx)(c.Z, {
                  label: 'First Name',
                  placeholder: 'First Name',
                  name: 'firstName',
                  error: y.firstName && _.firstName,
                  onChange: j,
                  value: v.firstName,
                  className: 'max-w-[450px] w-full',
                }),
                (0, t.jsx)(c.Z, {
                  label: 'Email',
                  placeholder: 'Email',
                  type: 'email',
                  name: 'email',
                  error: y.email && _.email,
                  onChange: j,
                  value: v.email,
                  className: 'max-w-[450px] w-full',
                }),
                (0, t.jsx)(c.Z, {
                  label: 'Last Name',
                  placeholder: 'Last Name',
                  name: 'lastName',
                  error: y.lastName && _.lastName,
                  onChange: j,
                  value: v.lastName,
                  className: 'max-w-[450px] w-full',
                }),
                (0, t.jsx)(c.Z, {
                  label: 'Password',
                  placeholder: 'Password',
                  name: 'password',
                  error: y.password && _.password,
                  onChange: j,
                  value: v.password,
                  className: 'max-w-[450px] w-full',
                }),
                (0, t.jsx)(c.Z, {
                  label: 'Username',
                  placeholder: 'Username',
                  name: 'username',
                  error: y.username && _.username,
                  onChange: j,
                  value: v.username,
                  className: 'max-w-[450px] w-full',
                }),
                (0, t.jsx)(c.Z, {
                  label: 'Phone',
                  placeholder: 'Phone',
                  name: 'phone',
                  type: 'number',
                  error: y.phone && _.phone,
                  onChange: j,
                  value: v.phone,
                  className: 'max-w-[450px] w-full',
                }),
                (0, t.jsx)(c.Z, {
                  label: 'Total Rewards',
                  placeholder: 'Total rewards',
                  name: 'totalRewards',
                  type: 'number',
                  readOnly: !0,
                  error: y.totalRewards && _.totalRewards,
                  value: v.totalRewards,
                  isMonetaryInput: !0,
                  currency: '$',
                  className: 'max-w-[450px] w-full',
                }),
                (l.accountNo || l.accountTitle || l.bankName) && (0, t.jsx)(f, { values: v, touched: y, errors: _ }),
                (0, t.jsxs)('div', {
                  className:
                    'w-full flex flex-row mobile:flex-col items-center justify-between gap-x-4 mobile:gap-y-4 mt-10',
                  children: [
                    (0, t.jsx)(m.Z, {
                      type: 'button',
                      className:
                        'bg-transparent uppercase disabled:bg-disabledBlue max-w-[320px] w-full border-2 border-black dark:border-white mobile:order-2 connect_btn dark:text-white dark:bg-white',
                      style: { color: 'black' },
                      onClick: N,
                      title: l && l.accountNo ? 'Edit bank information' : 'Connect with my bank',
                      isLoading: k,
                    }),
                    (0, t.jsxs)('div', {
                      className: 'flex w-full gap-x-4 justify-end mobile:justify-between',
                      children: [
                        (0, t.jsx)(m.Z, {
                          type: 'button',
                          className: 'bg-chat dark:bg-darkChat max-w-[230px] w-full',
                          title: 'Cancel',
                        }),
                        (0, t.jsx)(m.Z, {
                          type: 'submit',
                          className: 'bg-blue disabled:bg-disabledBlue dark:bg-darkBlue max-w-[230px] w-full',
                          title: 'Save',
                          isLoading: d,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        k = function () {
          let { user: e, updateUser: a, isLoading: l } = (0, s.a)();
          return (0, t.jsxs)('div', {
            className:
              'mt-4 bg-lightGreen  dark:bg-dark w-full pl-12 pr-8 py-7 mobile:px-2  rounded-md h-[calc(100%_-_6rem)] overflow-y-auto relative max-w-['.concat(
                r.kk,
                ']',
              ),
            children: [
              (0, t.jsx)('h1', {
                className: 'text-primary dark:text-main text-2xl font-bold font-sans mb-7',
                children: 'Personal Information',
              }),
              e && (0, t.jsx)(N, { user: e, updateUser: a, isLoading: l }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 842, 630, 442, 849, 971, 596, 744], function () {
      return e((e.s = 964));
    }),
      (_N_E = e.O());
  },
]);
