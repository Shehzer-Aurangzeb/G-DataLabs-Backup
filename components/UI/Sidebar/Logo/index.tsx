import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/images/logo.svg';
import { PATHS } from '@/constants';

function Logo() {
  return (
    <Link href={PATHS.HOME} className="flex flex-row gap-x-3 items-center">
      <div className="relative w-[72px] h-[72px] laptop:w-[60px] laptop:h-[60px]">
        <Image src={logo} alt="logo" fill className="object-contain " />
      </div>
      <h3 className="text-main font-sans laptop:text-2xl text-3xl font-bold">G-DataLabs</h3>
    </Link>
  );
}

export default Logo;
