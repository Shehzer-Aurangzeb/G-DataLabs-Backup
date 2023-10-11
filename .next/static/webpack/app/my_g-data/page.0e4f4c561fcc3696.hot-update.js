"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/my_g-data/page",{

/***/ "(app-pages-browser)/./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: function() { return /* binding */ capitalize; },\n/* harmony export */   createChat: function() { return /* binding */ createChat; },\n/* harmony export */   createHistoryTableData: function() { return /* binding */ createHistoryTableData; },\n/* harmony export */   createPayload: function() { return /* binding */ createPayload; },\n/* harmony export */   createRecentChatHistory: function() { return /* binding */ createRecentChatHistory; },\n/* harmony export */   createRewardsState: function() { return /* binding */ createRewardsState; },\n/* harmony export */   createScreenData: function() { return /* binding */ createScreenData; },\n/* harmony export */   createTableColumns: function() { return /* binding */ createTableColumns; },\n/* harmony export */   createTableData: function() { return /* binding */ createTableData; },\n/* harmony export */   generateAvatar: function() { return /* binding */ generateAvatar; },\n/* harmony export */   groupMessagesByDate: function() { return /* binding */ groupMessagesByDate; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types */ \"(app-pages-browser)/./types/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */ \n\n\n\nconst addToGroup = (categorizedMessagesMap, groupName, message)=>{\n    if (!categorizedMessagesMap[groupName]) {\n        categorizedMessagesMap[groupName] = [];\n    }\n    categorizedMessagesMap[groupName].push(message);\n};\nconst groupMessagesByDate = (messages)=>{\n    if (messages.length === 0) return;\n    const CategorizedMessagesMap = {};\n    const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n    //* sort the messages in array\n    const sortedMessages = messages.sort((a, b)=>{\n        const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.date);\n        const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.date);\n        return dateB.diff(dateA);\n    });\n    //* group the sorted messages\n    sortedMessages.forEach((msg)=>{\n        const daysDiffernce = today.diff(msg.date, \"day\");\n        if (daysDiffernce === 0) {\n            addToGroup(CategorizedMessagesMap, \"Today\", msg);\n            return;\n        }\n        if (daysDiffernce === 1) {\n            addToGroup(CategorizedMessagesMap, \"Yesterday\", msg);\n            return;\n        }\n        if (daysDiffernce <= 7) {\n            addToGroup(CategorizedMessagesMap, \"Last 7 days\", msg);\n            return;\n        }\n        if (daysDiffernce <= 30) {\n            addToGroup(CategorizedMessagesMap, \"Last 30 days\", msg);\n        } else {\n            const month = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(msg.date).format(\"MMMM\");\n            addToGroup(CategorizedMessagesMap, month, msg);\n        }\n    });\n    // eslint-disable-next-line consistent-return\n    return CategorizedMessagesMap;\n};\n//* capatalize string\nconst capitalize = (arg)=>{\n    const text = arg.split(\" \").filter((item)=>item.length > 0);\n    let result = \"\";\n    if (text.length > 0) {\n        result = text.map((word)=>word[0].toUpperCase() + word.slice(1, word.length)).join(\" \");\n    }\n    return result;\n};\n//* create a payload for personal data post api\nconst createPayload = (personal_data)=>Object.entries(personal_data).map((param)=>{\n        let [key, value] = param;\n        return {\n            value: typeof value === \"object\" ? \"\".concat(value) : value.toString(),\n            personal_data_field: {\n                field_name: key.toUpperCase()\n            }\n        };\n    });\n//* create a single chat\nconst createChat = (arg)=>{\n    const { isBotResponse, isLoading, text } = arg;\n    const images = arg.images.map((img)=>img.url);\n    return {\n        messageID: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        isBotResponse,\n        isLoading,\n        content: {\n            text,\n            images\n        }\n    };\n};\n//* create table data\nconst createTableData = (arg)=>{\n    const { tableName, data } = arg;\n    const result = {};\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.PData) {\n        for (const d of data){\n            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.created_at).format(\"YYYY-MM-DD\");\n            const fieldName = d.personal_data_field.field_name.toLowerCase();\n            const { files } = d;\n            result[date] = {\n                ...result[date],\n                [fieldName]: fieldName === \"photos\" && files.length > 0 ? files : d.value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.GData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            for (const value of d.values){\n                const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format(\"YYYY-MM-DD\");\n                result[fieldName] = {\n                    ...result[fieldName],\n                    [date]: value.value\n                };\n            }\n            result[fieldName] = {\n                ...result[fieldName],\n                \"Consent Value\": d.consents_to_sell.toString().toUpperCase(),\n                Rewards: d.demanded_reward_value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.RData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                PDefinedValue: d.demanded_reward_value,\n                OtherCompValue: \"0.0\",\n                id: d.id\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.CData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                Definition: _constants__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTIONOFVARIABLES[d.field_name.toLowerCase()],\n                Companies: \"\",\n                Use: \"\",\n                id: d.id\n            };\n        }\n    }\n    return result;\n};\n// * create Columns for My G-Data\nconst createTableColumns = (data)=>{\n    let result = [];\n    let index = 0;\n    //* find index so that map will be run that many amount of time\n    for (const d of data){\n        const values = d.values.length;\n        if (values > data[index].values.length) {\n            index = data.indexOf(d);\n        }\n    }\n    const columns = data[index].values.map((item)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format(\"YYYY-MM-DD\")).reduce((previousValue, curr)=>{\n        if (previousValue.includes(curr)) return previousValue;\n        return previousValue.push(curr);\n    }, []);\n    result = [\n        \"Consent\",\n        ...columns,\n        \"Consent Value\",\n        \"Rewards\"\n    ];\n    const tableColumns = result.map((col)=>({\n            Header: col,\n            accessor: col\n        }));\n    return tableColumns;\n};\n//* rewards table\nconst createRewardsState = (data)=>{\n    const result = {};\n    for (const d of data){\n        result[d.id] = {\n            consents_to_sell: d.Consent === \"TRUE\",\n            demanded_reward_value: Number(d.PDefinedValue)\n        };\n    }\n    return result;\n};\n//* create history table data\nconst createHistoryTableData = (data)=>{\n    const result = data.map((chat)=>{\n        const { answer, images, chat_id, choice, question, timestamp } = chat;\n        return {\n            answer,\n            chatID: chat_id,\n            choice,\n            question,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            images: images != null ? JSON.parse(images.replace(/'/g, '\"')) : []\n        };\n    });\n    return result;\n};\n//* create screen data\nconst createScreenData = (arg)=>arg.map((screenData)=>{\n        const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;\n        return {\n            id,\n            screenRecording: screen_recording_url,\n            cameraRecording: camera_recording_url !== null && camera_recording_url !== void 0 ? camera_recording_url : \"\",\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            detail: data\n        };\n    });\n//* create default avatar image\nconst generateAvatar = (firstName)=>{\n    const initial = firstName[0].toUpperCase();\n    const canvas = document.createElement(\"canvas\");\n    const context = canvas.getContext(\"2d\");\n    canvas.width = 100;\n    canvas.height = 100;\n    if (context) {\n        // Draw background\n        context.fillStyle = \"#F3511C\";\n        context.fillRect(0, 0, canvas.width, canvas.height);\n        // Draw text\n        context.font = \"bold 50px DM-Sans\";\n        context.fillStyle = \"#ffffff\";\n        context.textAlign = \"center\";\n        context.textBaseline = \"middle\";\n        context.fillText(initial, canvas.width / 2, canvas.height / 2);\n    }\n    return canvas.toDataURL(\"image/png\");\n};\nconst createRecentChatHistory = (payload)=>payload.map((chats)=>{\n        const messages = [];\n        for (const chat of chats.history){\n            const response = createChat({\n                text: chat.answer,\n                images: chat.images != null ? JSON.parse(chat.images.replace(/'/g, '\"')).map((img)=>({\n                        url: img\n                    })) : [],\n                isBotResponse: true,\n                isLoading: false\n            });\n            const question = createChat({\n                text: chat.question,\n                images: [],\n                isBotResponse: false,\n                isLoading: false\n            });\n            messages.push(question);\n            messages.push(response);\n        }\n        return {\n            title: chats.name,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format(\"YYYY-MM-DD\"),\n            id: chats.id,\n            messages\n        };\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7XG4gIFRhYmxlTmFtZSxcbiAgUGVyc29uYWxEYXRhVHlwZSxcbiAgQ29sdW1ucyxcbiAgR0RhdGFUeXBlLFxuICBDaGF0SGlzdG9yeVJlc3BvbnNlVHlwZSxcbiAgU2NyZWVuRGF0YVJlc3BvbnNlVHlwZSxcbiAgUmVjZW50Q2hhdEhpc3RvcnlSZXNwb25zZVR5cGUsXG59IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgVEhpc3RvcnksIENoYXQsIENoYXRIaXN0b3J5LCBUR3JvdXBlZENoYXRIaXN0b3J5IH0gZnJvbSAnQC9zdGF0ZS9jaGF0cy90eXBlcyc7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFTY2hlbWFUeXBlIH0gZnJvbSAnQC9zY2hlbWEnO1xuaW1wb3J0IHsgRGF0YSwgU2NyZWVuRGF0YVR5cGUsIFVwZGF0ZUNvbnNlbnRSZXdhcmRUeXBlIH0gZnJvbSAnQC9zdGF0ZS9teUdEYXRhL3R5cGVzJztcbmltcG9ydCB7IERFU0NSSVBUSU9OT0ZWQVJJQUJMRVMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5cbmNvbnN0IGFkZFRvR3JvdXAgPSAoY2F0ZWdvcml6ZWRNZXNzYWdlc01hcDogVEdyb3VwZWRDaGF0SGlzdG9yeSwgZ3JvdXBOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IFRIaXN0b3J5KSA9PiB7XG4gIGlmICghY2F0ZWdvcml6ZWRNZXNzYWdlc01hcFtncm91cE5hbWVdKSB7XG4gICAgY2F0ZWdvcml6ZWRNZXNzYWdlc01hcFtncm91cE5hbWVdID0gW107XG4gIH1cbiAgY2F0ZWdvcml6ZWRNZXNzYWdlc01hcFtncm91cE5hbWVdLnB1c2gobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ3JvdXBNZXNzYWdlc0J5RGF0ZSA9IChtZXNzYWdlczogVEhpc3RvcnlbXSkgPT4ge1xuICBpZiAobWVzc2FnZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IENhdGVnb3JpemVkTWVzc2FnZXNNYXA6IFRHcm91cGVkQ2hhdEhpc3RvcnkgPSB7fTtcbiAgY29uc3QgdG9kYXkgPSBkYXlqcygpO1xuICAvLyogc29ydCB0aGUgbWVzc2FnZXMgaW4gYXJyYXlcbiAgY29uc3Qgc29ydGVkTWVzc2FnZXMgPSBtZXNzYWdlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgZGF0ZUEgPSBkYXlqcyhhLmRhdGUpO1xuICAgIGNvbnN0IGRhdGVCID0gZGF5anMoYi5kYXRlKTtcbiAgICByZXR1cm4gZGF0ZUIuZGlmZihkYXRlQSk7XG4gIH0pO1xuICAvLyogZ3JvdXAgdGhlIHNvcnRlZCBtZXNzYWdlc1xuICBzb3J0ZWRNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICBjb25zdCBkYXlzRGlmZmVybmNlID0gdG9kYXkuZGlmZihtc2cuZGF0ZSwgJ2RheScpO1xuICAgIGlmIChkYXlzRGlmZmVybmNlID09PSAwKSB7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsICdUb2RheScsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXlzRGlmZmVybmNlID09PSAxKSB7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsICdZZXN0ZXJkYXknLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA8PSA3KSB7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsICdMYXN0IDcgZGF5cycsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXlzRGlmZmVybmNlIDw9IDMwKSB7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsICdMYXN0IDMwIGRheXMnLCBtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtb250aCA9IGRheWpzKG1zZy5kYXRlKS5mb3JtYXQoJ01NTU0nKTtcbiAgICAgIGFkZFRvR3JvdXAoQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCwgbW9udGgsIG1zZyk7XG4gICAgfVxuICB9KTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHJldHVybiBDYXRlZ29yaXplZE1lc3NhZ2VzTWFwO1xufTtcblxuLy8qIGNhcGF0YWxpemUgc3RyaW5nXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChhcmc6IHN0cmluZykgPT4ge1xuICBjb25zdCB0ZXh0ID0gYXJnLnNwbGl0KCcgJykuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmxlbmd0aCA+IDApO1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICByZXN1bHQgPSB0ZXh0Lm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxLCB3b3JkLmxlbmd0aCkpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyogY3JlYXRlIGEgcGF5bG9hZCBmb3IgcGVyc29uYWwgZGF0YSBwb3N0IGFwaVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBheWxvYWQgPSAocGVyc29uYWxfZGF0YTogUGVyc29uYWxEYXRhU2NoZW1hVHlwZSkgPT5cbiAgT2JqZWN0LmVudHJpZXMocGVyc29uYWxfZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgdmFsdWU6IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBgJHt2YWx1ZX1gIDogdmFsdWUudG9TdHJpbmcoKSxcbiAgICBwZXJzb25hbF9kYXRhX2ZpZWxkOiB7XG4gICAgICBmaWVsZF9uYW1lOiBrZXkudG9VcHBlckNhc2UoKSxcbiAgICB9LFxuICB9KSk7XG5cbi8vKiBjcmVhdGUgYSBzaW5nbGUgY2hhdFxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYXQgPSAoYXJnOiB7XG4gIHRleHQ6IHN0cmluZztcbiAgaW1hZ2VzOiB7IHVybDogc3RyaW5nIH1bXTtcbiAgaXNCb3RSZXNwb25zZTogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCB7IGlzQm90UmVzcG9uc2UsIGlzTG9hZGluZywgdGV4dCB9ID0gYXJnO1xuICBjb25zdCBpbWFnZXMgPSBhcmcuaW1hZ2VzLm1hcCgoaW1nKSA9PiBpbWcudXJsKTtcblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VJRDogdXVpZHY0KCksXG4gICAgaXNCb3RSZXNwb25zZSxcbiAgICBpc0xvYWRpbmcsXG4gICAgY29udGVudDoge1xuICAgICAgdGV4dCxcbiAgICAgIGltYWdlcyxcbiAgICB9LFxuICB9IGFzIENoYXQ7XG59O1xuXG4vLyogY3JlYXRlIHRhYmxlIGRhdGFcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhYmxlRGF0YSA9IChhcmc6IHsgdGFibGVOYW1lOiBzdHJpbmc7IGRhdGE6IFBlcnNvbmFsRGF0YVR5cGVbXSB8IGFueSB9KSA9PiB7XG4gIGNvbnN0IHsgdGFibGVOYW1lLCBkYXRhIH0gPSBhcmc7XG4gIGNvbnN0IHJlc3VsdDogRGF0YSA9IHt9O1xuICBpZiAodGFibGVOYW1lID09PSBUYWJsZU5hbWUuUERhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKGQuY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBkLnBlcnNvbmFsX2RhdGFfZmllbGQuZmllbGRfbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgeyBmaWxlcyB9ID0gZDtcbiAgICAgIHJlc3VsdFtkYXRlXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2RhdGVdLFxuICAgICAgICBbZmllbGROYW1lXTogZmllbGROYW1lID09PSAncGhvdG9zJyAmJiBmaWxlcy5sZW5ndGggPiAwID8gZmlsZXMgOiBkLnZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLkdEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNhcGl0YWxpemUoZC5maWVsZF9uYW1lLnJlcGxhY2VBbGwoJ18nLCAnICcpKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZC52YWx1ZXMpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKHZhbHVlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgICAuLi5yZXN1bHRbZmllbGROYW1lXSxcbiAgICAgICAgICBbZGF0ZV06IHZhbHVlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgIC4uLnJlc3VsdFtmaWVsZE5hbWVdLFxuICAgICAgICAnQ29uc2VudCBWYWx1ZSc6IGQuY29uc2VudHNfdG9fc2VsbC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIFJld2FyZHM6IGQuZGVtYW5kZWRfcmV3YXJkX3ZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLlJEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNhcGl0YWxpemUoZC5maWVsZF9uYW1lLnJlcGxhY2VBbGwoJ18nLCAnICcpKTtcbiAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZmllbGROYW1lXSxcbiAgICAgICAgQ29uc2VudDogZC5jb25zZW50c190b19zZWxsLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgUERlZmluZWRWYWx1ZTogZC5kZW1hbmRlZF9yZXdhcmRfdmFsdWUsXG4gICAgICAgIE90aGVyQ29tcFZhbHVlOiAnMC4wJyxcbiAgICAgICAgaWQ6IGQuaWQsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAodGFibGVOYW1lID09PSBUYWJsZU5hbWUuQ0RhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gY2FwaXRhbGl6ZShkLmZpZWxkX25hbWUucmVwbGFjZUFsbCgnXycsICcgJykpO1xuICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgIC4uLnJlc3VsdFtmaWVsZE5hbWVdLFxuICAgICAgICBDb25zZW50OiBkLmNvbnNlbnRzX3RvX3NlbGwudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBEZWZpbml0aW9uOiBERVNDUklQVElPTk9GVkFSSUFCTEVTW2QuZmllbGRfbmFtZS50b0xvd2VyQ2FzZSgpXSxcbiAgICAgICAgQ29tcGFuaWVzOiAnJyxcbiAgICAgICAgVXNlOiAnJyxcbiAgICAgICAgaWQ6IGQuaWQsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gKiBjcmVhdGUgQ29sdW1ucyBmb3IgTXkgRy1EYXRhXG5leHBvcnQgY29uc3QgY3JlYXRlVGFibGVDb2x1bW5zID0gKGRhdGE6IEdEYXRhVHlwZVtdKSA9PiB7XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGxldCBpbmRleCA9IDA7XG4gIC8vKiBmaW5kIGluZGV4IHNvIHRoYXQgbWFwIHdpbGwgYmUgcnVuIHRoYXQgbWFueSBhbW91bnQgb2YgdGltZVxuICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IGQudmFsdWVzLmxlbmd0aDtcbiAgICBpZiAodmFsdWVzID4gZGF0YVtpbmRleF0udmFsdWVzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSBkYXRhLmluZGV4T2YoZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvbHVtbnM6IHN0cmluZ1tdID0gZGF0YVtpbmRleF0udmFsdWVzXG4gICAgLm1hcCgoaXRlbSkgPT4gZGF5anMoaXRlbS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSlcbiAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyKSA9PiB7XG4gICAgICBpZiAocHJldmlvdXNWYWx1ZS5pbmNsdWRlcyhjdXJyKSkgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZS5wdXNoKGN1cnIpO1xuICAgIH0sIFtdKTtcblxuICByZXN1bHQgPSBbJ0NvbnNlbnQnLCAuLi5jb2x1bW5zLCAnQ29uc2VudCBWYWx1ZScsICdSZXdhcmRzJ107XG4gIGNvbnN0IHRhYmxlQ29sdW1uczogQ29sdW1uPENvbHVtbnM+W10gPSByZXN1bHQubWFwKChjb2wpID0+ICh7XG4gICAgSGVhZGVyOiBjb2wsXG4gICAgYWNjZXNzb3I6IGNvbCBhcyBrZXlvZiBDb2x1bW5zLFxuICB9KSk7XG4gIHJldHVybiB0YWJsZUNvbHVtbnM7XG59O1xuXG4vLyogcmV3YXJkcyB0YWJsZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJld2FyZHNTdGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzdWx0OiB7IFtrZXk6IHN0cmluZ106IFVwZGF0ZUNvbnNlbnRSZXdhcmRUeXBlIH0gPSB7fTtcbiAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICByZXN1bHRbZC5pZF0gPSB7XG4gICAgICBjb25zZW50c190b19zZWxsOiBkLkNvbnNlbnQgPT09ICdUUlVFJyxcbiAgICAgIGRlbWFuZGVkX3Jld2FyZF92YWx1ZTogTnVtYmVyKGQuUERlZmluZWRWYWx1ZSksXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBoaXN0b3J5IHRhYmxlIGRhdGFcbmV4cG9ydCBjb25zdCBjcmVhdGVIaXN0b3J5VGFibGVEYXRhID0gKGRhdGE6IENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlW10pID0+IHtcbiAgY29uc3QgcmVzdWx0OiBDaGF0SGlzdG9yeVtdID0gZGF0YS5tYXAoKGNoYXQpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciwgaW1hZ2VzLCBjaGF0X2lkLCBjaG9pY2UsIHF1ZXN0aW9uLCB0aW1lc3RhbXAgfSA9IGNoYXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYW5zd2VyLFxuICAgICAgY2hhdElEOiBjaGF0X2lkLFxuICAgICAgY2hvaWNlLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBkYXRlOiBkYXlqcyh0aW1lc3RhbXApLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgaW1hZ2VzOiBpbWFnZXMgIT0gbnVsbCA/IEpTT04ucGFyc2UoaW1hZ2VzLnJlcGxhY2UoLycvZywgJ1wiJykpIDogW10sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyogY3JlYXRlIHNjcmVlbiBkYXRhXG5leHBvcnQgY29uc3QgY3JlYXRlU2NyZWVuRGF0YSA9IChhcmc6IFNjcmVlbkRhdGFSZXNwb25zZVR5cGVbXSk6IFNjcmVlbkRhdGFUeXBlW10gPT5cbiAgYXJnLm1hcCgoc2NyZWVuRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHNjcmVlbl9yZWNvcmRpbmdfdXJsLCBjYW1lcmFfcmVjb3JkaW5nX3VybCwgdGltZXN0YW1wLCBkYXRhIH0gPSBzY3JlZW5EYXRhO1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIHNjcmVlblJlY29yZGluZzogc2NyZWVuX3JlY29yZGluZ191cmwsXG4gICAgICBjYW1lcmFSZWNvcmRpbmc6IGNhbWVyYV9yZWNvcmRpbmdfdXJsID8/ICcnLFxuICAgICAgZGF0ZTogZGF5anModGltZXN0YW1wKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGRldGFpbDogZGF0YSxcbiAgICB9O1xuICB9KTtcblxuLy8qIGNyZWF0ZSBkZWZhdWx0IGF2YXRhciBpbWFnZVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVBdmF0YXIgPSAoZmlyc3ROYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgaW5pdGlhbCA9IGZpcnN0TmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDEwMDtcbiAgY2FudmFzLmhlaWdodCA9IDEwMDtcbiAgaWYgKGNvbnRleHQpIHtcbiAgICAvLyBEcmF3IGJhY2tncm91bmRcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjRjM1MTFDJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBEcmF3IHRleHRcbiAgICBjb250ZXh0LmZvbnQgPSAnYm9sZCA1MHB4IERNLVNhbnMnO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KGluaXRpYWwsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgfVxuICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVjZW50Q2hhdEhpc3RvcnkgPSAocGF5bG9hZDogUmVjZW50Q2hhdEhpc3RvcnlSZXNwb25zZVR5cGVbXSkgPT5cbiAgcGF5bG9hZC5tYXAoKGNoYXRzKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoYXQgb2YgY2hhdHMuaGlzdG9yeSkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBjcmVhdGVDaGF0KHtcbiAgICAgICAgdGV4dDogY2hhdC5hbnN3ZXIsXG4gICAgICAgIGltYWdlczpcbiAgICAgICAgICBjaGF0LmltYWdlcyAhPSBudWxsID8gSlNPTi5wYXJzZShjaGF0LmltYWdlcy5yZXBsYWNlKC8nL2csICdcIicpKS5tYXAoKGltZzogc3RyaW5nKSA9PiAoeyB1cmw6IGltZyB9KSkgOiBbXSxcbiAgICAgICAgaXNCb3RSZXNwb25zZTogdHJ1ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSBjcmVhdGVDaGF0KHtcbiAgICAgICAgdGV4dDogY2hhdC5xdWVzdGlvbixcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgaXNCb3RSZXNwb25zZTogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIG1lc3NhZ2VzLnB1c2gocXVlc3Rpb24pO1xuICAgICAgbWVzc2FnZXMucHVzaChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBjaGF0cy5uYW1lLFxuICAgICAgZGF0ZTogZGF5anMoY2hhdHMuY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBpZDogY2hhdHMuaWQsXG4gICAgICBtZXNzYWdlcyxcbiAgICB9IGFzIFRIaXN0b3J5O1xuICB9KTtcbiJdLCJuYW1lcyI6WyJkYXlqcyIsInY0IiwidXVpZHY0IiwiVGFibGVOYW1lIiwiREVTQ1JJUFRJT05PRlZBUklBQkxFUyIsImFkZFRvR3JvdXAiLCJjYXRlZ29yaXplZE1lc3NhZ2VzTWFwIiwiZ3JvdXBOYW1lIiwibWVzc2FnZSIsInB1c2giLCJncm91cE1lc3NhZ2VzQnlEYXRlIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJDYXRlZ29yaXplZE1lc3NhZ2VzTWFwIiwidG9kYXkiLCJzb3J0ZWRNZXNzYWdlcyIsInNvcnQiLCJhIiwiYiIsImRhdGVBIiwiZGF0ZSIsImRhdGVCIiwiZGlmZiIsImZvckVhY2giLCJtc2ciLCJkYXlzRGlmZmVybmNlIiwibW9udGgiLCJmb3JtYXQiLCJjYXBpdGFsaXplIiwiYXJnIiwidGV4dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInJlc3VsdCIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImNyZWF0ZVBheWxvYWQiLCJwZXJzb25hbF9kYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJwZXJzb25hbF9kYXRhX2ZpZWxkIiwiZmllbGRfbmFtZSIsImNyZWF0ZUNoYXQiLCJpc0JvdFJlc3BvbnNlIiwiaXNMb2FkaW5nIiwiaW1hZ2VzIiwiaW1nIiwidXJsIiwibWVzc2FnZUlEIiwiY29udGVudCIsImNyZWF0ZVRhYmxlRGF0YSIsInRhYmxlTmFtZSIsImRhdGEiLCJQRGF0YSIsImQiLCJjcmVhdGVkX2F0IiwiZmllbGROYW1lIiwidG9Mb3dlckNhc2UiLCJmaWxlcyIsIkdEYXRhIiwicmVwbGFjZUFsbCIsInZhbHVlcyIsImNvbnNlbnRzX3RvX3NlbGwiLCJSZXdhcmRzIiwiZGVtYW5kZWRfcmV3YXJkX3ZhbHVlIiwiUkRhdGEiLCJDb25zZW50IiwiUERlZmluZWRWYWx1ZSIsIk90aGVyQ29tcFZhbHVlIiwiaWQiLCJDRGF0YSIsIkRlZmluaXRpb24iLCJDb21wYW5pZXMiLCJVc2UiLCJjcmVhdGVUYWJsZUNvbHVtbnMiLCJpbmRleCIsImluZGV4T2YiLCJjb2x1bW5zIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsImN1cnIiLCJpbmNsdWRlcyIsInRhYmxlQ29sdW1ucyIsImNvbCIsIkhlYWRlciIsImFjY2Vzc29yIiwiY3JlYXRlUmV3YXJkc1N0YXRlIiwiTnVtYmVyIiwiY3JlYXRlSGlzdG9yeVRhYmxlRGF0YSIsImNoYXQiLCJhbnN3ZXIiLCJjaGF0X2lkIiwiY2hvaWNlIiwicXVlc3Rpb24iLCJ0aW1lc3RhbXAiLCJjaGF0SUQiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwiY3JlYXRlU2NyZWVuRGF0YSIsInNjcmVlbkRhdGEiLCJzY3JlZW5fcmVjb3JkaW5nX3VybCIsImNhbWVyYV9yZWNvcmRpbmdfdXJsIiwic2NyZWVuUmVjb3JkaW5nIiwiY2FtZXJhUmVjb3JkaW5nIiwiZGV0YWlsIiwiZ2VuZXJhdGVBdmF0YXIiLCJmaXJzdE5hbWUiLCJpbml0aWFsIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9udCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwidG9EYXRhVVJMIiwiY3JlYXRlUmVjZW50Q2hhdEhpc3RvcnkiLCJwYXlsb2FkIiwiY2hhdHMiLCJoaXN0b3J5IiwicmVzcG9uc2UiLCJ0aXRsZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/index.ts\n"));

/***/ })

});