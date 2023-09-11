'use client';

import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import dayjs from 'dayjs';
import { api } from '@/config';
import { useLoading } from '@/state/loading/hooks';
import { useChats } from '@/state/chats/hooks';
import { createChat } from '@/lib';
import { useUser } from '@/state/user/hooks';

export const useChatBot = () => {
  const { isLoading, setIsLoading } = useLoading();
  const {
    chats,
    userPrompt,
    setUserPrompt,
    setChats,
    resetUserPrompt,
    updateChat,
    recentChatHistory,
    startNewChat,
    openPreviousChats,
    activeChatID,
    setActiveChatID,
  } = useChats();
  const { user } = useUser();

  const fetchNewChatID = useCallback(async () => {
    try {
      const { data } = await api.post('api/chat/', {
        name: `Today Chat ${dayjs().format('YYYY-MM-DD')}`,
      });
      if (data.data.id) setActiveChatID(data.data.id);
      return data.data.id;
    } catch (e) {
      // console.log('e :>> ', e);
      return e;
    }
  }, [setActiveChatID]);

  const fetchBotResponse = useCallback(async () => {
    try {
      const userMessage = createChat({ isBotResponse: false, isLoading: false, text: userPrompt.data, images: [] });
      const botResponseLoading = createChat({ isBotResponse: true, isLoading: true, text: '', images: [] });
      setChats(userMessage);
      setChats(botResponseLoading);
      setIsLoading(true);
      resetUserPrompt();
      let chatID = activeChatID;
      if (!chatID) chatID = await fetchNewChatID();
      const payload = user ? { ...userPrompt, chat_id: chatID } : userPrompt;
      const { data } = await api.post('get-answer-images', payload);
      let images = [];
      let text = '';
      // @ts-ignore
      if (data.images) images = data.images.map(({ url }) => url);
      if (data.response) text = data.response;

      updateChat({
        ...botResponseLoading,
        isLoading: false,
        content: {
          text,
          images,
        },
      });
    } catch (e) {
      if (e instanceof AxiosError) toast.error(e.response?.data.error);
      else toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, userPrompt, setChats, resetUserPrompt, updateChat, user, activeChatID]);

  const newChat = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.post('api/chat/', {
        name: `Today Chat ${dayjs().format('YYYY-MM-DD')}`,
      });
      if (data.data.id) {
        setActiveChatID(data.data.id);
        startNewChat();
      }
    } catch (e) {
      // console.log('e :>> ', e);
    } finally {
      setIsLoading(false);
    }
  }, [setActiveChatID, setIsLoading, startNewChat]);

  return {
    fetchBotResponse,
    isLoading,
    chats,
    userPrompt,
    setUserPrompt,
    recentChatHistory,
    newChat,
    openPreviousChats,
  };
};
