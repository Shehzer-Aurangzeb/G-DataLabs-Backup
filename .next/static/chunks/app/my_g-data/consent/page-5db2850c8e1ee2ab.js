(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    1733: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 2710));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        s = a(2265),
        n = a(9907),
        r = a(6791),
        i = a(1846),
        o = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, n.i)(),
          [d, u] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        return (
          (0, i.O)(p, () => {
            u(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(o.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: p,
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
                    (0, l.jsx)(o.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => u(!d),
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
    4118: function (e, t, a) {
      'use strict';
      var l = a(7437),
        s = a(2265),
        n = a(3427),
        r = a(6791);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: i } = e,
          o = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            i && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [i]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !i && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
            children: [
              (0, l.jsx)(n.Z, {
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
      var s = a(6791),
        n = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a } = e;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(n.Z, {
              src: t ? s.Xv : s.WA,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px]',
              onClick: () => {
                t || a();
              },
            }),
            (0, l.jsx)(n.Z, {
              src: t ? s.QM : s.JE,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px]',
              onClick: () => {
                t && a();
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
            return u;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(9611),
        r = a(6571),
        i = a(4118),
        o = a(4010),
        c = a(3739),
        d = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: n,
              getTableBodyProps: r,
              headerGroups: i,
              rows: d,
              prepareRow: u,
            } = (0, o.useTable)({ columns: t, data: a });
          return (0, l.jsxs)('table', {
            ...n(),
            className: 'w-full',
            children: [
              (0, l.jsx)('thead', {
                children: i.map((e) =>
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
                ...r(),
                children: d.map(
                  (e) => (
                    u(e),
                    (0, l.jsx)('tr', {
                      ...e.getRowProps(),
                      children: e.cells.map((t, a) =>
                        (0, l.jsx)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap\n                  '.concat(
                                a === e.cells.length - 1 && 'hidden',
                              ),
                            children:
                              a === e.cells.length - 2
                                ? (0, l.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => {
                                      s({
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
            a = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndWeb: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(n.kk, ']'),
            children: [
              (0, l.jsx)(d, { data: a, columns: n.JU, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(i.Z, {}),
            ],
          });
        };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return u;
        },
      });
      var l = a(2265),
        s = a(171),
        n = a(6171),
        r = a(7445),
        i = a(5888),
        o = a(1515),
        c = a(7350),
        d = a(289);
      let u = () => {
        let { isLoading: e, setIsLoading: t } = (0, r.r)(),
          { personalData: a, setPersonalData: u, gData: p, rData: x, cData: m, screenData: f } = (0, i.h)(),
          { getAllConsentData: h, gTableColumns: b, updateMyGData: w, getAllPersonalData: j } = (0, d.q)(),
          v = (0, l.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await n.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, o.Z4)(e),
                  { data: l } = await n.h.post('api/personal_data_consents_rewards', a),
                  s = (0, o.uR)({ tableName: c.me.PData, data: l.data });
                u(s), await w(), await h(), await j;
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, u, w, h, j],
          ),
          k = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await n.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await h(),
                  await w(),
                  s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, h, w],
          );
        return {
          savePersonalData: v,
          isLoading: e,
          personalData: a,
          updateConsentRewards: k,
          gData: p,
          rData: x,
          cData: m,
          screenData: f,
          gTableColumns: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 10, 442, 289, 971, 596, 744], function () {
      return e((e.s = 1733));
    }),
      (_N_E = e.O());
  },
]);
