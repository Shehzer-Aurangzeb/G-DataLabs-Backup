'use client';

import React, { useMemo } from 'react';
import { PERSONALDATATABLECOLUMNS } from '@/constants';
import { useMyGData } from '@/hooks/useMyGData';
import Table from './Table';
import SidePanel from './SidePanel';

function Main() {
  const { savePersonalData, isLoading, personalData } = useMyGData();
  const tableData = useMemo(
    () =>
      Object.entries(personalData).map(([key, value]) => ({
        date: key,
        ...value,
      })),
    [personalData],
  );
  return (
    <div className="flex flex-row gap-x-2 w-full overflow-hidden  h-full mobile:flex-col-reverse">
      <SidePanel savePersonalData={savePersonalData} isLoading={isLoading} />
      <div className="overflow-x-auto w-full h-full mobile:min-h-[350px]">
        <Table data={tableData} columns={PERSONALDATATABLECOLUMNS} />
      </div>
    </div>
  );
}
export default Main;
