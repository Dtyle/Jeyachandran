import React from "react";
import { Col, Row } from "react-bootstrap";
import CCTVCamera from "../../../../public/image/dashboard/camera-view/cctv-camera.svg";
import Accept from "../../../../public/image/dashboard/camera-view/accept.svg";
import Cancel from "../../../../public/image/dashboard/camera-view/cancel.svg";
import { useFetchData } from "../../../hooks/useServiceApi";
import { getCamera_overview } from "../../../services/apiUrls";

const CameraOverview = () => {
  const { data } = useFetchData({
    key: "getCamera_overview",
    url: getCamera_overview,
  });
  return (
    <div className="custom-cards px-2">
      <Row className="camera-overview">
        <Col xs={12} md={6} className="p-3 box1">
          <p className="fw-700 Helvetica Neue">Camera Overview</p>
          <p className="c-lightGrey text-left f-13 mb-0">
            Here you can see overall surveillance cameras count
          </p>
          <div className="d-flex justify-content-center py-3">
            <img src={CCTVCamera} alt="camera" />
          </div>
          <p className="text-center f-14">Total Cameras Count</p>
          <h3 className="text-center fw-700 f-24 mb-0">
            {data?.data?.total_cameras}
          </h3>
        </Col>
        <Col xs={12} md={6}>
          <Row className="h-100">
            <Col xs={6} sm={6} md={12} className="p-3 box2">
              <div className="card-box">
                <p className="f-14 d-flex">
                  <img src={Accept} alt="i" width={18} />
                  &nbsp; On duty - Working
                </p>
                <h3 className="fw-700 f-24">{data?.data?.on_duty_cameras}</h3>
                {/* <small className="c-lightGrey text-left f-13">
                  Same as yesterday{" "}
                </small> */}
              </div>
            </Col>
            <Col xs={6} sm={6} md={12} className="p-3">
              <div className="card-box">
                <p className="f-14 d-flex">
                  <img src={Cancel} alt="i" width={18} />
                  &nbsp;Off duty - Not working
                </p>
                <h3 className="fw-700 f-24">{data?.data?.off_duty_cameras}</h3>
                {/* <small className="c-lightGrey text-left f-13">
                  Same as yesterday{" "}
                </small> */}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CameraOverview;
