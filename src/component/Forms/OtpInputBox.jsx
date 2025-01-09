import React, { useState, createRef } from "react";
import { Col, Row } from "react-bootstrap";

function OtpInputBox({ label }) {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputs = Array(4)
    .fill(0)
    .map(() => createRef());

  const handleChange = (element, index) => {
    if (isNaN(element.value) || element.value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to the next input box
    if (element.value && index < 3) {
      inputs[index + 1].current.focus();
    }
  };

  const handleBackspace = (element, index) => {
    if (index > 0 && !element.value) {
      inputs[index - 1].current.focus();
    }
  };

  return (
    <div>
      <label className="label mb-2">{label}</label>
      <Row className="">
        {otp.map((data, index) => (
          <Col xs={3} key={index}>
            <input
              ref={inputs[index]}
              type="number"
              value={data}
              className="otp-input"
              maxLength="1"
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) =>
                e.key === "Backspace" ? handleBackspace(e.target, index) : null
              }
              onFocus={(e) => e.target.select()}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OtpInputBox;
