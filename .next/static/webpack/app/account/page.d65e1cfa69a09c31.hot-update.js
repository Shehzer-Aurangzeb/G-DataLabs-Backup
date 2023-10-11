"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/page",{

/***/ "(app-pages-browser)/./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: function() { return /* binding */ capitalize; },\n/* harmony export */   createChat: function() { return /* binding */ createChat; },\n/* harmony export */   createHistoryTableData: function() { return /* binding */ createHistoryTableData; },\n/* harmony export */   createPayload: function() { return /* binding */ createPayload; },\n/* harmony export */   createRecentChatHistory: function() { return /* binding */ createRecentChatHistory; },\n/* harmony export */   createRewardsState: function() { return /* binding */ createRewardsState; },\n/* harmony export */   createScreenData: function() { return /* binding */ createScreenData; },\n/* harmony export */   createTableColumns: function() { return /* binding */ createTableColumns; },\n/* harmony export */   createTableData: function() { return /* binding */ createTableData; },\n/* harmony export */   generateAvatar: function() { return /* binding */ generateAvatar; },\n/* harmony export */   groupMessagesByDate: function() { return /* binding */ groupMessagesByDate; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types */ \"(app-pages-browser)/./types/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */ \n\n\n\nconst addToGroup = (categorizedMessagesMap, groupName, message)=>{\n    if (!categorizedMessagesMap[groupName]) {\n        categorizedMessagesMap[groupName] = [];\n    }\n    categorizedMessagesMap[groupName].push(message);\n};\nconst groupMessagesByDate = (messages)=>{\n    if (messages.length === 0) return;\n    const CategorizedMessagesMap = {};\n    const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n    //* sort the messages in array\n    const sortedMessages = messages.sort((a, b)=>{\n        const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.date);\n        const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.date);\n        return dateB.diff(dateA);\n    });\n    //* group the sorted messages\n    sortedMessages.forEach((msg)=>{\n        const daysDiffernce = today.diff(msg.date, \"day\");\n        if (daysDiffernce === 0) {\n            addToGroup(CategorizedMessagesMap, \"Today\", msg);\n            return;\n        }\n        if (daysDiffernce === 1) {\n            addToGroup(CategorizedMessagesMap, \"Yesterday\", msg);\n            return;\n        }\n        if (daysDiffernce <= 7) {\n            addToGroup(CategorizedMessagesMap, \"Last 7 days\", msg);\n            return;\n        }\n        if (daysDiffernce <= 30) {\n            addToGroup(CategorizedMessagesMap, \"Last 30 days\", msg);\n        } else {\n            const month = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(msg.date).format(\"MMMM\");\n            addToGroup(CategorizedMessagesMap, month, msg);\n        }\n    });\n    // eslint-disable-next-line consistent-return\n    return CategorizedMessagesMap;\n};\n//* capatalize string\nconst capitalize = (arg)=>{\n    const text = arg.split(\" \").filter((item)=>item.length > 0);\n    let result = \"\";\n    if (text.length > 0) {\n        result = text.map((word)=>word[0].toUpperCase() + word.slice(1, word.length)).join(\" \");\n    }\n    return result;\n};\n//* create a payload for personal data post api\nconst createPayload = (personal_data)=>Object.entries(personal_data).map((param)=>{\n        let [key, value] = param;\n        return {\n            value: typeof value === \"object\" ? \"\".concat(value) : value.toString(),\n            personal_data_field: {\n                field_name: key.toUpperCase()\n            }\n        };\n    });\n//* create a single chat\nconst createChat = (arg)=>{\n    const { isBotResponse, isLoading, text } = arg;\n    const images = arg.images.map((img)=>img.url);\n    return {\n        messageID: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        isBotResponse,\n        isLoading,\n        content: {\n            text,\n            images\n        }\n    };\n};\n//* create table data\nconst createTableData = (arg)=>{\n    const { tableName, data } = arg;\n    const result = {};\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.PData) {\n        for (const d of data){\n            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.created_at).format(\"YYYY-MM-DD\");\n            const fieldName = d.personal_data_field.field_name.toLowerCase();\n            const { files } = d;\n            result[date] = {\n                ...result[date],\n                [fieldName]: fieldName === \"photos\" && files.length > 0 ? files : d.value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.GData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            for (const value of d.values){\n                const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format(\"YYYY-MM-DD\");\n                result[fieldName] = {\n                    ...result[fieldName],\n                    [date]: value.value\n                };\n            }\n            result[fieldName] = {\n                ...result[fieldName],\n                \"Consent Value\": d.consents_to_sell.toString().toUpperCase(),\n                Rewards: d.demanded_reward_value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.RData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                PDefinedValue: d.demanded_reward_value,\n                OtherCompValue: \"0.0\",\n                id: d.id\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.CData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                Definition: _constants__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTIONOFVARIABLES[d.field_name.toLowerCase()],\n                Companies: \"\",\n                Use: \"\",\n                id: d.id\n            };\n        }\n    }\n    return result;\n};\n// * create Columns for My G-Data\nconst createTableColumns = (data)=>{\n    let result = [];\n    let index = 0;\n    //* find index so that map will be run that many amount of time\n    for (const d of data){\n        const values = d.values.length;\n        if (values > data[index].values.length) {\n            index = data.indexOf(d);\n        }\n    }\n    const columns = data[index].values.map((item)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format(\"YYYY-MM-DD\")).filter((value, ind, self)=>self.indexOf(value) === ind);\n    result = [\n        \"Consent\",\n        ...columns,\n        \"Consent Value\",\n        \"Rewards\"\n    ];\n    const tableColumns = result.map((col)=>({\n            Header: col,\n            accessor: col\n        }));\n    return tableColumns;\n};\n//* rewards table\nconst createRewardsState = (data)=>{\n    const result = {};\n    for (const d of data){\n        result[d.id] = {\n            consents_to_sell: d.Consent === \"TRUE\",\n            demanded_reward_value: Number(d.PDefinedValue)\n        };\n    }\n    return result;\n};\n//* create history table data\nconst createHistoryTableData = (data)=>{\n    const result = data.map((chat)=>{\n        const { answer, images, chat_id, choice, question, timestamp } = chat;\n        return {\n            answer,\n            chatID: chat_id,\n            choice,\n            question,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            images: images != null ? JSON.parse(images.replace(/'/g, '\"')) : []\n        };\n    });\n    return result;\n};\n//* create screen data\nconst createScreenData = (arg)=>arg.map((screenData)=>{\n        const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;\n        return {\n            id,\n            screenRecording: screen_recording_url,\n            cameraRecording: camera_recording_url !== null && camera_recording_url !== void 0 ? camera_recording_url : \"\",\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            detail: data\n        };\n    });\n//* create default avatar image\nconst generateAvatar = (firstName)=>{\n    const initial = firstName[0].toUpperCase();\n    const canvas = document.createElement(\"canvas\");\n    const context = canvas.getContext(\"2d\");\n    canvas.width = 100;\n    canvas.height = 100;\n    if (context) {\n        // Draw background\n        context.fillStyle = \"#F3511C\";\n        context.fillRect(0, 0, canvas.width, canvas.height);\n        // Draw text\n        context.font = \"bold 50px DM-Sans\";\n        context.fillStyle = \"#ffffff\";\n        context.textAlign = \"center\";\n        context.textBaseline = \"middle\";\n        context.fillText(initial, canvas.width / 2, canvas.height / 2);\n    }\n    return canvas.toDataURL(\"image/png\");\n};\nconst createRecentChatHistory = (payload)=>payload.map((chats)=>{\n        const messages = [];\n        for (const chat of chats.history){\n            const response = createChat({\n                text: chat.answer,\n                images: chat.images != null ? JSON.parse(chat.images.replace(/'/g, '\"')).map((img)=>({\n                        url: img\n                    })) : [],\n                isBotResponse: true,\n                isLoading: false\n            });\n            const question = createChat({\n                text: chat.question,\n                images: [],\n                isBotResponse: false,\n                isLoading: false\n            });\n            messages.push(question);\n            messages.push(response);\n        }\n        return {\n            title: chats.name,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format(\"YYYY-MM-DD\"),\n            id: chats.id,\n            messages\n        };\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztRQUNwQkosUUFBUU8sU0FBUyxHQUFHO1FBQ3BCUCxRQUFRUSxZQUFZLEdBQUc7UUFDdkJSLFFBQVFTLFFBQVEsQ0FBQ2IsU0FBU0MsT0FBT0ssS0FBSyxHQUFHLEdBQUdMLE9BQU9NLE1BQU0sR0FBRztJQUM5RDtJQUNBLE9BQU9OLE9BQU9hLFNBQVMsQ0FBQztBQUMxQixFQUFFO0FBRUssTUFBTUMsMEJBQTBCLENBQUNDLFVBQ3RDQSxRQUFROUYsR0FBRyxDQUFDLENBQUMrRjtRQUNYLE1BQU12SCxXQUFXLEVBQUU7UUFDbkIsS0FBSyxNQUFNbUYsUUFBUW9DLE1BQU1DLE9BQU8sQ0FBRTtZQUNoQyxNQUFNQyxXQUFXbkYsV0FBVztnQkFDMUJuQixNQUFNZ0UsS0FBS0MsTUFBTTtnQkFDakIzQyxRQUNFMEMsS0FBSzFDLE1BQU0sSUFBSSxPQUFPaUQsS0FBS0MsS0FBSyxDQUFDUixLQUFLMUMsTUFBTSxDQUFDbUQsT0FBTyxDQUFDLE1BQU0sTUFBTXBFLEdBQUcsQ0FBQyxDQUFDa0IsTUFBaUI7d0JBQUVDLEtBQUtEO29CQUFJLE1BQU0sRUFBRTtnQkFDNUdILGVBQWU7Z0JBQ2ZDLFdBQVc7WUFDYjtZQUNBLE1BQU0rQyxXQUFXakQsV0FBVztnQkFDMUJuQixNQUFNZ0UsS0FBS0ksUUFBUTtnQkFDbkI5QyxRQUFRLEVBQUU7Z0JBQ1ZGLGVBQWU7Z0JBQ2ZDLFdBQVc7WUFDYjtZQUNBeEMsU0FBU0YsSUFBSSxDQUFDeUY7WUFDZHZGLFNBQVNGLElBQUksQ0FBQzJIO1FBQ2hCO1FBRUEsT0FBTztZQUNMQyxPQUFPSCxNQUFNSSxJQUFJO1lBQ2pCbEgsTUFBTXBCLDRDQUFLQSxDQUFDa0ksTUFBTXBFLFVBQVUsRUFBRW5DLE1BQU0sQ0FBQztZQUNyQ2lELElBQUlzRCxNQUFNdEQsRUFBRTtZQUNaakU7UUFDRjtJQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2luZGV4LnRzPzkxNDYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHtcbiAgVGFibGVOYW1lLFxuICBQZXJzb25hbERhdGFUeXBlLFxuICBDb2x1bW5zLFxuICBHRGF0YVR5cGUsXG4gIENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlLFxuICBTY3JlZW5EYXRhUmVzcG9uc2VUeXBlLFxuICBSZWNlbnRDaGF0SGlzdG9yeVJlc3BvbnNlVHlwZSxcbn0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyBUSGlzdG9yeSwgQ2hhdCwgQ2hhdEhpc3RvcnksIFRHcm91cGVkQ2hhdEhpc3RvcnkgfSBmcm9tICdAL3N0YXRlL2NoYXRzL3R5cGVzJztcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVNjaGVtYVR5cGUgfSBmcm9tICdAL3NjaGVtYSc7XG5pbXBvcnQgeyBEYXRhLCBTY3JlZW5EYXRhVHlwZSwgVXBkYXRlQ29uc2VudFJld2FyZFR5cGUgfSBmcm9tICdAL3N0YXRlL215R0RhdGEvdHlwZXMnO1xuaW1wb3J0IHsgREVTQ1JJUFRJT05PRlZBUklBQkxFUyB9IGZyb20gJ0AvY29uc3RhbnRzJztcblxuY29uc3QgYWRkVG9Hcm91cCA9IChjYXRlZ29yaXplZE1lc3NhZ2VzTWFwOiBUR3JvdXBlZENoYXRIaXN0b3J5LCBncm91cE5hbWU6IHN0cmluZywgbWVzc2FnZTogVEhpc3RvcnkpID0+IHtcbiAgaWYgKCFjYXRlZ29yaXplZE1lc3NhZ2VzTWFwW2dyb3VwTmFtZV0pIHtcbiAgICBjYXRlZ29yaXplZE1lc3NhZ2VzTWFwW2dyb3VwTmFtZV0gPSBbXTtcbiAgfVxuICBjYXRlZ29yaXplZE1lc3NhZ2VzTWFwW2dyb3VwTmFtZV0ucHVzaChtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBncm91cE1lc3NhZ2VzQnlEYXRlID0gKG1lc3NhZ2VzOiBUSGlzdG9yeVtdKSA9PiB7XG4gIGlmIChtZXNzYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcDogVEdyb3VwZWRDaGF0SGlzdG9yeSA9IHt9O1xuICBjb25zdCB0b2RheSA9IGRheWpzKCk7XG4gIC8vKiBzb3J0IHRoZSBtZXNzYWdlcyBpbiBhcnJheVxuICBjb25zdCBzb3J0ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBkYXRlQSA9IGRheWpzKGEuZGF0ZSk7XG4gICAgY29uc3QgZGF0ZUIgPSBkYXlqcyhiLmRhdGUpO1xuICAgIHJldHVybiBkYXRlQi5kaWZmKGRhdGVBKTtcbiAgfSk7XG4gIC8vKiBncm91cCB0aGUgc29ydGVkIG1lc3NhZ2VzXG4gIHNvcnRlZE1lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgIGNvbnN0IGRheXNEaWZmZXJuY2UgPSB0b2RheS5kaWZmKG1zZy5kYXRlLCAnZGF5Jyk7XG4gICAgaWYgKGRheXNEaWZmZXJuY2UgPT09IDApIHtcbiAgICAgIGFkZFRvR3JvdXAoQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCwgJ1RvZGF5JywgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRheXNEaWZmZXJuY2UgPT09IDEpIHtcbiAgICAgIGFkZFRvR3JvdXAoQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCwgJ1llc3RlcmRheScsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXlzRGlmZmVybmNlIDw9IDcpIHtcbiAgICAgIGFkZFRvR3JvdXAoQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCwgJ0xhc3QgNyBkYXlzJywgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRheXNEaWZmZXJuY2UgPD0gMzApIHtcbiAgICAgIGFkZFRvR3JvdXAoQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCwgJ0xhc3QgMzAgZGF5cycsIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gZGF5anMobXNnLmRhdGUpLmZvcm1hdCgnTU1NTScpO1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCBtb250aCwgbXNnKTtcbiAgICB9XG4gIH0pO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgcmV0dXJuIENhdGVnb3JpemVkTWVzc2FnZXNNYXA7XG59O1xuXG4vLyogY2FwYXRhbGl6ZSBzdHJpbmdcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKGFyZzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRleHQgPSBhcmcuc3BsaXQoJyAnKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubGVuZ3RoID4gMCk7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdCA9IHRleHQubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEsIHdvcmQubGVuZ3RoKSkuam9pbignICcpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vKiBjcmVhdGUgYSBwYXlsb2FkIGZvciBwZXJzb25hbCBkYXRhIHBvc3QgYXBpXG5leHBvcnQgY29uc3QgY3JlYXRlUGF5bG9hZCA9IChwZXJzb25hbF9kYXRhOiBQZXJzb25hbERhdGFTY2hlbWFUeXBlKSA9PlxuICBPYmplY3QuZW50cmllcyhwZXJzb25hbF9kYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICB2YWx1ZTogdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGAke3ZhbHVlfWAgOiB2YWx1ZS50b1N0cmluZygpLFxuICAgIHBlcnNvbmFsX2RhdGFfZmllbGQ6IHtcbiAgICAgIGZpZWxkX25hbWU6IGtleS50b1VwcGVyQ2FzZSgpLFxuICAgIH0sXG4gIH0pKTtcblxuLy8qIGNyZWF0ZSBhIHNpbmdsZSBjaGF0XG5leHBvcnQgY29uc3QgY3JlYXRlQ2hhdCA9IChhcmc6IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpbWFnZXM6IHsgdXJsOiBzdHJpbmcgfVtdO1xuICBpc0JvdFJlc3BvbnNlOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59KSA9PiB7XG4gIGNvbnN0IHsgaXNCb3RSZXNwb25zZSwgaXNMb2FkaW5nLCB0ZXh0IH0gPSBhcmc7XG4gIGNvbnN0IGltYWdlcyA9IGFyZy5pbWFnZXMubWFwKChpbWcpID0+IGltZy51cmwpO1xuXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZUlEOiB1dWlkdjQoKSxcbiAgICBpc0JvdFJlc3BvbnNlLFxuICAgIGlzTG9hZGluZyxcbiAgICBjb250ZW50OiB7XG4gICAgICB0ZXh0LFxuICAgICAgaW1hZ2VzLFxuICAgIH0sXG4gIH0gYXMgQ2hhdDtcbn07XG5cbi8vKiBjcmVhdGUgdGFibGUgZGF0YVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFibGVEYXRhID0gKGFyZzogeyB0YWJsZU5hbWU6IHN0cmluZzsgZGF0YTogUGVyc29uYWxEYXRhVHlwZVtdIHwgYW55IH0pID0+IHtcbiAgY29uc3QgeyB0YWJsZU5hbWUsIGRhdGEgfSA9IGFyZztcbiAgY29uc3QgcmVzdWx0OiBEYXRhID0ge307XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5QRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBkYXRlID0gZGF5anMoZC5jcmVhdGVkX2F0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGQucGVyc29uYWxfZGF0YV9maWVsZC5maWVsZF9uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB7IGZpbGVzIH0gPSBkO1xuICAgICAgcmVzdWx0W2RhdGVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZGF0ZV0sXG4gICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZE5hbWUgPT09ICdwaG90b3MnICYmIGZpbGVzLmxlbmd0aCA+IDAgPyBmaWxlcyA6IGQudmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAodGFibGVOYW1lID09PSBUYWJsZU5hbWUuR0RhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gY2FwaXRhbGl6ZShkLmZpZWxkX25hbWUucmVwbGFjZUFsbCgnXycsICcgJykpO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkLnZhbHVlcykge1xuICAgICAgICBjb25zdCBkYXRlID0gZGF5anModmFsdWUuY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAgIC4uLnJlc3VsdFtmaWVsZE5hbWVdLFxuICAgICAgICAgIFtkYXRlXTogdmFsdWUudmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgICdDb25zZW50IFZhbHVlJzogZC5jb25zZW50c190b19zZWxsLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgUmV3YXJkczogZC5kZW1hbmRlZF9yZXdhcmRfdmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAodGFibGVOYW1lID09PSBUYWJsZU5hbWUuUkRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gY2FwaXRhbGl6ZShkLmZpZWxkX25hbWUucmVwbGFjZUFsbCgnXycsICcgJykpO1xuICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgIC4uLnJlc3VsdFtmaWVsZE5hbWVdLFxuICAgICAgICBDb25zZW50OiBkLmNvbnNlbnRzX3RvX3NlbGwudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBQRGVmaW5lZFZhbHVlOiBkLmRlbWFuZGVkX3Jld2FyZF92YWx1ZSxcbiAgICAgICAgT3RoZXJDb21wVmFsdWU6ICcwLjAnLFxuICAgICAgICBpZDogZC5pZCxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5DRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjYXBpdGFsaXplKGQuZmllbGRfbmFtZS5yZXBsYWNlQWxsKCdfJywgJyAnKSk7XG4gICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgIENvbnNlbnQ6IGQuY29uc2VudHNfdG9fc2VsbC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIERlZmluaXRpb246IERFU0NSSVBUSU9OT0ZWQVJJQUJMRVNbZC5maWVsZF9uYW1lLnRvTG93ZXJDYXNlKCldLFxuICAgICAgICBDb21wYW5pZXM6ICcnLFxuICAgICAgICBVc2U6ICcnLFxuICAgICAgICBpZDogZC5pZCxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAqIGNyZWF0ZSBDb2x1bW5zIGZvciBNeSBHLURhdGFcbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZUNvbHVtbnMgPSAoZGF0YTogR0RhdGFUeXBlW10pID0+IHtcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgLy8qIGZpbmQgaW5kZXggc28gdGhhdCBtYXAgd2lsbCBiZSBydW4gdGhhdCBtYW55IGFtb3VudCBvZiB0aW1lXG4gIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgY29uc3QgdmFsdWVzID0gZC52YWx1ZXMubGVuZ3RoO1xuICAgIGlmICh2YWx1ZXMgPiBkYXRhW2luZGV4XS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IGRhdGEuaW5kZXhPZihkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29sdW1uczogc3RyaW5nW10gPSBkYXRhW2luZGV4XS52YWx1ZXNcbiAgICAubWFwKChpdGVtKSA9PiBkYXlqcyhpdGVtLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKVxuICAgIC5maWx0ZXIoKHZhbHVlLCBpbmQsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZCk7XG5cbiAgcmVzdWx0ID0gWydDb25zZW50JywgLi4uY29sdW1ucywgJ0NvbnNlbnQgVmFsdWUnLCAnUmV3YXJkcyddO1xuICBjb25zdCB0YWJsZUNvbHVtbnM6IENvbHVtbjxDb2x1bW5zPltdID0gcmVzdWx0Lm1hcCgoY29sKSA9PiAoe1xuICAgIEhlYWRlcjogY29sLFxuICAgIGFjY2Vzc29yOiBjb2wgYXMga2V5b2YgQ29sdW1ucyxcbiAgfSkpO1xuICByZXR1cm4gdGFibGVDb2x1bW5zO1xufTtcblxuLy8qIHJld2FyZHMgdGFibGVcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXdhcmRzU3RhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gIGNvbnN0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBVcGRhdGVDb25zZW50UmV3YXJkVHlwZSB9ID0ge307XG4gIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgcmVzdWx0W2QuaWRdID0ge1xuICAgICAgY29uc2VudHNfdG9fc2VsbDogZC5Db25zZW50ID09PSAnVFJVRScsXG4gICAgICBkZW1hbmRlZF9yZXdhcmRfdmFsdWU6IE51bWJlcihkLlBEZWZpbmVkVmFsdWUpLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vKiBjcmVhdGUgaGlzdG9yeSB0YWJsZSBkYXRhXG5leHBvcnQgY29uc3QgY3JlYXRlSGlzdG9yeVRhYmxlRGF0YSA9IChkYXRhOiBDaGF0SGlzdG9yeVJlc3BvbnNlVHlwZVtdKSA9PiB7XG4gIGNvbnN0IHJlc3VsdDogQ2hhdEhpc3RvcnlbXSA9IGRhdGEubWFwKChjaGF0KSA9PiB7XG4gICAgY29uc3QgeyBhbnN3ZXIsIGltYWdlcywgY2hhdF9pZCwgY2hvaWNlLCBxdWVzdGlvbiwgdGltZXN0YW1wIH0gPSBjaGF0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuc3dlcixcbiAgICAgIGNoYXRJRDogY2hhdF9pZCxcbiAgICAgIGNob2ljZSxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgZGF0ZTogZGF5anModGltZXN0YW1wKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGltYWdlczogaW1hZ2VzICE9IG51bGwgPyBKU09OLnBhcnNlKGltYWdlcy5yZXBsYWNlKC8nL2csICdcIicpKSA6IFtdLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBzY3JlZW4gZGF0YVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjcmVlbkRhdGEgPSAoYXJnOiBTY3JlZW5EYXRhUmVzcG9uc2VUeXBlW10pOiBTY3JlZW5EYXRhVHlwZVtdID0+XG4gIGFyZy5tYXAoKHNjcmVlbkRhdGEpID0+IHtcbiAgICBjb25zdCB7IGlkLCBzY3JlZW5fcmVjb3JkaW5nX3VybCwgY2FtZXJhX3JlY29yZGluZ191cmwsIHRpbWVzdGFtcCwgZGF0YSB9ID0gc2NyZWVuRGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBzY3JlZW5SZWNvcmRpbmc6IHNjcmVlbl9yZWNvcmRpbmdfdXJsLFxuICAgICAgY2FtZXJhUmVjb3JkaW5nOiBjYW1lcmFfcmVjb3JkaW5nX3VybCA/PyAnJyxcbiAgICAgIGRhdGU6IGRheWpzKHRpbWVzdGFtcCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBkZXRhaWw6IGRhdGEsXG4gICAgfTtcbiAgfSk7XG5cbi8vKiBjcmVhdGUgZGVmYXVsdCBhdmF0YXIgaW1hZ2VcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQXZhdGFyID0gKGZpcnN0TmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGluaXRpYWwgPSBmaXJzdE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjYW52YXMud2lkdGggPSAxMDA7XG4gIGNhbnZhcy5oZWlnaHQgPSAxMDA7XG4gIGlmIChjb250ZXh0KSB7XG4gICAgLy8gRHJhdyBiYWNrZ3JvdW5kXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI0YzNTExQyc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gRHJhdyB0ZXh0XG4gICAgY29udGV4dC5mb250ID0gJ2JvbGQgNTBweCBETS1TYW5zJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY29udGV4dC5maWxsVGV4dChpbml0aWFsLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gIH1cbiAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlY2VudENoYXRIaXN0b3J5ID0gKHBheWxvYWQ6IFJlY2VudENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlW10pID0+XG4gIHBheWxvYWQubWFwKChjaGF0cykgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgZm9yIChjb25zdCBjaGF0IG9mIGNoYXRzLmhpc3RvcnkpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gY3JlYXRlQ2hhdCh7XG4gICAgICAgIHRleHQ6IGNoYXQuYW5zd2VyLFxuICAgICAgICBpbWFnZXM6XG4gICAgICAgICAgY2hhdC5pbWFnZXMgIT0gbnVsbCA/IEpTT04ucGFyc2UoY2hhdC5pbWFnZXMucmVwbGFjZSgvJy9nLCAnXCInKSkubWFwKChpbWc6IHN0cmluZykgPT4gKHsgdXJsOiBpbWcgfSkpIDogW10sXG4gICAgICAgIGlzQm90UmVzcG9uc2U6IHRydWUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0gY3JlYXRlQ2hhdCh7XG4gICAgICAgIHRleHQ6IGNoYXQucXVlc3Rpb24sXG4gICAgICAgIGltYWdlczogW10sXG4gICAgICAgIGlzQm90UmVzcG9uc2U6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHF1ZXN0aW9uKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogY2hhdHMubmFtZSxcbiAgICAgIGRhdGU6IGRheWpzKGNoYXRzLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgaWQ6IGNoYXRzLmlkLFxuICAgICAgbWVzc2FnZXMsXG4gICAgfSBhcyBUSGlzdG9yeTtcbiAgfSk7XG4iXSwibmFtZXMiOlsiZGF5anMiLCJ2NCIsInV1aWR2NCIsIlRhYmxlTmFtZSIsIkRFU0NSSVBUSU9OT0ZWQVJJQUJMRVMiLCJhZGRUb0dyb3VwIiwiY2F0ZWdvcml6ZWRNZXNzYWdlc01hcCIsImdyb3VwTmFtZSIsIm1lc3NhZ2UiLCJwdXNoIiwiZ3JvdXBNZXNzYWdlc0J5RGF0ZSIsIm1lc3NhZ2VzIiwibGVuZ3RoIiwiQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcCIsInRvZGF5Iiwic29ydGVkTWVzc2FnZXMiLCJzb3J0IiwiYSIsImIiLCJkYXRlQSIsImRhdGUiLCJkYXRlQiIsImRpZmYiLCJmb3JFYWNoIiwibXNnIiwiZGF5c0RpZmZlcm5jZSIsIm1vbnRoIiwiZm9ybWF0IiwiY2FwaXRhbGl6ZSIsImFyZyIsInRleHQiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJyZXN1bHQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJjcmVhdGVQYXlsb2FkIiwicGVyc29uYWxfZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicGVyc29uYWxfZGF0YV9maWVsZCIsImZpZWxkX25hbWUiLCJjcmVhdGVDaGF0IiwiaXNCb3RSZXNwb25zZSIsImlzTG9hZGluZyIsImltYWdlcyIsImltZyIsInVybCIsIm1lc3NhZ2VJRCIsImNvbnRlbnQiLCJjcmVhdGVUYWJsZURhdGEiLCJ0YWJsZU5hbWUiLCJkYXRhIiwiUERhdGEiLCJkIiwiY3JlYXRlZF9hdCIsImZpZWxkTmFtZSIsInRvTG93ZXJDYXNlIiwiZmlsZXMiLCJHRGF0YSIsInJlcGxhY2VBbGwiLCJ2YWx1ZXMiLCJjb25zZW50c190b19zZWxsIiwiUmV3YXJkcyIsImRlbWFuZGVkX3Jld2FyZF92YWx1ZSIsIlJEYXRhIiwiQ29uc2VudCIsIlBEZWZpbmVkVmFsdWUiLCJPdGhlckNvbXBWYWx1ZSIsImlkIiwiQ0RhdGEiLCJEZWZpbml0aW9uIiwiQ29tcGFuaWVzIiwiVXNlIiwiY3JlYXRlVGFibGVDb2x1bW5zIiwiaW5kZXgiLCJpbmRleE9mIiwiY29sdW1ucyIsImluZCIsInNlbGYiLCJ0YWJsZUNvbHVtbnMiLCJjb2wiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImNyZWF0ZVJld2FyZHNTdGF0ZSIsIk51bWJlciIsImNyZWF0ZUhpc3RvcnlUYWJsZURhdGEiLCJjaGF0IiwiYW5zd2VyIiwiY2hhdF9pZCIsImNob2ljZSIsInF1ZXN0aW9uIiwidGltZXN0YW1wIiwiY2hhdElEIiwiSlNPTiIsInBhcnNlIiwicmVwbGFjZSIsImNyZWF0ZVNjcmVlbkRhdGEiLCJzY3JlZW5EYXRhIiwic2NyZWVuX3JlY29yZGluZ191cmwiLCJjYW1lcmFfcmVjb3JkaW5nX3VybCIsInNjcmVlblJlY29yZGluZyIsImNhbWVyYVJlY29yZGluZyIsImRldGFpbCIsImdlbmVyYXRlQXZhdGFyIiwiZmlyc3ROYW1lIiwiaW5pdGlhbCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRvRGF0YVVSTCIsImNyZWF0ZVJlY2VudENoYXRIaXN0b3J5IiwicGF5bG9hZCIsImNoYXRzIiwiaGlzdG9yeSIsInJlc3BvbnNlIiwidGl0bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/index.ts\n"));

/***/ })

});