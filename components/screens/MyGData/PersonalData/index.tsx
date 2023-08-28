'use client';

import React from 'react';
import { personalData as data } from '@/temp';
import { PERSONALDATATABLECOLUMNS } from '@/constants';
import { useMyGData } from '@/hooks/useMyGData';
import Table from './Table';
import SidePanel from './SidePanel';

function Main() {
  const { savePersonalData, isLoading } = useMyGData();
  return (
    <div className="flex flex-row gap-x-2 w-full overflow-hidden  h-full mobile:flex-col-reverse mobile:">
      <SidePanel savePersonalData={savePersonalData} isLoading={isLoading} />
      <div className="overflow-x-auto w-full h-full mobile:min-h-[350px]">
        <Table data={data} columns={PERSONALDATATABLECOLUMNS} />
      </div>
    </div>
  );
}
export default Main;
