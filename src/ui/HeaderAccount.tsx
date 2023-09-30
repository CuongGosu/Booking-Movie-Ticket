import React from "react";

import { NavLink } from "react-router-dom";
interface PropsHeaderAccount {}

const HeaderAccount: React.FC<PropsHeaderAccount> = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <ul className={`${flexBetween} gap-1 w-full text-text-secondary h-full`}>
        <li>
          <NavLink
            to="/dang-nhap"
            className="hover:text-text-highlight text-xs"
          >
            Đăng nhập
          </NavLink>
        </li>
        <span> / </span>
        <li>
          <NavLink to="/dang-ki" className="hover:text-text-highlight text-xs">
            Đăng kí
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderAccount;
