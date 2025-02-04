import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardHeader from "./components/DashboardHeader";
import CameraOverview from "./components/CameraOverview";
import "./Dashboard.css";
import Analytics from "./components/Analytics";
import LiveAlerts from "./components/LiveAlerts";
import Facerecognition from "./components/Facerecognition";
import PersonList from "./components/PersonList";
import LicensePlate from "./components/LicensePlate";
import ANPR from "./components/ANPR";
import GenderAndEmotion from "./components/GenderAndEmotion";
import CrowdDetection from "./components/CrowdDetection";
import AgePercentage from "./components/AgePercentage";
import { useFetchData } from "../../hooks/useServiceApi";
import {
  getFace_recognition,
  getGenderEmotionCounts,
  getLicenceRecognition,
} from "../../services/apiUrls";
import moment from "moment";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const { data: GenderData } = useFetchData({
    key: "getGenderEmotionCounts",
    url: getGenderEmotionCounts,
  });

  const { data: FaceRecognition } = useFetchData({
    key: `getFace_recognition?date=${moment(date).format("YYYY-MM-DD")}`,
    url: `${getFace_recognition}?date=${moment(date).format("YYYY-MM-DD")}`,
  });

  const { data: LicenceData } = useFetchData({
    key: "getLicenceRecognition",
    url: getLicenceRecognition,
  });

  return (
    <React.Fragment>
      <div className="expire fixed-top d-flex justify-content-center align-items-center">
        <p className="mb-0 c-white f-14 fw-700 Helvetica Neue">
          Welcome to Jeyachandran!
        </p>
      </div>
      <Container fluid className="pb-5">
        <DashboardHeader date={date} setDate={setDate} />
        <Row>
          <Col md={5} lg={4} className="mb-3 px-2">
            <CameraOverview />
          </Col>
          <Col md={7} lg={8} className="mb-3 px-2">
            <Analytics date={date} />
          </Col>
          <Col md={12} lg={5} className="mb-3 px-2">
            <LiveAlerts data={FaceRecognition} date={date} setDate={setDate} />
          </Col>
          <Col md={6} lg={3} className="px-2">
            <Facerecognition data={FaceRecognition} />
            <PersonList data={FaceRecognition} />
          </Col>
          <Col md={6} lg={4} className="px-2">
            <ANPR data={LicenceData?.data} />
          </Col>
          <Col md={12} lg={8} className="px-2">
            <LicensePlate data={LicenceData?.data} />
          </Col>
          <Col md={12} lg={4} className="px-2">
            <GenderAndEmotion data={GenderData} />
          </Col>
          <Col md={12} lg={8} className="px-2">
            <CrowdDetection />
          </Col>
          <Col md={12} lg={4} className="px-2">
            <AgePercentage data={GenderData} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
