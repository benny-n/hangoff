import React from "react";
import { Box, Typography } from "@mui/material";
import { dateTimeToString } from "./utils";

const Countdown: React.FC = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const [now, setNow] = React.useState(
    dateTimeToString(tomorrow.getTime() - today.getTime())
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let diff = tomorrow.getTime() - now.getTime();
      if (diff < 0) {
        tomorrow.setDate(tomorrow.getDate() + 1);
        diff = tomorrow.getTime() - now.getTime();
      }
      setNow(dateTimeToString(diff));
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
      <Typography fontSize="12px"> Resets in {now}</Typography>
    </Box>
  );
};

export default Countdown;
