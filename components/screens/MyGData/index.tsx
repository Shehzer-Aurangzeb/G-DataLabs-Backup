'use client';

import React, { useMemo } from 'react';
import { useMyGData } from '@/hooks/useMyGData';
import { useApp } from '@/context/AppProvider';
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
    <div className="overflow-x-auto w-full h-full">
      <Table data={tableData} columns={gTableColumns} />
    </div>
  );
}

export default Main;
