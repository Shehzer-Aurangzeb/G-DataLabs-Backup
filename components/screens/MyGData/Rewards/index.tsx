'use client';

import React, { useMemo } from 'react';
import { REWARDSTABLECOLUMNS } from '@/constants';
import { useMyGData } from '@/hooks/useMyGData';
import NoData from '@/components/UI/NoDataMessage';
import Table from './Table';

function Main() {
  const { rData, updateConsentRewards } = useMyGData();
  const tableData = useMemo(
    () =>
      Object.entries(rData).map(([key, value]) => ({
        PDataAndScreen: key,
        ...value,
      })),
    [rData],
  );
  return (
    <div className="overflow-x-auto w-full h-full">
      <Table data={tableData} columns={REWARDSTABLECOLUMNS} updateConsentRewards={updateConsentRewards} />
      {tableData.length === 0 && <NoData />}
    </div>
  );
}
export default Main;
