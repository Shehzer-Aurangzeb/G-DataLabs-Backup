'use client';

import React, { useMemo } from 'react';
import { CONSENTTABLECOLUMNS } from '@/constants';
import { useMyGData } from '@/hooks/useMyGData';
import NoData from '@/components/UI/NoDataMessage';
import Table from './Table';

function Main() {
  const { cData, updateConsentRewards } = useMyGData();

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
      <Table data={tableData} columns={CONSENTTABLECOLUMNS} updateConsentRewards={updateConsentRewards} />
      {tableData.length === 0 && <NoData />}
    </div>
  );
}
export default Main;
