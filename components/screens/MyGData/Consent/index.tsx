'use client';

import React, { useMemo } from 'react';
import { CONSENTTABLECOLUMNS } from '@/constants';
import { useMyGData } from '@/hooks/useMyGData';
import Table from './Table';

function Main() {
  const { cData } = useMyGData();
  const tableData = useMemo(
    () =>
      Object.entries(cData).map(([key, value]) => ({
        PDataAndWeb: key,
        ...value,
      })),
    [cData],
  );
  return (
    <div className="overflow-x-auto w-full h-full">
      <Table data={tableData} columns={CONSENTTABLECOLUMNS} />
    </div>
  );
}
export default Main;
