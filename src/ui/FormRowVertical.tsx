import React, { ReactNode } from 'react';

interface FormRowVerticalProps {
  label?: string;
  // error?: string;
  children?: ReactNode;
}

const FormRowVertical: React.FC<FormRowVerticalProps> = ({
  label,
  // error,
  children,
}) => {
  return (
    <div className="flex w-full flex-col gap-1 pb-2">
      {children && (
        <div className="flex w-full  justify-center  gap-1 ">
          {label && (
            <label
              className="mb-1 font-semibold"
              htmlFor={childrenPropsId(children)}
            >
              {label}
            </label>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

export default FormRowVertical;
function childrenPropsId(children: React.ReactNode): string | undefined {
  if (React.isValidElement(children)) {
    return children.props.id;
  }
  return undefined;
}
