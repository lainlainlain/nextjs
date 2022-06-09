import React from 'react';

import { Button } from '../ui/Button';

import classes from './event-search.module.css';

function EventSearch({ onSearch }) {
  const yearSelectRef = React.useRef();
  const monthSelectRef = React.useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearSelectRef.current.value;
    const selectedMonth = monthSelectRef.current.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearSelectRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>{' '}
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthSelectRef}>
            <option value="1">January</option>
            <option value="2">Febr</option>
            <option value="3">March</option>
            <option value="4">APril</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12"> 12</option>
          </select>
        </div>
      </div>

      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;
