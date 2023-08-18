'use client';

import React from 'react';
import { personalData as data } from '@/temp';
import { PERSONALDATATABLECOLUMNS } from '@/constants';
import Table from './Table';
import SidePanel from './SidePanel';

function Main() {
  return (
    <div className="flex flex-row gap-x-2 w-full h-full overflow-hidden">
      <SidePanel />
      <div className="overflow-x-auto w-full h-full">
        <Table data={data} columns={PERSONALDATATABLECOLUMNS} />
      </div>
    </div>
  );
}
export default Main;
