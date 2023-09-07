'use client';

import React, { useMemo } from 'react';
import ScreenDataVideo from '@/components/screens/MyGData/ScreenData/Video';
import { useMyGData } from '@/hooks/useMyGData';
import { useApp } from '@/context/AppProvider';
import { MYGDATATABLECOLUMNS } from '@/constants';
import NoData from '@/components/UI/NoDataMessage';
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
  const { screenData } = useMyGData();
  return (
    <div className="flex flex-row gap-x-2 w-full h-full">
      <div className="overflow-x-auto w-full h-full">
        <Table data={tableData} columns={gTableColumns.length > 0 ? gTableColumns : MYGDATATABLECOLUMNS} />
        {tableData.length === 0 && <NoData />}
      </div>
      <div className="max-w-[330px]">
        <ScreenDataVideo data={screenData} />
      </div>
    </div>
  );
}

export default Main;
