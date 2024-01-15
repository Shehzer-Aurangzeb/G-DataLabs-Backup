(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [137],
  {
    3839: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8390)), Promise.resolve().then(a.bind(a, 4697));
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
        r = a(6571),
        l = a(9611),
        o = function (e) {
          let { data: t } = e,
            [a, r] = (0, s.useState)(!1);
          return (0, n.jsxs)(
            'button',
            {
              type: 'button',
              className: 'bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ',
              onClick: () => {
                r(!a);
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
          let { screenData: e } = (0, r.T)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('h1', {
                className:
                  'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-['.concat(
                    l.kk,
                    ']',
                  ),
                children: 'Screen Data',
              }),
              (0, n.jsx)('div', {
                className: 'max-w-['.concat(l.kk, '] overflow-x-auto w-full h-full pb-5'),
                children: e.map((e) => (0, n.jsx)(o, { data: e }, e.id)),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [986, 139, 16, 897, 100, 509, 971, 596, 744], function () {
      return e((e.s = 3839));
    }),
      (_N_E = e.O());
  },
]);
