import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomInput from "../../../component/Forms/CustomInput";

const RuleDetails = () => {
  const [checkIndex, setCheckIndex] = useState(0);
  return (
    <section className="custom-cards rule p-3 mb-3">
      <p className="fw-700 f-20 Helvetica Neue mb-0">Rule Details</p>
      <small className="f-14 c-lightGrey">Enter rule details to manually</small>
      <Row className="mt-3">
        <Col md={6} className="mb-2">
          <CustomInput
            label="Rule Name"
            type="text"
            placeholder="Enter here..."
          />
        </Col>
        <Col md={6} className="mb-2">
          <CustomInput
            label="Rule Type"
            type="select"
            options={[
              { id: "option1", label: "Option 1" },
              { id: "option2", label: "Option 2" },
            ]}
            valKey="id"
            labelKey="label"
          />
        </Col>
        <Col md={6} className="mb-2">
          <div className="mb-2">
            <label className="mb-2 label">Model Strength</label>
            <ul className="p-0 mb-0">
              {["Efficient", "Optimized", "Accurate"].map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    checkIndex === index ? "active" : ""
                  }`}
                  onClick={() => setCheckIndex(index)}
                >
                  <small className="f-13">{item}</small>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={6} className="mb-2">
          <CustomInput
            label="Rule Definition"
            type="select"
            options={[
              { id: "option1", label: "Option 1" },
              { id: "option2", label: "Option 2" },
            ]}
            valKey="id"
            labelKey="label"
          />
        </Col>
      </Row>
    </section>
  );
};

export default RuleDetails;
