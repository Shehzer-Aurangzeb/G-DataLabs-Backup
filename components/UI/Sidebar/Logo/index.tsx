'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PATHS } from '@/constants/navigation';
import { useTheme } from '@/context/ThemeProvider';
import { Theme } from '@/types';
import { logo, logo_dark } from '@/public/assets';

function Logo() {
  const { theme } = useTheme();
  return (
    <Link href={PATHS.HOME} className="flex flex-row gap-x-3 items-center">
      <div className="relative w-[50px] h-[50px] laptop:w-[40px] laptop:h-[40px]">
        {theme === Theme.LIGHT ? (
          <Image src={logo} alt="logo" fill className="object-contain " />
        ) : (
          <Image src={logo_dark} alt="logo" fill className="object-contain " />
        )}
      </div>
      <h3 className="text-main font-sans laptop:text-2xl text-3xl font-bold dark:text-primary">G-DataLabs</h3>
    </Link>
  );
}

export default Logo;
