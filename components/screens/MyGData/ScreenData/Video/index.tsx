'use client';

import React from 'react';
import { ScreenDataType } from '@/state/myGData/types';

interface IProps {
  data: ScreenDataType[];
}
function Video({ data }: IProps) {
  return (
    <div className="overflow-x-auto w-full h-full">
      <h1 className="border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap text-center">
        Screen Data
      </h1>
      {data.map((item: ScreenDataType) => (
        <video key={item.id} controls className="my-2 w-full">
          <source src={item.screenRecording} type="video/mp4" />
          Your browser does not support the video tag.
          <track kind="captions" srcLang="en" label="English captions" />
        </video>
      ))}
    </div>
  );
}
export default Video;
