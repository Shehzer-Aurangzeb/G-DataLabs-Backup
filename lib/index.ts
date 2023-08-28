/* eslint-disable no-restricted-syntax */
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { THistory, TGroupedChatHistory, TableName, PersonalDataType } from '@/types';
import { PersonalDataSchemaType } from '@/schema';
import { Chat } from '@/state/chats/types';
import { Data } from '@/state/myGData/types';

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

export const craeteTableData = (arg: { tableName: string; data: PersonalDataType[] }) => {
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
  return result;
};
