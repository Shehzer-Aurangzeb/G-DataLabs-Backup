(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [555, 414],
  {
    7385: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 724)), Promise.resolve().then(i.bind(i, 8390));
    },
    8390: function (t, e, i) {
      'use strict';
      i.r(e);
      var n = i(7437),
        r = i(2265),
        c = i(9907),
        a = i(6791),
        u = i(1846),
        s = i(1839);
      e.default = function (t) {
        let { children: e, className: i = '' } = t,
          { width: l } = (0, c.i)(),
          [A, h] = (0, r.useState)(!1),
          o = (0, r.useRef)(null);
        return (
          (0, u.O)(o, () => {
            h(!1);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              l < 1024 &&
                (0, n.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, n.jsx)(s.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => h(!A),
                    type: 'button',
                    src: a.tp,
                  }),
                }),
              (0, n.jsxs)('div', {
                ref: o,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    l < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(A ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  i,
                ].join(' '),
                children: [
                  l < 1024 &&
                    (0, n.jsx)(s.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
                      onClick: () => h(!A),
                      type: 'button',
                      src: a.tp,
                    }),
                  e,
                ],
              }),
            ],
          })
        );
      };
    },
    1839: function (t, e, i) {
      'use strict';
      var n = i(7437);
      i(2265);
      var r = i(3427),
        c = i(4246);
      e.Z = function (t) {
        let { onClick: e, type: i = 'button', isLoading: a = !1, src: u, className: s = '' } = t;
        return (0, n.jsx)('button', {
          className: ['disabled:cursor-not-allowed', s].join(' '),
          onClick: e,
          type: i,
          disabled: a,
          children: a
            ? (0, n.jsx)(c.Z, { style: { color: '#fff', margin: '0 auto' } })
            : (0, n.jsx)(r.Z, { src: u, alt: 'icon', className: 'h-full w-full dark:invert-[1]' }),
        });
      };
    },
    4246: function (t, e, i) {
      'use strict';
      var n = i(7437);
      i(2265),
        (e.Z = function (t) {
          let { style: e } = t;
          return (0, n.jsxs)('svg', {
            className: 'animate-spin -ml-1 mr-3 h-5 w-5 text-disabled',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            style: e,
            children: [
              (0, n.jsx)('circle', {
                className: 'opacity-25',
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '4',
              }),
              (0, n.jsx)('path', {
                className: 'opacity-75',
                fill: 'currentColor',
                d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
              }),
            ],
          });
        });
    },
    3427: function (t, e, i) {
      'use strict';
      var n = i(7437);
      i(2265);
      var r = i(6691),
        c = i.n(r);
      e.Z = function (t) {
        let { className: e, src: i, alt: r, rounded: a = !1 } = t;
        return (0, n.jsx)('div', {
          className: ['relative', e].join(' '),
          children: (0, n.jsx)(c(), {
            src: i,
            alt: r,
            fill: !0,
            className: ''.concat(a ? 'object-cover rounded-full' : 'object-contain', ' '),
            sizes: '(max-width: 768px)',
          }),
        });
      };
    },
    6791: function (t, e, i) {
      'use strict';
      i.d(e, {
        JT: function () {
          return a;
        },
        IH: function () {
          return g;
        },
        x7: function () {
          return v;
        },
        T7: function () {
          return u;
        },
        LI: function () {
          return s;
        },
        W6: function () {
          return d;
        },
        Xv: function () {
          return w;
        },
        WA: function () {
          return x;
        },
        JE: function () {
          return m;
        },
        QM: function () {
          return b;
        },
        oB: function () {
          return B;
        },
        DV: function () {
          return H;
        },
        eP: function () {
          return _;
        },
        th: function () {
          return C;
        },
        m8: function () {
          return r;
        },
        LE: function () {
          return n;
        },
        vL: function () {
          return k;
        },
        kS: function () {
          return l;
        },
        i1: function () {
          return c;
        },
        PA: function () {
          return R;
        },
        HB: function () {
          return E;
        },
        PD: function () {
          return p;
        },
        lW: function () {
          return A;
        },
        fR: function () {
          return y;
        },
        rc: function () {
          return h;
        },
        tp: function () {
          return o;
        },
        ws: function () {
          return f;
        },
      });
      var n = {
          src: '/_next/static/media/home__icon.77c058d5.svg',
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
        c = {
          src: '/_next/static/media/my_g-data__icon.c8d315f8.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: '/_next/static/media/account__icon.b91bce68.svg',
          height: 30,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: '/_next/static/media/bulb_active__icon.c172f270.svg',
          height: 22,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = {
          src: '/_next/static/media/bulb_inactive__icon.0279f459.svg',
          height: 26,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: '/_next/static/media/logout__icon.fef64a12.svg',
          height: 36,
          width: 35,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = { src: '/_next/static/media/send__icon.ef522f85.svg', height: 41, width: 40, blurWidth: 0, blurHeight: 0 },
        h = {
          src: '/_next/static/media/sidebar__icon.ffb450fe.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATklEQVR42mWNMQ5AQBQF5wgbJ1AIsYnSAXRarUSpwiV0Sg48kSj98r1kZgALK0sbs4lvnt4+ru5eJuyc7R0B3MzYujg4AXhYhyMgUfrPvqNHQdEzcD6aAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        o = {
          src: '/_next/static/media/sidebar_dark__icon.058fcac0.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mXNoQ2AMBQA0TdC0wkQBEITJAPgsFgSJApYAoeEiTvAt5fcHWStRq9IkD0+v8PllRhtJgs4FQa72QpuXQBBCdGwrcRpDjk8OG1xAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        d = { src: '/_next/static/media/chat__icon.a90e55c7.svg', height: 25, width: 25, blurWidth: 0, blurHeight: 0 },
        g = { src: '/_next/static/media/add__icon.759b9985.svg', height: 31, width: 30, blurWidth: 0, blurHeight: 0 },
        f = {
          src: '/_next/static/media/upload__icon.155b8d29.svg',
          height: 37,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: '/_next/static/media/cross_disable__icon.5c8e8498.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
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
        w = {
          src: '/_next/static/media/check_active__icon.0ce21cf2.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        v = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        p = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        B = {
          src: '/_next/static/media/default-profile.b62773a2.png',
          height: 90,
          width: 90,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXyeRjxeRjxeBfxeBjxeBfxeBfxeRfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBjxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeRjxeBjxeBdyAzjlAAAAHHRSTlMAAAACAgMKCg0OHSMwMTJFV15fYGGFlMbJ0fn7h3ig8gAAAEBJREFUeNoFQIURgDAQC8GrSL309x+Tw0wYAy6gKiJFEchyvSMDVtp5NLFwfYTwdQfUNCFVgDreT9TEyt37jesPgBMDgQkeLc8AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        E = {
          src: '/_next/static/media/no-data.de51b600.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3BPQqCYAAA0Df0gwfQo0QQ7UERtEVT0VRBXxiCLcFHCU05eBg9nr4Hqcx2mEmBqNUMOxGm7pZugrmrhLHcwsvFTgUTDxulk7efAyMFEqVCUEFt7ewvyH1gZm/lKfo69vEEFGYLsWa/AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        k = {
          src: '/_next/static/media/like__icon.e95d69bd.svg',
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        H = {
          src: '/_next/static/media/dislike__icon.8d708f09.svg',
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        y = {
          src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42l2NsQ0AIQwD76fkV4CSHjahh4oRg4sgEGcpsiw5hk9yjv+ZUsBpGIWKyYmMERl0XSPvoEsJBbtSveKE6+k7uwD0YxaTHd0JgAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        C = {
          src: '/_next/static/media/hidepassword__icon.84b28e09.png',
          height: 60,
          width: 60,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42kXBIQ6CUAAA0CcWj6HBjU2L0WYyewCLm3YP4eacBps3sHAANjYaGwQ4AaMRuMUn8h5vMYDIjJWHq5+/MzB30Xo66qVQCDYyuZ0gpxTsbWXugpqFyuDkoNMA3CS+Yi9LIpO1zwh58RiIbBbx+wAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        };
    },
    1846: function (t, e, i) {
      'use strict';
      i.d(e, {
        O: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (t, e) => {
        let i = (0, n.useCallback)(
          (i) => {
            t && t.current && !t.current.contains(i.target) && e();
          },
          [e, t],
        );
        (0, n.useEffect)(
          () => (
            document.addEventListener('mousedown', i),
            () => {
              document.removeEventListener('mousedown', i);
            }
          ),
          [i],
        );
      };
    },
    9907: function (t, e, i) {
      'use strict';
      i.d(e, {
        i: function () {
          return r;
        },
      });
      var n = i(2265);
      function r() {
        let [t, e] = (0, n.useState)({ width: 0, height: 0 });
        return (
          (0, n.useEffect)(() => {
            function t() {
              e({ width: window.innerWidth, height: window.innerHeight });
            }
            return window.addEventListener('resize', t), t(), () => window.removeEventListener('resize', t);
          }, []),
          { width: t.width, height: t.height }
        );
      }
    },
    724: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          SkeletonTheme: function () {
            return a;
          },
          default: function () {
            return c;
          },
        });
      var n = i(2265);
      let r = n.createContext({});
      function c({
        count: t = 1,
        wrapper: e,
        className: i,
        containerClassName: c,
        containerTestId: a,
        circle: u = !1,
        style: s,
        ...l
      }) {
        var A, h, o;
        let d = n.useContext(r),
          g = { ...l };
        for (let [t, e] of Object.entries(l)) void 0 === e && delete g[t];
        let f = { ...d, ...g, circle: u },
          b = {
            ...s,
            ...(function ({
              baseColor: t,
              highlightColor: e,
              width: i,
              height: n,
              borderRadius: r,
              circle: c,
              direction: a,
              duration: u,
              enableAnimation: s = !0,
            }) {
              let l = {};
              return (
                'rtl' === a && (l['--animation-direction'] = 'reverse'),
                'number' == typeof u && (l['--animation-duration'] = `${u}s`),
                s || (l['--pseudo-element-display'] = 'none'),
                ('string' == typeof i || 'number' == typeof i) && (l.width = i),
                ('string' == typeof n || 'number' == typeof n) && (l.height = n),
                ('string' == typeof r || 'number' == typeof r) && (l.borderRadius = r),
                c && (l.borderRadius = '50%'),
                void 0 !== t && (l['--base-color'] = t),
                void 0 !== e && (l['--highlight-color'] = e),
                l
              );
            })(f),
          },
          m = 'react-loading-skeleton';
        i && (m += ` ${i}`);
        let x = null !== (A = f.inline) && void 0 !== A && A,
          w = [],
          _ = Math.ceil(t);
        for (let e = 0; e < _; e++) {
          let i = b;
          if (_ > t && e === _ - 1) {
            let e = null !== (h = i.width) && void 0 !== h ? h : '100%',
              n = t % 1,
              r = 'number' == typeof e ? e * n : `calc(${e} * ${n})`;
            i = { ...i, width: r };
          }
          let r = n.createElement('span', { className: m, style: i, key: e }, '‌');
          x ? w.push(r) : w.push(n.createElement(n.Fragment, { key: e }, r, n.createElement('br', null)));
        }
        return n.createElement(
          'span',
          {
            className: c,
            'data-testid': a,
            'aria-live': 'polite',
            'aria-busy': null === (o = f.enableAnimation) || void 0 === o || o,
          },
          e ? w.map((t, i) => n.createElement(e, { key: i }, t)) : w,
        );
      }
      function a({ children: t, ...e }) {
        return n.createElement(r.Provider, { value: e }, t);
      }
    },
  },
  function (t) {
    t.O(0, [986, 971, 596, 744], function () {
      return t((t.s = 7385));
    }),
      (_N_E = t.O());
  },
]);
