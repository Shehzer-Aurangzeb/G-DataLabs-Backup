(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [866],
  {
    9157: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 5164));
    },
    4118: function (e, t, a) {
      'use strict';
      var n = a(7437),
        l = a(2265),
        s = a(3427),
        r = a(1419);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: i } = e,
          o = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            i && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [i]),
          (0, n.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !i && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
            children: [
              (0, n.jsx)(s.Z, {
                src: null != a ? a : r.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, n.jsx)('p', {
                className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
                children: null != t ? t : 'No data to display',
              }),
            ],
          })
        );
      };
    },
    3739: function (e, t, a) {
      'use strict';
      var n = a(7437);
      a(2265);
      var l = a(1419),
        s = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, n.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, n.jsx)(s.Z, {
              src: t && !r ? l.Xv : l.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, n.jsx)(s.Z, {
              src: t || r ? l.QM : l.JE,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t && !r && a();
              },
            }),
          ],
        });
      };
    },
    5164: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var n = a(7437),
        l = a(2265),
        s = a(9611),
        r = a(3470),
        i = a(6571),
        o = a(4118),
        c = a(4010),
        d = a(3739),
        u = a(6413),
        m = a(3427),
        x = a(1419),
        f = function (e) {
          let { readOnly: t, name: a, onChange: l, value: s, className: r } = e;
          return (0, n.jsxs)('div', {
            className: [
              'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[200px] mx-auto',
              r,
            ].join(' '),
            children: [
              (0, n.jsx)('textarea', {
                autoComplete: 'off',
                onChange: l,
                name: a,
                readOnly: t,
                id: a,
                value: s,
                cols: 5,
                className:
                  'bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[140px] resize-none',
              }),
              (0, n.jsx)('label', {
                htmlFor: a,
                className: 'cursor-pointer '.concat(t && 'opacity-0 invisible'),
                children: (0, n.jsx)(m.Z, { src: x.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
              }),
            ],
          });
        },
        p = a(1515),
        h = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: i,
              headerGroups: o,
              rows: m,
              prepareRow: x,
            } = (0, c.useTable)({ columns: t, data: a }),
            [h, b] = (0, l.useState)({}),
            [v, w] = (0, l.useState)(''),
            N = (e, t) => {
              let { value: a, id: n, type: l } = e.target,
                s = n.split('-')[1];
              ('number' !== l || !1 !== /^\d*\.?\d*$/.test(a)) &&
                (b((e) => ({ ...e, [s]: { ...e[s], [t]: a } })), w(s));
            },
            j = (0, l.useCallback)(
              (e) => {
                let t = h[e].consents_to_buy;
                s([{ consents_to_buy: !t, personal_data_field: { field_name: e } }]);
              },
              [s, h],
            );
          return (
            (0, l.useEffect)(() => {
              let e = setTimeout(() => {
                v &&
                  (s([
                    {
                      demanded_reward_value: Number(h[v].pricing),
                      usage: h[v].use,
                      threshold: Number(h[v].threshold),
                      personal_data_field: { field_name: v },
                    },
                  ]),
                  w(''));
              }, 2e3);
              return () => clearTimeout(e);
            }, [h, v, s]),
            (0, l.useEffect)(() => {
              b((0, p.DQ)(a));
            }, [a]),
            (0, n.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, n.jsx)('thead', {
                  children: o.map((e) =>
                    (0, n.jsx)('tr', {
                      ...e.getHeaderGroupProps(),
                      children: e.headers.map((e) =>
                        (0, n.jsx)('th', {
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
                (0, n.jsx)('tbody', {
                  ...i(),
                  children: m.map(
                    (e) => (
                      x(e),
                      (0, n.jsx)('tr', {
                        ...e.getRowProps(),
                        children: e.cells.map((t, a) =>
                          (0, n.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center \n                  '
                                  .concat(a === e.cells.length - 1 && 'hidden', '\n                  ')
                                  .concat((1 === a || 2 === a) && 'min-w-[450px]', '\n                  '),
                              children: [
                                (0 === a || 1 === a || 2 === a) && t.render('Cell'),
                                'Consent' === t.column.id &&
                                  (0, n.jsx)(d.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => {
                                      j(e.values.fieldName);
                                    },
                                  }),
                                'Use' === t.column.id &&
                                  (0, n.jsx)(f, {
                                    name: 'Use-'.concat(e.values.fieldName),
                                    readOnly: 'FALSE' === e.values.Consent,
                                    value: h[e.values.fieldName] ? h[e.values.fieldName].use : '',
                                    onChange: (e) => N(e, 'use'),
                                    className: 'min-w-[200px]',
                                  }),
                                'Pricing' === t.column.id &&
                                  (0, n.jsx)(u.Z, {
                                    name: 'Pricing-'.concat(e.values.fieldName),
                                    readOnly: 'FALSE' === e.values.Consent,
                                    type: 'text',
                                    isMonetaryInput: !0,
                                    pattern: '\\d*\\.?\\d*',
                                    value: h[e.values.fieldName] ? h[e.values.fieldName].pricing : '',
                                    onChange: (e) => N(e, 'pricing'),
                                    className: 'min-w-[160px]',
                                  }),
                                'Threshold' === t.column.id &&
                                  (0, n.jsx)(u.Z, {
                                    name: 'Threshold-'.concat(e.values.fieldName),
                                    readOnly: 'FALSE' === e.values.Consent,
                                    type: 'text',
                                    pattern: '\\d*\\.?\\d*',
                                    value: h[e.values.fieldName] ? h[e.values.fieldName].threshold : '',
                                    onChange: (e) => N(e, 'threshold'),
                                    className: 'min-w-[160px]',
                                  }),
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
        b = function () {
          let { compData: e, updateCompanyConsentRewards: t } = (0, i.T)(),
            a = (0, l.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndWeb: t, ...a };
                }),
              [e],
            );
          return (0, n.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, n.jsx)(h, { data: a, columns: r.r, updateConsentRewards: t }),
              0 === a.length && (0, n.jsx)(o.Z, {}),
            ],
          });
        };
    },
    6413: function (e, t, a) {
      'use strict';
      var n = a(7437);
      a(2265);
      var l = a(3427),
        s = a(1419);
      t.Z = function (e) {
        let {
          readOnly: t,
          name: a,
          onChange: r,
          value: i,
          type: o,
          pattern: c,
          className: d,
          currency: u = '$',
          isMonetaryInput: m = !1,
        } = e;
        return (0, n.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            d,
          ].join(' '),
          children: [
            m &&
              (0, n.jsx)('span', {
                className: 'absolute top-[23%] left-[19px] mobile:left-[15px] text-white font-sans text-xl font-medium',
                children: u,
              }),
            (0, n.jsx)('input', {
              autoComplete: 'off',
              pattern: c,
              onChange: r,
              name: a,
              readOnly: t,
              id: a,
              type: o || 'number',
              value: i,
              className:
                'bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]',
            }),
            (0, n.jsx)('label', {
              htmlFor: a,
              className: 'cursor-pointer '.concat(t && 'opacity-0 invisible'),
              children: (0, n.jsx)(l.Z, { src: s.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 254, 100, 509, 971, 596, 744], function () {
      return e((e.s = 9157));
    }),
      (_N_E = e.O());
  },
]);
