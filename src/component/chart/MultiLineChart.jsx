import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register necessary components
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top", // Position of the legend
    },
    title: {
      display: false,
      text: "Multi-Line Chart with Thread-Like Lines",
    },
  },
  scales: {
    x: {
      title: {
        display: false,
        text: "X Axis Label",
      },
    },
    y: {
      title: {
        display: false,
        text: "Y Axis Label",
      },
      ticks: {
        stepSize: 10, // Adjust the interval between tick marks
        maxTicksLimit: 6, // Limit the number of tick marks to 5
      },
    },
  },
};

const MultiLineChart = () => {
  const data = {
    labels: [
      "12:00pm",
      "1:00pm",
      "2:00pm",
      "4:00pm",
      "5:00pm",
      "6:00pm",
      "7:00pm",
      "8:00pm",
      "9:00pm",
      "10:00pm",
    ],
    datasets: [
      {
        label: "Gold",
        data: [2, 4, 5, 10, 15, 3, 1, 2, 13, 21],
        borderColor: "#5C4FC3",
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Adds a curve to the line
      },
      {
        label: "Platinum",
        data: [4, 20, 8, 12, 0, 0, 6, 0, 2, 0],
        borderColor: "#FF4444",
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Adds a curve to the line
      },
      {
        label: "Diamond",
        data: [1, 4, 0, 0, 20, 30, 0,25, 0, 0],
        borderColor: "#52CC7B",
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Adds a curve to the line
      },
      {
        label: "Silver",
        data: [12, 22, 50, 29, 6, 37, 60, 28, 50, 49],
        borderColor: "#FFCD35",
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Adds a curve to the line
      },
    ],
  };

  return <Line height={85} data={data} options={options} />;
};

export default MultiLineChart;
