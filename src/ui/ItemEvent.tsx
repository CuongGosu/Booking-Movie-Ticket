import React from 'react';
import { format } from 'date-fns';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
interface ItemEventsProps {
  events: {
    event_id: string;
    event_title: string;
    event_start: Date;
    event_end: Date;
    event_poster: string;
  };
}
const ItemEvents: React.FC<ItemEventsProps> = ({ events }) => {
  return (
    <Card className="mt-6 w-64">
      <CardHeader color="blue-gray" className="f-full relative">
        <img src={`${events.event_poster}`} alt={`${events.event_title}`} />
      </CardHeader>
      <CardBody>
        <Typography>
          {format(new Date(events.event_start), 'dd-MM-yyyy')} -{' '}
          {format(new Date(events.event_end), 'dd-MM-yyyy')}
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-center text-base"
        >
          {events.event_title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ItemEvents;
