'use client';

import React from 'react';
import { useMyGData } from '@/hooks/useMyGData';
import ScreenDataVideo from './Video';

function Main() {
  const { screenData } = useMyGData();
  return <ScreenDataVideo data={screenData} />;
}
export default Main;
