'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Image from '@/components/UI/StyledImage';
import { useAuth } from '@/hooks/useAuth';
import { capitalize } from '@/lib';

function Header() {
  const { user } = useAuth();
  return (
    <div className="bg-lightGreen flex flex-row items-center w-full pl-4 mobile:pl-2 py-6 rounded-md gap-x-4">
      {!user ? (
        <Skeleton circle width={50} height={50} containerClassName="avatar-skeleton" />
      ) : (
        <Image src={user.image} alt="profile" className="w-[50px] h-[50px] rounded-full" rounded />
      )}

      <div className="flex flex-col flex-1">
        {!user && (
          <>
            <Skeleton width={150} />
            <Skeleton width={190} />
          </>
        )}
        <h3 className="font-sans font-bold text-xl text-primary leading-6">
          {user && capitalize(`${user.firstName} ${user.lastName}`)}
        </h3>
        <p className="font-sans font-normal text-primary text-base">{user && user.email}</p>
      </div>
    </div>
  );
}
export default Header;
