import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};
