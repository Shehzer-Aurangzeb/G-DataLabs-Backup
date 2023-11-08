(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    1681: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 6113));
    },
    446: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var r = a(3427),
        n = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: s, isLoading: i = !1, icon: o, className: c = '', style: u } = e;
        return (0, l.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: t,
          type: a,
          style: u,
          disabled: i,
          children: [
            o &&
              !i &&
              (0, l.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, l.jsx)(r.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            i ? (0, l.jsx)(n.Z, { style: { color: '#fff', margin: '0 auto' } }) : s,
          ],
        });
      };
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        r = a(2265),
        n = a(9907),
        s = a(6791),
        i = a(1846),
        o = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, n.i)(),
          [u, d] = (0, r.useState)(!1),
          m = (0, r.useRef)(null);
        return (
          (0, i.O)(m, () => {
            d(!1);
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              c < 1024 &&
                (0, l.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, l.jsx)(o.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: s.tp,
                  }),
                }),
              (0, l.jsxs)('div', {
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
                    (0, l.jsx)(o.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => d(!u),
                      type: 'button',
                      src: s.tp,
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
        r = a(2265),
        n = a(3427),
        s = a(6791);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: i } = e,
          o = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
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
                src: null != a ? a : s.HB,
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
    6113: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        });
      var l = a(7437),
        r = a(2265),
        n = a(9611),
        s = a(6571),
        i = a(4118),
        o = a(4010),
        c = a(3427),
        u = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: n,
              getTableBodyProps: s,
              headerGroups: i,
              rows: u,
              prepareRow: d,
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
                          'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap',
                        children: e.render('Header'),
                      }),
                    ),
                  }),
                ),
              }),
              (0, l.jsx)('tbody', {
                ...s(),
                children: u.map(
                  (e) => (
                    d(e),
                    (0, r.createElement)(
                      'tr',
                      { ...e.getRowProps(), key: e.id },
                      e.cells.map((t) =>
                        (0, l.jsxs)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black font-sans font-normal text-base mobile:text-sm text-center min-w-[200px] dark:text-main',
                            children: [
                              'photos' === t.column.id &&
                                e.values.photos &&
                                'string' == typeof e.values.photos &&
                                (0, l.jsx)(c.Z, {
                                  src: e.values.photos,
                                  alt: 'image',
                                  className: 'w-[550px] h-[250px]',
                                }),
                              'photos' === t.column.id &&
                                e.values.photos &&
                                'object' == typeof e.values.photos &&
                                e.values.photos.map((e) => {
                                  let { file_url: t } = e;
                                  return (0, l.jsx)(c.Z, {
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
        f = a(446),
        h = a(1799),
        x = a(6691),
        b = a.n(x),
        _ = a(6791),
        g = a(1515),
        v = a(1846),
        w = function (e) {
          let { className: t, options: a, style: n, value: s, onClick: i } = e,
            [o, u] = (0, r.useState)(!1),
            d = (0, r.useRef)(null),
            p = () => {
              u(!o);
            };
          return (
            (0, v.O)(d, () => {
              u(!1);
            }),
            (0, l.jsxs)('div', {
              ref: d,
              style: n,
              className: [
                'relative bg-chat py-[10px] dark:bg-darkChat dark:text-main px-4 '.concat(
                  o ? 'rounded-md rounded-b-none' : 'rounded-md',
                  ' w-full',
                ),
                t,
              ].join(' '),
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex w-full justify-between items-center',
                  onClick: p,
                  onKeyDown: p,
                  role: 'button',
                  tabIndex: 0,
                  children: [
                    (0, l.jsx)('label', {
                      className:
                        'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                      children: (0, g.kC)(s),
                    }),
                    (0, l.jsx)(c.Z, {
                      src: _.x7,
                      alt: 'dropdown-icon',
                      className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                        o ? 'rotate-180 ' : 'rotate-0',
                      ),
                    }),
                  ],
                }),
                o &&
                  (0, l.jsx)('ul', {
                    className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                    children: a
                      .filter((e) => e.value !== s)
                      .map((e) =>
                        (0, l.jsx)(
                          'li',
                          {
                            children: (0, l.jsx)('div', {
                              tabIndex: 0,
                              className:
                                'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 py-[10px]',
                              role: 'button',
                              onClick: () => {
                                i(e.value), p();
                              },
                              onKeyDown: () => {
                                i(e.value), p();
                              },
                              children: (0, g.kC)(e.value),
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
          return (0, l.jsxs)('div', {
            className:
              'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
            children: [
              (0, l.jsx)(c.Z, { src: _.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px] dark:invert' }),
              (0, l.jsx)('p', {
                className: 'text-black dark:text-main text-xl font-sans font-normal ',
                children: a > 0 ? ''.concat(a, ' files selected') : 'Select files',
              }),
              (0, l.jsx)('input', {
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
        k = function (e) {
          let {
              name: t,
              value: a,
              onChange: n,
              title: s,
              type: i,
              placeholder: o,
              readOnly: c,
              error: u,
              isAddingFieldEnabled: d = !1,
              fields: m,
              addNewField: p,
              handleFileChange: f,
              noOfFiles: h,
              isSelectInput: x = !1,
              selectOptions: g,
              onSelectOption: v,
            } = e,
            [k, j] = (0, r.useState)(!1);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)('div', {
                className:
                  'flex flex-row items-start gap-x-2 pt-3 pl-2 pr-3 w-full tablet:gap-x-0 mobile:gap-x-1 '.concat(
                    k ? 'pb-3' : 'pb-5',
                    ' rounded-xl bg-light dark:bg-main transition duration-300',
                  ),
                children: [
                  (0, l.jsx)(b(), {
                    src: _.x7,
                    alt: 'arrow-icon',
                    height: 24,
                    width: 24,
                    className: 'transition duration-300 '.concat(k && 'rotate-180 ', ' dark:invert'),
                    onClick: () => {
                      j(!k);
                    },
                  }),
                  (0, l.jsxs)('header', {
                    className: 'flex flex-col gap-y-[18px] w-full relative',
                    children: [
                      (0, l.jsx)('label', {
                        htmlFor: t,
                        className: 'text-primary font-sans font-medium text-xl  dark:text-main',
                        children: s,
                      }),
                      !k &&
                        !d &&
                        'file' !== i &&
                        !x &&
                        (0, l.jsx)('input', {
                          autoComplete: 'off',
                          placeholder: o,
                          onChange: n,
                          name: t,
                          readOnly: c,
                          id: t,
                          type: i || 'text',
                          value: a,
                          className:
                            'bg-chat dark:bg-darkChat py-[10px] px-4 rounded-md text-primary dark:text-main w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none tablet:px-2 mobile:px-1',
                        }),
                      !k &&
                        !d &&
                        'file' !== i &&
                        x &&
                        (0, l.jsx)(w, {
                          options: g,
                          className: 'w-auto ',
                          value: null == a ? void 0 : a.toString(),
                          onClick: v,
                        }),
                      !k && !d && 'file' === i && !x && (0, l.jsx)(y, { onChange: f, noOfFiles: null != h ? h : 0 }),
                      !k &&
                        d &&
                        !x &&
                        m &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            Object.entries(m).map((e) => {
                              let [t, a] = e;
                              return (0, l.jsx)(
                                'input',
                                {
                                  autoComplete: 'off',
                                  placeholder: o,
                                  onChange: n,
                                  name: t,
                                  readOnly: c,
                                  id: 'emotionList-'.concat(t),
                                  type: i || 'text',
                                  value: a,
                                  className:
                                    'bg-chat dark:bg-darkChat py-[10px] px-4 rounded-md text-primary dark:text-white w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none',
                                },
                                'emotionList-'.concat(t),
                              );
                            }),
                            (0, l.jsxs)('button', {
                              className:
                                'flex flex-row items-center gap-x-2 outline-none bg-none dark:text-main focus:outline-none font-sans font-medium text-primary text-sm',
                              type: 'button',
                              onClick: p,
                              children: [
                                (0, l.jsx)(b(), {
                                  src: _.PD,
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
              u && (0, l.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: u }),
            ],
          });
        },
        j = function (e) {
          let { savePersonalData: t, isLoading: a, saveDataTemporarily: s } = e,
            [i, o] = (0, r.useState)({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }),
            [c, u] = (0, r.useState)(0),
            { weather: x } = (0, h.I)(),
            {
              handleSubmit: b,
              handleChange: _,
              values: g,
              touched: v,
              errors: w,
              setFieldValue: y,
            } = (0, d.TA)({
              initialValues: {
                ...n.sw,
                high_temperature: x ? x.highestTemperature : 0,
                low_temperature: x ? x.lowestTemperature : 0,
              },
              validationSchema: p.wD,
              onSubmit: async (e, a) => {
                t(e), a.setSubmitting(!1), a.resetForm();
              },
            });
          return (
            (0, r.useEffect)(() => {
              let e = setTimeout(() => {
                y('emotional_list', Object.values(i.emotionList)),
                  y('social_life_list', Object.values(i.socialLifeList));
              }, 400);
              return () => clearTimeout(e);
            }, [i, y]),
            (0, l.jsxs)('form', {
              className:
                'flex flex-col gap-y-3 w-full overflow-y-auto max-w-[377px] bg-side dark:bg-dark rounded-md pl-4 pr-6 py-6 mobile:max-w-full mobile: dark:text-main',
              noValidate: !0,
              onSubmit: b,
              children: [
                (0, l.jsx)(k, {
                  value: g.date,
                  type: 'date',
                  onChange: _,
                  title: 'Date',
                  name: 'date',
                  error: v.date && w.date,
                }),
                (0, l.jsx)(k, {
                  value: g.high_temperature,
                  type: 'number',
                  onChange: _,
                  title: 'High Temperature (F)',
                  name: 'high_temperature',
                  error: v.high_temperature && w.high_temperature,
                }),
                (0, l.jsx)(k, {
                  value: g.low_temperature,
                  type: 'number',
                  onChange: _,
                  title: 'Low Temperature (F)',
                  name: 'low_temperature',
                  error: v.low_temperature && w.low_temperature,
                }),
                (0, l.jsx)(k, {
                  value: g.weather,
                  onChange: _,
                  title: 'Weather Type',
                  name: 'weather',
                  error: v.weather && w.weather,
                }),
                (0, l.jsx)(k, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    o((e) => ({ ...e, emotionList: { ...e.emotionList, [t]: a } }));
                  },
                  title: 'Emotion List',
                  fields: i.emotionList,
                  addNewField: () => {
                    o((e) => ({ ...e, emotionList: { ...e.emotionList, [(0, m.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: v.emotional_list && w.emotional_list,
                }),
                (0, l.jsx)(k, {
                  value: g.emotional_overall,
                  onChange: _,
                  title: 'Emotion Overall',
                  name: 'emotional_overall',
                  error: v.emotional_overall && w.emotional_overall,
                }),
                (0, l.jsx)(k, {
                  value: g.relative_finance_status,
                  onChange: _,
                  title: 'Relative Finance Status',
                  name: 'relative_finance_status',
                  error: v.relative_finance_status && w.relative_finance_status,
                }),
                (0, l.jsx)(k, {
                  value: g.exercise_time,
                  onChange: _,
                  type: 'number',
                  title: 'Exercise Total Time (min)',
                  name: 'exercise_time',
                  error: v.exercise_time && w.exercise_time,
                }),
                (0, l.jsx)(k, {
                  value: g.health_overall,
                  onChange: _,
                  title: 'Health Overall',
                  name: 'health_overall',
                  error: v.health_overall && w.health_overall,
                }),
                (0, l.jsx)(k, {
                  value: g.any_social_life,
                  isSelectInput: !0,
                  onSelectOption: (e) => {
                    y('any_social_life', e);
                  },
                  selectOptions: n.XZ,
                  title: 'Any Social Life?',
                  error: v.any_social_life && w.any_social_life,
                }),
                (0, l.jsx)(k, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    o((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [t]: a } }));
                  },
                  title: 'Social Life Activities',
                  fields: i.socialLifeList,
                  addNewField: () => {
                    o((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [(0, m.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: v.social_life_list && w.social_life_list,
                }),
                (0, l.jsx)(k, {
                  value: g.weight,
                  onChange: _,
                  type: 'number',
                  title: 'Weight (Pounds)',
                  name: 'weight',
                  error: v.weight && w.weight,
                }),
                (0, l.jsx)(k, {
                  value: g.family_status,
                  onChange: _,
                  title: 'Family Status',
                  name: 'family_status',
                  error: v.family_status && w.family_status,
                }),
                (0, l.jsx)(k, {
                  value: g.device_screen_time,
                  onChange: _,
                  title: 'Device Screen Time',
                  name: 'device_screen_time',
                  error: v.device_screen_time && w.device_screen_time,
                }),
                (0, l.jsx)(k, {
                  value: g.work_life_balance,
                  onChange: _,
                  type: 'number',
                  title: 'Work Life Balance (0-10)',
                  name: 'work_life_balance',
                  error: v.work_life_balance && w.work_life_balance,
                }),
                (0, l.jsx)(k, {
                  value: g.journaling,
                  onChange: _,
                  title: 'Journaling',
                  name: 'journaling',
                  error: v.journaling && w.journaling,
                }),
                (0, l.jsx)(k, {
                  handleFileChange: (e) => {
                    let { files: t } = e.target;
                    t && (u(t.length), y('photos', t));
                  },
                  noOfFiles: c,
                  type: 'file',
                  title: 'Photos',
                  name: 'photos',
                  error: !1,
                }),
                (0, l.jsx)(f.Z, {
                  type: 'button',
                  className: 'bg-blue dark:bg-darkBlue w-full disabled:bg-disabledBlue',
                  title: 'Save',
                  onClick: () => s(g),
                  isLoading: !1,
                }),
                (0, l.jsx)(f.Z, {
                  type: 'submit',
                  className: 'bg-[#F5B11A] w-full disabled:bg-[#f5b01aa7] dark:bg-darkTable',
                  title: 'Save & enter new data',
                  isLoading: a,
                }),
              ],
            })
          );
        },
        C = function () {
          let { savePersonalData: e, isLoading: t, personalData: a, savePersonalDataTemporarily: o } = (0, s.T)(),
            c = (0, r.useMemo)(
              () =>
                Object.entries(a).map((e) => {
                  let [t, a] = e;
                  return { ...a, date: t };
                }),
              [a],
            );
          return (0, l.jsxs)('div', {
            className: 'flex flex-row gap-x-2 w-full overflow-hidden h-full mobile:flex-col-reverse',
            children: [
              (0, l.jsx)(j, { savePersonalData: e, isLoading: t, saveDataTemporarily: o }),
              (0, l.jsxs)('div', {
                className: 'overflow-x-auto w-full h-full mobile:min-h-[350px] max-w-['.concat(n.kk, ']'),
                children: [(0, l.jsx)(u, { data: c, columns: n.qQ }), 0 === c.length && (0, l.jsx)(i.Z, {})],
              }),
            ],
          });
        };
    },
    289: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return g;
        },
        q: function () {
          return _;
        },
      });
      var l = a(7437),
        r = a(2265),
        n = a(2164),
        s = a(5888),
        i = a(6171),
        o = a(6118),
        c = a(1515),
        u = a(7350),
        d = a(9222);
      let m = (e) => {
        let { successCallback: t, errorCallback: a } = e;
        navigator.geolocation.getCurrentPosition(t, a, { enableHighAccuracy: !0 });
      };
      var p = a(1799);
      let f = () => {
        let { setWeather: e } = (0, p.I)(),
          { user: t } = (0, o.a)(),
          a = (0, r.useCallback)(
            async (t) => {
              try {
                let { coords: a } = t,
                  { data: l } = await d.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(a.latitude, '&lon=')
                      .concat(a.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!l.main) return;
                let r = { lowestTemperature: l.main.temp_min, highestTemperature: l.main.temp_max };
                e(r);
              } catch (e) {}
            },
            [e],
          ),
          l = (0, r.useCallback)(async () => {}, []);
        return (
          (0, r.useEffect)(() => {
            t && m({ successCallback: a, errorCallback: l }),
              setInterval(() => {
                m({ successCallback: a, errorCallback: l });
              }, 36e5);
          }, [l, a, t]),
          { getCurrentLocationWeather: a }
        );
      };
      var h = a(7999),
        x = a(346);
      let b = (0, r.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
        }),
        _ = () => (0, r.useContext)(b);
      var g = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: d, setRData: m, setCData: p, setScreenData: _ } = (0, s.h)(),
          { fetchChatHistory: g, fetchRecentChats: v } = (0, h.L)(),
          [w, y] = (0, r.useState)([]),
          { user: k } = (0, o.a)(),
          { logoutUser: j } = (0, x.a)();
        f();
        let C = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/personal_data_consents_rewards'),
                t = (0, c.uR)({ tableName: u.me.PData, data: e.data });
              a(t);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                j();
            }
          }, [a, j, k]),
          N = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/user_consents_rewards'),
                t = (0, c.uR)({ tableName: u.me.RData, data: e.data }),
                a = (0, c.uR)({ tableName: u.me.CData, data: e.data });
              m(t), p(a);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                j();
            }
          }, [m, p, j, k]),
          Z = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/user_personal_data/last_five'),
                t = (0, c.uR)({ tableName: u.me.GData, data: e });
              if (0 === e.length) return;
              let a = (0, c.Yn)(e);
              y(a), d(t);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                j();
            }
          }, [d, j, k]),
          L = (0, r.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/file-data/'),
                t = (0, c.Xe)(e.data);
              _(t);
            } catch (a) {
              var e, t;
              a instanceof n.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                k &&
                j();
            }
          }, [_, j, k]),
          T = (0, r.useCallback)(() => {
            C(), Z(), g(), v(), N(), L();
          }, [C, Z, N, g, L, v]),
          q = (0, r.useMemo)(
            () => ({ gTableColumns: w, getAllConsentData: N, updateMyGData: Z, getAllPersonalData: C }),
            [w, N, Z, C],
          );
        return (
          (0, r.useEffect)(() => {
            k && T();
          }, [k, T]),
          (0, l.jsx)(b.Provider, { value: q, children: t })
        );
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
        r = a(171),
        n = a(4548),
        s = a.n(n),
        i = a(6171),
        o = a(7445),
        c = a(5888),
        u = a(1515),
        d = a(7350),
        m = a(289);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, o.r)(),
          { personalData: a, setPersonalData: n, gData: p, rData: f, cData: h, screenData: x } = (0, c.h)(),
          { getAllConsentData: b, gTableColumns: _, updateMyGData: g, getAllPersonalData: v } = (0, m.q)(),
          w = (0, l.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await i.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, u.Z4)(e),
                  { data: l } = await i.h.post('api/personal_data_consents_rewards', a),
                  r = (0, u.uR)({ tableName: d.me.PData, data: l.data });
                n(r), await g(), await b(), await v();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, n, g, b, v],
          ),
          y = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await i.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await b(),
                  await g(),
                  r.toast.success('Consent updated');
              } catch (e) {
                r.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, b, g],
          ),
          k = (0, l.useCallback)(
            (e) => {
              var t;
              let l = null !== (t = e.date) && void 0 !== t ? t : s()().format('YYYY-MM-DD'),
                r = [];
              for (let t of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  console.log('phot:>> '),
                    r.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...a, [l]: { ...e, photos: [...r] } };
                n(t);
              }, 3e3);
            },
            [a, n],
          );
        return {
          savePersonalData: w,
          isLoading: e,
          personalData: a,
          updateConsentRewards: y,
          savePersonalDataTemporarily: k,
          gData: p,
          rData: f,
          cData: h,
          screenData: x,
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
          return i;
        },
        gf: function () {
          return o;
        },
        nN: function () {
          return r;
        },
        wD: function () {
          return n;
        },
        y1: function () {
          return s;
        },
      });
      var l = a(5691);
      let r = (0, l.Ry)({
          firstName: (0, l.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, l.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)(),
          username: (0, l.Z_)(),
          phone: (0, l.nK)().test(
            'is-phone-number',
            'Invalid phone number',
            (e) => null === e || 'number' == typeof e || 'string' == typeof e,
          ),
          totalRewards: (0, l.Rx)(),
          accountNo: (0, l.Z_)(),
          accountTitle: (0, l.Z_)(),
          bankName: (0, l.Z_)(),
        }),
        n = (0, l.Ry)({
          date: (0, l.Z_)(),
          high_temperature: (0, l.Rx)(),
          low_temperature: (0, l.Rx)(),
          emotional_list: (0, l.IX)().of((0, l.Z_)()),
          emotional_overall: (0, l.Z_)(),
          weather: (0, l.Z_)(),
          relative_finance_status: (0, l.Z_)(),
          exercise_time: (0, l.Rx)(),
          photos: (0, l.nK)(),
          health_overall: (0, l.Z_)(),
          any_social_life: (0, l.Z_)(),
          social_life_list: (0, l.IX)().of((0, l.Z_)()),
          weight: (0, l.Rx)(),
          family_status: (0, l.Z_)(),
          device_screen_time: (0, l.Z_)(),
          work_life_balance: (0, l.Rx)().min(0, 'Value must be at least 0').max(10, 'Value must not exceed 10'),
          journaling: (0, l.Z_)(),
        }),
        s = (0, l.Ry)({
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().required('Password is required'),
        }),
        i = (0, l.Ry)({
          firstName: (0, l.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, l.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().min(5, 'Password must be 5 characters long').required('Password is required'),
          termsConditions: (0, l.O7)()
            .test('is-true', 'You must accept the terms and conditions.', (e) => !0 === e)
            .required('Please accept the Terms and Conditions in order to proceed'),
          privacyPolicy: (0, l.O7)().when('termsConditions', {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept privacy and policy.'),
          }),
          cookiePolicy: (0, l.O7)().when(['privacyPolicy'], {
            is: !0,
            then: (e) => e.oneOf([!0], 'You must accept cookie policy.'),
          }),
        }),
        o = (0, l.Ry)({ email: (0, l.Z_)().email().required('Email is required') }),
        c = (0, l.Ry)({
          token: (0, l.Z_)().required('Token cannot be empty'),
          password: (0, l.Z_)().required('Password is required'),
          confirm_password: (0, l.Z_)()
            .oneOf([(0, l.iH)('password'), ''], 'Password must match')
            .required('Confirm Password is required'),
        });
    },
    5888: function (e, t, a) {
      'use strict';
      a.d(t, {
        h: function () {
          return i;
        },
      });
      var l = a(3198),
        r = a(2265),
        n = a(5531),
        s = a(859);
      let i = () => {
        let { personalData: e, gData: t, rData: a, cData: i, screenData: o } = (0, l.v9)((e) => e.my_g_data),
          c = (0, n.TL)(),
          u = (0, r.useCallback)(
            (e) => {
              c((0, s.O$)(e));
            },
            [c],
          ),
          d = (0, r.useCallback)(
            (e) => {
              c((0, s.Pn)(e));
            },
            [c],
          ),
          m = (0, r.useCallback)(
            (e) => {
              c((0, s.Jg)(e));
            },
            [c],
          ),
          p = (0, r.useCallback)(
            (e) => {
              c((0, s.py)(e));
            },
            [c],
          ),
          f = (0, r.useCallback)(
            (e) => {
              c((0, s.Y4)(e));
            },
            [c],
          );
        return {
          setPersonalData: u,
          setGData: d,
          setRData: m,
          setCData: p,
          setScreenData: f,
          screenData: o,
          cData: i,
          rData: a,
          personalData: e,
          gData: t,
        };
      };
    },
    1799: function (e, t, a) {
      'use strict';
      a.d(t, {
        I: function () {
          return i;
        },
      });
      var l = a(3198),
        r = a(2265),
        n = a(5531),
        s = a(54);
      let i = () => {
        let { weather: e } = (0, l.v9)((e) => e.weather),
          t = (0, n.TL)(),
          a = (0, r.useCallback)(
            (e) => {
              t((0, s._)(e));
            },
            [t],
          );
        return { weather: e, setWeather: a };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 10, 707, 292, 971, 596, 744], function () {
      return e((e.s = 1681));
    }),
      (_N_E = e.O());
  },
]);
