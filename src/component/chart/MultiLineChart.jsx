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

const MultiLineChart = ({ labels, list }) => {
  const data = {
    labels: labels || [
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
    datasets:
      list?.map((NavItem, index) => ({
        label: [
          "Ground Floor",
          "First Floor",
          "Second Floor",
          "Third Floor",
          "Fourth Floor",
        ][index],
        data: NavItem?.totalPeople || [],
        borderColor: ["#5C4FC3", "#FF4444", "#52CC7B", "#FFCD35", "#D8C4B6"][
          index
        ],
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Adds a curve to the line
      })) || [],
  };

  return <Line height={85} data={data} options={options} />;
};

export default MultiLineChart;
