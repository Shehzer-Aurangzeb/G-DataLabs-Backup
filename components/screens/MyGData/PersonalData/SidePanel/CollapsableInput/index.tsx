'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { arrow, plus } from '@/constants/assets';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | boolean | undefined;
  isAddingFieldEnabled?: boolean;
  fields?: { [key: string]: string };
  addNewField?: () => void;
}

function CollapsableInput({
  name,
  value,
  onChange,
  title,
  type,
  placeholder,
  readOnly,
  error,
  isAddingFieldEnabled = false,
  fields,
  addNewField,
}: IProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <div
        className={`flex flex-row items-start gap-x-2 pt-3 pl-2 pr-3 w-full ${
          isCollapsed ? 'pb-3' : 'pb-5'
        } rounded-xl bg-light transition duration-300`}
      >
        <Image
          src={arrow}
          alt="arrow-icon"
          height={24}
          width={24}
          className={`transition duration-300 ${isCollapsed && 'rotate-180 '}`}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        />
        <header className="flex flex-col gap-y-[18px] w-full relative">
          <label htmlFor={name} className="text-primary font-sans font-medium text-xl">
            {title}
          </label>
          {!isCollapsed && !isAddingFieldEnabled && (
            <input
              autoComplete="off"
              placeholder={placeholder}
              onChange={onChange}
              name={name}
              readOnly={readOnly}
              id={name}
              type={type || 'text'}
              value={value}
              className="bg-chat py-[10px] px-4 rounded-md text-primary w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none"
            />
          )}
          {!isCollapsed && isAddingFieldEnabled && fields && (
            <>
              {Object.entries(fields).map(([key, val]) => (
                <input
                  autoComplete="off"
                  key={`emotionList-${key}`}
                  placeholder={placeholder}
                  onChange={onChange}
                  name={key}
                  readOnly={readOnly}
                  id={`emotionList-${key}`}
                  type={type || 'text'}
                  value={val}
                  className="bg-chat py-[10px] px-4 rounded-md text-primary w-full font-sans font-normal text-base placeholder:font-normal placeholder:font-sans placeholder:text-xl placeholder:text-placeholder focus:outline-none"
                />
              ))}

              <button
                className="flex flex-row items-center gap-x-2 outline-none bg-none focus:outline-none font-sans font-medium text-primary text-sm"
                type="button"
                onClick={addNewField}
              >
                <Image src={plus} alt="plus-icon" height={20} width={22} /> Add new field
              </button>
            </>
          )}
        </header>
      </div>
      {error && <p className="font-sans text-sm text-error -mt-2">{error}</p>}
    </>
  );
}

export default CollapsableInput;
