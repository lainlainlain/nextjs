import { useRouter } from 'next/router';
import { EventList } from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import React from 'react';
import { Button } from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';

const SomeFilteredData = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonths = filterData[1];

  const numYear = +filteredYear;
  const numMonths = +filteredMonths;

  if (isNaN(numYear) || isNaN(numMonths) || numYear > 2030 || numMonths < 1 || numMonths > 12) {
    return (
      <>
        {' '}
        <ErrorAlert>
          <p>Invalid Date</p>
        </ErrorAlert>{' '}
        <div className="center">
          <Button link="/events">Go back to events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonths });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Go back to events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonths - 1);

  return (
    <React.Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </React.Fragment>
  );
};

export default SomeFilteredData;
