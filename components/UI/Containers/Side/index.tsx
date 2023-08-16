'use client';

import React, { useRef, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import Image from '@/components/UI/StyledImage';
import { sidebar_dark } from '@/constants/assets';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function Side({ children, className = '' }: IProps) {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = () => {
    setIsOpen(false);
  };
  useOutsideClick(containerRef, handleOutsideClick);
  return (
    <>
      {width < 1024 && (
        <div className="h-[calc(100vh_-_2.5rem)] bg-light relative w-[50px]">
          <button
            className="absolute top-0 left-0 flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
            type="submit"
          >
            <Image src={sidebar_dark} alt="sidebar-icon" className="w-[30px] h-[30px]" />
          </button>
        </div>
      )}
      <div
        ref={containerRef}
        className={[
          `bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto ${
            width < 1024 ? `fixed right-0 z-20 transition-all duration-300 ${isOpen ? 'w-full' : 'w-0'}` : 'w-full '
          }`,
          className,
        ].join(' ')}
      >
        {width < 1024 && (
          <div className="relative w-[50px]">
            <button
              className="absolute top-0 left-0 flex items-center justify-center p-2"
              onClick={() => setIsOpen(!isOpen)}
              type="submit"
            >
              <Image src={sidebar_dark} alt="sidebar-icon" className="w-[30px] h-[30px]" />
            </button>
          </div>
        )}
        {children}
      </div>
    </>
  );
}

export default Side;
