import React, { memo } from 'react';
import Container from '@/components/UI/Containers';
import { history } from '@/temp';
import { add } from '@/constants/assets';
import { groupMessagesByDate } from '@/lib';
import Button from '@/components/UI/Button';
import ChatHistory from './ChatHistory';

type TProps = {
  isAuthenticated: boolean;
};

function SidePanel({ isAuthenticated }: TProps) {
  const groupedChatHistory = groupMessagesByDate(history);
  return (
    <Container type="side" className={`pb-5 ${!isAuthenticated && 'hidden'}`}>
      <h3 className="font-sans text-xl text-primary font-bold px-2 pt-8 tablet:pt-10">Recent Chat History</h3>
      <ChatHistory groupedChatHistory={groupedChatHistory} />
      <Button title="New Chat" onClick={() => {}} className="bg-blue w-full mt-9" isLoading={false} icon={add} />
    </Container>
  );
}

export default memo(SidePanel);
