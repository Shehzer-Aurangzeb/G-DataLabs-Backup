import React from 'react';
import { maxWidth } from '@/constants';
import { ASSETSTABLEDATA } from '@/temp';
import { ASSETSDATACOLUMNS } from '@/constants/consent';
import ProfileChart from './profileChart';
import Table from './Table';

function Main() {
  return (
    <div className="flex flex-col gap-y-5 w-full h-full">
      <div className={`overflow-x-auto w-full max-w-[${maxWidth}] min-h-[50%]`}>
        <div className="flex justify-between items-center w-full gap-y-1">
          <div>
            <h1 className="text-3xl font-bold dark:text-white">1560.00$</h1>
            <p className="text-xl font-semibold dark:text-white">Total Balance</p>
          </div>
          <div className="min-w-[300px] mx-2 my-6">
            <ProfileChart />
          </div>
        </div>
        <h1 className="text-3xl font-bold items-center flex mb-2 dark:text-white">Assets</h1>
        <Table data={ASSETSTABLEDATA} columns={ASSETSDATACOLUMNS} />
      </div>
    </div>
  );
}

export default Main;
