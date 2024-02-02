'use client';

// @ts-nocheck
/* eslint-disable */

import React from 'react';
import Container from '@/components/UI/Containers';
import dynamic from 'next/dynamic';
import Loader from '../Loader/Loader';

const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
});
export default function Main({ data, layout }: any) {
  const chartConfig = {
    responsive: true,
    displayModeBar: false,
  };
  return data?.length !== 0 ? <Plot data={data} layout={layout} config={chartConfig} /> : <Loader />;
}
