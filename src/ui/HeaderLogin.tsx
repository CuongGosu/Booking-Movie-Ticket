// Trong HeaderAccount.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

interface PropsHeaderLogin {}

const HeaderLogin: React.FC<PropsHeaderLogin> = () => {
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <ul className={`${flexBetween} h-full w-full gap-1 text-text-secondary`}>
        <li>
          <NavLink
            to="/dang-nhap"
            className="text-xs hover:text-text-highlight"
          >
            Đăng nhập
          </NavLink>
        </li>
        <span> / </span>
        <li>
          <NavLink to="/dang-ki" className="text-xs hover:text-text-highlight">
            Đăng kí
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderLogin;
