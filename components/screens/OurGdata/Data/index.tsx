'use client';

import React, { useMemo } from 'react';
import { maxWidth } from '@/constants';
import { DATATABLECOLUMNS } from '@/constants/consent';
import { DATATABLEDATA } from '@/temp';
import NoData from '@/components/UI/NoDataMessage';
import Table from './Table';

function Main() {
  const tableData = useMemo(
    () =>
      DATATABLEDATA.map((item) => ({
        ...item,
        price: item.prices, // Assuming you want to rename prices to price
      })),
    [DATATABLEDATA],
  );
  console.log(tableData);
  return (
    <div className={`overflow-x-auto w-full h-full max-w-[${maxWidth}]`}>
      <Table data={tableData} columns={DATATABLECOLUMNS} />
      {tableData.length === 0 && <NoData />}
    </div>
  );
}
export default Main;
