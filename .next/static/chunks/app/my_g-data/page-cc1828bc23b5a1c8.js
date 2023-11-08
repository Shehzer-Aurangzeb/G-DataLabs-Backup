(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    5660: function (e, l, t) {
      Promise.resolve().then(t.bind(t, 8390)), Promise.resolve().then(t.bind(t, 9582));
    },
    9582: function (e, l, t) {
      'use strict';
      t.r(l),
        t.d(l, {
          default: function () {
            return u;
          },
        });
      var n = t(7437),
        s = t(2265),
        r = t(6571),
        a = t(9611),
        o = t(4697),
        i = t(4010),
        c = t(3427),
        d = function (e) {
          let { columns: l, data: t } = e,
            {
              getTableProps: s,
              getTableBodyProps: r,
              headerGroups: a,
              rows: o,
              prepareRow: d,
            } = (0, i.useTable)({ columns: l, data: t }),
            u = (e) => {
              console.log('cell :>> ', e);
            };
          return (0, n.jsxs)('table', {
            ...s(),
            className: 'w-full',
            children: [
              (0, n.jsx)('thead', {
                children: a.map((e) =>
                  (0, n.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, n.jsx)(
                        'th',
                        {
                          ...e.getHeaderProps(),
                          className:
                            'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap min-w-[250px]',
                          children: e.render('Header'),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ),
              }),
              (0, n.jsx)('tbody', {
                ...r(),
                children: o.map(
                  (e) => (
                    d(e),
                    (0, n.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((l) =>
                        (0, n.jsx)(
                          'td',
                          {
                            ...l.getCellProps(),
                            className:
                              'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black dark:text-main font-sans font-normal text-base mobile:text-sm text-center ',
                            children:
                              'Consent' === l.column.id ||
                              'Consent Value' === l.column.id ||
                              'Rewards' === l.column.id ||
                              'Photos' !== e.values.Consent
                                ? l.render('Cell')
                                : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      e.values[l.column.id] &&
                                        e.values[l.column.id].length > 0 &&
                                        e.values[l.column.id].map((e) => {
                                          let { file_url: l } = e;
                                          return (0, n.jsx)(c.Z, {
                                            src: l,
                                            alt: 'photo',
                                            className: 'min-w-[300px] h-[250px] max-w-[300px]',
                                          });
                                        }),
                                      u(e.values[l.column.id]),
                                      (0, n.jsx)('p', { children: l.id }),
                                    ],
                                  }),
                          },
                          l.id,
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
          let { gData: e, gTableColumns: l } = (0, r.T)(),
            t = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [l, t] = e;
                  return { Consent: l, ...t };
                }),
              [e],
            );
          return (0, n.jsxs)('div', {
            className: 'flex flex-col gap-y-5 w-full h-full',
            children: [
              (0, n.jsx)('div', {
                className: 'overflow-x-auto w-full max-w-['.concat(a.kk, '] min-h-[50%]'),
                children: (0, n.jsx)(d, { data: t, columns: l.length > 0 ? l : a.TB }),
              }),
              (0, n.jsx)(o.default, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 292, 858, 971, 596, 744], function () {
      return e((e.s = 5660));
    }),
      (_N_E = e.O());
  },
]);
