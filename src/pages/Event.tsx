import React from 'react';
import ListEvents from '@/components/event/ListEvent';
interface PropsEvent {}

const Event: React.FC<PropsEvent> = () => {
  return (
    <div className="mx-auto h-full bg-white">
      <div className="container mx-auto xl:w-1170">
        <h1 className="py-10 text-center text-2xl font-bold">
          KHUYẾN MÃI & ƯU ĐÃI
        </h1>
        <ListEvents />
      </div>
    </div>
  );
};

export default Event;
