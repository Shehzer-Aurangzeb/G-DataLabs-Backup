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
import { home, history, account, logout, logo_dark, logo, home_dark, history_dark, account_dark } from './assets';

export const PATHS = {
  HOME: '/',
  HISTORY: '/history',
  MYGDATA: '/my_g-data',
  OURGDATA: '/our_g-data',
  ACCOUNT: '/account',
  PERSONAL: '/my_g-data/personal-data',
  CONSENT: '/my_g-data/consent',
  COMPANY: '/my_g-data/company',
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
    icon_dark: home_dark,
  },
  {
    title: 'History',
    icon: history,
    to: PATHS.HISTORY,
    icon_dark: history_dark,
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
    icon_dark: account_dark,
  },
];

export const SIDEBARLINKSCOLORS = {
  DARK: ['#907CB4', '#F5B11A', '#A1BF8C', '#046C98', '#EA6D24'],
  LIGHT: ['#EE3E2E', '#3B7BBE', '#EFDCB1', '#DDAF40', '#E9CB84'],
};
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

export enum ACCOUNTTYPE {
  PERSONAL = 'Personal',
  COMPANY = 'Company',
}
export const ACCOUNTTYPESOPTIONS: DropDownOption[] = [
  { label: ACCOUNTTYPE.PERSONAL, value: ACCOUNTTYPE.PERSONAL },
  { label: ACCOUNTTYPE.COMPANY, value: ACCOUNTTYPE.COMPANY },
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
  accountType: ACCOUNTTYPESOPTIONS[0].label,
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
    Header: 'List Of Unit',
    accessor: 'Unit' as keyof Columns, // accessor is the "key" in the data
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
    Header: 'Price Offering',
    accessor: 'Pricing' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Threshold',
    accessor: 'Threshold' as keyof Columns, // accessor is the "key" in the data
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
export const COMPANYTABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Personal Data and Webcam',
    accessor: 'PDataAndWeb' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Definition',
    accessor: 'Definition' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'List Of Unit',
    accessor: 'Unit' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Use',
    accessor: 'Use' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Pricing',
    accessor: 'Pricing' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Threshold',
    accessor: 'threshold' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Consent',
    accessor: 'Consent' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Field Name',
    accessor: 'fieldName' as keyof Columns, // accessor is the "key" in the data
  },
];
export const REWARDSTABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Personal Data and ScreenData',
    accessor: 'PDataAndScreen' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'List Of Unit',
    accessor: 'Unit' as keyof Columns, // accessor is the "key" in the data
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
export const DESCRIPTIONANDUNITOFVARIABLES: {
  [key: string]: {
    definition: string;
    unit: string;
  };
} = {
  emotional_list: {
    definition: 'list of emotions experienced throughout the day',
    unit: 'Price per list of daily emotions',
  },
  high_temperature: {
    definition: 'highest temperature of the day',
    unit: 'Price per record of environment high temperature',
  },
  emotional_overall: {
    definition: 'an overall assessment of the days feelings',
    unit: 'Price per daily emotional index',
  },
  low_temperature: {
    definition: 'lowest temperature of the day',
    unit: 'Price per record of environment low temperature',
  },
  relative_finance_status: {
    definition: 'relative financial status ',
    unit: 'Price per daily financial status index',
  },
  weather: {
    definition: 'list of the weather of the day',
    unit: ' Price per daily weather record',
  },
  exercise_time: {
    definition: 'total amount of exercise during the day',
    unit: 'Price per record of exercise duration',
  },
  photos: {
    definition: 'any personal images that describe the day',
    unit: ' Price per personal digital image of at least 256x256 pixels',
  },
  exercise_total_time: {
    definition: 'total amount of exercise during the day',
    unit: 'Price per record of exercise duration',
  },
  health_overall: {
    definition: 'an assessment of the days health',
    unit: 'Price per daily comprehensive health report',
  },
  any_social_life: {
    definition: 'whether or not any social life occurred',
    unit: 'Price per record of daily social interaction',
  },
  social_life_list: {
    definition: 'list of social activities',
    unit: 'Price per itemized list of daily social activities',
  },
  weight: {
    definition: 'measure of weight in pounds',
    unit: 'Price per individual daily weight measurement',
  },
  family_status: {
    definition: 'status of close friends and family',
    unit: 'Price per record of family emotional status',
  },
  device_screen_time: {
    definition: 'amount of time spent on personal devices',
    unit: 'Price per record of screen time logged',
  },
  work_life_balance: {
    definition: 'overall focus of the day in a range between 0(work)-10(relaxation)',
    unit: 'Price per work-life balance assessment',
  },
  journaling: {
    definition: 'any points throughout the day worthy of note',
    unit: '',
  },
  date: {
    definition: 'the current day’s date',
    unit: '',
  },
  screen_recording: {
    definition: 'video recording of on-screen device activity',
    unit: 'Screen Recording: Price per second of device screen recording',
  },
  camera_recording: {
    definition: 'video recording from device webcam where face and or body are clearly visible',
    unit: ' Price per second of device webcam recording where face\body are clearly visible',
  },
  screen_camera_recording: {
    definition:
      'simultaneous combination of video recording of on-screen device activity and video recording from device webcam where face and or body are clearly visible',
    unit: 'Price per second of device screen + webcam recording where face\body are clearly visible',
  },
  microphone_audio_recording: {
    definition: 'audio recording from device microphone with clearly audible feedback',
    unit: 'Price per second of device microphone recording',
  },
  system_audio_recording: {
    definition: 'audio recording from device system audio with clearly audible feedback',
    unit: 'Price per second of device system audio recording',
  },
  mic_system_recording: {
    definition:
      'simultaneous combination of audio recording from device microphone and audio recording from device system audio with clearly audible feedback',
    unit: ' Price per second of device microphone and system audio recording',
  },
};
export const CONSENTTABLEDATA = {
  'EMOTIONAL OVERALL': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  WEATHER: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.weather.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weather.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'RELATIVE FINANCE STATUS': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'EXERCISE TIME': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'ANY SOCIAL LIFE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'SOCIAL LIFE LIST': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'HEALTH OVERALL': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.health_overall.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.health_overall.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  WEIGHT: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.weight.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weight.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'FAMILY STATUS': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.family_status.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.family_status.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'DEVICE SCREEN TIME': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'WORK LIFE BALANCE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  JOURNALING: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.journaling.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.journaling.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  DATE: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.date.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.date.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'EMOTIONAL LIST': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'HIGH TEMPERATURE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  Photos: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.photos.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.photos.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'LOW TEMPERATURE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'Screen Recording': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.screen_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.screen_recording.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'Camera Recording': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'Screen + Camera Recording': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'Microphone Audio Recording': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'System Audio Recording': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
  'Mic + System Recording': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.unit,
    Companies: [],
    Use: '',
    Threshold: '',
    Pricing: '',
    id: null,
  },
};
export const COMPANYTABLEDATA = {
  'EMOTIONAL OVERALL': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_overall.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'EMOTIONAL OVERALL',
  },
  WEATHER: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.weather.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weather.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'WEATHER',
  },
  'RELATIVE FINANCE STATUS': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.relative_finance_status.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'RELATIVE FINANCE STATUS',
  },
  'EXERCISE TIME': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.exercise_time.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'EXERCISE TIME',
  },
  'ANY SOCIAL LIFE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.any_social_life.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'ANY SOCIAL LIFE',
  },
  'SOCIAL LIFE LIST': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.social_life_list.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SOCIAL LIFE LIST',
  },
  'HEALTH OVERALL': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.health_overall.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.health_overall.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'HEALTH OVERALL',
  },
  WEIGHT: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.weight.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.weight.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'WEIGHT',
  },
  'FAMILY STATUS': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.family_status.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.family_status.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'FAMILY STATUS',
  },
  'DEVICE SCREEN TIME': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.device_screen_time.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'DEVICE SCREEN TIME',
  },
  'WORK LIFE BALANCE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.work_life_balance.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'WORK LIFE BALANCE',
  },
  JOURNALING: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.journaling.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.journaling.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'JOURNALING',
  },
  DATE: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.date.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.date.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'DATE',
  },
  'EMOTIONAL LIST': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.emotional_list.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'EMOTIONAL LIST',
  },
  'HIGH TEMPERATURE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.high_temperature.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'HIGH TEMPERATURE',
  },
  Photos: {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.photos.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.photos.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'Photos',
  },
  'LOW TEMPERATURE': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'LOW TEMPERATURE',
  },
  'SCREEN RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.screen_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.low_temperature.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SCREEN RECORDING',
  },
  'CAMERA RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.camera_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'CAMERA RECORDING',
  },
  'SCREEN + CAMERA RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.screen_camera_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SCREEN + CAMERA RECORDING',
  },
  'MICROPHONE AUDIO RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.microphone_audio_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'MICROPHONE AUDIO RECORDING',
  },
  'SYSTEM AUDIO RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.system_audio_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'SYSTEM AUDIO RECORDING',
  },
  'MIC + SYSTEM RECORDING': {
    Consent: 'FALSE',
    Definition: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.definition,
    Unit: DESCRIPTIONANDUNITOFVARIABLES.mic_system_recording.unit,
    Pricing: '',
    Use: '',
    Threshold: '',
    fieldName: 'MIC + SYSTEM RECORDING',
  },
};

export const maxWidth = '1450px';

export const PAGEOPTION = [10, 20, 30, 40];
