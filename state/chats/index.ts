import { createSlice } from '@reduxjs/toolkit';
import { Chat, ChatsSliceType, ResponseChoice, UserPrompt } from './types';

const initialState: ChatsSliceType = {
  chats: [],
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
  },
});

export const { setChatsAction, setUserPromptAction, updateChatAction } = chatSlice.actions;

export default chatSlice.reducer;
