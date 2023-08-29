'use client';

import React from 'react';
import { mygData as data, screenData } from '@/temp';
import { MYGDATATABLECOLUMNS } from '@/constants';
import ScreenDataVideo from '@/components/screens/MyGData/ScreenData/ScreenDataVideos';
import Table from './Table';

function Main() {
  return (
    <div className="flex flex-row gap-x-2 w-full h-full">
      <div className="overflow-x-auto w-full h-full">
        <Table data={data} columns={MYGDATATABLECOLUMNS} />
      </div>
      <div className="w-[70%]">
        <ScreenDataVideo data={screenData} />
      </div>
    </div>
  );
}

export default Main;
