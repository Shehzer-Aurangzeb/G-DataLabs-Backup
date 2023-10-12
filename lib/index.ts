/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-syntax */
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { Column } from 'react-table';
import {
  TableName,
  PersonalDataType,
  Columns,
  GDataType,
  ChatHistoryResponseType,
  ScreenDataResponseType,
  RecentChatHistoryResponseType,
} from '@/types';
import { THistory, Chat, ChatHistory, TGroupedChatHistory } from '@/state/chats/types';
import { PersonalDataSchemaType } from '@/schema';
import { Data, ScreenDataType, UpdateConsentRewardType } from '@/state/myGData/types';
import { DESCRIPTIONOFVARIABLES } from '@/constants';

const addToGroup = (categorizedMessagesMap: TGroupedChatHistory, groupName: string, message: THistory) => {
  if (!categorizedMessagesMap[groupName]) {
    categorizedMessagesMap[groupName] = [];
  }
  categorizedMessagesMap[groupName].push(message);
};

export const groupMessagesByDate = (messages: THistory[]) => {
  if (messages.length === 0) return;
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
    if (daysDiffernce === 0) {
      addToGroup(CategorizedMessagesMap, 'Today', msg);
      return;
    }
    if (daysDiffernce === 1) {
      addToGroup(CategorizedMessagesMap, 'Yesterday', msg);
      return;
    }
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
  // eslint-disable-next-line consistent-return
  return CategorizedMessagesMap;
};

//* capatalize string
export const capitalize = (arg: string) => {
  const text = arg.split(' ').filter((item) => item.length > 0);
  let result = '';
  if (text.length > 0) {
    result = text.map((word) => word[0].toUpperCase() + word.slice(1, word.length)).join(' ');
  }

  return result;
};

//* create a payload for personal data post api
export const createPayload = (personal_data: PersonalDataSchemaType) =>
  Object.entries(personal_data).map(([key, value]) => ({
    value: typeof value === 'object' ? `${value}` : value.toString(),
    personal_data_field: {
      field_name: key.toUpperCase(),
    },
  }));

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
      const fieldName = d.personal_data_field.field_name.toLowerCase();
      const { files } = d;
      result[date] = {
        ...result[date],
        [fieldName]: fieldName === 'photos' && files.length > 0 ? files : d.value,
      };
    }
  }
  if (tableName === TableName.GData) {
    for (const d of data) {
      const fieldName = capitalize(d.field_name.replaceAll('_', ' '));

      for (const value of d.values) {
        const date = dayjs(value.created_at).format('YYYY-MM-DD');
        result[fieldName] = {
          ...result[fieldName],
          [date]: fieldName === 'Photos' ? value.files.map((file: string) => file) : value.value,
          // fieldName === 'Photos' ? value.files.map((file: string) => file) :
        };
      }
      result[fieldName] = {
        ...result[fieldName],
        'Consent Value': d.consents_to_sell.toString().toUpperCase(),
        Rewards: d.demanded_reward_value,
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
        Definition: DESCRIPTIONOFVARIABLES[d.field_name.toLowerCase()],
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
  let result: string[] = [];
  let index = 0;
  //* find index so that map will be run that many amount of time
  for (const d of data) {
    const values = d.values.length;
    if (values > data[index].values.length) {
      index = data.indexOf(d);
    }
  }
  const columns: string[] = data[index].values
    .map((item) => dayjs(item.created_at).format('YYYY-MM-DD'))
    .filter((value, ind, self) => self.indexOf(value) === ind);

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
    const { answer, images, chat_id, choice, question, timestamp } = chat;

    return {
      answer,
      chatID: chat_id,
      choice,
      question,
      date: dayjs(timestamp).format('YYYY-MM-DD'),
      images: images != null ? JSON.parse(images.replace(/'/g, '"')) : [],
    };
  });
  return result;
};

//* create screen data
export const createScreenData = (arg: ScreenDataResponseType[]): ScreenDataType[] =>
  arg.map((screenData) => {
    const { id, screen_recording_url, camera_recording_url, timestamp, data } = screenData;
    return {
      id,
      screenRecording: screen_recording_url,
      cameraRecording: camera_recording_url ?? '',
      date: dayjs(timestamp).format('YYYY-MM-DD'),
      detail: data,
    };
  });

//* create default avatar image

export const generateAvatar = (firstName: string) => {
  const initial = firstName[0].toUpperCase();
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = 100;
  canvas.height = 100;
  if (context) {
    // Draw background
    context.fillStyle = '#F3511C';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = 'bold 50px DM-Sans';
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initial, canvas.width / 2, canvas.height / 2);
  }
  return canvas.toDataURL('image/png');
};

export const createRecentChatHistory = (payload: RecentChatHistoryResponseType[]) =>
  payload.map((chats) => {
    const messages = [];
    const descOrderedChats = chats.history.sort((a, b) => (dayjs(a.timestamp).isAfter(dayjs(b.timestamp)) ? 1 : -1));
    for (const chat of descOrderedChats) {
      const response = createChat({
        text: chat.answer,
        images:
          chat.images != null ? JSON.parse(chat.images.replace(/'/g, '"')).map((img: string) => ({ url: img })) : [],
        isBotResponse: true,
        isLoading: false,
      });
      const question = createChat({
        text: chat.question,
        images: [],
        isBotResponse: false,
        isLoading: false,
      });
      messages.push(question);
      messages.push(response);
    }

    return {
      title: chats.name,
      date: dayjs(chats.created_at).format('YYYY-MM-DD HH:mm:ss'),
      id: chats.id,
      messages,
    } as THistory;
  });
