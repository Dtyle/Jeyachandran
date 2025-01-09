import React from "react";
import CustomInput from "../../../../component/Forms/CustomInput";
import CustomButton from "../../../../component/Button/CustomButton";

const VerifyEmail = ({ setStage }) => {
  return (
    <div className="form-box">
      <h3 className="f-20 fw-700 text-center mt-4">Forgot password?</h3>
      <p className="f-14 fw-500 text-center mt-4 px-4">
        Enter your registered email address to get a verification code to rest
        your password
      </p>
      <CustomInput
        label="Email"
        type="email"
        placeholder="Enter Email"
        specialClass="h-50px mb-1"
      />
      <CustomButton
        btnName="Submit"
        additionalStyle="w-100 radius-39 mt-4"
        handleClick={() => setStage(2)}
      />
    </div>
  );
};

export default VerifyEmail;
