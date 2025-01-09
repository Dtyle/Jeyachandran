import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Col, Row } from "react-bootstrap";
import { BsFillSquareFill } from "react-icons/bs";

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

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
  cutout: "70%", // Controls the inner radius, making it a donut chart
  spacing: 2, // Removes the spacing between segments
};

const DonutChart = ({ title, list }) => {
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
    <Row className="align-items-center donut py-1">
      <Col
        md={4}
        lg={4}
        className="position-relative mb-2 d-flex justify-content-center align-items-center"
      >
        <Doughnut data={transformedData} options={options} />
        <div className="position-absolute text-center">
          <strong className="mb-0 f-16 fw-700">100%</strong>
        </div>
      </Col>
      <Col md={7} lg={8}>
        <div>
          <ul className="mb-0 px-2">
            {list.map((item, index) => (
              <li className="d-flex justify-content-between" key={index}>
                <p className="c-darkGrey fw-600 f-13 mb-2">
                  <BsFillSquareFill
                    className="f-10 square-icon"
                    style={{ color: item.color }}
                  />
                  &nbsp; {item.label}
                </p>
                <p className="f-14 fw-700 mb-2">{item.count}%</p>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default DonutChart;
