import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState, useAppDispatch } from 'state/store';
import { TGroupedChatHistory, Chat, ChatHistory, ChatsSliceType, ResponseChoice, UserPrompt } from './types';
import {
  deleteChatsActions,
  setChatHistoryAction,
  setChatsAction,
  setUserPromptAction,
  updateChatAction,
  setRecentChatHistoryAction,
  startNewChatAction,
  openPreviousChatsAction,
} from '.';

export const useChats = () => {
  const { chats, userPrompt, chatHistory, recentChatHistory } = useSelector<RootState, ChatsSliceType>(
    (state) => state.chats,
  );
  const dispatch = useAppDispatch();

  const setChats = useCallback(
    (payload: Chat) => {
      dispatch(setChatsAction(payload));
    },
    [dispatch],
  );
  const deleteChats = useCallback(() => {
    dispatch(deleteChatsActions());
  }, [dispatch]);
  const updateChat = useCallback(
    (payload: Chat) => {
      dispatch(updateChatAction(payload));
    },
    [dispatch],
  );
  const setUserPrompt = useCallback(
    (payload: UserPrompt) => {
      dispatch(setUserPromptAction(payload));
    },
    [dispatch],
  );
  const resetUserPrompt = useCallback(() => {
    dispatch(
      setUserPromptAction({
        data: '',
        choice: ResponseChoice.TEXT,
      }),
    );
  }, [dispatch]);
  const setChatHistory = useCallback(
    (payload: ChatHistory[]) => {
      dispatch(setChatHistoryAction(payload));
    },
    [dispatch],
  );
  const setRecentChatHistory = useCallback(
    (payload: TGroupedChatHistory) => {
      dispatch(setRecentChatHistoryAction(payload));
    },
    [dispatch],
  );
  const startNewChat = useCallback(() => {
    dispatch(startNewChatAction());
  }, [dispatch]);
  const openPreviousChats = useCallback(
    (payload: Chat[]) => {
      dispatch(openPreviousChatsAction(payload));
    },
    [dispatch],
  );

  return {
    chats,
    userPrompt,
    chatHistory,
    recentChatHistory,
    resetUserPrompt,
    updateChat,
    setUserPrompt,
    setChatHistory,
    setChats,
    deleteChats,
    startNewChat,
    setRecentChatHistory,
    openPreviousChats,
  };
};
