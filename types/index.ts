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

export type SignupCredentials = {
  password: string;
  email: string;
  first_name: string;
  last_name: string;
};
