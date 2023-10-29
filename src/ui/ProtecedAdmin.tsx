import { useEffect, useState } from 'react'; // Thêm dòng này để sử dụng useState và useEffect
import { useNavigate } from 'react-router-dom';
import { isAdmin } from '@/hooks/isAdmin';

interface PropsProtectedAdmin {
  children: React.ReactNode;
}

const ProtectedAdmin: React.FC<PropsProtectedAdmin> = ({ children }) => {
  const navigate = useNavigate();
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const admin = await isAdmin();
      console.log(admin);
      setIsAdminUser(admin && admin.role === 'admin');
    }

    checkAdmin();
  }, []);

  if (!isAdminUser) {
    navigate('/');
    return null;
  }
  return children;
};

export default ProtectedAdmin;
