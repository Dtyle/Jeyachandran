import React from "react";
import age from "../../../../public/image/dashboard/age/age.svg";
import PieChart from "../../../component/chart/PieChart";
import { Col, Row } from "react-bootstrap";
import { AgeList, StatebasedList, TalukbasedList } from "../utils";
import LinearProgressBar from "../../../component/Progress/LinearProgressBar";

const AgePercentage = ({ data }) => {
  const total = data?.data?.ageCounts?.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const result = data?.data?.ageCounts?.map((item) => ({
    age_group: item.age_group,
    percentage: ((item.count / total) * 100).toFixed(2),
  }));

  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={age} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Age %</p>
          <p className="f-13 mb-0 c-lightGrey">Percentage based on age</p>
        </div>
      </div>
      {result?.map((item, index) => (
        <div key={index} className="py-2 mb-1">
          <label className="f-12 Helvetica Neue">{item.age_group}</label>
          <div className="d-flex gap-3 align-items-center">
            <LinearProgressBar
              count={item.percentage}
              color={AgeList[index].color}
            />
            <p className="mb-0 Helvetica Neue f-13 fw-700">
              {item.percentage}%
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AgePercentage;
