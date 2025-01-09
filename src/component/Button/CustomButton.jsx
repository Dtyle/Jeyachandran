import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ btnName, additionalStyle, handleClick }) => {
  return (
    <Button className={`custom-btn ${additionalStyle}`} onClick={handleClick}>
      {btnName}
    </Button>
  );
};

export default CustomButton;
