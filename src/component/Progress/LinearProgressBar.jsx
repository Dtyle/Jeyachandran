import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 20,
  },
}));

export default function LinearProgressBar({ count, color }) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={count}
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: color || "#5C4FC3",
          },
        }}
      />
    </Stack>
  );
}
