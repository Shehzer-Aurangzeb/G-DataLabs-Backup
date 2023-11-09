'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [707],
  {
    1839: function (e, t, i) {
      var n = i(7437);
      i(2265);
      var a = i(3427),
        r = i(4246);
      t.Z = function (e) {
        let { onClick: t, type: i = 'button', isLoading: o = !1, src: s, className: c = '' } = e;
        return (0, n.jsx)('button', {
          className: ['disabled:cursor-not-allowed', c].join(' '),
          onClick: t,
          type: i,
          disabled: o,
          children: o
            ? (0, n.jsx)(r.Z, { style: { color: '#fff', margin: '0 auto' } })
            : (0, n.jsx)(a.Z, { src: s, alt: 'icon', className: 'h-full w-full' }),
        });
      };
    },
    4246: function (e, t, i) {
      var n = i(7437);
      i(2265),
        (t.Z = function (e) {
          let { style: t } = e;
          return (0, n.jsxs)('svg', {
            className: 'animate-spin -ml-1 mr-3 h-5 w-5 text-disabled',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            style: t,
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
    3427: function (e, t, i) {
      var n = i(7437);
      i(2265);
      var a = i(6691),
        r = i.n(a);
      t.Z = function (e) {
        let { className: t, src: i, alt: a, rounded: o = !1 } = e;
        return (0, n.jsx)('div', {
          className: ['relative', t].join(' '),
          children: (0, n.jsx)(r(), {
            src: i,
            alt: a,
            fill: !0,
            className: ''.concat(o ? 'object-cover rounded-full' : 'object-contain', ' '),
            sizes: '(max-width: 768px)',
          }),
        });
      };
    },
    6421: function (e, t, i) {
      i.d(t, {
        JT: function () {
          return s;
        },
        zE: function () {
          return c;
        },
        IH: function () {
          return m;
        },
        x7: function () {
          return L;
        },
        T7: function () {
          return l;
        },
        LI: function () {
          return u;
        },
        W6: function () {
          return g;
        },
        Xv: function () {
          return p;
        },
        WA: function () {
          return b;
        },
        JE: function () {
          return _;
        },
        QM: function () {
          return C;
        },
        oB: function () {
          return H;
        },
        DV: function () {
          return T;
        },
        eP: function () {
          return w;
        },
        th: function () {
          return R;
        },
        m8: function () {
          return r;
        },
        nm: function () {
          return o;
        },
        LE: function () {
          return n;
        },
        kP: function () {
          return a;
        },
        vL: function () {
          return v;
        },
        jY: function () {
          return I.Z;
        },
        J2: function () {
          return N.Z;
        },
        kS: function () {
          return d;
        },
        PA: function () {
          return S;
        },
        HB: function () {
          return y;
        },
        PD: function () {
          return D;
        },
        lW: function () {
          return A;
        },
        fR: function () {
          return U;
        },
        rc: function () {
          return h;
        },
        tp: function () {
          return f;
        },
        ws: function () {
          return E;
        },
      });
      var n = {
          src: '/_next/static/media/home__icon.77c058d5.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
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
        o = {
          src: '/_next/static/media/history__icon_dark.970311ed.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = {
          src: '/_next/static/media/account__icon.b91bce68.svg',
          height: 30,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: '/_next/static/media/account__icon_dark.8bdda029.svg',
          height: 30,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
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
        d = {
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
        f = {
          src: '/_next/static/media/sidebar_dark__icon.058fcac0.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mXNoQ2AMBQA0TdC0wkQBEITJAPgsFgSJApYAoeEiTvAt5fcHWStRq9IkD0+v8PllRhtJgs4FQa72QpuXQBBCdGwrcRpDjk8OG1xAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        g = { src: '/_next/static/media/chat__icon.a90e55c7.svg', height: 25, width: 25, blurWidth: 0, blurHeight: 0 },
        m = { src: '/_next/static/media/add__icon.759b9985.svg', height: 31, width: 30, blurWidth: 0, blurHeight: 0 },
        E = {
          src: '/_next/static/media/upload__icon.155b8d29.svg',
          height: 37,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
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
        p = {
          src: '/_next/static/media/check_active__icon.0ce21cf2.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        L = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        D = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        H = {
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
        S = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        v = {
          src: '/_next/static/media/like__icon.e95d69bd.svg',
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: '/_next/static/media/dislike__icon.8d708f09.svg',
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
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
        },
        N = i(5217),
        I = i(4929);
    },
    9611: function (e, t, i) {
      i.d(t, {
        AJ: function () {
          return v;
        },
        Ac: function () {
          return D;
        },
        CQ: function () {
          return E;
        },
        D$: function () {
          return g;
        },
        E0: function () {
          return m;
        },
        EN: function () {
          return S;
        },
        JT: function () {
          return y;
        },
        JU: function () {
          return b;
        },
        KR: function () {
          return U;
        },
        KV: function () {
          return f;
        },
        LQ: function () {
          return l;
        },
        TB: function () {
          return H;
        },
        XZ: function () {
          return d;
        },
        Z8: function () {
          return a;
        },
        a3: function () {
          return c;
        },
        f6: function () {
          return w;
        },
        kk: function () {
          return T;
        },
        nz: function () {
          return A;
        },
        pY: function () {
          return h;
        },
        qQ: function () {
          return L;
        },
        rf: function () {
          return p;
        },
        sw: function () {
          return _;
        },
        vK: function () {
          return C;
        },
        x1: function () {
          return u;
        },
        yy: function () {
          return s;
        },
      });
      var n,
        a,
        r = i(8118),
        o = i(6421);
      let s = {
          HOME: '/',
          HISTORY: '/history',
          MYGDATA: '/my_g-data',
          OURGDATA: '/our_g-data',
          ACCOUNT: '/account',
          PERSONAL: '/my_g-data/personal-data',
          CONSENT: '/my_g-data/consent',
          COMPANY: '/my_g-data/company',
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
          { title: 'Home', icon: o.LE, to: s.HOME, icon_dark: o.kP },
          { title: 'History', icon: o.m8, to: s.HISTORY, icon_dark: o.nm },
          {
            title: 'My G-Data',
            icon: o.jY,
            icon_dark: o.J2,
            to: s.MYGDATA,
            nestedItems: [
              { title: 'Personal Data', icon: '', to: s.PERSONAL },
              { title: 'Consent', icon: '', to: s.CONSENT },
              { title: 'Rewards', icon: '', to: s.REWARDS },
              { title: 'Screen Data', icon: '', to: s.SCREEN },
            ],
          },
          { title: 'Our G-Data', icon: o.jY, icon_dark: o.J2, to: s.OURGDATA },
          { title: 'My Account', icon: o.JT, to: s.ACCOUNT, icon_dark: o.zE },
        ],
        l = {
          DARK: ['#907CB4', '#F5B11A', '#A1BF8C', '#046C98', '#EA6D24'],
          LIGHT: ['#EE3E2E', '#3B7BBE', '#EFDCB1', '#DDAF40', '#E9CB84'],
        },
        u = [
          { title: 'Home', icon: o.LE, to: s.HOME },
          { title: 'Login', icon: o.kS, to: s.LOGIN },
          { title: 'Register', icon: o.JT, to: s.SIGNUP },
        ],
        d = [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        A = [
          { title: 'Text', color: '#046C98', value: r.D.TEXT, darkColor: '#A1BF8C' },
          { title: 'Image', color: '#F5B11A', value: r.D.IMAGES, darkColor: '#F5B11A' },
          { title: 'Text + Image', color: '#E62431', value: r.D.BOTH, darkColor: '#907CB4' },
        ];
      ((n = a || (a = {})).PERSONAL = 'Personal'), (n.COMPANY = 'Company');
      let h = [
          { label: a.PERSONAL, value: a.PERSONAL },
          { label: a.COMPANY, value: a.COMPANY },
        ],
        f = { firstName: '', lastName: '', email: '', password: '', username: '' },
        g = { email: '', password: '' },
        m = { email: '' },
        E = { token: '', password: '', confirm_password: '' },
        C = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          privacyPolicy: !1,
          termsConditions: !1,
          cookiePolicy: !1,
          accountType: h[0].label,
        },
        _ = {
          date: '',
          high_temperature: 0,
          low_temperature: 0,
          emotional_list: [],
          emotional_overall: '',
          weather: '',
          relative_finance_status: '',
          exercise_time: 0,
          any_social_life: d[0].value,
        },
        b = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'Companies', accessor: 'Companies' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'id', accessor: 'id' },
        ],
        p = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Pricing', accessor: 'Pricing' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Field Name', accessor: 'fieldName' },
        ],
        w = [
          { Header: 'Personal Data and ScreenData', accessor: 'PDataAndScreen' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Personal Defined Value', accessor: 'PDefinedValue' },
          { Header: 'Other Companies Value', accessor: 'OtherCompValue' },
          { Header: 'id', accessor: 'id' },
        ],
        L = [
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
        D = [
          { Header: 'Questions', accessor: 'question' },
          { Header: 'Answers', accessor: 'answer' },
          { Header: 'Image', accessor: 'images' },
          { Header: 'Feedback', accessor: 'choice' },
        ],
        H = [
          { Header: 'Consents', accessor: 'consents' },
          { Header: '08-13-2023', accessor: 'date1' },
          { Header: '08-14-2023', accessor: 'date2' },
          { Header: '08-15-2023', accessor: 'date3' },
          { Header: '08-16-2023', accessor: 'date4' },
          { Header: '08-17-2023', accessor: 'date5' },
          { Header: 'Consent Value', accessor: 'consentValue' },
          { Header: 'Rewards', accessor: 'rewards' },
        ],
        y = {
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
          work_life_balance: 'overall focus of the day in a range between 0(work)-10(relaxation)',
          journaling: 'any points throughout the day worthy of note',
          date: 'the current day’s date',
        },
        S = {
          'EMOTIONAL OVERALL': {
            Consent: 'FALSE',
            Definition: 'an overall assessment of the days feelings',
            Companies: '',
            Use: '',
            id: null,
          },
          WEATHER: { Consent: 'FALSE', Definition: 'list of the weather of the day', Companies: '', Use: '', id: null },
          'RELATIVE FINANCE STATUS': {
            Consent: 'FALSE',
            Definition: 'relative financial status ',
            Companies: '',
            Use: '',
            id: null,
          },
          'EXERCISE TIME': {
            Consent: 'FALSE',
            Definition: 'total amount of exercise during the day',
            Companies: '',
            Use: '',
            id: null,
          },
          'ANY SOCIAL LIFE': {
            Consent: 'FALSE',
            Definition: 'whether or not any social life occurred',
            Companies: '',
            Use: '',
            id: null,
          },
          'SOCIAL LIFE LIST': {
            Consent: 'FALSE',
            Definition: 'list of social activities',
            Companies: '',
            Use: '',
            id: null,
          },
          'HEALTH OVERALL': {
            Consent: 'FALSE',
            Definition: 'an assessment of the days health',
            Companies: '',
            Use: '',
            id: null,
          },
          WEIGHT: { Consent: 'FALSE', Definition: 'measure of weight in pounds', Companies: '', Use: '', id: null },
          'FAMILY STATUS': {
            Consent: 'FALSE',
            Definition: 'status of close friends and family',
            Companies: '',
            Use: '',
            id: null,
          },
          'DEVICE SCREEN TIME': {
            Consent: 'FALSE',
            Definition: 'amount of time spent on personal devices',
            Companies: '',
            Use: '',
            id: null,
          },
          'WORK LIFE BALANCE': {
            Consent: 'FALSE',
            Definition: 'overall focus of the day in a range between 0(work)-10(relaxation)',
            Companies: '',
            Use: '',
            id: null,
          },
          JOURNALING: {
            Consent: 'FALSE',
            Definition: 'any points throughout the day worthy of note',
            Companies: '',
            Use: '',
            id: null,
          },
          DATE: { Consent: 'FALSE', Definition: 'the current day’s date', Companies: '', Use: '', id: null },
          'EMOTIONAL LIST': {
            Consent: 'FALSE',
            Definition: 'list of emotions experienced throughout the day',
            Companies: '',
            Use: '',
            id: null,
          },
          'HIGH TEMPERATURE': {
            Consent: 'FALSE',
            Definition: 'highest temperature of the day',
            Companies: '',
            Use: '',
            id: null,
          },
          Photos: {
            Consent: 'FALSE',
            Definition: 'any personal images that describe the day',
            Companies: '',
            Use: '',
            id: null,
          },
          'LOW TEMPERATURE': {
            Consent: 'FALSE',
            Definition: 'lowest temperature of the day',
            Companies: '',
            Use: '',
            id: null,
          },
        },
        v = {
          'EMOTIONAL OVERALL': {
            Consent: 'FALSE',
            Definition: 'an overall assessment of the days feelings',
            Pricing: '',
            Use: '',
            fieldName: 'EMOTIONAL OVERALL',
          },
          WEATHER: {
            Consent: 'FALSE',
            Definition: 'list of the weather of the day',
            Pricing: '',
            Use: '',
            fieldName: 'WEATHER',
          },
          'RELATIVE FINANCE STATUS': {
            Consent: 'FALSE',
            Definition: 'relative financial status ',
            Pricing: '',
            Use: '',
            fieldName: 'RELATIVE FINANCE STATUS',
          },
          'EXERCISE TIME': {
            Consent: 'FALSE',
            Definition: 'total amount of exercise during the day',
            Pricing: '',
            Use: '',
            fieldName: 'EXERCISE TIME',
          },
          'ANY SOCIAL LIFE': {
            Consent: 'FALSE',
            Definition: 'whether or not any social life occurred',
            Pricing: '',
            Use: '',
            fieldName: 'ANY SOCIAL LIFE',
          },
          'SOCIAL LIFE LIST': {
            Consent: 'FALSE',
            Definition: 'list of social activities',
            Pricing: '',
            Use: '',
            fieldName: 'SOCIAL LIFE LIST',
          },
          'HEALTH OVERALL': {
            Consent: 'FALSE',
            Definition: 'an assessment of the days health',
            Pricing: '',
            Use: '',
            fieldName: 'HEALTH OVERALL',
          },
          WEIGHT: {
            Consent: 'FALSE',
            Definition: 'measure of weight in pounds',
            Pricing: '',
            Use: '',
            fieldName: 'WEIGHT',
          },
          'FAMILY STATUS': {
            Consent: 'FALSE',
            Definition: 'status of close friends and family',
            Pricing: '',
            Use: '',
            fieldName: 'FAMILY STATUS',
          },
          'DEVICE SCREEN TIME': {
            Consent: 'FALSE',
            Definition: 'amount of time spent on personal devices',
            Pricing: '',
            Use: '',
            fieldName: 'DEVICE SCREEN TIME',
          },
          'WORK LIFE BALANCE': {
            Consent: 'FALSE',
            Definition: 'overall focus of the day in a range between 0(work)-10(relaxation)',
            Pricing: '',
            Use: '',
            fieldName: 'WORK LIFE BALANCE',
          },
          JOURNALING: {
            Consent: 'FALSE',
            Definition: 'any points throughout the day worthy of note',
            Pricing: '',
            Use: '',
            fieldName: 'JOURNALING',
          },
          DATE: { Consent: 'FALSE', Definition: 'the current day’s date', Pricing: '', Use: '', fieldName: 'DATE' },
          'EMOTIONAL LIST': {
            Consent: 'FALSE',
            Definition: 'list of emotions experienced throughout the day',
            Pricing: '',
            Use: '',
            fieldName: 'EMOTIONAL LIST',
          },
          'HIGH TEMPERATURE': {
            Consent: 'FALSE',
            Definition: 'highest temperature of the day',
            Pricing: '',
            Use: '',
            fieldName: 'HIGH TEMPERATURE',
          },
          Photos: {
            Consent: 'FALSE',
            Definition: 'any personal images that describe the day',
            Pricing: '',
            Use: '',
            fieldName: 'Photos',
          },
          'LOW TEMPERATURE': {
            Consent: 'FALSE',
            Definition: 'lowest temperature of the day',
            Pricing: '',
            Use: '',
            fieldName: 'LOW TEMPERATURE',
          },
        },
        T = '1450px',
        U = [10, 20, 30, 40];
    },
    1846: function (e, t, i) {
      i.d(t, {
        O: function () {
          return a;
        },
      });
      var n = i(2265);
      let a = (e, t) => {
        let i = (0, n.useCallback)(
          (i) => {
            e && e.current && !e.current.contains(i.target) && t();
          },
          [t, e],
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
    9907: function (e, t, i) {
      i.d(t, {
        i: function () {
          return a;
        },
      });
      var n = i(2265);
      function a() {
        let [e, t] = (0, n.useState)({ width: 0, height: 0 });
        return (
          (0, n.useEffect)(() => {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return window.addEventListener('resize', e), e(), () => window.removeEventListener('resize', e);
          }, []),
          { width: e.width, height: e.height }
        );
      }
    },
    7152: function (e, t, i) {
      i.d(t, {
        P: function () {
          return c;
        },
      });
      var n = i(3198),
        a = i(2265),
        r = i(5531),
        o = i(8118),
        s = i(323);
      let c = () => {
        let {
            chats: e,
            userPrompt: t,
            chatHistory: i,
            recentChatHistory: c,
            activeChatID: l,
          } = (0, n.v9)((e) => e.chats),
          u = (0, r.TL)(),
          d = (0, a.useCallback)(
            (e) => {
              u((0, s.hH)(e));
            },
            [u],
          ),
          A = (0, a.useCallback)(() => {
            u((0, s.Zp)());
          }, [u]),
          h = (0, a.useCallback)(
            (e) => {
              u((0, s.IM)(e));
            },
            [u],
          ),
          f = (0, a.useCallback)(
            (e) => {
              u((0, s.vV)(e));
            },
            [u],
          ),
          g = (0, a.useCallback)(() => {
            u((0, s.vV)({ data: '', choice: o.D.TEXT }));
          }, [u]),
          m = (0, a.useCallback)(
            (e) => {
              u((0, s._1)(e));
            },
            [u],
          ),
          E = (0, a.useCallback)(
            (e) => {
              u((0, s.cM)(e));
            },
            [u],
          ),
          C = (0, a.useCallback)(() => {
            u((0, s.vO)());
          }, [u]),
          _ = (0, a.useCallback)(
            (e) => {
              u((0, s.TK)(e));
            },
            [u],
          ),
          b = (0, a.useCallback)(
            (e) => {
              _(e.id), e.messages.length > 0 && u((0, s.NI)(e.messages));
            },
            [u, _],
          );
        return {
          chats: e,
          userPrompt: t,
          chatHistory: i,
          recentChatHistory: c,
          activeChatID: l,
          resetUserPrompt: g,
          updateChat: h,
          setUserPrompt: f,
          setChatHistory: m,
          setChats: d,
          deleteChats: A,
          startNewChat: C,
          setRecentChatHistory: E,
          openPreviousChats: b,
          setActiveChatID: _,
        };
      };
    },
    323: function (e, t, i) {
      i.d(t, {
        IM: function () {
          return l;
        },
        NI: function () {
          return f;
        },
        TK: function () {
          return g;
        },
        Zp: function () {
          return d;
        },
        _1: function () {
          return u;
        },
        cM: function () {
          return A;
        },
        hH: function () {
          return s;
        },
        vO: function () {
          return h;
        },
        vV: function () {
          return c;
        },
      });
      var n = i(9930),
        a = i(8118);
      let r = {
          chats: [],
          chatHistory: [],
          recentChatHistory: {},
          activeChatID: void 0,
          userPrompt: { data: '', choice: a.D.TEXT },
        },
        o = (0, n.oM)({
          name: 'chats',
          initialState: r,
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
          setChatsAction: s,
          setUserPromptAction: c,
          updateChatAction: l,
          setChatHistoryAction: u,
          deleteChatsActions: d,
          setRecentChatHistoryAction: A,
          startNewChatAction: h,
          openPreviousChatsAction: f,
          setActiveChatIdAction: g,
        } = o.actions;
      t.ZP = o.reducer;
    },
    8118: function (e, t, i) {
      var n, a;
      i.d(t, {
        D: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).BOTH = 'both'),
        (a.TEXT = 'answer'),
        (a.IMAGES = 'images');
    },
    22: function (e, t, i) {
      i.d(t, {
        d: function () {
          return r;
        },
      });
      var n = i(9930);
      let a = (0, n.oM)({
          name: 'loading',
          initialState: { isLoading: !1 },
          reducers: { setIsLoadingStateAction: (e, t) => ({ ...e, isLoading: t.payload }) },
        }),
        { setIsLoadingStateAction: r } = a.actions;
      t.Z = a.reducer;
    },
    859: function (e, t, i) {
      i.d(t, {
        Jg: function () {
          return l;
        },
        O$: function () {
          return s;
        },
        Pn: function () {
          return c;
        },
        UD: function () {
          return A;
        },
        Y4: function () {
          return d;
        },
        py: function () {
          return u;
        },
      });
      var n = i(9930),
        a = i(9611);
      let r = { personalData: {}, gData: {}, rData: {}, cData: a.EN, compData: a.AJ, screenData: [] },
        o = (0, n.oM)({
          name: 'my_g_data',
          initialState: r,
          reducers: {
            setPersonalDataAction: (e, t) => ({ ...e, personalData: { ...e.personalData, ...t.payload } }),
            setGDataAction: (e, t) => ({ ...e, gData: t.payload }),
            setRDataAction: (e, t) => ({ ...e, rData: t.payload }),
            setCDataAction: (e, t) => ({ ...e, cData: { ...e.cData, ...t.payload } }),
            setCompDataAction: (e, t) => ({ ...e, compData: { ...e.compData, ...t.payload } }),
            setScreenDataAction: (e, t) => ({ ...e, screenData: t.payload }),
          },
        }),
        {
          setPersonalDataAction: s,
          setGDataAction: c,
          setRDataAction: l,
          setCDataAction: u,
          setScreenDataAction: d,
          setCompDataAction: A,
        } = o.actions;
      t.ZP = o.reducer;
    },
    8421: function (e, t, i) {
      i.d(t, {
        H: function () {
          return r;
        },
      });
      var n = i(9930);
      let a = (0, n.oM)({
          name: 'sidebar',
          initialState: { isOpen: !1 },
          reducers: { setIsOpenAction: (e, t) => ({ isOpen: t.payload }) },
        }),
        { setIsOpenAction: r } = a.actions;
      t.Z = a.reducer;
    },
    5531: function (e, t, i) {
      i.d(t, {
        TL: function () {
          return _;
        },
      });
      var n = i(7373),
        a = i(9930),
        r = i(3198),
        o = i(1267),
        s = i(6346),
        c = i(1850),
        l = i(8557),
        u = i(22),
        d = i(859),
        A = i(323),
        h = i(8421),
        f = i(54);
      let g = (0, n.UY)({ user: l.Z, loading: u.Z, my_g_data: d.ZP, chats: A.ZP, sidebar: h.Z, weather: f.Z }),
        m = { key: 'root', storage: c.Z, blacklist: ['loading', 'user', 'chats', 'my_g_data'] },
        E = (0, o.OJ)(m, g),
        C = (0, a.xC)({ reducer: E, middleware: [s.Z] });
      (t.ZP = C), (0, o.p5)(C);
      let _ = r.I0;
    },
    8557: function (e, t, i) {
      i.d(t, {
        K: function () {
          return r;
        },
      });
      var n = i(9930);
      let a = (0, n.oM)({
          name: 'user',
          initialState: { isAuthenticated: !1, user: void 0 },
          reducers: { setUserAction: (e, t) => ({ ...e, ...t.payload }) },
        }),
        { setUserAction: r } = a.actions;
      t.Z = a.reducer;
    },
    54: function (e, t, i) {
      i.d(t, {
        _: function () {
          return r;
        },
      });
      var n = i(9930);
      let a = (0, n.oM)({
          name: 'weather',
          initialState: { weather: void 0 },
          reducers: { setWeatherAction: (e, t) => ({ ...e, weather: t.payload }) },
        }),
        { setWeatherAction: r } = a.actions;
      t.Z = a.reducer;
    },
    5217: function (e, t) {
      t.Z = {
        src: '/_next/static/media/logo-dark.ecd0cb6d.png',
        height: 2335,
        width: 2146,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyUlEQVR42mOAgdeKBh5vGWQNGZBBh0WOEIj+Jqmi+srGwwjEnlK82Wx510ZOhgabwvSOoBo7BgaG9o2bN266c/fB+trYTZ4MDDAgYB9VGadz89T84JJrl85++PDuseP/BAZehv9lihlpunoz5jU7bX2/gCHszKGt9+/euNL9fyaDJsOvIsWMjgDXIAYGhmsHNy84cPfu3f+PHv2UZkABZknZizccN7n+4HLg3L3N8Qwg8L+AgckprotTqXhxBUzd0oMTU+o3WjACAF57UDMfW/v+AAAAAElFTkSuQmCC',
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    4929: function (e, t) {
      t.Z = {
        src: '/_next/static/media/logo.eaf39e0e.png',
        height: 2335,
        width: 2145,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzElEQVR42mOAgQeb1TwebRUxZEAGb04VC4Ml90qq3l1nacLAwMDw8Qij2euDFlwMby9UZLw4V2f3i4Ghc1na9BUqbQen/zrG4MMAA++MraNepWndPjPfMy+ufvNlhoLTNv//M/AzPD8hk/k2TGvGs0bLrW8PM0S1t80/mN29ver/UwZdhheHpDNf5loFfdVjuLGtoW0PQ82hewwMT8QYkMHbCobsifrzjKes3eT3/2VOAgMIfL3ExfR4vhDnrdW6lTCFPx+Xp/z/6cUIAFNBVIf10k5KAAAAAElFTkSuQmCC',
        blurWidth: 7,
        blurHeight: 8,
      };
    },
  },
]);
