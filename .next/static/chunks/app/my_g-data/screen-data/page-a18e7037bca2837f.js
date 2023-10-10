(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [137],
  {
    3839: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 4697));
    },
    8390: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(7437),
        s = a(2265),
        l = a(9907),
        r = a(6791),
        o = a(1846),
        i = a(1839);
      t.default = function (e) {
        let { children: t, className: a = '' } = e,
          { width: c } = (0, l.i)(),
          [d, p] = (0, s.useState)(!1),
          u = (0, s.useRef)(null);
        return (
          (0, o.O)(u, () => {
            p(!1);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              c < 1024 &&
                (0, n.jsx)('div', {
                  className: 'h-[calc(100vh_-_2.5rem)] bg-light dark:bg-main relative w-[50px]',
                  children: (0, n.jsx)(i.Z, {
                    className: 'z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]',
                    onClick: () => p(!d),
                    type: 'button',
                    src: r.tp,
                  }),
                }),
              (0, n.jsxs)('div', {
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
                    (0, n.jsx)(i.Z, {
                      className: 'z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]',
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
      var n = a(7437),
        s = a(2265),
        l = a(6571),
        r = a(9611),
        o = function (e) {
          let { data: t } = e,
            [a, l] = (0, s.useState)(!1);
          return (0, n.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                l(!a);
              },
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex flex-row justify-between items-center py-6 px-3',
                  children: [
                    (0, n.jsx)('h1', {
                      className: 'text-primary text-2xl font-sans font-semibold dark:text-main',
                      children: t.date,
                    }),
                    (0, n.jsxs)('div', {
                      className: 'relative h-[40px] w-[40px]',
                      children: [
                        (0, n.jsx)('span', {
                          className:
                            'absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md',
                        }),
                        (0, n.jsx)('span', {
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
                (0, n.jsxs)('div', {
                  className: 'px-3 transition-all duration-300 '.concat(
                    a ? 'max-h-fit pb-6' : 'max-h-0 py-0',
                    ' overflow-hidden',
                  ),
                  children: [
                    t.detail.length > 0 &&
                      (0, n.jsx)('p', {
                        className: 'text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left',
                        children: t.detail,
                      }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4',
                      children: [
                        t.screenRecording &&
                          (0, n.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, n.jsx)('source', { src: t.screenRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, n.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
                            ],
                          }),
                        t.cameraRecording.length > 0 &&
                          (0, n.jsxs)('video', {
                            controls: !0,
                            className: 'my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 '.concat(
                              a ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-10',
                            ),
                            children: [
                              (0, n.jsx)('source', { src: t.cameraRecording, type: 'video/mp4' }),
                              'Your browser does not support the video tag.',
                              (0, n.jsx)('track', { kind: 'captions', srcLang: 'en', label: 'English captions' }),
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
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    r.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, n.jsx)('div', {
                className: 'max-w-['.concat(r.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: e.map((e) => (0, n.jsx)(o, { data: e }, e.id)),
              }),
            ],
          });
        };
    },
    6571: function (e, t, a) {
      'use strict';
      a.d(t, {
        T: function () {
          return p;
        },
      });
      var n = a(2265),
        s = a(171),
        l = a(6171),
        r = a(7445),
        o = a(5888),
        i = a(1515),
        c = a(7350),
        d = a(289);
      let p = () => {
        let { isLoading: e, setIsLoading: t } = (0, r.r)(),
          { personalData: a, setPersonalData: p, gData: u, rData: m, cData: x, screenData: f } = (0, o.h)(),
          { getAllConsentData: h, gTableColumns: b, updateMyGData: w, getAllPersonalData: y } = (0, d.q)(),
          g = (0, n.useCallback)(
            async (e) => {
              try {
                if ((t(!0), e.photos)) {
                  let t = new FormData();
                  for (let a of (t.append('field_name', 'photos'), e.photos)) t.append('image_files', a);
                  await l.h.post('api/personal_data_consents_rewards/file_upload', t);
                }
                delete e.photos;
                let a = (0, i.Z4)(e),
                  { data: n } = await l.h.post('api/personal_data_consents_rewards', a),
                  s = (0, i.uR)({ tableName: c.me.PData, data: n.data });
                p(s), await w(), await h(), await y;
              } catch (e) {
              } finally {
                t(!1);
              }
            },
            [t, p, w, h, y],
          ),
          j = (0, n.useCallback)(
            async (e) => {
              let { id: a, payload: n } = e;
              try {
                t(!0),
                  await l.h.patch('api/user_consents_rewards/'.concat(a, '/'), n),
                  await h(),
                  await w(),
                  s.toast.success('Consent updated');
              } catch (e) {
                s.toast.error('Some problem updating consent');
              } finally {
                t(!1);
              }
            },
            [t, h, w],
          );
        return {
          savePersonalData: g,
          isLoading: e,
          personalData: a,
          updateConsentRewards: j,
          gData: u,
          rData: m,
          cData: x,
          screenData: f,
          gTableColumns: b,
        };
      };
    },
  },
  function (e) {
    e.O(0, [986, 139, 638, 442, 289, 971, 596, 744], function () {
      return e((e.s = 3839));
    }),
      (_N_E = e.O());
  },
]);
