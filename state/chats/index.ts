import { createSlice } from '@reduxjs/toolkit';
import { TGroupedChatHistory, Chat, ChatHistory, ChatsSliceType, ResponseChoice, UserPrompt } from './types';

const initialState: ChatsSliceType = {
  chats: [],
  chatHistory: [],
  recentChatHistory: {},
  // selectedRecentChat:
  userPrompt: {
    data: '',
    choice: ResponseChoice.TEXT,
  },
};

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChatsAction: (
      state,
      action: {
        payload: Chat;
      },
    ) => ({
      ...state,
      chats: [...state.chats, action.payload],
    }),
    updateChatAction: (
      state,
      action: {
        payload: Chat;
      },
    ) => ({
      ...state,
      chats: state.chats.map((chat) => {
        if (chat.messageID === action.payload.messageID) {
          return action.payload;
        }
        return chat;
      }),
    }),
    setUserPromptAction: (
      state,
      action: {
        payload: UserPrompt;
      },
    ) => ({
      ...state,
      userPrompt: action.payload,
    }),
    setChatHistoryAction: (
      state,
      action: {
        payload: ChatHistory[];
      },
    ) => ({
      ...state,
      chatHistory: action.payload,
    }),
    deleteChatsActions: (state) => ({
      ...state,
      chats: [],
    }),
    setRecentChatHistoryAction: (
      state,
      action: {
        payload: TGroupedChatHistory;
      },
    ) => ({
      ...state,
      recentChatHistory: action.payload,
    }),
    startNewChatAction: (state) => ({
      ...state,
      chats: [],
    }),
    openPreviousChatsAction: (
      state,
      action: {
        payload: Chat[];
      },
    ) => ({
      ...state,
      chats: action.payload,
    }),
  },
});

export const {
  setChatsAction,
  setUserPromptAction,
  updateChatAction,
  setChatHistoryAction,
  deleteChatsActions,
  setRecentChatHistoryAction,
  startNewChatAction,
  openPreviousChatsAction,
} = chatSlice.actions;

export default chatSlice.reducer;
