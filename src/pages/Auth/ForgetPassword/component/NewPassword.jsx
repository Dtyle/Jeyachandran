import React from "react";
import CustomInput from "../../../../component/Forms/CustomInput";
import CustomButton from "../../../../component/Button/CustomButton";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="form-box ">
      <h3 className="f-20 fw-700 text-center mt-4">Set a new password</h3>
      <p className="f-14 fw-500 text-center mt-4 px-4">
        Password must be at least 8 characters
      </p>
      <CustomInput
        label="Password"
        type="password"
        placeholder="Enter Password"
        specialClass="h-50px mb-1"
      />
      <CustomInput
        label="Confirm Password"
        type="password"
        placeholder="Enter Password"
        specialClass="h-50px mb-1"
      />
      <CustomButton
        btnName="Reset Password"
        additionalStyle="w-100 radius-39 mt-4"
        handleClick={() => navigate("/login")}
      />
    </div>
  );
};

export default NewPassword;
