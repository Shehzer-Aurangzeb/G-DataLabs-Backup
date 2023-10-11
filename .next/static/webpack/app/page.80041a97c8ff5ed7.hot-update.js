"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./hooks/useAuth.ts":
/*!**************************!*\
  !*** ./hooks/useAuth.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./config/index.ts\");\n/* harmony import */ var _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/state/loading/hooks */ \"(app-pages-browser)/./state/loading/hooks.ts\");\n/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/state/user/hooks */ \"(app-pages-browser)/./state/user/hooks.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./lib/index.ts\");\n/* harmony import */ var _state_chats_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/state/chats/hooks */ \"(app-pages-browser)/./state/chats/hooks.ts\");\n/* eslint-disable no-restricted-syntax */ /* eslint-disable @typescript-eslint/naming-convention */ /* __next_internal_client_entry_do_not_use__ useAuth auto */ \n\n\n\n\n\n\n\n\n\nconst useAuth = ()=>{\n    const { isLoading, setIsLoading } = (0,_state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__.useLoading)();\n    const { setUser, isAuthenticated, user } = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_5__.useUser)();\n    const { deleteChats } = (0,_state_chats_hooks__WEBPACK_IMPORTED_MODULE_8__.useChats)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const getUserInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (token)=>{\n        const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__.api.get(\"api/user_profile/1/\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        const { email, first_name, last_name, phone_number, total_rewards, username, id } = data.data;\n        let { profile_picture_url } = data.data;\n        if (!profile_picture_url) {\n            profile_picture_url = (0,_lib__WEBPACK_IMPORTED_MODULE_7__.generateAvatar)(first_name);\n        }\n        const userInfo = {\n            email,\n            firstName: first_name,\n            lastName: last_name,\n            id,\n            username,\n            image: profile_picture_url,\n            phoneNumber: phone_number,\n            totalRewards: total_rewards,\n            key: \"\"\n        };\n        return userInfo;\n    }, []);\n    const loginUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (credentials)=>{\n        try {\n            setIsLoading(true);\n            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__.api.post(\"login_api\", credentials);\n            const userInfo = await getUserInfo(data.access_token);\n            var _userInfo_totalRewards;\n            const payload = {\n                ...userInfo,\n                totalRewards: (_userInfo_totalRewards = userInfo.totalRewards) !== null && _userInfo_totalRewards !== void 0 ? _userInfo_totalRewards : 0,\n                key: data.access_token\n            };\n            setUser({\n                user: payload,\n                isAuthenticated: true\n            });\n            router.replace(_constants__WEBPACK_IMPORTED_MODULE_6__.PATHS.HOME);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Welcome to G-Data Labs\");\n        } catch (e) {\n            var _e_response;\n            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__.AxiosError) react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data.error);\n            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Something went wrong \");\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        setIsLoading,\n        setUser,\n        router,\n        getUserInfo\n    ]);\n    const updateUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (payload)=>{\n        try {\n            var _user;\n            setIsLoading(true);\n            const formdata = new FormData();\n            for (const [key, value] of Object.entries(payload)){\n                formdata.append(key, value);\n            }\n            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__.api.patch(\"api/user_profile/1/\", formdata);\n            let { profile_picture_url } = data.data;\n            if (!profile_picture_url) {\n                profile_picture_url = (0,_lib__WEBPACK_IMPORTED_MODULE_7__.generateAvatar)(data.data.first_name);\n            }\n            const updatedUserInfo = {\n                firstName: data.data.first_name,\n                lastName: data.data.last_name,\n                phoneNumber: data.data.phone_number,\n                totalRewards: data.data.total_rewards,\n                email: data.data.email,\n                image: profile_picture_url,\n                username: data.data.username,\n                id: data.data.id,\n                key: (_user = user) === null || _user === void 0 ? void 0 : _user.key\n            };\n            setUser({\n                user: updatedUserInfo,\n                isAuthenticated: true\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Personal information updated successfully\");\n        } catch (e) {\n            var _e_response;\n            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__.AxiosError) react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data.error);\n            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Something went wrong \");\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        setIsLoading,\n        setUser,\n        user\n    ]);\n    const registerUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (credentials)=>{\n        try {\n            setIsLoading(true);\n            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__.api.post(\"signup_api\", credentials);\n            if (data.error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(data.error);\n                return;\n            }\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Your account has been successfully created\");\n            router.replace(_constants__WEBPACK_IMPORTED_MODULE_6__.PATHS.LOGIN);\n        } catch (e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Something went wrong\");\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        setIsLoading,\n        router\n    ]);\n    const resetPassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (payload)=>{\n        try {\n            setIsLoading(true);\n            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__.api.post(\"api/user/reset_password_email\", payload);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(data.message);\n            router.push(_constants__WEBPACK_IMPORTED_MODULE_6__.PATHS.CONFIRMPASSWORD);\n        } catch (e) {\n            var _e_response;\n            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__.AxiosError) react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data.error);\n            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Something went wrong \");\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        setIsLoading,\n        router\n    ]);\n    const confirmPassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (payload)=>{\n        try {\n            setIsLoading(true);\n            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__.api.post(\"api/user/reset_token_confirm\", payload);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(data.message);\n            router.push(_constants__WEBPACK_IMPORTED_MODULE_6__.PATHS.LOGIN);\n        } catch (e) {\n            var _e_response;\n            if (e instanceof axios__WEBPACK_IMPORTED_MODULE_9__.AxiosError) react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data.error);\n            else react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Something went wrong \");\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        setIsLoading,\n        router\n    ]);\n    const logoutUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        setUser({\n            user: undefined,\n            isAuthenticated: false\n        });\n        deleteChats();\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Logout Successful.\");\n        router.replace(_constants__WEBPACK_IMPORTED_MODULE_6__.PATHS.LOGIN);\n    }, [\n        setUser,\n        router,\n        deleteChats\n    ]);\n    return {\n        loginUser,\n        logoutUser,\n        isLoading,\n        registerUser,\n        isAuthenticated,\n        user,\n        updateUser,\n        resetPassword,\n        confirmPassword\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzRDLE9BQU8sQ0FBQzFCLEtBQUswQyxPQUFPO1lBQzFCN0MsT0FBTzhDLElBQUksQ0FBQ3hELDZDQUFLQSxDQUFDcUQsS0FBSztRQUN6QixFQUFFLE9BQU9iLEdBQUc7Z0JBQytCQTtZQUF6QyxJQUFJQSxhQUFhNUMsNkNBQVVBLEVBQUVELGlEQUFLQSxDQUFDOEMsS0FBSyxFQUFDRCxjQUFBQSxFQUFFRSxRQUFRLGNBQVZGLGtDQUFBQSxZQUFZM0IsSUFBSSxDQUFDNEIsS0FBSztpQkFDMUQ5QyxpREFBS0EsQ0FBQzhDLEtBQUssQ0FBQztRQUNuQixTQUFVO1lBQ1JwQyxhQUFhO1FBQ2Y7SUFDRixHQUNBO1FBQUNBO1FBQWNLO0tBQU87SUFFeEIsTUFBTWlELGFBQWFsRSxrREFBV0EsQ0FBQztRQUM3QmEsUUFBUTtZQUFFRSxNQUFNb0Q7WUFBV3JELGlCQUFpQjtRQUFNO1FBQ2xERTtRQUNBZCxpREFBS0EsQ0FBQzRDLE9BQU8sQ0FBQztRQUNkN0IsT0FBTzJCLE9BQU8sQ0FBQ3JDLDZDQUFLQSxDQUFDcUQsS0FBSztJQUM1QixHQUFHO1FBQUMvQztRQUFTSTtRQUFRRDtLQUFZO0lBRWpDLE9BQU87UUFDTHVCO1FBQ0EyQjtRQUNBdkQ7UUFDQWdEO1FBQ0E3QztRQUNBQztRQUNBbUM7UUFDQVc7UUFDQUk7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQXV0aC50cz85Yzc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAL2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2FkaW5nIH0gZnJvbSAnQC9zdGF0ZS9sb2FkaW5nL2hvb2tzJztcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAL3N0YXRlL3VzZXIvaG9va3MnO1xuaW1wb3J0IHsgVXNlclR5cGUgfSBmcm9tICdAL3N0YXRlL3VzZXIvdHlwZXMnO1xuaW1wb3J0IHsgU2lnbnVwQ3JlZGVudGlhbHMsIFVwZGF0ZVVzZXJQYXlsb2FkVHlwZSwgVXNlckNyZWRlbnRpYWxzIH0gZnJvbSAndHlwZXMnO1xuaW1wb3J0IHsgUEFUSFMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUF2YXRhciB9IGZyb20gJ0AvbGliJztcbmltcG9ydCB7IHVzZUNoYXRzIH0gZnJvbSAnQC9zdGF0ZS9jaGF0cy9ob29rcyc7XG5pbXBvcnQgeyBDb25maXJtUGFzc3dvcmRGb3JtU2NoZW1hVHlwZSwgUmVzZXRQYXNzd29yZEZvcm1TY2hlbWFUeXBlIH0gZnJvbSAnQC9zY2hlbWEnO1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9ID0gdXNlTG9hZGluZygpO1xuICBjb25zdCB7IHNldFVzZXIsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlVXNlcigpO1xuICBjb25zdCB7IGRlbGV0ZUNoYXRzIH0gPSB1c2VDaGF0cygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBnZXRVc2VySW5mbyA9IHVzZUNhbGxiYWNrKGFzeW5jICh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KCdhcGkvdXNlcl9wcm9maWxlLzEvJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgeyBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwaG9uZV9udW1iZXIsIHRvdGFsX3Jld2FyZHMsIHVzZXJuYW1lLCBpZCB9ID0gZGF0YS5kYXRhO1xuICAgIGxldCB7IHByb2ZpbGVfcGljdHVyZV91cmwgfSA9IGRhdGEuZGF0YTtcbiAgICBpZiAoIXByb2ZpbGVfcGljdHVyZV91cmwpIHtcbiAgICAgIHByb2ZpbGVfcGljdHVyZV91cmwgPSBnZW5lcmF0ZUF2YXRhcihmaXJzdF9uYW1lKTtcbiAgICB9XG4gICAgY29uc3QgdXNlckluZm86IFVzZXJUeXBlID0ge1xuICAgICAgZW1haWwsXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0X25hbWUsXG4gICAgICBsYXN0TmFtZTogbGFzdF9uYW1lLFxuICAgICAgaWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGltYWdlOiBwcm9maWxlX3BpY3R1cmVfdXJsLFxuICAgICAgcGhvbmVOdW1iZXI6IHBob25lX251bWJlcixcbiAgICAgIHRvdGFsUmV3YXJkczogdG90YWxfcmV3YXJkcyxcbiAgICAgIGtleTogJycsXG4gICAgfTtcblxuICAgIHJldHVybiB1c2VySW5mbztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luVXNlciA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFsczogVXNlckNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoJ2xvZ2luX2FwaScsIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBnZXRVc2VySW5mbyhkYXRhLmFjY2Vzc190b2tlbik7XG4gICAgICAgIGNvbnN0IHBheWxvYWQ6IFVzZXJUeXBlID0ge1xuICAgICAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgICAgIHRvdGFsUmV3YXJkczogdXNlckluZm8udG90YWxSZXdhcmRzID8/IDAsXG4gICAgICAgICAga2V5OiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRVc2VyKHsgdXNlcjogcGF5bG9hZCwgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH0pO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShQQVRIUy5IT01FKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnV2VsY29tZSB0byBHLURhdGEgTGFicycpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHRvYXN0LmVycm9yKGUucmVzcG9uc2U/LmRhdGEuZXJyb3IpO1xuICAgICAgICBlbHNlIHRvYXN0LmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyAnKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2V0SXNMb2FkaW5nLCBzZXRVc2VyLCByb3V0ZXIsIGdldFVzZXJJbmZvXSxcbiAgKTtcblxuICBjb25zdCB1cGRhdGVVc2VyID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHBheWxvYWQ6IFVwZGF0ZVVzZXJQYXlsb2FkVHlwZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXlsb2FkKSkge1xuICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wYXRjaCgnYXBpL3VzZXJfcHJvZmlsZS8xLycsIGZvcm1kYXRhKTtcbiAgICAgICAgbGV0IHsgcHJvZmlsZV9waWN0dXJlX3VybCB9ID0gZGF0YS5kYXRhO1xuICAgICAgICBpZiAoIXByb2ZpbGVfcGljdHVyZV91cmwpIHtcbiAgICAgICAgICBwcm9maWxlX3BpY3R1cmVfdXJsID0gZ2VuZXJhdGVBdmF0YXIoZGF0YS5kYXRhLmZpcnN0X25hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VySW5mbzogVXNlclR5cGUgPSB7XG4gICAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmRhdGEuZmlyc3RfbmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTogZGF0YS5kYXRhLmxhc3RfbmFtZSxcbiAgICAgICAgICBwaG9uZU51bWJlcjogZGF0YS5kYXRhLnBob25lX251bWJlcixcbiAgICAgICAgICB0b3RhbFJld2FyZHM6IGRhdGEuZGF0YS50b3RhbF9yZXdhcmRzLFxuICAgICAgICAgIGVtYWlsOiBkYXRhLmRhdGEuZW1haWwsXG4gICAgICAgICAgaW1hZ2U6IHByb2ZpbGVfcGljdHVyZV91cmwsXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBpZDogZGF0YS5kYXRhLmlkLFxuICAgICAgICAgIGtleTogdXNlcj8ua2V5ISxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0VXNlcih7IHVzZXI6IHVwZGF0ZWRVc2VySW5mbywgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH0pO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdQZXJzb25hbCBpbmZvcm1hdGlvbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHRvYXN0LmVycm9yKGUucmVzcG9uc2U/LmRhdGEuZXJyb3IpO1xuICAgICAgICBlbHNlIHRvYXN0LmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyAnKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2V0SXNMb2FkaW5nLCBzZXRVc2VyLCB1c2VyXSxcbiAgKTtcblxuICBjb25zdCByZWdpc3RlclVzZXIgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoY3JlZGVudGlhbHM6IFNpZ251cENyZWRlbnRpYWxzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoJ3NpZ251cF9hcGknLCBjcmVkZW50aWFscyk7XG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgY3JlYXRlZCcpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShQQVRIUy5MT0dJTik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzZXRJc0xvYWRpbmcsIHJvdXRlcl0sXG4gICk7XG5cbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChwYXlsb2FkOiBSZXNldFBhc3N3b3JkRm9ybVNjaGVtYVR5cGUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdCgnYXBpL3VzZXIvcmVzZXRfcGFzc3dvcmRfZW1haWwnLCBwYXlsb2FkKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICByb3V0ZXIucHVzaChQQVRIUy5DT05GSVJNUEFTU1dPUkQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHRvYXN0LmVycm9yKGUucmVzcG9uc2U/LmRhdGEuZXJyb3IpO1xuICAgICAgICBlbHNlIHRvYXN0LmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyAnKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2V0SXNMb2FkaW5nLCByb3V0ZXJdLFxuICApO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAocGF5bG9hZDogQ29uZmlybVBhc3N3b3JkRm9ybVNjaGVtYVR5cGUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdCgnYXBpL3VzZXIvcmVzZXRfdG9rZW5fY29uZmlybScsIHBheWxvYWQpO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFBBVEhTLkxPR0lOKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBBeGlvc0Vycm9yKSB0b2FzdC5lcnJvcihlLnJlc3BvbnNlPy5kYXRhLmVycm9yKTtcbiAgICAgICAgZWxzZSB0b2FzdC5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcgJyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3NldElzTG9hZGluZywgcm91dGVyXSxcbiAgKTtcbiAgY29uc3QgbG9nb3V0VXNlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRVc2VyKHsgdXNlcjogdW5kZWZpbmVkLCBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pO1xuICAgIGRlbGV0ZUNoYXRzKCk7XG4gICAgdG9hc3Quc3VjY2VzcygnTG9nb3V0IFN1Y2Nlc3NmdWwuJyk7XG4gICAgcm91dGVyLnJlcGxhY2UoUEFUSFMuTE9HSU4pO1xuICB9LCBbc2V0VXNlciwgcm91dGVyLCBkZWxldGVDaGF0c10pO1xuXG4gIHJldHVybiB7XG4gICAgbG9naW5Vc2VyLFxuICAgIGxvZ291dFVzZXIsXG4gICAgaXNMb2FkaW5nLFxuICAgIHJlZ2lzdGVyVXNlcixcbiAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgdXNlcixcbiAgICB1cGRhdGVVc2VyLFxuICAgIHJlc2V0UGFzc3dvcmQsXG4gICAgY29uZmlybVBhc3N3b3JkLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJvdXRlciIsInRvYXN0IiwiQXhpb3NFcnJvciIsImFwaSIsInVzZUxvYWRpbmciLCJ1c2VVc2VyIiwiUEFUSFMiLCJnZW5lcmF0ZUF2YXRhciIsInVzZUNoYXRzIiwidXNlQXV0aCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwiZGVsZXRlQ2hhdHMiLCJyb3V0ZXIiLCJnZXRVc2VySW5mbyIsInRva2VuIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZW1haWwiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwidG90YWxfcmV3YXJkcyIsInVzZXJuYW1lIiwiaWQiLCJwcm9maWxlX3BpY3R1cmVfdXJsIiwidXNlckluZm8iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImltYWdlIiwicGhvbmVOdW1iZXIiLCJ0b3RhbFJld2FyZHMiLCJrZXkiLCJsb2dpblVzZXIiLCJjcmVkZW50aWFscyIsInBvc3QiLCJhY2Nlc3NfdG9rZW4iLCJwYXlsb2FkIiwicmVwbGFjZSIsIkhPTUUiLCJzdWNjZXNzIiwiZSIsImVycm9yIiwicmVzcG9uc2UiLCJ1cGRhdGVVc2VyIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImFwcGVuZCIsInBhdGNoIiwidXBkYXRlZFVzZXJJbmZvIiwicmVnaXN0ZXJVc2VyIiwiTE9HSU4iLCJyZXNldFBhc3N3b3JkIiwibWVzc2FnZSIsInB1c2giLCJDT05GSVJNUEFTU1dPUkQiLCJjb25maXJtUGFzc3dvcmQiLCJsb2dvdXRVc2VyIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useAuth.ts\n"));

/***/ })

});