import React from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterButton from './FilterButton'; // Đảm bảo đường dẫn đúng đến file FilterButton

interface FilterOption {
  value: string;
  label: string;
}

interface FilterProps {
  filterField: string;
  options: FilterOption[];
}

function Filter({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;
  function handleClick(value: string) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', '1');

    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 rounded-sm border bg-white p-2 shadow-sm">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

export default Filter;
