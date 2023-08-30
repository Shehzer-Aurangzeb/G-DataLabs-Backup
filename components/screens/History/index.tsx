'use client';

import React from 'react';
import { HISTORYDATATABLECOLUMNS } from '@/constants';
import { useChats } from '@/state/chats/hooks';
import Table from './Table';

function Main() {
  const { chatHistory } = useChats();
  return (
    <div className="overflow-x-auto w-full h-full mobile:min-h-[350px]">
      <Table data={chatHistory} columns={HISTORYDATATABLECOLUMNS} />
    </div>
  );
}
export default Main;
