import React from 'react';
import Container from '@/components/UI/Containers';
import PromptInputBox from '@/components/screens/Home/MainContent/PromptInputBox';
import ActiveChat from '@/components/screens/Home/MainContent/ActiveChat';
import { messages } from '@/temp';

function MainContent() {
  return (
    <Container type="main">
      <ActiveChat chats={messages} />
      <PromptInputBox />
    </Container>
  );
}
export default MainContent;
