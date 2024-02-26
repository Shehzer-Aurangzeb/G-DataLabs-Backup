'use client';

import React, { useEffect, useState } from 'react';
import { maxWidth } from '@/constants';
import { DATATABLECOLUMNS } from '@/constants/consent';
import NoData from '@/components/UI/NoDataMessage';
import { DatatableType } from '@/types';
import { io } from 'socket.io-client';
import moment from 'moment-timezone';
import Table from './Table';

function Main() {
  const socket = io(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}market_place`, {
    transports: ['websocket', 'polling'],
    reconnection: true,
  });
  const [tableData, setTableData] = useState<DatatableType>([]);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('123');
      socket.emit('consent_averages', {
        interval: [moment().format('YYYY-MM-DD 00:00:00'), moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00')],
      });
    });

    socket.on('consent_averages', (data) => {
      console.log(data);
      if (data) {
        setTableData(
          data?.data?.map((item: any) => ({
            name: item.field_name,
            price: item.average_price,
          })),
        );
      }
      return true;
    });
    socket.on('disconnect', (reason) => {
      console.log('Disconnected from WebSocket server:', reason);
    });

    socket.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={`overflow-x-auto w-full h-full max-w-[${maxWidth}]`}>
      <Table data={tableData} columns={DATATABLECOLUMNS} />
      {tableData.length === 0 && <NoData />}
    </div>
  );
}
export default Main;
