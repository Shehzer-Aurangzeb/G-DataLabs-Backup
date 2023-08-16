'use client';

import React, { Fragment, useRef, useState } from 'react';
import { NAVITEMS } from '@/constants';
import { useWindowSize } from '@/hooks/useWindowSize';
import Image from '@/components/UI/StyledImage';
import { sidebar } from '@/constants/assets';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import Logo from './Logo';
import Items from './Items';
import Switch from './Switch';
import Profile from './Profile';

function Sidebar() {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = () => {
    setIsOpen(false);
  };
  useOutsideClick(containerRef, handleOutsideClick);
  return (
    <>
      {width < 1280 && (
        <div className="h-[calc(100vh_-_2.5rem)] bg-main relative w-[50px]">
          <button
            className="absolute top-0 left-0 flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
            type="submit"
          >
            <Image src={sidebar} alt="sidebar-icon" className="w-[30px] h-[30px]" />
          </button>
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
          <button
            className="z-10 absolute top-[5px] right-0 bg-main flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
            type="submit"
          >
            <Image src={sidebar} alt="sidebar-icon" className="w-[30px] h-[30px]" />
          </button>
        )}
        <Items items={NAVITEMS} />
        <div className="max-w-sidebarItem w-full">
          <Profile />
          <Switch />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
