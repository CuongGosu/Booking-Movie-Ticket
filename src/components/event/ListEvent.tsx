import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { Spinner } from '@material-tailwind/react';
import ItemEvents from '@/ui/ItemEvent';
interface Events {
  event_id: string;
  event_title: string;
  event_start: Date;
  event_end: Date;
  event_poster: string;
}
interface ListEventsProps {}

const ListEvents: React.FC<ListEventsProps> = () => {
  const {
    isLoading,
    events,
  }: { isLoading: boolean; events: Events[] | undefined } = useEvents();
  return (
    <div className=" bg-white ">
      <div className="container mx-auto xl:w-1170">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-4 gap-12">
            {events?.map((event) => (
              <ItemEvents key={event.event_id} events={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListEvents;
