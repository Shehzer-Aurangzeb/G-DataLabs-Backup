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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: function() { return /* binding */ capitalize; },\n/* harmony export */   createChat: function() { return /* binding */ createChat; },\n/* harmony export */   createHistoryTableData: function() { return /* binding */ createHistoryTableData; },\n/* harmony export */   createPayload: function() { return /* binding */ createPayload; },\n/* harmony export */   createRecentChatHistory: function() { return /* binding */ createRecentChatHistory; },\n/* harmony export */   createRewardsState: function() { return /* binding */ createRewardsState; },\n/* harmony export */   createScreenData: function() { return /* binding */ createScreenData; },\n/* harmony export */   createTableColumns: function() { return /* binding */ createTableColumns; },\n/* harmony export */   createTableData: function() { return /* binding */ createTableData; },\n/* harmony export */   generateAvatar: function() { return /* binding */ generateAvatar; },\n/* harmony export */   groupMessagesByDate: function() { return /* binding */ groupMessagesByDate; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types */ \"(app-pages-browser)/./types/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */ \n\n\n\nconst addToGroup = (categorizedMessagesMap, groupName, message)=>{\n    if (!categorizedMessagesMap[groupName]) {\n        categorizedMessagesMap[groupName] = [];\n    }\n    categorizedMessagesMap[groupName].push(message);\n};\nconst groupMessagesByDate = (messages)=>{\n    if (messages.length === 0) return;\n    const CategorizedMessagesMap = {};\n    const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n    //* sort the messages in array\n    const sortedMessages = messages.sort((a, b)=>{\n        const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.date);\n        const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.date);\n        return dateB.diff(dateA);\n    });\n    //* group the sorted messages\n    sortedMessages.forEach((msg)=>{\n        const daysDiffernce = today.diff(msg.date, \"day\");\n        if (daysDiffernce === 0) {\n            addToGroup(CategorizedMessagesMap, \"Today\", msg);\n            return;\n        }\n        if (daysDiffernce === 1) {\n            addToGroup(CategorizedMessagesMap, \"Yesterday\", msg);\n            return;\n        }\n        if (daysDiffernce <= 7) {\n            addToGroup(CategorizedMessagesMap, \"Last 7 days\", msg);\n            return;\n        }\n        if (daysDiffernce <= 30) {\n            addToGroup(CategorizedMessagesMap, \"Last 30 days\", msg);\n        } else {\n            const month = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(msg.date).format(\"MMMM\");\n            addToGroup(CategorizedMessagesMap, month, msg);\n        }\n    });\n    // eslint-disable-next-line consistent-return\n    return CategorizedMessagesMap;\n};\n//* capatalize string\nconst capitalize = (arg)=>{\n    const text = arg.split(\" \").filter((item)=>item.length > 0);\n    let result = \"\";\n    if (text.length > 0) {\n        result = text.map((word)=>word[0].toUpperCase() + word.slice(1, word.length)).join(\" \");\n    }\n    return result;\n};\n//* create a payload for personal data post api\nconst createPayload = (personal_data)=>Object.entries(personal_data).map((param)=>{\n        let [key, value] = param;\n        return {\n            value: typeof value === \"object\" ? \"\".concat(value) : value.toString(),\n            personal_data_field: {\n                field_name: key.toUpperCase()\n            }\n        };\n    });\n//* create a single chat\nconst createChat = (arg)=>{\n    const { isBotResponse, isLoading, text } = arg;\n    const images = arg.images.map((img)=>img.url);\n    return {\n        messageID: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        isBotResponse,\n        isLoading,\n        content: {\n            text,\n            images\n        }\n    };\n};\n//* create table data\nconst createTableData = (arg)=>{\n    const { tableName, data } = arg;\n    const result = {};\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.PData) {\n        for (const d of data){\n            console.log(\"d :>> \", d);\n            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.createdAt).format(\"YYYY-MM-DD\");\n            const fieldName = d.personal_data_field.field_name.toLowerCase();\n            const { files } = d;\n            result[date] = {\n                ...result[date],\n                [fieldName]: fieldName === \"photos\" && files.length > 0 ? files : d.value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.GData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            for (const value of d.values){\n                const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format(\"YYYY-MM-DD HH:mm:ss\");\n                result[fieldName] = {\n                    ...result[fieldName],\n                    [date]: value.value\n                };\n            }\n            result[fieldName] = {\n                ...result[fieldName],\n                \"Consent Value\": d.consents_to_sell.toString().toUpperCase(),\n                Rewards: d.demanded_reward_value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.RData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                PDefinedValue: d.demanded_reward_value,\n                OtherCompValue: \"0.0\",\n                id: d.id\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.CData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                Definition: _constants__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTIONOFVARIABLES[d.field_name.toLowerCase()],\n                Companies: \"\",\n                Use: \"\",\n                id: d.id\n            };\n        }\n    }\n    return result;\n};\n// * create Columns for My G-Data\nconst createTableColumns = (data)=>{\n    let result = [];\n    let index = 0;\n    //* find index so that map will be run that many amount of time\n    for (const d of data){\n        const values = d.values.length;\n        if (values > data[index].values.length) {\n            index = data.indexOf(d);\n        }\n    }\n    const columns = data[index].values.map((item)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format(\"YYYY-MM-DD HH:mm:ss\"));\n    result = [\n        \"Consent\",\n        ...columns,\n        \"Consent Value\",\n        \"Rewards\"\n    ];\n    const tableColumns = result.map((col)=>({\n            Header: col,\n            accessor: col\n        }));\n    return tableColumns;\n};\n//* rewards table\nconst createRewardsState = (data)=>{\n    const result = {};\n    for (const d of data){\n        result[d.id] = {\n            consents_to_sell: d.Consent === \"TRUE\",\n            demanded_reward_value: Number(d.PDefinedValue)\n        };\n    }\n    return result;\n};\n//* create history table data\nconst createHistoryTableData = (data)=>{\n    const result = data.map((chat)=>{\n        const { answer, images, chat_id, choice, question, timestamp } = chat;\n        return {\n            answer,\n            chatID: chat_id,\n            choice,\n            question,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            images: images != null ? JSON.parse(images.replace(/'/g, '\"')) : []\n        };\n    });\n    return result;\n};\n//* create screen data\nconst createScreenData = (arg)=>arg.map((screenData)=>{\n        const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;\n        return {\n            id,\n            screenRecording: screen_recording_url,\n            cameraRecording: camera_recording_url !== null && camera_recording_url !== void 0 ? camera_recording_url : \"\",\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            detail: data\n        };\n    });\n//* create default avatar image\nconst generateAvatar = (firstName)=>{\n    const initial = firstName[0].toUpperCase();\n    const canvas = document.createElement(\"canvas\");\n    const context = canvas.getContext(\"2d\");\n    canvas.width = 100;\n    canvas.height = 100;\n    if (context) {\n        // Draw background\n        context.fillStyle = \"#F3511C\";\n        context.fillRect(0, 0, canvas.width, canvas.height);\n        // Draw text\n        context.font = \"bold 50px DM-Sans\";\n        context.fillStyle = \"#ffffff\";\n        context.textAlign = \"center\";\n        context.textBaseline = \"middle\";\n        context.fillText(initial, canvas.width / 2, canvas.height / 2);\n    }\n    return canvas.toDataURL(\"image/png\");\n};\nconst createRecentChatHistory = (payload)=>payload.map((chats)=>{\n        const messages = [];\n        for (const chat of chats.history){\n            const response = createChat({\n                text: chat.answer,\n                images: chat.images != null ? JSON.parse(chat.images.replace(/'/g, '\"')).map((img)=>({\n                        url: img\n                    })) : [],\n                isBotResponse: true,\n                isLoading: false\n            });\n            const question = createChat({\n                text: chat.question,\n                images: [],\n                isBotResponse: false,\n                isLoading: false\n            });\n            messages.push(question);\n            messages.push(response);\n        }\n        return {\n            title: chats.name,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format(\"YYYY-MM-DD\"),\n            id: chats.id,\n            messages\n        };\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVFRLFlBQVksR0FBRztRQUN2QlIsUUFBUVMsUUFBUSxDQUFDYixTQUFTQyxPQUFPSyxLQUFLLEdBQUcsR0FBR0wsT0FBT00sTUFBTSxHQUFHO0lBQzlEO0lBQ0EsT0FBT04sT0FBT2EsU0FBUyxDQUFDO0FBQzFCLEVBQUU7QUFFSyxNQUFNQywwQkFBMEIsQ0FBQ0MsVUFDdENBLFFBQVEvRixHQUFHLENBQUMsQ0FBQ2dHO1FBQ1gsTUFBTXhILFdBQVcsRUFBRTtRQUNuQixLQUFLLE1BQU1vRixRQUFRb0MsTUFBTUMsT0FBTyxDQUFFO1lBQ2hDLE1BQU1DLFdBQVdwRixXQUFXO2dCQUMxQm5CLE1BQU1pRSxLQUFLQyxNQUFNO2dCQUNqQjVDLFFBQ0UyQyxLQUFLM0MsTUFBTSxJQUFJLE9BQU9rRCxLQUFLQyxLQUFLLENBQUNSLEtBQUszQyxNQUFNLENBQUNvRCxPQUFPLENBQUMsTUFBTSxNQUFNckUsR0FBRyxDQUFDLENBQUNrQixNQUFpQjt3QkFBRUMsS0FBS0Q7b0JBQUksTUFBTSxFQUFFO2dCQUM1R0gsZUFBZTtnQkFDZkMsV0FBVztZQUNiO1lBQ0EsTUFBTWdELFdBQVdsRCxXQUFXO2dCQUMxQm5CLE1BQU1pRSxLQUFLSSxRQUFRO2dCQUNuQi9DLFFBQVEsRUFBRTtnQkFDVkYsZUFBZTtnQkFDZkMsV0FBVztZQUNiO1lBQ0F4QyxTQUFTRixJQUFJLENBQUMwRjtZQUNkeEYsU0FBU0YsSUFBSSxDQUFDNEg7UUFDaEI7UUFFQSxPQUFPO1lBQ0xDLE9BQU9ILE1BQU1JLElBQUk7WUFDakJuSCxNQUFNcEIsNENBQUtBLENBQUNtSSxNQUFNNUQsVUFBVSxFQUFFNUMsTUFBTSxDQUFDO1lBQ3JDb0QsSUFBSW9ELE1BQU1wRCxFQUFFO1lBQ1pwRTtRQUNGO0lBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvaW5kZXgudHM/OTE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQge1xuICBUYWJsZU5hbWUsXG4gIFBlcnNvbmFsRGF0YVR5cGUsXG4gIENvbHVtbnMsXG4gIEdEYXRhVHlwZSxcbiAgQ2hhdEhpc3RvcnlSZXNwb25zZVR5cGUsXG4gIFNjcmVlbkRhdGFSZXNwb25zZVR5cGUsXG4gIFJlY2VudENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlLFxufSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IFRIaXN0b3J5LCBDaGF0LCBDaGF0SGlzdG9yeSwgVEdyb3VwZWRDaGF0SGlzdG9yeSB9IGZyb20gJ0Avc3RhdGUvY2hhdHMvdHlwZXMnO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhU2NoZW1hVHlwZSB9IGZyb20gJ0Avc2NoZW1hJztcbmltcG9ydCB7IERhdGEsIFNjcmVlbkRhdGFUeXBlLCBVcGRhdGVDb25zZW50UmV3YXJkVHlwZSB9IGZyb20gJ0Avc3RhdGUvbXlHRGF0YS90eXBlcyc7XG5pbXBvcnQgeyBERVNDUklQVElPTk9GVkFSSUFCTEVTIH0gZnJvbSAnQC9jb25zdGFudHMnO1xuXG5jb25zdCBhZGRUb0dyb3VwID0gKGNhdGVnb3JpemVkTWVzc2FnZXNNYXA6IFRHcm91cGVkQ2hhdEhpc3RvcnksIGdyb3VwTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBUSGlzdG9yeSkgPT4ge1xuICBpZiAoIWNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXSkge1xuICAgIGNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXSA9IFtdO1xuICB9XG4gIGNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXS5wdXNoKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwTWVzc2FnZXNCeURhdGUgPSAobWVzc2FnZXM6IFRIaXN0b3J5W10pID0+IHtcbiAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBDYXRlZ29yaXplZE1lc3NhZ2VzTWFwOiBUR3JvdXBlZENoYXRIaXN0b3J5ID0ge307XG4gIGNvbnN0IHRvZGF5ID0gZGF5anMoKTtcbiAgLy8qIHNvcnQgdGhlIG1lc3NhZ2VzIGluIGFycmF5XG4gIGNvbnN0IHNvcnRlZE1lc3NhZ2VzID0gbWVzc2FnZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGVBID0gZGF5anMoYS5kYXRlKTtcbiAgICBjb25zdCBkYXRlQiA9IGRheWpzKGIuZGF0ZSk7XG4gICAgcmV0dXJuIGRhdGVCLmRpZmYoZGF0ZUEpO1xuICB9KTtcbiAgLy8qIGdyb3VwIHRoZSBzb3J0ZWQgbWVzc2FnZXNcbiAgc29ydGVkTWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgY29uc3QgZGF5c0RpZmZlcm5jZSA9IHRvZGF5LmRpZmYobXNnLmRhdGUsICdkYXknKTtcbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA9PT0gMCkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnVG9kYXknLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA9PT0gMSkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnWWVzdGVyZGF5JywgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRheXNEaWZmZXJuY2UgPD0gNykge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnTGFzdCA3IGRheXMnLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA8PSAzMCkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnTGFzdCAzMCBkYXlzJywgbXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9udGggPSBkYXlqcyhtc2cuZGF0ZSkuZm9ybWF0KCdNTU1NJyk7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsIG1vbnRoLCBtc2cpO1xuICAgIH1cbiAgfSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICByZXR1cm4gQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcDtcbn07XG5cbi8vKiBjYXBhdGFsaXplIHN0cmluZ1xuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoYXJnOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGV4dCA9IGFyZy5zcGxpdCgnICcpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sZW5ndGggPiAwKTtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0ID0gdGV4dC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSwgd29yZC5sZW5ndGgpKS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBhIHBheWxvYWQgZm9yIHBlcnNvbmFsIGRhdGEgcG9zdCBhcGlcbmV4cG9ydCBjb25zdCBjcmVhdGVQYXlsb2FkID0gKHBlcnNvbmFsX2RhdGE6IFBlcnNvbmFsRGF0YVNjaGVtYVR5cGUpID0+XG4gIE9iamVjdC5lbnRyaWVzKHBlcnNvbmFsX2RhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgIHZhbHVlOiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gYCR7dmFsdWV9YCA6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgcGVyc29uYWxfZGF0YV9maWVsZDoge1xuICAgICAgZmllbGRfbmFtZToga2V5LnRvVXBwZXJDYXNlKCksXG4gICAgfSxcbiAgfSkpO1xuXG4vLyogY3JlYXRlIGEgc2luZ2xlIGNoYXRcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGF0ID0gKGFyZzoge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGltYWdlczogeyB1cmw6IHN0cmluZyB9W107XG4gIGlzQm90UmVzcG9uc2U6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgeyBpc0JvdFJlc3BvbnNlLCBpc0xvYWRpbmcsIHRleHQgfSA9IGFyZztcbiAgY29uc3QgaW1hZ2VzID0gYXJnLmltYWdlcy5tYXAoKGltZykgPT4gaW1nLnVybCk7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlSUQ6IHV1aWR2NCgpLFxuICAgIGlzQm90UmVzcG9uc2UsXG4gICAgaXNMb2FkaW5nLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHRleHQsXG4gICAgICBpbWFnZXMsXG4gICAgfSxcbiAgfSBhcyBDaGF0O1xufTtcblxuLy8qIGNyZWF0ZSB0YWJsZSBkYXRhXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZURhdGEgPSAoYXJnOiB7IHRhYmxlTmFtZTogc3RyaW5nOyBkYXRhOiBQZXJzb25hbERhdGFUeXBlW10gfCBhbnkgfSkgPT4ge1xuICBjb25zdCB7IHRhYmxlTmFtZSwgZGF0YSB9ID0gYXJnO1xuICBjb25zdCByZXN1bHQ6IERhdGEgPSB7fTtcbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLlBEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkIDo+PiAnLCBkKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKGQuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGQucGVyc29uYWxfZGF0YV9maWVsZC5maWVsZF9uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB7IGZpbGVzIH0gPSBkO1xuICAgICAgcmVzdWx0W2RhdGVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZGF0ZV0sXG4gICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZE5hbWUgPT09ICdwaG90b3MnICYmIGZpbGVzLmxlbmd0aCA+IDAgPyBmaWxlcyA6IGQudmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAodGFibGVOYW1lID09PSBUYWJsZU5hbWUuR0RhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gY2FwaXRhbGl6ZShkLmZpZWxkX25hbWUucmVwbGFjZUFsbCgnXycsICcgJykpO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkLnZhbHVlcykge1xuICAgICAgICBjb25zdCBkYXRlID0gZGF5anModmFsdWUuY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG4gICAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAgIC4uLnJlc3VsdFtmaWVsZE5hbWVdLFxuICAgICAgICAgIFtkYXRlXTogdmFsdWUudmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgICdDb25zZW50IFZhbHVlJzogZC5jb25zZW50c190b19zZWxsLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgUmV3YXJkczogZC5kZW1hbmRlZF9yZXdhcmRfdmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAodGFibGVOYW1lID09PSBUYWJsZU5hbWUuUkRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gY2FwaXRhbGl6ZShkLmZpZWxkX25hbWUucmVwbGFjZUFsbCgnXycsICcgJykpO1xuICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgIC4uLnJlc3VsdFtmaWVsZE5hbWVdLFxuICAgICAgICBDb25zZW50OiBkLmNvbnNlbnRzX3RvX3NlbGwudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBQRGVmaW5lZFZhbHVlOiBkLmRlbWFuZGVkX3Jld2FyZF92YWx1ZSxcbiAgICAgICAgT3RoZXJDb21wVmFsdWU6ICcwLjAnLFxuICAgICAgICBpZDogZC5pZCxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5DRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjYXBpdGFsaXplKGQuZmllbGRfbmFtZS5yZXBsYWNlQWxsKCdfJywgJyAnKSk7XG4gICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgIENvbnNlbnQ6IGQuY29uc2VudHNfdG9fc2VsbC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIERlZmluaXRpb246IERFU0NSSVBUSU9OT0ZWQVJJQUJMRVNbZC5maWVsZF9uYW1lLnRvTG93ZXJDYXNlKCldLFxuICAgICAgICBDb21wYW5pZXM6ICcnLFxuICAgICAgICBVc2U6ICcnLFxuICAgICAgICBpZDogZC5pZCxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAqIGNyZWF0ZSBDb2x1bW5zIGZvciBNeSBHLURhdGFcbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZUNvbHVtbnMgPSAoZGF0YTogR0RhdGFUeXBlW10pID0+IHtcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgLy8qIGZpbmQgaW5kZXggc28gdGhhdCBtYXAgd2lsbCBiZSBydW4gdGhhdCBtYW55IGFtb3VudCBvZiB0aW1lXG4gIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgY29uc3QgdmFsdWVzID0gZC52YWx1ZXMubGVuZ3RoO1xuICAgIGlmICh2YWx1ZXMgPiBkYXRhW2luZGV4XS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IGRhdGEuaW5kZXhPZihkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29sdW1uczogc3RyaW5nW10gPSBkYXRhW2luZGV4XS52YWx1ZXMubWFwKChpdGVtKSA9PiBkYXlqcyhpdGVtLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpKTtcblxuICByZXN1bHQgPSBbJ0NvbnNlbnQnLCAuLi5jb2x1bW5zLCAnQ29uc2VudCBWYWx1ZScsICdSZXdhcmRzJ107XG4gIGNvbnN0IHRhYmxlQ29sdW1uczogQ29sdW1uPENvbHVtbnM+W10gPSByZXN1bHQubWFwKChjb2wpID0+ICh7XG4gICAgSGVhZGVyOiBjb2wsXG4gICAgYWNjZXNzb3I6IGNvbCBhcyBrZXlvZiBDb2x1bW5zLFxuICB9KSk7XG4gIHJldHVybiB0YWJsZUNvbHVtbnM7XG59O1xuXG4vLyogcmV3YXJkcyB0YWJsZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJld2FyZHNTdGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzdWx0OiB7IFtrZXk6IHN0cmluZ106IFVwZGF0ZUNvbnNlbnRSZXdhcmRUeXBlIH0gPSB7fTtcbiAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICByZXN1bHRbZC5pZF0gPSB7XG4gICAgICBjb25zZW50c190b19zZWxsOiBkLkNvbnNlbnQgPT09ICdUUlVFJyxcbiAgICAgIGRlbWFuZGVkX3Jld2FyZF92YWx1ZTogTnVtYmVyKGQuUERlZmluZWRWYWx1ZSksXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBoaXN0b3J5IHRhYmxlIGRhdGFcbmV4cG9ydCBjb25zdCBjcmVhdGVIaXN0b3J5VGFibGVEYXRhID0gKGRhdGE6IENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlW10pID0+IHtcbiAgY29uc3QgcmVzdWx0OiBDaGF0SGlzdG9yeVtdID0gZGF0YS5tYXAoKGNoYXQpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciwgaW1hZ2VzLCBjaGF0X2lkLCBjaG9pY2UsIHF1ZXN0aW9uLCB0aW1lc3RhbXAgfSA9IGNoYXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYW5zd2VyLFxuICAgICAgY2hhdElEOiBjaGF0X2lkLFxuICAgICAgY2hvaWNlLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBkYXRlOiBkYXlqcyh0aW1lc3RhbXApLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgaW1hZ2VzOiBpbWFnZXMgIT0gbnVsbCA/IEpTT04ucGFyc2UoaW1hZ2VzLnJlcGxhY2UoLycvZywgJ1wiJykpIDogW10sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyogY3JlYXRlIHNjcmVlbiBkYXRhXG5leHBvcnQgY29uc3QgY3JlYXRlU2NyZWVuRGF0YSA9IChhcmc6IFNjcmVlbkRhdGFSZXNwb25zZVR5cGVbXSk6IFNjcmVlbkRhdGFUeXBlW10gPT5cbiAgYXJnLm1hcCgoc2NyZWVuRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHNjcmVlbl9yZWNvcmRpbmdfdXJsLCBjYW1lcmFfcmVjb3JkaW5nX3VybCwgdGltZXN0YW1wLCBkYXRhIH0gPSBzY3JlZW5EYXRhO1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIHNjcmVlblJlY29yZGluZzogc2NyZWVuX3JlY29yZGluZ191cmwsXG4gICAgICBjYW1lcmFSZWNvcmRpbmc6IGNhbWVyYV9yZWNvcmRpbmdfdXJsID8/ICcnLFxuICAgICAgZGF0ZTogZGF5anModGltZXN0YW1wKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGRldGFpbDogZGF0YSxcbiAgICB9O1xuICB9KTtcblxuLy8qIGNyZWF0ZSBkZWZhdWx0IGF2YXRhciBpbWFnZVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVBdmF0YXIgPSAoZmlyc3ROYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgaW5pdGlhbCA9IGZpcnN0TmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDEwMDtcbiAgY2FudmFzLmhlaWdodCA9IDEwMDtcbiAgaWYgKGNvbnRleHQpIHtcbiAgICAvLyBEcmF3IGJhY2tncm91bmRcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjRjM1MTFDJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBEcmF3IHRleHRcbiAgICBjb250ZXh0LmZvbnQgPSAnYm9sZCA1MHB4IERNLVNhbnMnO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KGluaXRpYWwsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgfVxuICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVjZW50Q2hhdEhpc3RvcnkgPSAocGF5bG9hZDogUmVjZW50Q2hhdEhpc3RvcnlSZXNwb25zZVR5cGVbXSkgPT5cbiAgcGF5bG9hZC5tYXAoKGNoYXRzKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoYXQgb2YgY2hhdHMuaGlzdG9yeSkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBjcmVhdGVDaGF0KHtcbiAgICAgICAgdGV4dDogY2hhdC5hbnN3ZXIsXG4gICAgICAgIGltYWdlczpcbiAgICAgICAgICBjaGF0LmltYWdlcyAhPSBudWxsID8gSlNPTi5wYXJzZShjaGF0LmltYWdlcy5yZXBsYWNlKC8nL2csICdcIicpKS5tYXAoKGltZzogc3RyaW5nKSA9PiAoeyB1cmw6IGltZyB9KSkgOiBbXSxcbiAgICAgICAgaXNCb3RSZXNwb25zZTogdHJ1ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSBjcmVhdGVDaGF0KHtcbiAgICAgICAgdGV4dDogY2hhdC5xdWVzdGlvbixcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgaXNCb3RSZXNwb25zZTogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIG1lc3NhZ2VzLnB1c2gocXVlc3Rpb24pO1xuICAgICAgbWVzc2FnZXMucHVzaChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBjaGF0cy5uYW1lLFxuICAgICAgZGF0ZTogZGF5anMoY2hhdHMuY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBpZDogY2hhdHMuaWQsXG4gICAgICBtZXNzYWdlcyxcbiAgICB9IGFzIFRIaXN0b3J5O1xuICB9KTtcbiJdLCJuYW1lcyI6WyJkYXlqcyIsInY0IiwidXVpZHY0IiwiVGFibGVOYW1lIiwiREVTQ1JJUFRJT05PRlZBUklBQkxFUyIsImFkZFRvR3JvdXAiLCJjYXRlZ29yaXplZE1lc3NhZ2VzTWFwIiwiZ3JvdXBOYW1lIiwibWVzc2FnZSIsInB1c2giLCJncm91cE1lc3NhZ2VzQnlEYXRlIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJDYXRlZ29yaXplZE1lc3NhZ2VzTWFwIiwidG9kYXkiLCJzb3J0ZWRNZXNzYWdlcyIsInNvcnQiLCJhIiwiYiIsImRhdGVBIiwiZGF0ZSIsImRhdGVCIiwiZGlmZiIsImZvckVhY2giLCJtc2ciLCJkYXlzRGlmZmVybmNlIiwibW9udGgiLCJmb3JtYXQiLCJjYXBpdGFsaXplIiwiYXJnIiwidGV4dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInJlc3VsdCIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImNyZWF0ZVBheWxvYWQiLCJwZXJzb25hbF9kYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJwZXJzb25hbF9kYXRhX2ZpZWxkIiwiZmllbGRfbmFtZSIsImNyZWF0ZUNoYXQiLCJpc0JvdFJlc3BvbnNlIiwiaXNMb2FkaW5nIiwiaW1hZ2VzIiwiaW1nIiwidXJsIiwibWVzc2FnZUlEIiwiY29udGVudCIsImNyZWF0ZVRhYmxlRGF0YSIsInRhYmxlTmFtZSIsImRhdGEiLCJQRGF0YSIsImQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlZEF0IiwiZmllbGROYW1lIiwidG9Mb3dlckNhc2UiLCJmaWxlcyIsIkdEYXRhIiwicmVwbGFjZUFsbCIsInZhbHVlcyIsImNyZWF0ZWRfYXQiLCJjb25zZW50c190b19zZWxsIiwiUmV3YXJkcyIsImRlbWFuZGVkX3Jld2FyZF92YWx1ZSIsIlJEYXRhIiwiQ29uc2VudCIsIlBEZWZpbmVkVmFsdWUiLCJPdGhlckNvbXBWYWx1ZSIsImlkIiwiQ0RhdGEiLCJEZWZpbml0aW9uIiwiQ29tcGFuaWVzIiwiVXNlIiwiY3JlYXRlVGFibGVDb2x1bW5zIiwiaW5kZXgiLCJpbmRleE9mIiwiY29sdW1ucyIsInRhYmxlQ29sdW1ucyIsImNvbCIsIkhlYWRlciIsImFjY2Vzc29yIiwiY3JlYXRlUmV3YXJkc1N0YXRlIiwiTnVtYmVyIiwiY3JlYXRlSGlzdG9yeVRhYmxlRGF0YSIsImNoYXQiLCJhbnN3ZXIiLCJjaGF0X2lkIiwiY2hvaWNlIiwicXVlc3Rpb24iLCJ0aW1lc3RhbXAiLCJjaGF0SUQiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwiY3JlYXRlU2NyZWVuRGF0YSIsInNjcmVlbkRhdGEiLCJzY3JlZW5fcmVjb3JkaW5nX3VybCIsImNhbWVyYV9yZWNvcmRpbmdfdXJsIiwic2NyZWVuUmVjb3JkaW5nIiwiY2FtZXJhUmVjb3JkaW5nIiwiZGV0YWlsIiwiZ2VuZXJhdGVBdmF0YXIiLCJmaXJzdE5hbWUiLCJpbml0aWFsIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9udCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwidG9EYXRhVVJMIiwiY3JlYXRlUmVjZW50Q2hhdEhpc3RvcnkiLCJwYXlsb2FkIiwiY2hhdHMiLCJoaXN0b3J5IiwicmVzcG9uc2UiLCJ0aXRsZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/index.ts\n"));

/***/ })

});