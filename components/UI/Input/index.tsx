'use client';
import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | boolean | undefined;
  isMonetaryInput?: boolean;
  currency?: string;
}

function Input({
  label,
  placeholder,
  onChange,
  error,
  type,
  style,
  className,
  value,
  name,
  readOnly,
  isMonetaryInput,
  currency,
}: IProps) {
  return (
    <div className={['flex flex-col gap-y-3 relative', className].join(' ')} style={style}>
      <label className="text-base font-bold font-sans text-black" htmlFor={name}>
        {label}
      </label>
      {isMonetaryInput && (
        <span className="text-black font-sans font-normal text-xl absolute top-[54%] left-[15px]">{currency}</span>
      )}
      <input
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        id={name}
        type={type || 'text'}
        value={value}
        className="bg-chat py-5 px-7 rounded-md text-black font-sans font-normal text-xl placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none"
      />
      {error && <p className="font-sans text-sm text-error -mt-2">{error}</p>}
    </div>
  );
}

export default Input;
