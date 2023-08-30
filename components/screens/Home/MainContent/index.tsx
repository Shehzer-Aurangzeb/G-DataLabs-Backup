'use client';

import React from 'react';
import Container from '@/components/UI/Containers';
import PromptInputBox from '@/components/screens/Home/MainContent/PromptInputBox';
import ActiveChat from '@/components/screens/Home/MainContent/ActiveChat';
import { useChatBot } from '@/hooks/useChatBot';

function MainContent() {
  const { userPrompt, setUserPrompt, chats, fetchBotResponse, isLoading } = useChatBot();

  return (
    <Container type="main">
      {chats ? <ActiveChat chats={chats} /> : <p>Loading</p>}
      <PromptInputBox
        userPrompt={userPrompt}
        setUserPrompt={setUserPrompt}
        sendPrompt={fetchBotResponse}
        isLoading={isLoading}
      />
    </Container>
  );
}
export default MainContent;
