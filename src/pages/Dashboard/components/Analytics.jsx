import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AnalticsList } from "../utils";
import SingleDatePicker from "../../../component/Forms/SingleDatePicker";

const Analytics = () => {
  const [date, setDate] = useState(null);

  return (
    <section className="custom-cards p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-700 Helvetica Neue mb-0">Analytics</p>
        <div>
          <SingleDatePicker date={date} setDate={setDate} />
        </div>
      </div>
      <Row className="px-2">
        {AnalticsList.map((item, index) => {
          return (
            <Col key={index} className="p-1" md={6} lg={6} xl={6}>
              <div
                className="grey-card p-2"
                style={{ backgroundColor: item.color }}
              >
                <div className="d-flex align-items-center gap-3">
                  <img src={item.image} alt="i" />
                  <div className="w-100">
                    <p className="f-14 mb-0">{item.title}</p>
                    <div className="d-flex">
                      <p className="f-18 flex-grow-1 fw-700 mb-0">
                        {item.count}
                      </p>
                      <p className="f-18 flex-grow-1 fw-700 mb-0">
                        {item.count1}
                      </p>
                    </div>
                  </div>
                </div>
                <small className="c-lightGrey f-12">{item.desc}</small>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Analytics;
