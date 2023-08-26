'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { APPITEMS, AUTHITEMS } from '@/constants';
import { useWindowSize } from '@/hooks/useWindowSize';
import { sidebar } from '@/constants/assets';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useAuth } from '@/hooks/useAuth';
import Logo from './Logo';
import Items from './Items';
import Switch from './Switch';
import Profile from './Profile';
import IconButton from '../IconButton';

function Sidebar() {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { isAuthenticated, logoutUser } = useAuth();
  const handleOutsideClick = () => {
    setIsOpen(false);
  };
  useOutsideClick(containerRef, handleOutsideClick);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      {width < 1280 && (
        <div className="h-[calc(100vh_-_2.5rem)] bg-main relative w-[50px]">
          <IconButton
            className="absolute top-2 left-2 flex items-center justify-center w-[30px] h-[30px]"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            src={sidebar}
          />
        </div>
      )}

      <aside
        ref={containerRef}
        className={`h-[calc(100vh_-_2.5rem)] flex flex-col max-w-[360px] mobile:max-w-full items-start justify-between overflow-y-auto ${
          width < 1280
            ? `fixed z-20 transition-all duration-300 bg-main ${isOpen ? 'w-full  pl-5' : 'w-0 p-0'}`
            : ' pl-5 w-[25%] bg-transparent'
        }
     `}
      >
        <Logo />
        {width < 1280 && (
          <IconButton
            className="z-10 absolute top-3 right-2 bg-main flex items-center justify-center w-[30px] h-[30px]"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            src={sidebar}
          />
        )}
        <Items items={isAuthenticated ? APPITEMS : AUTHITEMS} />
        <div className="max-w-sidebarItem w-full">
          {isAuthenticated && <Profile logoutUser={logoutUser} />}
          <Switch />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
