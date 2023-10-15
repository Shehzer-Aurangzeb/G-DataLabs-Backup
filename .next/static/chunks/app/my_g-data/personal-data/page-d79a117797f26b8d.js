(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    1681: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 6113));
    },
    446: function (e, t, a) {
      'use strict';
      var r = a(7437);
      a(2265);
      var l = a(3427),
        i = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: n, isLoading: s = !1, icon: o, className: c = '', style: u } = e;
        return (0, r.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: t,
          type: a,
          style: u,
          disabled: s,
          children: [
            o &&
              !s &&
              (0, r.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, r.jsx)(l.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            s ? (0, r.jsx)(i.Z, { style: { color: '#fff', margin: '0 auto' } }) : n,
          ],
        });
      };
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var r = a(7437),
        l = a(2265),
        i = a(9907),
        n = a(6791),
        s = a(1846),
        o = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, i.i)(),
          [u, d] = (0, l.useState)(!1),
          m = (0, l.useRef)(null);
        return (
          (0, s.O)(m, () => {
            d(!1);
          }),
          (0, r.jsxs)(r.Fragment, {
            children: [
              c < 1024 &&
                (0, r.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, r.jsx)(o.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: n.tp,
                  }),
                }),
              (0, r.jsxs)('div', {
                ref: m,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(u ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, r.jsx)(o.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => d(!u),
                      type: 'button',
                      src: n.tp,
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
      var r = a(7437),
        l = a(2265),
        i = a(3427),
        n = a(6791);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: s } = e,
          o = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            s && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [s]),
          (0, r.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !s && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
            children: [
              (0, r.jsx)(i.Z, {
                src: null != a ? a : n.HB,
                alt: 'no-data',
                className: 'w-14 h-14 object-contain dark:filter-invert(1) dark:brightness-200',
              }),
              (0, r.jsx)('p', {
                className: 'font-sans font-semibold text-primary dark:text-main text-xl text-center',
                children: null != t ? t : 'No data to display',
              }),
            ],
          })
        );
      };
    },
    6113: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return N;
          },
        });
      var r = a(7437),
        l = a(2265),
        i = a(9611),
        n = a(6571),
        s = a(4118),
        o = a(4010),
        c = a(3427),
        u = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: i,
              getTableBodyProps: n,
              headerGroups: s,
              rows: u,
              prepareRow: d,
            } = (0, o.useTable)({ columns: t, data: a });
          return (0, r.jsxs)('table', {
            ...i(),
            className: 'w-full',
            children: [
              (0, r.jsx)('thead', {
                children: s.map((e) =>
                  (0, r.jsx)('tr', {
                    ...e.getHeaderGroupProps(),
                    children: e.headers.map((e) =>
                      (0, r.jsx)('th', {
                        ...e.getHeaderProps(),
                        className:
                          'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap',
                        children: e.render('Header'),
                      }),
                    ),
                  }),
                ),
              }),
              (0, r.jsx)('tbody', {
                ...n(),
                children: u.map(
                  (e) => (
                    d(e),
                    (0, l.createElement)(
                      'tr',
                      { ...e.getRowProps(), key: e.id },
                      e.cells.map((t) =>
                        (0, r.jsxs)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black font-sans font-normal text-base mobile:text-sm text-center min-w-[200px] dark:text-main',
                            children: [
                              'photos' === t.column.id &&
                                e.values.photos &&
                                'string' == typeof e.values.photos &&
                                (0, r.jsx)(c.Z, {
                                  src: e.values.photos,
                                  alt: 'image',
                                  className: 'w-[550px] h-[250px]',
                                }),
                              'photos' === t.column.id &&
                                e.values.photos &&
                                'object' == typeof e.values.photos &&
                                e.values.photos.map((e) => {
                                  let { file_url: t } = e;
                                  return (0, r.jsx)(c.Z, {
                                    src: t,
                                    alt: 'image',
                                    className: 'min-w-[300px] h-[250px] max-w-[300px]',
                                  });
                                }),
                              'photos' !== t.column.id && t.render('Cell'),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    )
                  ),
                ),
              }),
            ],
          });
        },
        d = a(6230),
        m = a(1872),
        p = a(5979),
        x = a(446),
        f = a(1799),
        h = a(6691),
        _ = a.n(h),
        b = a(6791),
        w = a(1515),
        g = a(1846),
        v = function (e) {
          let { className: t, options: a, style: i, value: n, onClick: s } = e,
            [o, u] = (0, l.useState)(!1),
            d = (0, l.useRef)(null),
            p = () => {
              u(!o);
            };
          return (
            (0, g.O)(d, () => {
              u(!1);
            }),
            (0, r.jsxs)('div', {
              ref: d,
              style: i,
              className: [
                'relative bg-chat py-[10px] dark:bg-darkChat dark:text-main px-4 '.concat(
                  o ? 'rounded-md rounded-b-none' : 'rounded-md',
                  ' w-full',
                ),
                t,
              ].join(' '),
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex w-full justify-between items-center',
                  onClick: p,
                  onKeyDown: p,
                  role: 'button',
                  tabIndex: 0,
                  children: [
                    (0, r.jsx)('label', {
                      className:
                        'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                      children: (0, w.kC)(n),
                    }),
                    (0, r.jsx)(c.Z, {
                      src: b.x7,
                      alt: 'dropdown-icon',
                      className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                        o ? 'rotate-180 ' : 'rotate-0',
                      ),
                    }),
                  ],
                }),
                o &&
                  (0, r.jsx)('ul', {
                    className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                    children: a
                      .filter((e) => e.value !== n)
                      .map((e) =>
                        (0, r.jsx)(
                          'li',
                          {
                            children: (0, r.jsx)('div', {
                              tabIndex: 0,
                              className:
                                'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 py-[10px]',
                              role: 'button',
                              onClick: () => {
                                s(e.value), p();
                              },
                              onKeyDown: () => {
                                s(e.value), p();
                              },
                              children: (0, w.kC)(e.value),
                            }),
                          },
                          (0, m.Z)(),
                        ),
                      ),
                  }),
              ],
            })
          );
        },
        y = function (e) {
          let { onChange: t, noOfFiles: a } = e;
          return (0, r.jsxs)('div', {
            className:
              'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
            children: [
              (0, r.jsx)(c.Z, { src: b.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px] dark:invert' }),
              (0, r.jsx)('p', {
                className: 'text-black dark:text-main text-xl font-sans font-normal ',
                children: a > 0 ? ''.concat(a, ' files selected') : 'Select files',
              }),
              (0, r.jsx)('input', {
                onChange: t,
                name: 'profile',
                id: 'profile',
                multiple: !0,
                type: 'file',
                accept: '.jpg, .jpeg, .png',
                className: 'w-full h-full opacity-0 absolute z-1 cursor-pointer',
              }),
            ],
          });
        },
        j = function (e) {
          let {
              name: t,
              value: a,
              onChange: i,
              title: n,
              type: s,
              placeholder: o,
              readOnly: c,
              error: u,
              isAddingFieldEnabled: d = !1,
              fields: m,
              addNewField: p,
              handleFileChange: x,
              noOfFiles: f,
              isSelectInput: h = !1,
              selectOptions: w,
              onSelectOption: g,
            } = e,
            [j, k] = (0, l.useState)(!1);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)('div', {
                className:
                  'flex flex-row items-start gap-x-2 pt-3 pl-2 pr-3 w-full tablet:gap-x-0 mobile:gap-x-1 '.concat(
                    j ? 'pb-3' : 'pb-5',
                    ' rounded-xl bg-light dark:bg-main transition duration-300',
                  ),
                children: [
                  (0, r.jsx)(_(), {
                    src: b.x7,
                    alt: 'arrow-icon',
                    height: 24,
                    width: 24,
                    className: 'transition duration-300 '.concat(j && 'rotate-180 ', ' dark:invert'),
                    onClick: () => {
                      k(!j);
                    },
                  }),
                  (0, r.jsxs)('header', {
                    className: 'flex flex-col gap-y-[18px] w-full relative',
                    children: [
                      (0, r.jsx)('label', {
                        htmlFor: t,
                        className: 'text-primary font-sans font-medium text-xl  dark:text-main',
                        children: n,
                      }),
                      !j &&
                        !d &&
                        'file' !== s &&
                        !h &&
                        (0, r.jsx)('input', {
                          autoComplete: 'off',
                          placeholder: o,
                          onChange: i,
                          name: t,
                          readOnly: c,
                          id: t,
                          type: s || 'text',
                          value: a,
                          className:
                            'bg-chat dark:bg-darkChat py-[10px] px-4 rounded-md text-primary dark:text-main w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none tablet:px-2 mobile:px-1',
                        }),
                      !j &&
                        !d &&
                        'file' !== s &&
                        h &&
                        (0, r.jsx)(v, {
                          options: w,
                          className: 'w-auto ',
                          value: null == a ? void 0 : a.toString(),
                          onClick: g,
                        }),
                      !j && !d && 'file' === s && !h && (0, r.jsx)(y, { onChange: x, noOfFiles: null != f ? f : 0 }),
                      !j &&
                        d &&
                        !h &&
                        m &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            Object.entries(m).map((e) => {
                              let [t, a] = e;
                              return (0, r.jsx)(
                                'input',
                                {
                                  autoComplete: 'off',
                                  placeholder: o,
                                  onChange: i,
                                  name: t,
                                  readOnly: c,
                                  id: 'emotionList-'.concat(t),
                                  type: s || 'text',
                                  value: a,
                                  className:
                                    'bg-chat dark:bg-darkChat py-[10px] px-4 rounded-md text-primary w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none',
                                },
                                'emotionList-'.concat(t),
                              );
                            }),
                            (0, r.jsxs)('button', {
                              className:
                                'flex flex-row items-center gap-x-2 outline-none bg-none dark:text-main focus:outline-none font-sans font-medium text-primary text-sm',
                              type: 'button',
                              onClick: p,
                              children: [
                                (0, r.jsx)(_(), {
                                  src: b.PD,
                                  alt: 'plus-icon',
                                  height: 20,
                                  width: 22,
                                  className: 'dark:invert',
                                }),
                                ' Add new field',
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              u && (0, r.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: u }),
            ],
          });
        },
        k = function (e) {
          let { savePersonalData: t, isLoading: a } = e,
            [n, s] = (0, l.useState)({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }),
            [o, c] = (0, l.useState)(0),
            { weather: u } = (0, f.I)(),
            {
              handleSubmit: h,
              handleChange: _,
              values: b,
              touched: w,
              errors: g,
              setFieldValue: v,
            } = (0, d.TA)({
              initialValues: {
                ...i.sw,
                high_temperature: u ? u.highestTemperature : 0,
                low_temperature: u ? u.lowestTemperature : 0,
              },
              validationSchema: p.wD,
              onSubmit: async (e, a) => {
                t(e), a.setSubmitting(!1), a.resetForm();
              },
            });
          return (
            (0, l.useEffect)(() => {
              let e = setTimeout(() => {
                v('emotional_list', Object.values(n.emotionList)),
                  v('social_life_list', Object.values(n.socialLifeList));
              }, 400);
              return () => clearTimeout(e);
            }, [n, v]),
            (0, r.jsxs)('form', {
              className:
                'flex flex-col gap-y-3 w-full overflow-y-auto max-w-[377px] bg-side dark:bg-dark rounded-md pl-4 pr-6 py-6 mobile:max-w-full mobile: dark:text-main',
              noValidate: !0,
              onSubmit: h,
              children: [
                (0, r.jsx)(j, {
                  value: b.date,
                  type: 'date',
                  onChange: _,
                  title: 'Date',
                  name: 'date',
                  error: w.date && g.date,
                }),
                (0, r.jsx)(j, {
                  value: b.high_temperature,
                  type: 'number',
                  onChange: _,
                  title: 'High Temperature (C)',
                  name: 'high_temperature',
                  error: w.high_temperature && g.high_temperature,
                }),
                (0, r.jsx)(j, {
                  value: b.low_temperature,
                  type: 'number',
                  onChange: _,
                  title: 'Low Temperature (C)',
                  name: 'low_temperature',
                  error: w.low_temperature && g.low_temperature,
                }),
                (0, r.jsx)(j, {
                  value: b.weather,
                  onChange: _,
                  title: 'Weather Type',
                  name: 'weather',
                  error: w.weather && g.weather,
                }),
                (0, r.jsx)(j, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    s((e) => ({ ...e, emotionList: { ...e.emotionList, [t]: a } }));
                  },
                  title: 'Emotion List',
                  fields: n.emotionList,
                  addNewField: () => {
                    s((e) => ({ ...e, emotionList: { ...e.emotionList, [(0, m.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: w.emotional_list && g.emotional_list,
                }),
                (0, r.jsx)(j, {
                  value: b.emotional_overall,
                  onChange: _,
                  title: 'Emotion Overall',
                  name: 'emotional_overall',
                  error: w.emotional_overall && g.emotional_overall,
                }),
                (0, r.jsx)(j, {
                  value: b.relative_finance_status,
                  onChange: _,
                  title: 'Relative Finance Status',
                  name: 'relative_finance_status',
                  error: w.relative_finance_status && g.relative_finance_status,
                }),
                (0, r.jsx)(j, {
                  value: b.exercise_time,
                  onChange: _,
                  type: 'number',
                  title: 'Exercise Total Time (min)',
                  name: 'exercise_time',
                  error: w.exercise_time && g.exercise_time,
                }),
                (0, r.jsx)(j, {
                  value: b.health_overall,
                  onChange: _,
                  title: 'Health Overall',
                  name: 'health_overall',
                  error: w.health_overall && g.health_overall,
                }),
                (0, r.jsx)(j, {
                  value: b.any_social_life,
                  isSelectInput: !0,
                  onSelectOption: (e) => {
                    v('any_social_life', e);
                  },
                  selectOptions: i.XZ,
                  title: 'Any Social Life?',
                  error: w.any_social_life && g.any_social_life,
                }),
                (0, r.jsx)(j, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    s((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [t]: a } }));
                  },
                  title: 'Social Life Activities',
                  fields: n.socialLifeList,
                  addNewField: () => {
                    s((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [(0, m.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: w.social_life_list && g.social_life_list,
                }),
                (0, r.jsx)(j, {
                  value: b.weight,
                  onChange: _,
                  type: 'number',
                  title: 'Weight (Pounds)',
                  name: 'weight',
                  error: w.weight && g.weight,
                }),
                (0, r.jsx)(j, {
                  value: b.family_status,
                  onChange: _,
                  title: 'Family Status',
                  name: 'family_status',
                  error: w.family_status && g.family_status,
                }),
                (0, r.jsx)(j, {
                  value: b.device_screen_time,
                  onChange: _,
                  title: 'Device Screen Time',
                  name: 'device_screen_time',
                  error: w.device_screen_time && g.device_screen_time,
                }),
                (0, r.jsx)(j, {
                  value: b.work_life_balance,
                  onChange: _,
                  type: 'number',
                  title: 'Work Life Balance (0-1)',
                  name: 'work_life_balance',
                  error: w.work_life_balance && g.work_life_balance,
                }),
                (0, r.jsx)(j, {
                  value: b.journaling,
                  onChange: _,
                  title: 'Journaling',
                  name: 'journaling',
                  error: w.journaling && g.journaling,
                }),
                (0, r.jsx)(j, {
                  handleFileChange: (e) => {
                    let { files: t } = e.target;
                    t && (c(t.length), v('photos', t));
                  },
                  noOfFiles: o,
                  type: 'file',
                  title: 'Photos',
                  name: 'photos',
                  error: !1,
                }),
                (0, r.jsx)(x.Z, {
                  type: 'button',
                  className: 'bg-blue dark:bg-darkBlue w-full disabled:bg-disabledBlue',
                  title: 'Save',
                  isLoading: !1,
                }),
                (0, r.jsx)(x.Z, {
                  type: 'submit',
                  className: 'bg-[#F5B11A] w-full disabled:bg-[#f5b01aa7] dark:bg-darkTable',
                  title: 'Save & enter new data',
                  isLoading: a,
                }),
              ],
            })
          );
        },
        N = function () {
          let { savePersonalData: e, isLoading: t, personalData: a } = (0, n.T)(),
            o = (0, l.useMemo)(
              () =>
                Object.entries(a).map((e) => {
                  let [t, a] = e;
                  return { ...a, date: t };
                }),
              [a],
            );
          return (0, r.jsxs)('div', {
            className: 'flex flex-row gap-x-2 w-full overflow-hidden h-full mobile:flex-col-reverse',
            children: [
              (0, r.jsx)(k, { savePersonalData: e, isLoading: t }),
              (0, r.jsxs)('div', {
                className: 'overflow-x-auto w-full h-full mobile:min-h-[350px] max-w-['.concat(i.kk, ']'),
                children: [(0, r.jsx)(u, { data: o, columns: i.qQ }), 0 === o.length && (0, r.jsx)(s.Z, {})],
              }),
            ],
          });
        };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return d;
        },
      });
      var r = a(2265),
        l = a(171),
        i = a(6171),
        n = a(7445),
        s = a(5888),
        o = a(1515),
        c = a(7350),
        u = a(289);
      let d = () => {
        let { isLoading: e, setIsLoading: t } = (0, n.r)(),
          { personalData: a, setPersonalData: d, gData: m, rData: p, cData: x, screenData: f } = (0, s.h)(),
          { getAllConsentData: h, gTableColumns: _, updateMyGData: b, getAllPersonalData: w } = (0, u.q)(),
          g = (0, r.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await i.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, o.Z4)(e),
                  { data: r } = await i.h.post('api/personal_data_consents_rewards', a),
                  l = (0, o.uR)({ tableName: c.me.PData, data: r.data });
                d(l), await b(), await h(), await w;
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, d, b, h, w],
          ),
          v = (0, r.useCallback)(
            async (e) => {
              let { id: a, payload: r } = e;
              try {
                t(!0),
                  await i.h.patch('api/user_consents_rewards/'.concat(a, '/'), r),
                  await h(),
                  await b(),
                  l.toast.success('Consent updated');
              } catch (e) {
                l.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, h, b],
          );
        return {
          savePersonalData: g,
          isLoading: e,
          personalData: a,
          updateConsentRewards: v,
          gData: m,
          rData: p,
          cData: x,
          screenData: f,
          gTableColumns: _,
        };
      };
    },
    5979: function (e, t, a) {
      'use strict';
      a.d(t, {
        M9: function () {
          return c;
        },
        fb: function () {
          return s;
        },
        gf: function () {
          return o;
        },
        nN: function () {
          return l;
        },
        wD: function () {
          return i;
        },
        y1: function () {
          return n;
        },
      });
      var r = a(5691);
      let l = (0, r.Ry)({
          firstName: (0, r.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, r.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)(),
          username: (0, r.Z_)(),
          phone: (0, r.nK)().test(
            'is-phone-number',
            'Invalid phone number',
            (e) => null === e || 'number' == typeof e || 'string' == typeof e,
          ),
          totalRewards: (0, r.Rx)(),
          accountNo: (0, r.Z_)(),
          accountTitle: (0, r.Z_)(),
          bankName: (0, r.Z_)(),
        }),
        i = (0, r.Ry)({
          date: (0, r.Z_)(),
          high_temperature: (0, r.Rx)().required('High Temperature is required'),
          low_temperature: (0, r.Rx)().required('Low Temperature is required'),
          emotional_list: (0, r.IX)()
            .of((0, r.Z_)().required('Emotion List cannot be empty'))
            .min(1, 'At least one emotion is required'),
          emotional_overall: (0, r.Z_)().required('Overall emotion is required'),
          weather: (0, r.Z_)(),
          relative_finance_status: (0, r.Z_)().required(),
          exercise_time: (0, r.Rx)(),
          photos: (0, r.nK)(),
          health_overall: (0, r.Z_)(),
          any_social_life: (0, r.Z_)().required(),
          social_life_list: (0, r.IX)().of((0, r.Z_)()),
          weight: (0, r.Rx)(),
          family_status: (0, r.Z_)(),
          device_screen_time: (0, r.Z_)(),
          work_life_balance: (0, r.Rx)(),
          journaling: (0, r.Z_)(),
        }),
        n = (0, r.Ry)({
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)().required('Password is required'),
        }),
        s = (0, r.Ry)({
          firstName: (0, r.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, r.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, r.Z_)().email().required('Email is required'),
          password: (0, r.Z_)().min(5, 'Password must be 5 characters long').required('Password is required'),
          termsConditions: (0, r.O7)()
            .test('is-true', 'You must accept the terms and conditions.', (e) => !0 === e)
            .required('Please accept the Terms and Conditions in order to proceed'),
          privacyPolicy: (0, r.O7)().when('termsConditions', {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept privacy and policy.'),
          }),
          cookiePolicy: (0, r.O7)().when(['privacyPolicy'], {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept cookie policy.'),
          }),
        }),
        o = (0, r.Ry)({ email: (0, r.Z_)().email().required('Email is required') }),
        c = (0, r.Ry)({
          token: (0, r.Z_)().required('Token cannot be empty'),
          password: (0, r.Z_)().required('Password is required'),
          confirm_password: (0, r.Z_)()
            .oneOf([(0, r.iH)('password'), ''], 'Password must match')
            .required('Confirm Password is required'),
        });
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 842, 10, 442, 289, 971, 596, 744], function () {
      return e((e.s = 1681));
    }),
      (_N_E = e.O());
  },
]);