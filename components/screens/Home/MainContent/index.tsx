'use client';

import React from 'react';
import Container from '@/components/UI/Containers';
import PromptInputBox from '@/components/screens/Home/MainContent/PromptInputBox';
import ActiveChat from '@/components/screens/Home/MainContent/ActiveChat';
import { useChatBot } from '@/hooks/useChatBot';
import { useAuth } from '@/hooks/useAuth';
import { default_profile } from '@/constants/assets';

function MainContent() {
  const { userPrompt, setUserPrompt, chats, fetchBotResponse, isLoading } = useChatBot();
  const { user } = useAuth();

  return (
    <Container type="main">
      {chats && <ActiveChat chats={chats} userProfile={user ? user.image : default_profile} />}
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
