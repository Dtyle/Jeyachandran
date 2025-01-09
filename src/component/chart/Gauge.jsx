import React from "react";
import GaugeComponent from "react-gauge-component";
import { BsFillSquareFill } from "react-icons/bs";

const Gauge = () => {
  return (
    <React.Fragment>
      <div className="chart-gauge mt-3">
        <GaugeComponent
          // value={50}
          type="semicircle"
          labels={{
            tickLabels: {
              // Optional: Add custom tick labels if needed
            },
          }}
          arc={{
            colorArray: ["#5C4FC3", "#B9B1FF"],
            // subArcs: [{ limit: 10 }, { limit: 30 }, { limit: 40 }],
            padding: 0.02,
            width: 0.2,
          }}
          pointer={{
            show: false, // Hide the pointer
          }}
        />
        <div className="content">
          <p className="mb-0 text-center f-24 fw-700">904</p>
          <p className="text-center c-lightGrey mb-0 f-12">Total count</p>
        </div>
      </div>
      <div>
        <ul className="mb-0 px-2 mt-4">
          <li className="d-flex justify-content-between">
            <p className="c-darkGrey f-13 mb-2">
              {" "}
              <BsFillSquareFill className="f-10 square-icon c-darkGreen" />
              &nbsp; Suspected Count
            </p>
            <p className="f-14 fw-700 mb-2">1</p>
          </li>
          {/* <li className="d-flex justify-content-between">
            <p className="c-darkGrey f-13 mb-2">
              {" "}
              <BsFillSquareFill className="f-10 square-icon c-green" />
              &nbsp; Late
            </p>
            <p className="f-14 fw-700 mb-2">628</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="c-darkGrey f-13 mb-0">
              {" "}
              <BsFillSquareFill className="f-10 square-icon c-lightGreen" />
              &nbsp; Absent
            </p>
            <p className="f-14 fw-700 mb-0">4,350</p>
          </li> */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Gauge;
