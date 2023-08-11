import React from 'react';
import { NAVITEMS } from '@/constants';
import Logo from './Logo';
import Items from './Items';
import Switch from './Switch';
import Profile from './Profile';

function Sidebar() {
  return (
    <aside className="h-full bg-transparent flex flex-col max-w-[360px] w-[30%] items-start justify-between pl-5">
      <Logo />
      <Items items={NAVITEMS} />
      <div>
        <Profile />
        <Switch />
      </div>
    </aside>
  );
}

export default Sidebar;
