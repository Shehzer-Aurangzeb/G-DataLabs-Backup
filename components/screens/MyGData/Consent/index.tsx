'use client';

import React from 'react';
import { consentData as data } from '@/temp';
import { CONSENTTABLECOLUMNS } from '@/constants';
import Table from './Table';

function Main() {
  return (
    <div className="overflow-x-auto w-full h-full">
      <Table data={data} columns={CONSENTTABLECOLUMNS} />
    </div>
  );
}
export default Main;
