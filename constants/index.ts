import { Columns, NAVITEMS as TNAVITEMS, TPROPTION } from '@/types';
import { home, history, account, myGData } from './assets';
import { PersonalInfoSchemaType } from '@/schema';
import { Column } from 'react-table';

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
