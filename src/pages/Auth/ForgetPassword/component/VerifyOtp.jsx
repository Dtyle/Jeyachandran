import React from "react";
import CustomButton from "../../../../component/Button/CustomButton";
import OtpInputBox from "../../../../component/Forms/OtpInputBox";

const VerifyOtp = ({ setStage }) => {
  return (
    <div className="form-box ">
      <h3 className="f-20 fw-700 text-center mt-4">Password reset code</h3>
      <p className="f-14 fw-500 text-center mt-4 px-4">
        We sent a code to alihussainmohammad@gmail.com{" "}
      </p>
      <OtpInputBox label="Verfication Code" />
      <CustomButton
        btnName="Submit"
        additionalStyle="w-100 radius-39 mt-4"
        handleClick={() => setStage(3)}
      />
    </div>
  );
};

export default VerifyOtp;
