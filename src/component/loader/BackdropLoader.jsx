import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function BackdropLoader({ loader }) {
  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: "9999" }} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
