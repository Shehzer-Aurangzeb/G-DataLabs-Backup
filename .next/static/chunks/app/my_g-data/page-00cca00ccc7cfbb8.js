(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    5660: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 9582));
    },
    4697: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a(7437),
        l = a(2265),
        s = a(6571),
        r = a(9611),
        o = function (e) {
          let { data: t } = e,
            [a, s] = (0, l.useState)(!1);
          return (0, n.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                s(!a);
              },
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, n.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: t.date,
                    }),
                    (0, n.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, n.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, n.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 '.concat(
                              a ? 'rotate-0' : 'rotate-90',
                              ' bg-main dark:bg-darkMain rounded-md',
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    a ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    t.detail.length > 0 &&
                      (0, n.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: t.detail,
                      }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        t.screenRecording &&
                          (0, n.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, n.jsx)('source', { src: t.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, n.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        t.cameraRecording.length > 0 &&
                          (0, n.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, n.jsx)('source', { src: t.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, n.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            t.id,
          );
        },
        i = function () {
          let { screenData: e } = (0, s.T)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    r.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, n.jsx)('div', {
                className: 'max-w-['.concat(r.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: e.map((e) => (0, n.jsx)(o, { data: e }, e.id)),
              }),
            ],
          });
        };
    },
    9582: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var n = a(7437),
        l = a(2265),
        s = a(6571),
        r = a(9611),
        o = a(4697),
        i = a(4010),
        c = a(3427),
        d = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: l,
              getTableBodyProps: s,
              headerGroups: r,
              rows: o,
              prepareRow: d,
            } = (0, i.useTable)({ columns: t, data: a }),
            x = (e) => {
              console.log('cell :>> ', e);
            };
          return (0, n.jsxs)('table', {
            ...l(),
            className: 'w-full',
            children: [
              (0, n.jsx)('thead', {
                children: r.map((e) =>
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
                ...s(),
                children: o.map(
                  (e) => (
                    d(e),
                    (0, n.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((t) =>
                        (0, n.jsx)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black dark:text-main font-sans font-normal text-base mobile:text-sm text-center ',
                            children:
                              'Consent' === t.column.id ||
                              'Consent Value' === t.column.id ||
                              'Rewards' === t.column.id ||
                              'Photos' !== e.values.Consent
                                ? t.render('Cell')
                                : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      e.values[t.column.id] &&
                                        e.values[t.column.id].length > 0 &&
                                        e.values[t.column.id].map((e) => {
                                          let { file_url: t } = e;
                                          return (0, n.jsx)(c.Z, {
                                            src: t,
                                            alt: 'photo',
                                            className: 'min-w-[300px] h-[250px] max-w-[300px]',
                                          });
                                        }),
                                      x(e.values[t.column.id]),
                                      (0, n.jsx)('p', { children: t.id }),
                                    ],
                                  }),
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
        x = function () {
          let { gData: e, gTableColumns: t } = (0, s.T)(),
            a = (0, l.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { Consent: t, ...a };
                }),
              [e],
            );
          return (0, n.jsxs)('div', {
            className: 'flex flex-col gap-y-5 w-full h-full',
            children: [
              (0, n.jsx)('div', {
                className: 'overflow-x-auto w-full max-w-['.concat(r.kk, '] min-h-[50%]'),
                children: (0, n.jsx)(d, { data: a, columns: t.length > 0 ? t : r.TB }),
              }),
              (0, n.jsx)(o.default, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 707, 100, 509, 971, 596, 744], function () {
      return e((e.s = 5660));
    }),
      (_N_E = e.O());
  },
]);
