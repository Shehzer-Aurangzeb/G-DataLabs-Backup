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
    <div className="flex flex-row gap-x-2 w-full h-full overflow-hidden">
      <SidePanel savePersonalData={savePersonalData} isLoading={isLoading} />
      <div className="overflow-x-auto w-full h-full">
        {tableData.length > 0 && <Table data={tableData} columns={PERSONALDATATABLECOLUMNS} />}
      </div>
    </div>
  );
}
export default Main;
