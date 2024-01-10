/* eslint-disable react/button-has-type */

'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Loader from '@/components/UI/Loader';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  className?: string;
  src: StaticImageData | string;
  children?: React.ReactNode;
}
function IconButton({ children, onClick, type = 'button', isLoading = false, src, className = '', disabled }: IProps) {
  return (
    <button
      className={['disabled:cursor-not-allowed', className].join(' ')}
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <Loader
          style={{
            color: '#fff',
            margin: '0 auto',
          }}
        />
      ) : (
        <div className={['relative h-full w-full', className].join(' ')}>
          <Image src={src} alt="button-icon" fill className="object-contain" />
        </div>
      )}
      {children}
    </button>
  );
}
export default IconButton;
