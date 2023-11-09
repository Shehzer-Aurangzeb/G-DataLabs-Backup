(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [866],
  {
    9157: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 3766));
    },
    3766: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var l = a(7437),
        n = a(2265),
        s = a(9611),
        r = a(6571),
        i = a(4118),
        o = a(4010),
        d = a(3739),
        u = a(9699),
        c = a(1515),
        m = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: i,
              headerGroups: m,
              rows: x,
              prepareRow: f,
            } = (0, o.useTable)({ columns: t, data: a }),
            [p, b] = (0, n.useState)((0, c.DQ)(a)),
            [h, v] = (0, n.useState)('');
          console.log('values :>> ', p);
          let g = (e, t) => {
              let { value: a, id: l } = e.target,
                n = l.split('-')[1];
              ('Pricing' !== t || !1 !== /^\d*\.?\d*$/.test(a)) &&
                (b((e) => ({ ...e, [t]: { ...e[t], [n]: { ...e[t][n], value: Number(Number(a).toFixed(3)) } } })),
                v(n));
            },
            w = (0, n.useCallback)(
              (e) => {
                var t;
                let a = p.Use[e].consents_to_sell;
                s([
                  {
                    demanded_reward_value: Number(p.Pricing[e].value),
                    usage: null !== (t = p.Use[e].value) && void 0 !== t ? t : '',
                    consents_to_buy: !a,
                    personal_data_field: { field_name: e },
                  },
                ]);
              },
              [s, p],
            );
          return (
            (0, n.useEffect)(() => {
              let e = setTimeout(() => {
                var e;
                h &&
                  s([
                    {
                      demanded_reward_value: Number(p.Pricing[h].value),
                      usage: null !== (e = p.Use[h].value) && void 0 !== e ? e : '',
                      consents_to_buy: !p.Use[h].consents_to_sell,
                      personal_data_field: { field_name: h },
                    },
                  ]);
              }, 1e3);
              return () => clearTimeout(e);
            }, [p, h, s]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: m.map((e) =>
                    (0, l.jsx)('tr', {
                      ...e.getHeaderGroupProps(),
                      children: e.headers.map((e) =>
                        (0, l.jsx)('th', {
                          ...e.getHeaderProps(),
                          className:
                            'border-table dark:border-white border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap '.concat(
                              'fieldName' === e.id && 'hidden',
                            ),
                          children: e.render('Header'),
                        }),
                      ),
                    }),
                  ),
                }),
                (0, l.jsx)('tbody', {
                  ...i(),
                  children: x.map(
                    (e) => (
                      f(e),
                      (0, l.jsx)('tr', {
                        ...e.getRowProps(),
                        children: e.cells.map((t, a) =>
                          (0, l.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap\n                  '.concat(
                                  a === e.cells.length - 1 && 'hidden',
                                ),
                              children: [
                                2 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Use-'.concat(e.values.fieldName),
                                    type: 'text',
                                    value: p.Use[e.values.fieldName] ? p.Use[e.values.fieldName].value : '',
                                    onChange: (e) => g(e, 'Use'),
                                    className: 'min-w-[160px]',
                                  }),
                                3 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Pricing-'.concat(e.values.fieldName),
                                    type: 'text',
                                    pattern: '\\d*\\.?\\d*',
                                    value: p.Pricing[e.values.fieldName] ? p.Pricing[e.values.fieldName].value : '',
                                    onChange: (e) => g(e, 'Pricing'),
                                    className: 'min-w-[160px]',
                                  }),
                                a === e.cells.length - 2
                                  ? (0, l.jsx)(d.Z, {
                                      isAllowed: 'FALSE' !== e.values.Consent,
                                      onClick: () => {
                                        w(e.values.fieldName);
                                      },
                                    })
                                  : t.render('Cell'),
                              ],
                            },
                            t.id,
                          ),
                        ),
                      })
                    ),
                  ),
                }),
              ],
            })
          );
        },
        x = function () {
          let { compData: e, updateCompanyConsentRewards: t } = (0, r.T)(),
            a = (0, n.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndWeb: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, l.jsx)(m, { data: a, columns: s.rf, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(i.Z, {}),
            ],
          });
        };
    },
    9699: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var n = a(3427),
        s = a(6421);
      t.Z = function (e) {
        let { readOnly: t, name: a, onChange: r, value: i, type: o, pattern: d, className: u } = e;
        return (0, l.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            u,
          ].join(' '),
          children: [
            (0, l.jsx)('span', {
              className: 'absolute top-[23%] '.concat(
                t ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]',
                ' text-white font-sans text-xl font-medium',
              ),
              children: '$',
            }),
            (0, l.jsx)('input', {
              autoComplete: 'off',
              pattern: d,
              onChange: r,
              name: a,
              readOnly: t,
              id: a,
              type: o || 'number',
              value: i,
              className:
                'bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]',
            }),
            !t &&
              (0, l.jsx)('label', {
                htmlFor: a,
                className: 'cursor-pointer',
                children: (0, l.jsx)(n.Z, { src: s.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
              }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 292, 459, 971, 596, 744], function () {
      return e((e.s = 9157));
    }),
      (_N_E = e.O());
  },
]);
