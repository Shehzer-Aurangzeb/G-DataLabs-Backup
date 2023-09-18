'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVITEMS } from '@/types';
import Image from '@/components/UI/StyledImage';

interface IProps {
  items: NAVITEMS[];
}
function Items({ items }: IProps) {
  const pathname = usePathname();
  return (
    <ul className="max-w-sidebarItem w-4/5 flex flex-col gap-y-4">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.to}
            className={`flex flex-row items-center gap-x-3 py-3 px-4 transition-all duration-200 w-full rounded-xl ${
              pathname === item.to ? 'bg-active' : 'bg-transparent'
            }`}
          >
            <Image src={item.icon} alt="icon" className="w-[30px] h-[30px]" />
            <span className="font-sans text-main dark:text-primary text-xl font-medium">{item.title}</span>
          </Link>

          {item.nestedItems && (
            <ul className="flex flex-col gap-y-[18px] ml-10 mt-5">
              {item.nestedItems.map((nestedItem) => (
                <li key={nestedItem.title}>
                  <Link
                    href={nestedItem.to}
                    className={`flex flex-row items-center gap-x-3 px-4 transition-all duration-200 w-full rounded-xl ${
                      pathname === nestedItem.to ? 'bg-active py-3' : 'bg-transparent'
                    }`}
                  >
                    <span
                      className={`w-[30px] inline-block transition-all duration-200 bg-yellow ${
                        pathname === nestedItem.to ? 'h-[13px]' : 'h-[6px]'
                      }`}
                    />
                    <span className="font-sans text-main dark:text-primary text-base font-medium">
                      {nestedItem.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Items;
