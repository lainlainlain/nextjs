import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById } from '../../dummy-data';
import { Button } from '../../components/ui/Button';

const DetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>Not Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Go back</Button>
        </div>
      </>
    );
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
