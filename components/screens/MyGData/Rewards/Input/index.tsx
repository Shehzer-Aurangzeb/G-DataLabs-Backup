/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import Image from '@/components/UI/StyledImage';
import { edit } from '@/constants/assets';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isMonetaryInput?: boolean;
  currency?: string;
}
function Input({
  readOnly,
  name,
  onChange,
  value,
  type,
  pattern,
  className,
  currency = '$',
  isMonetaryInput = false,
}: IProps) {
  return (
    <div
      className={[
        'flex flex-row gap-x-5 items-center justify-center w-full relative max-w-[160px] mx-auto',
        className,
      ].join(' ')}
    >
      {isMonetaryInput && (
        <span
          className={`absolute top-[23%] ${
            readOnly ? 'left-[41px] mobile:left-[37px]' : 'left-[19px] mobile:left-[15px]'
          } text-white font-sans text-xl font-medium`}
        >
          {currency}
        </span>
      )}
      <input
        autoComplete="off"
        pattern={pattern}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        id={name}
        type={type || 'number'}
        value={value}
        className="bg-chat dark:bg-[#727271] py-3 px-6 rounded-sm text-white font-sans font-medium text-xl focus:outline-none w-full max-w-[100px]"
      />
      {!readOnly && (
        <label htmlFor={name} className="cursor-pointer">
          <Image src={edit} alt="edit-icon" className="w-[24px] h-[24px] dark:invert" />
        </label>
      )}
    </div>
  );
}
export default Input;
