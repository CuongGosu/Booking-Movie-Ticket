import React from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderPage from "./HeaderPage";

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
  return (
    <div className="text-text-primary">
      <HeaderInfo />
      <HeaderPage />
    </div>
  );
};

export default Header;
