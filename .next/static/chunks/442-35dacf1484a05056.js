'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [442],
  {
    1839: function (e, t, a) {
      var i = a(7437);
      a(2265);
      var r = a(3427),
        n = a(4246);
      t.Z = function (e) {
        let { onClick: t, type: a = 'button', isLoading: c = !1, src: o, className: s = '' } = e;
        return (0, i.jsx)('button', {
          className: ['disabled:cursor-not-allowed', s].join(' '),
          onClick: t,
          type: a,
          disabled: c,
          children: c
            ? (0, i.jsx)(n.Z, { style: { color: '#fff', margin: '0 auto' } })
            : (0, i.jsx)(r.Z, { src: o, alt: 'icon', className: 'h-full w-full dark:invert-[1]' }),
        });
      };
    },
    4246: function (e, t, a) {
      var i = a(7437);
      a(2265),
        (t.Z = function (e) {
          let { style: t } = e;
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
    3427: function (e, t, a) {
      var i = a(7437);
      a(2265);
      var r = a(6691),
        n = a.n(r);
      t.Z = function (e) {
        let { className: t, src: a, alt: r, rounded: c = !1 } = e;
        return (0, i.jsx)('div', {
          className: ['relative', t].join(' '),
          children: (0, i.jsx)(n(), {
            src: a,
            alt: r,
            fill: !0,
            className: ''.concat(c ? 'object-cover rounded-full' : 'object-contain', ' '),
            sizes: '(max-width: 768px)',
          }),
        });
      };
    },
    6791: function (e, t, a) {
      a.d(t, {
        JT: function () {
          return c;
        },
        IH: function () {
          return g;
        },
        x7: function () {
          return v;
        },
        T7: function () {
          return o;
        },
        LI: function () {
          return s;
        },
        W6: function () {
          return A;
        },
        Xv: function () {
          return w;
        },
        WA: function () {
          return b;
        },
        JE: function () {
          return _;
        },
        QM: function () {
          return m;
        },
        oB: function () {
          return x;
        },
        DV: function () {
          return B;
        },
        eP: function () {
          return p;
        },
        th: function () {
          return R;
        },
        m8: function () {
          return r;
        },
        LE: function () {
          return i;
        },
        vL: function () {
          return E;
        },
        kS: function () {
          return u;
        },
        i1: function () {
          return n;
        },
        PA: function () {
          return C;
        },
        HB: function () {
          return y;
        },
        PD: function () {
          return H;
        },
        lW: function () {
          return l;
        },
        fR: function () {
          return D;
        },
        rc: function () {
          return d;
        },
        tp: function () {
          return h;
        },
        ws: function () {
          return f;
        },
      });
      var i = {
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
        n = {
          src: '/_next/static/media/my_g-data__icon.c8d315f8.svg',
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
        o = {
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
        u = {
          src: '/_next/static/media/logout__icon.fef64a12.svg',
          height: 36,
          width: 35,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = { src: '/_next/static/media/send__icon.ef522f85.svg', height: 41, width: 40, blurWidth: 0, blurHeight: 0 },
        d = {
          src: '/_next/static/media/sidebar__icon.ffb450fe.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATklEQVR42mWNMQ5AQBQF5wgbJ1AIsYnSAXRarUSpwiV0Sg48kSj98r1kZgALK0sbs4lvnt4+ru5eJuyc7R0B3MzYujg4AXhYhyMgUfrPvqNHQdEzcD6aAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: '/_next/static/media/sidebar_dark__icon.058fcac0.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mXNoQ2AMBQA0TdC0wkQBEITJAPgsFgSJApYAoeEiTvAt5fcHWStRq9IkD0+v8PllRhtJgs4FQa72QpuXQBBCdGwrcRpDjk8OG1xAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        A = { src: '/_next/static/media/chat__icon.a90e55c7.svg', height: 25, width: 25, blurWidth: 0, blurHeight: 0 },
        g = { src: '/_next/static/media/add__icon.759b9985.svg', height: 31, width: 30, blurWidth: 0, blurHeight: 0 },
        f = {
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
        _ = {
          src: '/_next/static/media/cross_active__icon.4db9eef5.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
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
        p = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        v = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        H = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        x = {
          src: '/_next/static/media/default-profile.b62773a2.png',
          height: 90,
          width: 90,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXyeRjxeRjxeBfxeBjxeBfxeBfxeRfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBjxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeRjxeBjxeBdyAzjlAAAAHHRSTlMAAAACAgMKCg0OHSMwMTJFV15fYGGFlMbJ0fn7h3ig8gAAAEBJREFUeNoFQIURgDAQC8GrSL309x+Tw0wYAy6gKiJFEchyvSMDVtp5NLFwfYTwdQfUNCFVgDreT9TEyt37jesPgBMDgQkeLc8AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        y = {
          src: '/_next/static/media/no-data.de51b600.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3BPQqCYAAA0Df0gwfQo0QQ7UERtEVT0VRBXxiCLcFHCU05eBg9nr4Hqcx2mEmBqNUMOxGm7pZugrmrhLHcwsvFTgUTDxulk7efAyMFEqVCUEFt7ewvyH1gZm/lKfo69vEEFGYLsWa/AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        C = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        E = {
          src: '/_next/static/media/like__icon.e95d69bd.svg',
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: '/_next/static/media/dislike__icon.8d708f09.svg',
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42l2NsQ0AIQwD76fkV4CSHjahh4oRg4sgEGcpsiw5hk9yjv+ZUsBpGIWKyYmMERl0XSPvoEsJBbtSveKE6+k7uwD0YxaTHd0JgAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
          src: '/_next/static/media/hidepassword__icon.84b28e09.png',
          height: 60,
          width: 60,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42kXBIQ6CUAAA0CcWj6HBjU2L0WYyewCLm3YP4eacBps3sHAANjYaGwQ4AaMRuMUn8h5vMYDIjJWHq5+/MzB30Xo66qVQCDYyuZ0gpxTsbWXugpqFyuDkoNMA3CS+Yi9LIpO1zwh58RiIbBbx+wAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        };
    },
    9611: function (e, t, a) {
      a.d(t, {
        Ac: function () {
          return w;
        },
        CQ: function () {
          return A;
        },
        D$: function () {
          return d;
        },
        E0: function () {
          return h;
        },
        JT: function () {
          return v;
        },
        JU: function () {
          return m;
        },
        KR: function () {
          return x;
        },
        KV: function () {
          return l;
        },
        TB: function () {
          return p;
        },
        XZ: function () {
          return s;
        },
        a3: function () {
          return c;
        },
        f6: function () {
          return _;
        },
        kk: function () {
          return H;
        },
        nz: function () {
          return u;
        },
        qQ: function () {
          return b;
        },
        sw: function () {
          return f;
        },
        vK: function () {
          return g;
        },
        x1: function () {
          return o;
        },
        yy: function () {
          return n;
        },
      });
      var i = a(8118),
        r = a(6791);
      let n = {
          HOME: '/',
          HISTORY: '/history',
          MYGDATA: '/my_g-data',
          OURGDATA: '/our_g-data',
          ACCOUNT: '/account',
          PERSONAL: '/my_g-data/personal-data',
          CONSENT: '/my_g-data/consent',
          REWARDS: '/my_g-data/rewards',
          SCREEN: '/my_g-data/screen-data',
          SIGNUP: '/signup',
          LOGIN: '/login',
          RESETPASSWORD: '/reset_password',
          PRIVACY: '/privacy_policy',
          COOKIEPOLICY: '/cookie_policy',
          TERMS: '/terms_condition',
          CONFIRMPASSWORD: '/reset_password/confirm',
        },
        c = [
          { title: 'Home', icon: r.LE, to: n.HOME },
          { title: 'History', icon: r.m8, to: n.HISTORY },
          {
            title: 'My G-Data',
            icon: r.i1,
            to: n.MYGDATA,
            nestedItems: [
              { title: 'Personal Data', icon: '', to: n.PERSONAL },
              { title: 'Consent', icon: '', to: n.CONSENT },
              { title: 'Rewards', icon: '', to: n.REWARDS },
              { title: 'Screen Data', icon: '', to: n.SCREEN },
            ],
          },
          { title: 'Our G-Data', icon: r.i1, to: n.OURGDATA },
          { title: 'My Account', icon: r.JT, to: n.ACCOUNT },
        ],
        o = [
          { title: 'Home', icon: r.LE, to: n.HOME },
          { title: 'Login', icon: r.kS, to: n.LOGIN },
          { title: 'Register', icon: r.JT, to: n.SIGNUP },
        ],
        s = [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        u = [
          { title: 'Generate Text Only', color: '#046C98', value: i.D.TEXT, darkColor: 'FAB515' },
          { title: 'Generate Image Only', color: '#F5B11A', value: i.D.IMAGES, darkColor: '#E4C375' },
          { title: 'Generate Text + Image', color: '#E62431', value: i.D.BOTH, darkColor: '#EE3E2E' },
        ],
        l = { firstName: '', lastName: '', email: '', password: '', username: '' },
        d = { email: '', password: '' },
        h = { email: '' },
        A = { token: '', password: '', confirm_password: '' },
        g = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          privacyPolicy: !1,
          termsConditions: !1,
          cookiePolicy: !1,
        },
        f = {
          date: '',
          high_temperature: 0,
          low_temperature: 0,
          emotional_list: [],
          emotional_overall: '',
          weather: '',
          relative_finance_status: '',
          exercise_time: 0,
          any_social_life: s[0].value,
        },
        m = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'Companies', accessor: 'Companies' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'id', accessor: 'id' },
        ],
        _ = [
          { Header: 'Personal Data and ScreenData', accessor: 'PDataAndScreen' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Personal Defined Value', accessor: 'PDefinedValue' },
          { Header: 'Other Companies Value', accessor: 'OtherCompValue' },
          { Header: 'id', accessor: 'id' },
        ],
        b = [
          { Header: 'Date', accessor: 'date' },
          { Header: 'High Temperature', accessor: 'high_temperature' },
          { Header: 'Low Temperature', accessor: 'low_temperature' },
          { Header: 'Weather Type', accessor: 'weather' },
          { Header: 'Emotional List', accessor: 'emotional_list' },
          { Header: 'Emotional Overall', accessor: 'emotional_overall' },
          { Header: 'Relative Finance Status', accessor: 'relative_finance_status' },
          { Header: 'Exercise Total Time', accessor: 'exercise_time' },
          { Header: 'Photos', accessor: 'photos' },
          { Header: 'Health Overall', accessor: 'health_overall' },
          { Header: 'Any Social Life', accessor: 'any_social_life' },
          { Header: 'Social Life List', accessor: 'social_life_list' },
          { Header: 'Weight', accessor: 'weight' },
          { Header: 'Family Status', accessor: 'family_status' },
          { Header: 'Device Screen Time', accessor: 'device_screen_time' },
          { Header: 'Work Life Balance', accessor: 'work_life_balance' },
          { Header: 'Journaling', accessor: 'journaling' },
        ],
        w = [
          { Header: 'Questions', accessor: 'question' },
          { Header: 'Answers', accessor: 'answer' },
          { Header: 'Image', accessor: 'images' },
          { Header: 'Feedback', accessor: 'choice' },
        ],
        p = [
          { Header: 'Consents', accessor: 'consents' },
          { Header: '08-13-2023', accessor: 'date1' },
          { Header: '08-14-2023', accessor: 'date2' },
          { Header: '08-15-2023', accessor: 'date3' },
          { Header: '08-16-2023', accessor: 'date4' },
          { Header: '08-17-2023', accessor: 'date5' },
          { Header: 'Consent Value', accessor: 'consentValue' },
          { Header: 'Rewards', accessor: 'rewards' },
        ],
        v = {
          emotional_list: 'list of emotions experienced throughout the day',
          high_temperature: 'highest temperature of the day',
          emotional_overall: 'an overall assessment of the days feelings',
          low_temperature: 'lowest temperature of the day',
          relative_finance_status: 'relative financial status ',
          weather: 'list of the weather of the day',
          exercise_time: 'total amount of exercise during the day',
          photos: 'any personal images that describe the day',
          exercise_total_time: 'total amount of exercise during the day',
          health_overall: 'an assessment of the days health',
          any_social_life: 'whether or not any social life occurred',
          social_life_list: 'list of social activities',
          weight: 'measure of weight in pounds',
          family_status: 'status of close friends and family',
          device_screen_time: 'amount of time spent on personal devices',
          work_life_balance: 'overall focus of the day in a range between 0(work)-1(relaxation',
          journaling: 'any points throughout the day worthy of note',
        },
        H = '1450px',
        x = [10, 20, 30, 40];
    },
    1846: function (e, t, a) {
      a.d(t, {
        O: function () {
          return r;
        },
      });
      var i = a(2265);
      let r = (e, t) => {
        let a = (0, i.useCallback)(
          (a) => {
            e && e.current && !e.current.contains(a.target) && t();
          },
          [t, e],
        );
        (0, i.useEffect)(
          () => (
            document.addEventListener('mousedown', a),
            () => {
              document.removeEventListener('mousedown', a);
            }
          ),
          [a],
        );
      };
    },
    9907: function (e, t, a) {
      a.d(t, {
        i: function () {
          return r;
        },
      });
      var i = a(2265);
      function r() {
        let [e, t] = (0, i.useState)({ width: 0, height: 0 });
        return (
          (0, i.useEffect)(() => {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return window.addEventListener('resize', e), e(), () => window.removeEventListener('resize', e);
          }, []),
          { width: e.width, height: e.height }
        );
      }
    },
    7152: function (e, t, a) {
      a.d(t, {
        P: function () {
          return s;
        },
      });
      var i = a(3198),
        r = a(2265),
        n = a(5531),
        c = a(8118),
        o = a(323);
      let s = () => {
        let {
            chats: e,
            userPrompt: t,
            chatHistory: a,
            recentChatHistory: s,
            activeChatID: u,
          } = (0, i.v9)((e) => e.chats),
          l = (0, n.TL)(),
          d = (0, r.useCallback)(
            (e) => {
              l((0, o.hH)(e));
            },
            [l],
          ),
          h = (0, r.useCallback)(() => {
            l((0, o.Zp)());
          }, [l]),
          A = (0, r.useCallback)(
            (e) => {
              l((0, o.IM)(e));
            },
            [l],
          ),
          g = (0, r.useCallback)(
            (e) => {
              l((0, o.vV)(e));
            },
            [l],
          ),
          f = (0, r.useCallback)(() => {
            l((0, o.vV)({ data: '', choice: c.D.TEXT }));
          }, [l]),
          m = (0, r.useCallback)(
            (e) => {
              l((0, o._1)(e));
            },
            [l],
          ),
          _ = (0, r.useCallback)(
            (e) => {
              l((0, o.cM)(e));
            },
            [l],
          ),
          b = (0, r.useCallback)(() => {
            l((0, o.vO)());
          }, [l]),
          w = (0, r.useCallback)(
            (e) => {
              l((0, o.TK)(e));
            },
            [l],
          ),
          p = (0, r.useCallback)(
            (e) => {
              w(e.id), e.messages.length > 0 && l((0, o.NI)(e.messages));
            },
            [l, w],
          );
        return {
          chats: e,
          userPrompt: t,
          chatHistory: a,
          recentChatHistory: s,
          activeChatID: u,
          resetUserPrompt: f,
          updateChat: A,
          setUserPrompt: g,
          setChatHistory: m,
          setChats: d,
          deleteChats: h,
          startNewChat: b,
          setRecentChatHistory: _,
          openPreviousChats: p,
          setActiveChatID: w,
        };
      };
    },
    323: function (e, t, a) {
      a.d(t, {
        IM: function () {
          return u;
        },
        NI: function () {
          return g;
        },
        TK: function () {
          return f;
        },
        Zp: function () {
          return d;
        },
        _1: function () {
          return l;
        },
        cM: function () {
          return h;
        },
        hH: function () {
          return o;
        },
        vO: function () {
          return A;
        },
        vV: function () {
          return s;
        },
      });
      var i = a(9930),
        r = a(8118);
      let n = {
          chats: [],
          chatHistory: [],
          recentChatHistory: {},
          activeChatID: void 0,
          userPrompt: { data: '', choice: r.D.TEXT },
        },
        c = (0, i.oM)({
          name: 'chats',
          initialState: n,
          reducers: {
            setChatsAction: (e, t) => ({ ...e, chats: [...e.chats, t.payload] }),
            updateChatAction: (e, t) => ({
              ...e,
              chats: e.chats.map((e) => (e.messageID === t.payload.messageID ? t.payload : e)),
            }),
            setUserPromptAction: (e, t) => ({ ...e, userPrompt: t.payload }),
            setChatHistoryAction: (e, t) => ({ ...e, chatHistory: t.payload }),
            deleteChatsActions: (e) => ({ ...e, chats: [] }),
            setRecentChatHistoryAction: (e, t) => ({ ...e, recentChatHistory: t.payload }),
            startNewChatAction: (e) => ({ ...e, chats: [], activeChatID: void 0 }),
            openPreviousChatsAction: (e, t) => ({ ...e, chats: t.payload }),
            setActiveChatIdAction: (e, t) => ({ ...e, activeChatID: t.payload }),
          },
        }),
        {
          setChatsAction: o,
          setUserPromptAction: s,
          updateChatAction: u,
          setChatHistoryAction: l,
          deleteChatsActions: d,
          setRecentChatHistoryAction: h,
          startNewChatAction: A,
          openPreviousChatsAction: g,
          setActiveChatIdAction: f,
        } = c.actions;
      t.ZP = c.reducer;
    },
    8118: function (e, t, a) {
      var i, r;
      a.d(t, {
        D: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).BOTH = 'both'),
        (r.TEXT = 'answer'),
        (r.IMAGES = 'images');
    },
    22: function (e, t, a) {
      a.d(t, {
        d: function () {
          return n;
        },
      });
      var i = a(9930);
      let r = (0, i.oM)({
          name: 'loading',
          initialState: { isLoading: !1 },
          reducers: { setIsLoadingStateAction: (e, t) => ({ ...e, isLoading: t.payload }) },
        }),
        { setIsLoadingStateAction: n } = r.actions;
      t.Z = r.reducer;
    },
    859: function (e, t, a) {
      a.d(t, {
        Jg: function () {
          return o;
        },
        O$: function () {
          return n;
        },
        Pn: function () {
          return c;
        },
        Y4: function () {
          return u;
        },
        py: function () {
          return s;
        },
      });
      var i = a(9930);
      let r = (0, i.oM)({
          name: 'my_g_data',
          initialState: { personalData: {}, gData: {}, rData: {}, cData: {}, screenData: [] },
          reducers: {
            setPersonalDataAction: (e, t) => ({ ...e, personalData: { ...e.personalData, ...t.payload } }),
            setGDataAction: (e, t) => ({ ...e, gData: t.payload }),
            setRDataAction: (e, t) => ({ ...e, rData: t.payload }),
            setCDataAction: (e, t) => ({ ...e, cData: t.payload }),
            setScreenDataAction: (e, t) => ({ ...e, screenData: t.payload }),
          },
        }),
        {
          setPersonalDataAction: n,
          setGDataAction: c,
          setRDataAction: o,
          setCDataAction: s,
          setScreenDataAction: u,
        } = r.actions;
      t.ZP = r.reducer;
    },
    8421: function (e, t, a) {
      a.d(t, {
        H: function () {
          return n;
        },
      });
      var i = a(9930);
      let r = (0, i.oM)({
          name: 'sidebar',
          initialState: { isOpen: !1 },
          reducers: { setIsOpenAction: (e, t) => ({ isOpen: t.payload }) },
        }),
        { setIsOpenAction: n } = r.actions;
      t.Z = r.reducer;
    },
    5531: function (e, t, a) {
      a.d(t, {
        TL: function () {
          return w;
        },
      });
      var i = a(7373),
        r = a(9930),
        n = a(3198),
        c = a(1267),
        o = a(6346),
        s = a(1850),
        u = a(8557),
        l = a(22),
        d = a(859),
        h = a(323),
        A = a(8421),
        g = a(54);
      let f = (0, i.UY)({ user: u.Z, loading: l.Z, my_g_data: d.ZP, chats: h.ZP, sidebar: A.Z, weather: g.Z }),
        m = { key: 'root', storage: s.Z, blacklist: ['loading', 'user', 'chats', 'my_g_data'] },
        _ = (0, c.OJ)(m, f),
        b = (0, r.xC)({ reducer: _, middleware: [o.Z] });
      (t.ZP = b), (0, c.p5)(b);
      let w = n.I0;
    },
    8557: function (e, t, a) {
      a.d(t, {
        K: function () {
          return n;
        },
      });
      var i = a(9930);
      let r = (0, i.oM)({
          name: 'user',
          initialState: { isAuthenticated: !1, user: void 0 },
          reducers: { setUserAction: (e, t) => ({ ...e, ...t.payload }) },
        }),
        { setUserAction: n } = r.actions;
      t.Z = r.reducer;
    },
    54: function (e, t, a) {
      a.d(t, {
        _: function () {
          return n;
        },
      });
      var i = a(9930);
      let r = (0, i.oM)({
          name: 'weather',
          initialState: { weather: void 0 },
          reducers: { setWeatherAction: (e, t) => ({ ...e, weather: t.payload }) },
        }),
        { setWeatherAction: n } = r.actions;
      t.Z = r.reducer;
    },
  },
]);