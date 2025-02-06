import React from "react";
import age from "../../../../public/image/dashboard/age/age.svg";
import PieChart from "../../../component/chart/PieChart";
import { Col, Row } from "react-bootstrap";
import { AgeList, StatebasedList, TalukbasedList } from "../utils";
import LinearProgressBar from "../../../component/Progress/LinearProgressBar";

const AgePercentage = ({ data }) => {

  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={age} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Age %</p>
          <p className="f-13 mb-0 c-lightGrey">Percentage based on age</p>
        </div>
      </div>
      {data?.data?.ageGroupCounts?.map((item, index) => (
        <div key={index} className="py-2 mb-1">
          <label className="f-12 Helvetica Neue">{item?.age_group}</label>
          <div className="d-flex gap-3 align-items-center">
            <LinearProgressBar
              count={item?.percentage}
              color={AgeList[index]?.color}
            />
            <p className="mb-0 Helvetica Neue f-13 fw-700">
              {item?.percentage}%
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AgePercentage;
