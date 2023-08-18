'use client';

import React from 'react';
import { rewardsData as data } from '@/temp';
import { REWARDSTABLECOLUMNS } from '@/constants';
import Table from './Table';

function Main() {
  return (
    <div className="overflow-x-auto w-full h-full">
      <Table data={data} columns={REWARDSTABLECOLUMNS} />
    </div>
  );
}
export default Main;
