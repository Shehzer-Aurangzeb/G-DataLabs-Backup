'use client';

import React, { useRef, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { sidebar_dark } from '@/constants/assets';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import IconButton from '../../IconButton';

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
          <IconButton
            className="z-10 absolute top-3 left-2 flex items-center justify-center w-[30px] h-[30px]"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            src={sidebar_dark}
          />
        </div>
      )}
      <div
        ref={containerRef}
        className={[
          `bg-light h-[calc(100vh_-_2.5rem)] max-w-[340px] mobile:max-w-full rounded-r-lg overflow-y-auto ${
            width < 1024
              ? `fixed right-0 z-20 transition-all duration-300 ${isOpen ? 'w-full pl-5 pr-3' : 'w-0 p-0'}`
              : 'w-full pl-5 pr-3'
          }`,
          className,
        ].join(' ')}
      >
        {width < 1024 && (
          <div className="relative w-[50px]">
            <IconButton
              className="z-10 absolute top-3 left-1 flex items-center justify-center w-[30px] h-[30px]"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              src={sidebar_dark}
            />
          </div>
        )}
        {children}
      </div>
    </>
  );
}

export default Side;
