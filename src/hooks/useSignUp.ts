import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success('Đăng ký thành công');
    },
    onError: (err: Error) => {
      if (err.message === 'User already registered')
        toast.error('Email này đã được sử dụng');
    },
  });

  return { signup, isLoading };
}
