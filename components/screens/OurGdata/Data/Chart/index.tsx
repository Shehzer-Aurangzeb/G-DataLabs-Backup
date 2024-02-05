'use client';

// @ts-ignore
// eslint-disable-next-line no-continue

import React, { useState, useEffect } from 'react';
import LineChart from '@/components/UI/LineChart';
import { DATATIMETYPESOPTIONS } from '@/constants/ourgdata';
import { maxWidth } from '@/constants';
import Select from '@/components/UI/Select';
import { useTheme } from '@/context/ThemeProvider';
import { usePathname, useRouter } from 'next/navigation';
import { DATATABLEDATA } from '@/temp';
import Button from '@/components/UI/Button';

type DataType = {
  x: string[] | undefined;
  y: number[] | undefined;
  type: string;
  mode: string;
  marker: { color: string };
};
export default function Main() {
  const router = useRouter();
  const pathname = usePathname();
  const title = pathname.split('/').pop();
  const graphData = DATATABLEDATA.find((item) => item.name === title);
  const { theme } = useTheme();
  const color = theme === 'dark' ? '#454545' : '#D9D9D9';
  const color2 = theme === 'light' ? '#454545' : '#D9D9D9';
  const [selectedTimeRange, setSelectedTimeRange] = useState('1 DAY');
  const [chartData, setChartData] = useState<DataType[]>([]);
  const [selectedDataType, setSelectedDataType] = useState('1 DAY');

  const handleDataTypeChange = (selectedValue: string) => {
    setSelectedDataType(selectedValue);
  };

  const generateChartData = (timeRange: string) => {
    if (timeRange === '1 DAY') {
      return [
        {
          // @ts-ignore
          x: Object.keys(graphData?.chardata),
          // @ts-ignore
          y: Object.values(graphData?.chardata),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ];
    }
    if (timeRange === '15 HOUR' || timeRange === '5 HOUR' || timeRange === '45 MINS') {
      return [
        {
          y: graphData?.price,
          x: graphData?.timeFrame,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ];
    }

    return [];
  };

  useEffect(() => {
    const data = generateChartData(selectedTimeRange);
    // @ts-ignore
    // eslint-disable-next-line no-continue
    setChartData(data);
  }, [selectedTimeRange]);

  const chartLayout = {
    xaxis: {
      title: 'Time Frame',
      type: 'category',
      tickmode: 'linear',
      color: color2,
    },
    yaxis: { title: 'Y-axis', color: color2 },
    plot_bgcolor: color,
    paper_bgcolor: color,
    responsive: true,
  };

  return (
    <div className={`overflow-x-auto w-full h-full max-w-[${maxWidth}]`}>
      <p className="font-bold text-[28px] dark:text-white justify-center items-center flex mb-4">{title}</p>
      <div className="justify-between flex items-center mx-4">
        <p className="font-bold text-[24px] dark:text-white">Price : {graphData?.prices} $</p>
        <Select
          value={selectedDataType}
          options={DATATIMETYPESOPTIONS}
          className="w-full max-w-[200px]"
          onClick={(item: string) => {
            handleDataTypeChange(item);
            setSelectedTimeRange(item);
            console.log(item);
          }}
        />
      </div>

      <div className="justify-center flex item-center my-4 max-w-full rounded-md mx-2">
        <LineChart data={chartData} layout={chartLayout} />
      </div>
      <div className="flex justify-center items-center gap-x-4 my-4 bottom-2">
        <Button type="submit" className="bg-blue w-full disabled:bg-disabledBlue max-w-[250px]" title="BUY" />
        <Button
          className="bg-[#F5B11A] w-full max-w-[250px]"
          title="SELL"
          onClick={() => {
            router.push(`${pathname}/sell`);
          }}
        />
      </div>
    </div>
  );
}
