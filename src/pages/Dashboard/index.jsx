import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../redux/reducer/userSlice";
import { useFetchData } from "../../hooks/useServiceApi";
import { getGenderEmotionCounts } from "../../services/apiUrls";
const Dashboard = () => {
  const { data: GenderData } = useFetchData({
    key: "getGenderEmotionCounts",
    url: getGenderEmotionCounts,
  });
  console.log(GenderData);
  return (
    <React.Fragment>
      <div className="expire fixed-top d-flex justify-content-center align-items-center">
        <p className="mb-0 c-white f-14 fw-700 Helvetica Neue">
          Your license will expires in 7 days!
        </p>
      </div>
      <Container fluid className="pb-5">
        <DashboardHeader />
        <Row>
          <Col md={5} lg={4} className="mb-3 px-2">
            <CameraOverview />
          </Col>
          <Col md={7} lg={8} className="mb-3 px-2">
            <Analytics />
          </Col>
          <Col md={12} lg={5} className="mb-3 px-2">
            <LiveAlerts />
          </Col>
          <Col md={6} lg={3} className="px-2">
            <Facerecognition />
            <PersonList />
          </Col>
          <Col md={6} lg={4} className="px-2">
            <ANPR />
          </Col>
          <Col md={12} lg={8} className="px-2">
            <LicensePlate />
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
