import React from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

const TimeRangePick = (props) => {
  const { key_name, handleChange, time } = props;

  const handleTimeChange = (times) => {
    console.log("Selected Times:", times);
    if (times && times.length === 2) {
      handleChange({ target: { name: key_name, value: times } });
    }
  };

  return (
    <TimeRangePicker
      onChange={handleTimeChange}
      value={time}
      // className="input-style" // Add custom styling if needed
      disableClock={true} // Option to disable the clock component if you want a cleaner UI
      clearIcon={null} // Option to remove the clear icon if not needed
    />
  );
};

export default TimeRangePick;
