'use client';

import React from 'react';
import Container from '@/components/UI/Containers';
import { history } from '@/temp';
import { add } from '@/constants/assets';
import { groupMessagesByDate } from '@/lib';
import Button from '@/components/UI/Button';
import ChatHistory from './ChatHistory';

function SidePanel() {
  const groupedChatHistory = groupMessagesByDate(history);

  return (
    <Container type="side" className="pr-3 pb-5">
      <h3 className="font-sans text-xl text-primary font-bold px-2 pt-8 tablet:pt-10">Recent Chat History</h3>
      <ChatHistory groupedChatHistory={groupedChatHistory} />
      <Button title="New Chat" onClick={() => {}} className="bg-blue w-full mt-9" isLoading={false} icon={add} />
    </Container>
  );
}

export default SidePanel;
