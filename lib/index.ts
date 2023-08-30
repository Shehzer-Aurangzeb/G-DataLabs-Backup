/* eslint-disable no-restricted-syntax */
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { Column } from 'react-table';
import {
  THistory,
  TGroupedChatHistory,
  TableName,
  PersonalDataType,
  Columns,
  GDataType,
  ChatHistoryResponseType,
} from '@/types';
import { PersonalDataSchemaType } from '@/schema';
import { Chat, ChatHistory } from '@/state/chats/types';
import { Data, UpdateConsentRewardType } from '@/state/myGData/types';

const addToGroup = (categorizedMessagesMap: TGroupedChatHistory, groupName: string, message: THistory) => {
  if (!categorizedMessagesMap[groupName]) {
    categorizedMessagesMap[groupName] = [];
  }
  categorizedMessagesMap[groupName].push(message);
};

export const groupMessagesByDate = (messages: THistory[]) => {
  const CategorizedMessagesMap: TGroupedChatHistory = {};
  const today = dayjs();
  //* sort the messages in array
  const sortedMessages = messages.sort((a, b) => {
    const dateA = dayjs(a.date);
    const dateB = dayjs(b.date);
    return dateB.diff(dateA);
  });
  //* group the sorted messages
  sortedMessages.forEach((msg) => {
    const daysDiffernce = today.diff(msg.date, 'day');

    if (daysDiffernce <= 7) {
      addToGroup(CategorizedMessagesMap, 'Last 7 days', msg);
      return;
    }
    if (daysDiffernce <= 30) {
      addToGroup(CategorizedMessagesMap, 'Last 30 days', msg);
    } else {
      const month = dayjs(msg.date).format('MMMM');
      addToGroup(CategorizedMessagesMap, month, msg);
    }
  });
  return CategorizedMessagesMap;
};

//* capatalize string
const capitalize = (arg: string) => {
  const text = arg.split(' ');
  const result = text.map((word) => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');

  return result;
};

//* create a payload for personal data post api
export const createPayload = (personal_data: PersonalDataSchemaType) => {
  // * deleting because server does not accept these values right now
  delete personal_data.date;
  delete personal_data.weather_type;
  delete personal_data.exercise_total_time;

  return Object.entries(personal_data).map(([key, value]) => ({
    value: typeof value === 'object' ? `${value}` : value,
    personal_data_field: {
      field_name: key.toUpperCase(),
    },
  }));
};

//* create a single chat
export const createChat = (arg: {
  text: string;
  images: { url: string }[];
  isBotResponse: boolean;
  isLoading: boolean;
}) => {
  const { isBotResponse, isLoading, text } = arg;
  const images = arg.images.map((img) => img.url);

  return {
    messageID: uuidv4(),
    isBotResponse,
    isLoading,
    content: {
      text,
      images,
    },
  } as Chat;
};

//* create table data

export const createTableData = (arg: { tableName: string; data: PersonalDataType[] | any }) => {
  const { tableName, data } = arg;
  const result: Data = {};
  if (tableName === TableName.PData) {
    for (const d of data) {
      const date = dayjs(d.created_at).format('YYYY-MM-DD');
      result[date] = {
        ...result[date],
        [d.personal_data_field.field_name]: d.value,
      };
    }
  }
  if (tableName === TableName.GData) {
    for (const d of data) {
      const fieldName = capitalize(d.field_name.replaceAll('_', ' '));
      const date = dayjs(d.created_at).format('YYYY-MM-DD');
      result[fieldName] = {
        ...result[fieldName],
        'Consent Value': d.consents_to_sell.toString().toUpperCase(),
        Rewards: d.demanded_reward_value,
        [date]: d.values[0].value,
      };
    }
  }
  if (tableName === TableName.RData) {
    for (const d of data) {
      const fieldName = capitalize(d.field_name.replaceAll('_', ' '));
      result[fieldName] = {
        ...result[fieldName],
        Consent: d.consents_to_sell.toString().toUpperCase(),
        PDefinedValue: d.demanded_reward_value,
        OtherCompValue: '0.0',
        id: d.id,
      };
    }
  }
  if (tableName === TableName.CData) {
    for (const d of data) {
      const fieldName = capitalize(d.field_name.replaceAll('_', ' '));
      result[fieldName] = {
        ...result[fieldName],
        Consent: d.consents_to_sell.toString().toUpperCase(),
        Definition: '',
        Companies: '',
        Use: '',
        id: d.id,
      };
    }
  }
  return result;
};

// * create Columns for My G-Data
export const createTableColumns = (data: GDataType[]) => {
  const columns: string[] = [];
  let result = [];
  for (const d of data) {
    const date = dayjs(d.created_at).format('YYYY-MM-DD');
    if (!columns.includes(date)) columns.push(date);
  }
  result = ['Consent', ...columns, 'Consent Value', 'Rewards'];
  const tableColumns: Column<Columns>[] = result.map((col) => ({
    Header: col,
    accessor: col as keyof Columns,
  }));
  return tableColumns;
};

//* rewards table
export const createRewardsState = (data: any) => {
  const result: { [key: string]: UpdateConsentRewardType } = {};
  for (const d of data) {
    result[d.id] = {
      consents_to_sell: d.Consent === 'TRUE',
      demanded_reward_value: Number(d.PDefinedValue),
    };
  }
  return result;
};

//* create history table data
export const createHistoryTableData = (data: ChatHistoryResponseType[]) => {
  const result: ChatHistory[] = data.map((chat) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { answer, images, chat_id, choice, question, timestamp } = chat;

    return {
      answer,
      chat_id,
      choice,
      question,
      date: dayjs(timestamp).format('YYYY-MM-DD'),
      images: JSON.parse(images.replace(/'/g, '"')),
    };
  });
  return result;
};
