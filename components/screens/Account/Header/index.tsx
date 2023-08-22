import React from 'react';
import Image from '@/components/UI/StyledImage';
import { profile } from '@/temp';

function Header() {
  return (
    <div className="bg-lightGreen flex flex-row items-center w-full pl-4 mobile:pl-2 py-6 rounded-md gap-x-4">
      <Image src={profile} alt="profile" className="w-[50px] h-[50px] rounded-full" rounded />
      <div className="flex flex-col flex-1">
        <h3 className="font-sans font-bold text-xl text-primary leading-6">John Doe</h3>
        <p className="font-sans font-normal text-primary text-base">@johndoe21</p>
      </div>
    </div>
  );
}
export default Header;
