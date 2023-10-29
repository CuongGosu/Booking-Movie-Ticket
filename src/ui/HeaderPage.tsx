import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import HeaderNav from './HeaderNav';
import HeaderAccount from './HeaderAccount';
import { useUser } from '@/hooks/useUser';
import HeaderLogin from './HeaderLogin';
import { useNavigate } from 'react-router-dom';

interface PropsHeaderPage {}

const HeaderPage: React.FC<PropsHeaderPage> = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();
  const [isLogging, setIsLogging] = useState(false);
  useEffect(
    function () {
      if (isAuthenticated) setIsLogging(true);
      else setIsLogging(false);
    },
    [isAuthenticated, navigate],
  );
  console.log(isLoading);
  console.log(isAuthenticated);
  const flexBetween = 'flex items-center justify-between';
  return (
    <div className="mx-auto h-16 w-full bg-secondary-background">
      <div
        className={`${flexBetween} container mx-auto h-full w-full gap-20 uppercase xl:w-1170`}
      >
        <Logo />
        <HeaderNav className="flex-auto" />
        {isLoading && !isAuthenticated ? (
          <div className="w-60"></div>
        ) : isLogging ? (
          <HeaderAccount />
        ) : (
          <HeaderLogin />
        )}
      </div>
    </div>
  );
};

export default HeaderPage;
