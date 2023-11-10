(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    1681: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 5405));
    },
    446: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var n = a(3427),
        s = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: r, isLoading: i = !1, icon: o, className: c = '', style: u } = e;
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
                children: (0, l.jsx)(n.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            i ? (0, l.jsx)(s.Z, { style: { color: '#fff', margin: '0 auto' } }) : r,
          ],
        });
      };
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(7437),
        n = a(2265),
        s = a(9907),
        r = a(6421),
        i = a(1846),
        o = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, s.i)(),
          [u, d] = (0, n.useState)(!1),
          m = (0, n.useRef)(null);
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
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => d(!u),
                    type: 'button',
                    src: r.tp,
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
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => d(!u),
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
        r = a(6421);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: i } = e,
          o = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            i && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [i]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !i && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
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
    9109: function (e, t, a) {
      'use strict';
      var l = a(7437),
        n = a(2265),
        s = a(1872),
        r = a(6421),
        i = a(1515),
        o = a(1846),
        c = a(3427);
      t.Z = function (e) {
        let { className: t, options: a, style: u, value: d, onClick: m } = e,
          [p, f] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          x = () => {
            f(!p);
          };
        return (
          (0, o.O)(h, () => {
            f(!1);
          }),
          (0, l.jsxs)('div', {
            ref: h,
            style: u,
            className: [
              'relative bg-chat py-[10px] dark:bg-darkChat dark:text-main px-4 '.concat(
                p ? 'rounded-md rounded-b-none' : 'rounded-md',
                ' w-full',
              ),
              t,
            ].join(' '),
            children: [
              (0, l.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: x,
                onKeyDown: x,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, l.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, i.kC)(d),
                  }),
                  (0, l.jsx)(c.Z, {
                    src: r.x7,
                    alt: 'dropdown-icon',
                    className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                      p ? 'rotate-180 ' : 'rotate-0',
                    ),
                  }),
                ],
              }),
              p &&
                (0, l.jsx)('ul', {
                  className: 'list-none rounded-b-md absolute bg-chat dark:bg-darkChat w-full top-[44px] left-0 z-10',
                  children: a
                    .filter((e) => e.value !== d)
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
                              m(e.value), x();
                            },
                            onKeyDown: () => {
                              m(e.value), x();
                            },
                            children: (0, i.kC)(e.value),
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
    5405: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var l = a(7437),
        n = a(2265),
        s = a(9611),
        r = a(6571),
        i = a(4118),
        o = a(4010),
        c = a(3427),
        u = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: s,
              getTableBodyProps: r,
              headerGroups: i,
              rows: u,
              prepareRow: d,
            } = (0, o.useTable)({ columns: t, data: a });
          return (0, l.jsxs)('table', {
            ...s(),
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
                ...r(),
                children: u.map(
                  (e) => (
                    d(e),
                    (0, n.createElement)(
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
        v = a(6421),
        _ = a(9109),
        g = function (e) {
          let { onChange: t, noOfFiles: a } = e;
          return (0, l.jsxs)('div', {
            className:
              'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
            children: [
              (0, l.jsx)(c.Z, { src: v.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px] dark:invert' }),
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
        w = function (e) {
          let {
              name: t,
              value: a,
              onChange: s,
              title: r,
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
              selectOptions: w,
              onSelectOption: y,
            } = e,
            [k, j] = (0, n.useState)(!1);
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
                    src: v.x7,
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
                        children: r,
                      }),
                      !k &&
                        !d &&
                        'file' !== i &&
                        !x &&
                        (0, l.jsx)('input', {
                          autoComplete: 'off',
                          placeholder: o,
                          onChange: s,
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
                        (0, l.jsx)(_.Z, {
                          options: w,
                          className: 'w-auto ',
                          value: null == a ? void 0 : a.toString(),
                          onClick: y,
                        }),
                      !k && !d && 'file' === i && !x && (0, l.jsx)(g, { onChange: f, noOfFiles: null != h ? h : 0 }),
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
                                  onChange: s,
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
                                  src: v.PD,
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
        y = function (e) {
          let { savePersonalData: t, isLoading: a } = e,
            [r, i] = (0, n.useState)({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }),
            [o, c] = (0, n.useState)(0),
            { weather: u } = (0, h.I)(),
            [x, b] = (0, n.useState)('Save'),
            {
              handleSubmit: v,
              handleChange: _,
              values: g,
              touched: y,
              errors: k,
              setFieldValue: j,
            } = (0, d.TA)({
              initialValues: {
                ...s.sw,
                high_temperature: u ? u.highestTemperature : 0,
                low_temperature: u ? u.lowestTemperature : 0,
              },
              validationSchema: p.wD,
              onSubmit: async (e, a) => {
                let { resetForm: l, setSubmitting: n } = a;
                t(e),
                  'SaveEnter' === x &&
                    (l({}), i({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }), c(0)),
                  n(!1);
              },
            }),
            C = (0, n.useCallback)((e) => {
              b(e);
            }, []);
          return (
            (0, n.useEffect)(() => {
              let e = setTimeout(() => {
                j('emotional_list', Object.values(r.emotionList)),
                  j('social_life_list', Object.values(r.socialLifeList));
              }, 400);
              return () => clearTimeout(e);
            }, [r, j]),
            (0, l.jsxs)('form', {
              className:
                'flex flex-col gap-y-3 w-full overflow-y-auto max-w-[377px] bg-side dark:bg-dark rounded-md pl-4 pr-6 py-6 mobile:max-w-full mobile: dark:text-main',
              noValidate: !0,
              onSubmit: v,
              children: [
                (0, l.jsx)(w, {
                  value: g.date,
                  type: 'date',
                  onChange: _,
                  title: 'Date',
                  name: 'date',
                  error: y.date && k.date,
                }),
                (0, l.jsx)(w, {
                  value: g.high_temperature,
                  type: 'number',
                  onChange: _,
                  title: 'High Temperature (F)',
                  name: 'high_temperature',
                  error: y.high_temperature && k.high_temperature,
                }),
                (0, l.jsx)(w, {
                  value: g.low_temperature,
                  type: 'number',
                  onChange: _,
                  title: 'Low Temperature (F)',
                  name: 'low_temperature',
                  error: y.low_temperature && k.low_temperature,
                }),
                (0, l.jsx)(w, {
                  value: g.weather,
                  onChange: _,
                  title: 'Weather Type',
                  name: 'weather',
                  error: y.weather && k.weather,
                }),
                (0, l.jsx)(w, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    i((e) => ({ ...e, emotionList: { ...e.emotionList, [t]: a } }));
                  },
                  title: 'Emotion List',
                  fields: r.emotionList,
                  addNewField: () => {
                    i((e) => ({ ...e, emotionList: { ...e.emotionList, [(0, m.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: y.emotional_list && k.emotional_list,
                }),
                (0, l.jsx)(w, {
                  value: g.emotional_overall,
                  onChange: _,
                  title: 'Emotion Overall',
                  name: 'emotional_overall',
                  error: y.emotional_overall && k.emotional_overall,
                }),
                (0, l.jsx)(w, {
                  value: g.relative_finance_status,
                  onChange: _,
                  title: 'Relative Finance Status',
                  name: 'relative_finance_status',
                  error: y.relative_finance_status && k.relative_finance_status,
                }),
                (0, l.jsx)(w, {
                  value: g.exercise_time,
                  onChange: _,
                  type: 'number',
                  title: 'Exercise Total Time (min)',
                  name: 'exercise_time',
                  error: y.exercise_time && k.exercise_time,
                }),
                (0, l.jsx)(w, {
                  value: g.health_overall,
                  onChange: _,
                  title: 'Health Overall',
                  name: 'health_overall',
                  error: y.health_overall && k.health_overall,
                }),
                (0, l.jsx)(w, {
                  value: g.any_social_life,
                  isSelectInput: !0,
                  onSelectOption: (e) => {
                    j('any_social_life', e);
                  },
                  selectOptions: s.XZ,
                  title: 'Any Social Life?',
                  error: y.any_social_life && k.any_social_life,
                }),
                (0, l.jsx)(w, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    i((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [t]: a } }));
                  },
                  title: 'Social Life Activities',
                  fields: r.socialLifeList,
                  addNewField: () => {
                    i((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [(0, m.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: y.social_life_list && k.social_life_list,
                }),
                (0, l.jsx)(w, {
                  value: g.weight,
                  onChange: _,
                  type: 'number',
                  title: 'Weight (Pounds)',
                  name: 'weight',
                  error: y.weight && k.weight,
                }),
                (0, l.jsx)(w, {
                  value: g.family_status,
                  onChange: _,
                  title: 'Family Status',
                  name: 'family_status',
                  error: y.family_status && k.family_status,
                }),
                (0, l.jsx)(w, {
                  value: g.device_screen_time,
                  onChange: _,
                  title: 'Device Screen Time',
                  name: 'device_screen_time',
                  error: y.device_screen_time && k.device_screen_time,
                }),
                (0, l.jsx)(w, {
                  value: g.work_life_balance,
                  onChange: _,
                  type: 'number',
                  title: 'Work Life Balance (0-10)',
                  name: 'work_life_balance',
                  error: y.work_life_balance && k.work_life_balance,
                }),
                (0, l.jsx)(w, {
                  value: g.journaling,
                  onChange: _,
                  title: 'Journaling',
                  name: 'journaling',
                  error: y.journaling && k.journaling,
                }),
                (0, l.jsx)(w, {
                  handleFileChange: (e) => {
                    let { files: t } = e.target;
                    t && (c(t.length), j('photos', t));
                  },
                  noOfFiles: o,
                  type: 'file',
                  title: 'Photos',
                  name: 'photos',
                  error: !1,
                }),
                (0, l.jsx)(f.Z, {
                  type: 'submit',
                  value: 'Save',
                  className: 'bg-blue dark:bg-darkBlue w-full disabled:bg-disabledBlue',
                  title: 'Save',
                  isLoading: a,
                  onClick: () => C('Save'),
                }),
                (0, l.jsx)(f.Z, {
                  type: 'submit',
                  value: 'SaveEnter',
                  className: 'bg-[#F5B11A] w-full disabled:bg-[#f5b01aa7] dark:bg-darkTable',
                  title: 'Save & Enter New Data',
                  onClick: () => C('SaveEnter'),
                  isLoading: a,
                }),
              ],
            })
          );
        },
        k = function () {
          let { savePersonalData: e, isLoading: t, personalData: a } = (0, r.T)(),
            o = (0, n.useMemo)(
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
              (0, l.jsx)(y, { savePersonalData: e, isLoading: t }),
              (0, l.jsxs)('div', {
                className: 'overflow-x-auto w-full h-full mobile:min-h-[350px] max-w-['.concat(s.kk, ']'),
                children: [(0, l.jsx)(u, { data: o, columns: s.qQ }), 0 === o.length && (0, l.jsx)(i.Z, {})],
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
        n = a(2265),
        s = a(2164),
        r = a(5888),
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
          a = (0, n.useCallback)(
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
                let n = { lowestTemperature: l.main.temp_min, highestTemperature: l.main.temp_max };
                e(n);
              } catch (e) {}
            },
            [e],
          ),
          l = (0, n.useCallback)(async () => {}, []);
        return (
          (0, n.useEffect)(() => {
            t && m({ successCallback: a, errorCallback: l }),
              setInterval(() => {
                m({ successCallback: a, errorCallback: l });
              }, 36e5);
          }, [l, a, t]),
          { getCurrentLocationWeather: a }
        );
      };
      var h = a(7999),
        x = a(346),
        b = a(9611);
      let v = (0, n.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        _ = () => (0, n.useContext)(v);
      var g = function (e) {
        let { children: t } = e,
          { setPersonalData: a, setGData: d, setRData: m, setCData: p, setScreenData: _, setCompData: g } = (0, r.h)(),
          { fetchChatHistory: w, fetchRecentChats: y } = (0, h.L)(),
          [k, j] = (0, n.useState)([]),
          { user: C } = (0, o.a)(),
          { logoutUser: N } = (0, x.a)();
        f();
        let Z = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/personal_data_consents_rewards'),
                t = (0, c.uR)({ tableName: u.me.PData, data: e.data });
              a(t);
            } catch (a) {
              var e, t;
              a instanceof s.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                N();
            }
          }, [a, N, C]),
          L = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/user_consents_rewards'),
                t = (0, c.uR)({ tableName: u.me.RData, data: e.data }),
                a = (0, c.uR)({ tableName: u.me.CData, data: e.data });
              m(t), p(a);
            } catch (a) {
              var e, t;
              a instanceof s.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                N();
            }
          }, [m, p, N, C]),
          T = (0, n.useCallback)(async () => {
            try {
              if (!C || !C.accountType || C.accountType === b.Z8.PERSONAL) return;
              let { data: e } = await i.h.get('api/company_consents_rewards');
              console.log('data :>> ', e);
              let t = (0, c.uR)({ tableName: u.me.CompData, data: e.data });
              console.log('comp :>> ', t), g(t);
            } catch (a) {
              var e, t;
              a instanceof s.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                N();
            }
          }, [g, N, C]),
          q = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/user_personal_data/last_five'),
                t = (0, c.uR)({ tableName: u.me.GData, data: e });
              if (0 === e.length) return;
              let a = (0, c.Yn)(e);
              j(a), d(t);
            } catch (a) {
              var e, t;
              a instanceof s.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                N();
            }
          }, [d, N, C]),
          S = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await i.h.get('api/file-data/'),
                t = (0, c.Xe)(e.data);
              _(t);
            } catch (a) {
              var e, t;
              a instanceof s.d7 &&
                ((null === (e = a.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (t = a.response) || void 0 === t ? void 0 : t.data.msg) === 'Token has expired') &&
                C &&
                N();
            }
          }, [_, N, C]),
          R = (0, n.useCallback)(() => {
            Z(), q(), w(), y(), L(), S(), T();
          }, [Z, q, L, w, S, y, T]),
          P = (0, n.useMemo)(
            () => ({
              gTableColumns: k,
              getAllConsentData: L,
              updateMyGData: q,
              getAllPersonalData: Z,
              getAllCompanyConsentData: T,
            }),
            [k, L, q, Z, T],
          );
        return (
          (0, n.useEffect)(() => {
            C && R();
          }, [C, R]),
          (0, l.jsx)(v.Provider, { value: P, children: t })
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
        n = a(171),
        s = a(4548),
        r = a.n(s),
        i = a(6171),
        o = a(7445),
        c = a(5888),
        u = a(1515),
        d = a(7350),
        m = a(289);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, o.r)(),
          {
            personalData: a,
            setPersonalData: s,
            gData: p,
            rData: f,
            cData: h,
            screenData: x,
            compData: b,
          } = (0, c.h)(),
          {
            getAllConsentData: v,
            gTableColumns: _,
            updateMyGData: g,
            getAllPersonalData: w,
            getAllCompanyConsentData: y,
          } = (0, m.q)(),
          k = (0, l.useCallback)(
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
                  n = (0, u.uR)({ tableName: d.me.PData, data: l.data });
                s(n), await g(), await v(), await w();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, s, g, v, w],
          ),
          j = (0, l.useCallback)(
            async (e) => {
              let { id: a, payload: l } = e;
              try {
                t(!0),
                  await i.h.patch('api/user_consents_rewards/'.concat(a, '/'), l),
                  await v(),
                  await g(),
                  n.toast.success('Consent updated');
              } catch (e) {
                n.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, v, g],
          ),
          C = (0, l.useCallback)(
            async (e) => {
              try {
                t(!0), await i.h.post('api/company_consents_rewards', e), n.toast.success('Consent updated'), y();
              } catch (e) {
                n.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, y],
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
          savePersonalData: k,
          isLoading: e,
          personalData: a,
          updateConsentRewards: j,
          savePersonalDataTemporarily: N,
          updateCompanyConsentRewards: C,
          gData: p,
          rData: f,
          cData: h,
          screenData: x,
          gTableColumns: _,
          compData: b,
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
          return n;
        },
        wD: function () {
          return s;
        },
        y1: function () {
          return r;
        },
      });
      var l = a(5691);
      let n = (0, l.Ry)({
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
        s = (0, l.Ry)({
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
        r = (0, l.Ry)({
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().required('Password is required'),
        }),
        i = (0, l.Ry)({
          firstName: (0, l.Z_)().min(2, 'First Name is too short').required('First Name is required'),
          lastName: (0, l.Z_)().min(2, 'Last Name is too short').required('Last Name is required'),
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().min(5, 'Password must be 5 characters long').required('Password is required'),
          accountType: (0, l.Z_)().required('Account type is required'),
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
        n = a(2265),
        s = a(5531),
        r = a(859);
      let i = () => {
        let {
            personalData: e,
            gData: t,
            rData: a,
            cData: i,
            screenData: o,
            compData: c,
          } = (0, l.v9)((e) => e.my_g_data),
          u = (0, s.TL)(),
          d = (0, n.useCallback)(
            (e) => {
              u((0, r.O$)(e));
            },
            [u],
          ),
          m = (0, n.useCallback)(
            (e) => {
              u((0, r.Pn)(e));
            },
            [u],
          ),
          p = (0, n.useCallback)(
            (e) => {
              u((0, r.Jg)(e));
            },
            [u],
          ),
          f = (0, n.useCallback)(
            (e) => {
              u((0, r.py)(e));
            },
            [u],
          ),
          h = (0, n.useCallback)(
            (e) => {
              u((0, r.UD)(e));
            },
            [u],
          ),
          x = (0, n.useCallback)(
            (e) => {
              u((0, r.Y4)(e));
            },
            [u],
          );
        return {
          setPersonalData: d,
          setGData: m,
          setRData: p,
          setCData: f,
          setScreenData: x,
          setCompData: h,
          screenData: o,
          cData: i,
          rData: a,
          personalData: e,
          gData: t,
          compData: c,
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
        n = a(2265),
        s = a(5531),
        r = a(54);
      let i = () => {
        let { weather: e } = (0, l.v9)((e) => e.weather),
          t = (0, s.TL)(),
          a = (0, n.useCallback)(
            (e) => {
              t((0, r._)(e));
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
