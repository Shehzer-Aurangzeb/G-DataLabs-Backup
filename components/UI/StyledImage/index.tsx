import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IProps {
  className: string;
  src: string | StaticImport;
  alt: string;
  rounded?: boolean;
}
function StyledImage({ className, src, alt, rounded = false }: IProps) {
  return (
    <div className={['relative', className].join(' ')}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${rounded ? 'object-cover rounded-full' : 'object-contain'} `}
        sizes="(max-width: 768px)"
      />
    </div>
  );
}

export default StyledImage;
