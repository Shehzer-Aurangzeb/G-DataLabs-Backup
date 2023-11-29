(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [112],
  {
    1733: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 2710));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(7437),
        l = a(2265),
        s = a(9907),
        r = a(1419),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, s.i)(),
          [d, u] = (0, l.useState)(!1),
          m = (0, l.useRef)(null);
        return (
          (0, o.O)(m, () => {
            u(!1);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              c < 1024 &&
                (0, n.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, n.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, n.jsxs)('div', {
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
                    (0, n.jsx)(i.Z, {
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
      var n = a(7437),
        l = a(2265),
        s = a(3427),
        r = a(1419);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: o } = e,
          i = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            o && i && i.current && i.current.parentElement && i.current.parentElement.classList.add('relative');
          }, [o]),
          (0, n.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !o && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: i,
            children: [
              (0, n.jsx)(s.Z, {
                src: null != a ? a : r.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, n.jsx)('p', {
                className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
                children: null != t ? t : 'No data to display',
              }),
            ],
          })
        );
      };
    },
    9109: function (e, t, a) {
      'use strict';
      var n = a(7437),
        l = a(2265),
        s = a(1872),
        r = a(1419),
        o = a(1515),
        i = a(1846),
        c = a(3427);
      t.Z = function (e) {
        let { className: t, options: a, style: d, value: u, onClick: m, increasePadding: p } = e,
          [x, f] = (0, l.useState)(!1),
          h = (0, l.useRef)(null),
          b = () => {
            f(!x);
          };
        return (
          (0, i.O)(h, () => {
            f(!1);
          }),
          (0, n.jsxs)('div', {
            ref: h,
            style: d,
            className: [
              'relative bg-chat dark:bg-darkChat dark:text-main '
                .concat(null != p ? p : 'py-[10px]', ' px-4 ')
                .concat(x ? 'rounded-md rounded-b-none' : 'rounded-md', ' w-full'),
              t,
            ].join(' '),
            children: [
              (0, n.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: b,
                onKeyDown: b,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, n.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, o.kC)(u),
                  }),
                  (0, n.jsx)(c.Z, {
                    src: r.x7,
                    alt: 'dropdown-icon',
                    className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                      x ? 'rotate-180 ' : 'rotate-0',
                    ),
                  }),
                ],
              }),
              x &&
                (0, n.jsx)('ul', {
                  className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                  children: a
                    .filter((e) => e.value !== u)
                    .map((e) =>
                      (0, n.jsx)(
                        'li',
                        {
                          children: (0, n.jsx)('div', {
                            tabIndex: 0,
                            className:
                              'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 '.concat(
                                null != p ? p : 'py-[10px]',
                              ),
                            role: 'button',
                            onClick: () => {
                              m(e.value), b();
                            },
                            onKeyDown: () => {
                              m(e.value), b();
                            },
                            children: (0, o.kC)(e.value),
                          }),
                        },
                        (0, s.Z)(),
                      ),
                    ),
                }),
            ],
          })
        );
      };
    },
    3739: function (e, t, a) {
      'use strict';
      var n = a(7437);
      a(2265);
      var l = a(1419),
        s = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, n.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, n.jsx)(s.Z, {
              src: t && !r ? l.Xv : l.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, n.jsx)(s.Z, {
              src: t || r ? l.QM : l.JE,
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
    2710: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a(7437),
        l = a(2265),
        s = a(9611),
        r = a(9787),
        o = a(6571),
        i = a(4118),
        c = a(4010),
        d = a(3739),
        u = a(9699),
        m = a(9109),
        p = a(3976),
        x = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: i,
              rows: x,
              prepareRow: f,
            } = (0, c.useTable)({ columns: t, data: a }),
            [h, b] = (0, l.useState)((0, p.F3)(a)),
            [w, v] = (0, l.useState)((0, p.im)(a)),
            k = (0, l.useCallback)((e, t) => {
              v((a) => ({ ...a, [e]: t }));
            }, []),
            j = (0, l.useCallback)((e, t) => (h[e] ? h[e][t][w[e]] : ''), [h, w]);
          return (
            (0, l.useEffect)(() => {
              v((0, p.im)(a)), b((0, p.F3)(a));
            }, [a]),
            (0, n.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, n.jsx)('thead', {
                  children: i.map((e) =>
                    (0, n.jsx)('tr', {
                      ...e.getHeaderGroupProps(),
                      children: e.headers.map((e) =>
                        (0, n.jsx)('th', {
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
                (0, n.jsx)('tbody', {
                  ...o(),
                  children: x.map(
                    (e) => (
                      f(e),
                      (0, n.jsx)('tr', {
                        ...e.getRowProps(),
                        className: 'even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat',
                        children: e.cells.map((t) =>
                          (0, n.jsx)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center\n                  '
                                  .concat('id' === t.column.id && 'hidden', '\n                  ')
                                  .concat(
                                    ('Definition' === t.column.id || 'Unit' === t.column.id) && 'min-w-[450px]',
                                    '\n                  ',
                                  )
                                  .concat(
                                    ('Companies' === t.column.id || 'Use' === t.column.id) && 'min-w-[200px]',
                                    '\n                  ',
                                  ),
                              children:
                                'Consent' === t.column.id
                                  ? (0, n.jsx)(d.Z, {
                                      isAllowed: 'FALSE' !== e.values.Consent,
                                      isDisabled: null === e.values.id,
                                      onClick: () => {
                                        s({
                                          id: e.values.id,
                                          payload: { consents_to_sell: 'TRUE' !== e.values.Consent },
                                        });
                                      },
                                    })
                                  : 'Companies' === t.column.id && e.values.Companies.length > 0
                                  ? (0, n.jsx)(m.Z, {
                                      options: e.values.Companies,
                                      onClick: (t) => {
                                        k(e.values.PDataAndWeb, t);
                                      },
                                      className: 'w-full',
                                      value: w[e.values.PDataAndWeb],
                                    })
                                  : 'Use' === t.column.id || 'Threshold' === t.column.id
                                  ? (0, n.jsx)('p', { children: j(e.values.PDataAndWeb, t.column.id.toLowerCase()) })
                                  : 'Pricing' === t.column.id
                                  ? (0, n.jsx)(u.Z, {
                                      name: 'price-offer-'.concat(e.values.id),
                                      id: 'price-offer-'.concat(e.values.id),
                                      className: 'min-w-[160px]',
                                      readOnly: !0,
                                      isMonetaryInput: !0,
                                      value: j(e.values.PDataAndWeb, 'pricing'),
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
            })
          );
        },
        f = function () {
          let { cData: e, updateConsentRewards: t } = (0, o.T)(),
            a = (0, l.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndWeb: t, ...a };
                }),
              [e],
            );
          return (0, n.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, n.jsx)(x, { data: a, columns: r.J, updateConsentRewards: t }),
              0 === a.length && (0, n.jsx)(i.Z, {}),
            ],
          });
        };
    },
    9699: function (e, t, a) {
      'use strict';
      var n = a(7437);
      a(2265);
      var l = a(3427),
        s = a(1419);
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
        return (0, n.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            d,
          ].join(' '),
          children: [
            m &&
              (0, n.jsx)('span', {
                className: 'absolute top-[23%] '.concat(
                  t ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]',
                  ' text-white font-sans text-xl font-medium',
                ),
                children: u,
              }),
            (0, n.jsx)('input', {
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
            !t &&
              (0, n.jsx)('label', {
                htmlFor: a,
                className: 'cursor-pointer',
                children: (0, n.jsx)(l.Z, { src: s.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
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
      var n = a(2265),
        l = a(171),
        s = a(4548),
        r = a.n(s),
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
            setPersonalData: s,
            gData: p,
            rData: x,
            cData: f,
            screenData: h,
            compData: b,
            setCompData: w,
          } = (0, c.h)(),
          { getAllConsentData: v, gTableColumns: k, updateMyGData: j, getAllPersonalData: g } = (0, m.q)(),
          y = (0, n.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, d.Z4)(e),
                  { data: n } = await o.h.post('api/personal_data_consents_rewards', a),
                  l = (0, d.uR)({ tableName: u.me.PData, data: n.data });
                s(l), await j(), await v(), await g();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, s, j, v, g],
          ),
          C = (0, n.useCallback)(
            async (e) => {
              let { id: a, payload: n } = e;
              try {
                t(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(a, '/'), n),
                  await v(),
                  await j(),
                  l.toast.success('Consent updated');
              } catch (e) {
                l.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, v, j],
          ),
          N = (0, n.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await o.h.post('api/company_consents_rewards', e),
                  n = (0, d.uR)({ tableName: u.me.CompData, data: a.data });
                w(n), l.toast.success('Consent updated');
              } catch (e) {
                l.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, w],
          ),
          _ = (0, n.useCallback)(
            (e) => {
              var t;
              let n = null !== (t = e.date) && void 0 !== t ? t : r()().format('YYYY-MM-DD'),
                l = [];
              for (let t of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  l.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...a, [n]: { ...e, photos: [...l] } };
                s(t);
              }, 3e3);
            },
            [a, s],
          );
        return {
          savePersonalData: y,
          isLoading: e,
          personalData: a,
          updateConsentRewards: C,
          savePersonalDataTemporarily: _,
          updateCompanyConsentRewards: N,
          gData: p,
          rData: x,
          cData: f,
          screenData: h,
          gTableColumns: k,
          compData: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 254, 100, 136, 971, 596, 744], function () {
      return e((e.s = 1733));
    }),
      (_N_E = e.O());
  },
]);
