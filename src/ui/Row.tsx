import React from 'react';

interface RowProps {
  children: React.ReactNode;
  col: 'col3' | 'col4';
}

const Row: React.FC<RowProps> = ({ children, col }: RowProps) => {
  const base = 'grid gap-20 mb-4';
  const styles = {
    col3: `${base} grid-cols-3`,
    col4: `${base} grid-cols-4`,
  };
  return <div className={`${styles[col]}`}>{children}</div>;
};

export default Row;
