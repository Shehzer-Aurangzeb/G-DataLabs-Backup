(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [811],
  {
    3329: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 9728));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var r = a(7437),
        s = a(2265),
        l = a(9907),
        n = a(6791),
        i = a(1846),
        d = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: o } = (0, l.i)(),
          [c, u] = (0, s.useState)(!1),
          x = (0, s.useRef)(null);
        return (
          (0, i.O)(x, () => {
            u(!1);
          }),
          (0, r.jsxs)(r.Fragment, {
            children: [
              o < 1024 &&
                (0, r.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, r.jsx)(d.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => u(!c),
                    type: 'button',
                    src: n.tp,
                  }),
                }),
              (0, r.jsxs)('div', {
                ref: x,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    o < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(c ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  o < 1024 &&
                    (0, r.jsx)(d.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => u(!c),
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
        s = a(2265),
        l = a(3427),
        n = a(6791);
      t.Z = function (e) {
        let { message: t, icon: a, isParentFixed: i } = e,
          d = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            i && d && d.current && d.current.parentElement && d.current.parentElement.classList.add('relative');
          }, [i]),
          (0, r.jsxs)('div', {
            className: 'flex flex-col gap-y-3 dark:text-main '.concat(
              !i && 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
              ' items-center',
            ),
            ref: d,
            children: [
              (0, r.jsx)(l.Z, {
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
    9728: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        });
      var r = a(7437);
      a(2265);
      var s = a(9611),
        l = a(7152),
        n = a(4118),
        i = a(6791),
        d = a(4010),
        o = a(1872),
        c = a(3427),
        u = {
          src: '/_next/static/media/arrow_upward.be61d9fd.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42k3IsQmAMBQA0RcVXEecRhtLzShai6PpPH4IgfCa4yABtRK4Pe06fV6XDphkq8VhhhTYQ20DciiFHlsoBRgD+AF23ghGsJhVAgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: '/_next/static/media/arrow_down.4d12400d.png',
          height: 50,
          width: 50,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPElEQVR42mMAA0YYieAqAiFciAmITYEQyEKoMAJCuAo2BikGDSCUZmCHyTsw5AOhA5gHJcKAEMkeJgQJANF4A78xyTg3AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        m = function (e) {
          let { filter: t, setFilter: a } = e;
          return (0, r.jsx)('div', {
            className:
              'relative rounded-md border border-main dark:border-white shadow-2xl dark:bg-darkinput dark:border-darkinput transition-all ease-in duration-150',
            children: (0, r.jsx)('div', {
              className: 'flex justify-between items-center gap-x-2 h-full px-2 md:py-0 bg-transparent',
              children: (0, r.jsx)('input', {
                className:
                  'bg-transparent font-sans font-base font-bold text-black dark:text-white outline-none border-none  dark:bg-darkinput dark:border-darkinput dark:placeholder-[#D8D8D8] my-3 w-full',
                type: 'text',
                placeholder: 'Search Here',
                value: t || '',
                onChange: (e) => a(e.target.value),
              }),
            }),
          });
        },
        h = function (e) {
          let { pageIndex: t, previousPage: a, canPreviousPage: s, nextPage: l, canNextPage: n } = e;
          return (0, r.jsxs)('div', {
            className: 'mt-5 mx-auto w-fit',
            children: [
              (0, r.jsx)('button', {
                onClick: a,
                disabled: !s,
                className:
                  'bg-black text-white px-6 py-2 text-base disabled:bg-slate-600 mx-3 rounded-md disabled:cursor-not-allowed',
                children: 'Previous',
              }),
              (0, r.jsx)('span', {
                className: 'bg-blue text-white px-6 py-2 rounded-md text-lg dark:bg-darkBlue',
                children: t + 1,
              }),
              (0, r.jsx)('button', {
                onClick: l,
                disabled: !n,
                className:
                  'bg-black text-white px-6 py-2 text-base disabled:bg-slate-600 mx-3 rounded-md disabled:cursor-not-allowed',
                children: 'Next',
              }),
            ],
          });
        },
        p = function (e) {
          let { pageSize: t, setPageSize: a } = e;
          return (0, r.jsxs)('div', {
            className: 'flex items-center mb-4 font-sans dark:text-main',
            children: [
              (0, r.jsx)('span', { className: 'mr-2', children: 'Show' }),
              (0, r.jsx)('select', {
                value: t,
                onChange: (e) => {
                  let t = Number(e.target.value);
                  a(t);
                },
                className: 'py-2 px-3 rounded-md text-lg focus:outline-none dark:bg-dark dark:text-main',
                children: s.KR.map((e) =>
                  (0, r.jsx)(
                    'option',
                    {
                      value: e,
                      className:
                        ' focus:outline-none px-4 dark:bg-dark dark:text-main border-slate-500 justify-center items-center  border hover:bg-slate-500',
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
              (0, r.jsx)('span', { className: 'ml-2', children: 'entries' }),
            ],
          });
        },
        b = function (e) {
          let { columns: t, data: a } = e,
            {
              getTableProps: s,
              getTableBodyProps: l,
              headerGroups: n,
              rows: i,
              prepareRow: b,
              state: g,
              setGlobalFilter: f,
              nextPage: A,
              previousPage: k,
              canNextPage: j,
              canPreviousPage: w,
              setPageSize: N,
              page: v,
            } = (0, d.useTable)(
              { columns: t, data: a, initialState: { pageSize: 3, pageIndex: 0 } },
              d.useGlobalFilter,
              d.useSortBy,
              d.usePagination,
            ),
            { globalFilter: y, pageSize: P, pageIndex: C } = g;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)('div', {
                className: 'flex justify-between items-center mobile:flex-col-reverse',
                children: [
                  (0, r.jsx)(p, { pageSize: P, setPageSize: N }),
                  (0, r.jsx)('div', { className: 'my-3 mr-2', children: (0, r.jsx)(m, { filter: y, setFilter: f }) }),
                ],
              }),
              (0, r.jsxs)('table', {
                ...s(),
                className: 'w-full',
                children: [
                  (0, r.jsx)('thead', {
                    children: n.map((e) =>
                      (0, r.jsx)('tr', {
                        ...e.getHeaderGroupProps(),
                        children: e.headers.map((e) =>
                          (0, r.jsxs)('th', {
                            ...e.getHeaderProps(e.getSortByToggleProps()),
                            className:
                              'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans mx-auto justify-center',
                            children: [
                              e.render('Header'),
                              (0, r.jsx)('span', {
                                className: 'ml-2 float-right',
                                style: { filter: 'brightness(0) invert(1)' },
                                children: e.isSorted
                                  ? (0, r.jsx)(c.Z, { src: x, alt: 'arrow_down', className: 'w-5 h-5 mt-1' })
                                  : (0, r.jsx)(c.Z, { src: u, alt: 'arrow_up', className: 'w-5 h-5 mt-1' }),
                              }),
                            ],
                          }),
                        ),
                      }),
                    ),
                  }),
                  (0, r.jsx)('tbody', {
                    ...l(),
                    children: v.map(
                      (e) => (
                        b(e),
                        (0, r.jsx)('tr', {
                          ...e.getRowProps(),
                          children: e.cells.map((e) =>
                            (0, r.jsx)('td', {
                              ...e.getCellProps(),
                              className:
                                'border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center',
                              children:
                                'Image' === e.column.Header
                                  ? e.value.length > 0
                                    ? e.value.map((e) =>
                                        (0, r.jsx)(
                                          c.Z,
                                          { src: e, alt: 'response-image', className: 'my-3 w-[120px] h-[120px]' },
                                          (0, o.Z)(),
                                        ),
                                      )
                                    : '-'
                                  : e.render('Cell'),
                            }),
                          ),
                        })
                      ),
                    ),
                  }),
                ],
              }),
              0 !== i.length &&
                (0, r.jsx)(h, { canNextPage: j, pageIndex: C, canPreviousPage: w, previousPage: k, nextPage: A }),
            ],
          });
        },
        g = function () {
          let { chatHistory: e } = (0, l.P)();
          return (0, r.jsxs)('div', {
            className: 'overflow-x-auto w-full h-full max-w-['.concat(s.kk, ']'),
            children: [
              (0, r.jsx)(b, { data: e, columns: s.Ac }),
              0 === e.length && (0, r.jsx)(n.Z, { message: 'No chat history to display', icon: i.PA }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 10, 442, 971, 596, 744], function () {
      return e((e.s = 3329));
    }),
      (_N_E = e.O());
  },
]);
