(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [385],
  {
    7385: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 724)), Promise.resolve().then(i.bind(i, 8390));
    },
    8390: function (t, e, i) {
      'use strict';
      i.r(e);
      var n = i(7437),
        A = i(2265),
        r = i(9907),
        a = i(1419),
        c = i(1846),
        u = i(1839);
      e.default = function (t) {
        let { children: e, className: i = '' } = t,
          { width: s } = (0, r.i)(),
          [l, h] = (0, A.useState)(!1),
          o = (0, A.useRef)(null);
        return (
          (0, c.O)(o, () => {
            h(!1);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              s < 1024 &&
                (0, n.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, n.jsx)(u.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => h(!l),
                    type: 'button',
                    src: a.tp,
                  }),
                }),
              (0, n.jsxs)('div', {
                ref: o,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    s < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(l ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  i,
                ].join(' '),
                children: [
                  s < 1024 &&
                    (0, n.jsx)(u.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => h(!l),
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
      var A = i(3427),
        r = i(4246);
      e.Z = function (t) {
        let {
          children: e,
          onClick: i,
          type: a = 'button',
          isLoading: c = !1,
          src: u,
          className: s = '',
          disabled: l,
        } = t;
        return (0, n.jsxs)('button', {
          className: ['disabled:cursor-not-allowed', s].join(' '),
          onClick: i,
          type: a,
          disabled: c || l,
          children: [
            c
              ? (0, n.jsx)(r.Z, { style: { color: '#fff', margin: '0 auto' } })
              : (0, n.jsx)(A.Z, { src: u, alt: 'icon', className: 'h-full w-full' }),
            e,
          ],
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
      var A = i(6691),
        r = i.n(A);
      e.Z = function (t) {
        let { className: e, src: i, alt: A, rounded: a = !1 } = t;
        return (0, n.jsx)('div', {
          className: ['relative', e].join(' '),
          children: (0, n.jsx)(r(), {
            src: i,
            alt: A,
            fill: !0,
            className: ''.concat(a ? 'object-cover rounded-full' : 'object-contain', ' '),
            sizes: '(max-width: 768px)',
          }),
        });
      };
    },
    1846: function (t, e, i) {
      'use strict';
      i.d(e, {
        O: function () {
          return A;
        },
      });
      var n = i(2265);
      let A = (t, e) => {
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
          return A;
        },
      });
      var n = i(2265);
      function A() {
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
    1419: function (t, e, i) {
      'use strict';
      i.d(e, {
        JT: function () {
          return c;
        },
        zE: function () {
          return u;
        },
        IH: function () {
          return b;
        },
        x7: function () {
          return v;
        },
        T7: function () {
          return s;
        },
        LI: function () {
          return l;
        },
        W6: function () {
          return f;
        },
        BF: function () {
          return y;
        },
        Xv: function () {
          return _;
        },
        WA: function () {
          return B;
        },
        JG: function () {
          return S;
        },
        JE: function () {
          return x;
        },
        QM: function () {
          return m;
        },
        oB: function () {
          return C;
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
          return n;
        },
        kP: function () {
          return A;
        },
        wb: function () {
          return H;
        },
        jA: function () {
          return k;
        },
        jY: function () {
          return j.Z;
        },
        J2: function () {
          return N.Z;
        },
        kS: function () {
          return h;
        },
        PA: function () {
          return U;
        },
        HB: function () {
          return R;
        },
        PD: function () {
          return E;
        },
        lW: function () {
          return o;
        },
        fR: function () {
          return Q;
        },
        rc: function () {
          return g;
        },
        tp: function () {
          return d;
        },
        ws: function () {
          return w;
        },
      });
      var n = {
          src: '/_next/static/media/home__icon.77c058d5.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
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
        u = {
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
        l = {
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
        g = {
          src: '/_next/static/media/sidebar__icon.ffb450fe.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATklEQVR42mWNMQ5AQBQF5wgbJ1AIsYnSAXRarUSpwiV0Sg48kSj98r1kZgALK0sbs4lvnt4+ru5eJuyc7R0B3MzYujg4AXhYhyMgUfrPvqNHQdEzcD6aAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        d = {
          src: '/_next/static/media/sidebar_dark__icon.058fcac0.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mXNoQ2AMBQA0TdC0wkQBEITJAPgsFgSJApYAoeEiTvAt5fcHWStRq9IkD0+v8PllRhtJgs4FQa72QpuXQBBCdGwrcRpDjk8OG1xAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        f = { src: '/_next/static/media/chat__icon.a90e55c7.svg', height: 25, width: 25, blurWidth: 0, blurHeight: 0 },
        b = { src: '/_next/static/media/add__icon.759b9985.svg', height: 31, width: 30, blurWidth: 0, blurHeight: 0 },
        w = {
          src: '/_next/static/media/upload__icon.155b8d29.svg',
          height: 37,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: '/_next/static/media/cross_disable__icon.5c8e8498.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: '/_next/static/media/cross_active__icon.4db9eef5.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: '/_next/static/media/check_disable__icon.f95d0a9b.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: '/_next/static/media/check_active__icon.0ce21cf2.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        v = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        E = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        C = {
          src: '/_next/static/media/default-profile.b62773a2.png',
          height: 90,
          width: 90,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXyeRjxeRjxeBfxeBjxeBfxeBfxeRfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBjxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeRjxeBjxeBdyAzjlAAAAHHRSTlMAAAACAgMKCg0OHSMwMTJFV15fYGGFlMbJ0fn7h3ig8gAAAEBJREFUeNoFQIURgDAQC8GrSL309x+Tw0wYAy6gKiJFEchyvSMDVtp5NLFwfYTwdQfUNCFVgDreT9TEyt37jesPgBMDgQkeLc8AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
          src: '/_next/static/media/no-data.de51b600.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3BPQqCYAAA0Df0gwfQo0QQ7UERtEVT0VRBXxiCLcFHCU05eBg9nr4Hqcx2mEmBqNUMOxGm7pZugrmrhLHcwsvFTgUTDxulk7efAyMFEqVCUEFt7ewvyH1gZm/lKfo69vEEFGYLsWa/AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        U = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        k = {
          src: '/_next/static/media/like_outlined__icon.49977db7.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42g3CIQ6CUAAA0MfHpAewGLBrdGaCBudMbkSnxQIjEAjwxzHoRE4Jbw8gVdkjsU5xMSmwAbY6TzUSdlqzl6NRKXD285CDKOPkLXdFECHTiwYHH1/gpnDX+Ass9nENAMaoK48AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        H = {
          src: '/_next/static/media/like_filled__icon.b3e53afd.png',
          height: 96,
          width: 96,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42i3IMQqCYBgA0CfRYjTU0l2abQg6Rudo6zYuIoI3cBQEBw/h4CI4ffKD2+MBGQoXgBPOVsVh8BceyNI1SqNQ+cFdmHRCmOXcLHq9FDVcbQatFF/g7Sn38oEdS9IYoPArmjwAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        Q = {
          src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42l2NsQ0AIQwD76fkV4CSHjahh4oRg4sgEGcpsiw5hk9yjv+ZUsBpGIWKyYmMERl0XSPvoEsJBbtSveKE6+k7uwD0YxaTHd0JgAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        W = {
          src: '/_next/static/media/hidepassword__icon.84b28e09.png',
          height: 60,
          width: 60,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42kXBIQ6CUAAA0CcWj6HBjU2L0WYyewCLm3YP4eacBps3sHAANjYaGwQ4AaMRuMUn8h5vMYDIjJWHq5+/MzB30Xo66qVQCDYyuZ0gpxTsbWXugpqFyuDkoNMA3CS+Yi9LIpO1zwh58RiIbBbx+wAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        N = i(5217),
        j = i(4929),
        S = {
          src: '/_next/static/media/copy__icon.b0481f58.png',
          height: 96,
          width: 96,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWklEQVR42g3EMQqCYBgA0NfYXhB8BU315+51ghZTBB30Cp7ARcHRg/rz4EFInm4AYVGb7EpXJwo/zPnWJnirPPTgL1H4OhtB50VYDSpQ+8BFadVkiwC4S1lwAMKXDflgffsSAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        y = { src: '/_next/static/media/check__icon.a4f74bfb.svg', height: 24, width: 24, blurWidth: 0, blurHeight: 0 };
    },
    5217: function (t, e) {
      'use strict';
      e.Z = {
        src: '/_next/static/media/logo-dark.ecd0cb6d.png',
        height: 2335,
        width: 2146,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyUlEQVR42mOAgdeKBh5vGWQNGZBBh0WOEIj+Jqmi+srGwwjEnlK82Wx510ZOhgabwvSOoBo7BgaG9o2bN266c/fB+trYTZ4MDDAgYB9VGadz89T84JJrl85++PDuseP/BAZehv9lihlpunoz5jU7bX2/gCHszKGt9+/euNL9fyaDJsOvIsWMjgDXIAYGhmsHNy84cPfu3f+PHv2UZkABZknZizccN7n+4HLg3L3N8Qwg8L+AgckprotTqXhxBUzd0oMTU+o3WjACAF57UDMfW/v+AAAAAElFTkSuQmCC',
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    4929: function (t, e) {
      'use strict';
      e.Z = {
        src: '/_next/static/media/logo.eaf39e0e.png',
        height: 2335,
        width: 2145,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzElEQVR42mOAgQeb1TwebRUxZEAGb04VC4Ml90qq3l1nacLAwMDw8Qij2euDFlwMby9UZLw4V2f3i4Ghc1na9BUqbQen/zrG4MMAA++MraNepWndPjPfMy+ufvNlhoLTNv//M/AzPD8hk/k2TGvGs0bLrW8PM0S1t80/mN29ver/UwZdhheHpDNf5loFfdVjuLGtoW0PQ82hewwMT8QYkMHbCobsifrzjKes3eT3/2VOAgMIfL3ExfR4vhDnrdW6lTCFPx+Xp/z/6cUIAFNBVIf10k5KAAAAAElFTkSuQmCC',
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    724: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          SkeletonTheme: function () {
            return a;
          },
          default: function () {
            return r;
          },
        });
      var n = i(2265);
      let A = n.createContext({});
      function r({
        count: t = 1,
        wrapper: e,
        className: i,
        containerClassName: r,
        containerTestId: a,
        circle: c = !1,
        style: u,
        ...s
      }) {
        var l, h, o;
        let g = n.useContext(A),
          d = { ...s };
        for (let [t, e] of Object.entries(s)) void 0 === e && delete d[t];
        let f = { ...g, ...d, circle: c },
          b = {
            ...u,
            ...(function ({
              baseColor: t,
              highlightColor: e,
              width: i,
              height: n,
              borderRadius: A,
              circle: r,
              direction: a,
              duration: c,
              enableAnimation: u = !0,
            }) {
              let s = {};
              return (
                'rtl' === a && (s['--animation-direction'] = 'reverse'),
                'number' == typeof c && (s['--animation-duration'] = `${c}s`),
                u || (s['--pseudo-element-display'] = 'none'),
                ('string' == typeof i || 'number' == typeof i) && (s.width = i),
                ('string' == typeof n || 'number' == typeof n) && (s.height = n),
                ('string' == typeof A || 'number' == typeof A) && (s.borderRadius = A),
                r && (s.borderRadius = '50%'),
                void 0 !== t && (s['--base-color'] = t),
                void 0 !== e && (s['--highlight-color'] = e),
                s
              );
            })(f),
          },
          w = 'react-loading-skeleton';
        i && (w += ` ${i}`);
        let m = null !== (l = f.inline) && void 0 !== l && l,
          x = [],
          B = Math.ceil(t);
        for (let e = 0; e < B; e++) {
          let i = b;
          if (B > t && e === B - 1) {
            let e = null !== (h = i.width) && void 0 !== h ? h : '100%',
              n = t % 1,
              A = 'number' == typeof e ? e * n : `calc(${e} * ${n})`;
            i = { ...i, width: A };
          }
          let A = n.createElement('span', { className: w, style: i, key: e }, '‌');
          m ? x.push(A) : x.push(n.createElement(n.Fragment, { key: e }, A, n.createElement('br', null)));
        }
        return n.createElement(
          'span',
          {
            className: r,
            'data-testid': a,
            'aria-live': 'polite',
            'aria-busy': null === (o = f.enableAnimation) || void 0 === o || o,
          },
          e ? x.map((t, i) => n.createElement(e, { key: i }, t)) : x,
        );
      }
      function a({ children: t, ...e }) {
        return n.createElement(A.Provider, { value: e }, t);
      }
    },
  },
]);
