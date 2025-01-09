import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../auth.css";
import Logo from "../../../../public/image/dtile.svg";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import VerifyEmail from "./component/VerifyEmail";
import { FaArrowLeft } from "react-icons/fa";
import NewPassword from "./component/NewPassword";
import VerifyOtp from "./component/VerifyOtp";
const ForgetPassword = () => {
  const { isMobile } = useResponsive();
  const [stage, setStage] = useState(1);
  return (
    <Container fluid className="login">
      <Row className="justify-content-center">
        {!isMobile && (
          <Col md={6} lg={6} className="px-0">
            <Banner />
          </Col>
        )}
        <Col
          sm={8}
          md={6}
          lg={6}
          className="d-flex content-center flex-column justify-content-center"
        >
          <section className="p-5">
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="logo" />
            </div>
            {stage === 1 && <VerifyEmail setStage={setStage} />}
            {stage === 2 && <VerifyOtp setStage={setStage} />}
            {stage === 3 && <NewPassword />}
            <div className="d-flex justify-content-center align-items-center">
              <Link to="/login" className="c-black p-3 f-15">
                <FaArrowLeft />
                &nbsp; Back to login
              </Link>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgetPassword;
