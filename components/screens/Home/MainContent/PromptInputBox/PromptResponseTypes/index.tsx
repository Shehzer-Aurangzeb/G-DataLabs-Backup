'use client';

import React from 'react';
import { PROMPTRESPONSEOPTIONS } from '@/constants';
import { TPROPTION } from '@/types';
import { ResponseChoice } from '@/state/chats/types';

interface IProps {
  selectedResponseType: ResponseChoice;
  setSelectedResponseType: (responseType: TPROPTION) => void;
}

function PromptResponseTypes({ selectedResponseType, setSelectedResponseType }: IProps) {
  return (
    <div className="flex gap-x-3 ml-2 w-full mobile:flex-col dark:bg-dark">
      {PROMPTRESPONSEOPTIONS.map((option) => (
        <button
          key={option.title}
          type="button"
          className={`rounded-b-xl w-[30%] max-w-[250px] py-3 cursor-pointer mobile:w-[211px] mobile:text-[14px] mobile:px-[2px] mobile:my-[2px] mobile:py-2 ${
            selectedResponseType === option.value && 'shadow-md '
          } dark:bg-[${option.darkColor}] bg-[${option.color}] `}
          style={{
            backgroundColor: option.color,
          }}
          onClick={() => setSelectedResponseType(option)}
        >
          <p className="text-white font-sans font-medium text-lg laptop:text-base text-center mobile:text-xs">
            {' '}
            {option.title}
          </p>
        </button>
      ))}
    </div>
  );
}
export default PromptResponseTypes;
