'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/constants/navigation';
import NoSidebarLayout from './NoSidebar';
import MainLayout from './Main';

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  const pathname = usePathname();
  return (
    <>
      {' '}
      {pathname === PATHS.COOKIEPOLICY || pathname === PATHS.PRIVACY || pathname === PATHS.TERMS ? (
        <NoSidebarLayout>{children}</NoSidebarLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
}

export default Layout;
