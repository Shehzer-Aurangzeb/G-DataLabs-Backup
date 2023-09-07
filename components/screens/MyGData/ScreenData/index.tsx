'use client';

import React from 'react';
import { useMyGData } from '@/hooks/useMyGData';
import NoData from '@/components/UI/NoDataMessage';
import ScreenDataVideo from './Video';

function Main() {
  const { screenData } = useMyGData();
  return (
    <div className="h-full w-full">
      <ScreenDataVideo data={screenData} />
      {screenData.length === 0 && <NoData />}
    </div>
  );
}
export default Main;
