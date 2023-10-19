import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface LoginInput {
  email: string;
  password: string;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: async ({ email, password }: LoginInput) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(['profile'], user.user);
      navigate('/', { replace: true });
      toast.success('Đăng nhập thành công');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Email hoặc mật khẩu không chính xác');
    },
  });
  return { login, isLoading };
}
