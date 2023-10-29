import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
interface PropsAppAdmin {}

const AppAdmin: React.FC<PropsAppAdmin> = () => {
  return (
    <div className="grid-rows-auto-1fr grid h-screen grid-cols-[26rem,1fr]">
      <SideBar />
      <div className="flex max-w-screen-lg flex-col gap-12 overflow-y-auto pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppAdmin;
