(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    5660: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 9582));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        s = a(2265),
        n = a(9907),
        r = a(6791),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, n.i)(),
          [d, p] = (0, s.useState)(!1),
          u = (0, s.useRef)(null);
        return (
          (0, o.O)(u, () => {
            p(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => p(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: u,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(d ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, l.jsx)(i.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => p(!d),
                      type: 'button',
                      src: r.tp,
                    }),
                  t,
                ],
              }),
            ],
          })
        );
      };
    },
    4697: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(6571),
        r = a(9611),
        o = function (e) {
          let { data: t } = e,
            [a, n] = (0, s.useState)(!1);
          return (0, l.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                n(!a);
              },
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, l.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: t.date,
                    }),
                    (0, l.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, l.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, l.jsx)('span', {
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
                (0, l.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    a ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    t.detail.length > 0 &&
                      (0, l.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: t.detail,
                      }),
                    (0, l.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        t.screenRecording &&
                          (0, l.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, l.jsx)('source', { src: t.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, l.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        t.cameraRecording.length > 0 &&
                          (0, l.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, l.jsx)('source', { src: t.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, l.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
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
          let { screenData: e } = (0, n.T)();
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    r.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, l.jsx)('div', {
                className: 'max-w-['.concat(r.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: e.map((e) => (0, l.jsx)(o, { data: e }, e.id)),
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
            return p;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(6571),
        r = a(9611),
        o = a(4697),
        i = a(4010),
        c = a(3427),
        d = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: s,
              getTableBodyProps: n,
              headerGroups: r,
              rows: o,
              prepareRow: d,
            } = (0, i.useTable)({ columns: t, data: a }),
            p = (e) => {
              console.log('cell :>> ', e);
            };
          return (0, l.jsxs)('table', {
            ...s(),
            className: 'w-full',
            children: [
              (0, l.jsx)('thead', {
                children: r.map((e) =>
                  (0, l.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, l.jsx)(
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
              (0, l.jsx)('tbody', {
                ...n(),
                children: o.map(
                  (e) => (
                    d(e),
                    (0, l.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((t) =>
                        (0, l.jsx)(
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
                                : (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      e.values[t.column.id] &&
                                        e.values[t.column.id].length > 0 &&
                                        e.values[t.column.id].map((e) => {
                                          let { file_url: t } = e;
                                          return (0, l.jsx)(c.Z, {
                                            src: t,
                                            alt: 'photo',
                                            className: 'min-w-[300px] h-[250px] max-w-[300px]',
                                          });
                                        }),
                                      p(e.values[t.column.id]),
                                      (0, l.jsx)('p', { children: t.id }),
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
        p = function () {
          let { gData: e, gTableColumns: t } = (0, n.T)(),
            a = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { Consent: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-5 w-full h-full',
            children: [
              (0, l.jsx)('div', {
                className: 'overflow-x-auto w-full max-w-['.concat(r.kk, '] min-h-[50%]'),
                children: (0, l.jsx)(d, { data: a, columns: t.length > 0 ? t : r.TB }),
              }),
              (0, l.jsx)(o.default, {}),
            ],
          });
        };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return p;
        },
      });
      var l = a(2265),
        s = a(171),
        n = a(6171),
        r = a(7445),
        o = a(5888),
        i = a(1515),
        c = a(7350),
        d = a(289);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, r.r)(),
          { personalData: a, setPersonalData: p, gData: u, rData: m, cData: x, screenData: h } = (0, o.h)(),
          { getAllConsentData: f, gTableColumns: b, updateMyGData: w, getAllPersonalData: g } = (0, d.q)(),
          y = (0, l.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await n.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, i.Z4)(e),
                  { data: l } = await n.h.post('api/personal_data_consents_rewards', a),
                  s = (0, i.uR)({ tableName: c.me.PData, data: l.data });
                p(s), await w(), await f(), await g;
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, p, w, f, g],
          ),
          j = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await n.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await f(),
                  await w(),
                  s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, f, w],
          );
        return {
          savePersonalData: y,
          isLoading: e,
          personalData: a,
          updateConsentRewards: j,
          gData: u,
          rData: m,
          cData: x,
          screenData: h,
          gTableColumns: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 10, 442, 289, 971, 596, 744], function () {
      return e((e.s = 5660));
    }),
      (_N_E = e.O());
  },
]);
