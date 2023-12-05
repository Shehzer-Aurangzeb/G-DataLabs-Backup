(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [137],
  {
    3839: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 4697));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var s = a(7437),
        n = a(2265),
        l = a(9907),
        r = a(1419),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, l.i)(),
          [d, p] = (0, n.useState)(!1),
          u = (0, n.useRef)(null);
        return (
          (0, o.O)(u, () => {
            p(!1);
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              c < 1024 &&
                (0, s.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, s.jsx)(i.Z, {
                    className:
                      'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                    onClick: () => p(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, s.jsxs)('div', {
                ref: u,
                className: [
                  'bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto '.concat(
                    c < 1024
                      ? 'fixed right-0 z-20 transition-all duration-300 '.concat(d ? 'w-full pl-5 pr-3' : 'w-0 p-0')
                      : 'w-full pl-5 pr-3',
                  ),
                  a,
                ].join(' '),
                children: [
                  c < 1024 &&
                    (0, s.jsx)(i.Z, {
                      className:
                        'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px] dark:invert-[1]',
                      onClick: () => p(!d),
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
    4697: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a(7437),
        n = a(2265),
        l = a(6571),
        r = a(9611),
        o = function (e) {
          let { data: t } = e,
            [a, l] = (0, n.useState)(!1);
          return (0, s.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                l(!a);
              },
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, s.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: t.date,
                    }),
                    (0, s.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, s.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, s.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 '.concat(
                              a ? 'rotate-0' : 'rotate-90',
                              ' bg-main dark:bg-darkMain rounded-md',
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    a ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    t.detail.length > 0 &&
                      (0, s.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: t.detail,
                      }),
                    (0, s.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        t.screenRecording &&
                          (0, s.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, s.jsx)('source', { src: t.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, s.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        t.cameraRecording.length > 0 &&
                          (0, s.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, s.jsx)('source', { src: t.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, s.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            t.id,
          );
        },
        i = function () {
          let { screenData: e } = (0, l.T)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    r.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, s.jsx)('div', {
                className: 'max-w-['.concat(r.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: e.map((e) => (0, s.jsx)(o, { data: e }, e.id)),
              }),
            ],
          });
        };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return m;
        },
      });
      var s = a(2265),
        n = a(171),
        l = a(4548),
        r = a.n(l),
        o = a(6171),
        i = a(7445),
        c = a(5888),
        d = a(1515),
        p = a(7350),
        u = a(3136);
      let m = () => {
        let { isLoading: e, setIsLoading: t } = (0, i.r)(),
          {
            personalData: a,
            setPersonalData: l,
            gData: m,
            rData: x,
            cData: f,
            screenData: h,
            compData: b,
            setCompData: w,
          } = (0, c.h)(),
          { getAllConsentData: y, gTableColumns: g, updateMyGData: k, getAllPersonalData: v } = (0, u.q)(),
          j = (0, s.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await o.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, d.Z4)(e),
                  { data: s } = await o.h.post('api/personal_data_consents_rewards', a),
                  n = (0, d.uR)({ tableName: p.me.PData, data: s.data });
                l(n), await k(), await y(), await v();
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, l, k, y, v],
          ),
          _ = (0, s.useCallback)(
            async (e) => {
              let { id: a, payload: s } = e;
              try {
                t(!0),
                  await o.h.patch('api/user_consents_rewards/'.concat(a, '/'), s),
                  await y(),
                  await k(),
                  n.toast.success('Consent updated');
              } catch (e) {
                n.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, y, k],
          ),
          N = (0, s.useCallback)(
            async (e) => {
              try {
                t(!0);
                let { data: a } = await o.h.post('api/company_consents_rewards', e),
                  s = (0, d.uR)({ tableName: p.me.CompData, data: a.data });
                w(s), n.toast.success('Consent updated');
              } catch (e) {
                n.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, w],
          ),
          C = (0, s.useCallback)(
            (e) => {
              var t;
              let s = null !== (t = e.date) && void 0 !== t ? t : r()().format('YYYY-MM-DD'),
                n = [];
              for (let t of e.photos) {
                let e = new FileReader();
                (e.onload = (e) => {
                  n.push({ file_url: e.target && null !== e.target.result ? e.target.result : '' });
                }),
                  e.readAsDataURL(t);
              }
              setTimeout(() => {
                let t = { ...a, [s]: { ...e, photos: [...n] } };
                l(t);
              }, 3e3);
            },
            [a, l],
          );
        return {
          savePersonalData: j,
          isLoading: e,
          personalData: a,
          updateConsentRewards: _,
          savePersonalDataTemporarily: C,
          updateCompanyConsentRewards: N,
          gData: m,
          rData: x,
          cData: f,
          screenData: h,
          gTableColumns: g,
          compData: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 254, 100, 136, 971, 596, 744], function () {
      return e((e.s = 3839));
    }),
      (_N_E = e.O());
  },
]);
