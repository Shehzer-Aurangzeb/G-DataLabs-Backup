'use client';

import React from 'react';
import { PROMPTRESPONSEOPTIONS } from '@/constants';
import { TPROPTION } from '@/types';

interface IProps {
  selectedResponseType: TPROPTION;
  setSelectedResponseType: (responseType: TPROPTION) => void;
}

function PromptResponseTypes({ selectedResponseType, setSelectedResponseType }: IProps) {
  return (
    <div className="flex gap-x-3 ml-2 w-full">
      {PROMPTRESPONSEOPTIONS.map((option) => (
        <button
          key={option.title}
          type="button"
          className={`rounded-b-xl w-[30%] max-w-[250px] py-3 cursor-pointer ${
            selectedResponseType === option && 'shadow-md'
          }`}
          style={{
            backgroundColor: option.color,
          }}
          onClick={() => setSelectedResponseType(option)}
        >
          <p className="text-white font-sans font-medium text-xl laptop:text-base text-center"> {option.title}</p>
        </button>
      ))}
    </div>
  );
}
export default PromptResponseTypes;
