(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    1785: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 6066)), Promise.resolve().then(t.bind(t, 8390));
    },
    4697: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return d;
          },
        });
      var s = t(7437),
        n = t(2265),
        r = t(6571),
        l = t(9611),
        o = function (e) {
          let { data: a } = e,
            [t, r] = (0, n.useState)(!1);
          return (0, s.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                r(!t);
              },
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, s.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: a.date,
                    }),
                    (0, s.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, s.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, s.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 '.concat(
                              t ? 'rotate-0' : 'rotate-90',
                              ' bg-main dark:bg-darkMain rounded-md',
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    t ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    a.detail.length > 0 &&
                      (0, s.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: a.detail,
                      }),
                    (0, s.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        a.screenRecording &&
                          (0, s.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              t ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, s.jsx)('source', { src: a.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, s.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        a.cameraRecording.length > 0 &&
                          (0, s.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              t ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, s.jsx)('source', { src: a.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, s.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            a.id,
          );
        },
        d = function () {
          let { screenData: e } = (0, r.T)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    l.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, s.jsx)('div', {
                className: 'max-w-['.concat(l.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: e.map((e) => (0, s.jsx)(o, { data: e }, e.id)),
              }),
            ],
          });
        };
    },
    6066: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return x;
          },
        });
      var s = t(7437),
        n = t(2265),
        r = t(6571),
        l = t(9611);
      let o = [
        { Header: 'Consents', accessor: 'consents' },
        { Header: '08-13-2023', accessor: 'date1' },
        { Header: '08-14-2023', accessor: 'date2' },
        { Header: '08-15-2023', accessor: 'date3' },
        { Header: '08-16-2023', accessor: 'date4' },
        { Header: '08-17-2023', accessor: 'date5' },
        { Header: 'Consent Value', accessor: 'consentValue' },
        { Header: 'Rewards', accessor: 'rewards' },
      ];
      var d = t(4697),
        c = t(4010),
        i = t(3427),
        m = function (e) {
          let { columns: a, data: t } = e,
            {
              getTableProps: n,
              getTableBodyProps: r,
              headerGroups: l,
              rows: o,
              prepareRow: d,
            } = (0, c.useTable)({ columns: a, data: t });
          return (0, s.jsxs)('table', {
            ...n(),
            className: 'w-full',
            children: [
              (0, s.jsx)('thead', {
                children: l.map((e) =>
                  (0, s.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, s.jsx)(
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
              (0, s.jsx)('tbody', {
                ...r(),
                children: o.map(
                  (e) => (
                    d(e),
                    (0, s.jsx)('tr', {
                      ...e.getRowProps(),
                      className: 'even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat',
                      children: e.cells.map((a) =>
                        (0, s.jsx)(
                          'td',
                          {
                            ...a.getCellProps(),
                            className:
                              'border border-[#ced4da] py-6 px-7 mobile:p-3 text-black dark:text-main font-sans font-normal text-base mobile:text-sm text-center ',
                            children:
                              'Consent' === a.column.id ||
                              'Consent Value' === a.column.id ||
                              'Rewards' === a.column.id ||
                              'Photos' !== e.values.Consent
                                ? a.render('Cell')
                                : e.values[a.column.id] &&
                                  e.values[a.column.id].length > 0 &&
                                  e.values[a.column.id].map((e) => {
                                    let { file_url: a } = e;
                                    return (0, s.jsx)(i.Z, {
                                      src: a,
                                      alt: 'photo',
                                      className: 'min-w-[300px] h-[250px] max-w-[300px]',
                                    });
                                  }),
                          },
                          a.id,
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
          let { gData: e, gTableColumns: a } = (0, r.T)(),
            t = (0, n.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [a, t] = e;
                  return { Consent: a, ...t };
                }),
              [e],
            );
          return (0, s.jsxs)('div', {
            className: 'flex flex-col gap-y-5 w-full h-full',
            children: [
              (0, s.jsx)('div', {
                className: 'overflow-x-auto w-full max-w-['.concat(l.kk, '] min-h-[50%]'),
                children: (0, s.jsx)(m, { data: t, columns: a.length > 0 ? a : o }),
              }),
              (0, s.jsx)(d.default, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 897, 100, 509, 971, 596, 744], function () {
      return e((e.s = 1785));
    }),
      (_N_E = e.O());
  },
]);
