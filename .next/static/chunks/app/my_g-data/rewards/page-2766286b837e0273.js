(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [760],
  {
    3392: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 3195));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        n = a(2265),
        s = a(9907),
        r = a(1419),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: d } = (0, s.i)(),
          [c, u] = (0, n.useState)(!1),
          p = (0, n.useRef)(null);
        return (
          (0, o.O)(p, () => {
            u(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              d < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => u(!c),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
                ref: p,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    d < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(c ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  d < 1024 &&
                    (0, l.jsx)(i.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => u(!c),
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
        n = a(2265),
        s = a(3427),
        r = a(1419);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: o } = e,
          i = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            o && i && i.current && i.current.parentElement && i.current.parentElement.classList.add('relative');
          }, [o]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !o && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: i,
            children: [
              (0, l.jsx)(s.Z, {
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
      var n = a(1419),
        s = a(1839);
      t.Z = function (e) {
        let { isAllowed: t, onClick: a, isDisabled: r } = e;
        return (0, l.jsxs)('div', {
          className: 'flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center',
          children: [
            (0, l.jsx)(s.Z, {
              src: t && !r ? n.Xv : n.WA,
              disabled: r,
              className: 'relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px] '.concat(r && 'cursor-default'),
              onClick: () => {
                t || r || a();
              },
            }),
            (0, l.jsx)(s.Z, {
              src: t || r ? n.QM : n.JE,
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
    3195: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var l = a(7437),
        n = a(2265),
        s = a(9611),
        r = a(5021),
        o = a(6571),
        i = a(4118),
        d = a(4010),
        c = a(3739);
      let u = (e) => {
        let t = {};
        for (let a of e)
          t[a.PDataAndScreen] = {
            consents_to_sell: 'TRUE' === a.Consent,
            demanded_reward_value: a.PDefinedValue,
            id: a.id,
          };
        return t;
      };
      var p = a(6413),
        m = function (e) {
          let { columns: t, data: a, updateConsentRewards: s } = e,
            {
              getTableProps: r,
              getTableBodyProps: o,
              headerGroups: i,
              rows: m,
              prepareRow: f,
            } = (0, d.useTable)({ columns: t, data: a }),
            [x, h] = (0, n.useState)({}),
            [b, v] = (0, n.useState)(''),
            w = (e) => {
              let { value: t, name: a } = e.target;
              if (!/^\d*\.?\d*$/.test(t)) return;
              let l = a.split('-')[0];
              h((e) => ({ ...e, [l]: { ...e[l], demanded_reward_value: t } })), v(l);
            };
          return (
            (0, n.useEffect)(() => {
              let e = setTimeout(() => {
                b &&
                  (s({
                    id: Number(x[b].id),
                    payload: {
                      demanded_reward_value: parseFloat(x[b].demanded_reward_value),
                      consents_to_sell: x[b].consents_to_sell,
                    },
                  }),
                  v(''));
              }, 2e3);
              return () => clearTimeout(e);
            }, [x, b, s]),
            (0, n.useEffect)(() => {
              h(u(a));
            }, [a]),
            (0, l.jsxs)('table', {
              ...r(),
              className: 'w-full',
              children: [
                (0, l.jsx)('thead', {
                  children: i.map((e) =>
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
                  children: m.map(
                    (e) => (
                      f(e),
                      (0, l.jsx)('tr', {
                        ...e.getRowProps(),
                        className: 'even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat',
                        children: e.cells.map((t, a) => {
                          var n;
                          return (0, l.jsxs)(
                            'td',
                            {
                              ...t.getCellProps(),
                              className:
                                'border border-[#ced4da] py-6 px-7 mobile:p-3 dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap '.concat(
                                  'id' === t.column.id && 'hidden',
                                  ' \n                \n                  ',
                                ),
                              children: [
                                (0 === a || 1 === a) && t.render('Cell'),
                                'Consent' === t.column.id &&
                                  (0, l.jsx)(c.Z, {
                                    isAllowed: 'FALSE' !== e.values.Consent,
                                    isDisabled: null === e.values.id,
                                    onClick: () =>
                                      s({
                                        id: e.values.id,
                                        payload: { consents_to_sell: 'TRUE' !== e.values.Consent },
                                      }),
                                  }),
                                'PDefinedValue' === t.column.id &&
                                  (0, l.jsx)(p.Z, {
                                    name: ''.concat(e.values.PDataAndScreen, '-').concat(e.values.id),
                                    id: e.values.id,
                                    type: 'text',
                                    pattern: '\\d*\\.?\\d*',
                                    readOnly: null === e.values.id,
                                    isMonetaryInput: !0,
                                    value:
                                      null === (n = x[e.values.PDataAndScreen]) || void 0 === n
                                        ? void 0
                                        : n.demanded_reward_value,
                                    onChange: w,
                                  }),
                                'OtherCompValue' === t.column.id &&
                                  (0, l.jsx)(p.Z, {
                                    name: 'OtherCompValue-'.concat(e.values.id),
                                    id: 'OtherCompValue-'.concat(e.values.id),
                                    readOnly: !0,
                                    isMonetaryInput: !0,
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
          let { rData: e, updateConsentRewards: t } = (0, o.T)(),
            a = (0, n.useMemo)(
              () =>
                Object.entries(e).map((e) => {
                  let [t, a] = e;
                  return { PDataAndScreen: t, ...a };
                }),
              [e],
            );
          return (0, l.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, l.jsx)(m, { data: a, columns: r.f, updateConsentRewards: t }),
              0 === a.length && (0, l.jsx)(i.Z, {}),
            ],
          });
        };
    },
    6413: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var n = a(3427),
        s = a(1419);
      t.Z = function (e) {
        let {
          readOnly: t,
          name: a,
          onChange: r,
          value: o,
          type: i,
          pattern: d,
          className: c,
          currency: u = '$',
          isMonetaryInput: p = !1,
        } = e;
        return (0, l.jsxs)('div', {
          className: [
            'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
            c,
          ].join(' '),
          children: [
            p &&
              (0, l.jsx)('span', {
                className: 'absolute top-[23%] left-[19px] mobile:left-[15px] text-white font-sans text-xl font-medium',
                children: u,
              }),
            (0, l.jsx)('input', {
              autoComplete: 'off',
              pattern: d,
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
              children: (0, l.jsx)(n.Z, { src: s.eP, alt: 'edit-icon', className: 'w-[24px] h-[24px] dark:invert' }),
            }),
          ],
        });
      };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return m;
        },
      });
      var l = a(2265),
        n = a(171),
        s = a(4548),
        r = a.n(s),
        o = a(6171),
        i = a(7445),
        d = a(5888),
        c = a(1515),
        u = a(7350),
        p = a(3136);
      let m = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          {
            personalData: a,
            setPersonalData: s,
            gData: m,
            rData: f,
            cData: x,
            screenData: h,
            compData: b,
            setCompData: v,
          } = (0, d.h)(),
          { getAllConsentData: w, gTableColumns: _, updateMyGData: j, getAllPersonalData: y } = (0, p.q)(),
          g = (0, l.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, c.Z4)(e),
                  { data: l } = await o.h.post('api/personal_data_consents_rewards', a),
                  n = (0, c.uR)({ tableName: u.me.PData, data: l.data });
                s(n), await j(), await w(), await y();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, s, j, w, y],
          ),
          k = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await w(),
                  await j(),
                  n.toast.success('Consent updated');
              } catch (e) {
                n.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, w, j],
          ),
          C = (0, l.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await o.h.post('api/company_consents_rewards', e),
                  l = (0, c.uR)({ tableName: u.me.CompData, data: a.data });
                v(l), n.toast.success('Consent updated');
              } catch (e) {
                n.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, v],
          ),
          N = (0, l.useCallback)(
            (e) => {
              var t;
              let l = null !== (t = e.date) && void 0 !== t ? t : r()().format('YYYY-MM-DD'),
                n = [];
              for (let t of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  n.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...a, [l]: { ...e, photos: [...n] } };
                s(t);
              }, 3e3);
            },
            [a, s],
          );
        return {
          savePersonalData: g,
          isLoading: e,
          personalData: a,
          updateConsentRewards: k,
          savePersonalDataTemporarily: N,
          updateCompanyConsentRewards: C,
          gData: m,
          rData: f,
          cData: x,
          screenData: h,
          gTableColumns: _,
          compData: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 10, 254, 100, 136, 971, 596, 744], function () {
      return e((e.s = 3392));
    }),
      (_N_E = e.O());
  },
]);
