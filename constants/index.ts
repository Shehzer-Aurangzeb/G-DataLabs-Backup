import { NAVITEMS as TNAVITEMS } from '@/types';
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
