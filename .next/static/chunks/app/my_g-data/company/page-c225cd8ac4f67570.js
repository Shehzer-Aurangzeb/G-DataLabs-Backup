(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [866],
  {
    9157: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 5164));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        s = a(2265),
        n = a(9907),
        r = a(1419),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, n.i)(),
          [d, u] = (0, s.useState)(!1),
          m = (0, s.useRef)(null);
        return (
          (0, o.O)(m, () => {
            u(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: m,
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
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
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
        r = a(1419);
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
      var s = a(1419),
        n = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(n.Z, {
              src: t && !r ? s.Xv : s.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, l.jsx)(n.Z, {
              src: t || r ? s.QM : s.JE,
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
    5164: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var l = a(7437),
        s = a(2265),
        n = a(9611),
        r = a(3470),
        o = a(6571),
        i = a(4118),
        c = a(4010),
        d = a(3739),
        u = a(6413),
        m = a(3427),
        p = a(1419),
        x = function (e) {
          let { readOnly: t, name: a, onChange: s, value: n, className: r } = e;
          return (0, l.jsxs)('div', {
            className: [
              'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[200px] mx-auto',
              r,
            ].join(' '),
            children: [
              (0, l.jsx)('textarea', {
                autoComplete: 'off',
                onChange: s,
                name: a,
                readOnly: t,
                id: a,
                value: n,
                cols: 5,
                className:
                  'bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[140px] resize-none',
              }),
              (0, l.jsx)('label', {
                htmlFor: a,
                className: 'cursor-pointer '.concat(t && 'opacity-0 invisible'),
                children: (0, l.jsx)(m.Z, { src: p.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
              }),
            ],
          });
        },
        f = a(1515),
        h = function (e) {
          let { columns: t, data: a, updateConsentRewards: n } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: i,
              rows: m,
              prepareRow: p,
            } = (0, c.useTable)({ columns: t, data: a }),
            [h, b] = (0, s.useState)({}),
            [w, v] = (0, s.useState)(''),
            g = (e, t) => {
              let { value: a, id: l, type: s } = e.target,
                n = l.split('-')[1];
              ('number' !== s || !1 !== /^\d*\.?\d*$/.test(a)) &&
                (b((e) => ({ ...e, [n]: { ...e[n], [t]: a } })), v(n));
            },
            N = (0, s.useCallback)(
              (e) => {
                let t = h[e].consents_to_buy;
                n([{ consents_to_buy: !t, personal_data_field: { field_name: e } }]);
              },
              [n, h],
            );
          return (
            (0, s.useEffect)(() => {
              let e = setTimeout(() => {
                w &&
                  (n([
                    {
                      demanded_reward_value: Number(h[w].pricing),
                      usage: h[w].use,
                      threshold: Number(h[w].threshold),
                      personal_data_field: { field_name: w },
                    },
                  ]),
                  v(''));
              }, 2e3);
              return () => clearTimeout(e);
            }, [h, w, n]),
            (0, s.useEffect)(() => {
              b((0, f.DQ)(a));
            }, [a]),
            (0, l.jsxs)('table', {
              ...r(),
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
                              'fieldName' === e.id && 'hidden',
                            ),
                          children: e.render('Header'),
                        }),
                      ),
                    }),
                  ),
                }),
                (0, l.jsx)('tbody', {
                  ...o(),
                  children: m.map(
                    (e) => (
                      p(e),
                      (0, l.jsx)('tr', {
                        ...e.getRowProps(),
                        children: e.cells.map((t, a) =>
                          (0, l.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center \n                  '
                                  .concat(a === e.cells.length - 1 && 'hidden', '\n                  ')
                                  .concat((1 === a || 2 === a) && 'min-w-[450px]', '\n                  '),
                              children: [
                                (0 === a || 1 === a || 2 === a) && t.render('Cell'),
                                'Consent' === t.column.id &&
                                  (0, l.jsx)(d.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    onClick: () => {
                                      N(e.values.fieldName);
                                    },
                                  }),
                                'Use' === t.column.id &&
                                  (0, l.jsx)(x, {
                                    name: 'Use-'.concat(e.values.fieldName),
                                    readOnly: 'FALSE' === e.values.Consent,
                                    value: h[e.values.fieldName] ? h[e.values.fieldName].use : '',
                                    onChange: (e) => g(e, 'use'),
                                    className: 'min-w-[200px]',
                                  }),
                                'Pricing' === t.column.id &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Pricing-'.concat(e.values.fieldName),
                                    readOnly: 'FALSE' === e.values.Consent,
                                    type: 'text',
                                    isMonetaryInput: !0,
                                    pattern: '\\d*\\.?\\d*',
                                    value: h[e.values.fieldName] ? h[e.values.fieldName].pricing : '',
                                    onChange: (e) => g(e, 'pricing'),
                                    className: 'min-w-[160px]',
                                  }),
                                'Threshold' === t.column.id &&
                                  (0, l.jsx)(u.Z, {
                                    name: 'Threshold-'.concat(e.values.fieldName),
                                    readOnly: 'FALSE' === e.values.Consent,
                                    type: 'text',
                                    pattern: '\\d*\\.?\\d*',
                                    value: h[e.values.fieldName] ? h[e.values.fieldName].threshold : '',
                                    onChange: (e) => g(e, 'threshold'),
                                    className: 'min-w-[160px]',
                                  }),
                              ],
                            },
                            t.id,
                          ),
                        ),
                      })
                    ),
                  ),
                }),
              ],
            })
          );
        },
        b = function () {
          let { compData: e, updateCompanyConsentRewards: t } = (0, o.T)(),
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
              (0, l.jsx)(h, { data: a, columns: r.r, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(i.Z, {}),
            ],
          });
        };
    },
    6413: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var s = a(3427),
        n = a(1419);
      t.Z = function (e) {
        let {
          readOnly: t,
          name: a,
          onChange: r,
          value: o,
          type: i,
          pattern: c,
          className: d,
          currency: u = '$',
          isMonetaryInput: m = !1,
        } = e;
        return (0, l.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            d,
          ].join(' '),
          children: [
            m &&
              (0, l.jsx)('span', {
                className: 'absolute top-[23%] left-[19px] mobile:left-[15px] text-white font-sans text-xl font-medium',
                children: u,
              }),
            (0, l.jsx)('input', {
              autoComplete: 'off',
              pattern: c,
              onChange: r,
              name: a,
              readOnly: t,
              id: a,
              type: i || 'number',
              value: o,
              className:
                'bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]',
            }),
            (0, l.jsx)('label', {
              htmlFor: a,
              className: 'cursor-pointer '.concat(t && 'opacity-0 invisible'),
              children: (0, l.jsx)(s.Z, { src: n.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
            }),
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
        n = a(4548),
        r = a.n(n),
        o = a(6171),
        i = a(7445),
        c = a(5888),
        d = a(1515),
        u = a(7350),
        m = a(3136);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          {
            personalData: a,
            setPersonalData: n,
            gData: p,
            rData: x,
            cData: f,
            screenData: h,
            compData: b,
            setCompData: w,
          } = (0, c.h)(),
          { getAllConsentData: v, gTableColumns: g, updateMyGData: N, getAllPersonalData: j } = (0, m.q)(),
          y = (0, l.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, d.Z4)(e),
                  { data: l } = await o.h.post('api/personal_data_consents_rewards', a),
                  s = (0, d.uR)({ tableName: u.me.PData, data: l.data });
                n(s), await N(), await v(), await j();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, n, N, v, j],
          ),
          _ = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await v(),
                  await N(),
                  s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, v, N],
          ),
          k = (0, l.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await o.h.post('api/company_consents_rewards', e),
                  l = (0, d.uR)({ tableName: u.me.CompData, data: a.data });
                w(l), s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, w],
          ),
          C = (0, l.useCallback)(
            (e) => {
              var t;
              let l = null !== (t = e.date) && void 0 !== t ? t : r()().format('YYYY-MM-DD'),
                s = [];
              for (let t of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  s.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...a, [l]: { ...e, photos: [...s] } };
                n(t);
              }, 3e3);
            },
            [a, n],
          );
        return {
          savePersonalData: y,
          isLoading: e,
          personalData: a,
          updateConsentRewards: _,
          savePersonalDataTemporarily: C,
          updateCompanyConsentRewards: k,
          gData: p,
          rData: x,
          cData: f,
          screenData: h,
          gTableColumns: g,
          compData: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 254, 100, 136, 971, 596, 744], function () {
      return e((e.s = 9157));
    }),
      (_N_E = e.O());
  },
]);
