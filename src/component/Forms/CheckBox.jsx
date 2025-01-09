import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBox = ({ label }) => {
  return <FormControlLabel control={<Checkbox size="small" />} label={label} />;
};

export default CheckBox;
