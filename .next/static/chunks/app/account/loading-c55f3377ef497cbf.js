(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [414, 555],
  {
    1576: function (A, t, e) {
      Promise.resolve().then(e.bind(e, 724)), Promise.resolve().then(e.bind(e, 8390));
    },
    8390: function (A, t, e) {
      'use strict';
      e.r(t);
      var i = e(7437),
        n = e(2265),
        r = e(9907),
        a = e(2854),
        c = e(1846),
        l = e(1839);
      t.default = function (A) {
        let { children: t, className: e = '' } = A,
          { width: s } = (0, r.i)(),
          [u, h] = (0, n.useState)(!1),
          o = (0, n.useRef)(null);
        return (
          (0, c.O)(o, () => {
            h(!1);
          }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              s < 1024 &&
                (0, i.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, i.jsx)(l.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => h(!u),
                    type: 'button',
                    src: a.Ix,
                  }),
                }),
              (0, i.jsxs)('div', {
                ref: o,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    s < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(u ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  e,
                ].join(' '),
                children: [
                  s < 1024 &&
                    (0, i.jsx)(l.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => h(!u),
                      type: 'button',
                      src: a.Ix,
                    }),
                  t,
                ],
              }),
            ],
          })
        );
      };
    },
    1839: function (A, t, e) {
      'use strict';
      var i = e(7437);
      e(2265);
      var n = e(3427),
        r = e(4246);
      t.Z = function (A) {
        let {
          children: t,
          onClick: e,
          type: a = 'button',
          isLoading: c = !1,
          src: l,
          className: s = '',
          disabled: u,
        } = A;
        return (0, i.jsxs)('button', {
          className: ['disabled:cursor-not-allowed', s].join(' '),
          onClick: e,
          type: a,
          disabled: c || u,
          children: [
            c
              ? (0, i.jsx)(r.Z, { style: { color: '#fff', margin: '0 auto' } })
              : (0, i.jsx)(n.Z, { src: l, alt: 'button-icon', className: ' h-full w-full' }),
            t,
          ],
        });
      };
    },
    4246: function (A, t, e) {
      'use strict';
      var i = e(7437);
      e(2265),
        (t.Z = function (A) {
          let { style: t } = A;
          return (0, i.jsxs)('svg', {
            className: 'animate-spin -ml-1 mr-3 h-5 w-5 text-disabled',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            style: t,
            children: [
              (0, i.jsx)('circle', {
                className: 'opacity-25',
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '4',
              }),
              (0, i.jsx)('path', {
                className: 'opacity-75',
                fill: 'currentColor',
                d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
              }),
            ],
          });
        });
    },
    3427: function (A, t, e) {
      'use strict';
      var i = e(7437);
      e(2265);
      var n = e(6691),
        r = e.n(n);
      t.Z = function (A) {
        let { className: t, src: e, alt: n, rounded: a = !1 } = A;
        return (0, i.jsx)('div', {
          className: ['relative', t].join(' '),
          children: (0, i.jsx)(r(), {
            src: e,
            alt: n,
            fill: !0,
            className: ''.concat(a ? 'object-cover rounded-full' : 'object-contain', ' '),
          }),
        });
      };
    },
    1846: function (A, t, e) {
      'use strict';
      e.d(t, {
        O: function () {
          return n;
        },
      });
      var i = e(2265);
      let n = (A, t) => {
        let e = (0, i.useCallback)(
          (e) => {
            A && A.current && !A.current.contains(e.target) && t();
          },
          [t, A],
        );
        (0, i.useEffect)(
          () => (
            document.addEventListener('mousedown', e),
            () => {
              document.removeEventListener('mousedown', e);
            }
          ),
          [e],
        );
      };
    },
    9907: function (A, t, e) {
      'use strict';
      e.d(t, {
        i: function () {
          return n;
        },
      });
      var i = e(2265);
      function n() {
        let [A, t] = (0, i.useState)({ width: 0, height: 0 });
        return (
          (0, i.useEffect)(() => {
            function A() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return window.addEventListener('resize', A), A(), () => window.removeEventListener('resize', A);
          }, []),
          { width: A.width, height: A.height }
        );
      }
    },
    2854: function (A, t, e) {
      'use strict';
      e.d(t, {
        JT: function () {
          return c;
        },
        zE: function () {
          return l;
        },
        IH: function () {
          return f;
        },
        x7: function () {
          return E;
        },
        T7: function () {
          return s;
        },
        LI: function () {
          return u;
        },
        W6: function () {
          return b;
        },
        Xv: function () {
          return v;
        },
        WA: function () {
          return x;
        },
        JE: function () {
          return _;
        },
        QM: function () {
          return w;
        },
        oB: function () {
          return B;
        },
        eP: function () {
          return p;
        },
        th: function () {
          return W;
        },
        m8: function () {
          return r;
        },
        nm: function () {
          return a;
        },
        LE: function () {
          return i;
        },
        kP: function () {
          return n;
        },
        kS: function () {
          return h;
        },
        PA: function () {
          return C;
        },
        HB: function () {
          return R;
        },
        PD: function () {
          return U;
        },
        lW: function () {
          return o;
        },
        fR: function () {
          return H;
        },
        Ix: function () {
          return g;
        },
        pE: function () {
          return d;
        },
        ws: function () {
          return m;
        },
      });
      var i = {
          src: '/_next/static/media/home__icon.77c058d5.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: '/_next/static/media/home__icon_dark.836472a3.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = {
          src: '/_next/static/media/history__icon.317786c2.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: '/_next/static/media/history__icon_dark.970311ed.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: '/_next/static/media/account__icon.b91bce68.svg',
          height: 30,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: '/_next/static/media/account__icon_dark.8bdda029.svg',
          height: 30,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = {
          src: '/_next/static/media/bulb_active__icon.c172f270.svg',
          height: 22,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: '/_next/static/media/bulb_inactive__icon.0279f459.svg',
          height: 26,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: '/_next/static/media/logout__icon.fef64a12.svg',
          height: 36,
          width: 35,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = { src: '/_next/static/media/send__icon.ef522f85.svg', height: 41, width: 40, blurWidth: 0, blurHeight: 0 },
        d = {
          src: '/_next/static/media/sidebar__icon.ffb450fe.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////////9MaXH///////////////////9URu1bAAAACnRSTlMjEXCUAB1lOk+I8lBZqgAAAAlwSFlzAAF3AAABdwAB5gLhLwAAAClJREFUeJxjYGFkZWVgYGRhYORkZmZiYmZkYGBj52BhYWLAx4ArhmkHAB6QANWl/OPHAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: '/_next/static/media/sidebar_dark__icon.058fcac0.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAACQ7TNKAAAAC3RSTlMjbZEAEB47ExJOUKf9XDYAAAAJcEhZcwABdwAAAXcAAeYC4S8AAAAtSURBVHicY2BmZ2VlYOBgZmBhYmJiZGRiYWBgZONkZmZkADG4MBgQKbhimHYAG3oAwbX95W0AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        b = { src: '/_next/static/media/chat__icon.a90e55c7.svg', height: 25, width: 25, blurWidth: 0, blurHeight: 0 },
        f = { src: '/_next/static/media/add__icon.759b9985.svg', height: 31, width: 30, blurWidth: 0, blurHeight: 0 },
        m = {
          src: '/_next/static/media/upload__icon.155b8d29.svg',
          height: 37,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: '/_next/static/media/cross_disable__icon.5c8e8498.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: '/_next/static/media/cross_active__icon.4db9eef5.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: '/_next/static/media/check_disable__icon.f95d0a9b.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = {
          src: '/_next/static/media/check_active__icon.0ce21cf2.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        E = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        U = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        B = {
          src: '/_next/static/media/default-profile.b62773a2.png',
          height: 90,
          width: 90,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXH1ehb0ehfyeBfweRj1ehfzdxf3exfUfwD4fBfzeRjvdxf+gxnQhAqIAAAADHRSTlMAKv1dFYlAywbBxmLOX/4iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nBXKxxEAIBADsfUFovuvl0FvAUtaADr2EbCd1xsUURUhFM50CGZDz587s3+mxih4JQoA7Ys4IIQAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
          src: '/_next/static/media/no-data.de51b600.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdEvm1AAAADXRSTlN1aQF+UYkISBQ7lbgWvoUjFwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJwdyMcJADAQBLHZyw7912vwTwib6b5jmJ+9TxqllhZFaaH4E8gzKOwCjmUoP1a03OMBLA8BDDw/6tcAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        C = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3KG9qAAAACnRSTlMBW1BnLhgOhTuY3yPPQwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwVxskRwEAQArEG5tr8E3ZZLxHZasAZ5p9Jc68QrbGDi9p0WK1OJ6BivQBM1e0HGhAAylbuhDEAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        H = {
          src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAACpf3wfAAAAB3RSTlMA/a5qn1h9zX3zHwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAChJREFUeJxjYEAAViYmVhDNwsjGxsjCwMDMyMzExMzIjGDApRCKoQAAD3gAbePIheoAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        W = {
          src: '/_next/static/media/hidepassword__icon.84b28e09.png',
          height: 60,
          width: 60,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR6B4TAAAAD3RSTlMAt0iLLmPX/sIDCnmmIBLS8AWjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nB3LSQ7AIAwAsckeAvT/z0Wq72Y7wIJrYSeAiTRNGaRcREvoUpddzdepmj2w4pjb/Sf4fioUATYAnlprAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        };
    },
    724: function (A, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          SkeletonTheme: function () {
            return a;
          },
          default: function () {
            return r;
          },
        });
      var i = e(2265);
      let n = i.createContext({});
      function r({
        count: A = 1,
        wrapper: t,
        className: e,
        containerClassName: r,
        containerTestId: a,
        circle: c = !1,
        style: l,
        ...s
      }) {
        var u, h, o;
        let d = i.useContext(n),
          g = { ...s };
        for (let [A, t] of Object.entries(s)) void 0 === t && delete g[A];
        let b = { ...d, ...g, circle: c },
          f = {
            ...l,
            ...(function ({
              baseColor: A,
              highlightColor: t,
              width: e,
              height: i,
              borderRadius: n,
              circle: r,
              direction: a,
              duration: c,
              enableAnimation: l = !0,
            }) {
              let s = {};
              return (
                'rtl' === a && (s['--animation-direction'] = 'reverse'),
                'number' == typeof c && (s['--animation-duration'] = `${c}s`),
                l || (s['--pseudo-element-display'] = 'none'),
                ('string' == typeof e || 'number' == typeof e) && (s.width = e),
                ('string' == typeof i || 'number' == typeof i) && (s.height = i),
                ('string' == typeof n || 'number' == typeof n) && (s.borderRadius = n),
                r && (s.borderRadius = '50%'),
                void 0 !== A && (s['--base-color'] = A),
                void 0 !== t && (s['--highlight-color'] = t),
                s
              );
            })(b),
          },
          m = 'react-loading-skeleton';
        e && (m += ` ${e}`);
        let w = null !== (u = b.inline) && void 0 !== u && u,
          _ = [],
          x = Math.ceil(A);
        for (let t = 0; t < x; t++) {
          let e = f;
          if (x > A && t === x - 1) {
            let t = null !== (h = e.width) && void 0 !== h ? h : '100%',
              i = A % 1,
              n = 'number' == typeof t ? t * i : `calc(${t} * ${i})`;
            e = { ...e, width: n };
          }
          let n = i.createElement('span', { className: m, style: e, key: t }, '‌');
          w ? _.push(n) : _.push(i.createElement(i.Fragment, { key: t }, n, i.createElement('br', null)));
        }
        return i.createElement(
          'span',
          {
            className: r,
            'data-testid': a,
            'aria-live': 'polite',
            'aria-busy': null === (o = b.enableAnimation) || void 0 === o || o,
          },
          t ? _.map((A, e) => i.createElement(t, { key: e }, A)) : _,
        );
      }
      function a({ children: A, ...t }) {
        return i.createElement(n.Provider, { value: t }, A);
      }
    },
  },
  function (A) {
    A.O(0, [986, 971, 596, 744], function () {
      return A((A.s = 1576));
    }),
      (_N_E = A.O());
  },
]);
