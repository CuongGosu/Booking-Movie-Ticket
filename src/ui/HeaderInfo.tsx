import Button from '@/ui/Button';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { isAdmin } from '@/hooks/isAdmin';
import { useUser } from '@/hooks/useUser';

interface PropsHeaderInfo {}

const HeaderInfo: React.FC<PropsHeaderInfo> = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const [isAdminUser, setIsAdminUser] = useState(false);
  useEffect(() => {
    async function checkAdmin() {
      const admin = await isAdmin();
      setIsAdminUser(admin && admin.role === 'admin');
    }
    checkAdmin();
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-14 w-full pt-4 text-right text-sm uppercase">
      <div className="container mx-auto flex items-center justify-end xl:w-1170">
        {isAdminUser ? (
          <li className="mr-6 inline-block">
            <NavLink
              to="/quan-li-phim"
              className="text-xs hover:text-text-highlight"
            >
              <Button type="small">Truy cập admin</Button>
            </NavLink>
          </li>
        ) : (
          ''
        )}

        <div className="mr-4 inline-block">
          Hotline: <a href="tel:0843445456">0843445456</a>
        </div>
        <div className="inline-block">Giờ mở cửa: 9:00 - 22:00</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
