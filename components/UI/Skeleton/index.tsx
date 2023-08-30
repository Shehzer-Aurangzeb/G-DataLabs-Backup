'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/constants';

export default function Sekeleton() {
  const pathname = usePathname();
  return (
    <div>
      {pathname === PATHS.HOME && <p>Loading Home</p>}
      {(pathname.includes(PATHS.MYGDATA) || pathname === PATHS.HISTORY) && <p>Loading Table</p>}
      {pathname.includes(PATHS.ACCOUNT) && <p>Loading Accounts Screen</p>}
    </div>
  );
}
