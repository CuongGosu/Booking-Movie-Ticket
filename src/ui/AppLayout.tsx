import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
interface PropsAppLayout {}

const AppLayout: React.FC<PropsAppLayout> = () => {
  return (
    <div className="mx-auto min-h-full min-w-320">
      <Header />
      <main className=" mt-7 h-full w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
