import React, { useMemo, useState } from "react";
import { convertDatesToObjects, getAllDatesInMonthFromDate } from "../../utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useResponsive from "../../hooks/useResponsive";

const CustomDateUi = ({ date, setDate }) => {
  const { isMobileDevice } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(9); // Start with the last date in the initial range
  const fullDate = useMemo(() => {
    const currentMonthDates = getAllDatesInMonthFromDate(
      new Date(date.getFullYear(), date.getMonth(), 1)
    );
    const previousMonthDates = getAllDatesInMonthFromDate(
      new Date(date.getFullYear(), date.getMonth() - 1, 1)
    );
    return [...previousMonthDates, ...currentMonthDates];
  }, [date]);
  const dates = useMemo(() => {
    const currentDate = date.getDate();
    const currentMonthStartIndex = fullDate.lastIndexOf(1);
    const totalDates = fullDate.length;
    const startIndex = Math.max(currentDate - 9, 0);
    const endIndex = Math.min(currentDate + currentMonthStartIndex, totalDates);
    return fullDate.slice(startIndex, endIndex).slice(isMobileDevice ? -6 : -9);
  }, [currentIndex, fullDate, date, isMobileDevice]);

  const handleNextDate = () => {
    if (currentIndex < fullDate.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setDate(
        new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
      );
    }
  };

  const handlePrevDate = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setDate(
        new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)
      );
    }
  };
  const finalDate = convertDatesToObjects(dates);
  return (
    <div className="d-flex justify-content-between custom-date mt-3">
      <button onClick={handlePrevDate}>
        <FaChevronLeft className="f-13" />
      </button>
      <ul className="mb-0 gap-2 px-0">
        {finalDate?.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => {
                setDate(
                  new Date(date.getFullYear(), date.getMonth(), item.date)
                );
              }}
              className={`f-13 d-flex justify-content-center align-items-center date ${
                item.date == date.getDate() ? "active-date" : ""
              }`}
            >
              {item.date < 10 ? `0${item.date}` : item.date}
            </div>
            <div
              className="indicator m-auto mt-2"
              style={{ background: item.color }}
            ></div>
          </li>
        ))}
      </ul>
      <button onClick={handleNextDate}>
        <FaChevronRight className="f-13" />
      </button>
    </div>
  );
};

export default CustomDateUi;
