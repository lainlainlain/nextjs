import { EventList } from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const events = getAllEvents();

  const router = useRouter();

  const findBySelectedDateHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={findBySelectedDateHandler}></EventSearch>
      <EventList items={events}></EventList>
    </div>
  );
};

export default EventsPage;
