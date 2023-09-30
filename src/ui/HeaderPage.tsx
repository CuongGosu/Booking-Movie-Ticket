import React from "react";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import HeaderAccount from "./HeaderAccount";

interface PropsHeaderPage {}

const HeaderPage: React.FC<PropsHeaderPage> = () => {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className="mx-auto h-16 bg-secondary-background w-full">
      <div
        className={`${flexBetween} container uppercase gap-20 xl:w-1170 mx-auto h-full w-full`}
      >
        <Logo />
        <HeaderNav className="flex-auto" />
        <HeaderAccount />
      </div>
    </div>
  );
};

export default HeaderPage;
