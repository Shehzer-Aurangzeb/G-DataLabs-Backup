'use client';

import React from 'react';
import { mygData as data } from '@/temp';
import { MYGDATATABLECOLUMNS } from '@/constants';
import Table from './Table';

function Main() {
  return (
    <div className="overflow-x-auto w-full h-full">
      <Table data={data} columns={MYGDATATABLECOLUMNS} />
    </div>
  );
}

export default Main;
