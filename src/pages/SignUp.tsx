// import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import Form from '@/ui/Form';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import Select from '@/ui/Select';
import { useSignup } from '@/hooks/useSignUp';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePickerInput from '@/ui/DatePickerInput';
import moment from 'moment';
import React from 'react';

interface PropsSignUp {}
interface SignUpInput {
  fullname: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  gender: string;
  date_of_birth: string | null;
  cmnd: string;
}

const SignUpSchema = yup.object().shape({
  fullname: yup.string().required('Vui lòng nhập họ và tên'),
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Vui lòng nhập đúng định dạng email'),
  password: yup
    .string()
    .min(8, 'Mật khẩu tối thiểu 8 kí tự')
    .max(32, 'Mật khẩu tối đa 32 kí tự')
    .required('Vui lòng nhập mật khẩu'),
  retypePassword: yup
    .string()
    .required('Vui lòng xác nhận lại mật khẩu')
    .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp'),
  address: yup.string().required('Vui lòng nhập địa chỉ'),
  phone: yup.string().required('Vui lòng nhập số điện thoại'),
  cmnd: yup
    .string()
    .matches(
      /^[0-9]{9}$/,
      'Số chứng minh nhân dân không đúng định dạng (9 chữ số)',
    )
    .required('Vui lòng nhập số chứng minh nhân dân'),
  date_of_birth: yup
    .date()
    .nullable()
    .test(
      'Date of Birth',
      'Năm sinh cần phải lớn hơn hoặc bằng 18 tuổi',
      function (value) {
        if (value !== null) {
          // Kiểm tra xem ngày sinh có khác null trước khi tính toán tuổi
          return moment().diff(moment(value), 'years') >= 18;
        }
      },
    )
    .required('Vui lòng chọn ngày sinh'),
});

const SignUp: React.FC<PropsSignUp> = () => {
  const { signup, isLoading } = useSignup();
  const { register, formState, handleSubmit, setValue } = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const { errors } = formState;
  const [date, setDate] = React.useState<Date | null>(new Date());
  const date18YearsAgo = new Date();
  date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
  const handleChange = (dateChange: Date | null) => {
    if (dateChange !== null) {
      setValue('date_of_birth', dateChange, {
        shouldDirty: true,
      });
      setDate(dateChange);
    }
  };
  const onSubmit = (data: SignUpInput) => {
    let formattedDate: string | null = null; // Giá trị mặc định là null

    if (data.date_of_birth !== null) {
      const date = new Date(data.date_of_birth);
      if (!isNaN(date.getTime())) {
        formattedDate = date.toISOString();
      } else {
        console.error('Invalid date format'); // Xử lý trường hợp ngày tháng không hợp lệ
      }
    }

    const formattedData = { ...data, date_of_birth: formattedDate };

    console.log(formattedData);

    signup(formattedData);
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
              name="fullname"
              type="text"
              placeholder="Nguyen Van A"
              label=" Họ và Tên"
              error={errors.fullname?.message || undefined}
              autoFocus
            />
            <Input
              name="email"
              type="email"
              placeholder="abc@gmail.com"
              label="Email"
              error={errors.email?.message || undefined}
            />
            <Input
              name="password"
              type="password"
              label="Mật khẩu"
              placeholder="Mật khẩu tối thiểu 8 kí tự"
              error={errors.password?.message || undefined}
            />
            <Input
              name="retypePassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
              label="Xác nhận lại mật khẩu"
              error={errors.retypePassword?.message || undefined}
            />
            <Input
              name="address"
              type="text"
              placeholder="Địa chỉ của bạn hiện nay"
              label="Địa chỉ"
              error={errors.address?.message || undefined}
            />
            <Input
              name="phone"
              type="text"
              placeholder="+84"
              label="Số điện thoại"
              error={errors.phone?.message || undefined}
            />
            <Select
              name="gender"
              label="Giới tính"
              options={['Nam', 'Nữ']}
              register={register}
            />
            <Input
              name="cmnd"
              type="text"
              placeholder="Số chứng minh nhân đân"
              label="Số chứng minh nhân dân"
              error={errors.cmnd?.message || undefined}
            />
            <DatePickerInput
              name="date_of_birth"
              label="Ngày sinh"
              error={errors.date_of_birth?.message || undefined}
              date={date}
              maxDate={date18YearsAgo}
              onChange={handleChange}
            />
            <div className="col-span-2 mb-7 flex justify-center">
              <Button type="log" disabled={isLoading}>
                Đăng ký
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
