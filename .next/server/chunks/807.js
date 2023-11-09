'use strict';
exports.id = 807;
exports.ids = [807];
exports.modules = {
  /***/ 65807: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ T: () => /* binding */ useMyGData,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__,
    );
    /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34751);
    /* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83689);
    /* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      dayjs__WEBPACK_IMPORTED_MODULE_2__,
    );
    /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52122);
    /* harmony import */ var _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90634);
    /* harmony import */ var _state_myGData_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70918);
    /* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14088);
    /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11923);
    /* harmony import */ var _context_AppProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66233);
    /* eslint-disable no-restricted-syntax */ /* __next_internal_client_entry_do_not_use__ useMyGData auto */

    const useMyGData = () => {
      const { isLoading, setIsLoading } = (0, _state_loading_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useLoading */.r)();
      const { personalData, setPersonalData, gData, rData, cData, screenData, compData } = (0,
      _state_myGData_hooks__WEBPACK_IMPORTED_MODULE_5__ /* .usePersonalData */.h)();
      const { getAllConsentData, gTableColumns, updateMyGData, getAllPersonalData, getAllCompanyConsentData } = (0,
      _context_AppProvider__WEBPACK_IMPORTED_MODULE_8__ /* .useApp */.q)();
      const savePersonalData = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (personal_data) => {
          try {
            setIsLoading(true);
            if (personal_data.photos) {
              const formData = new FormData();
              formData.append('field_name', 'photos');
              for (const photo of personal_data.photos) {
                formData.append('image_files', photo);
              }
              await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
                .post('api/personal_data_consents_rewards/file_upload', formData);
            }
            delete personal_data.photos;
            const payload = (0, _lib__WEBPACK_IMPORTED_MODULE_6__ /* .createPayload */.Z4)(personal_data);
            const { data } = await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .post('api/personal_data_consents_rewards', payload);
            const newData = (0, _lib__WEBPACK_IMPORTED_MODULE_6__ /* .createTableData */.uR)({
              tableName: _types__WEBPACK_IMPORTED_MODULE_7__ /* .TableName */.me.PData,
              data: data.data,
            });
            setPersonalData(newData);
            await updateMyGData();
            await getAllConsentData();
            await getAllPersonalData();
          } catch (e) {
            // console.log('e :>> ', e);
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, setPersonalData, updateMyGData, getAllConsentData, getAllPersonalData],
      );
      const updateConsentRewards = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (arg) => {
          const { id, payload } = arg;
          try {
            setIsLoading(true);
            await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .patch(`api/user_consents_rewards/${id}/`, payload);
            await getAllConsentData();
            await updateMyGData();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('Consent updated');
          } catch (e) {
            // console.log('e :>> ', e);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Some problem updating consent');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, getAllConsentData, updateMyGData],
      );
      const updateCompanyConsentRewards = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        async (payload) => {
          try {
            setIsLoading(true);
            await _config__WEBPACK_IMPORTED_MODULE_3__ /* .api */.h
              .post('api/company_consents_rewards', payload);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('Consent updated');
            getAllCompanyConsentData();
          } catch (e) {
            // console.log('e :>> ', e);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Some problem updating consent');
          } finally {
            setIsLoading(false);
          }
        },
        [setIsLoading, getAllCompanyConsentData],
      );
      const savePersonalDataTemporarily = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
        (data) => {
          // const newData = createTableData({ tableName: TableName.PData, data });
          const date = data.date ?? dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD');
          const photos = [];
          for (const photo of data.photos) {
            const reader = new FileReader();
            reader.onload = (e) => {
              photos.push({
                file_url: e.target && e.target.result !== null ? e.target.result : '',
              });
            };
            reader.readAsDataURL(photo);
          }
          // wait for files to convert to data_uri
          setTimeout(() => {
            const updatedData = {
              ...personalData,
              [date]: {
                ...data,
                photos: [...photos],
              },
            };
            setPersonalData(updatedData);
          }, 3000);
        },
        [personalData, setPersonalData],
      );
      return {
        savePersonalData,
        isLoading,
        personalData,
        updateConsentRewards,
        savePersonalDataTemporarily,
        updateCompanyConsentRewards,
        gData,
        rData,
        cData,
        screenData,
        gTableColumns,
        compData,
      };
    };

    /***/
  },
};
