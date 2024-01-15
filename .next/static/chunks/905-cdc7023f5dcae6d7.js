(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [905],
  {
    8556: function (e, t, r) {
      !(function (e, t) {
        'use strict';
        var n,
          o = 'default' in t ? t.default : t;
        function i(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(r), !0).forEach(function (t) {
                  a(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        function a(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          );
        }
        function u(e, t) {
          if (null == e) return {};
          var r,
            n,
            o = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.keys(e);
              for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
          }
          return o;
        }
        function c(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
              if (null != o) {
                var i = [],
                  l = !0,
                  a = !1;
                try {
                  for (o = o.call(e); !(l = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
                } catch (e) {
                  (a = !0), (n = e);
                } finally {
                  try {
                    l || null == o.return || o.return();
                  } finally {
                    if (a) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return s(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r))
                  return Array.from(e);
                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }
        function s(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var d =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : 'undefined' != typeof self
            ? self
            : {};
        function f(e) {
          return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
        }
        function p(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        var y = p(function (e, t) {
          var r =
            (d && d.__rest) ||
            function (e, t) {
              var r = {};
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
              if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                  0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
              return r;
            };
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.scripts = void 0), (t.scripts = {});
          var n = function (e) {
            var r = document.querySelector('script[src="' + e + '"]');
            if (r) return (t.scripts[e] = { loading: !1, error: null, scriptEl: r });
          };
          t.default = function (e) {
            var l = e.src,
              a = e.checkForExisting,
              u = void 0 !== a && a,
              c = r(e, ['src', 'checkForExisting']),
              s = l ? t.scripts[l] : void 0;
            !s && u && l && i && (s = n(l));
            var d = (0, o.useState)(s ? s.loading : !!l),
              f = d[0],
              p = d[1],
              y = (0, o.useState)(s ? s.error : null),
              b = y[0],
              E = y[1];
            return (
              (0, o.useEffect)(
                function () {
                  if (i && l && f && !b) {
                    (s = t.scripts[l]) || !u || (s = n(l)),
                      s
                        ? (e = s.scriptEl)
                        : (((e = document.createElement('script')).src = l),
                          Object.keys(c).forEach(function (t) {
                            void 0 === e[t] ? e.setAttribute(t, c[t]) : (e[t] = c[t]);
                          }),
                          (s = t.scripts[l] = { loading: !0, error: null, scriptEl: e }));
                    var e,
                      r = function () {
                        s && (s.loading = !1), p(!1);
                      },
                      o = function (e) {
                        s && (s.error = e), E(e);
                      };
                    return (
                      e.addEventListener('load', r),
                      e.addEventListener('error', o),
                      document.body.appendChild(e),
                      function () {
                        e.removeEventListener('load', r), e.removeEventListener('error', o);
                      }
                    );
                  }
                },
                [l],
              ),
              [f, b]
            );
          };
          var i = 'undefined' != typeof window && void 0 !== window.document;
        });
        f(y), y.scripts;
        var b = p(function (e, t) {
            var r =
              (d && d.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.scripts = t.default = void 0),
              Object.defineProperty(t, 'default', {
                enumerable: !0,
                get: function () {
                  return r(y).default;
                },
              }),
              Object.defineProperty(t, 'scripts', {
                enumerable: !0,
                get: function () {
                  return y.scripts;
                },
              });
          }),
          E = f(b);
        b.scripts;
        var v = function (e, t, r) {
            var n = {};
            return delete Object.assign(n, e, a({}, r, e[t]))[t], n;
          },
          O = function (e, t) {
            var r = { plaid: null, open: !1, onExitCallback: null };
            if ('undefined' == typeof window || !window.Plaid) throw Error('Plaid not loaded');
            return (
              (r.plaid = t(
                l(
                  l({}, e),
                  {},
                  {
                    onExit: function (t, n) {
                      (r.open = !1), e.onExit && e.onExit(t, n), r.onExitCallback && r.onExitCallback();
                    },
                  },
                ),
              )),
              {
                open: function () {
                  r.plaid && ((r.open = !0), (r.onExitCallback = null), r.plaid.open());
                },
                exit: function (e, t) {
                  if (!r.open || !r.plaid) {
                    t && t();
                    return;
                  }
                  (r.onExitCallback = t), r.plaid.exit(e), e && e.force && (r.open = !1);
                },
                destroy: function () {
                  r.plaid && (r.plaid.destroy(), (r.plaid = null));
                },
              }
            );
          },
          m = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js',
          g = function () {},
          h = function (e) {
            var r = c(E({ src: m, checkForExisting: !0 }), 2),
              n = r[0],
              o = r[1],
              i = c(t.useState(null), 2),
              a = i[0],
              u = i[1],
              s = c(t.useState(!1), 2),
              d = s[0],
              f = s[1],
              p = (e.product || []).slice().sort().join(',');
            return (
              t.useEffect(
                function () {
                  if (!n && (e.token || e.publicKey || e.receivedRedirectUri)) {
                    if (o || !window.Plaid) {
                      console.error('Error loading Plaid', o);
                      return;
                    }
                    null != a &&
                      a.exit({ force: !0 }, function () {
                        return a.destroy();
                      });
                    var t,
                      r,
                      i =
                        ((t = l(
                          l({}, e),
                          {},
                          {
                            onLoad: function () {
                              f(!0), e.onLoad && e.onLoad();
                            },
                          },
                        )),
                        (r = window.Plaid.create),
                        O(v(t, 'publicKey', 'key'), r));
                    return (
                      u(i),
                      function () {
                        return i.exit({ force: !0 }, function () {
                          return i.destroy();
                        });
                      }
                    );
                  }
                },
                [n, o, e.publicKey, e.token, p],
              ),
              {
                error: o,
                ready: null != a && (!n || d),
                exit: a ? a.exit : g,
                open: a
                  ? a.open
                  : function () {
                      e.token ||
                        console.warn(
                          'react-plaid-link: You cannot call open() without a valid token supplied to usePlaidLink. This is a no-op.',
                        );
                    },
              }
            );
          },
          I = ['children', 'style', 'className'],
          w = function (e) {
            var t = e.children,
              r = e.style,
              n = e.className,
              i = h(l({}, u(e, I))),
              a = i.error,
              c = i.open;
            return o.createElement(
              'button',
              {
                disabled: !!a,
                type: 'button',
                className: n,
                style: l(
                  {
                    padding: '6px 4px',
                    outline: 'none',
                    background: '#FFFFFF',
                    border: '2px solid #F1F1F1',
                    borderRadius: '4px',
                  },
                  r,
                ),
                onClick: function () {
                  return c();
                },
              },
              t,
            );
          };
        w.displayName = 'PlaidLink';
        var P = ['style', 'className'];
        ((n = e.PlaidLinkStableEvent || (e.PlaidLinkStableEvent = {})).OPEN = 'OPEN'),
          (n.EXIT = 'EXIT'),
          (n.HANDOFF = 'HANDOFF'),
          (n.SELECT_INSTITUTION = 'SELECT_INSTITUTION'),
          (n.ERROR = 'ERROR'),
          (n.BANK_INCOME_INSIGHTS_COMPLETED = 'BANK_INCOME_INSIGHTS_COMPLETED'),
          (n.IDENTITY_VERIFICATION_PASS_SESSION = 'IDENTITY_VERIFICATION_PASS_SESSION'),
          (n.IDENTITY_VERIFICATION_FAIL_SESSION = 'IDENTITY_VERIFICATION_FAIL_SESSION'),
          (e.PlaidEmbeddedLink = function (e) {
            var r = e.style,
              n = e.className,
              i = u(e, P),
              a = c(E({ src: m, checkForExisting: !0 }), 2),
              s = a[0],
              d = a[1],
              f = t.useRef(null);
            return (
              t.useEffect(
                function () {
                  if (!s) {
                    if (d || !window.Plaid) {
                      console.error('Error loading Plaid', d);
                      return;
                    }
                    if (null == i.token || '' == i.token) {
                      console.error('A token is required to initialize embedded Plaid Link');
                      return;
                    }
                    var e = window.Plaid.createEmbedded(l({}, i), f.current).destroy;
                    return function () {
                      e();
                    };
                  }
                },
                [s, d, i, f],
              ),
              o.createElement('div', { style: r, className: n, ref: f })
            );
          }),
          (e.PlaidLink = w),
          (e.usePlaidLink = h),
          Object.defineProperty(e, '__esModule', { value: !0 });
      })(t, r(2265));
    },
    724: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          SkeletonTheme: function () {
            return l;
          },
          default: function () {
            return i;
          },
        });
      var n = r(2265);
      let o = n.createContext({});
      function i({
        count: e = 1,
        wrapper: t,
        className: r,
        containerClassName: i,
        containerTestId: l,
        circle: a = !1,
        style: u,
        ...c
      }) {
        var s, d, f;
        let p = n.useContext(o),
          y = { ...c };
        for (let [e, t] of Object.entries(c)) void 0 === t && delete y[e];
        let b = { ...p, ...y, circle: a },
          E = {
            ...u,
            ...(function ({
              baseColor: e,
              highlightColor: t,
              width: r,
              height: n,
              borderRadius: o,
              circle: i,
              direction: l,
              duration: a,
              enableAnimation: u = !0,
            }) {
              let c = {};
              return (
                'rtl' === l && (c['--animation-direction'] = 'reverse'),
                'number' == typeof a && (c['--animation-duration'] = `${a}s`),
                u || (c['--pseudo-element-display'] = 'none'),
                ('string' == typeof r || 'number' == typeof r) && (c.width = r),
                ('string' == typeof n || 'number' == typeof n) && (c.height = n),
                ('string' == typeof o || 'number' == typeof o) && (c.borderRadius = o),
                i && (c.borderRadius = '50%'),
                void 0 !== e && (c['--base-color'] = e),
                void 0 !== t && (c['--highlight-color'] = t),
                c
              );
            })(b),
          },
          v = 'react-loading-skeleton';
        r && (v += ` ${r}`);
        let O = null !== (s = b.inline) && void 0 !== s && s,
          m = [],
          g = Math.ceil(e);
        for (let t = 0; t < g; t++) {
          let r = E;
          if (g > e && t === g - 1) {
            let t = null !== (d = r.width) && void 0 !== d ? d : '100%',
              n = e % 1,
              o = 'number' == typeof t ? t * n : `calc(${t} * ${n})`;
            r = { ...r, width: o };
          }
          let o = n.createElement('span', { className: v, style: r, key: t }, '‌');
          O ? m.push(o) : m.push(n.createElement(n.Fragment, { key: t }, o, n.createElement('br', null)));
        }
        return n.createElement(
          'span',
          {
            className: i,
            'data-testid': l,
            'aria-live': 'polite',
            'aria-busy': null === (f = b.enableAnimation) || void 0 === f || f,
          },
          t ? m.map((e, r) => n.createElement(t, { key: r }, e)) : m,
        );
      }
      function l({ children: e, ...t }) {
        return n.createElement(o.Provider, { value: t }, e);
      }
    },
  },
]);
