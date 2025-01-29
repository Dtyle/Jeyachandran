import React from "react";
import FileIcon from "../../../component/Icon/FileIcon";
import ButtonWhite from "../../../component/Button/ButtonWhite";
import { Col, Row } from "react-bootstrap";
import CapturePDF from "../utils/CapturePdf";

const DashboardHeader = () => {
  return (
    <Row className="pt-5">
      <Col md={6} className="mb-3">
        <p className="f-24 mb-0">Good morning, Admin !</p>
        <small className="c-lightGrey">
          Here is the information of your dashboard
        </small>
      </Col>
      <Col md={6} className="d-flex justify-content-end gap-1 mb-3">
        <div className="d-flex gap-1">
          <ButtonWhite>
            <FileIcon />
          </ButtonWhite>
          <CapturePDF />
        </div>
      </Col>
    </Row>
  );
};

export default DashboardHeader;
