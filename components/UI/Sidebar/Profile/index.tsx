'use client';

import React from 'react';
import Image from '@/components/UI/StyledImage';
import { logout, profile } from '@/constants/assets';

function Profile() {
  return (
    <div className="mb-2 bg-gray flex flex-row items-center w-full max-w-sidebarItem pl-4 pr-6 py-3 rounded-md gap-x-4">
      <Image src={profile} alt="profile" className="w-[50px] h-[50px] rounded-full" rounded />
      <div className="flex flex-col flex-1">
        <h3 className="font-sans font-bold text-xl text-active leading-6">John Doe</h3>
        <p className="font-sans font-normal text-active text-base">@johndoe21</p>
      </div>
      <button
        type="submit"
        className="bg-transparent focus:outline-none focus:shadow-none"
        onClick={() => {
          // console.log('logged out');
        }}
      >
        <Image src={logout} alt="logout" className="w-[35px] h-[35px]" />
      </button>
    </div>
  );
}

export default Profile;
