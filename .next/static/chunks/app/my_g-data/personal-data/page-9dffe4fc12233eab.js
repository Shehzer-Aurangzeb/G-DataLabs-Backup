(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    6754: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 1924));
    },
    446: function (e, t, a) {
      'use strict';
      var l = a(7437);
      a(2265);
      var r = a(3427),
        i = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: s, isLoading: n = !1, icon: o, className: c = '', style: d } = e;
        return (0, l.jsxs)('button', {
          className: [
            'text-xl text-center font-sans font-bold text-white py-3 rounded-md relative  disabled:cursor-not-allowed',
            c,
          ].join(' '),
          onClick: t,
          type: a,
          style: d,
          disabled: n,
          children: [
            o &&
              !n &&
              (0, l.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, l.jsx)(r.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            n ? (0, l.jsx)(i.Z, { style: { color: '#fff', margin: '0 auto' } }) : s,
          ],
        });
      };
    },
    4118: function (e, t, a) {
      'use strict';
      var l = a(7437),
        r = a(2265),
        i = a(3427),
        s = a(2854);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: n } = e,
          o = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            n && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [n]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !n && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
            children: [
              (0, l.jsx)(i.Z, {
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
    9109: function (e, t, a) {
      'use strict';
      var l = a(7437),
        r = a(2265),
        i = a(1872),
        s = a(2854),
        n = a(1515),
        o = a(1846),
        c = a(3427);
      t.Z = function (e) {
        let { className: t, options: a, style: d, value: u, onClick: m, increasePadding: x } = e,
          [p, f] = (0, r.useState)(!1),
          h = (0, r.useRef)(null),
          _ = () => {
            f(!p);
          };
        return (
          (0, o.O)(h, () => {
            f(!1);
          }),
          (0, l.jsxs)('div', {
            ref: h,
            style: d,
            className: [
              'relative bg-chat dark:bg-darkChat dark:text-main '
                .concat(null != x ? x : 'py-[10px]', ' px-4 ')
                .concat(p ? 'rounded-md rounded-b-none' : 'rounded-md', ' w-full'),
              t,
            ].join(' '),
            children: [
              (0, l.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: _,
                onKeyDown: _,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, l.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, n.kC)(u),
                  }),
                  (0, l.jsx)(c.Z, {
                    src: s.x7,
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
                    .filter((e) => e.value !== u)
                    .map((e) =>
                      (0, l.jsx)(
                        'li',
                        {
                          children: (0, l.jsx)('div', {
                            tabIndex: 0,
                            className:
                              'cursor-pointer font-sans text-base font-normal text-primary dark:text-main  px-4 '.concat(
                                null != x ? x : 'py-[10px]',
                              ),
                            role: 'button',
                            onClick: () => {
                              m(e.value), _();
                            },
                            onKeyDown: () => {
                              m(e.value), _();
                            },
                            children: (0, n.kC)(e.value),
                          }),
                        },
                        (0, i.Z)(),
                      ),
                    ),
                }),
            ],
          })
        );
      };
    },
    1924: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        });
      var l = a(7437),
        r = a(2265),
        i = a(9611);
      let s = [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        n = {
          date: '',
          high_temperature: 0,
          low_temperature: 0,
          emotional_list: [],
          emotional_overall: '',
          weather: '',
          relative_finance_status: '',
          exercise_time: 0,
          any_social_life: s[0].value,
        },
        o = [
          { Header: 'Date', accessor: 'date' },
          { Header: 'High Temperature', accessor: 'high_temperature' },
          { Header: 'Low Temperature', accessor: 'low_temperature' },
          { Header: 'Weather Type', accessor: 'weather' },
          { Header: 'Emotional List', accessor: 'emotional_list' },
          { Header: 'Emotional Overall', accessor: 'emotional_overall' },
          { Header: 'Relative Finance Status', accessor: 'relative_finance_status' },
          { Header: 'Exercise Total Time', accessor: 'exercise_time' },
          { Header: 'Photos', accessor: 'photos' },
          { Header: 'Health Overall', accessor: 'health_overall' },
          { Header: 'Any Social Life', accessor: 'any_social_life' },
          { Header: 'Social Life List', accessor: 'social_life_list' },
          { Header: 'Weight', accessor: 'weight' },
          { Header: 'Family Status', accessor: 'family_status' },
          { Header: 'Device Screen Time', accessor: 'device_screen_time' },
          { Header: 'Work Life Balance', accessor: 'work_life_balance' },
          { Header: 'Journaling', accessor: 'journaling' },
        ];
      var c = a(6571),
        d = a(4118),
        u = a(4010),
        m = a(3427),
        x = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: i,
              getTableBodyProps: s,
              headerGroups: n,
              rows: o,
              prepareRow: c,
            } = (0, u.useTable)({ columns: t, data: a });
          return (0, l.jsxs)('table', {
            ...i(),
            className: 'w-full',
            children: [
              (0, l.jsx)('thead', {
                children: n.map((e) =>
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
                children: o.map(
                  (e) => (
                    c(e),
                    (0, r.createElement)(
                      'tr',
                      {
                        ...e.getRowProps(),
                        key: e.id,
                        className: 'even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat',
                      },
                      e.cells.map((t) =>
                        (0, l.jsxs)(
                          'td',
                          {
                            ...t.getCellProps(),
                            className:
                              'border border-[#ced4da] py-6 px-7 mobile:p-3 text-black font-sans font-normal text-base mobile:text-sm text-center min-w-[200px] dark:text-main',
                            children: [
                              'photos' === t.column.id &&
                                e.values.photos &&
                                'string' == typeof e.values.photos &&
                                (0, l.jsx)(m.Z, {
                                  src: e.values.photos,
                                  alt: 'image',
                                  className: 'w-[550px] h-[250px]',
                                }),
                              'photos' === t.column.id &&
                                e.values.photos &&
                                'object' == typeof e.values.photos &&
                                e.values.photos.map((e) => {
                                  let { file_url: t } = e;
                                  return (0, l.jsx)(m.Z, {
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
        p = a(6230),
        f = a(1872),
        h = a(5979),
        _ = a(446),
        b = a(1799),
        v = a(6691),
        g = a.n(v),
        w = a(2854),
        y = a(9109),
        j = function (e) {
          let { onChange: t, noOfFiles: a } = e;
          return (0, l.jsxs)('div', {
            className:
              'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
            children: [
              (0, l.jsx)(m.Z, { src: w.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px] dark:invert' }),
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
              onChange: i,
              title: s,
              type: n,
              placeholder: o,
              readOnly: c,
              error: d,
              isAddingFieldEnabled: u = !1,
              fields: m,
              addNewField: x,
              handleFileChange: p,
              noOfFiles: f,
              isSelectInput: h = !1,
              selectOptions: _,
              onSelectOption: b,
            } = e,
            [v, k] = (0, r.useState)(!1);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)('div', {
                className:
                  'flex flex-row items-start gap-x-2 pt-3 pl-2 pr-3 w-full tablet:gap-x-0 mobile:gap-x-1 '.concat(
                    v ? 'pb-3' : 'pb-5',
                    ' rounded-xl bg-light dark:bg-main transition duration-300',
                  ),
                children: [
                  (0, l.jsx)(g(), {
                    src: w.x7,
                    alt: 'arrow-icon',
                    height: 24,
                    width: 24,
                    className: 'transition duration-300 '.concat(v && 'rotate-180 ', ' dark:invert'),
                    onClick: () => {
                      k(!v);
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
                      !v &&
                        !u &&
                        'file' !== n &&
                        !h &&
                        (0, l.jsx)('input', {
                          autoComplete: 'off',
                          placeholder: o,
                          onChange: i,
                          name: t,
                          readOnly: c,
                          id: t,
                          type: n || 'text',
                          value: a,
                          className:
                            'bg-chat dark:bg-darkChat py-[10px] px-4 rounded-md text-primary dark:text-main w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none tablet:px-2 mobile:px-1',
                        }),
                      !v &&
                        !u &&
                        'file' !== n &&
                        h &&
                        (0, l.jsx)(y.Z, {
                          options: _,
                          className: 'w-auto ',
                          value: null == a ? void 0 : a.toString(),
                          onClick: b,
                        }),
                      !v && !u && 'file' === n && !h && (0, l.jsx)(j, { onChange: p, noOfFiles: null != f ? f : 0 }),
                      !v &&
                        u &&
                        !h &&
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
                                  onChange: i,
                                  name: t,
                                  readOnly: c,
                                  id: 'emotionList-'.concat(t),
                                  type: n || 'text',
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
                              onClick: x,
                              children: [
                                (0, l.jsx)(g(), {
                                  src: w.PD,
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
              d && (0, l.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: d }),
            ],
          });
        },
        N = function (e) {
          let { savePersonalData: t, isLoading: a } = e,
            [i, o] = (0, r.useState)({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }),
            [c, d] = (0, r.useState)(0),
            { weather: u } = (0, b.I)(),
            [m, x] = (0, r.useState)('Save'),
            {
              handleSubmit: v,
              handleChange: g,
              values: w,
              touched: y,
              errors: j,
              setFieldValue: N,
            } = (0, p.TA)({
              initialValues: {
                ...n,
                high_temperature: u ? u.highestTemperature : 0,
                low_temperature: u ? u.lowestTemperature : 0,
              },
              validationSchema: h.wD,
              onSubmit: async (e, a) => {
                let { resetForm: l, setSubmitting: r } = a;
                t(e),
                  'SaveEnter' === m &&
                    (l({}), o({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }), d(0)),
                  r(!1);
              },
            }),
            C = (0, r.useCallback)((e) => {
              x(e);
            }, []);
          return (
            (0, r.useEffect)(() => {
              let e = setTimeout(() => {
                N('emotional_list', Object.values(i.emotionList)),
                  N('social_life_list', Object.values(i.socialLifeList));
              }, 400);
              return () => clearTimeout(e);
            }, [i, N]),
            (0, l.jsxs)('form', {
              className:
                'flex flex-col gap-y-3 w-full overflow-y-auto max-w-[377px] bg-side dark:bg-dark rounded-md pl-4 pr-6 py-6 mobile:max-w-full mobile: dark:text-main',
              noValidate: !0,
              onSubmit: v,
              children: [
                (0, l.jsx)(k, {
                  value: w.date,
                  type: 'date',
                  onChange: g,
                  title: 'Date',
                  name: 'date',
                  error: y.date && j.date,
                }),
                (0, l.jsx)(k, {
                  value: w.high_temperature,
                  type: 'number',
                  onChange: g,
                  title: 'High Temperature (F)',
                  name: 'high_temperature',
                  error: y.high_temperature && j.high_temperature,
                }),
                (0, l.jsx)(k, {
                  value: w.low_temperature,
                  type: 'number',
                  onChange: g,
                  title: 'Low Temperature (F)',
                  name: 'low_temperature',
                  error: y.low_temperature && j.low_temperature,
                }),
                (0, l.jsx)(k, {
                  value: w.weather,
                  onChange: g,
                  title: 'Weather Type',
                  name: 'weather',
                  error: y.weather && j.weather,
                }),
                (0, l.jsx)(k, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    o((e) => ({ ...e, emotionList: { ...e.emotionList, [t]: a } }));
                  },
                  title: 'Emotion List',
                  fields: i.emotionList,
                  addNewField: () => {
                    o((e) => ({ ...e, emotionList: { ...e.emotionList, [(0, f.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: y.emotional_list && j.emotional_list,
                }),
                (0, l.jsx)(k, {
                  value: w.emotional_overall,
                  onChange: g,
                  title: 'Emotion Overall',
                  name: 'emotional_overall',
                  error: y.emotional_overall && j.emotional_overall,
                }),
                (0, l.jsx)(k, {
                  value: w.relative_finance_status,
                  onChange: g,
                  title: 'Relative Finance Status',
                  name: 'relative_finance_status',
                  error: y.relative_finance_status && j.relative_finance_status,
                }),
                (0, l.jsx)(k, {
                  value: w.exercise_time,
                  onChange: g,
                  type: 'number',
                  title: 'Exercise Total Time (min)',
                  name: 'exercise_time',
                  error: y.exercise_time && j.exercise_time,
                }),
                (0, l.jsx)(k, {
                  value: w.health_overall,
                  onChange: g,
                  title: 'Health Overall',
                  name: 'health_overall',
                  error: y.health_overall && j.health_overall,
                }),
                (0, l.jsx)(k, {
                  value: w.any_social_life,
                  isSelectInput: !0,
                  onSelectOption: (e) => {
                    N('any_social_life', e);
                  },
                  selectOptions: s,
                  title: 'Any Social Life?',
                  error: y.any_social_life && j.any_social_life,
                }),
                (0, l.jsx)(k, {
                  onChange: (e) => {
                    let { name: t, value: a } = e.target;
                    o((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [t]: a } }));
                  },
                  title: 'Social Life Activities',
                  fields: i.socialLifeList,
                  addNewField: () => {
                    o((e) => ({ ...e, socialLifeList: { ...e.socialLifeList, [(0, f.Z)()]: '' } }));
                  },
                  isAddingFieldEnabled: !0,
                  error: y.social_life_list && j.social_life_list,
                }),
                (0, l.jsx)(k, {
                  value: w.weight,
                  onChange: g,
                  type: 'number',
                  title: 'Weight (Pounds)',
                  name: 'weight',
                  error: y.weight && j.weight,
                }),
                (0, l.jsx)(k, {
                  value: w.family_status,
                  onChange: g,
                  title: 'Family Status',
                  name: 'family_status',
                  error: y.family_status && j.family_status,
                }),
                (0, l.jsx)(k, {
                  value: w.device_screen_time,
                  onChange: g,
                  title: 'Device Screen Time',
                  name: 'device_screen_time',
                  error: y.device_screen_time && j.device_screen_time,
                }),
                (0, l.jsx)(k, {
                  value: w.work_life_balance,
                  onChange: g,
                  type: 'number',
                  title: 'Work Life Balance (0-10)',
                  name: 'work_life_balance',
                  error: y.work_life_balance && j.work_life_balance,
                }),
                (0, l.jsx)(k, {
                  value: w.journaling,
                  onChange: g,
                  title: 'Journaling',
                  name: 'journaling',
                  error: y.journaling && j.journaling,
                }),
                (0, l.jsx)(k, {
                  handleFileChange: (e) => {
                    let { files: t } = e.target;
                    t && (d(t.length), N('photos', t));
                  },
                  noOfFiles: c,
                  type: 'file',
                  title: 'Photos',
                  name: 'photos',
                  error: !1,
                }),
                (0, l.jsx)(_.Z, {
                  type: 'submit',
                  value: 'Save',
                  className: 'bg-blue dark:bg-darkBlue w-full disabled:bg-disabledBlue',
                  title: 'Save',
                  isLoading: a,
                  onClick: () => C('Save'),
                }),
                (0, l.jsx)(_.Z, {
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
        C = function () {
          let { savePersonalData: e, isLoading: t, personalData: a } = (0, c.T)(),
            s = (0, r.useMemo)(
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
              (0, l.jsx)(N, { savePersonalData: e, isLoading: t }),
              (0, l.jsxs)('div', {
                className: 'overflow-x-auto w-full h-full mobile:min-h-[350px] max-w-['.concat(i.kk, ']'),
                children: [(0, l.jsx)(x, { data: s, columns: o }), 0 === s.length && (0, l.jsx)(d.Z, {})],
              }),
            ],
          });
        };
    },
    5979: function (e, t, a) {
      'use strict';
      a.d(t, {
        M9: function () {
          return c;
        },
        fb: function () {
          return n;
        },
        gf: function () {
          return o;
        },
        nN: function () {
          return r;
        },
        wD: function () {
          return i;
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
          username: (0, l.Z_)().nullable(),
          phone: (0, l.Rx)().nullable(),
          totalRewards: (0, l.Rx)(),
          accountNo: (0, l.Z_)(),
          accountTitle: (0, l.Z_)(),
          bankName: (0, l.Z_)(),
        }),
        i = (0, l.Ry)({
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
        n = (0, l.Ry)({
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
  },
  function (e) {
    e.O(0, [986, 139, 16, 842, 10, 897, 100, 509, 971, 596, 744], function () {
      return e((e.s = 6754));
    }),
      (_N_E = e.O());
  },
]);
