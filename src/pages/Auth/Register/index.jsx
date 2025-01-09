import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../auth.css";
import Logo from "../../../../public/image/dtile.svg";
import CustomInput from "../../../component/Forms/CustomInput";
import CheckBox from "../../../component/Forms/CheckBox";
import CustomButton from "../../../component/Button/CustomButton";
import useResponsive from "../../../hooks/useResponsive";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../component/Banner";
const Register = () => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  return (
    <Container fluid className="login">
      <Row className="justify-content-center">
        {!isMobile && (
          <Col md={6} lg={6} className="px-0">
            <Banner />
          </Col>
        )}
        <Col sm={8} md={6} lg={6}>
          <section className="p-5">
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="logo" />
            </div>
            <div className="form-box">
              <h3 className="f-20 fw-700 text-center mt-4">
                Register your account
              </h3>
              <p className="f-14 fw-500 text-center mt-3">
                Already have an account?{" "}
                <Link to="/login" className="c-blue cursor-pointer">
                  Log in
                </Link>
              </p>
              <CustomInput
                label="Email"
                type="email"
                placeholder="Enter Email"
                specialClass="h-50px  mb-1"
              />
              <CustomInput
                label="Mobile Number"
                type="number"
                placeholder="Enter mobile number"
                specialClass="h-50px mb-1"
              />
              <Row>
                <Col md={6} className="flex-grow-1">
                  <CustomInput
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    specialClass="h-50px mb-1"
                  />
                </Col>
                <Col md={6} className="flex-grow-1">
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    placeholder="Enter Password"
                    specialClass="h-50px mb-1"
                  />
                </Col>
              </Row>
              <CustomButton
                btnName="Register"
                additionalStyle="w-100 radius-39 mt-4"
                handleClick={() => navigate("/login")}
              />
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
