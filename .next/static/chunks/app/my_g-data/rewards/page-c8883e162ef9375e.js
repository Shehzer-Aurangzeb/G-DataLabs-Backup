(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [760],
  {
    3392: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 3300));
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
          [d, u] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        return (
          (0, o.O)(p, () => {
            u(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
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
                    (0, l.jsx)(i.Z, {
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
        let { message: t, icon: a, isParentFixed: o } = e,
          i = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            o && i && i.current && i.current.parentElement && i.current.parentElement.classList.add('relative');
          }, [o]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !o && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: i,
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
    3300: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(9611),
        r = a(6571),
        o = a(4118),
        i = a(4010),
        c = a(3739),
        d = a(1515),
        u = a(3427),
        p = a(6791),
        x = function (e) {
          let { readOnly: t, name: a, onChange: s, value: n } = e;
          return (0, l.jsxs)('div', {
            className: 'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            children: [
              (0, l.jsx)('span', {
                className: 'absolute top-[23%] '.concat(
                  t ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]',
                  ' text-white font-sans text-xl font-medium',
                ),
                children: '$',
              }),
              (0, l.jsx)('input', {
                autoComplete: 'off',
                onChange: s,
                name: a,
                readOnly: t,
                id: a,
                type: 'number',
                value: n,
                className:
                  'bg-chat dark:bg-darkChat py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]',
              }),
              !t &&
                (0, l.jsx)('label', {
                  htmlFor: a,
                  className: 'cursor-pointer',
                  children: (0, l.jsx)(u.Z, { src: p.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px]' }),
                }),
            ],
          });
        },
        m = function (e) {
          let { columns: t, data: a, updateConsentRewards: n } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: u,
              rows: p,
              prepareRow: m,
            } = (0, i.useTable)({ columns: t, data: a }),
            [f, h] = (0, s.useState)((0, d.O5)(a)),
            [b, w] = (0, s.useState)(''),
            v = (e) => {
              let { value: t, id: a } = e.target;
              h((e) => ({ ...e, [a]: { ...e[a], demanded_reward_value: Number(Number(t).toFixed(3)) } })), w(a);
            },
            j = (0, s.useCallback)(
              (e) => {
                let t = f[e];
                n({ id: Number(e), payload: { consents_to_sell: !t.consents_to_sell } });
              },
              [n, f],
            );
          return (
            (0, s.useEffect)(() => {
              let e = setTimeout(() => {
                b && n({ id: Number(b), payload: f[b] });
              }, 500);
              return () => clearTimeout(e);
            }, [f, b, n]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: u.map((e) =>
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
                  children: p.map(
                    (e) => (
                      m(e),
                      (0, l.jsx)('tr', {
                        ...e.getRowProps(),
                        children: e.cells.map((t, a) => {
                          var s;
                          return (0, l.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap '.concat(
                                  a === e.cells.length - 1 && 'hidden',
                                ),
                              children: [
                                0 === a && t.render('Cell'),
                                1 === a &&
                                  (0, l.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => j(e.values.id),
                                  }),
                                2 === a &&
                                  (0, l.jsx)(x, {
                                    name: e.values.id,
                                    readOnly: !1,
                                    value:
                                      null === (s = f[e.values.id].demanded_reward_value) || void 0 === s
                                        ? void 0
                                        : s.toString(),
                                    onChange: v,
                                  }),
                                3 === a &&
                                  (0, l.jsx)(x, {
                                    name: 'OtherCompValue-'.concat(e.values.id),
                                    readOnly: !0,
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
        f = function () {
          let { rData: e, updateConsentRewards: t } = (0, r.T)(),
            a = (0, s.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndScreen: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(n.kk, ']'),
            children: [
              Object.keys(e).length > 0 && (0, l.jsx)(m, { data: a, columns: n.f6, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(o.Z, {}),
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
        o = a(5888),
        i = a(1515),
        c = a(7350),
        d = a(289);
      let u = () => {
        let { isLoading: e, setIsLoading: t } = (0, r.r)(),
          { personalData: a, setPersonalData: u, gData: p, rData: x, cData: m, screenData: f } = (0, o.h)(),
          { getAllConsentData: h, gTableColumns: b, updateMyGData: w, getAllPersonalData: v } = (0, d.q)(),
          j = (0, l.useCallback)(
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
                u(s), await w(), await h(), await v;
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, u, w, h, v],
          ),
          g = (0, l.useCallback)(
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
          savePersonalData: j,
          isLoading: e,
          personalData: a,
          updateConsentRewards: g,
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
      return e((e.s = 3392));
    }),
      (_N_E = e.O());
  },
]);
