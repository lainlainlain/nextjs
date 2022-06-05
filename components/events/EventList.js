import { EventItem } from './EventItem';

export const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => {
        return <EventItem key={event.id} {...event}></EventItem>;
      })}
    </ul>
  );
};
