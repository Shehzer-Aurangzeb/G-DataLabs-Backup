(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [760],
  {
    3392: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 9336));
    },
    9699: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var n = a(3427),
        s = a(6421);
      t.Z = function (e) {
        let { readOnly: t, name: a, onChange: r, value: o, type: d, pattern: i, className: u } = e;
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
              pattern: i,
              onChange: r,
              name: a,
              readOnly: t,
              id: a,
              type: d || 'number',
              value: o,
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
    9336: function (e, t, a) {
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
        o = a(4118),
        d = a(4010),
        i = a(3739),
        u = a(1515),
        c = a(9699),
        m = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: m,
              rows: x,
              prepareRow: p,
            } = (0, d.useTable)({ columns: t, data: a }),
            [h, b] = (0, n.useState)((0, u.O5)(a)),
            [f, v] = (0, n.useState)(''),
            w = (e) => {
              let { value: t, id: a } = e.target;
              b((e) => ({ ...e, [a]: { ...e[a], demanded_reward_value: Number(Number(t).toFixed(3)) } })), v(a);
            },
            j = (0, n.useCallback)(
              (e) => {
                let t = h[e];
                s({ id: Number(e), payload: { consents_to_sell: !t.consents_to_sell } });
              },
              [s, h],
            );
          return (
            (0, n.useEffect)(() => {
              let e = setTimeout(() => {
                f && s({ id: Number(f), payload: h[f] });
              }, 1e3);
              return () => clearTimeout(e);
            }, [h, f, s]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: m.map((e) =>
                    (0, l.jsx)('tr', {
                      ...e.getHeaderGroupProps(),
                      children: e.headers.map((t, a) =>
                        (0, l.jsx)('th', {
                          ...t.getHeaderProps(),
                          className:
                            'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap '.concat(
                              a === e.headers.length - 1 && 'hidden',
                            ),
                          children: t.render('Header'),
                        }),
                      ),
                    }),
                  ),
                }),
                (0, l.jsx)('tbody', {
                  ...o(),
                  children: x.map(
                    (e) => (
                      p(e),
                      (0, l.jsx)('tr', {
                        ...e.getRowProps(),
                        children: e.cells.map((t, a) => {
                          var n;
                          return (0, l.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap '.concat(
                                  a === e.cells.length - 1 && 'hidden',
                                ),
                              children: [
                                0 === a && t.render('Cell'),
                                1 === a &&
                                  (0, l.jsx)(i.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => j(e.values.id),
                                  }),
                                2 === a &&
                                  (0, l.jsx)(c.Z, {
                                    name: e.values.id,
                                    id: e.values.id,
                                    readOnly: !1,
                                    value:
                                      null === (n = h[e.values.id].demanded_reward_value) || void 0 === n
                                        ? void 0
                                        : n.toString(),
                                    onChange: w,
                                  }),
                                3 === a &&
                                  (0, l.jsx)(c.Z, {
                                    name: 'OtherCompValue-'.concat(e.values.id),
                                    id: 'OtherCompValue-'.concat(e.values.id),
                                    readOnly: !0,
                                    value: e.values.OtherCompValue,
                                  }),
                              ],
                            },
                            t.id,
                          );
                        }),
                      })
                    ),
                  ),
                }),
              ],
            })
          );
        },
        x = function () {
          let { rData: e, updateConsentRewards: t } = (0, r.T)(),
            a = (0, n.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndScreen: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              Object.keys(e).length > 0 && (0, l.jsx)(m, { data: a, columns: s.f6, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(o.Z, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 292, 459, 971, 596, 744], function () {
      return e((e.s = 3392));
    }),
      (_N_E = e.O());
  },
]);
