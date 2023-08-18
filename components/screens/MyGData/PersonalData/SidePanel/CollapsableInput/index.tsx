'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { arrow } from '@/constants/assets';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function CollapsableInput({ name, value, onChange, title, type, placeholder, readOnly }: IProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`flex flex-row items-start gap-x-2 pt-3 pl-2 pr-3 w-full ${
        isCollapsed ? 'pb-3' : 'pb-5'
      } rounded-xl bg-light transition duration-300`}
    >
      <Image
        src={arrow}
        alt="arrow-icon"
        height={24}
        width={24}
        className={`transition duration-300 ${isCollapsed && 'rotate-180 '}`}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      />
      <header className="flex flex-col gap-y-[18px] w-full relative">
        <label htmlFor={name} className="text-primary font-sans font-medium text-xl">
          {title}
        </label>
        {!isCollapsed && (
          <input
            autoComplete="off"
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            readOnly={readOnly}
            id={name}
            type={type || 'text'}
            value={value}
            className="bg-chat py-[10px] px-4 rounded-md text-primary w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none"
          />
        )}
      </header>
    </div>
  );
}

export default CollapsableInput;
