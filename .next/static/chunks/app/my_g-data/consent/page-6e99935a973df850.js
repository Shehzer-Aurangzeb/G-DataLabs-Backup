(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    1733: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 2710));
    },
    4118: function (e, t, a) {
      'use strict';
      var n = a(7437),
        l = a(2265),
        s = a(3427),
        r = a(2854);
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
    9109: function (e, t, a) {
      'use strict';
      var n = a(7437),
        l = a(2265),
        s = a(1872),
        r = a(2854),
        i = a(1515),
        o = a(1846),
        c = a(3427);
      t.Z = function (e) {
        let { className: t, options: a, style: d, value: u, onClick: x, increasePadding: m } = e,
          [p, f] = (0, l.useState)(!1),
          b = (0, l.useRef)(null),
          h = () => {
            f(!p);
          };
        return (
          (0, o.O)(b, () => {
            f(!1);
          }),
          (0, n.jsxs)('div', {
            ref: b,
            style: d,
            className: [
              'relative bg-chat dark:bg-darkChat dark:text-main '
                .concat(null != m ? m : 'py-[10px]', ' px-4 ')
                .concat(p ? 'rounded-md rounded-b-none' : 'rounded-md', ' w-full'),
              t,
            ].join(' '),
            children: [
              (0, n.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: h,
                onKeyDown: h,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, n.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, i.kC)(u),
                  }),
                  (0, n.jsx)(c.Z, {
                    src: r.x7,
                    alt: 'dropdown-icon',
                    className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                      p ? 'rotate-180 ' : 'rotate-0',
                    ),
                  }),
                ],
              }),
              p &&
                (0, n.jsx)('ul', {
                  className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                  children: a
                    .filter((e) => e.value !== u)
                    .map((e) =>
                      (0, n.jsx)(
                        'li',
                        {
                          children: (0, n.jsx)('div', {
                            tabIndex: 0,
                            className:
                              'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 '.concat(
                                null != m ? m : 'py-[10px]',
                              ),
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
                        (0, s.Z)(),
                      ),
                    ),
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
      var l = a(2854),
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
    2710: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a(7437),
        l = a(2265),
        s = a(9611),
        r = a(9787),
        i = a(6571),
        o = a(4118),
        c = a(4010),
        d = a(3739),
        u = a(6413),
        x = a(9109),
        m = a(3976),
        p = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: i,
              headerGroups: o,
              rows: p,
              prepareRow: f,
            } = (0, c.useTable)({ columns: t, data: a }),
            [b, h] = (0, l.useState)({}),
            [v, w] = (0, l.useState)({}),
            j = (0, l.useCallback)((e, t) => {
              w((a) => ({ ...a, [e]: t }));
            }, []),
            k = (0, l.useCallback)((e, t) => (b[e] ? b[e][t][v[e]] : ''), [b, v]);
          return (
            (0, l.useEffect)(() => {
              w((0, m.im)(a)), h((0, m.F3)(a));
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
                              'id' === e.id && 'hidden',
                            ),
                          children: e.render('Header'),
                        }),
                      ),
                    }),
                  ),
                }),
                (0, n.jsx)('tbody', {
                  ...i(),
                  children: p.map((e) => {
                    var t;
                    return (
                      f(e),
                      (0, n.jsx)('tr', {
                        ...e.getRowProps(),
                        className: 'even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat',
                        children: e.cells.map((a) =>
                          (0, n.jsx)(
                            'td',
                            {
                              ...a.getCellProps(),
                              className:
                                'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center\n                  '
                                  .concat('id' === a.column.id && 'hidden', '\n                  ')
                                  .concat(
                                    ('Definition' === a.column.id || 'Unit' === a.column.id) && 'min-w-[450px]',
                                    '\n                  ',
                                  )
                                  .concat(
                                    ('Companies' === a.column.id || 'Use' === a.column.id) && 'min-w-[200px]',
                                    '\n                  ',
                                  ),
                              children:
                                'Consent' === a.column.id
                                  ? (0, n.jsx)(d.Z, {
                                      isAllowed: 'FALSE' !== e.values.Consent,
                                      isDisabled: null === e.values.id,
                                      onClick: () => {
                                        s({
                                          id: e.values.id,
                                          payload: { consents_to_sell: 'TRUE' !== e.values.Consent },
                                        });
                                      },
                                    })
                                  : 'Companies' === a.column.id && e.values.Companies.length > 0
                                  ? (0, n.jsx)(x.Z, {
                                      options: e.values.Companies,
                                      onClick: (t) => {
                                        j(e.values.PDataAndWeb, t);
                                      },
                                      className: 'w-full',
                                      value: null !== (t = v[e.values.PDataAndWeb]) && void 0 !== t ? t : '',
                                    })
                                  : 'Use' === a.column.id || 'Threshold' === a.column.id
                                  ? (0, n.jsx)('p', { children: k(e.values.PDataAndWeb, a.column.id.toLowerCase()) })
                                  : 'Pricing' === a.column.id
                                  ? (0, n.jsx)(u.Z, {
                                      name: 'price-offer-'.concat(e.values.id),
                                      id: 'price-offer-'.concat(e.values.id),
                                      className: 'min-w-[160px]',
                                      readOnly: !0,
                                      isMonetaryInput: !0,
                                      value: k(e.values.PDataAndWeb, 'pricing'),
                                    })
                                  : a.render('Cell'),
                            },
                            a.id,
                          ),
                        ),
                      })
                    );
                  }),
                }),
              ],
            })
          );
        },
        f = function () {
          let { cData: e, updateConsentRewards: t } = (0, i.T)(),
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
              (0, n.jsx)(p, { data: a, columns: r.J, updateConsentRewards: t }),
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
        s = a(2854);
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
          isMonetaryInput: x = !1,
        } = e;
        return (0, n.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            d,
          ].join(' '),
          children: [
            x &&
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
    e.O(0, [986, 139, 16, 10, 897, 100, 509, 971, 596, 744], function () {
      return e((e.s = 1733));
    }),
      (_N_E = e.O());
  },
]);
