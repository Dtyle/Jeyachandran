export function getAllDatesInMonthFromDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed, so August is 7

  const dates = [];
  const currentDate = new Date(year, month, 1); // Start at the first day of the month

  while (currentDate.getMonth() === month) {
    dates.push(new Date(currentDate).getDate()); // Get the date part and push to the array
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return dates;
}

const colors = ["#F8C628", "#FDEEBE", "#FEF4D4", "#FF4444"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
export const convertDatesToObjects = (dates) => {
  return dates.map((date) => ({
    date: date,
    color: getRandomColor(),
  }));
};
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};