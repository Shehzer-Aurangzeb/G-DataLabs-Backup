import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState, useAppDispatch } from 'state/store';
import { deleteChatsActions, setChatHistoryAction, setChatsAction, setUserPromptAction, updateChatAction } from '.';
import { Chat, ChatHistory, ChatsSliceType, ResponseChoice, UserPrompt } from './types';

export const useChats = () => {
  const { chats, userPrompt, chatHistory } = useSelector<RootState, ChatsSliceType>((state) => state.chats);
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

  return {
    chats,
    userPrompt,
    chatHistory,
    resetUserPrompt,
    updateChat,
    setUserPrompt,
    setChatHistory,
    setChats,
    deleteChats,
  };
};
