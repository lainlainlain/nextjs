import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../dummy-data';

const DetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default DetailPage;
