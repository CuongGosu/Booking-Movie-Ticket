import { useUser } from '@/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
interface PropsRouteUser {
  children: React.ReactNode;
}

const ProtectedRouteUser: React.FC<PropsRouteUser> = ({ children }) => {
  const navigate = useNavigate();

  const { isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/dang-nhap');
      console.log(isAuthenticated);
    },
    [isAuthenticated, navigate],
  );

  if (isAuthenticated) return children;
};

export default ProtectedRouteUser;
