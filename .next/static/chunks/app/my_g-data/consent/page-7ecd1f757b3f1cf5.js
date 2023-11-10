(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    1733: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 8390)), Promise.resolve().then(l.bind(l, 2710));
    },
    4118: function (e, t, l) {
      'use strict';
      var a = l(7437),
        n = l(2265),
        s = l(3427),
        r = l(6421);
      t.Z = function (e) {
        let { message: t, icon: l, isParentFixed: i } = e,
          c = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            i && c && c.current && c.current.parentElement && c.current.parentElement.classList.add('relative');
          }, [i]),
          (0, a.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !i && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: c,
            children: [
              (0, a.jsx)(s.Z, {
                src: null != l ? l : r.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, a.jsx)('p', {
                className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
                children: null != t ? t : 'No data to display',
              }),
            ],
          })
        );
      };
    },
    3739: function (e, t, l) {
      'use strict';
      var a = l(7437);
      l(2265);
      var n = l(6421),
        s = l(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: l, isDisabled: r } = e;
        return (0, a.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, a.jsx)(s.Z, {
              src: t && !r ? n.Xv : n.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || l();
              },
            }),
            (0, a.jsx)(s.Z, {
              src: t || r ? n.QM : n.JE,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t && !r && l();
              },
            }),
          ],
        });
      };
    },
    2710: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var a = l(7437),
        n = l(2265),
        s = l(9611),
        r = l(6571),
        i = l(4118),
        c = l(4010),
        o = l(3739),
        d = function (e) {
          let { columns: t, data: l, updateConsentRewards: n } = e,
            {
              getTableProps: s,
              getTableBodyProps: r,
              headerGroups: i,
              rows: d,
              prepareRow: u,
            } = (0, c.useTable)({ columns: t, data: l });
          return (0, a.jsxs)('table', {
            ...s(),
            className: 'w-full',
            children: [
              (0, a.jsx)('thead', {
                children: i.map((e) =>
                  (0, a.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, a.jsx)('th', {
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
              (0, a.jsx)('tbody', {
                ...r(),
                children: d.map(
                  (e) => (
                    u(e),
                    (0, a.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((t, l) =>
                        (0, a.jsx)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center\n                  '
                                .concat(l === e.cells.length - 1 && 'hidden', '\n                  ')
                                .concat((1 === l || 2 === l) && 'min-w-[450px]', '\n                  '),
                            children:
                              l === e.cells.length - 2
                                ? (0, a.jsx)(o.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    isDisabled: null === e.values.id,
                                    onClick: () => {
                                      n({
                                        id: e.values.id,
                                        payload: { consents_to_sell: 'TRUE' !== e.values.Consent },
                                      });
                                    },
                                  })
                                : t.render('Cell'),
                          },
                          t.id,
                        ),
                      ),
                    })
                  ),
                ),
              }),
            ],
          });
        },
        u = function () {
          let { cData: e, updateConsentRewards: t } = (0, r.T)(),
            l = (0, n.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, l] = e;
                  return { PDataAndWeb: t, ...l };
                }),
              [e],
            );
          return (0, a.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, a.jsx)(d, { data: l, columns: s.JU, updateConsentRewards: t }),
              0 === l.length && (0, a.jsx)(i.Z, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 100, 509, 971, 596, 744], function () {
      return e((e.s = 1733));
    }),
      (_N_E = e.O());
  },
]);
