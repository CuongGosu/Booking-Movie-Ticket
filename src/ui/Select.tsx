import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: string[]; // Danh sách các tùy chọn
  register?: any;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  register,
  name,
  label,
  options,
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col gap-1 pb-2 pt-2">
      {label && (
        <label className="mb-1 font-semibold" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className="w-20 rounded-sm border border-gray-300 bg-gray-100 p-2 shadow-sm"
        {...register(name)}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
