import React from 'react';

interface RowTableProps {
  type?: 'horizontal' | 'vertical';
  className?: string;
  children: React.ReactNode;
}

const RowTable: React.FC<RowTableProps> = ({
  type = 'vertical',
  className,
  children,
}) => {
  const classes =
    type === 'horizontal'
      ? 'flex justify-between items-center w-full'
      : 'flex flex-col gap-4';

  return <div className={`row ${classes} ${className} mt-3`}>{children}</div>;
};

export default RowTable;
