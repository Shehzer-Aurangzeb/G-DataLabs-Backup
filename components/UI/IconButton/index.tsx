/* eslint-disable react/button-has-type */

'use client';

import React from 'react';
import { StaticImageData } from 'next/image';
import Image from '@/components/UI/StyledImage';
import Loader from '@/components/UI/Loader';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  className?: string;
  src: StaticImageData;
}
function IconButton({ onClick, type = 'button', isLoading = false, src, className = '', disabled }: IProps) {
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
        <Image src={src} alt="icon" className="h-full w-full" />
      )}
    </button>
  );
}
export default IconButton;
