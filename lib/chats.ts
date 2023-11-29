/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import { TGroupedChatHistory, THistory } from '@/state/chats/types';

export const findActiveChats = (recentChatHistory: TGroupedChatHistory, targetID: number) => {
  let chatHistory: THistory | undefined;
  for (const [, value] of Object.entries(recentChatHistory)) {
    for (const chats of value) {
      if (chats.id !== targetID) continue;
      else {
        chatHistory = chats;
        break;
      }
    }
  }
  return chatHistory;
};
