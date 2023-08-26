import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState, useAppDispatch } from 'state/store';
import { setChatsAction, setUserPromptAction, updateChatAction } from '.';
import { Chat, ChatsSliceType, ResponseChoice, UserPrompt } from './types';

export const useChats = () => {
  const { chats, userPrompt } = useSelector<RootState, ChatsSliceType>((state) => state.chats);
  const dispatch = useAppDispatch();

  const setChats = useCallback(
    (payload: Chat) => {
      dispatch(setChatsAction(payload));
    },
    [dispatch],
  );
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

  return {
    chats,
    setChats,
    userPrompt,
    resetUserPrompt,
    updateChat,
    setUserPrompt,
  };
};
