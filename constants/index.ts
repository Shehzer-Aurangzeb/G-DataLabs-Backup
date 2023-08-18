import { Column } from 'react-table';
import { Columns, NAVITEMS as TNAVITEMS, TPROPTION } from '@/types';
import { PersonalInfoSchemaType } from '@/schema';
import { home, history, account, myGData } from './assets';

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
};

export const NAVITEMS: TNAVITEMS[] = [
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

export const PROMPTRESPONSEOPTIONS: TPROPTION[] = [
  {
    title: 'Generate Text Only',
    color: '#046C98',
  },
  {
    title: 'Generate Image Only',
    color: '#F5B11A',
  },
  {
    title: 'Generate Text + Image',
    color: '#E62431',
  },
];
export const PERSONALINFOINITIALVALUES: PersonalInfoSchemaType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
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
];
export const PERSONALDATATABLECOLUMNS: Column<Columns>[] = [
  {
    Header: 'Date',
    accessor: 'date' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'High Temp',
    accessor: 'highTemp' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Low Temp',
    accessor: 'lowTemp' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Weather Type',
    accessor: 'weatherType' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Emotion List',
    accessor: 'emotions' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Emot. Overall',
    accessor: 'emotionOverall' as keyof Columns, // accessor is the "key" in the data
  },
  {
    Header: 'Rel finance Status',
    accessor: 'relFinanceStatus' as keyof Columns, // accessor is the "key" in the data
  },

  {
    Header: 'Exercise Total Time',
    accessor: 'exerciseTime' as keyof Columns, // accessor is the "key" in the data
  },
];
