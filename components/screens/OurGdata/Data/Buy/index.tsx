'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { DATATABLEDATA } from '@/temp';
import { BUYDATACOLUMNS } from '@/constants/consent';
import Table from '../Sell/Table';

function Main() {
  const pathname = usePathname();
  const title = pathname.split('/');
  const titleValue = title[title.length - 2];
  const data = [DATATABLEDATA.find((item) => item.name === titleValue)];
  console.log(data);
  const updatedata = data.map((item: any) => ({
    name: item.name,
    unit: item.limitPrice,
    price: item.prices,
    total: item.limitPrice * item.prices,
    status: item.status,
  }));
  console.log('updatedata', updatedata);
  const [newData, setNewData] = useState(updatedata);

  const handleBuy = () => {
    if (data && data.length > 0) {
      const NewData = newData.map((item) => ({
        ...item,
        status: 'interested company',
      }));
      setNewData(NewData);
      console.log('newData', newData);
    }
  };

  return (
    <div>
      <Table data={newData} columns={BUYDATACOLUMNS} handleBuy={handleBuy} />
    </div>
  );
}

export default Main;
