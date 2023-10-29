import React from 'react';

interface PropsBooking {}

const Booking: React.FC<PropsBooking> = () => {
  return (
    <div className="mx-auto h-full bg-white">
      <div className="container mx-auto xl:w-1170">Page for user</div>
    </div>
  );
};

export default Booking;
