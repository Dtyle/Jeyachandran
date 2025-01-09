import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SingleDatePicker = ({ withoutBorder, date, setDate }) => {

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const increaseDate = () => {
    if (date) {
      setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // Add one day
    } else {
      setDate(new Date()); // If no date is selected, set to today's date
    }
  };

  const decreaseDate = () => {
    if (date) {
      setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000)); // Subtract one day
    } else {
      setDate(new Date()); // If no date is selected, set to today's date
    }
  };

  return (
    <div className="d-flex gap-2 single-date-picker">
      <DatePicker
        selected={date || new Date()}
        onChange={handleDateChange}
        className={`${
          withoutBorder
            ? "single-date-without-border cursor-pointer"
            : "input-style single-date"
        }`}
        showYearDropdown
        dateFormat={withoutBorder ? "eee, dd MMM YYYY" : "MMMM, dd/yyyy"}
        placeholderText="Select Date"
      />
      {!withoutBorder && (
        <div className="d-flex gap-2">
          <IoIosArrowBack className="icon" onClick={decreaseDate} />
          <IoIosArrowForward className="icon" onClick={increaseDate} />
        </div>
      )}
    </div>
  );
};

export default SingleDatePicker;
