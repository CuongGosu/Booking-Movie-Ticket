import React, { createContext, useContext, ReactNode } from 'react';

const StyledTable =
  'border border-gray-200 text-base bg-gray-100 rounded overflow-hidden';

const CommonRow = ({
  columns,
  children,
}: {
  columns: string;
  children: ReactNode;
}) => (
  <div className={`grid ${columns} items-center gap-6 px-6`}>{children}</div>
);

const StyledHeader = ({
  columns,
  children,
}: {
  columns: string;
  children: ReactNode;
}) => <CommonRow columns={columns}>{children}</CommonRow>;

const StyledRow = ({
  columns,
  children,
}: {
  columns: string;
  children: ReactNode;
}) => (
  <CommonRow columns={columns}>
    <div className={`p-4 ${children ? 'border-b border-gray-100' : ''}`}>
      {children}
    </div>
  </CommonRow>
);

const Empty = 'text-xl font-semibold text-center my-6';

const TableContext = createContext('');

type TableProps = {
  columns: string;
  children: ReactNode;
  footer?: ReactNode;
};

function Table({ columns, children, footer }: TableProps) {
  return (
    <TableContext.Provider value={columns}>
      <div className={`table ${StyledTable}`}>{children}</div>
      {footer && (
        <footer className="flex justify-center bg-gray-50 py-3">
          {footer}
        </footer>
      )}{' '}
      {/* Hiển thị footer nếu có */}
    </TableContext.Provider>
  );
}

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  const columns = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

type RowProps = {
  children: ReactNode;
};

function Row({ children }: RowProps) {
  const columns = useContext(TableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}

type BodyProps = {
  data: any[];
  render: (item: any, index: number) => ReactNode;
};

function Body({ data, render }: BodyProps) {
  if (!data.length) return <p className={Empty}>Không có dữ liệu về phim</p>;
  return (
    <div className="my-4">
      {data.map((item, index) => (
        <div key={index}>{render(item, index)}</div>
      ))}
    </div>
  );
}
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
