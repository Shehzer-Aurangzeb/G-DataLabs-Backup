import { Column } from 'react-table';
import { Columns, NAVITEMS as TNAVITEMS, TPROPTION } from '@/types';
import { ResponseChoice } from '@/state/chats/types';
import {
  LoginFormSchemaType,
  PersonalDataSchemaType,
  PersonalInfoSchemaType,
  ResetPasswordFormSchemaType,
  SignupFormSchemaType,
} from '@/schema';
import { home, history, account, myGData, logout } from './assets';

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
    icon: myGData,
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
    icon: myGData,
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

export const PROMPTRESPONSEOPTIONS: TPROPTION[] = [
  {
    title: 'Generate Text Only',
    color: '#046C98',
    value: ResponseChoice.TEXT,
  },
  {
    title: 'Generate Image Only',
    color: '#F5B11A',
    value: ResponseChoice.IMAGES,
  },
  {
    title: 'Generate Text + Image',
    color: '#E62431',
    value: ResponseChoice.BOTH,
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
    Header: 'High Temp',
    accessor: 'high_temperature' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Low Temp',
    accessor: 'low_temperature' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Weather Type',
    accessor: 'weather' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Emotion List',
    accessor: 'emotional_list' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Emot. Overall',
    accessor: 'emotional_overall' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Rel finance Status',
    accessor: 'relative_finance_status' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'Exercise Total Time',
    accessor: 'exercise_time' as keyof Columns, // accessor is the "key" in the data
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
};

export const maxWidth = '1450px';
