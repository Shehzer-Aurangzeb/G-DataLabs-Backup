'use client';

import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { api } from '@/config';
import { useLoading } from '@/state/loading/hooks';
import { useChats } from '@/state/chats/hooks';
import { createChat } from '@/lib';

export const useChatBot = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { chats, userPrompt, setUserPrompt, setChats, resetUserPrompt, updateChat } = useChats();

  const fetchBotResponse = useCallback(async () => {
    try {
      const userMessage = createChat({ isBotResponse: false, isLoading: false, text: userPrompt.data, images: [] });
      const botResponseLoading = createChat({ isBotResponse: true, isLoading: true, text: '', images: [] });
      setChats(userMessage);
      setChats(botResponseLoading);
      setIsLoading(true);
      resetUserPrompt();
      const { data } = await api.post('get-answer-images', userPrompt);
      // @ts-ignore
      const images = data.images.map(({ url }) => url);
      updateChat({
        ...botResponseLoading,
        isLoading: false,
        content: {
          text: '',
          images,
        },
      });
    } catch (e) {
      if (e instanceof AxiosError) toast.error(e.response?.data.error);
      else toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, userPrompt, setChats, resetUserPrompt, updateChat]);

  return {
    fetchBotResponse,
    isLoading,
    chats,
    userPrompt,
    setUserPrompt,
  };
};
