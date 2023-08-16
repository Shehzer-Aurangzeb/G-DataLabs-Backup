import React from 'react';
import Sidebar from '../Sidebar';

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  return (
    <div className="h-screen w-screen flex flex-row py-5">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
