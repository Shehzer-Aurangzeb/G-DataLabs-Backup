'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [707],
  {
    1839: function (e, i, t) {
      var n = t(7437);
      t(2265);
      var r = t(3427),
        a = t(4246);
      i.Z = function (e) {
        let { onClick: i, type: t = 'button', isLoading: o = !1, src: s, className: c = '' } = e;
        return (0, n.jsx)('button', {
          className: ['disabled:cursor-not-allowed', c].join(' '),
          onClick: i,
          type: t,
          disabled: o,
          children: o
            ? (0, n.jsx)(a.Z, { style: { color: '#fff', margin: '0 auto' } })
            : (0, n.jsx)(r.Z, { src: s, alt: 'icon', className: 'h-full w-full' }),
        });
      };
    },
    4246: function (e, i, t) {
      var n = t(7437);
      t(2265),
        (i.Z = function (e) {
          let { style: i } = e;
          return (0, n.jsxs)('svg', {
            className: 'animate-spin -ml-1 mr-3 h-5 w-5 text-disabled',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            style: i,
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
    3427: function (e, i, t) {
      var n = t(7437);
      t(2265);
      var r = t(6691),
        a = t.n(r);
      i.Z = function (e) {
        let { className: i, src: t, alt: r, rounded: o = !1 } = e;
        return (0, n.jsx)('div', {
          className: ['relative', i].join(' '),
          children: (0, n.jsx)(a(), {
            src: t,
            alt: r,
            fill: !0,
            className: ''.concat(o ? 'object-cover rounded-full' : 'object-contain', ' '),
            sizes: '(max-width: 768px)',
          }),
        });
      };
    },
    6421: function (e, i, t) {
      t.d(i, {
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
          return w;
        },
        T7: function () {
          return d;
        },
        LI: function () {
          return l;
        },
        W6: function () {
          return g;
        },
        Xv: function () {
          return U;
        },
        WA: function () {
          return p;
        },
        JE: function () {
          return C;
        },
        QM: function () {
          return E;
        },
        oB: function () {
          return v;
        },
        DV: function () {
          return T;
        },
        eP: function () {
          return b;
        },
        th: function () {
          return H;
        },
        m8: function () {
          return a;
        },
        nm: function () {
          return o;
        },
        LE: function () {
          return n;
        },
        kP: function () {
          return r;
        },
        vL: function () {
          return R;
        },
        jY: function () {
          return I.Z;
        },
        J2: function () {
          return N.Z;
        },
        kS: function () {
          return u;
        },
        PA: function () {
          return L;
        },
        HB: function () {
          return S;
        },
        PD: function () {
          return D;
        },
        lW: function () {
          return A;
        },
        fR: function () {
          return y;
        },
        rc: function () {
          return f;
        },
        tp: function () {
          return h;
        },
        ws: function () {
          return _;
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
          src: '/_next/static/media/home__icon_dark.836472a3.svg',
          height: 31,
          width: 31,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
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
        d = {
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
        u = {
          src: '/_next/static/media/logout__icon.fef64a12.svg',
          height: 36,
          width: 35,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = { src: '/_next/static/media/send__icon.ef522f85.svg', height: 41, width: 40, blurWidth: 0, blurHeight: 0 },
        f = {
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
        g = { src: '/_next/static/media/chat__icon.a90e55c7.svg', height: 25, width: 25, blurWidth: 0, blurHeight: 0 },
        m = { src: '/_next/static/media/add__icon.759b9985.svg', height: 31, width: 30, blurWidth: 0, blurHeight: 0 },
        _ = {
          src: '/_next/static/media/upload__icon.155b8d29.svg',
          height: 37,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: '/_next/static/media/cross_disable__icon.5c8e8498.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
          src: '/_next/static/media/cross_active__icon.4db9eef5.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: '/_next/static/media/check_disable__icon.f95d0a9b.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: '/_next/static/media/check_active__icon.0ce21cf2.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        w = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        D = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        v = {
          src: '/_next/static/media/default-profile.b62773a2.png',
          height: 90,
          width: 90,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXyeRjxeRjxeBfxeBjxeBfxeBfxeRfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBjxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeRjxeBjxeBdyAzjlAAAAHHRSTlMAAAACAgMKCg0OHSMwMTJFV15fYGGFlMbJ0fn7h3ig8gAAAEBJREFUeNoFQIURgDAQC8GrSL309x+Tw0wYAy6gKiJFEchyvSMDVtp5NLFwfYTwdQfUNCFVgDreT9TEyt37jesPgBMDgQkeLc8AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        S = {
          src: '/_next/static/media/no-data.de51b600.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3BPQqCYAAA0Df0gwfQo0QQ7UERtEVT0VRBXxiCLcFHCU05eBg9nr4Hqcx2mEmBqNUMOxGm7pZugrmrhLHcwsvFTgUTDxulk7efAyMFEqVCUEFt7ewvyH1gZm/lKfo69vEEFGYLsWa/AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        L = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
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
        y = {
          src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42l2NsQ0AIQwD76fkV4CSHjahh4oRg4sgEGcpsiw5hk9yjv+ZUsBpGIWKyYmMERl0XSPvoEsJBbtSveKE6+k7uwD0YxaTHd0JgAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        H = {
          src: '/_next/static/media/hidepassword__icon.84b28e09.png',
          height: 60,
          width: 60,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42kXBIQ6CUAAA0CcWj6HBjU2L0WYyewCLm3YP4eacBps3sHAANjYaGwQ4AaMRuMUn8h5vMYDIjJWHq5+/MzB30Xo66qVQCDYyuZ0gpxTsbWXugpqFyuDkoNMA3CS+Yi9LIpO1zwh58RiIbBbx+wAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        N = t(5217),
        I = t(4929);
    },
    9611: function (e, i, t) {
      t.d(i, {
        AJ: function () {
          return R;
        },
        Ac: function () {
          return D;
        },
        CQ: function () {
          return _;
        },
        D$: function () {
          return g;
        },
        E0: function () {
          return m;
        },
        EN: function () {
          return L;
        },
        Gj: function () {
          return S;
        },
        JU: function () {
          return p;
        },
        KR: function () {
          return y;
        },
        KV: function () {
          return h;
        },
        LQ: function () {
          return d;
        },
        TB: function () {
          return v;
        },
        XZ: function () {
          return u;
        },
        Z8: function () {
          return r;
        },
        a3: function () {
          return c;
        },
        f6: function () {
          return b;
        },
        kk: function () {
          return T;
        },
        nz: function () {
          return A;
        },
        pY: function () {
          return f;
        },
        qQ: function () {
          return w;
        },
        rf: function () {
          return U;
        },
        sw: function () {
          return C;
        },
        vK: function () {
          return E;
        },
        x1: function () {
          return l;
        },
        yy: function () {
          return s;
        },
      });
      var n,
        r,
        a = t(8118),
        o = t(6421);
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
        d = {
          DARK: ['#907CB4', '#F5B11A', '#A1BF8C', '#046C98', '#EA6D24'],
          LIGHT: ['#EE3E2E', '#3B7BBE', '#EFDCB1', '#DDAF40', '#E9CB84'],
        },
        l = [
          { title: 'Home', icon: o.LE, to: s.HOME },
          { title: 'Login', icon: o.kS, to: s.LOGIN },
          { title: 'Register', icon: o.JT, to: s.SIGNUP },
        ],
        u = [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        A = [
          { title: 'Text', color: '#046C98', value: a.D.TEXT, darkColor: '#A1BF8C' },
          { title: 'Image', color: '#F5B11A', value: a.D.IMAGES, darkColor: '#F5B11A' },
          { title: 'Text + Image', color: '#E62431', value: a.D.BOTH, darkColor: '#907CB4' },
        ];
      ((n = r || (r = {})).PERSONAL = 'Personal'), (n.COMPANY = 'Company');
      let f = [
          { label: r.PERSONAL, value: r.PERSONAL },
          { label: r.COMPANY, value: r.COMPANY },
        ],
        h = { firstName: '', lastName: '', email: '', password: '', username: '' },
        g = { email: '', password: '' },
        m = { email: '' },
        _ = { token: '', password: '', confirm_password: '' },
        E = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          privacyPolicy: !1,
          termsConditions: !1,
          cookiePolicy: !1,
          accountType: f[0].label,
        },
        C = {
          date: '',
          high_temperature: 0,
          low_temperature: 0,
          emotional_list: [],
          emotional_overall: '',
          weather: '',
          relative_finance_status: '',
          exercise_time: 0,
          any_social_life: u[0].value,
        },
        p = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'List Of Unit', accessor: 'Unit' },
          { Header: 'Companies', accessor: 'Companies' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'id', accessor: 'id' },
        ],
        U = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'List Of Unit', accessor: 'Unit' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Pricing', accessor: 'Pricing' },
          { Header: 'Threshold', accessor: 'threshold' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Field Name', accessor: 'fieldName' },
        ],
        b = [
          { Header: 'Personal Data and ScreenData', accessor: 'PDataAndScreen' },
          { Header: 'List Of Unit', accessor: 'Unit' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Personal Defined Value', accessor: 'PDefinedValue' },
          { Header: 'Other Companies Value', accessor: 'OtherCompValue' },
          { Header: 'id', accessor: 'id' },
        ],
        w = [
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
        v = [
          { Header: 'Consents', accessor: 'consents' },
          { Header: '08-13-2023', accessor: 'date1' },
          { Header: '08-14-2023', accessor: 'date2' },
          { Header: '08-15-2023', accessor: 'date3' },
          { Header: '08-16-2023', accessor: 'date4' },
          { Header: '08-17-2023', accessor: 'date5' },
          { Header: 'Consent Value', accessor: 'consentValue' },
          { Header: 'Rewards', accessor: 'rewards' },
        ],
        S = {
          emotional_list: {
            definition: 'list of emotions experienced throughout the day',
            unit: 'Price per list of daily emotions',
          },
          high_temperature: {
            definition: 'highest temperature of the day',
            unit: 'Price per record of environment high temperature',
          },
          emotional_overall: {
            definition: 'an overall assessment of the days feelings',
            unit: 'Price per daily emotional index',
          },
          low_temperature: {
            definition: 'lowest temperature of the day',
            unit: 'Price per record of environment low temperature',
          },
          relative_finance_status: {
            definition: 'relative financial status ',
            unit: 'Price per daily financial status index',
          },
          weather: { definition: 'list of the weather of the day', unit: ' Price per daily weather record' },
          exercise_time: {
            definition: 'total amount of exercise during the day',
            unit: 'Price per record of exercise duration',
          },
          photos: {
            definition: 'any personal images that describe the day',
            unit: ' Price per personal digital image of at least 256x256 pixels',
          },
          exercise_total_time: {
            definition: 'total amount of exercise during the day',
            unit: 'Price per record of exercise duration',
          },
          health_overall: {
            definition: 'an assessment of the days health',
            unit: 'Price per daily comprehensive health report',
          },
          any_social_life: {
            definition: 'whether or not any social life occurred',
            unit: 'Price per record of daily social interaction',
          },
          social_life_list: {
            definition: 'list of social activities',
            unit: 'Price per itemized list of daily social activities',
          },
          weight: { definition: 'measure of weight in pounds', unit: 'Price per individual daily weight measurement' },
          family_status: {
            definition: 'status of close friends and family',
            unit: 'Price per record of family emotional status',
          },
          device_screen_time: {
            definition: 'amount of time spent on personal devices',
            unit: 'Price per record of screen time logged',
          },
          work_life_balance: {
            definition: 'overall focus of the day in a range between 0(work)-10(relaxation)',
            unit: 'Price per work-life balance assessment',
          },
          journaling: { definition: 'any points throughout the day worthy of note', unit: '' },
          date: { definition: 'the current day’s date', unit: '' },
          screen_recording: {
            definition: 'video recording of on-screen device activity',
            unit: 'Screen Recording: Price per second of device screen recording',
          },
          camera_recording: {
            definition: 'video recording from device webcam where face and or body are clearly visible',
            unit: ' Price per second of device webcam recording where face\body are clearly visible',
          },
          screen_camera_recording: {
            definition:
              'simultaneous combination of video recording of on-screen device activity and video recording from device webcam where face and or body are clearly visible',
            unit: 'Price per second of device screen + webcam recording where face\body are clearly visible',
          },
          microphone_audio_recording: {
            definition: 'audio recording from device microphone with clearly audible feedback',
            unit: 'Price per second of device microphone recording',
          },
          system_audio_recording: {
            definition: 'audio recording from device system audio with clearly audible feedback',
            unit: 'Price per second of device system audio recording',
          },
          mic_system_recording: {
            definition:
              'simultaneous combination of audio recording from device microphone and audio recording from device system audio with clearly audible feedback',
            unit: ' Price per second of device microphone and system audio recording',
          },
        },
        L = {
          'EMOTIONAL OVERALL': {
            Consent: 'FALSE',
            Definition: S.emotional_overall.definition,
            Unit: S.emotional_overall.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          WEATHER: {
            Consent: 'FALSE',
            Definition: S.weather.definition,
            Unit: S.weather.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'RELATIVE FINANCE STATUS': {
            Consent: 'FALSE',
            Definition: S.relative_finance_status.definition,
            Unit: S.relative_finance_status.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'EXERCISE TIME': {
            Consent: 'FALSE',
            Definition: S.exercise_time.definition,
            Unit: S.exercise_time.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'ANY SOCIAL LIFE': {
            Consent: 'FALSE',
            Definition: S.any_social_life.definition,
            Unit: S.any_social_life.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'SOCIAL LIFE LIST': {
            Consent: 'FALSE',
            Definition: S.social_life_list.definition,
            Unit: S.social_life_list.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'HEALTH OVERALL': {
            Consent: 'FALSE',
            Definition: S.health_overall.definition,
            Unit: S.health_overall.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          WEIGHT: {
            Consent: 'FALSE',
            Definition: S.weight.definition,
            Unit: S.weight.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'FAMILY STATUS': {
            Consent: 'FALSE',
            Definition: S.family_status.definition,
            Unit: S.family_status.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'DEVICE SCREEN TIME': {
            Consent: 'FALSE',
            Definition: S.device_screen_time.definition,
            Unit: S.device_screen_time.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'WORK LIFE BALANCE': {
            Consent: 'FALSE',
            Definition: S.work_life_balance.definition,
            Unit: S.work_life_balance.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          JOURNALING: {
            Consent: 'FALSE',
            Definition: S.journaling.definition,
            Unit: S.journaling.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          DATE: {
            Consent: 'FALSE',
            Definition: S.date.definition,
            Unit: S.date.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'EMOTIONAL LIST': {
            Consent: 'FALSE',
            Definition: S.emotional_list.definition,
            Unit: S.emotional_list.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'HIGH TEMPERATURE': {
            Consent: 'FALSE',
            Definition: S.high_temperature.definition,
            Unit: S.high_temperature.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          Photos: {
            Consent: 'FALSE',
            Definition: S.photos.definition,
            Unit: S.photos.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'LOW TEMPERATURE': {
            Consent: 'FALSE',
            Definition: S.low_temperature.definition,
            Unit: S.low_temperature.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'Screen Recording': {
            Consent: 'FALSE',
            Definition: S.screen_recording.definition,
            Unit: S.screen_recording.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'Camera Recording': {
            Consent: 'FALSE',
            Definition: S.camera_recording.definition,
            Unit: S.camera_recording.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'Screen + Camera Recording': {
            Consent: 'FALSE',
            Definition: S.screen_camera_recording.definition,
            Unit: S.screen_camera_recording.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'Microphone Audio Recording': {
            Consent: 'FALSE',
            Definition: S.microphone_audio_recording.definition,
            Unit: S.microphone_audio_recording.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'System Audio Recording': {
            Consent: 'FALSE',
            Definition: S.system_audio_recording.definition,
            Unit: S.system_audio_recording.unit,
            Companies: '',
            Use: '',
            id: null,
          },
          'Mic + System Recording': {
            Consent: 'FALSE',
            Definition: S.mic_system_recording.definition,
            Unit: S.mic_system_recording.unit,
            Companies: '',
            Use: '',
            id: null,
          },
        },
        R = {
          'EMOTIONAL OVERALL': {
            Consent: 'FALSE',
            Definition: S.emotional_overall.definition,
            Unit: S.emotional_overall.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'EMOTIONAL OVERALL',
          },
          WEATHER: {
            Consent: 'FALSE',
            Definition: S.weather.definition,
            Unit: S.weather.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'WEATHER',
          },
          'RELATIVE FINANCE STATUS': {
            Consent: 'FALSE',
            Definition: S.relative_finance_status.definition,
            Unit: S.relative_finance_status.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'RELATIVE FINANCE STATUS',
          },
          'EXERCISE TIME': {
            Consent: 'FALSE',
            Definition: S.exercise_time.definition,
            Unit: S.exercise_time.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'EXERCISE TIME',
          },
          'ANY SOCIAL LIFE': {
            Consent: 'FALSE',
            Definition: S.any_social_life.definition,
            Unit: S.any_social_life.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'ANY SOCIAL LIFE',
          },
          'SOCIAL LIFE LIST': {
            Consent: 'FALSE',
            Definition: S.social_life_list.definition,
            Unit: S.social_life_list.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SOCIAL LIFE LIST',
          },
          'HEALTH OVERALL': {
            Consent: 'FALSE',
            Definition: S.health_overall.definition,
            Unit: S.health_overall.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'HEALTH OVERALL',
          },
          WEIGHT: {
            Consent: 'FALSE',
            Definition: S.weight.definition,
            Unit: S.weight.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'WEIGHT',
          },
          'FAMILY STATUS': {
            Consent: 'FALSE',
            Definition: S.family_status.definition,
            Unit: S.family_status.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'FAMILY STATUS',
          },
          'DEVICE SCREEN TIME': {
            Consent: 'FALSE',
            Definition: S.device_screen_time.definition,
            Unit: S.device_screen_time.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'DEVICE SCREEN TIME',
          },
          'WORK LIFE BALANCE': {
            Consent: 'FALSE',
            Definition: S.work_life_balance.definition,
            Unit: S.work_life_balance.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'WORK LIFE BALANCE',
          },
          JOURNALING: {
            Consent: 'FALSE',
            Definition: S.journaling.definition,
            Unit: S.journaling.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'JOURNALING',
          },
          DATE: {
            Consent: 'FALSE',
            Definition: S.date.definition,
            Unit: S.date.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'DATE',
          },
          'EMOTIONAL LIST': {
            Consent: 'FALSE',
            Definition: S.emotional_list.definition,
            Unit: S.emotional_list.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'EMOTIONAL LIST',
          },
          'HIGH TEMPERATURE': {
            Consent: 'FALSE',
            Definition: S.high_temperature.definition,
            Unit: S.high_temperature.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'HIGH TEMPERATURE',
          },
          Photos: {
            Consent: 'FALSE',
            Definition: S.photos.definition,
            Unit: S.photos.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'Photos',
          },
          'LOW TEMPERATURE': {
            Consent: 'FALSE',
            Definition: S.low_temperature.definition,
            Unit: S.low_temperature.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'LOW TEMPERATURE',
          },
          'SCREEN RECORDING': {
            Consent: 'FALSE',
            Definition: S.screen_recording.definition,
            Unit: S.low_temperature.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SCREEN RECORDING',
          },
          'CAMERA RECORDING': {
            Consent: 'FALSE',
            Definition: S.camera_recording.definition,
            Unit: S.camera_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'CAMERA RECORDING',
          },
          'SCREEN + CAMERA RECORDING': {
            Consent: 'FALSE',
            Definition: S.screen_camera_recording.definition,
            Unit: S.screen_camera_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SCREEN + CAMERA RECORDING',
          },
          'MICROPHONE AUDIO RECORDING': {
            Consent: 'FALSE',
            Definition: S.microphone_audio_recording.definition,
            Unit: S.microphone_audio_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'MICROPHONE AUDIO RECORDING',
          },
          'SYSTEM AUDIO RECORDING': {
            Consent: 'FALSE',
            Definition: S.system_audio_recording.definition,
            Unit: S.system_audio_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SYSTEM AUDIO RECORDING',
          },
          'MIC + SYSTEM RECORDING': {
            Consent: 'FALSE',
            Definition: S.mic_system_recording.definition,
            Unit: S.mic_system_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'MIC + SYSTEM RECORDING',
          },
        },
        T = '1450px',
        y = [10, 20, 30, 40];
    },
    1846: function (e, i, t) {
      t.d(i, {
        O: function () {
          return r;
        },
      });
      var n = t(2265);
      let r = (e, i) => {
        let t = (0, n.useCallback)(
          (t) => {
            e && e.current && !e.current.contains(t.target) && i();
          },
          [i, e],
        );
        (0, n.useEffect)(
          () => (
            document.addEventListener('mousedown', t),
            () => {
              document.removeEventListener('mousedown', t);
            }
          ),
          [t],
        );
      };
    },
    9907: function (e, i, t) {
      t.d(i, {
        i: function () {
          return r;
        },
      });
      var n = t(2265);
      function r() {
        let [e, i] = (0, n.useState)({ width: 0, height: 0 });
        return (
          (0, n.useEffect)(() => {
            function e() {
              i({ width: window.innerWidth, height: window.innerHeight });
            }
            return window.addEventListener('resize', e), e(), () => window.removeEventListener('resize', e);
          }, []),
          { width: e.width, height: e.height }
        );
      }
    },
    7152: function (e, i, t) {
      t.d(i, {
        P: function () {
          return c;
        },
      });
      var n = t(3198),
        r = t(2265),
        a = t(5531),
        o = t(8118),
        s = t(323);
      let c = () => {
        let {
            chats: e,
            userPrompt: i,
            chatHistory: t,
            recentChatHistory: c,
            activeChatID: d,
          } = (0, n.v9)((e) => e.chats),
          l = (0, a.TL)(),
          u = (0, r.useCallback)(
            (e) => {
              l((0, s.hH)(e));
            },
            [l],
          ),
          A = (0, r.useCallback)(() => {
            l((0, s.Zp)());
          }, [l]),
          f = (0, r.useCallback)(
            (e) => {
              l((0, s.IM)(e));
            },
            [l],
          ),
          h = (0, r.useCallback)(
            (e) => {
              l((0, s.vV)(e));
            },
            [l],
          ),
          g = (0, r.useCallback)(() => {
            l((0, s.vV)({ data: '', choice: o.D.TEXT }));
          }, [l]),
          m = (0, r.useCallback)(
            (e) => {
              l((0, s._1)(e));
            },
            [l],
          ),
          _ = (0, r.useCallback)(
            (e) => {
              l((0, s.cM)(e));
            },
            [l],
          ),
          E = (0, r.useCallback)(() => {
            l((0, s.vO)());
          }, [l]),
          C = (0, r.useCallback)(
            (e) => {
              l((0, s.TK)(e));
            },
            [l],
          ),
          p = (0, r.useCallback)(
            (e) => {
              C(e.id), e.messages.length > 0 && l((0, s.NI)(e.messages));
            },
            [l, C],
          );
        return {
          chats: e,
          userPrompt: i,
          chatHistory: t,
          recentChatHistory: c,
          activeChatID: d,
          resetUserPrompt: g,
          updateChat: f,
          setUserPrompt: h,
          setChatHistory: m,
          setChats: u,
          deleteChats: A,
          startNewChat: E,
          setRecentChatHistory: _,
          openPreviousChats: p,
          setActiveChatID: C,
        };
      };
    },
    323: function (e, i, t) {
      t.d(i, {
        IM: function () {
          return d;
        },
        NI: function () {
          return h;
        },
        TK: function () {
          return g;
        },
        Zp: function () {
          return u;
        },
        _1: function () {
          return l;
        },
        cM: function () {
          return A;
        },
        hH: function () {
          return s;
        },
        vO: function () {
          return f;
        },
        vV: function () {
          return c;
        },
      });
      var n = t(9930),
        r = t(8118);
      let a = {
          chats: [],
          chatHistory: [],
          recentChatHistory: {},
          activeChatID: void 0,
          userPrompt: { data: '', choice: r.D.TEXT },
        },
        o = (0, n.oM)({
          name: 'chats',
          initialState: a,
          reducers: {
            setChatsAction: (e, i) => ({ ...e, chats: [...e.chats, i.payload] }),
            updateChatAction: (e, i) => ({
              ...e,
              chats: e.chats.map((e) => (e.messageID === i.payload.messageID ? i.payload : e)),
            }),
            setUserPromptAction: (e, i) => ({ ...e, userPrompt: i.payload }),
            setChatHistoryAction: (e, i) => ({ ...e, chatHistory: i.payload }),
            deleteChatsActions: (e) => ({ ...e, chats: [] }),
            setRecentChatHistoryAction: (e, i) => ({ ...e, recentChatHistory: i.payload }),
            startNewChatAction: (e) => ({ ...e, chats: [], activeChatID: void 0 }),
            openPreviousChatsAction: (e, i) => ({ ...e, chats: i.payload }),
            setActiveChatIdAction: (e, i) => ({ ...e, activeChatID: i.payload }),
          },
        }),
        {
          setChatsAction: s,
          setUserPromptAction: c,
          updateChatAction: d,
          setChatHistoryAction: l,
          deleteChatsActions: u,
          setRecentChatHistoryAction: A,
          startNewChatAction: f,
          openPreviousChatsAction: h,
          setActiveChatIdAction: g,
        } = o.actions;
      i.ZP = o.reducer;
    },
    8118: function (e, i, t) {
      var n, r;
      t.d(i, {
        D: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).BOTH = 'both'),
        (r.TEXT = 'answer'),
        (r.IMAGES = 'images');
    },
    22: function (e, i, t) {
      t.d(i, {
        d: function () {
          return a;
        },
      });
      var n = t(9930);
      let r = (0, n.oM)({
          name: 'loading',
          initialState: { isLoading: !1 },
          reducers: { setIsLoadingStateAction: (e, i) => ({ ...e, isLoading: i.payload }) },
        }),
        { setIsLoadingStateAction: a } = r.actions;
      i.Z = r.reducer;
    },
    859: function (e, i, t) {
      t.d(i, {
        Jg: function () {
          return d;
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
          return u;
        },
        py: function () {
          return l;
        },
      });
      var n = t(9930),
        r = t(9611);
      let a = { personalData: {}, gData: {}, rData: {}, cData: r.EN, compData: r.AJ, screenData: [] },
        o = (0, n.oM)({
          name: 'my_g_data',
          initialState: a,
          reducers: {
            setPersonalDataAction: (e, i) => ({ ...e, personalData: { ...e.personalData, ...i.payload } }),
            setGDataAction: (e, i) => ({ ...e, gData: i.payload }),
            setRDataAction: (e, i) => ({ ...e, rData: i.payload }),
            setCDataAction: (e, i) => ({ ...e, cData: { ...e.cData, ...i.payload } }),
            setCompDataAction: (e, i) => ({ ...e, compData: { ...e.compData, ...i.payload } }),
            setScreenDataAction: (e, i) => ({ ...e, screenData: i.payload }),
          },
        }),
        {
          setPersonalDataAction: s,
          setGDataAction: c,
          setRDataAction: d,
          setCDataAction: l,
          setScreenDataAction: u,
          setCompDataAction: A,
        } = o.actions;
      i.ZP = o.reducer;
    },
    8421: function (e, i, t) {
      t.d(i, {
        H: function () {
          return a;
        },
      });
      var n = t(9930);
      let r = (0, n.oM)({
          name: 'sidebar',
          initialState: { isOpen: !1 },
          reducers: { setIsOpenAction: (e, i) => ({ isOpen: i.payload }) },
        }),
        { setIsOpenAction: a } = r.actions;
      i.Z = r.reducer;
    },
    5531: function (e, i, t) {
      t.d(i, {
        TL: function () {
          return C;
        },
      });
      var n = t(7373),
        r = t(9930),
        a = t(3198),
        o = t(1267),
        s = t(6346),
        c = t(1850),
        d = t(8557),
        l = t(22),
        u = t(859),
        A = t(323),
        f = t(8421),
        h = t(54);
      let g = (0, n.UY)({ user: d.Z, loading: l.Z, my_g_data: u.ZP, chats: A.ZP, sidebar: f.Z, weather: h.Z }),
        m = { key: 'root', storage: c.Z, blacklist: ['loading', 'user', 'chats', 'my_g_data'] },
        _ = (0, o.OJ)(m, g),
        E = (0, r.xC)({ reducer: _, middleware: [s.Z] });
      (i.ZP = E), (0, o.p5)(E);
      let C = a.I0;
    },
    8557: function (e, i, t) {
      t.d(i, {
        K: function () {
          return a;
        },
      });
      var n = t(9930);
      let r = (0, n.oM)({
          name: 'user',
          initialState: { isAuthenticated: !1, user: void 0 },
          reducers: { setUserAction: (e, i) => ({ ...e, ...i.payload }) },
        }),
        { setUserAction: a } = r.actions;
      i.Z = r.reducer;
    },
    54: function (e, i, t) {
      t.d(i, {
        _: function () {
          return a;
        },
      });
      var n = t(9930);
      let r = (0, n.oM)({
          name: 'weather',
          initialState: { weather: void 0 },
          reducers: { setWeatherAction: (e, i) => ({ ...e, weather: i.payload }) },
        }),
        { setWeatherAction: a } = r.actions;
      i.Z = r.reducer;
    },
    5217: function (e, i) {
      i.Z = {
        src: '/_next/static/media/logo-dark.ecd0cb6d.png',
        height: 2335,
        width: 2146,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyUlEQVR42mOAgdeKBh5vGWQNGZBBh0WOEIj+Jqmi+srGwwjEnlK82Wx510ZOhgabwvSOoBo7BgaG9o2bN266c/fB+trYTZ4MDDAgYB9VGadz89T84JJrl85++PDuseP/BAZehv9lihlpunoz5jU7bX2/gCHszKGt9+/euNL9fyaDJsOvIsWMjgDXIAYGhmsHNy84cPfu3f+PHv2UZkABZknZizccN7n+4HLg3L3N8Qwg8L+AgckprotTqXhxBUzd0oMTU+o3WjACAF57UDMfW/v+AAAAAElFTkSuQmCC',
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    4929: function (e, i) {
      i.Z = {
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
