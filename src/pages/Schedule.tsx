import PopupBooking from '@/ui/PopupBooking';
import React from 'react';

interface PropsSchedule {}

const Schedule: React.FC<PropsSchedule> = () => {
  return (
    <div className="mx-auto h-full bg-white">
      <div className="container mx-auto xl:w-1170">
        <h1 className="py-10 text-center text-2xl font-bold">
          LỊCH CHIẾU PHIM
        </h1>
        <PopupBooking />
      </div>
    </div>
  );
};

export default Schedule;
