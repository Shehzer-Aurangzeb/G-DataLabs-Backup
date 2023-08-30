'use client';

import React from 'react';
import { cross_disable, cross_active, check_active, check_disable } from '@/constants/assets';
import IconButton from '@/components/UI/IconButton';

type TProps = {
  isAllowed: boolean;
  onClick: () => void;
};
function Actions({ isAllowed, onClick }: TProps) {
  return (
    <div className="flex flex-row gap-x-4 mobile:gap-x-2 w-full justify-center items-center">
      <IconButton
        src={isAllowed ? check_active : check_disable}
        className="relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px]"
        onClick={() => {
          if (!isAllowed) onClick();
        }}
      />
      <IconButton
        src={!isAllowed ? cross_active : cross_disable}
        className="relative h-[35px] w-[35px] mobile:w-[25px] mobile:h-[25px]"
        onClick={() => {
          if (isAllowed) onClick();
        }}
      />
    </div>
  );
}

export default Actions;
