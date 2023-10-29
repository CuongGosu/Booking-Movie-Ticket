import React from 'react';
import SelectionSchedule from './SelectionSchedule';
import ContentSchedule from './ContentSchedule';

interface PropsPopupBooking {}

const PopupBooking: React.FC<PropsPopupBooking> = () => {
  return (
    <div className="mx-auto h-full bg-white">
      <SelectionSchedule />
      <ContentSchedule />
    </div>
  );
};

export default PopupBooking;
