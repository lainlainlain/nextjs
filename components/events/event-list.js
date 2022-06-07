import { EventItem } from './event-item';

import styles from './event-list.module.css';

export const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => {
        return <EventItem key={event.id} {...event}></EventItem>;
      })}
    </ul>
  );
};
