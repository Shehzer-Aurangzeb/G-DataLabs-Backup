'use client';

import React from 'react';
import { screenData } from '@/temp';
import ScreenDataVideo from './ScreenDataVideos';

function Main() {
  return (
    <div className="flex flex-col gap-y-2 w-full h-full">
      <ScreenDataVideo data={screenData} />
    </div>
  );
}
export default Main;
