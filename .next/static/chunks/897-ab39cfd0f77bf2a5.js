'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [897],
  {
    1839: function (e, i, n) {
      var t = n(7437);
      n(2265);
      var r = n(3427),
        o = n(4246);
      i.Z = function (e) {
        let {
          children: i,
          onClick: n,
          type: a = 'button',
          isLoading: s = !1,
          src: c,
          className: d = '',
          disabled: l,
        } = e;
        return (0, t.jsxs)('button', {
          className: ['disabled:cursor-not-allowed', d].join(' '),
          onClick: n,
          type: a,
          disabled: s || l,
          children: [
            s
              ? (0, t.jsx)(o.Z, { style: { color: '#fff', margin: '0 auto' } })
              : (0, t.jsx)(r.Z, { src: c, alt: 'button-icon', className: ' h-full w-full' }),
            i,
          ],
        });
      };
    },
    4246: function (e, i, n) {
      var t = n(7437);
      n(2265),
        (i.Z = function (e) {
          let { style: i } = e;
          return (0, t.jsxs)('svg', {
            className: 'animate-spin -ml-1 mr-3 h-5 w-5 text-disabled',
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            style: i,
            children: [
              (0, t.jsx)('circle', {
                className: 'opacity-25',
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '4',
              }),
              (0, t.jsx)('path', {
                className: 'opacity-75',
                fill: 'currentColor',
                d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
              }),
            ],
          });
        });
    },
    3427: function (e, i, n) {
      var t = n(7437);
      n(2265);
      var r = n(6691),
        o = n.n(r);
      i.Z = function (e) {
        let { className: i, src: n, alt: r, rounded: a = !1 } = e;
        return (0, t.jsx)('div', {
          className: ['relative', i].join(' '),
          children: (0, t.jsx)(o(), {
            unoptimized: !0,
            src: n,
            alt: r,
            fill: !0,
            className: ''.concat(a ? 'object-cover rounded-full' : 'object-contain', ' '),
          }),
        });
      };
    },
    3470: function (e, i, n) {
      n.d(i, {
        A: function () {
          return o;
        },
        r: function () {
          return r;
        },
      });
      var t = n(9611);
      let r = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'List Of Unit', accessor: 'Unit' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Pricing', accessor: 'Pricing' },
          { Header: 'Threshold', accessor: 'Threshold' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Field Name', accessor: 'fieldName' },
        ],
        o = {
          'EMOTIONAL OVERALL': {
            Consent: 'FALSE',
            Definition: t.Gj.emotional_overall.definition,
            Unit: t.Gj.emotional_overall.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'EMOTIONAL OVERALL',
          },
          WEATHER: {
            Consent: 'FALSE',
            Definition: t.Gj.weather.definition,
            Unit: t.Gj.weather.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'WEATHER',
          },
          'RELATIVE FINANCE STATUS': {
            Consent: 'FALSE',
            Definition: t.Gj.relative_finance_status.definition,
            Unit: t.Gj.relative_finance_status.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'RELATIVE FINANCE STATUS',
          },
          'EXERCISE TIME': {
            Consent: 'FALSE',
            Definition: t.Gj.exercise_time.definition,
            Unit: t.Gj.exercise_time.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'EXERCISE TIME',
          },
          'ANY SOCIAL LIFE': {
            Consent: 'FALSE',
            Definition: t.Gj.any_social_life.definition,
            Unit: t.Gj.any_social_life.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'ANY SOCIAL LIFE',
          },
          'SOCIAL LIFE LIST': {
            Consent: 'FALSE',
            Definition: t.Gj.social_life_list.definition,
            Unit: t.Gj.social_life_list.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SOCIAL LIFE LIST',
          },
          'HEALTH OVERALL': {
            Consent: 'FALSE',
            Definition: t.Gj.health_overall.definition,
            Unit: t.Gj.health_overall.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'HEALTH OVERALL',
          },
          WEIGHT: {
            Consent: 'FALSE',
            Definition: t.Gj.weight.definition,
            Unit: t.Gj.weight.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'WEIGHT',
          },
          'FAMILY STATUS': {
            Consent: 'FALSE',
            Definition: t.Gj.family_status.definition,
            Unit: t.Gj.family_status.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'FAMILY STATUS',
          },
          'DEVICE SCREEN TIME': {
            Consent: 'FALSE',
            Definition: t.Gj.device_screen_time.definition,
            Unit: t.Gj.device_screen_time.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'DEVICE SCREEN TIME',
          },
          'WORK LIFE BALANCE': {
            Consent: 'FALSE',
            Definition: t.Gj.work_life_balance.definition,
            Unit: t.Gj.work_life_balance.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'WORK LIFE BALANCE',
          },
          JOURNALING: {
            Consent: 'FALSE',
            Definition: t.Gj.journaling.definition,
            Unit: t.Gj.journaling.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'JOURNALING',
          },
          DATE: {
            Consent: 'FALSE',
            Definition: t.Gj.date.definition,
            Unit: t.Gj.date.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'DATE',
          },
          'EMOTIONAL LIST': {
            Consent: 'FALSE',
            Definition: t.Gj.emotional_list.definition,
            Unit: t.Gj.emotional_list.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'EMOTIONAL LIST',
          },
          'HIGH TEMPERATURE': {
            Consent: 'FALSE',
            Definition: t.Gj.high_temperature.definition,
            Unit: t.Gj.high_temperature.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'HIGH TEMPERATURE',
          },
          Photos: {
            Consent: 'FALSE',
            Definition: t.Gj.photos.definition,
            Unit: t.Gj.photos.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'Photos',
          },
          'LOW TEMPERATURE': {
            Consent: 'FALSE',
            Definition: t.Gj.low_temperature.definition,
            Unit: t.Gj.low_temperature.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'LOW TEMPERATURE',
          },
          'SCREEN RECORDING': {
            Consent: 'FALSE',
            Definition: t.Gj.screen_recording.definition,
            Unit: t.Gj.low_temperature.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SCREEN RECORDING',
          },
          'CAMERA RECORDING': {
            Consent: 'FALSE',
            Definition: t.Gj.camera_recording.definition,
            Unit: t.Gj.camera_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'CAMERA RECORDING',
          },
          'SCREEN + CAMERA RECORDING': {
            Consent: 'FALSE',
            Definition: t.Gj.screen_camera_recording.definition,
            Unit: t.Gj.screen_camera_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SCREEN + CAMERA RECORDING',
          },
          'MICROPHONE AUDIO RECORDING': {
            Consent: 'FALSE',
            Definition: t.Gj.microphone_audio_recording.definition,
            Unit: t.Gj.microphone_audio_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'MICROPHONE AUDIO RECORDING',
          },
          'SYSTEM AUDIO RECORDING': {
            Consent: 'FALSE',
            Definition: t.Gj.system_audio_recording.definition,
            Unit: t.Gj.system_audio_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'SYSTEM AUDIO RECORDING',
          },
          'MIC + SYSTEM RECORDING': {
            Consent: 'FALSE',
            Definition: t.Gj.mic_system_recording.definition,
            Unit: t.Gj.mic_system_recording.unit,
            Pricing: '',
            Use: '',
            Threshold: '',
            fieldName: 'MIC + SYSTEM RECORDING',
          },
        };
    },
    9787: function (e, i, n) {
      n.d(i, {
        E: function () {
          return o;
        },
        J: function () {
          return r;
        },
      });
      var t = n(9611);
      let r = [
          { Header: 'Personal Data and Webcam', accessor: 'PDataAndWeb' },
          { Header: 'Definition', accessor: 'Definition' },
          { Header: 'List Of Unit', accessor: 'Unit' },
          { Header: 'Companies', accessor: 'Companies' },
          { Header: 'Use', accessor: 'Use' },
          { Header: 'Price Offering', accessor: 'Pricing' },
          { Header: 'Threshold', accessor: 'Threshold' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'id', accessor: 'id' },
        ],
        o = {
          'Emotional Overall': {
            Consent: 'FALSE',
            Definition: t.Gj.emotional_overall.definition,
            Unit: t.Gj.emotional_overall.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          Weather: {
            Consent: 'FALSE',
            Definition: t.Gj.weather.definition,
            Unit: t.Gj.weather.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Relative Finance Status': {
            Consent: 'FALSE',
            Definition: t.Gj.relative_finance_status.definition,
            Unit: t.Gj.relative_finance_status.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Exercise Time': {
            Consent: 'FALSE',
            Definition: t.Gj.exercise_time.definition,
            Unit: t.Gj.exercise_time.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Any Social Life': {
            Consent: 'FALSE',
            Definition: t.Gj.any_social_life.definition,
            Unit: t.Gj.any_social_life.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Social Life List': {
            Consent: 'FALSE',
            Definition: t.Gj.social_life_list.definition,
            Unit: t.Gj.social_life_list.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Health Overall': {
            Consent: 'FALSE',
            Definition: t.Gj.health_overall.definition,
            Unit: t.Gj.health_overall.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          Weight: {
            Consent: 'FALSE',
            Definition: t.Gj.weight.definition,
            Unit: t.Gj.weight.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Family Status': {
            Consent: 'FALSE',
            Definition: t.Gj.family_status.definition,
            Unit: t.Gj.family_status.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Device Screen Time': {
            Consent: 'FALSE',
            Definition: t.Gj.device_screen_time.definition,
            Unit: t.Gj.device_screen_time.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Work Life Balance': {
            Consent: 'FALSE',
            Definition: t.Gj.work_life_balance.definition,
            Unit: t.Gj.work_life_balance.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          Journaling: {
            Consent: 'FALSE',
            Definition: t.Gj.journaling.definition,
            Unit: t.Gj.journaling.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          Date: {
            Consent: 'FALSE',
            Definition: t.Gj.date.definition,
            Unit: t.Gj.date.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Emotional List': {
            Consent: 'FALSE',
            Definition: t.Gj.emotional_list.definition,
            Unit: t.Gj.emotional_list.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'High Temperature': {
            Consent: 'FALSE',
            Definition: t.Gj.high_temperature.definition,
            Unit: t.Gj.high_temperature.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          Photos: {
            Consent: 'FALSE',
            Definition: t.Gj.photos.definition,
            Unit: t.Gj.photos.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Low Temperature': {
            Consent: 'FALSE',
            Definition: t.Gj.low_temperature.definition,
            Unit: t.Gj.low_temperature.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Screen Recording': {
            Consent: 'FALSE',
            Definition: t.Gj.screen_recording.definition,
            Unit: t.Gj.screen_recording.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Camera Recording': {
            Consent: 'FALSE',
            Definition: t.Gj.camera_recording.definition,
            Unit: t.Gj.camera_recording.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Screen Camera Recording': {
            Consent: 'FALSE',
            Definition: t.Gj.screen_camera_recording.definition,
            Unit: t.Gj.screen_camera_recording.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Microphone Audio Recording': {
            Consent: 'FALSE',
            Definition: t.Gj.microphone_audio_recording.definition,
            Unit: t.Gj.microphone_audio_recording.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'System Audio Recording': {
            Consent: 'FALSE',
            Definition: t.Gj.system_audio_recording.definition,
            Unit: t.Gj.system_audio_recording.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
          'Mic System Recording': {
            Consent: 'FALSE',
            Definition: t.Gj.mic_system_recording.definition,
            Unit: t.Gj.mic_system_recording.unit,
            Companies: [],
            Use: '',
            Threshold: '',
            Pricing: '',
            id: null,
          },
        };
    },
    9611: function (e, i, n) {
      n.d(i, {
        Gj: function () {
          return o;
        },
        kk: function () {
          return a;
        },
        nz: function () {
          return r;
        },
      });
      var t = n(8118);
      let r = [
          { title: 'Text', color: '#046C98', value: t.D.TEXT, darkColor: '#A1BF8C' },
          { title: 'Image', color: '#F5B11A', value: t.D.IMAGES, darkColor: '#F5B11A' },
          { title: 'Text + Image', color: '#E62431', value: t.D.BOTH, darkColor: '#907CB4' },
        ],
        o = {
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
          date: { definition: 'the current day’s date', unit: 'Price per date-specific data entry' },
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
        a = '1450px';
    },
    5021: function (e, i, n) {
      n.d(i, {
        f: function () {
          return r;
        },
        p: function () {
          return o;
        },
      });
      var t = n(9611);
      let r = [
          { Header: 'Personal Data and ScreenData', accessor: 'PDataAndScreen' },
          { Header: 'List Of Unit', accessor: 'Unit' },
          { Header: 'Consent', accessor: 'Consent' },
          { Header: 'Personal Defined Value', accessor: 'PDefinedValue' },
          { Header: 'Other Companies Value', accessor: 'OtherCompValue' },
          { Header: 'id', accessor: 'id' },
        ],
        o = {
          'Emotional Overall': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.emotional_overall.unit,
          },
          'Relative Finance Status': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            Unit: t.Gj.relative_finance_status.unit,
            OtherCompValue: '0.0',
            id: null,
          },
          'Exercise Time': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            Unit: t.Gj.exercise_time.unit,
            OtherCompValue: '0.0',
            id: null,
          },
          'Any Social Life': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.any_social_life.unit,
          },
          'Social Life List': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.social_life_list.unit,
          },
          'Health Overall': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.health_overall.unit,
          },
          Weight: { Consent: 'TRUE', PDefinedValue: '0.00', OtherCompValue: '0.0', id: null, Unit: t.Gj.weight.unit },
          'Family Status': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.family_status.unit,
          },
          'Device Screen Time': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.device_screen_time.unit,
          },
          'Work Life Balance': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.work_life_balance.unit,
          },
          Journaling: {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.journaling.unit,
          },
          Date: { Consent: 'TRUE', PDefinedValue: '0.00', OtherCompValue: '0.0', id: null, Unit: t.Gj.date.unit },
          'Emotional List': {
            Consent: 'FALSE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.emotional_list.unit,
          },
          'High Temperature': {
            Consent: 'FALSE',
            PDefinedValue: '1.20',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.high_temperature.unit,
          },
          Photos: { Consent: 'TRUE', PDefinedValue: '0.00', OtherCompValue: '0.0', id: null, Unit: t.Gj.photos.unit },
          'Low Temperature': {
            Consent: 'FALSE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.low_temperature.unit,
          },
          Weather: {
            Consent: 'FALSE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.weather.unit,
          },
          'Screen Recording': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.screen_recording.unit,
          },
          'Camera Recording': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.camera_recording.unit,
          },
          'Screen Camera Recording': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.screen_camera_recording.unit,
          },
          'Microphone Audio Recording': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.microphone_audio_recording.unit,
          },
          'System Audio Recording': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.system_audio_recording.unit,
          },
          'Mic System Recording': {
            Consent: 'TRUE',
            PDefinedValue: '0.00',
            OtherCompValue: '0.0',
            id: null,
            Unit: t.Gj.mic_system_recording.unit,
          },
        };
    },
    1846: function (e, i, n) {
      n.d(i, {
        O: function () {
          return r;
        },
      });
      var t = n(2265);
      let r = (e, i) => {
        let n = (0, t.useCallback)(
          (n) => {
            e && e.current && !e.current.contains(n.target) && i();
          },
          [i, e],
        );
        (0, t.useEffect)(
          () => (
            document.addEventListener('mousedown', n),
            () => {
              document.removeEventListener('mousedown', n);
            }
          ),
          [n],
        );
      };
    },
    9907: function (e, i, n) {
      n.d(i, {
        i: function () {
          return r;
        },
      });
      var t = n(2265);
      function r() {
        let [e, i] = (0, t.useState)({ width: 0, height: 0 });
        return (
          (0, t.useEffect)(() => {
            function e() {
              i({ width: window.innerWidth, height: window.innerHeight });
            }
            return window.addEventListener('resize', e), e(), () => window.removeEventListener('resize', e);
          }, []),
          { width: e.width, height: e.height }
        );
      }
    },
    2854: function (e, i, n) {
      n.d(i, {
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
          return b;
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
          return E;
        },
        QM: function () {
          return C;
        },
        oB: function () {
          return T;
        },
        eP: function () {
          return D;
        },
        th: function () {
          return S;
        },
        m8: function () {
          return o;
        },
        nm: function () {
          return a;
        },
        LE: function () {
          return t;
        },
        kP: function () {
          return r;
        },
        kS: function () {
          return u;
        },
        PA: function () {
          return j;
        },
        HB: function () {
          return v;
        },
        PD: function () {
          return G;
        },
        lW: function () {
          return h;
        },
        fR: function () {
          return w;
        },
        Ix: function () {
          return A;
        },
        pE: function () {
          return f;
        },
        ws: function () {
          return _;
        },
      });
      var t = {
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
        o = {
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
        h = { src: '/_next/static/media/send__icon.ef522f85.svg', height: 41, width: 40, blurWidth: 0, blurHeight: 0 },
        f = {
          src: '/_next/static/media/sidebar__icon.ffb450fe.png',
          height: 256,
          width: 256,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATklEQVR42mWNMQ5AQBQF5wgbJ1AIsYnSAXRarUSpwiV0Sg48kSj98r1kZgALK0sbs4lvnt4+ru5eJuyc7R0B3MzYujg4AXhYhyMgUfrPvqNHQdEzcD6aAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
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
        C = {
          src: '/_next/static/media/cross_disable__icon.5c8e8498.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
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
        D = { src: '/_next/static/media/edit__icon.0dee8109.svg', height: 25, width: 24, blurWidth: 0, blurHeight: 0 },
        b = { src: '/_next/static/media/arrow__icon.c780bc0f.svg', height: 24, width: 28, blurWidth: 0, blurHeight: 0 },
        G = { src: '/_next/static/media/plus__icon.30d10bc7.svg', height: 21, width: 23, blurWidth: 0, blurHeight: 0 },
        T = {
          src: '/_next/static/media/default-profile.b62773a2.png',
          height: 90,
          width: 90,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXyeRjxeRjxeBfxeBjxeBfxeBfxeRfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBjxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeBfxeRjxeBjxeBdyAzjlAAAAHHRSTlMAAAACAgMKCg0OHSMwMTJFV15fYGGFlMbJ0fn7h3ig8gAAAEBJREFUeNoFQIURgDAQC8GrSL309x+Tw0wYAy6gKiJFEchyvSMDVtp5NLFwfYTwdQfUNCFVgDreT9TEyt37jesPgBMDgQkeLc8AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        v = {
          src: '/_next/static/media/no-data.de51b600.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3BPQqCYAAA0Df0gwfQo0QQ7UERtEVT0VRBXxiCLcFHCU05eBg9nr4Hqcx2mEmBqNUMOxGm7pZugrmrhLHcwsvFTgUTDxulk7efAyMFEqVCUEFt7ewvyH1gZm/lKfo69vEEFGYLsWa/AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: '/_next/static/media/no-chats.8d8a2b29.png',
          height: 100,
          width: 100,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3JqwrCYBgA0OOwiAbDkl3EYhOGFoNLsiaCtzAGPyJYDD6A1T5920+xnHK4aJQ2P0dBl60kC/oaw8A6uMmDlY8J+//WMpXSnZ1ZMPZSyyWeDlpnSyeFRC+YuqoctR6CTjAwV1h4fwGxBRlKHxObZgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        w = {
          src: '/_next/static/media/showpassword__icon.9d4e8d08.png',
          height: 24,
          width: 24,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARklEQVR42l2NsQ0AIQwD76fkV4CSHjahh4oRg4sgEGcpsiw5hk9yjv+ZUsBpGIWKyYmMERl0XSPvoEsJBbtSveKE6+k7uwD0YxaTHd0JgAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        S = {
          src: '/_next/static/media/hidepassword__icon.84b28e09.png',
          height: 60,
          width: 60,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42kXBIQ6CUAAA0CcWj6HBjU2L0WYyewCLm3YP4eacBps3sHAANjYaGwQ4AaMRuMUn8h5vMYDIjJWHq5+/MzB30Xo66qVQCDYyuZ0gpxTsbWXugpqFyuDkoNMA3CS+Yi9LIpO1zwh58RiIbBbx+wAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        };
    },
    7152: function (e, i, n) {
      n.d(i, {
        P: function () {
          return c;
        },
      });
      var t = n(3198),
        r = n(2265),
        o = n(5531),
        a = n(8118),
        s = n(323);
      let c = () => {
        let {
            chats: e,
            userPrompt: i,
            chatHistory: n,
            recentChatHistory: c,
            activeChatID: d,
          } = (0, t.v9)((e) => e.chats),
          l = (0, o.TL)(),
          u = (0, r.useCallback)(
            (e) => {
              l((0, s.hH)(e));
            },
            [l],
          ),
          h = (0, r.useCallback)(() => {
            l((0, s.Zp)());
          }, [l]),
          f = (0, r.useCallback)(
            (e, i) => {
              l((0, s.IM)({ chat: e, newMessageID: i }));
            },
            [l],
          ),
          A = (0, r.useCallback)(
            (e) => {
              l((0, s.vV)(e));
            },
            [l],
          ),
          g = (0, r.useCallback)(() => {
            l((0, s.vV)({ data: '', choice: a.D.TEXT }));
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
          C = (0, r.useCallback)(() => {
            l((0, s.vO)());
          }, [l]),
          E = (0, r.useCallback)(
            (e) => {
              l((0, s.TK)(e));
            },
            [l],
          ),
          p = (0, r.useCallback)(
            (e) => {
              E(e.id), e.messages.length > 0 && l((0, s.NI)(e.messages));
            },
            [l, E],
          );
        return {
          chats: e,
          userPrompt: i,
          chatHistory: n,
          recentChatHistory: c,
          activeChatID: d,
          resetUserPrompt: g,
          updateChat: f,
          setUserPrompt: A,
          setChatHistory: m,
          setChats: u,
          deleteChats: h,
          startNewChat: C,
          setRecentChatHistory: _,
          openPreviousChats: p,
          setActiveChatID: E,
        };
      };
    },
    323: function (e, i, n) {
      n.d(i, {
        IM: function () {
          return d;
        },
        NI: function () {
          return A;
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
          return h;
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
      var t = n(9930),
        r = n(8118);
      let o = {
          chats: [],
          chatHistory: [],
          recentChatHistory: {},
          activeChatID: void 0,
          userPrompt: { data: '', choice: r.D.TEXT },
        },
        a = (0, t.oM)({
          name: 'chats',
          initialState: o,
          reducers: {
            setChatsAction: (e, i) => ({ ...e, chats: [...e.chats, i.payload] }),
            updateChatAction: (e, i) => ({
              ...e,
              chats: e.chats.map((e) =>
                e.messageID === i.payload.chat.messageID ? { ...i.payload.chat, messageID: i.payload.newMessageID } : e,
              ),
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
          setRecentChatHistoryAction: h,
          startNewChatAction: f,
          openPreviousChatsAction: A,
          setActiveChatIdAction: g,
        } = a.actions;
      i.ZP = a.reducer;
    },
    8118: function (e, i, n) {
      var t, r;
      n.d(i, {
        D: function () {
          return t;
        },
      }),
        ((r = t || (t = {})).BOTH = 'both'),
        (r.TEXT = 'answer'),
        (r.IMAGES = 'images');
    },
    22: function (e, i, n) {
      n.d(i, {
        d: function () {
          return o;
        },
      });
      var t = n(9930);
      let r = (0, t.oM)({
          name: 'loading',
          initialState: { isLoading: !1 },
          reducers: { setIsLoadingStateAction: (e, i) => ({ ...e, isLoading: i.payload }) },
        }),
        { setIsLoadingStateAction: o } = r.actions;
      i.Z = r.reducer;
    },
    859: function (e, i, n) {
      n.d(i, {
        Jg: function () {
          return u;
        },
        O$: function () {
          return d;
        },
        Pn: function () {
          return l;
        },
        UD: function () {
          return A;
        },
        Y4: function () {
          return f;
        },
        py: function () {
          return h;
        },
      });
      var t = n(9930),
        r = n(9787),
        o = n(3470),
        a = n(5021);
      let s = { personalData: {}, gData: {}, rData: a.p, cData: r.E, compData: o.A, screenData: [] },
        c = (0, t.oM)({
          name: 'my_g_data',
          initialState: s,
          reducers: {
            setPersonalDataAction: (e, i) => ({ ...e, personalData: { ...e.personalData, ...i.payload } }),
            setGDataAction: (e, i) => ({ ...e, gData: i.payload }),
            setRDataAction: (e, i) => ({ ...e, rData: { ...e.rData, ...i.payload } }),
            setCDataAction: (e, i) => ({ ...e, cData: { ...e.cData, ...i.payload } }),
            setCompDataAction: (e, i) => ({ ...e, compData: { ...e.compData, ...i.payload } }),
            setScreenDataAction: (e, i) => ({ ...e, screenData: i.payload }),
          },
        }),
        {
          setPersonalDataAction: d,
          setGDataAction: l,
          setRDataAction: u,
          setCDataAction: h,
          setScreenDataAction: f,
          setCompDataAction: A,
        } = c.actions;
      i.ZP = c.reducer;
    },
    8421: function (e, i, n) {
      n.d(i, {
        H: function () {
          return o;
        },
      });
      var t = n(9930);
      let r = (0, t.oM)({
          name: 'sidebar',
          initialState: { isOpen: !1 },
          reducers: { setIsOpenAction: (e, i) => ({ isOpen: i.payload }) },
        }),
        { setIsOpenAction: o } = r.actions;
      i.Z = r.reducer;
    },
    5531: function (e, i, n) {
      n.d(i, {
        TL: function () {
          return E;
        },
      });
      var t = n(7373),
        r = n(9930),
        o = n(3198),
        a = n(1267),
        s = n(6346),
        c = n(1850),
        d = n(8557),
        l = n(22),
        u = n(859),
        h = n(323),
        f = n(8421),
        A = n(54);
      let g = (0, t.UY)({ user: d.Z, loading: l.Z, my_g_data: u.ZP, chats: h.ZP, sidebar: f.Z, weather: A.Z }),
        m = { key: 'root', storage: c.Z, blacklist: ['loading', 'user', 'chats', 'my_g_data'] },
        _ = (0, a.OJ)(m, g),
        C = (0, r.xC)({ reducer: _, middleware: [s.Z] });
      (i.ZP = C), (0, a.p5)(C);
      let E = o.I0;
    },
    8557: function (e, i, n) {
      n.d(i, {
        K: function () {
          return o;
        },
      });
      var t = n(9930);
      let r = (0, t.oM)({
          name: 'user',
          initialState: { isAuthenticated: !1, user: void 0 },
          reducers: { setUserAction: (e, i) => ({ ...e, ...i.payload }) },
        }),
        { setUserAction: o } = r.actions;
      i.Z = r.reducer;
    },
    54: function (e, i, n) {
      n.d(i, {
        _: function () {
          return o;
        },
      });
      var t = n(9930);
      let r = (0, t.oM)({
          name: 'weather',
          initialState: { weather: void 0 },
          reducers: { setWeatherAction: (e, i) => ({ ...e, weather: i.payload }) },
        }),
        { setWeatherAction: o } = r.actions;
      i.Z = r.reducer;
    },
  },
]);
