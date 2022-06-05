import { getFeaturedEvents } from '../dummy-data';
import { EventList } from '../components/events/EventList';

export default function Home() {
  const events = getFeaturedEvents();

  return (
    <div>
      <EventList items={events}></EventList>
    </div>
  );
}
