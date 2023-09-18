/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useState } from 'react';
import { bulb_active, bulb_inactive } from '@/constants/assets';
import { useTheme } from '@/context/ThemeProvider';
import { Theme } from 'types';
import Image from '@/components/UI/StyledImage';

interface IProps {
  className?: string;
}

function Switch({ className = '' }: IProps) {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(theme !== Theme.DARK);

  const handleChange = () => {
    if (checked) setTheme(Theme.DARK);
    else setTheme(Theme.LIGHT);
    setChecked(!checked);
  };

  return (
    <>
      <input type="checkbox" id="switch" className="hidden" onChange={handleChange} />
      <div className={['bg-gray rounded-md py-3 px-4 w-full dark:bg-chat', className].join(' ')}>
        <label htmlFor="switch" className="flex gap-x-3 items-center cursor-pointer justify-center">
          <div
            className={`flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 ${
              checked ? 'bg-dark dark:bg-chat' : 'bg-transparent'
            } `}
          >
            <Image
              src={checked ? bulb_active : bulb_inactive}
              alt="light-bulb-icon"
              className="h-5 w-4  dark:filter dark:brightness-0"
            />
            <span
              className={`font-sans font-bold text-base dark:text-primary ${
                checked ? 'text-active dark:text-primary' : 'text-inactive'
              }`}
            >
              Light
            </span>
          </div>
          <div
            className={`flex gap-x-4 items-center transition-all ease-in-out duration-200 rounded-md py-2 px-4 ${
              !checked ? 'bg-dark dark:bg-chat' : 'bg-transparent'
            } `}
          >
            <Image
              src={checked ? bulb_inactive : bulb_active}
              alt="light-bulb-icon"
              className="h-5 w-5 dark:filter dark:brightness-0"
            />
            <span
              className={`font-sans font-bold text-base  ${
                !checked ? 'text-active dark:text-primary' : 'text-inactive'
              }`}
            >
              Dark
            </span>
          </div>
        </label>
      </div>
    </>
  );
}

export default Switch;
