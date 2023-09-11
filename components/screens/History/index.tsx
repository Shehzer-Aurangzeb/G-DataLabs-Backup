'use client';

import React from 'react';
import { HISTORYDATATABLECOLUMNS, maxWidth } from '@/constants';
import { useChats } from '@/state/chats/hooks';
import NoData from '@/components/UI/NoDataMessage';
import { no_chats } from '@/constants/assets';
import Table from './Table';

function Main() {
  const { chatHistory } = useChats();
  return (
    <div className={`overflow-x-auto w-full h-full mobile:min-h-[350px] max-w-[${maxWidth}]`}>
      <Table data={chatHistory} columns={HISTORYDATATABLECOLUMNS} />
      {chatHistory.length === 0 && <NoData message="No chat history to display" icon={no_chats} />}
    </div>
  );
}
export default Main;
