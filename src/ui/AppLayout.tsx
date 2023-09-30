import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
interface PropsAppLayout {}

const AppLayout: React.FC<PropsAppLayout> = () => {
  return (
    <div className="bg-main-background mx-auto min-h-full min-w-320">
      <Header />
      <main className="mt-7">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
