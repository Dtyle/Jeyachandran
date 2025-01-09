import React from "react";
import { Col, Row } from "react-bootstrap";
import RuleDetails from "./component/RuleDetails";
import "./Camerafeed.css";
import CustomAndAlert from "./component/CustomAndAlert";
import CameraMonitor from "./component/CameraMonitor";
import ActionManagement from "./component/ActionManagement";

const CameraFeed = () => {
  return (
    <React.Fragment>
      <Row className="mt-2 pb-5">
        <Col md={6} className="px-2">
          <RuleDetails />
          <CustomAndAlert />
        </Col>
        <Col md={6} className="px-2">
          <CameraMonitor />
          <ActionManagement />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CameraFeed;
