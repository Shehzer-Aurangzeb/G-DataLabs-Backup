export enum ResponseChoice {
  BOTH = 'both',
  TEXT = 'answer',
  IMAGES = 'images',
}

export type Chat = {
  isBotResponse: boolean;
  messageID: string;
  isLoading: boolean;
  content: {
    text: string;
    images: string[];
  };
};
export type ChatHistory = {
  answer: string;
  chat_id: number;
  choice: string | null;
  images: string[];
  question: string;
  date: string;
};
export type UserPrompt = {
  data: string;
  choice: ResponseChoice;
};

export type ChatsSliceType = {
  chats: Chat[];
  userPrompt: UserPrompt;
  chatHistory: ChatHistory[];
};
