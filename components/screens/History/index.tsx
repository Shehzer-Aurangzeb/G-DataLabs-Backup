'use client';

import React from 'react';
import { historyData as data } from '@/temp';
import { HISTORYDATATABLECOLUMNS } from '@/constants';
import Table from './Table';

function Main() {
  return (
    <div className="overflow-x-auto w-full h-full mobile:min-h-[350px]">
      <Table data={data} columns={HISTORYDATATABLECOLUMNS} />
    </div>
  );
}
export default Main;
