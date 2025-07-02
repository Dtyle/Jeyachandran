import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import RuleDetails from "./component/RuleDetails";
import "./Camerafeed.css";
import CameraMonitor from "./component/CameraMonitor";

const CameraFeed = () => {
  const [lines, setLines] = useState([]); // Store lines state

  return (
    <React.Fragment>
      <Row className="mt-2 pb-5">
        <Col md={6} className="px-2">
          <RuleDetails lines={lines} />
          {/* <CustomAndAlert /> */}
        </Col>
        <Col md={6} className="px-2">
          <CameraMonitor lines={lines} setLines={setLines} />
          {/* <ActionManagement /> */}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CameraFeed;
