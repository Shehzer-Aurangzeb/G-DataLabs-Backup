'use strict';
exports.id = 732;
exports.ids = [732];
exports.modules = {
  /***/ 86732: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ M9: () => /* binding */ ConfirmPasswordFormSchema,
      /* harmony export */ fb: () => /* binding */ SignupFormSchema,
      /* harmony export */ gf: () => /* binding */ ResetPasswordFormSchema,
      /* harmony export */ nN: () => /* binding */ PersonalInfoSchema,
      /* harmony export */ wD: () => /* binding */ PersonalDataSchema,
      /* harmony export */ y1: () => /* binding */ LoginFormSchema,
      /* harmony export */
    });
    /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50298);

    const PersonalInfoSchema = (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .object */.Ry)({
      firstName: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)()
        .min(2, 'First Name is too short')
        .required('First Name is required'),
      lastName: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)()
        .min(2, 'Last Name is too short')
        .required('Last Name is required'),
      email: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().email().required('Email is required'),
      password: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      username: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      phone: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .mixed */.nK)().test(
        'is-phone-number',
        'Invalid phone number',
        (value) => {
          // Allow either a number or null
          if (value === null) {
            return true;
          }
          if (typeof value === 'number' || typeof value === 'string') {
            return true;
          }
          return false;
        },
      ),
      totalRewards: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .number */.Rx)(),
      accountNo: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      accountTitle: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      bankName: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
    });
    const PersonalDataSchema = (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .object */.Ry)({
      date: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      high_temperature: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .number */.Rx)(),
      low_temperature: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .number */.Rx)(),
      emotional_list: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .array */.IX)().of(
        (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      ),
      emotional_overall: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      weather: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      relative_finance_status: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      exercise_time: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .number */.Rx)(),
      photos: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .mixed */.nK)(),
      health_overall: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      any_social_life: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      social_life_list: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .array */.IX)().of(
        (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      ),
      weight: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .number */.Rx)(),
      family_status: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      device_screen_time: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
      work_life_balance: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .number */.Rx)()
        .min(0, 'Value must be at least 0')
        .max(10, 'Value must not exceed 10'),
      journaling: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)(),
    });
    const LoginFormSchema = (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .object */.Ry)({
      email: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().email().required('Email is required'),
      password: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().required('Password is required'),
    });
    const SignupFormSchema = (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .object */.Ry)({
      firstName: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)()
        .min(2, 'First Name is too short')
        .required('First Name is required'),
      lastName: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)()
        .min(2, 'Last Name is too short')
        .required('Last Name is required'),
      email: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().email().required('Email is required'),
      password: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)()
        .min(5, 'Password must be 5 characters long')
        .required('Password is required'),
      accountType: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().required('Account type is required'),
      termsConditions: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .boolean */.O7)()
        .test('is-true', 'You must accept the terms and conditions.', (value) => value === true)
        .required('Please accept the Terms and Conditions in order to proceed'),
      privacyPolicy: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .boolean */.O7)().when('termsConditions', {
        is: true,
        then: (schema) => schema.oneOf([true], 'You must accept privacy and policy.'),
      }),
      cookiePolicy: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .boolean */.O7)().when(['privacyPolicy'], {
        is: true,
        then: (schema) => schema.oneOf([true], 'You must accept cookie policy.'),
      }),
    });
    const ResetPasswordFormSchema = (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .object */.Ry)({
      email: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().email().required('Email is required'),
    });
    const ConfirmPasswordFormSchema = (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .object */.Ry)({
      token: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().required('Token cannot be empty'),
      password: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)().required('Password is required'),
      confirm_password: (0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .string */.Z_)()
        .oneOf([(0, yup__WEBPACK_IMPORTED_MODULE_0__ /* .ref */.iH)('password'), ''], 'Password must match')
        .required('Confirm Password is required'),
    });

    /***/
  },
};
