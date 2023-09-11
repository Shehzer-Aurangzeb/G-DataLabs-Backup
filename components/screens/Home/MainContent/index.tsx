import React from 'react';
import Container from '@/components/UI/Containers';
import PromptInputBox from '@/components/screens/Home/MainContent/PromptInputBox';
import ActiveChat from '@/components/screens/Home/MainContent/ActiveChat';
import { default_profile } from '@/constants/assets';
import { Chat, UserPrompt } from '@/state/chats/types';
import { UserType } from '@/state/user/types';

type TProps = {
  userPrompt: UserPrompt;
  setUserPrompt: (payload: UserPrompt) => void;
  sendPrompt: () => void;
  isLoading: boolean;
  chats: Chat[];
  user: UserType | undefined;
  isAuthenticated: boolean;
};

function MainContent({ user, userPrompt, sendPrompt, setUserPrompt, isLoading, chats, isAuthenticated }: TProps) {
  return (
    <Container type="main">
      {chats && (
        <ActiveChat chats={chats} userProfile={user ? user.image : default_profile} isLoggedIn={isAuthenticated} />
      )}
      <PromptInputBox
        userPrompt={userPrompt}
        setUserPrompt={setUserPrompt}
        sendPrompt={sendPrompt}
        isLoading={isLoading}
      />
    </Container>
  );
}
export default MainContent;
