(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [760],
  {
    3392: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 3195));
    },
    4118: function (e, t, a) {
      'use strict';
      var n = a(7437),
        l = a(2265),
        s = a(3427),
        r = a(1419);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: d } = e,
          o = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            d && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [d]),
          (0, n.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !d && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
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
    3195: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var n = a(7437),
        l = a(2265),
        s = a(9611),
        r = a(5021),
        d = a(6571),
        o = a(4118),
        i = a(4010),
        c = a(3739);
      let u = (e) => {
        let t = {};
        for (let a of e)
          t[a.PDataAndScreen] = {
            consents_to_sell: 'TRUE' === a.Consent,
            demanded_reward_value: a.PDefinedValue,
            id: a.id,
          };
        return t;
      };
      var m = a(6413),
        x = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: d,
              headerGroups: o,
              rows: x,
              prepareRow: p,
            } = (0, i.useTable)({ columns: t, data: a }),
            [f, h] = (0, l.useState)({}),
            [b, v] = (0, l.useState)(''),
            w = (e) => {
              let { value: t, name: a } = e.target;
              if (!/^\d*\.?\d*$/.test(t)) return;
              let n = a.split('-')[0];
              h((e) => ({ ...e, [n]: { ...e[n], demanded_reward_value: t } })), v(n);
            };
          return (
            (0, l.useEffect)(() => {
              let e = setTimeout(() => {
                b &&
                  (s({
                    id: Number(f[b].id),
                    payload: {
                      demanded_reward_value: parseFloat(f[b].demanded_reward_value),
                      consents_to_sell: f[b].consents_to_sell,
                    },
                  }),
                  v(''));
              }, 2e3);
              return () => clearTimeout(e);
            }, [f, b, s]),
            (0, l.useEffect)(() => {
              h(u(a));
            }, [a]),
            (0, n.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, n.jsx)('thead', {
                  children: o.map((e) =>
                    (0, n.jsx)('tr', {
                      ...e.getHeaderGroupProps(),
                      children: e.headers.map((t, a) =>
                        (0, n.jsx)('th', {
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
                (0, n.jsx)('tbody', {
                  ...d(),
                  children: x.map(
                    (e) => (
                      p(e),
                      (0, n.jsx)('tr', {
                        ...e.getRowProps(),
                        className: 'even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat',
                        children: e.cells.map((t, a) => {
                          var l;
                          return (0, n.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] py-6 px-7 mobile:p-3 dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap '.concat(
                                  'id' === t.column.id && 'hidden',
                                  ' \n                \n                  ',
                                ),
                              children: [
                                (0 === a || 1 === a) && t.render('Cell'),
                                'Consent' === t.column.id &&
                                  (0, n.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    isDisabled: null === e.values.id,
                                    onClick: () =>
                                      s({
                                        id: e.values.id,
                                        payload: { consents_to_sell: 'TRUE' !== e.values.Consent },
                                      }),
                                  }),
                                'PDefinedValue' === t.column.id &&
                                  (0, n.jsx)(m.Z, {
                                    name: ''.concat(e.values.PDataAndScreen, '-').concat(e.values.id),
                                    id: e.values.id,
                                    type: 'text',
                                    pattern: '\\d*\\.?\\d*',
                                    readOnly: null === e.values.id,
                                    isMonetaryInput: !0,
                                    value:
                                      null === (l = f[e.values.PDataAndScreen]) || void 0 === l
                                        ? void 0
                                        : l.demanded_reward_value,
                                    onChange: w,
                                  }),
                                'OtherCompValue' === t.column.id &&
                                  (0, n.jsx)(m.Z, {
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
        p = function () {
          let { rData: e, updateConsentRewards: t } = (0, d.T)(),
            a = (0, l.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndScreen: t, ...a };
                }),
              [e],
            );
          return (0, n.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, n.jsx)(x, { data: a, columns: r.f, updateConsentRewards: t }),
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
          value: d,
          type: o,
          pattern: i,
          className: c,
          currency: u = '$',
          isMonetaryInput: m = !1,
        } = e;
        return (0, n.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            c,
          ].join(' '),
          children: [
            m &&
              (0, n.jsx)('span', {
                className: 'absolute top-[23%] left-[19px] mobile:left-[15px] text-white font-sans text-xl font-medium',
                children: u,
              }),
            (0, n.jsx)('input', {
              autoComplete: 'off',
              pattern: i,
              onChange: r,
              name: a,
              readOnly: t,
              id: a,
              type: o || 'number',
              value: d,
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
      return e((e.s = 3392));
    }),
      (_N_E = e.O());
  },
]);
