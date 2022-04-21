import { Box, Typography } from "@mui/material";
import { Timer as TimerIcon } from "@mui/icons-material";
import React from "react";

const begin = new Date();

const Timer: React.FC = () => {
  const [now, setNow] = React.useState("00:00:00");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - begin.getTime();
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const hours = Math.floor(minutes / 60);
      setNow(
        `${hours < 10 ? "0" + hours : hours}:${
          minutes % 60 < 10 ? `0${minutes % 60}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <TimerIcon color="primary" />
      <Typography variant="h5" color="primary">
        {now}
      </Typography>
    </Box>
  );
};

export default Timer;
