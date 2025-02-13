import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { Col, Row } from "react-bootstrap";
import { BsFillSquareFill } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";

Chart.register(ArcElement, Tooltip);

const options = {
  plugins: {
    legend: { display: false },
  },
  elements: {
    arc: { borderWidth: 0 },
  },
  cutout: 0,
  spacing: 0,
};

const ITEMS_PER_PAGE = 5;

const PieChart = ({ title, list }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);

  const paginatedList = list.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Row className="justify-content-center align-items-center py-2">
      <Col xs={8} sm={5} lg={5}>
        <Pie
          data={{
            labels: list.map((item) => item.label),
            datasets: [
              {
                data: list.map((item) => item.count),
                backgroundColor: list.map((item) => item.color),
                hoverOffset: 4,
              },
            ],
          }}
          options={options}
        />
        <p className="mb-2 text-center f-13 fw-600 mt-3">{title}</p>
      </Col>
      <Col xs={12} sm={7} lg={7}>
        <div>
          <ul className="mb-0 px-2">
            {paginatedList.map((item, index) => (
              <li key={index} className="d-flex justify-content-between">
                <p className="c-darkGrey fw-600 f-13 mb-2">
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
          {list.length > ITEMS_PER_PAGE && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default PieChart;
