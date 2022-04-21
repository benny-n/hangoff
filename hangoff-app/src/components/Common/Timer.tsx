import { Typography } from "@mui/material";
import React from "react";

const Timer: React.FC = () => {
  const begin = new Date();
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
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Typography variant="h5" color="primary">
      {now}
    </Typography>
  );
};

export default Timer;
