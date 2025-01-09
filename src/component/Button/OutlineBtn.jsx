import { Button } from "@mui/material";
import React from "react";

const OutlineBtn = ({ btnName, additionalStyle, handleClick }) => {
  return (
    <Button className={`outline-btn ${additionalStyle}`} onClick={handleClick}>
      {btnName}
    </Button>
  );
};

export default OutlineBtn;
