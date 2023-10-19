import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string | undefined;
  register?: any;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  register,
  name,
  error,
  label,
  ...rest
}) => {
  return (
    <div className="flex w-3/4 flex-col pb-2 pt-2">
      {label && (
        <label className="mb-1 font-semibold" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="w-full rounded-sm border border-gray-300 bg-gray-100 p-2 shadow-sm"
        {...register(name)}
        {...rest}
      />
      {error && <span className="text-lg text-red-700">{error}</span>}
    </div>
  );
};

export default Input;
