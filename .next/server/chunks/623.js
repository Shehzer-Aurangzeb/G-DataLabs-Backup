"use strict";
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 11623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ScreenData)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./hooks/useMyGData.ts
var useMyGData = __webpack_require__(65807);
// EXTERNAL MODULE: ./constants/index.ts
var constants = __webpack_require__(70880);
;// CONCATENATED MODULE: ./components/screens/MyGData/ScreenData/Accordion/index.tsx


function Accordion({ data }) {
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const handleOpen = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "bg-chat dark:bg-darkChat w-full border-none my-3 rounded-md ",
        onClick: handleOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-between items-center py-6 px-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-primary text-2xl font-sans font-semibold dark:text-main",
                        children: data.date
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative h-[40px] w-[40px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-main dark:bg-darkMain rounded-md"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `absolute w-[30px] h-[5px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ${isOpen ? "rotate-0" : "rotate-90"} bg-main dark:bg-darkMain rounded-md`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `px-3 transition-all duration-300 ${isOpen ? "max-h-fit pb-6" : "max-h-0 py-0"} overflow-hidden`,
                children: [
                    data.detail.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-primary dark:text-main font-medium text-xl font-raleway my-3 text-left",
                        children: data.detail
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row gap-x-4 mobile:flex-col mobile:gap-y-4",
                        children: [
                            data.screenRecording && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                controls: true,
                                className: `my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 ${isOpen ? "opacity-1 translate-y-0" : "opacity-0 -translate-y-10"}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                        src: data.screenRecording,
                                        type: "video/mp4"
                                    }),
                                    "Your browser does not support the video tag.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("track", {
                                        kind: "captions",
                                        srcLang: "en",
                                        label: "English captions"
                                    })
                                ]
                            }),
                            data.cameraRecording.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                controls: true,
                                className: `my-2 w-1/2 mobile:w-full transition-all duration-300 delay-250 ${isOpen ? "opacity-1 translate-y-0" : "opacity-0 -translate-y-10"}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                        src: data.cameraRecording,
                                        type: "video/mp4"
                                    }),
                                    "Your browser does not support the video tag.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("track", {
                                        kind: "captions",
                                        srcLang: "en",
                                        label: "English captions"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }, data.id);
}
/* harmony default export */ const ScreenData_Accordion = (Accordion);

;// CONCATENATED MODULE: ./components/screens/MyGData/ScreenData/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Main() {
    const { screenData } = (0,useMyGData/* useMyGData */.T)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: `border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center max-w-[${constants/* maxWidth */.kk}]`,
                children: "Screen Data"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `max-w-[${constants/* maxWidth */.kk}] overflow-x-auto w-full h-full pb-5`,
                children: screenData.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ScreenData_Accordion, {
                        data: item
                    }, item.id))
            })
        ]
    });
}
/* harmony default export */ const ScreenData = (Main);


/***/ })

};
;