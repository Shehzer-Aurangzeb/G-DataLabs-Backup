(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    1733: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 8390)), Promise.resolve().then(n.bind(n, 2710));
    },
    2710: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n(7437),
        r = n(2265),
        s = n(9611),
        a = n(6571),
        d = n(4118),
        o = n(4010),
        i = n(3739),
        c = function (e) {
          let { columns: t, data: n, updateConsentRewards: r } = e,
            {
              getTableProps: s,
              getTableBodyProps: a,
              headerGroups: d,
              rows: c,
              prepareRow: u,
            } = (0, o.useTable)({ columns: t, data: n });
          return (0, l.jsxs)('table', {
            ...s(),
            className: 'w-full',
            children: [
              (0, l.jsx)('thead', {
                children: d.map((e) =>
                  (0, l.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, l.jsx)('th', {
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
              (0, l.jsx)('tbody', {
                ...a(),
                children: c.map(
                  (e) => (
                    u(e),
                    (0, l.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((t, n) =>
                        (0, l.jsx)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap\n                  '.concat(
                                n === e.cells.length - 1 && 'hidden',
                              ),
                            children:
                              n === e.cells.length - 2
                                ? (0, l.jsx)(i.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    isDisabled: null === e.values.id,
                                    onClick: () => {
                                      r({
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
          let { cData: e, updateConsentRewards: t } = (0, a.T)(),
            n = (0, r.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, n] = e;
                  return { PDataAndWeb: t, ...n };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, l.jsx)(c, { data: n, columns: s.JU, updateConsentRewards: t }),
              0 === n.length && (0, l.jsx)(d.Z, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 292, 459, 971, 596, 744], function () {
      return e((e.s = 1733));
    }),
      (_N_E = e.O());
  },
]);
