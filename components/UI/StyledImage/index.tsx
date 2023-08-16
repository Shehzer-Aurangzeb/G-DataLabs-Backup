import React from 'react';
import Image from 'next/image';

interface IProps {
  className: string;
  src: any;
  alt: string;
  rounded?: boolean;
}
function StyledImage({ className, src, alt, rounded = false }: IProps) {
  return (
    <div className={['relative', className].join(' ')}>
      <Image src={src} alt={alt} fill className={`${rounded ? 'object-cover rounded-full' : 'object-contain'}`} />
    </div>
  );
}

export default StyledImage;
