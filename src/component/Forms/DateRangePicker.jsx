import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = (props) => {
  const { key_name, handleChange, date } = props;

  const handleDateChange = (dates) => {
    if (dates) {
      const event = { target: { name: key_name, value: dates } };
      handleChange(event);
    }
  };
  return (
    <DatePicker
      selectsRange
      startDate={date[0]}
      endDate={date[1]}
      onChange={handleDateChange}
      isClearable
      className="input-style"
      showYearDropdown
      dateFormat="dd/MM/yyyy"
      placeholderText="Select Date Range"
    />
  );
};

export default DateRangePicker;
