import { getApiEvents } from '@/services/apiEvents';
import { useQuery } from '@tanstack/react-query';
interface Events {
  event_id: string;
  event_title: string;
  event_start: Date;
  event_end: Date;
  event_poster: string;
}
export function useEvents() {
  const { isLoading, data: events } = useQuery<Events[]>({
    queryKey: ['events'],
    queryFn: getApiEvents,
  });
  return { isLoading, events };
}
