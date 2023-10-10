(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [630],
  {
    4033: function (e, t, n) {
      e.exports = n(8165);
    },
    8556: function (e, t, n) {
      !(function (e, t) {
        'use strict';
        var r,
          o = 'default' in t ? t.default : t;
        function i(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function a(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          );
        }
        function u(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n,
                r,
                o = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
              if (null != o) {
                var i = [],
                  l = !0,
                  a = !1;
                try {
                  for (o = o.call(e); !(l = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); l = !0);
                } catch (e) {
                  (a = !0), (r = e);
                } finally {
                  try {
                    l || null == o.return || o.return();
                  } finally {
                    if (a) throw r;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n))
                  return Array.from(e);
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }
        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var s =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : 'undefined' != typeof self
            ? self
            : {};
        function d(e) {
          return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
        }
        function f(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        var p = f(function (e, t) {
          var n =
            (s && s.__rest) ||
            function (e, t) {
              var n = {};
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
              return n;
            };
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.scripts = void 0), (t.scripts = {});
          var r = function (e) {
            var n = document.querySelector('script[src="' + e + '"]');
            if (n) return (t.scripts[e] = { loading: !1, error: null, scriptEl: n });
          };
          t.default = function (e) {
            var l = e.src,
              a = e.checkForExisting,
              u = void 0 !== a && a,
              c = n(e, ['src', 'checkForExisting']),
              s = l ? t.scripts[l] : void 0;
            !s && u && l && i && (s = r(l));
            var d = (0, o.useState)(s ? s.loading : !!l),
              f = d[0],
              p = d[1],
              y = (0, o.useState)(s ? s.error : null),
              b = y[0],
              v = y[1];
            return (
              (0, o.useEffect)(
                function () {
                  if (i && l && f && !b) {
                    (s = t.scripts[l]) || !u || (s = r(l)),
                      s
                        ? (e = s.scriptEl)
                        : (((e = document.createElement('script')).src = l),
                          Object.keys(c).forEach(function (t) {
                            void 0 === e[t] ? e.setAttribute(t, c[t]) : (e[t] = c[t]);
                          }),
                          (s = t.scripts[l] = { loading: !0, error: null, scriptEl: e }));
                    var e,
                      n = function () {
                        s && (s.loading = !1), p(!1);
                      },
                      o = function (e) {
                        s && (s.error = e), v(e);
                      };
                    return (
                      e.addEventListener('load', n),
                      e.addEventListener('error', o),
                      document.body.appendChild(e),
                      function () {
                        e.removeEventListener('load', n), e.removeEventListener('error', o);
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
        d(p), p.scripts;
        var y = f(function (e, t) {
            var n =
              (s && s.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.scripts = t.default = void 0),
              Object.defineProperty(t, 'default', {
                enumerable: !0,
                get: function () {
                  return n(p).default;
                },
              }),
              Object.defineProperty(t, 'scripts', {
                enumerable: !0,
                get: function () {
                  return p.scripts;
                },
              });
          }),
          b = d(y);
        y.scripts;
        var v = function (e, t, n) {
            var r = {};
            return delete Object.assign(r, e, a({}, n, e[t]))[t], r;
          },
          E = function (e, t) {
            var n = { plaid: null, open: !1, onExitCallback: null };
            if ('undefined' == typeof window || !window.Plaid) throw Error('Plaid not loaded');
            return (
              (n.plaid = t(
                l(
                  l({}, e),
                  {},
                  {
                    onExit: function (t, r) {
                      (n.open = !1), e.onExit && e.onExit(t, r), n.onExitCallback && n.onExitCallback();
                    },
                  },
                ),
              )),
              {
                open: function () {
                  n.plaid && ((n.open = !0), (n.onExitCallback = null), n.plaid.open());
                },
                exit: function (e, t) {
                  if (!n.open || !n.plaid) {
                    t && t();
                    return;
                  }
                  (n.onExitCallback = t), n.plaid.exit(e), e && e.force && (n.open = !1);
                },
                destroy: function () {
                  n.plaid && (n.plaid.destroy(), (n.plaid = null));
                },
              }
            );
          },
          O = function () {},
          m = function (e) {
            var n = u(b({ src: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js', checkForExisting: !0 }), 2),
              r = n[0],
              o = n[1],
              i = u(t.useState(null), 2),
              a = i[0],
              c = i[1],
              s = u(t.useState(!1), 2),
              d = s[0],
              f = s[1],
              p = (e.product || []).slice().sort().join(',');
            return (
              t.useEffect(
                function () {
                  if (!r && (e.token || e.publicKey || e.receivedRedirectUri)) {
                    if (o || !window.Plaid) {
                      console.error('Error loading Plaid', o);
                      return;
                    }
                    null != a &&
                      a.exit({ force: !0 }, function () {
                        return a.destroy();
                      });
                    var t,
                      n,
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
                        (n = window.Plaid.create),
                        E(v(t, 'publicKey', 'key'), n));
                    return (
                      c(i),
                      function () {
                        return i.exit({ force: !0 }, function () {
                          return i.destroy();
                        });
                      }
                    );
                  }
                },
                [r, o, e.publicKey, e.token, p],
              ),
              {
                error: o,
                ready: null != a && (!r || d),
                exit: a ? a.exit : O,
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
          g = ['children', 'style', 'className'],
          h = function (e) {
            var t = e.children,
              n = e.style,
              r = e.className,
              i = m(
                l(
                  {},
                  (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          o = {},
                          i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < i.length; r++)
                        (n = i[r]),
                          !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                    }
                    return o;
                  })(e, g),
                ),
              ),
              a = i.error,
              u = i.open;
            return o.createElement(
              'button',
              {
                disabled: !!a,
                type: 'button',
                className: r,
                style: l(
                  {
                    padding: '6px 4px',
                    outline: 'none',
                    background: '#FFFFFF',
                    border: '2px solid #F1F1F1',
                    borderRadius: '4px',
                  },
                  n,
                ),
                onClick: function () {
                  return u();
                },
              },
              t,
            );
          };
        (h.displayName = 'PlaidLink'),
          ((r = e.PlaidLinkStableEvent || (e.PlaidLinkStableEvent = {})).OPEN = 'OPEN'),
          (r.EXIT = 'EXIT'),
          (r.HANDOFF = 'HANDOFF'),
          (r.SELECT_INSTITUTION = 'SELECT_INSTITUTION'),
          (r.ERROR = 'ERROR'),
          (r.BANK_INCOME_INSIGHTS_COMPLETED = 'BANK_INCOME_INSIGHTS_COMPLETED'),
          (r.IDENTITY_VERIFICATION_PASS_SESSION = 'IDENTITY_VERIFICATION_PASS_SESSION'),
          (r.IDENTITY_VERIFICATION_FAIL_SESSION = 'IDENTITY_VERIFICATION_FAIL_SESSION'),
          (e.PlaidLink = h),
          (e.usePlaidLink = m),
          Object.defineProperty(e, '__esModule', { value: !0 });
      })(t, n(2265));
    },
    724: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          SkeletonTheme: function () {
            return l;
          },
          default: function () {
            return i;
          },
        });
      var r = n(2265);
      let o = r.createContext({});
      function i({
        count: e = 1,
        wrapper: t,
        className: n,
        containerClassName: i,
        containerTestId: l,
        circle: a = !1,
        style: u,
        ...c
      }) {
        var s, d, f;
        let p = r.useContext(o),
          y = { ...c };
        for (let [e, t] of Object.entries(c)) void 0 === t && delete y[e];
        let b = { ...p, ...y, circle: a },
          v = {
            ...u,
            ...(function ({
              baseColor: e,
              highlightColor: t,
              width: n,
              height: r,
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
                ('string' == typeof n || 'number' == typeof n) && (c.width = n),
                ('string' == typeof r || 'number' == typeof r) && (c.height = r),
                ('string' == typeof o || 'number' == typeof o) && (c.borderRadius = o),
                i && (c.borderRadius = '50%'),
                void 0 !== e && (c['--base-color'] = e),
                void 0 !== t && (c['--highlight-color'] = t),
                c
              );
            })(b),
          },
          E = 'react-loading-skeleton';
        n && (E += ` ${n}`);
        let O = null !== (s = b.inline) && void 0 !== s && s,
          m = [],
          g = Math.ceil(e);
        for (let t = 0; t < g; t++) {
          let n = v;
          if (g > e && t === g - 1) {
            let t = null !== (d = n.width) && void 0 !== d ? d : '100%',
              r = e % 1,
              o = 'number' == typeof t ? t * r : `calc(${t} * ${r})`;
            n = { ...n, width: o };
          }
          let o = r.createElement('span', { className: E, style: n, key: t }, '‌');
          O ? m.push(o) : m.push(r.createElement(r.Fragment, { key: t }, o, r.createElement('br', null)));
        }
        return r.createElement(
          'span',
          {
            className: i,
            'data-testid': l,
            'aria-live': 'polite',
            'aria-busy': null === (f = b.enableAnimation) || void 0 === f || f,
          },
          t ? m.map((e, n) => r.createElement(t, { key: n }, e)) : m,
        );
      }
      function l({ children: e, ...t }) {
        return r.createElement(o.Provider, { value: t }, e);
      }
    },
  },
]);
