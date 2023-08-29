'use client';

import React, { useMemo } from 'react';
import { REWARDSTABLECOLUMNS } from '@/constants';
import { useMyGData } from '@/hooks/useMyGData';
import Table from './Table';

function Main() {
  const { rData, updateConsentRewards } = useMyGData();
  const tabelData = useMemo(
    () =>
      Object.entries(rData).map(([key, value]) => ({
        PDataAndScreen: key,
        ...value,
      })),
    [rData],
  );
  return (
    <div className="overflow-x-auto w-full h-full">
      {tabelData.length > 0 && (
        <Table data={tabelData} columns={REWARDSTABLECOLUMNS} updateConsentRewards={updateConsentRewards} />
      )}
    </div>
  );
}
export default Main;
