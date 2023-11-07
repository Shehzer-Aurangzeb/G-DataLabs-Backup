import { Column } from 'react-table';
import { Columns, DropDownOption, NAVITEMS as TNAVITEMS, TPROPTION } from '@/types';
import { ResponseChoice } from '@/state/chats/types';
import {
  ConfirmPasswordFormSchemaType,
  LoginFormSchemaType,
  PersonalDataSchemaType,
  PersonalInfoSchemaType,
  ResetPasswordFormSchemaType,
  SignupFormSchemaType,
} from '@/schema';
import { home, history, account, logout, logo_dark, logo } from './assets';

export const PATHS = {
  HOME: '/',
  HISTORY: '/history',
  MYGDATA: '/my_g-data',
  OURGDATA: '/our_g-data',
  ACCOUNT: '/account',
  PERSONAL: '/my_g-data/personal-data',
  CONSENT: '/my_g-data/consent',
  REWARDS: '/my_g-data/rewards',
  SCREEN: '/my_g-data/screen-data',
  SIGNUP: '/signup',
  LOGIN: '/login',
  RESETPASSWORD: '/reset_password',
  PRIVACY: '/privacy_policy',
  COOKIEPOLICY: '/cookie_policy',
  TERMS: '/terms_condition',
  CONFIRMPASSWORD: '/reset_password/confirm',
};

export const APPITEMS: TNAVITEMS[] = [
  {
    title: 'Home',
    icon: home,
    to: PATHS.HOME,
  },
  {
    title: 'History',
    icon: history,
    to: PATHS.HISTORY,
  },
  {
    title: 'My G-Data',
    icon: logo,
    icon_dark: logo_dark,
    to: PATHS.MYGDATA,
    nestedItems: [
      {
        title: 'Personal Data',
        icon: '',
        to: PATHS.PERSONAL,
      },
      {
        title: 'Consent',
        icon: '',
        to: PATHS.CONSENT,
      },
      {
        title: 'Rewards',
        icon: '',
        to: PATHS.REWARDS,
      },
      {
        title: 'Screen Data',
        icon: '',
        to: PATHS.SCREEN,
      },
    ],
  },
  {
    title: 'Our G-Data',
    icon: logo,
    icon_dark: logo_dark,
    to: PATHS.OURGDATA,
  },
  {
    title: 'My Account',
    icon: account,
    to: PATHS.ACCOUNT,
  },
];
export const AUTHITEMS: TNAVITEMS[] = [
  {
    title: 'Home',
    icon: home,
    to: PATHS.HOME,
  },
  {
    title: 'Login',
    icon: logout,
    to: PATHS.LOGIN,
  },
  {
    title: 'Register',
    icon: account,
    to: PATHS.SIGNUP,
  },
];

export const SOCIALLIFEOPTIONS: DropDownOption[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

export const PROMPTRESPONSEOPTIONS: TPROPTION[] = [
  {
    title: 'Text',
    color: '#046C98',
    value: ResponseChoice.TEXT,
    darkColor: '#A1BF8C',
  },
  {
    title: 'Image',
    color: '#F5B11A',
    value: ResponseChoice.IMAGES,
    darkColor: '#F5B11A',
  },
  {
    title: 'Text + Image',
    color: '#E62431',
    value: ResponseChoice.BOTH,
    darkColor: '#907CB4',
  },
];
export const PERSONALINFOINITIALVALUES: PersonalInfoSchemaType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
};
export const LOGINFORMINITIALVALUES: LoginFormSchemaType = {
  email: '',
  password: '',
};
export const RESETPASSWORDFORMINITIALVALUES: ResetPasswordFormSchemaType = {
  email: '',
};
export const CONFIRMPASSWORDFORMINITIALVALUES: ConfirmPasswordFormSchemaType = {
  token: '',
  password: '',
  confirm_password: '',
};
export const SIGNUPFORMINITIALVALUES: SignupFormSchemaType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  privacyPolicy: false,
  termsConditions: false,
  cookiePolicy: false,
};
export const PERSONALDATAINITIALVALUES: PersonalDataSchemaType = {
  date: '',
  high_temperature: 0,
  low_temperature: 0,
  emotional_list: [],
  emotional_overall: '',
  weather: '',
  relative_finance_status: '',
  exercise_time: 0,
  any_social_life: SOCIALLIFEOPTIONS[0].value,
};

export const CONSENTTABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Personal Data and Webcam',
    accessor: 'PDataAndWeb' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Definition',
    accessor: 'Definition' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Companies',
    accessor: 'Companies' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Use',
    accessor: 'Use' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Consent',
    accessor: 'Consent' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'id',
    accessor: 'id' as keyof Columns, // accessor is the "key" in the data
  },
];
export const REWARDSTABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Personal Data and ScreenData',
    accessor: 'PDataAndScreen' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'Consent',
    accessor: 'Consent' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Personal Defined Value',
    accessor: 'PDefinedValue' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Other Companies Value',
    accessor: 'OtherCompValue' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'id',
    accessor: 'id' as keyof Columns, // accessor is the "key" in the data
  },
];
export const PERSONALDATATABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Date',
    accessor: 'date' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'High Temperature',
    accessor: 'high_temperature' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Low Temperature',
    accessor: 'low_temperature' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Weather Type',
    accessor: 'weather' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Emotional List',
    accessor: 'emotional_list' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Emotional Overall',
    accessor: 'emotional_overall' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Relative Finance Status',
    accessor: 'relative_finance_status' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'Exercise Total Time',
    accessor: 'exercise_time' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Photos',
    accessor: 'photos' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Health Overall',
    accessor: 'health_overall' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Any Social Life',
    accessor: 'any_social_life' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Social Life List',
    accessor: 'social_life_list' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Weight',
    accessor: 'weight' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Family Status',
    accessor: 'family_status' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Device Screen Time',
    accessor: 'device_screen_time' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Work Life Balance',
    accessor: 'work_life_balance' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Journaling',
    accessor: 'journaling' as keyof Columns, // accessor is the "key" in the data
  },
];
export const HISTORYDATATABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Questions',
    accessor: 'question' as keyof Columns,
  },
  {
    Header: 'Answers',
    accessor: 'answer' as keyof Columns,
  },
  {
    Header: 'Image',
    accessor: 'images' as keyof Columns,
  },
  {
    Header: 'Feedback',
    accessor: 'choice' as keyof Columns,
  },
];
export const MYGDATATABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Consents',
    accessor: 'consents' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: '08-13-2023',
    accessor: 'date1' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: '08-14-2023',
    accessor: 'date2' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: '08-15-2023',
    accessor: 'date3' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: '08-16-2023',
    accessor: 'date4' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: '08-17-2023',
    accessor: 'date5' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Consent Value',
    accessor: 'consentValue' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'Rewards',
    accessor: 'rewards' as keyof Columns, // accessor is the "key" in the data
  },
];
export const DESCRIPTIONOFVARIABLES: { [key: string]: string } = {
  emotional_list: 'list of emotions experienced throughout the day',
  high_temperature: 'highest temperature of the day',
  emotional_overall: 'an overall assessment of the days feelings',
  low_temperature: 'lowest temperature of the day',
  relative_finance_status: 'relative financial status ',
  weather: 'list of the weather of the day',
  exercise_time: 'total amount of exercise during the day',
  photos: 'any personal images that describe the day',
  exercise_total_time: 'total amount of exercise during the day',
  health_overall: 'an assessment of the days health',
  any_social_life: 'whether or not any social life occurred',
  social_life_list: 'list of social activities',
  weight: 'measure of weight in pounds',
  family_status: 'status of close friends and family',
  device_screen_time: 'amount of time spent on personal devices',
  work_life_balance: 'overall focus of the day in a range between 0(work)-10(relaxation)',
  journaling: 'any points throughout the day worthy of note',
};
export const CONSENTTABLEDATA = {
  'EMOTIONAL OVERALL': {
    Consent: 'TRUE',
    Definition: 'an overall assessment of the days feelings',
    Companies: '',
    Use: '',
    id: null,
  },
  WEATHER: {
    Consent: 'TRUE',
    Definition: 'list of the weather of the day',
    Companies: '',
    Use: '',
    id: null,
  },
  'RELATIVE FINANCE STATUS': {
    Consent: 'TRUE',
    Definition: 'relative financial status ',
    Companies: '',
    Use: '',
    id: null,
  },
  'EXERCISE TIME': {
    Consent: 'TRUE',
    Definition: 'total amount of exercise during the day',
    Companies: '',
    Use: '',
    id: null,
  },
  'ANY SOCIAL LIFE': {
    Consent: 'TRUE',
    Definition: 'whether or not any social life occurred',
    Companies: '',
    Use: '',
    id: null,
  },
  'SOCIAL LIFE LIST': {
    Consent: 'TRUE',
    Definition: 'list of social activities',
    Companies: '',
    Use: '',
    id: null,
  },
  'HEALTH OVERALL': {
    Consent: 'TRUE',
    Definition: 'an assessment of the days health',
    Companies: '',
    Use: '',
    id: null,
  },
  WEIGHT: {
    Consent: 'TRUE',
    Definition: 'measure of weight in pounds',
    Companies: '',
    Use: '',
    id: null,
  },
  'FAMILY STATUS': {
    Consent: 'TRUE',
    Definition: 'status of close friends and family',
    Companies: '',
    Use: '',
    id: null,
  },
  'DEVICE SCREEN TIME': {
    Consent: 'TRUE',
    Definition: 'amount of time spent on personal devices',
    Companies: '',
    Use: '',
    id: null,
  },
  'WORK LIFE BALANCE': {
    Consent: 'TRUE',
    Definition: 'overall focus of the day in a range between 0(work)-10(relaxation)',
    Companies: '',
    Use: '',
    id: null,
  },
  JOURNALING: {
    Consent: 'TRUE',
    Definition: 'any points throughout the day worthy of note',
    Companies: '',
    Use: '',
    id: null,
  },
  DATE: {
    Consent: 'TRUE',
    Companies: '',
    Use: '',
    id: null,
  },
  'EMOTIONAL LIST': {
    Consent: 'FALSE',
    Definition: 'list of emotions experienced throughout the day',
    Companies: '',
    Use: '',
    id: null,
  },
  'HIGH TEMPERATURE': {
    Consent: 'FALSE',
    Definition: 'highest temperature of the day',
    Companies: '',
    Use: '',
    id: null,
  },
  Photos: {
    Consent: 'TRUE',
    Definition: 'any personal images that describe the day',
    Companies: '',
    Use: '',
    id: null,
  },
  'LOW TEMPERATURE': {
    Consent: 'FALSE',
    Definition: 'lowest temperature of the day',
    Companies: '',
    Use: '',
    id: null,
  },
};

export const maxWidth = '1450px';

export const PAGEOPTION = [10, 20, 30, 40];
