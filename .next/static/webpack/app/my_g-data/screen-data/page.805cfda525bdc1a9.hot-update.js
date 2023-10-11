"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/my_g-data/screen-data/page",{

/***/ "(app-pages-browser)/./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: function() { return /* binding */ capitalize; },\n/* harmony export */   createChat: function() { return /* binding */ createChat; },\n/* harmony export */   createHistoryTableData: function() { return /* binding */ createHistoryTableData; },\n/* harmony export */   createPayload: function() { return /* binding */ createPayload; },\n/* harmony export */   createRecentChatHistory: function() { return /* binding */ createRecentChatHistory; },\n/* harmony export */   createRewardsState: function() { return /* binding */ createRewardsState; },\n/* harmony export */   createScreenData: function() { return /* binding */ createScreenData; },\n/* harmony export */   createTableColumns: function() { return /* binding */ createTableColumns; },\n/* harmony export */   createTableData: function() { return /* binding */ createTableData; },\n/* harmony export */   generateAvatar: function() { return /* binding */ generateAvatar; },\n/* harmony export */   groupMessagesByDate: function() { return /* binding */ groupMessagesByDate; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types */ \"(app-pages-browser)/./types/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */ \n\n\n\nconst addToGroup = (categorizedMessagesMap, groupName, message)=>{\n    if (!categorizedMessagesMap[groupName]) {\n        categorizedMessagesMap[groupName] = [];\n    }\n    categorizedMessagesMap[groupName].push(message);\n};\nconst groupMessagesByDate = (messages)=>{\n    if (messages.length === 0) return;\n    const CategorizedMessagesMap = {};\n    const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n    //* sort the messages in array\n    const sortedMessages = messages.sort((a, b)=>{\n        const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.date);\n        const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.date);\n        return dateB.diff(dateA);\n    });\n    //* group the sorted messages\n    sortedMessages.forEach((msg)=>{\n        const daysDiffernce = today.diff(msg.date, \"day\");\n        if (daysDiffernce === 0) {\n            addToGroup(CategorizedMessagesMap, \"Today\", msg);\n            return;\n        }\n        if (daysDiffernce === 1) {\n            addToGroup(CategorizedMessagesMap, \"Yesterday\", msg);\n            return;\n        }\n        if (daysDiffernce <= 7) {\n            addToGroup(CategorizedMessagesMap, \"Last 7 days\", msg);\n            return;\n        }\n        if (daysDiffernce <= 30) {\n            addToGroup(CategorizedMessagesMap, \"Last 30 days\", msg);\n        } else {\n            const month = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(msg.date).format(\"MMMM\");\n            addToGroup(CategorizedMessagesMap, month, msg);\n        }\n    });\n    // eslint-disable-next-line consistent-return\n    return CategorizedMessagesMap;\n};\n//* capatalize string\nconst capitalize = (arg)=>{\n    const text = arg.split(\" \").filter((item)=>item.length > 0);\n    let result = \"\";\n    if (text.length > 0) {\n        result = text.map((word)=>word[0].toUpperCase() + word.slice(1, word.length)).join(\" \");\n    }\n    return result;\n};\n//* create a payload for personal data post api\nconst createPayload = (personal_data)=>Object.entries(personal_data).map((param)=>{\n        let [key, value] = param;\n        return {\n            value: typeof value === \"object\" ? \"\".concat(value) : value.toString(),\n            personal_data_field: {\n                field_name: key.toUpperCase()\n            }\n        };\n    });\n//* create a single chat\nconst createChat = (arg)=>{\n    const { isBotResponse, isLoading, text } = arg;\n    const images = arg.images.map((img)=>img.url);\n    return {\n        messageID: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        isBotResponse,\n        isLoading,\n        content: {\n            text,\n            images\n        }\n    };\n};\n//* create table data\nconst createTableData = (arg)=>{\n    const { tableName, data } = arg;\n    const result = {};\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.PData) {\n        for (const d of data){\n            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.created_at).format(\"YYYY-MM-DD\");\n            const fieldName = d.personal_data_field.field_name.toLowerCase();\n            const { files } = d;\n            result[date] = {\n                ...result[date],\n                [fieldName]: fieldName === \"photos\" && files.length > 0 ? files : d.value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.GData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            for (const value of d.values){\n                const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format(\"YYYY-MM-DD\");\n                result[fieldName] = {\n                    ...result[fieldName],\n                    [date]: value.value\n                };\n            }\n            result[fieldName] = {\n                ...result[fieldName],\n                \"Consent Value\": d.consents_to_sell.toString().toUpperCase(),\n                Rewards: d.demanded_reward_value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.RData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                PDefinedValue: d.demanded_reward_value,\n                OtherCompValue: \"0.0\",\n                id: d.id\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.CData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                Definition: _constants__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTIONOFVARIABLES[d.field_name.toLowerCase()],\n                Companies: \"\",\n                Use: \"\",\n                id: d.id\n            };\n        }\n    }\n    return result;\n};\n// * create Columns for My G-Data\nconst createTableColumns = (data)=>{\n    let result = [];\n    let index = 0;\n    //* find index so that map will be run that many amount of time\n    for (const d of data){\n        const values = d.values.length;\n        if (values > data[index].values.length) {\n            index = data.indexOf(d);\n        }\n    }\n    const columns = data[index].values.map((item)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format(\"YYYY-MM-DD\")).reduce((prev, curr)=>{\n        if (prev.includes(curr)) return prev;\n        return prev.push(curr);\n    }, []);\n    result = [\n        \"Consent\",\n        ...columns,\n        \"Consent Value\",\n        \"Rewards\"\n    ];\n    const tableColumns = result.map((col)=>({\n            Header: col,\n            accessor: col\n        }));\n    return tableColumns;\n};\n//* rewards table\nconst createRewardsState = (data)=>{\n    const result = {};\n    for (const d of data){\n        result[d.id] = {\n            consents_to_sell: d.Consent === \"TRUE\",\n            demanded_reward_value: Number(d.PDefinedValue)\n        };\n    }\n    return result;\n};\n//* create history table data\nconst createHistoryTableData = (data)=>{\n    const result = data.map((chat)=>{\n        const { answer, images, chat_id, choice, question, timestamp } = chat;\n        return {\n            answer,\n            chatID: chat_id,\n            choice,\n            question,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            images: images != null ? JSON.parse(images.replace(/'/g, '\"')) : []\n        };\n    });\n    return result;\n};\n//* create screen data\nconst createScreenData = (arg)=>arg.map((screenData)=>{\n        const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;\n        return {\n            id,\n            screenRecording: screen_recording_url,\n            cameraRecording: camera_recording_url !== null && camera_recording_url !== void 0 ? camera_recording_url : \"\",\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            detail: data\n        };\n    });\n//* create default avatar image\nconst generateAvatar = (firstName)=>{\n    const initial = firstName[0].toUpperCase();\n    const canvas = document.createElement(\"canvas\");\n    const context = canvas.getContext(\"2d\");\n    canvas.width = 100;\n    canvas.height = 100;\n    if (context) {\n        // Draw background\n        context.fillStyle = \"#F3511C\";\n        context.fillRect(0, 0, canvas.width, canvas.height);\n        // Draw text\n        context.font = \"bold 50px DM-Sans\";\n        context.fillStyle = \"#ffffff\";\n        context.textAlign = \"center\";\n        context.textBaseline = \"middle\";\n        context.fillText(initial, canvas.width / 2, canvas.height / 2);\n    }\n    return canvas.toDataURL(\"image/png\");\n};\nconst createRecentChatHistory = (payload)=>payload.map((chats)=>{\n        const messages = [];\n        for (const chat of chats.history){\n            const response = createChat({\n                text: chat.answer,\n                images: chat.images != null ? JSON.parse(chat.images.replace(/'/g, '\"')).map((img)=>({\n                        url: img\n                    })) : [],\n                isBotResponse: true,\n                isLoading: false\n            });\n            const question = createChat({\n                text: chat.question,\n                images: [],\n                isBotResponse: false,\n                isLoading: false\n            });\n            messages.push(question);\n            messages.push(response);\n        }\n        return {\n            title: chats.name,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format(\"YYYY-MM-DD\"),\n            id: chats.id,\n            messages\n        };\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQge1xuICBUYWJsZU5hbWUsXG4gIFBlcnNvbmFsRGF0YVR5cGUsXG4gIENvbHVtbnMsXG4gIEdEYXRhVHlwZSxcbiAgQ2hhdEhpc3RvcnlSZXNwb25zZVR5cGUsXG4gIFNjcmVlbkRhdGFSZXNwb25zZVR5cGUsXG4gIFJlY2VudENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlLFxufSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IFRIaXN0b3J5LCBDaGF0LCBDaGF0SGlzdG9yeSwgVEdyb3VwZWRDaGF0SGlzdG9yeSB9IGZyb20gJ0Avc3RhdGUvY2hhdHMvdHlwZXMnO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhU2NoZW1hVHlwZSB9IGZyb20gJ0Avc2NoZW1hJztcbmltcG9ydCB7IERhdGEsIFNjcmVlbkRhdGFUeXBlLCBVcGRhdGVDb25zZW50UmV3YXJkVHlwZSB9IGZyb20gJ0Avc3RhdGUvbXlHRGF0YS90eXBlcyc7XG5pbXBvcnQgeyBERVNDUklQVElPTk9GVkFSSUFCTEVTIH0gZnJvbSAnQC9jb25zdGFudHMnO1xuXG5jb25zdCBhZGRUb0dyb3VwID0gKGNhdGVnb3JpemVkTWVzc2FnZXNNYXA6IFRHcm91cGVkQ2hhdEhpc3RvcnksIGdyb3VwTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBUSGlzdG9yeSkgPT4ge1xuICBpZiAoIWNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXSkge1xuICAgIGNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXSA9IFtdO1xuICB9XG4gIGNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXS5wdXNoKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwTWVzc2FnZXNCeURhdGUgPSAobWVzc2FnZXM6IFRIaXN0b3J5W10pID0+IHtcbiAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBDYXRlZ29yaXplZE1lc3NhZ2VzTWFwOiBUR3JvdXBlZENoYXRIaXN0b3J5ID0ge307XG4gIGNvbnN0IHRvZGF5ID0gZGF5anMoKTtcbiAgLy8qIHNvcnQgdGhlIG1lc3NhZ2VzIGluIGFycmF5XG4gIGNvbnN0IHNvcnRlZE1lc3NhZ2VzID0gbWVzc2FnZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGVBID0gZGF5anMoYS5kYXRlKTtcbiAgICBjb25zdCBkYXRlQiA9IGRheWpzKGIuZGF0ZSk7XG4gICAgcmV0dXJuIGRhdGVCLmRpZmYoZGF0ZUEpO1xuICB9KTtcbiAgLy8qIGdyb3VwIHRoZSBzb3J0ZWQgbWVzc2FnZXNcbiAgc29ydGVkTWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgY29uc3QgZGF5c0RpZmZlcm5jZSA9IHRvZGF5LmRpZmYobXNnLmRhdGUsICdkYXknKTtcbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA9PT0gMCkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnVG9kYXknLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA9PT0gMSkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnWWVzdGVyZGF5JywgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRheXNEaWZmZXJuY2UgPD0gNykge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnTGFzdCA3IGRheXMnLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA8PSAzMCkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnTGFzdCAzMCBkYXlzJywgbXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9udGggPSBkYXlqcyhtc2cuZGF0ZSkuZm9ybWF0KCdNTU1NJyk7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsIG1vbnRoLCBtc2cpO1xuICAgIH1cbiAgfSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICByZXR1cm4gQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcDtcbn07XG5cbi8vKiBjYXBhdGFsaXplIHN0cmluZ1xuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoYXJnOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGV4dCA9IGFyZy5zcGxpdCgnICcpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sZW5ndGggPiAwKTtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0ID0gdGV4dC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSwgd29yZC5sZW5ndGgpKS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBhIHBheWxvYWQgZm9yIHBlcnNvbmFsIGRhdGEgcG9zdCBhcGlcbmV4cG9ydCBjb25zdCBjcmVhdGVQYXlsb2FkID0gKHBlcnNvbmFsX2RhdGE6IFBlcnNvbmFsRGF0YVNjaGVtYVR5cGUpID0+XG4gIE9iamVjdC5lbnRyaWVzKHBlcnNvbmFsX2RhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgIHZhbHVlOiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gYCR7dmFsdWV9YCA6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgcGVyc29uYWxfZGF0YV9maWVsZDoge1xuICAgICAgZmllbGRfbmFtZToga2V5LnRvVXBwZXJDYXNlKCksXG4gICAgfSxcbiAgfSkpO1xuXG4vLyogY3JlYXRlIGEgc2luZ2xlIGNoYXRcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGF0ID0gKGFyZzoge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGltYWdlczogeyB1cmw6IHN0cmluZyB9W107XG4gIGlzQm90UmVzcG9uc2U6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgeyBpc0JvdFJlc3BvbnNlLCBpc0xvYWRpbmcsIHRleHQgfSA9IGFyZztcbiAgY29uc3QgaW1hZ2VzID0gYXJnLmltYWdlcy5tYXAoKGltZykgPT4gaW1nLnVybCk7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlSUQ6IHV1aWR2NCgpLFxuICAgIGlzQm90UmVzcG9uc2UsXG4gICAgaXNMb2FkaW5nLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHRleHQsXG4gICAgICBpbWFnZXMsXG4gICAgfSxcbiAgfSBhcyBDaGF0O1xufTtcblxuLy8qIGNyZWF0ZSB0YWJsZSBkYXRhXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZURhdGEgPSAoYXJnOiB7IHRhYmxlTmFtZTogc3RyaW5nOyBkYXRhOiBQZXJzb25hbERhdGFUeXBlW10gfCBhbnkgfSkgPT4ge1xuICBjb25zdCB7IHRhYmxlTmFtZSwgZGF0YSB9ID0gYXJnO1xuICBjb25zdCByZXN1bHQ6IERhdGEgPSB7fTtcbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLlBEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXlqcyhkLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgY29uc3QgZmllbGROYW1lID0gZC5wZXJzb25hbF9kYXRhX2ZpZWxkLmZpZWxkX25hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IGQ7XG4gICAgICByZXN1bHRbZGF0ZV0gPSB7XG4gICAgICAgIC4uLnJlc3VsdFtkYXRlXSxcbiAgICAgICAgW2ZpZWxkTmFtZV06IGZpZWxkTmFtZSA9PT0gJ3Bob3RvcycgJiYgZmlsZXMubGVuZ3RoID4gMCA/IGZpbGVzIDogZC52YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5HRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjYXBpdGFsaXplKGQuZmllbGRfbmFtZS5yZXBsYWNlQWxsKCdfJywgJyAnKSk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGQudmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXlqcyh2YWx1ZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgICAgW2RhdGVdOiB2YWx1ZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZmllbGROYW1lXSxcbiAgICAgICAgJ0NvbnNlbnQgVmFsdWUnOiBkLmNvbnNlbnRzX3RvX3NlbGwudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBSZXdhcmRzOiBkLmRlbWFuZGVkX3Jld2FyZF92YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5SRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjYXBpdGFsaXplKGQuZmllbGRfbmFtZS5yZXBsYWNlQWxsKCdfJywgJyAnKSk7XG4gICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgIENvbnNlbnQ6IGQuY29uc2VudHNfdG9fc2VsbC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIFBEZWZpbmVkVmFsdWU6IGQuZGVtYW5kZWRfcmV3YXJkX3ZhbHVlLFxuICAgICAgICBPdGhlckNvbXBWYWx1ZTogJzAuMCcsXG4gICAgICAgIGlkOiBkLmlkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLkNEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNhcGl0YWxpemUoZC5maWVsZF9uYW1lLnJlcGxhY2VBbGwoJ18nLCAnICcpKTtcbiAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZmllbGROYW1lXSxcbiAgICAgICAgQ29uc2VudDogZC5jb25zZW50c190b19zZWxsLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgRGVmaW5pdGlvbjogREVTQ1JJUFRJT05PRlZBUklBQkxFU1tkLmZpZWxkX25hbWUudG9Mb3dlckNhc2UoKV0sXG4gICAgICAgIENvbXBhbmllczogJycsXG4gICAgICAgIFVzZTogJycsXG4gICAgICAgIGlkOiBkLmlkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vICogY3JlYXRlIENvbHVtbnMgZm9yIE15IEctRGF0YVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhYmxlQ29sdW1ucyA9IChkYXRhOiBHRGF0YVR5cGVbXSkgPT4ge1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuICAvLyogZmluZCBpbmRleCBzbyB0aGF0IG1hcCB3aWxsIGJlIHJ1biB0aGF0IG1hbnkgYW1vdW50IG9mIHRpbWVcbiAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkLnZhbHVlcy5sZW5ndGg7XG4gICAgaWYgKHZhbHVlcyA+IGRhdGFbaW5kZXhdLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gZGF0YS5pbmRleE9mKGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2x1bW5zOiBzdHJpbmdbXSA9IGRhdGFbaW5kZXhdLnZhbHVlc1xuICAgIC5tYXAoKGl0ZW0pID0+IGRheWpzKGl0ZW0uY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREJykpXG4gICAgLnJlZHVjZSgocHJldjogc3RyaW5nW10sIGN1cnI6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByZXYuaW5jbHVkZXMoY3VycikpIHJldHVybiBwcmV2O1xuICAgICAgcmV0dXJuIHByZXYucHVzaChjdXJyKTtcbiAgICB9LCBbXSk7XG5cbiAgcmVzdWx0ID0gWydDb25zZW50JywgLi4uY29sdW1ucywgJ0NvbnNlbnQgVmFsdWUnLCAnUmV3YXJkcyddO1xuICBjb25zdCB0YWJsZUNvbHVtbnM6IENvbHVtbjxDb2x1bW5zPltdID0gcmVzdWx0Lm1hcCgoY29sKSA9PiAoe1xuICAgIEhlYWRlcjogY29sLFxuICAgIGFjY2Vzc29yOiBjb2wgYXMga2V5b2YgQ29sdW1ucyxcbiAgfSkpO1xuICByZXR1cm4gdGFibGVDb2x1bW5zO1xufTtcblxuLy8qIHJld2FyZHMgdGFibGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXdhcmRzU3RhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gIGNvbnN0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBVcGRhdGVDb25zZW50UmV3YXJkVHlwZSB9ID0ge307XG4gIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgcmVzdWx0W2QuaWRdID0ge1xuICAgICAgY29uc2VudHNfdG9fc2VsbDogZC5Db25zZW50ID09PSAnVFJVRScsXG4gICAgICBkZW1hbmRlZF9yZXdhcmRfdmFsdWU6IE51bWJlcihkLlBEZWZpbmVkVmFsdWUpLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vKiBjcmVhdGUgaGlzdG9yeSB0YWJsZSBkYXRhXG5leHBvcnQgY29uc3QgY3JlYXRlSGlzdG9yeVRhYmxlRGF0YSA9IChkYXRhOiBDaGF0SGlzdG9yeVJlc3BvbnNlVHlwZVtdKSA9PiB7XG4gIGNvbnN0IHJlc3VsdDogQ2hhdEhpc3RvcnlbXSA9IGRhdGEubWFwKChjaGF0KSA9PiB7XG4gICAgY29uc3QgeyBhbnN3ZXIsIGltYWdlcywgY2hhdF9pZCwgY2hvaWNlLCBxdWVzdGlvbiwgdGltZXN0YW1wIH0gPSBjaGF0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuc3dlcixcbiAgICAgIGNoYXRJRDogY2hhdF9pZCxcbiAgICAgIGNob2ljZSxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgZGF0ZTogZGF5anModGltZXN0YW1wKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGltYWdlczogaW1hZ2VzICE9IG51bGwgPyBKU09OLnBhcnNlKGltYWdlcy5yZXBsYWNlKC8nL2csICdcIicpKSA6IFtdLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBzY3JlZW4gZGF0YVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjcmVlbkRhdGEgPSAoYXJnOiBTY3JlZW5EYXRhUmVzcG9uc2VUeXBlW10pOiBTY3JlZW5EYXRhVHlwZVtdID0+XG4gIGFyZy5tYXAoKHNjcmVlbkRhdGEpID0+IHtcbiAgICBjb25zdCB7IGlkLCBzY3JlZW5fcmVjb3JkaW5nX3VybCwgY2FtZXJhX3JlY29yZGluZ191cmwsIHRpbWVzdGFtcCwgZGF0YSB9ID0gc2NyZWVuRGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBzY3JlZW5SZWNvcmRpbmc6IHNjcmVlbl9yZWNvcmRpbmdfdXJsLFxuICAgICAgY2FtZXJhUmVjb3JkaW5nOiBjYW1lcmFfcmVjb3JkaW5nX3VybCA/PyAnJyxcbiAgICAgIGRhdGU6IGRheWpzKHRpbWVzdGFtcCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBkZXRhaWw6IGRhdGEsXG4gICAgfTtcbiAgfSk7XG5cbi8vKiBjcmVhdGUgZGVmYXVsdCBhdmF0YXIgaW1hZ2VcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQXZhdGFyID0gKGZpcnN0TmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGluaXRpYWwgPSBmaXJzdE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjYW52YXMud2lkdGggPSAxMDA7XG4gIGNhbnZhcy5oZWlnaHQgPSAxMDA7XG4gIGlmIChjb250ZXh0KSB7XG4gICAgLy8gRHJhdyBiYWNrZ3JvdW5kXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI0YzNTExQyc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gRHJhdyB0ZXh0XG4gICAgY29udGV4dC5mb250ID0gJ2JvbGQgNTBweCBETS1TYW5zJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY29udGV4dC5maWxsVGV4dChpbml0aWFsLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gIH1cbiAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlY2VudENoYXRIaXN0b3J5ID0gKHBheWxvYWQ6IFJlY2VudENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlW10pID0+XG4gIHBheWxvYWQubWFwKChjaGF0cykgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgZm9yIChjb25zdCBjaGF0IG9mIGNoYXRzLmhpc3RvcnkpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gY3JlYXRlQ2hhdCh7XG4gICAgICAgIHRleHQ6IGNoYXQuYW5zd2VyLFxuICAgICAgICBpbWFnZXM6XG4gICAgICAgICAgY2hhdC5pbWFnZXMgIT0gbnVsbCA/IEpTT04ucGFyc2UoY2hhdC5pbWFnZXMucmVwbGFjZSgvJy9nLCAnXCInKSkubWFwKChpbWc6IHN0cmluZykgPT4gKHsgdXJsOiBpbWcgfSkpIDogW10sXG4gICAgICAgIGlzQm90UmVzcG9uc2U6IHRydWUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0gY3JlYXRlQ2hhdCh7XG4gICAgICAgIHRleHQ6IGNoYXQucXVlc3Rpb24sXG4gICAgICAgIGltYWdlczogW10sXG4gICAgICAgIGlzQm90UmVzcG9uc2U6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHF1ZXN0aW9uKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogY2hhdHMubmFtZSxcbiAgICAgIGRhdGU6IGRheWpzKGNoYXRzLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgaWQ6IGNoYXRzLmlkLFxuICAgICAgbWVzc2FnZXMsXG4gICAgfSBhcyBUSGlzdG9yeTtcbiAgfSk7XG4iXSwibmFtZXMiOlsiZGF5anMiLCJ2NCIsInV1aWR2NCIsIlRhYmxlTmFtZSIsIkRFU0NSSVBUSU9OT0ZWQVJJQUJMRVMiLCJhZGRUb0dyb3VwIiwiY2F0ZWdvcml6ZWRNZXNzYWdlc01hcCIsImdyb3VwTmFtZSIsIm1lc3NhZ2UiLCJwdXNoIiwiZ3JvdXBNZXNzYWdlc0J5RGF0ZSIsIm1lc3NhZ2VzIiwibGVuZ3RoIiwiQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCIsInRvZGF5Iiwic29ydGVkTWVzc2FnZXMiLCJzb3J0IiwiYSIsImIiLCJkYXRlQSIsImRhdGUiLCJkYXRlQiIsImRpZmYiLCJmb3JFYWNoIiwibXNnIiwiZGF5c0RpZmZlcm5jZSIsIm1vbnRoIiwiZm9ybWF0IiwiY2FwaXRhbGl6ZSIsImFyZyIsInRleHQiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJyZXN1bHQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJjcmVhdGVQYXlsb2FkIiwicGVyc29uYWxfZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicGVyc29uYWxfZGF0YV9maWVsZCIsImZpZWxkX25hbWUiLCJjcmVhdGVDaGF0IiwiaXNCb3RSZXNwb25zZSIsImlzTG9hZGluZyIsImltYWdlcyIsImltZyIsInVybCIsIm1lc3NhZ2VJRCIsImNvbnRlbnQiLCJjcmVhdGVUYWJsZURhdGEiLCJ0YWJsZU5hbWUiLCJkYXRhIiwiUERhdGEiLCJkIiwiY3JlYXRlZF9hdCIsImZpZWxkTmFtZSIsInRvTG93ZXJDYXNlIiwiZmlsZXMiLCJHRGF0YSIsInJlcGxhY2VBbGwiLCJ2YWx1ZXMiLCJjb25zZW50c190b19zZWxsIiwiUmV3YXJkcyIsImRlbWFuZGVkX3Jld2FyZF92YWx1ZSIsIlJEYXRhIiwiQ29uc2VudCIsIlBEZWZpbmVkVmFsdWUiLCJPdGhlckNvbXBWYWx1ZSIsImlkIiwiQ0RhdGEiLCJEZWZpbml0aW9uIiwiQ29tcGFuaWVzIiwiVXNlIiwiY3JlYXRlVGFibGVDb2x1bW5zIiwiaW5kZXgiLCJpbmRleE9mIiwiY29sdW1ucyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiaW5jbHVkZXMiLCJ0YWJsZUNvbHVtbnMiLCJjb2wiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImNyZWF0ZVJld2FyZHNTdGF0ZSIsIk51bWJlciIsImNyZWF0ZUhpc3RvcnlUYWJsZURhdGEiLCJjaGF0IiwiYW5zd2VyIiwiY2hhdF9pZCIsImNob2ljZSIsInF1ZXN0aW9uIiwidGltZXN0YW1wIiwiY2hhdElEIiwiSlNPTiIsInBhcnNlIiwicmVwbGFjZSIsImNyZWF0ZVNjcmVlbkRhdGEiLCJzY3JlZW5EYXRhIiwic2NyZWVuX3JlY29yZGluZ191cmwiLCJjYW1lcmFfcmVjb3JkaW5nX3VybCIsInNjcmVlblJlY29yZGluZyIsImNhbWVyYVJlY29yZGluZyIsImRldGFpbCIsImdlbmVyYXRlQXZhdGFyIiwiZmlyc3ROYW1lIiwiaW5pdGlhbCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRvRGF0YVVSTCIsImNyZWF0ZVJlY2VudENoYXRIaXN0b3J5IiwicGF5bG9hZCIsImNoYXRzIiwiaGlzdG9yeSIsInJlc3BvbnNlIiwidGl0bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/index.ts\n"));

/***/ })

});