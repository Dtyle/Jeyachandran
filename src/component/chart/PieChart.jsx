import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Col, Row } from "react-bootstrap";
import { BsFillSquareFill } from "react-icons/bs";

// Register the required components
Chart.register(ArcElement, Tooltip);

const options = {
  plugins: {
    legend: {
      display: false, // Display the legend (optional)
    },
  },
  elements: {
    arc: {
      borderWidth: 0, // Ensure no borders between segments
    },
  },
  cutout: 0, // Optional: If using a Doughnut chart, this controls the inner radius
  spacing: 0, // Removes the spacing between segments
};

const PieChart = ({ title, list }) => {
  const transformedData = {
    labels: list.map((item) => item.label),
    datasets: [
      {
        data: list.map((item) => item.count),
        backgroundColor: list.map((item) => item.color),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Row className="justify-content-center align-items-center py-2">
      <Col xs={8} sm={5} lg={5}>
        <Pie data={transformedData} options={options} />
        <p className="mb-2 text-center f-13 fw-600 mt-3">{title}</p>
      </Col>
      <Col xs={12} sm={7} lg={7}>
        <div>
          <ul className="mb-0 px-2">
            {list.map((item, index) => (
              <li key={index} className="d-flex justify-content-between">
                <p className="c-darkGrey fw-600 f-13 mb-2">
                  {" "}
                  <BsFillSquareFill
                    className="f-10 square-icon"
                    style={{ color: item.color }}
                  />
                  &nbsp; {item.label}
                </p>
                <p className="f-14 fw-700 mb-2">{item.count}</p>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default PieChart;
