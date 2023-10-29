import React from 'react';
import Form from '@/ui/Form';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import { useForm } from 'react-hook-form';
import { useLogin } from '@/hooks/useLogin';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface PropsSignIn {}
interface SignInInput {
  email: string;
  password: string;
}
// validation
const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Vui lòng nhập đúng định dạng email'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
});
const SignIn: React.FC<PropsSignIn> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(SignInSchema) });
  const { login } = useLogin();
  const onSubmit = (data: SignInInput) => {
    login(data);
  };
  return (
    <div className="mx-auto h-full bg-white">
      <div className="container mx-auto xl:w-1170">
        <div className="grid gap-4 pt-7">
          <Form
            register={register}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            className="change-form"
          >
            <Input
              name="email"
              type="email"
              label="Nhập email"
              placeholder="abc@gmail.com"
              error={errors.email?.message || undefined}
              autoFocus
            />

            <Input
              name="password"
              type="password"
              label="Mật khẩu"
              placeholder="Mật khẩu của bạn"
              error={errors.password?.message || undefined}
            />
            <div className="col-span-2 mb-7 flex justify-center">
              <Button type="log" disabled={isSubmitting}>
                {!isSubmitting ? 'Đăng nhập' : 'Đang đăng nhập'}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
