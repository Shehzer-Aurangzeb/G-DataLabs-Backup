(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    5660: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 8390)), Promise.resolve().then(t.bind(t, 6066));
    },
    8390: function (e, a, t) {
      'use strict';
      t.r(a);
      var s = t(7437),
        l = t(2265),
        r = t(9907),
        n = t(1419),
        o = t(1846),
        c = t(1839);
      a.default = function (e) {
        let { children: a, className: t = '' } = e,
          { width: i } = (0, r.i)(),
          [d, u] = (0, l.useState)(!1),
          p = (0, l.useRef)(null);
        return (
          (0, o.O)(p, () => {
            u(!1);
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              i < 1024 &&
                (0, s.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, s.jsx)(c.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: n.tp,
                  }),
                }),
              (0, s.jsxs)('div', {
                ref: p,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    i < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(d ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  t,
                ].join(' '),
                children: [
                  i < 1024 &&
                    (0, s.jsx)(c.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => u(!d),
                      type: 'button',
                      src: n.tp,
                    }),
                  a,
                ],
              }),
            ],
          })
        );
      };
    },
    4697: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return c;
          },
        });
      var s = t(7437),
        l = t(2265),
        r = t(6571),
        n = t(9611),
        o = function (e) {
          let { data: a } = e,
            [t, r] = (0, l.useState)(!1);
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
        c = function () {
          let { screenData: e } = (0, r.T)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    n.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, s.jsx)('div', {
                className: 'max-w-['.concat(n.kk, '] overflow-x-auto w-full h-full pb-5'),
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
            return p;
          },
        });
      var s = t(7437),
        l = t(2265),
        r = t(6571),
        n = t(9611);
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
      var c = t(4697),
        i = t(4010),
        d = t(3427),
        u = function (e) {
          let { columns: a, data: t } = e,
            {
              getTableProps: l,
              getTableBodyProps: r,
              headerGroups: n,
              rows: o,
              prepareRow: c,
            } = (0, i.useTable)({ columns: a, data: t });
          return (0, s.jsxs)('table', {
            ...l(),
            className: 'w-full',
            children: [
              (0, s.jsx)('thead', {
                children: n.map((e) =>
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
                    c(e),
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
                                    return (0, s.jsx)(d.Z, {
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
        p = function () {
          let { gData: e, gTableColumns: a } = (0, r.T)(),
            t = (0, l.useMemo)(
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
                className: 'overflow-x-auto w-full max-w-['.concat(n.kk, '] min-h-[50%]'),
                children: (0, s.jsx)(u, { data: t, columns: a.length > 0 ? a : o }),
              }),
              (0, s.jsx)(c.default, {}),
            ],
          });
        };
    },
    6571: function (e, a, t) {
      'use strict';
      t.d(a, {
        T: function () {
          return m;
        },
      });
      var s = t(2265),
        l = t(171),
        r = t(4548),
        n = t.n(r),
        o = t(6171),
        c = t(7445),
        i = t(5888),
        d = t(1515),
        u = t(7350),
        p = t(3136);
      let m = () => {
        let { isLoading: e, setIsLoading: a } = (0, c.r)(),
          {
            personalData: t,
            setPersonalData: r,
            gData: m,
            rData: x,
            cData: h,
            screenData: f,
            compData: b,
            setCompData: w,
          } = (0, i.h)(),
          { getAllConsentData: g, gTableColumns: y, updateMyGData: j, getAllPersonalData: v } = (0, p.q)(),
          k = (0, s.useCallback)(
            async (e) => {
              try {
                if ((a(!0), e.photos)) {
                  let a = new FormData();
                  for (let t of (a.append('field_name', 'photos'), e.photos)) a.append('image_files', t);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', a);
                }
                delete e.photos;
                let t = (0, d.Z4)(e),
                  { data: s } = await o.h.post('api/personal_data_consents_rewards', t),
                  l = (0, d.uR)({ tableName: u.me.PData, data: s.data });
                r(l), await j(), await g(), await v();
              } catch (e) {
              } finally {
                a(!1);
              }
            },
            [a, r, j, g, v],
          ),
          N = (0, s.useCallback)(
            async (e) => {
              let { id: t, payload: s } = e;
              try {
                a(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(t, '/'), s),
                  await g(),
                  await j(),
                  l.toast.success('Consent updated');
              } catch (e) {
                l.toast.error('Some problem updating consent');
              } finally {
                a(!1);
              }
            },
            [a, g, j],
          ),
          _ = (0, s.useCallback)(
            async (e) => {
              try {
                a(!0);
                let { data: t } = await o.h.post('api/company_consents_rewards', e),
                  s = (0, d.uR)({ tableName: u.me.CompData, data: t.data });
                w(s), l.toast.success('Consent updated');
              } catch (e) {
                l.toast.error('Some problem updating consent');
              } finally {
                a(!1);
              }
            },
            [a, w],
          ),
          C = (0, s.useCallback)(
            (e) => {
              var a;
              let s = null !== (a = e.date) && void 0 !== a ? a : n()().format('YYYY-MM-DD'),
                l = [];
              for (let a of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  l.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(a);
              }
              setTimeout(() => {
                let a = { ...t, [s]: { ...e, photos: [...l] } };
                r(a);
              }, 3e3);
            },
            [t, r],
          );
        return {
          savePersonalData: k,
          isLoading: e,
          personalData: t,
          updateConsentRewards: N,
          savePersonalDataTemporarily: C,
          updateCompanyConsentRewards: _,
          gData: m,
          rData: x,
          cData: h,
          screenData: f,
          gTableColumns: y,
          compData: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 254, 100, 136, 971, 596, 744], function () {
      return e((e.s = 5660));
    }),
      (_N_E = e.O());
  },
]);
