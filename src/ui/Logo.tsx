import React from "react";
import logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
interface PropsLogo {}

const Logo: React.FC<PropsLogo> = () => {
  return (
    <Link to="/" className="block hover:opacity-70 -mt-7">
      <img src={logo} alt="logo Metiz" className=" bg-secondary-background " />
    </Link>
  );
};

export default Logo;
