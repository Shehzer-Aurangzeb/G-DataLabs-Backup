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
      var i = a(3427),
        r = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', title: n, isLoading: s = !1, icon: o, className: c = '', style: u } = e;
        return (0, l.jsxs)('button', {
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
              (0, l.jsx)('div', {
                className: 'absolute left-[9%] top-1/2 -translate-y-1/2',
                children: (0, l.jsx)(i.Z, { src: o, alt: 'icon', className: 'h-[35px] w-[35px]' }),
              }),
            s ? (0, l.jsx)(r.Z, { style: { color: '#fff', margin: '0 auto' } }) : n,
          ],
        });
      };
    },
    4118: function (e, t, a) {
      'use strict';
      var l = a(7437),
        i = a(2265),
        r = a(3427),
        n = a(6421);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: s } = e,
          o = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            s && o && o.current && o.current.parentElement && o.current.parentElement.classList.add('relative');
          }, [s]),
          (0, l.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !s && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: o,
            children: [
              (0, l.jsx)(r.Z, {
                src: null != a ? a : n.HB,
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
        i = a(2265),
        r = a(1872),
        n = a(6421),
        s = a(1515),
        o = a(1846),
        c = a(3427);
      t.Z = function (e) {
        let { className: t, options: a, style: u, value: d, onClick: m } = e,
          [x, p] = (0, i.useState)(!1),
          f = (0, i.useRef)(null),
          h = () => {
            p(!x);
          };
        return (
          (0, o.O)(f, () => {
            p(!1);
          }),
          (0, l.jsxs)('div', {
            ref: f,
            style: u,
            className: [
              'relative bg-chat py-[10px] dark:bg-darkChat dark:text-main px-4 '.concat(
                x ? 'rounded-md rounded-b-none' : 'rounded-md',
                ' w-full',
              ),
              t,
            ].join(' '),
            children: [
              (0, l.jsxs)('div', {
                className: 'flex w-full justify-between items-center',
                onClick: h,
                onKeyDown: h,
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, l.jsx)('label', {
                    className:
                      'text-primary dark:text-main  font-sans font-normal text-base max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap',
                    children: (0, s.kC)(d),
                  }),
                  (0, l.jsx)(c.Z, {
                    src: n.x7,
                    alt: 'dropdown-icon',
                    className: 'w-6 h-6 transition-all ease-in duration-250 dark:invert '.concat(
                      x ? 'rotate-180 ' : 'rotate-0',
                    ),
                  }),
                ],
              }),
              x &&
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
                              m(e.value), h();
                            },
                            onKeyDown: () => {
                              m(e.value), h();
                            },
                            children: (0, s.kC)(e.value),
                          }),
                        },
                        (0, r.Z)(),
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
            return j;
          },
        });
      var l = a(7437),
        i = a(2265),
        r = a(9611),
        n = a(6571),
        s = a(4118),
        o = a(4010),
        c = a(3427),
        u = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: r,
              getTableBodyProps: n,
              headerGroups: s,
              rows: u,
              prepareRow: d,
            } = (0, o.useTable)({ columns: t, data: a });
          return (0, l.jsxs)('table', {
            ...r(),
            className: 'w-full',
            children: [
              (0, l.jsx)('thead', {
                children: s.map((e) =>
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
                ...n(),
                children: u.map(
                  (e) => (
                    d(e),
                    (0, i.createElement)(
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
        x = a(5979),
        p = a(446),
        f = a(1799),
        h = a(6691),
        _ = a.n(h),
        b = a(6421),
        g = a(9109),
        v = function (e) {
          let { onChange: t, noOfFiles: a } = e;
          return (0, l.jsxs)('div', {
            className:
              'flex flex-row w-full max-w-[450px] items-center bg-chat dark:bg-darkChat gap-x-5 relative py-[9px] px-4 ',
            children: [
              (0, l.jsx)(c.Z, { src: b.ws, alt: 'upload-icon', className: 'w-[36px] h-[36px] dark:invert' }),
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
              onChange: r,
              title: n,
              type: s,
              placeholder: o,
              readOnly: c,
              error: u,
              isAddingFieldEnabled: d = !1,
              fields: m,
              addNewField: x,
              handleFileChange: p,
              noOfFiles: f,
              isSelectInput: h = !1,
              selectOptions: w,
              onSelectOption: y,
            } = e,
            [j, k] = (0, i.useState)(!1);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)('div', {
                className:
                  'flex flex-row items-start gap-x-2 pt-3 pl-2 pr-3 w-full tablet:gap-x-0 mobile:gap-x-1 '.concat(
                    j ? 'pb-3' : 'pb-5',
                    ' rounded-xl bg-light dark:bg-main transition duration-300',
                  ),
                children: [
                  (0, l.jsx)(_(), {
                    src: b.x7,
                    alt: 'arrow-icon',
                    height: 24,
                    width: 24,
                    className: 'transition duration-300 '.concat(j && 'rotate-180 ', ' dark:invert'),
                    onClick: () => {
                      k(!j);
                    },
                  }),
                  (0, l.jsxs)('header', {
                    className: 'flex flex-col gap-y-[18px] w-full relative',
                    children: [
                      (0, l.jsx)('label', {
                        htmlFor: t,
                        className: 'text-primary font-sans font-medium text-xl  dark:text-main',
                        children: n,
                      }),
                      !j &&
                        !d &&
                        'file' !== s &&
                        !h &&
                        (0, l.jsx)('input', {
                          autoComplete: 'off',
                          placeholder: o,
                          onChange: r,
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
                        (0, l.jsx)(g.Z, {
                          options: w,
                          className: 'w-auto ',
                          value: null == a ? void 0 : a.toString(),
                          onClick: y,
                        }),
                      !j && !d && 'file' === s && !h && (0, l.jsx)(v, { onChange: p, noOfFiles: null != f ? f : 0 }),
                      !j &&
                        d &&
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
                                  onChange: r,
                                  name: t,
                                  readOnly: c,
                                  id: 'emotionList-'.concat(t),
                                  type: s || 'text',
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
                                (0, l.jsx)(_(), {
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
              u && (0, l.jsx)('p', { className: 'font-sans text-sm text-error -mt-2', children: u }),
            ],
          });
        },
        y = function (e) {
          let { savePersonalData: t, isLoading: a } = e,
            [n, s] = (0, i.useState)({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }),
            [o, c] = (0, i.useState)(0),
            { weather: u } = (0, f.I)(),
            [h, _] = (0, i.useState)('Save'),
            {
              handleSubmit: b,
              handleChange: g,
              values: v,
              touched: y,
              errors: j,
              setFieldValue: k,
            } = (0, d.TA)({
              initialValues: {
                ...r.sw,
                high_temperature: u ? u.highestTemperature : 0,
                low_temperature: u ? u.lowestTemperature : 0,
              },
              validationSchema: x.wD,
              onSubmit: async (e, a) => {
                let { resetForm: l, setSubmitting: i } = a;
                t(e),
                  'SaveEnter' === h &&
                    (l({}), s({ emotionList: { initialKey: '' }, socialLifeList: { initialKey: '' } }), c(0)),
                  i(!1);
              },
            }),
            N = (0, i.useCallback)((e) => {
              _(e);
            }, []);
          return (
            (0, i.useEffect)(() => {
              let e = setTimeout(() => {
                k('emotional_list', Object.values(n.emotionList)),
                  k('social_life_list', Object.values(n.socialLifeList));
              }, 400);
              return () => clearTimeout(e);
            }, [n, k]),
            (0, l.jsxs)('form', {
              className:
                'flex flex-col gap-y-3 w-full overflow-y-auto max-w-[377px] bg-side dark:bg-dark rounded-md pl-4 pr-6 py-6 mobile:max-w-full mobile: dark:text-main',
              noValidate: !0,
              onSubmit: b,
              children: [
                (0, l.jsx)(w, {
                  value: v.date,
                  type: 'date',
                  onChange: g,
                  title: 'Date',
                  name: 'date',
                  error: y.date && j.date,
                }),
                (0, l.jsx)(w, {
                  value: v.high_temperature,
                  type: 'number',
                  onChange: g,
                  title: 'High Temperature (F)',
                  name: 'high_temperature',
                  error: y.high_temperature && j.high_temperature,
                }),
                (0, l.jsx)(w, {
                  value: v.low_temperature,
                  type: 'number',
                  onChange: g,
                  title: 'Low Temperature (F)',
                  name: 'low_temperature',
                  error: y.low_temperature && j.low_temperature,
                }),
                (0, l.jsx)(w, {
                  value: v.weather,
                  onChange: g,
                  title: 'Weather Type',
                  name: 'weather',
                  error: y.weather && j.weather,
                }),
                (0, l.jsx)(w, {
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
                  error: y.emotional_list && j.emotional_list,
                }),
                (0, l.jsx)(w, {
                  value: v.emotional_overall,
                  onChange: g,
                  title: 'Emotion Overall',
                  name: 'emotional_overall',
                  error: y.emotional_overall && j.emotional_overall,
                }),
                (0, l.jsx)(w, {
                  value: v.relative_finance_status,
                  onChange: g,
                  title: 'Relative Finance Status',
                  name: 'relative_finance_status',
                  error: y.relative_finance_status && j.relative_finance_status,
                }),
                (0, l.jsx)(w, {
                  value: v.exercise_time,
                  onChange: g,
                  type: 'number',
                  title: 'Exercise Total Time (min)',
                  name: 'exercise_time',
                  error: y.exercise_time && j.exercise_time,
                }),
                (0, l.jsx)(w, {
                  value: v.health_overall,
                  onChange: g,
                  title: 'Health Overall',
                  name: 'health_overall',
                  error: y.health_overall && j.health_overall,
                }),
                (0, l.jsx)(w, {
                  value: v.any_social_life,
                  isSelectInput: !0,
                  onSelectOption: (e) => {
                    k('any_social_life', e);
                  },
                  selectOptions: r.XZ,
                  title: 'Any Social Life?',
                  error: y.any_social_life && j.any_social_life,
                }),
                (0, l.jsx)(w, {
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
                  error: y.social_life_list && j.social_life_list,
                }),
                (0, l.jsx)(w, {
                  value: v.weight,
                  onChange: g,
                  type: 'number',
                  title: 'Weight (Pounds)',
                  name: 'weight',
                  error: y.weight && j.weight,
                }),
                (0, l.jsx)(w, {
                  value: v.family_status,
                  onChange: g,
                  title: 'Family Status',
                  name: 'family_status',
                  error: y.family_status && j.family_status,
                }),
                (0, l.jsx)(w, {
                  value: v.device_screen_time,
                  onChange: g,
                  title: 'Device Screen Time',
                  name: 'device_screen_time',
                  error: y.device_screen_time && j.device_screen_time,
                }),
                (0, l.jsx)(w, {
                  value: v.work_life_balance,
                  onChange: g,
                  type: 'number',
                  title: 'Work Life Balance (0-10)',
                  name: 'work_life_balance',
                  error: y.work_life_balance && j.work_life_balance,
                }),
                (0, l.jsx)(w, {
                  value: v.journaling,
                  onChange: g,
                  title: 'Journaling',
                  name: 'journaling',
                  error: y.journaling && j.journaling,
                }),
                (0, l.jsx)(w, {
                  handleFileChange: (e) => {
                    let { files: t } = e.target;
                    t && (c(t.length), k('photos', t));
                  },
                  noOfFiles: o,
                  type: 'file',
                  title: 'Photos',
                  name: 'photos',
                  error: !1,
                }),
                (0, l.jsx)(p.Z, {
                  type: 'submit',
                  value: 'Save',
                  className: 'bg-blue dark:bg-darkBlue w-full disabled:bg-disabledBlue',
                  title: 'Save',
                  isLoading: a,
                  onClick: () => N('Save'),
                }),
                (0, l.jsx)(p.Z, {
                  type: 'submit',
                  value: 'SaveEnter',
                  className: 'bg-[#F5B11A] w-full disabled:bg-[#f5b01aa7] dark:bg-darkTable',
                  title: 'Save & Enter New Data',
                  onClick: () => N('SaveEnter'),
                  isLoading: a,
                }),
              ],
            })
          );
        },
        j = function () {
          let { savePersonalData: e, isLoading: t, personalData: a } = (0, n.T)(),
            o = (0, i.useMemo)(
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
                className: 'overflow-x-auto w-full h-full mobile:min-h-[350px] max-w-['.concat(r.kk, ']'),
                children: [(0, l.jsx)(u, { data: o, columns: r.qQ }), 0 === o.length && (0, l.jsx)(s.Z, {})],
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
          return s;
        },
        gf: function () {
          return o;
        },
        nN: function () {
          return i;
        },
        wD: function () {
          return r;
        },
        y1: function () {
          return n;
        },
      });
      var l = a(5691);
      let i = (0, l.Ry)({
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
        r = (0, l.Ry)({
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
        n = (0, l.Ry)({
          email: (0, l.Z_)().email().required('Email is required'),
          password: (0, l.Z_)().required('Password is required'),
        }),
        s = (0, l.Ry)({
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
    e.O(0, [986, 139, 16, 842, 10, 707, 100, 509, 971, 596, 744], function () {
      return e((e.s = 1681));
    }),
      (_N_E = e.O());
  },
]);
