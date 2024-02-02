'use client';

// @ts-ignore

import React, { useState, useEffect } from 'react';
import LineChart from '@/components/UI/LineChart';
import { DATATIMETYPESOPTIONS } from '@/constants/ourgdata';
import { maxWidth } from '@/constants';
import Select from '@/components/UI/Select';
import { useTheme } from '@/context/ThemeProvider';
import { usePathname } from 'next/navigation';
import { DATATABLEDATA } from '@/temp';
import Button from '@/components/UI/Button';
type DataType = {
  x: string[];
  y: number[];
  type: string;
  mode: string;
  marker: { color: string };
};
export default function Main() {
  const pathname = usePathname();
  const title = pathname.split('/').pop();
  const grapghData = DATATABLEDATA.find((item) => item.name === title);
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
          y: grapghData?.price,
          x: grapghData?.timeFrame,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ];
    }
    if (timeRange === '15 HOUR' || timeRange === '5 HOUR' || timeRange === '45 MINS') {
      return [
        {
          y: grapghData?.price,
          x: grapghData?.timeFrame,
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
    //ts-ignore
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
    width: 840,
  };

  return (
    <div className={`overflow-x-auto w-full h-full max-w-[${maxWidth}]`}>
      <p className="font-bold text-[28px] dark:text-white justify-center items-center flex mb-4">{title}</p>
      <div className="justify-between flex items-center mx-4">
        <p className="font-bold text-[24px] dark:text-white">Price : {grapghData?.prices}</p>
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

      <div className="justify-center flex item-center my-4 max-w-[900px] mobile:max-w-[500px] laptop:max-w-[800px] rounded-md mx-2">
        <LineChart data={chartData} layout={chartLayout} />
      </div>
      <div className="flex justify-center items-center gap-x-4 my-4 bottom-2">
        <Button type="submit" className="bg-blue w-full disabled:bg-disabledBlue max-w-[250px]" title="BUY" />
        <Button type="submit" className="bg-[#F5B11A] w-full max-w-[250px]" title="SELL" />
      </div>
    </div>
  );
}
