// Trong HeaderAccount.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';
import { useLogout } from '@/hooks/useLogout';

interface PropsHeaderAccount {}

const HeaderAccount: React.FC<PropsHeaderAccount> = () => {
  const flexBetween = 'flex items-center justify-between';
  const { user } = useUser();
  const { logout } = useLogout();
  const fullname = user?.user_metadata.fullname || '';
  return (
    <nav>
      <ul className={`${flexBetween} h-full w-full gap-1 text-text-secondary`}>
        <li>
          <NavLink
            to="/thong-tin-nguoi-dung"
            className="text-xs hover:text-text-highlight"
          >
            {fullname}
          </NavLink>
        </li>
        <span> / </span>
        <li
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <h1 className="text-xs hover:text-text-highlight">Đăng xuất</h1>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderAccount;
