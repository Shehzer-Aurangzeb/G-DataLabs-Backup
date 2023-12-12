'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [136],
  {
    3136: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return v;
        },
        q: function () {
          return g;
        },
      });
      var n = t(7437),
        d = t(2265),
        s = t(2164),
        _ = t(5888),
        l = t(6171),
        r = t(6118),
        o = t(1515),
        c = t(7350),
        i = t(9222);
      let u = (e) => {
        let { successCallback: a, errorCallback: t } = e;
        navigator.geolocation.getCurrentPosition(a, t, { enableHighAccuracy: !0 });
      };
      var m = t(1799);
      let p = () => {
        let { setWeather: e } = (0, m.I)(),
          { user: a } = (0, r.a)(),
          t = (0, d.useCallback)(
            async (a) => {
              try {
                let { coords: t } = a,
                  { data: n } = await i.default.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat='
                      .concat(t.latitude, '&lon=')
                      .concat(t.longitude, '&appid=')
                      .concat('b9a5327fe46885fda6abefa8e7b61e7e', '&units=imperial'),
                  );
                if (!n.main) return;
                let d = { lowestTemperature: n.main.temp_min, highestTemperature: n.main.temp_max };
                e(d);
              } catch (e) {}
            },
            [e],
          ),
          n = (0, d.useCallback)(async () => {}, []);
        return (
          (0, d.useEffect)(() => {
            a && u({ successCallback: t, errorCallback: n }),
              setInterval(() => {
                u({ successCallback: t, errorCallback: n });
              }, 36e5);
          }, [n, t, a]),
          { getCurrentLocationWeather: t }
        );
      };
      var f = t(7999),
        y = t(346),
        T = t(910);
      let h = [
          {
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.325110',
            demanded_reward_value: '0.00',
            field_name: 'EMOTIONAL_OVERALL',
            id: 55,
            user_id: 30,
            company_consent: [],
          },
          {
            company_consent: [
              {
                personal_data_field: { field_name: 'WEATHER', user_id: 49 },
                personal_data_field_id: 3,
                first_name: 'Company A',
                id: 11,
                created_at: '2023-11-10T12:23:09.297764',
                consents_to_buy: !0,
                usage: 'First Usage A',
                demanded_reward_value: '3.00',
                threshold: 10,
              },
              {
                personal_data_field: { field_name: 'WEATHER', user_id: 49 },
                personal_data_field_id: 3,
                first_name: 'Company B',
                id: 46,
                created_at: '2023-11-10T17:06:09.481592',
                consents_to_buy: !1,
                usage: 'First Usage B',
                demanded_reward_value: '2.00',
                threshold: 4,
              },
              {
                personal_data_field: { field_name: 'WEATHER', user_id: 49 },
                personal_data_field_id: 3,
                first_name: 'Company C',
                id: 51,
                created_at: '2023-11-10T17:07:49.655299',
                consents_to_buy: !0,
                usage: 'First Usage C',
                demanded_reward_value: '1.0',
                threshold: 0,
              },
              {
                personal_data_field: { field_name: 'WEATHER', user_id: 49 },
                personal_data_field_id: 3,
                first_name: 'Company D',
                id: 52,
                created_at: '2023-11-10T17:08:33.754377',
                consents_to_buy: !0,
                usage: 'First Usage D',
                demanded_reward_value: '4.00',
                threshold: 3,
              },
            ],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.335924',
            demanded_reward_value: '13.5',
            field_name: 'WEATHER',
            id: 56,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.347184',
            demanded_reward_value: '0.00',
            field_name: 'RELATIVE_FINANCE_STATUS',
            id: 57,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.358968',
            demanded_reward_value: '0.00',
            field_name: 'EXERCISE_TIME',
            id: 58,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.370271',
            demanded_reward_value: '0.00',
            field_name: 'ANY_SOCIAL_LIFE',
            id: 59,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.381704',
            demanded_reward_value: '0.00',
            field_name: 'SOCIAL_LIFE_LIST',
            id: 60,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.393055',
            demanded_reward_value: '0.00',
            field_name: 'HEALTH_OVERALL',
            id: 61,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.404670',
            demanded_reward_value: '0.00',
            field_name: 'WEIGHT',
            id: 62,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.416126',
            demanded_reward_value: '0.00',
            field_name: 'FAMILY_STATUS',
            id: 63,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.427394',
            demanded_reward_value: '0.00',
            field_name: 'DEVICE_SCREEN_TIME',
            id: 64,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.439248',
            demanded_reward_value: '0.00',
            field_name: 'WORK_LIFE_BALANCE',
            id: 65,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:11.451311',
            demanded_reward_value: '0.00',
            field_name: 'JOURNALING',
            id: 66,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:31:52.698932',
            demanded_reward_value: '0.00',
            field_name: 'DATE',
            id: 67,
            user_id: 30,
          },
          {
            company_consent: [
              {
                personal_data_field: { field_name: 'EMOTIONAL_LIST', user_id: 48 },
                personal_data_field_id: 1,
                first_name: 'Company A',
                id: 1,
                created_at: '2023-11-09T16:21:17.184971',
                consents_to_buy: !1,
                usage: 'Second Usage A',
                demanded_reward_value: '0.00',
                threshold: 8,
              },
              {
                personal_data_field: { field_name: 'EMOTIONAL_LIST', user_id: 48 },
                personal_data_field_id: 1,
                first_name: 'Company B',
                id: 2,
                created_at: '2023-11-09T17:01:12.310386',
                consents_to_buy: !0,
                usage: 'Second Usage B',
                demanded_reward_value: '5.00',
                threshold: 6,
              },
              {
                personal_data_field: { field_name: 'EMOTIONAL_LIST', user_id: 48 },
                personal_data_field_id: 1,
                first_name: 'Company C',
                id: 3,
                created_at: '2023-11-09T17:01:35.905119',
                consents_to_buy: !1,
                usage: 'Second Usage C',
                demanded_reward_value: '20.00',
                threshold: 4,
              },
              {
                personal_data_field: { field_name: 'EMOTIONAL_LIST', user_id: 48 },
                personal_data_field_id: 1,
                first_name: 'Company D',
                id: 4,
                created_at: '2023-11-09T17:04:03.445213',
                consents_to_buy: !1,
                usage: 'Second Usage D',
                demanded_reward_value: '10.00',
                threshold: 1,
              },
            ],
            consents_to_sell: !1,
            created_at: '2023-09-18T09:22:11.312609',
            demanded_reward_value: '0.00',
            field_name: 'EMOTIONAL_LIST',
            id: 54,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !1,
            created_at: '2023-09-18T09:22:11.281524',
            demanded_reward_value: '1.20',
            field_name: 'HIGH_TEMPERATURE',
            id: 52,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !0,
            created_at: '2023-09-18T09:22:10.205447',
            demanded_reward_value: '0.00',
            field_name: 'photos',
            id: 51,
            user_id: 30,
          },
          {
            company_consent: [],
            consents_to_sell: !1,
            created_at: '2023-09-18T09:22:11.299465',
            demanded_reward_value: '0.00',
            field_name: 'LOW_TEMPERATURE',
            id: 53,
            user_id: 30,
          },
        ],
        C = (0, d.createContext)({
          gTableColumns: [],
          getAllConsentData: async () => {},
          updateMyGData: async () => {},
          getAllPersonalData: async () => {},
          getAllCompanyConsentData: async () => {},
        }),
        g = () => (0, d.useContext)(C);
      var v = function (e) {
        let { children: a } = e,
          { setPersonalData: t, setGData: i, setRData: u, setCData: m, setScreenData: g, setCompData: v } = (0, _.h)(),
          { fetchChatHistory: w, fetchRecentChats: E } = (0, f.L)(),
          [b, A] = (0, d.useState)([]),
          { user: L } = (0, r.a)(),
          { logoutUser: I } = (0, y.a)();
        p();
        let k = (0, d.useCallback)(async () => {
            try {
              let { data: e } = await l.h.get('api/personal_data_consents_rewards'),
                a = (0, o.uR)({ tableName: c.me.PData, data: e.data });
              t(a);
            } catch (t) {
              var e, a;
              t instanceof s.d7 &&
                ((null === (e = t.response) || void 0 === e ? void 0 : e.status) === 401 ||
                  (null === (a = t.response) || void 0 === a ? void 0 : a.data.msg) === 'Token has expired') &&
                L &&
                I();
            }
          }, [t, I, L]),
          R = (0, d.useCallback)(async () => {
            try {
              let { data: e } = await l.h.get('api/user_consents_rewards'),
                a = (0, o.uR)({ tableName: c.me.RData, data: e.data });
              u(a);
              let t = (0, o.uR)({ tableName: c.me.CData, data: h });
              m(t);
            } catch (e) {}
          }, [u, m]),
          N = (0, d.useCallback)(async () => {
            try {
              if (!L || !L.accountType || L.accountType === T.Z8.PERSONAL) return;
              let { data: e } = await l.h.get('api/company_consents_rewards'),
                a = (0, o.uR)({ tableName: c.me.CompData, data: e.data });
              v(a);
            } catch (e) {}
          }, [v, L]),
          O = (0, d.useCallback)(async () => {
            try {
              let { data: e } = await l.h.get('api/user_personal_data/last_five'),
                a = (0, o.uR)({ tableName: c.me.GData, data: e });
              if (0 === e.length) return;
              let t = (0, o.Yn)(e);
              A(t), i(a);
            } catch (e) {}
          }, [i]),
          S = (0, d.useCallback)(async () => {
            try {
              let { data: e } = await l.h.get('api/file-data/'),
                a = (0, o.Xe)(e.data);
              g(a);
            } catch (e) {}
          }, [g]),
          D = (0, d.useCallback)(() => {
            k(), O(), w(), E(), R(), S(), N();
          }, [k, O, R, w, S, E, N]),
          M = (0, d.useMemo)(
            () => ({
              gTableColumns: b,
              getAllConsentData: R,
              updateMyGData: O,
              getAllPersonalData: k,
              getAllCompanyConsentData: N,
            }),
            [b, R, O, k, N],
          );
        return (
          (0, d.useEffect)(() => {
            L && D();
          }, [L, D]),
          (0, n.jsx)(C.Provider, { value: M, children: a })
        );
      };
    },
    7999: function (e, a, t) {
      t.d(a, {
        L: function () {
          return i;
        },
      });
      var n = t(2265),
        d = t(171),
        s = t(2164),
        _ = t(6171),
        l = t(7445),
        r = t(7152),
        o = t(1515),
        c = t(6118);
      let i = () => {
        let { isLoading: e, setIsLoading: a } = (0, l.r)(),
          {
            chats: t,
            userPrompt: i,
            setUserPrompt: u,
            setChats: m,
            resetUserPrompt: p,
            updateChat: f,
            recentChatHistory: y,
            startNewChat: T,
            openPreviousChats: h,
            activeChatID: C,
            setActiveChatID: g,
            setChatHistory: v,
            setRecentChatHistory: w,
          } = (0, r.P)(),
          { user: E } = (0, c.a)(),
          b = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await _.h.get('api/chat/'),
                a = (0, o.Cf)(e.data),
                t = (0, o.py)(a);
              if (!t) return;
              w(t);
            } catch (e) {}
          }, [w]),
          A = (0, n.useCallback)(async () => {
            try {
              let { data: e } = await _.h.get('api/history/'),
                a = (0, o.ef)(e.data);
              v(a);
            } catch (e) {}
          }, [v]),
          L = (0, n.useCallback)(
            async (e) => {
              try {
                let { data: a } = await _.h.post('api/chat/', { name: e });
                return a.data.id && g(a.data.id), a.data.id;
              } catch (e) {
                return e;
              }
            },
            [g],
          ),
          I = (0, n.useCallback)(
            async (e) => {
              let { responseId: a, feedback: t } = e;
              try {
                let { data: e } = await _.h.post('choice/'.concat(a), { data: t });
                if (!e.response) return;
                'success' === e.response && d.toast.success('Feedback provided'), b(), A();
              } catch (e) {}
            },
            [b, A],
          ),
          k = (0, n.useCallback)(async () => {
            var e, t;
            try {
              let t = (0, o.P4)({ isBotResponse: !1, isLoading: !1, text: i.data, images: [] }),
                n = (0, o.P4)({ isBotResponse: !0, isLoading: !0, text: '', images: [] });
              m(t), m(n), a(!0), p();
              let d = C;
              E && !d && (d = await L(i.data));
              let s = E ? { ...i, chat_id: d } : i,
                { data: l } = await _.h.post('get-answer-images', s),
                r = [],
                c = '';
              l.images && (r = l.images.map((e) => e)),
                (null === (e = l.response) || void 0 === e ? void 0 : e.length) && (c = l.response),
                f({ ...n, isLoading: !1, content: { text: c, images: r } }, l.id),
                E && (b(), A());
            } catch (e) {
              e instanceof s.d7
                ? d.toast.error(null === (t = e.response) || void 0 === t ? void 0 : t.data.error)
                : d.toast.error('Something went wrong');
            } finally {
              a(!1);
            }
          }, [a, i, m, p, f, E, C, L, A, b]);
        return {
          fetchBotResponse: k,
          isLoading: e,
          chats: t,
          userPrompt: i,
          setUserPrompt: u,
          recentChatHistory: y,
          startNewChat: T,
          openPreviousChats: h,
          fetchChatHistory: A,
          fetchRecentChats: b,
          provideResponseFeedback: I,
        };
      };
    },
    5888: function (e, a, t) {
      t.d(a, {
        h: function () {
          return l;
        },
      });
      var n = t(3198),
        d = t(2265),
        s = t(5531),
        _ = t(859);
      let l = () => {
        let {
            personalData: e,
            gData: a,
            rData: t,
            cData: l,
            screenData: r,
            compData: o,
          } = (0, n.v9)((e) => e.my_g_data),
          c = (0, s.TL)(),
          i = (0, d.useCallback)(
            (e) => {
              c((0, _.O$)(e));
            },
            [c],
          ),
          u = (0, d.useCallback)(
            (e) => {
              c((0, _.Pn)(e));
            },
            [c],
          ),
          m = (0, d.useCallback)(
            (e) => {
              c((0, _.Jg)(e));
            },
            [c],
          ),
          p = (0, d.useCallback)(
            (e) => {
              c((0, _.py)(e));
            },
            [c],
          ),
          f = (0, d.useCallback)(
            (e) => {
              c((0, _.UD)(e));
            },
            [c],
          ),
          y = (0, d.useCallback)(
            (e) => {
              c((0, _.Y4)(e));
            },
            [c],
          );
        return {
          setPersonalData: i,
          setGData: u,
          setRData: m,
          setCData: p,
          setScreenData: y,
          setCompData: f,
          screenData: r,
          cData: l,
          rData: t,
          personalData: e,
          gData: a,
          compData: o,
        };
      };
    },
    1799: function (e, a, t) {
      t.d(a, {
        I: function () {
          return l;
        },
      });
      var n = t(3198),
        d = t(2265),
        s = t(5531),
        _ = t(54);
      let l = () => {
        let { weather: e } = (0, n.v9)((e) => e.weather),
          a = (0, s.TL)(),
          t = (0, d.useCallback)(
            (e) => {
              a((0, _._)(e));
            },
            [a],
          );
        return { weather: e, setWeather: t };
      };
    },
  },
]);
