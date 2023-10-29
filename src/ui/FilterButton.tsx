import React from 'react';

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  active,
  onClick,
}) => (
  <button
    className={`bg-gray-0 rounded-md border p-1 px-2 text-base font-semibold transition-all duration-300 ${
      active
        ? 'text-brand-50 hover:bg-brand-700 hover:text-brand-100 bg-text-highlight active:bg-text-highlight active:text-red-50 '
        : 'hover:text-brand-600 active:bg-brand-200 active:text-brand-800 hover:bg-text-highlight'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default FilterButton;
