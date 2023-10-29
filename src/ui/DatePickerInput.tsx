import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
interface DatePickerInputProps {
  name: string;
  label?: string;
  error?: string;
  date?: Date | null;
  maxDate?: Date | null;
  onChange: (date: Date | null) => void;
  register?: any;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  name,
  label,
  error,
  date,
  maxDate,
  onChange,
}) => {
  const { control } = useForm();
  return (
    <div className="flex w-full flex-col gap-1 pb-2 pt-2">
      {label && (
        <label className="mb-1 font-semibold" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="w-max rounded-sm border border-gray-300 bg-gray-100 shadow-sm">
        {/* <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <DatePicker
              dateFormat="dd/MM/yyyy"
              showIcon
              maxDate={date}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        /> */}
        <Controller
          name={name}
          control={control}
          render={() => (
            <DatePicker
              maxDate={maxDate}
              selected={date}
              placeholderText={label}
              onChange={onChange}
            />
          )}
        />
      </div>
      {error && <span className="text-lg text-red-700">{error}</span>}
    </div>
  );
};

export default DatePickerInput;
