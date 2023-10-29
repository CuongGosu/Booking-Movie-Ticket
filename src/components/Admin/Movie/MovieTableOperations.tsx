import Filter from '@/ui/Filter';
import React from 'react';

export default function MovieTableOperations() {
  return (
    <div className="flex items-center gap-4 pr-4">
      <Filter
        filterField="phim"
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Phim đang chiếu', label: 'Phim đang chiếu' },
          { value: 'Phim sắp chiếu', label: 'Phim sắp chiếu' },
        ]}
      />
    </div>
  );
}
