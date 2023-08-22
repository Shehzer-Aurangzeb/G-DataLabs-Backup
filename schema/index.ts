import { InferType, array, boolean, number, object, string } from 'yup';

export const PersonalInfoSchema = object({
  firstName: string().min(2, 'First Name is too short').required('First Name is required'),
  lastName: string().min(2, 'Last Name is too short').required('Last Name is required'),
  email: string().email().required('Email is required'),
  password: string().min(5, 'Password must be 5 characters long').required('Password is required'),
  username: string().min(3).required('Username is required'),
  phone: number(),
  totalRewards: number(),
  nameOnCard: string().min(3),
  cardNo: number(),
  cardExpiry: number(),
  cvv: number(),
});
export const PersonalDataSchema = object({
  date: string().required('Date is required'),
  highTemp: number().required('High Temperature is required'),
  lowTemp: number().required('Low Temperature is required'),
  emotionList: array().of(string().required('Emotion List cannot be empty')).min(1, 'At least one emotion is required'),
  emotionOverall: string().required('Overall emotion is required'),
  weatherType: string().required('Weather type is required'),
  relFinanceStatus: string().required(),
  exerciseTotalTime: string().required('Exercise time is required'),
});

export const LoginFormSchema = object({
  email: string().email().required('Email is required'),
  password: string().required('Password is required'),
});

export const SignupFormSchema = object({
  firstName: string().min(2, 'First Name is too short').required('First Name is required'),
  lastName: string().min(2, 'Last Name is too short').required('Last Name is required'),
  email: string().email().required('Email is required'),
  password: string().min(5, 'Password must be 5 characters long').required('Password is required'),
  termsConditions: boolean()
    .test('is-true', 'You must accept the terms and conditions.', (value) => value === true)
    .required('Please accept the Terms and Conditions in order to proceed'),
  privacyPolicy: boolean().when('termsConditions', {
    is: true,
    then: (schema) => schema.oneOf([true], 'You must accept privacy and policy.'),
  }),
  cookiePolicy: boolean().when(['privacyPolicy'], {
    is: true,
    then: (schema) => schema.oneOf([true], 'You must accept cookie policy.'),
  }),
});
export const ResetPasswordFormSchema = object({
  email: string().email().required('Email is required'),
});

export type PersonalInfoSchemaType = InferType<typeof PersonalInfoSchema>;
export type PersonalDataSchemaType = InferType<typeof PersonalDataSchema>;
export type LoginFormSchemaType = InferType<typeof LoginFormSchema>;
export type ResetPasswordFormSchemaType = InferType<typeof ResetPasswordFormSchema>;

export type SignupFormSchemaType = InferType<typeof SignupFormSchema>;
