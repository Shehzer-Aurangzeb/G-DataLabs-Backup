(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [760],
  {
    3392: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 9336));
    },
    4118: function (e, t, a) {
      'use strict';
      var l = a(7437),
        n = a(2265),
        s = a(3427),
        r = a(6421);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: o } = e,
          i = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            o && i && i.current && i.current.parentElement && i.current.parentElement.classList.add('relative');
          }, [o]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !o && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: i,
            children: [
              (0, l.jsx)(s.Z, {
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
      var n = a(6421),
        s = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(s.Z, {
              src: t && !r ? n.Xv : n.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, l.jsx)(s.Z, {
              src: t || r ? n.QM : n.JE,
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
    9699: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var n = a(3427),
        s = a(6421);
      t.Z = function (e) {
        let {
          readOnly: t,
          name: a,
          onChange: r,
          value: o,
          type: i,
          pattern: c,
          className: d,
          currency: u = '$',
          isMonetaryInput: x = !1,
        } = e;
        return (0, l.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            d,
          ].join(' '),
          children: [
            x &&
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
              type: i || 'number',
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
            return m;
          },
        });
      var l = a(7437),
        n = a(2265),
        s = a(9611),
        r = a(6571),
        o = a(4118),
        i = a(4010),
        c = a(3739),
        d = a(1515),
        u = a(9699),
        x = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: x,
              rows: m,
              prepareRow: p,
            } = (0, i.useTable)({ columns: t, data: a }),
            [f, b] = (0, n.useState)((0, d.O5)(a)),
            [h, v] = (0, n.useState)(''),
            w = (e) => {
              let { value: t, id: a } = e.target;
              b((e) => ({ ...e, [a]: { ...e[a], demanded_reward_value: Number(Number(t).toFixed(3)) } })), v(a);
            },
            j = (0, n.useCallback)(
              (e) => {
                let t = f[e];
                s({ id: Number(e), payload: { consents_to_sell: !t.consents_to_sell } });
              },
              [s, f],
            );
          return (
            (0, n.useEffect)(() => {
              let e = setTimeout(() => {
                h && (s({ id: Number(h), payload: f[h] }), v(''));
              }, 2e3);
              return () => clearTimeout(e);
            }, [f, h, s]),
            (0, n.useEffect)(() => {
              b((0, d.O5)(a));
            }, [a]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: x.map((e) =>
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
                  children: m.map(
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
                                (0 === a || 1 === a) && t.render('Cell'),
                                2 === a &&
                                  (0, l.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => j(e.values.id),
                                  }),
                                3 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: e.values.id,
                                    id: e.values.id,
                                    readOnly: !1,
                                    isMonetaryInput: !0,
                                    value:
                                      null === (n = f[e.values.id].demanded_reward_value) || void 0 === n
                                        ? void 0
                                        : n.toString(),
                                    onChange: w,
                                  }),
                                4 === a &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'OtherCompValue-'.concat(e.values.id),
                                    id: 'OtherCompValue-'.concat(e.values.id),
                                    readOnly: !0,
                                    isMonetaryInput: !0,
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
        m = function () {
          let { rData: e, updateConsentRewards: t } = (0, r.T)(),
            a = (0, n.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndScreen: t, Unit: s.Gj[t.toLowerCase().replaceAll(' ', '_')].unit, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              Object.keys(e).length > 0 && (0, l.jsx)(x, { data: a, columns: s.f6, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(o.Z, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 100, 509, 971, 596, 744], function () {
      return e((e.s = 3392));
    }),
      (_N_E = e.O());
  },
]);
