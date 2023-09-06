import { Chat as TMessage, ResponseChoice } from '@/state/chats/types';

type NAVITEM = {
  title: string;
  icon: any;
  to: string;
};
export type NAVITEMS = NAVITEM & {
  nestedItems?: NAVITEM[];
};

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type TPROPTION = {
  title: string;
  color: string;
  value: ResponseChoice;
};

export type THistory = {
  title: string;
  date: string;
  messages: TMessage[];
};

export type TGroupedChatHistory = {
  [key: string]: THistory[];
};
export type Columns = {
  col1: string;
  col2: string;
};
export enum COOKIES {
  USER = 'user',
  TOKEN = 'token_datalabs',
}
export type UserCredentials = {
  password: string;
  email: string;
};
export type UpdateUserPayloadType = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  total_rewards: string;
  username: string;
  password?: string;
  profile_picture?: File;
};

export type SignupCredentials = {
  password: string;
  email: string;
  first_name: string;
  last_name: string;
};
export type ScreenData = {
  url: any;
  name: string;
};
export enum TableName {
  PData = 'Personal Data',
  GData = 'My G-Data',
  RData = 'Rewards Data',
  CData = 'Consent Data',
}
export type PersonalDataType = {
  consents_to_sell: boolean;
  created_at: string;
  demanded_reward_value: string;
  id: number;
  personal_data_field: {
    field_name: string;
    user_id: number;
  };
  personal_data_field_id: number;
  value: string;
};
export type GDataType = {
  consents_to_sell: boolean;
  created_at: string;
  demanded_reward_value: string;
  field_name: string;
  id: number;
  user_id: number;
  values: [
    {
      created_at: string;
      value: string;
    },
  ];
};

export type ChatHistoryResponseType = {
  answer: string;
  chat_id: number;
  choice: null;
  id: number;
  images: string;
  question: string;
  timestamp: string;
  u_email: string;
  user_id: number;
};

export type ScreenDataResponseType = {
  camera_recording_url: string | null;
  data: string;
  id: number;
  screen_recording_url: string;
  timestamp: string;
  user_id: number;
};
export type GeolocationSuccessResponseType = {
  coords: GeolocationCoordinates;
  timestamp: number;
};
