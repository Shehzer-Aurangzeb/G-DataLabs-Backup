'use client';

import React, { useMemo } from 'react';
// import ScreenDataVideo from '@/components/screens/MyGData/ScreenData/Video';
import { useMyGData } from '@/hooks/useMyGData';
import { useApp } from '@/context/AppProvider';
import { MYGDATATABLECOLUMNS, maxWidth } from '@/constants';
import ScreenData from './ScreenData';
import Table from './Table';

function Main() {
  const { gData } = useMyGData();
  const { gTableColumns } = useApp();
  const tableData = useMemo(
    () =>
      Object.entries(gData).map(([key, value]) => ({
        Consent: key,
        ...value,
      })),
    [gData],
  );
  return (
    <div className="flex flex-col gap-y-5 w-full h-full">
      <div className={`overflow-x-auto w-full max-w-[${maxWidth}] min-h-[50%]`}>
        <Table data={tableData} columns={gTableColumns.length > 0 ? gTableColumns : MYGDATATABLECOLUMNS} />
      </div>
      <ScreenData />
    </div>
  );
}

export default Main;
