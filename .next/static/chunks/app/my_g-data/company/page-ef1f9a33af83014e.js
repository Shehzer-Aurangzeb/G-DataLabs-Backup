(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [866],
  {
    9157: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 3766));
    },
    4118: function (e, t, a) {
      'use strict';
      var l = a(7437),
        s = a(2265),
        n = a(3427),
        r = a(1419);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: i } = e,
          o = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            i && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [i]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !i && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
            children: [
              (0, l.jsx)(n.Z, {
                src: null != a ? a : r.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, l.jsx)('p', {
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
      var l = a(7437);
      a(2265);
      var s = a(1419),
        n = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(n.Z, {
              src: t && !r ? s.Xv : s.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, l.jsx)(n.Z, {
              src: t || r ? s.QM : s.JE,
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
    3766: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(9611),
        r = a(3470),
        i = a(6571),
        o = a(4118),
        c = a(4010),
        d = a(3739),
        u = a(9699),
        m = a(1515),
        x = function (e) {
          let { columns: t, data: a, updateConsentRewards: n } = e,
            {
              getTableProps: r,
              getTableBodyProps: i,
              headerGroups: o,
              rows: x,
              prepareRow: f,
            } = (0, c.useTable)({ columns: t, data: a }),
            [p, h] = (0, s.useState)({}),
            [b, v] = (0, s.useState)(''),
            N = (e, t) => {
              let { value: a, id: l, type: s } = e.target,
                n = l.split('-')[1];
              ('number' !== s || !1 !== /^\d*\.?\d*$/.test(a)) &&
                (h((e) => ({ ...e, [n]: { ...e[n], [t]: a } })), v(n));
            },
            w = (0, s.useCallback)(
              (e) => {
                let t = p[e].consents_to_buy;
                n([{ consents_to_buy: !t, personal_data_field: { field_name: e } }]);
              },
              [n, p],
            );
          return (
            (0, s.useEffect)(() => {
              let e = setTimeout(() => {
                b &&
                  (n([
                    {
                      demanded_reward_value: Number(p[b].pricing),
                      usage: p[b].use,
                      threshold: Number(p[b].threshold),
                      personal_data_field: { field_name: b },
                    },
                  ]),
                  v(''));
              }, 2e3);
              return () => clearTimeout(e);
            }, [p, b, n]),
            (0, s.useEffect)(() => {
              h((0, m.DQ)(a));
            }, [a]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: o.map((e) =>
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
                                'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center \n                  '
                                  .concat(a === e.cells.length - 1 && 'hidden', '\n                  ')
                                  .concat((1 === a || 2 === a) && 'min-w-[450px]', '\n                  '),
                              children: [
                                (0 === a || 1 === a || 2 === a) && t.render('Cell'),
                                a === e.cells.length - 2 &&
                                  (0, l.jsx)(d.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => {
                                      w(e.values.fieldName);
                                    },
                                  }),
                                3 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Use-'.concat(e.values.fieldName),
                                    type: 'text',
                                    value: p[e.values.fieldName] ? p[e.values.fieldName].use : '',
                                    onChange: (e) => N(e, 'use'),
                                    className: 'min-w-[160px]',
                                  }),
                                4 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Pricing-'.concat(e.values.fieldName),
                                    type: 'text',
                                    isMonetaryInput: !0,
                                    pattern: '\\d*\\.?\\d*',
                                    value: p[e.values.fieldName] ? p[e.values.fieldName].pricing : '',
                                    onChange: (e) => N(e, 'pricing'),
                                    className: 'min-w-[160px]',
                                  }),
                                5 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Threshold-'.concat(e.values.fieldName),
                                    type: 'text',
                                    pattern: '\\d*\\.?\\d*',
                                    value: p[e.values.fieldName] ? p[e.values.fieldName].threshold : '',
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
        f = function () {
          let { compData: e, updateCompanyConsentRewards: t } = (0, i.T)(),
            a = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndWeb: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(n.kk, ']'),
            children: [
              (0, l.jsx)(x, { data: a, columns: r.r, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(o.Z, {}),
            ],
          });
        };
    },
    9699: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var s = a(3427),
        n = a(1419);
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
        return (0, l.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            d,
          ].join(' '),
          children: [
            m &&
              (0, l.jsx)('span', {
                className: 'absolute top-[23%] '.concat(
                  t ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]',
                  ' text-white font-sans text-xl font-medium',
                ),
                children: u,
              }),
            (0, l.jsx)('input', {
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
            !t &&
              (0, l.jsx)('label', {
                htmlFor: a,
                className: 'cursor-pointer',
                children: (0, l.jsx)(s.Z, { src: n.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
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
