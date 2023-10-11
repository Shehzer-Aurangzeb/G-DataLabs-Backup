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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: function() { return /* binding */ capitalize; },\n/* harmony export */   createChat: function() { return /* binding */ createChat; },\n/* harmony export */   createHistoryTableData: function() { return /* binding */ createHistoryTableData; },\n/* harmony export */   createPayload: function() { return /* binding */ createPayload; },\n/* harmony export */   createRecentChatHistory: function() { return /* binding */ createRecentChatHistory; },\n/* harmony export */   createRewardsState: function() { return /* binding */ createRewardsState; },\n/* harmony export */   createScreenData: function() { return /* binding */ createScreenData; },\n/* harmony export */   createTableColumns: function() { return /* binding */ createTableColumns; },\n/* harmony export */   createTableData: function() { return /* binding */ createTableData; },\n/* harmony export */   generateAvatar: function() { return /* binding */ generateAvatar; },\n/* harmony export */   groupMessagesByDate: function() { return /* binding */ groupMessagesByDate; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types */ \"(app-pages-browser)/./types/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable no-restricted-syntax */ \n\n\n\nconst addToGroup = (categorizedMessagesMap, groupName, message)=>{\n    if (!categorizedMessagesMap[groupName]) {\n        categorizedMessagesMap[groupName] = [];\n    }\n    categorizedMessagesMap[groupName].push(message);\n};\nconst groupMessagesByDate = (messages)=>{\n    if (messages.length === 0) return;\n    const CategorizedMessagesMap = {};\n    const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n    //* sort the messages in array\n    const sortedMessages = messages.sort((a, b)=>{\n        const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.date);\n        const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(b.date);\n        return dateB.diff(dateA);\n    });\n    //* group the sorted messages\n    sortedMessages.forEach((msg)=>{\n        const daysDiffernce = today.diff(msg.date, \"day\");\n        if (daysDiffernce === 0) {\n            addToGroup(CategorizedMessagesMap, \"Today\", msg);\n            return;\n        }\n        if (daysDiffernce === 1) {\n            addToGroup(CategorizedMessagesMap, \"Yesterday\", msg);\n            return;\n        }\n        if (daysDiffernce <= 7) {\n            addToGroup(CategorizedMessagesMap, \"Last 7 days\", msg);\n            return;\n        }\n        if (daysDiffernce <= 30) {\n            addToGroup(CategorizedMessagesMap, \"Last 30 days\", msg);\n        } else {\n            const month = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(msg.date).format(\"MMMM\");\n            addToGroup(CategorizedMessagesMap, month, msg);\n        }\n    });\n    // eslint-disable-next-line consistent-return\n    return CategorizedMessagesMap;\n};\n//* capatalize string\nconst capitalize = (arg)=>{\n    const text = arg.split(\" \").filter((item)=>item.length > 0);\n    let result = \"\";\n    if (text.length > 0) {\n        result = text.map((word)=>word[0].toUpperCase() + word.slice(1, word.length)).join(\" \");\n    }\n    return result;\n};\n//* create a payload for personal data post api\nconst createPayload = (personal_data)=>Object.entries(personal_data).map((param)=>{\n        let [key, value] = param;\n        return {\n            value: typeof value === \"object\" ? \"\".concat(value) : value.toString(),\n            personal_data_field: {\n                field_name: key.toUpperCase()\n            }\n        };\n    });\n//* create a single chat\nconst createChat = (arg)=>{\n    const { isBotResponse, isLoading, text } = arg;\n    const images = arg.images.map((img)=>img.url);\n    return {\n        messageID: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        isBotResponse,\n        isLoading,\n        content: {\n            text,\n            images\n        }\n    };\n};\n//* create table data\nconst createTableData = (arg)=>{\n    const { tableName, data } = arg;\n    const result = {};\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.PData) {\n        for (const d of data){\n            const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d.date).format(\"YYYY-MM-DD\");\n            const fieldName = d.personal_data_field.field_name.toLowerCase();\n            const { files } = d;\n            result[date] = {\n                ...result[date],\n                [fieldName]: fieldName === \"photos\" && files.length > 0 ? files : d.value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.GData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            for (const value of d.values){\n                const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value.created_at).format(\"YYYY-MM-DD HH:mm:ss\");\n                result[fieldName] = {\n                    ...result[fieldName],\n                    [date]: value.value\n                };\n            }\n            result[fieldName] = {\n                ...result[fieldName],\n                \"Consent Value\": d.consents_to_sell.toString().toUpperCase(),\n                Rewards: d.demanded_reward_value\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.RData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                PDefinedValue: d.demanded_reward_value,\n                OtherCompValue: \"0.0\",\n                id: d.id\n            };\n        }\n    }\n    if (tableName === _types__WEBPACK_IMPORTED_MODULE_1__.TableName.CData) {\n        for (const d of data){\n            const fieldName = capitalize(d.field_name.replaceAll(\"_\", \" \"));\n            result[fieldName] = {\n                ...result[fieldName],\n                Consent: d.consents_to_sell.toString().toUpperCase(),\n                Definition: _constants__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTIONOFVARIABLES[d.field_name.toLowerCase()],\n                Companies: \"\",\n                Use: \"\",\n                id: d.id\n            };\n        }\n    }\n    return result;\n};\n// * create Columns for My G-Data\nconst createTableColumns = (data)=>{\n    let result = [];\n    let index = 0;\n    //* find index so that map will be run that many amount of time\n    for (const d of data){\n        const values = d.values.length;\n        if (values > data[index].values.length) {\n            index = data.indexOf(d);\n        }\n    }\n    const columns = data[index].values.map((item)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format(\"YYYY-MM-DD HH:mm:ss\"));\n    result = [\n        \"Consent\",\n        ...columns,\n        \"Consent Value\",\n        \"Rewards\"\n    ];\n    const tableColumns = result.map((col)=>({\n            Header: col,\n            accessor: col\n        }));\n    return tableColumns;\n};\n//* rewards table\nconst createRewardsState = (data)=>{\n    const result = {};\n    for (const d of data){\n        result[d.id] = {\n            consents_to_sell: d.Consent === \"TRUE\",\n            demanded_reward_value: Number(d.PDefinedValue)\n        };\n    }\n    return result;\n};\n//* create history table data\nconst createHistoryTableData = (data)=>{\n    const result = data.map((chat)=>{\n        const { answer, images, chat_id, choice, question, timestamp } = chat;\n        return {\n            answer,\n            chatID: chat_id,\n            choice,\n            question,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            images: images != null ? JSON.parse(images.replace(/'/g, '\"')) : []\n        };\n    });\n    return result;\n};\n//* create screen data\nconst createScreenData = (arg)=>arg.map((screenData)=>{\n        const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;\n        return {\n            id,\n            screenRecording: screen_recording_url,\n            cameraRecording: camera_recording_url !== null && camera_recording_url !== void 0 ? camera_recording_url : \"\",\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(\"YYYY-MM-DD\"),\n            detail: data\n        };\n    });\n//* create default avatar image\nconst generateAvatar = (firstName)=>{\n    const initial = firstName[0].toUpperCase();\n    const canvas = document.createElement(\"canvas\");\n    const context = canvas.getContext(\"2d\");\n    canvas.width = 100;\n    canvas.height = 100;\n    if (context) {\n        // Draw background\n        context.fillStyle = \"#F3511C\";\n        context.fillRect(0, 0, canvas.width, canvas.height);\n        // Draw text\n        context.font = \"bold 50px DM-Sans\";\n        context.fillStyle = \"#ffffff\";\n        context.textAlign = \"center\";\n        context.textBaseline = \"middle\";\n        context.fillText(initial, canvas.width / 2, canvas.height / 2);\n    }\n    return canvas.toDataURL(\"image/png\");\n};\nconst createRecentChatHistory = (payload)=>payload.map((chats)=>{\n        const messages = [];\n        for (const chat of chats.history){\n            const response = createChat({\n                text: chat.answer,\n                images: chat.images != null ? JSON.parse(chat.images.replace(/'/g, '\"')).map((img)=>({\n                        url: img\n                    })) : [],\n                isBotResponse: true,\n                isLoading: false\n            });\n            const question = createChat({\n                text: chat.question,\n                images: [],\n                isBotResponse: false,\n                isLoading: false\n            });\n            messages.push(question);\n            messages.push(response);\n        }\n        return {\n            title: chats.name,\n            date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chats.created_at).format(\"YYYY-MM-DD\"),\n            id: chats.id,\n            messages\n        };\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixTQUFTQyxPQUFPSyxLQUFLLEdBQUcsR0FBR0wsT0FBT00sTUFBTSxHQUFHO0lBQzlEO0lBQ0EsT0FBT04sT0FBT2EsU0FBUyxDQUFDO0FBQzFCLEVBQUU7QUFFSyxNQUFNQywwQkFBMEIsQ0FBQ0MsVUFDdENBLFFBQVE1RixHQUFHLENBQUMsQ0FBQzZGO1FBQ1gsTUFBTXJILFdBQVcsRUFBRTtRQUNuQixLQUFLLE1BQU1pRixRQUFRb0MsTUFBTUMsT0FBTyxDQUFFO1lBQ2hDLE1BQU1DLFdBQVdqRixXQUFXO2dCQUMxQm5CLE1BQU04RCxLQUFLQyxNQUFNO2dCQUNqQnpDLFFBQ0V3QyxLQUFLeEMsTUFBTSxJQUFJLE9BQU8rQyxLQUFLQyxLQUFLLENBQUNSLEtBQUt4QyxNQUFNLENBQUNpRCxPQUFPLENBQUMsTUFBTSxNQUFNbEUsR0FBRyxDQUFDLENBQUNrQixNQUFpQjt3QkFBRUMsS0FBS0Q7b0JBQUksTUFBTSxFQUFFO2dCQUM1R0gsZUFBZTtnQkFDZkMsV0FBVztZQUNiO1lBQ0EsTUFBTTZDLFdBQVcvQyxXQUFXO2dCQUMxQm5CLE1BQU04RCxLQUFLSSxRQUFRO2dCQUNuQjVDLFFBQVEsRUFBRTtnQkFDVkYsZUFBZTtnQkFDZkMsV0FBVztZQUNiO1lBQ0F4QyxTQUFTRixJQUFJLENBQUN1RjtZQUNkckYsU0FBU0YsSUFBSSxDQUFDeUg7UUFDaEI7UUFFQSxPQUFPO1lBQ0xDLE9BQU9ILE1BQU1JLElBQUk7WUFDakJoSCxNQUFNcEIsNENBQUtBLENBQUNnSSxNQUFNNUQsVUFBVSxFQUFFekMsTUFBTSxDQUFDO1lBQ3JDaUQsSUFBSW9ELE1BQU1wRCxFQUFFO1lBQ1pqRTtRQUNGO0lBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvaW5kZXgudHM/OTE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQge1xuICBUYWJsZU5hbWUsXG4gIFBlcnNvbmFsRGF0YVR5cGUsXG4gIENvbHVtbnMsXG4gIEdEYXRhVHlwZSxcbiAgQ2hhdEhpc3RvcnlSZXNwb25zZVR5cGUsXG4gIFNjcmVlbkRhdGFSZXNwb25zZVR5cGUsXG4gIFJlY2VudENoYXRIaXN0b3J5UmVzcG9uc2VUeXBlLFxufSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IFRIaXN0b3J5LCBDaGF0LCBDaGF0SGlzdG9yeSwgVEdyb3VwZWRDaGF0SGlzdG9yeSB9IGZyb20gJ0Avc3RhdGUvY2hhdHMvdHlwZXMnO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhU2NoZW1hVHlwZSB9IGZyb20gJ0Avc2NoZW1hJztcbmltcG9ydCB7IERhdGEsIFNjcmVlbkRhdGFUeXBlLCBVcGRhdGVDb25zZW50UmV3YXJkVHlwZSB9IGZyb20gJ0Avc3RhdGUvbXlHRGF0YS90eXBlcyc7XG5pbXBvcnQgeyBERVNDUklQVElPTk9GVkFSSUFCTEVTIH0gZnJvbSAnQC9jb25zdGFudHMnO1xuXG5jb25zdCBhZGRUb0dyb3VwID0gKGNhdGVnb3JpemVkTWVzc2FnZXNNYXA6IFRHcm91cGVkQ2hhdEhpc3RvcnksIGdyb3VwTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBUSGlzdG9yeSkgPT4ge1xuICBpZiAoIWNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXSkge1xuICAgIGNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXSA9IFtdO1xuICB9XG4gIGNhdGVnb3JpemVkTWVzc2FnZXNNYXBbZ3JvdXBOYW1lXS5wdXNoKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwTWVzc2FnZXNCeURhdGUgPSAobWVzc2FnZXM6IFRIaXN0b3J5W10pID0+IHtcbiAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBDYXRlZ29yaXplZE1lc3NhZ2VzTWFwOiBUR3JvdXBlZENoYXRIaXN0b3J5ID0ge307XG4gIGNvbnN0IHRvZGF5ID0gZGF5anMoKTtcbiAgLy8qIHNvcnQgdGhlIG1lc3NhZ2VzIGluIGFycmF5XG4gIGNvbnN0IHNvcnRlZE1lc3NhZ2VzID0gbWVzc2FnZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGVBID0gZGF5anMoYS5kYXRlKTtcbiAgICBjb25zdCBkYXRlQiA9IGRheWpzKGIuZGF0ZSk7XG4gICAgcmV0dXJuIGRhdGVCLmRpZmYoZGF0ZUEpO1xuICB9KTtcbiAgLy8qIGdyb3VwIHRoZSBzb3J0ZWQgbWVzc2FnZXNcbiAgc29ydGVkTWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgY29uc3QgZGF5c0RpZmZlcm5jZSA9IHRvZGF5LmRpZmYobXNnLmRhdGUsICdkYXknKTtcbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA9PT0gMCkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnVG9kYXknLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA9PT0gMSkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnWWVzdGVyZGF5JywgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRheXNEaWZmZXJuY2UgPD0gNykge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnTGFzdCA3IGRheXMnLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF5c0RpZmZlcm5jZSA8PSAzMCkge1xuICAgICAgYWRkVG9Hcm91cChDYXRlZ29yaXplZE1lc3NhZ2VzTWFwLCAnTGFzdCAzMCBkYXlzJywgbXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9udGggPSBkYXlqcyhtc2cuZGF0ZSkuZm9ybWF0KCdNTU1NJyk7XG4gICAgICBhZGRUb0dyb3VwKENhdGVnb3JpemVkTWVzc2FnZXNNYXAsIG1vbnRoLCBtc2cpO1xuICAgIH1cbiAgfSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICByZXR1cm4gQ2F0ZWdvcml6ZWRNZXNzYWdlc01hcDtcbn07XG5cbi8vKiBjYXBhdGFsaXplIHN0cmluZ1xuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoYXJnOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGV4dCA9IGFyZy5zcGxpdCgnICcpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sZW5ndGggPiAwKTtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0ID0gdGV4dC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSwgd29yZC5sZW5ndGgpKS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8qIGNyZWF0ZSBhIHBheWxvYWQgZm9yIHBlcnNvbmFsIGRhdGEgcG9zdCBhcGlcbmV4cG9ydCBjb25zdCBjcmVhdGVQYXlsb2FkID0gKHBlcnNvbmFsX2RhdGE6IFBlcnNvbmFsRGF0YVNjaGVtYVR5cGUpID0+XG4gIE9iamVjdC5lbnRyaWVzKHBlcnNvbmFsX2RhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgIHZhbHVlOiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gYCR7dmFsdWV9YCA6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgcGVyc29uYWxfZGF0YV9maWVsZDoge1xuICAgICAgZmllbGRfbmFtZToga2V5LnRvVXBwZXJDYXNlKCksXG4gICAgfSxcbiAgfSkpO1xuXG4vLyogY3JlYXRlIGEgc2luZ2xlIGNoYXRcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGF0ID0gKGFyZzoge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGltYWdlczogeyB1cmw6IHN0cmluZyB9W107XG4gIGlzQm90UmVzcG9uc2U6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgeyBpc0JvdFJlc3BvbnNlLCBpc0xvYWRpbmcsIHRleHQgfSA9IGFyZztcbiAgY29uc3QgaW1hZ2VzID0gYXJnLmltYWdlcy5tYXAoKGltZykgPT4gaW1nLnVybCk7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlSUQ6IHV1aWR2NCgpLFxuICAgIGlzQm90UmVzcG9uc2UsXG4gICAgaXNMb2FkaW5nLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHRleHQsXG4gICAgICBpbWFnZXMsXG4gICAgfSxcbiAgfSBhcyBDaGF0O1xufTtcblxuLy8qIGNyZWF0ZSB0YWJsZSBkYXRhXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZURhdGEgPSAoYXJnOiB7IHRhYmxlTmFtZTogc3RyaW5nOyBkYXRhOiBQZXJzb25hbERhdGFUeXBlW10gfCBhbnkgfSkgPT4ge1xuICBjb25zdCB7IHRhYmxlTmFtZSwgZGF0YSB9ID0gYXJnO1xuICBjb25zdCByZXN1bHQ6IERhdGEgPSB7fTtcbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLlBEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXlqcyhkLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgY29uc3QgZmllbGROYW1lID0gZC5wZXJzb25hbF9kYXRhX2ZpZWxkLmZpZWxkX25hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IGQ7XG4gICAgICByZXN1bHRbZGF0ZV0gPSB7XG4gICAgICAgIC4uLnJlc3VsdFtkYXRlXSxcbiAgICAgICAgW2ZpZWxkTmFtZV06IGZpZWxkTmFtZSA9PT0gJ3Bob3RvcycgJiYgZmlsZXMubGVuZ3RoID4gMCA/IGZpbGVzIDogZC52YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5HRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjYXBpdGFsaXplKGQuZmllbGRfbmFtZS5yZXBsYWNlQWxsKCdfJywgJyAnKSk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGQudmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXlqcyh2YWx1ZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgICAgW2RhdGVdOiB2YWx1ZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZmllbGROYW1lXSxcbiAgICAgICAgJ0NvbnNlbnQgVmFsdWUnOiBkLmNvbnNlbnRzX3RvX3NlbGwudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBSZXdhcmRzOiBkLmRlbWFuZGVkX3Jld2FyZF92YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0YWJsZU5hbWUgPT09IFRhYmxlTmFtZS5SRGF0YSkge1xuICAgIGZvciAoY29uc3QgZCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBjYXBpdGFsaXplKGQuZmllbGRfbmFtZS5yZXBsYWNlQWxsKCdfJywgJyAnKSk7XG4gICAgICByZXN1bHRbZmllbGROYW1lXSA9IHtcbiAgICAgICAgLi4ucmVzdWx0W2ZpZWxkTmFtZV0sXG4gICAgICAgIENvbnNlbnQ6IGQuY29uc2VudHNfdG9fc2VsbC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIFBEZWZpbmVkVmFsdWU6IGQuZGVtYW5kZWRfcmV3YXJkX3ZhbHVlLFxuICAgICAgICBPdGhlckNvbXBWYWx1ZTogJzAuMCcsXG4gICAgICAgIGlkOiBkLmlkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHRhYmxlTmFtZSA9PT0gVGFibGVOYW1lLkNEYXRhKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNhcGl0YWxpemUoZC5maWVsZF9uYW1lLnJlcGxhY2VBbGwoJ18nLCAnICcpKTtcbiAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0ge1xuICAgICAgICAuLi5yZXN1bHRbZmllbGROYW1lXSxcbiAgICAgICAgQ29uc2VudDogZC5jb25zZW50c190b19zZWxsLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgRGVmaW5pdGlvbjogREVTQ1JJUFRJT05PRlZBUklBQkxFU1tkLmZpZWxkX25hbWUudG9Mb3dlckNhc2UoKV0sXG4gICAgICAgIENvbXBhbmllczogJycsXG4gICAgICAgIFVzZTogJycsXG4gICAgICAgIGlkOiBkLmlkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vICogY3JlYXRlIENvbHVtbnMgZm9yIE15IEctRGF0YVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhYmxlQ29sdW1ucyA9IChkYXRhOiBHRGF0YVR5cGVbXSkgPT4ge1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuICAvLyogZmluZCBpbmRleCBzbyB0aGF0IG1hcCB3aWxsIGJlIHJ1biB0aGF0IG1hbnkgYW1vdW50IG9mIHRpbWVcbiAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkLnZhbHVlcy5sZW5ndGg7XG4gICAgaWYgKHZhbHVlcyA+IGRhdGFbaW5kZXhdLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gZGF0YS5pbmRleE9mKGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2x1bW5zOiBzdHJpbmdbXSA9IGRhdGFbaW5kZXhdLnZhbHVlcy5tYXAoKGl0ZW0pID0+IGRheWpzKGl0ZW0uY3JlYXRlZF9hdCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykpO1xuXG4gIHJlc3VsdCA9IFsnQ29uc2VudCcsIC4uLmNvbHVtbnMsICdDb25zZW50IFZhbHVlJywgJ1Jld2FyZHMnXTtcbiAgY29uc3QgdGFibGVDb2x1bW5zOiBDb2x1bW48Q29sdW1ucz5bXSA9IHJlc3VsdC5tYXAoKGNvbCkgPT4gKHtcbiAgICBIZWFkZXI6IGNvbCxcbiAgICBhY2Nlc3NvcjogY29sIGFzIGtleW9mIENvbHVtbnMsXG4gIH0pKTtcbiAgcmV0dXJuIHRhYmxlQ29sdW1ucztcbn07XG5cbi8vKiByZXdhcmRzIHRhYmxlXG5leHBvcnQgY29uc3QgY3JlYXRlUmV3YXJkc1N0YXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICBjb25zdCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogVXBkYXRlQ29uc2VudFJld2FyZFR5cGUgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgIHJlc3VsdFtkLmlkXSA9IHtcbiAgICAgIGNvbnNlbnRzX3RvX3NlbGw6IGQuQ29uc2VudCA9PT0gJ1RSVUUnLFxuICAgICAgZGVtYW5kZWRfcmV3YXJkX3ZhbHVlOiBOdW1iZXIoZC5QRGVmaW5lZFZhbHVlKSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyogY3JlYXRlIGhpc3RvcnkgdGFibGUgZGF0YVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpc3RvcnlUYWJsZURhdGEgPSAoZGF0YTogQ2hhdEhpc3RvcnlSZXNwb25zZVR5cGVbXSkgPT4ge1xuICBjb25zdCByZXN1bHQ6IENoYXRIaXN0b3J5W10gPSBkYXRhLm1hcCgoY2hhdCkgPT4ge1xuICAgIGNvbnN0IHsgYW5zd2VyLCBpbWFnZXMsIGNoYXRfaWQsIGNob2ljZSwgcXVlc3Rpb24sIHRpbWVzdGFtcCB9ID0gY2hhdDtcblxuICAgIHJldHVybiB7XG4gICAgICBhbnN3ZXIsXG4gICAgICBjaGF0SUQ6IGNoYXRfaWQsXG4gICAgICBjaG9pY2UsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIGRhdGU6IGRheWpzKHRpbWVzdGFtcCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBpbWFnZXM6IGltYWdlcyAhPSBudWxsID8gSlNPTi5wYXJzZShpbWFnZXMucmVwbGFjZSgvJy9nLCAnXCInKSkgOiBbXSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vKiBjcmVhdGUgc2NyZWVuIGRhdGFcbmV4cG9ydCBjb25zdCBjcmVhdGVTY3JlZW5EYXRhID0gKGFyZzogU2NyZWVuRGF0YVJlc3BvbnNlVHlwZVtdKTogU2NyZWVuRGF0YVR5cGVbXSA9PlxuICBhcmcubWFwKChzY3JlZW5EYXRhKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgc2NyZWVuX3JlY29yZGluZ191cmwsIGNhbWVyYV9yZWNvcmRpbmdfdXJsLCB0aW1lc3RhbXAsIGRhdGEgfSA9IHNjcmVlbkRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgc2NyZWVuUmVjb3JkaW5nOiBzY3JlZW5fcmVjb3JkaW5nX3VybCxcbiAgICAgIGNhbWVyYVJlY29yZGluZzogY2FtZXJhX3JlY29yZGluZ191cmwgPz8gJycsXG4gICAgICBkYXRlOiBkYXlqcyh0aW1lc3RhbXApLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgZGV0YWlsOiBkYXRhLFxuICAgIH07XG4gIH0pO1xuXG4vLyogY3JlYXRlIGRlZmF1bHQgYXZhdGFyIGltYWdlXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUF2YXRhciA9IChmaXJzdE5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBpbml0aWFsID0gZmlyc3ROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgY2FudmFzLndpZHRoID0gMTAwO1xuICBjYW52YXMuaGVpZ2h0ID0gMTAwO1xuICBpZiAoY29udGV4dCkge1xuICAgIC8vIERyYXcgYmFja2dyb3VuZFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNGMzUxMUMnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIERyYXcgdGV4dFxuICAgIGNvbnRleHQuZm9udCA9ICdib2xkIDUwcHggRE0tU2Fucyc7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGNvbnRleHQuZmlsbFRleHQoaW5pdGlhbCwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xuICB9XG4gIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWNlbnRDaGF0SGlzdG9yeSA9IChwYXlsb2FkOiBSZWNlbnRDaGF0SGlzdG9yeVJlc3BvbnNlVHlwZVtdKSA9PlxuICBwYXlsb2FkLm1hcCgoY2hhdHMpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hhdCBvZiBjaGF0cy5oaXN0b3J5KSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGNyZWF0ZUNoYXQoe1xuICAgICAgICB0ZXh0OiBjaGF0LmFuc3dlcixcbiAgICAgICAgaW1hZ2VzOlxuICAgICAgICAgIGNoYXQuaW1hZ2VzICE9IG51bGwgPyBKU09OLnBhcnNlKGNoYXQuaW1hZ2VzLnJlcGxhY2UoLycvZywgJ1wiJykpLm1hcCgoaW1nOiBzdHJpbmcpID0+ICh7IHVybDogaW1nIH0pKSA6IFtdLFxuICAgICAgICBpc0JvdFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVzdGlvbiA9IGNyZWF0ZUNoYXQoe1xuICAgICAgICB0ZXh0OiBjaGF0LnF1ZXN0aW9uLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICBpc0JvdFJlc3BvbnNlOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgbWVzc2FnZXMucHVzaChxdWVzdGlvbik7XG4gICAgICBtZXNzYWdlcy5wdXNoKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGNoYXRzLm5hbWUsXG4gICAgICBkYXRlOiBkYXlqcyhjaGF0cy5jcmVhdGVkX2F0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGlkOiBjaGF0cy5pZCxcbiAgICAgIG1lc3NhZ2VzLFxuICAgIH0gYXMgVEhpc3Rvcnk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbImRheWpzIiwidjQiLCJ1dWlkdjQiLCJUYWJsZU5hbWUiLCJERVNDUklQVElPTk9GVkFSSUFCTEVTIiwiYWRkVG9Hcm91cCIsImNhdGVnb3JpemVkTWVzc2FnZXNNYXAiLCJncm91cE5hbWUiLCJtZXNzYWdlIiwicHVzaCIsImdyb3VwTWVzc2FnZXNCeURhdGUiLCJtZXNzYWdlcyIsImxlbmd0aCIsIkNhdGVnb3JpemVkTWVzc2FnZXNNYXAiLCJ0b2RheSIsInNvcnRlZE1lc3NhZ2VzIiwic29ydCIsImEiLCJiIiwiZGF0ZUEiLCJkYXRlIiwiZGF0ZUIiLCJkaWZmIiwiZm9yRWFjaCIsIm1zZyIsImRheXNEaWZmZXJuY2UiLCJtb250aCIsImZvcm1hdCIsImNhcGl0YWxpemUiLCJhcmciLCJ0ZXh0Iiwic3BsaXQiLCJmaWx0ZXIiLCJpdGVtIiwicmVzdWx0IiwibWFwIiwid29yZCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiY3JlYXRlUGF5bG9hZCIsInBlcnNvbmFsX2RhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJ0b1N0cmluZyIsInBlcnNvbmFsX2RhdGFfZmllbGQiLCJmaWVsZF9uYW1lIiwiY3JlYXRlQ2hhdCIsImlzQm90UmVzcG9uc2UiLCJpc0xvYWRpbmciLCJpbWFnZXMiLCJpbWciLCJ1cmwiLCJtZXNzYWdlSUQiLCJjb250ZW50IiwiY3JlYXRlVGFibGVEYXRhIiwidGFibGVOYW1lIiwiZGF0YSIsIlBEYXRhIiwiZCIsImZpZWxkTmFtZSIsInRvTG93ZXJDYXNlIiwiZmlsZXMiLCJHRGF0YSIsInJlcGxhY2VBbGwiLCJ2YWx1ZXMiLCJjcmVhdGVkX2F0IiwiY29uc2VudHNfdG9fc2VsbCIsIlJld2FyZHMiLCJkZW1hbmRlZF9yZXdhcmRfdmFsdWUiLCJSRGF0YSIsIkNvbnNlbnQiLCJQRGVmaW5lZFZhbHVlIiwiT3RoZXJDb21wVmFsdWUiLCJpZCIsIkNEYXRhIiwiRGVmaW5pdGlvbiIsIkNvbXBhbmllcyIsIlVzZSIsImNyZWF0ZVRhYmxlQ29sdW1ucyIsImluZGV4IiwiaW5kZXhPZiIsImNvbHVtbnMiLCJ0YWJsZUNvbHVtbnMiLCJjb2wiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImNyZWF0ZVJld2FyZHNTdGF0ZSIsIk51bWJlciIsImNyZWF0ZUhpc3RvcnlUYWJsZURhdGEiLCJjaGF0IiwiYW5zd2VyIiwiY2hhdF9pZCIsImNob2ljZSIsInF1ZXN0aW9uIiwidGltZXN0YW1wIiwiY2hhdElEIiwiSlNPTiIsInBhcnNlIiwicmVwbGFjZSIsImNyZWF0ZVNjcmVlbkRhdGEiLCJzY3JlZW5EYXRhIiwic2NyZWVuX3JlY29yZGluZ191cmwiLCJjYW1lcmFfcmVjb3JkaW5nX3VybCIsInNjcmVlblJlY29yZGluZyIsImNhbWVyYVJlY29yZGluZyIsImRldGFpbCIsImdlbmVyYXRlQXZhdGFyIiwiZmlyc3ROYW1lIiwiaW5pdGlhbCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInRvRGF0YVVSTCIsImNyZWF0ZVJlY2VudENoYXRIaXN0b3J5IiwicGF5bG9hZCIsImNoYXRzIiwiaGlzdG9yeSIsInJlc3BvbnNlIiwidGl0bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/index.ts\n"));

/***/ })

});