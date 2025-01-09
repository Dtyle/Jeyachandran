import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SwitchButton from "../../../component/Forms/SwitchButton";
import DateRangePicker from "../../../component/Forms/DateRangePicker";
import TimeRangePicker from "../../../component/Forms/TimeRangePicker";
import { CustemAlertField } from "../utils";
import ParentComponent from "./Parent";

const CustomAndAlert = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [timeRange, setTimeRange] = useState([null, null]);
  const handleChange = (event) => {
    setTimeRange(event.target.value);
  };

  const onHandleChange = (event) => {
    setDateRange(event.target.value);
  };
  return (
    <section className="custom-cards rule p-3 mb-3">
      <p className="fw-700 f-20 Helvetica Neue mb-0">Custom & Alert details</p>
      <small className="f-14 c-lightGrey">
        Enter the below details manually
      </small>
      <Row>
        <Col md={9}>
          <Row>
            <Col md={6} className="px-2 mt-3">
              <div className="grey-card p-3">
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <p className="mb-0 f-14">Custom Date Range</p>
                  <SwitchButton />
                </div>
                <DateRangePicker
                  date={dateRange}
                  key_name="date"
                  handleChange={onHandleChange}
                />
              </div>
            </Col>
            <Col md={6} className="px-2 mt-3">
              <div className="grey-card p-3">
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <p className="mb-0 f-14">Custom Time Range</p>
                  <SwitchButton />
                </div>
                <TimeRangePicker
                  key_name="timeRange"
                  time={timeRange}
                  handleChange={handleChange}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="px-2 mt-3">
          <div className="grey-card p-3 text-center h-100">
            <p className="f-14 mb-3">Audio Alert</p>
            <div className="d-flex justify-content-center">
              <SwitchButton />
            </div>
          </div>
        </Col>
        <Col md={12} className="px-2 mt-3">
          <div className="grey-card p-3 text-center h-100">
            <div className="d-flex justify-content-between mb-2 align-items-center border-bottom pb-2">
              <p className="mb-0 f-14">Custom Alert</p>
              <SwitchButton />
            </div>
            {CustemAlertField.map((item, index) => (
              <div key={index} className="mt-3 d-flex gap-3 align-items-center">
                <img src={item.image} alt="i" />
                <div className="flex-grow-1">
                  <item.tag {...item} />
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CustomAndAlert;
