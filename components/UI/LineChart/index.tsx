'use client';

// @ts-ignore
// eslint-disable-next-line no-continue
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../Loader/Loader';

// @ts-ignore
// eslint-disable-next-line no-continue
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
