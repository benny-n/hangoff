import { Box, Typography } from "@mui/material";
import { Timer as TimerIcon } from "@mui/icons-material";
import React from "react";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { dateTimeToString } from "./utils";

const TimerComp: React.FC = () => {
  const begin = new Date();
  const [now, setNow] = React.useState("00:00:00");
  const {
    dataStore: { isGameOver, gameResults, updateGameResults },
  } = useStore();

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - begin.getTime();
      setNow(dateTimeToString(diff));
    }, 1000);
    if (isGameOver) {
      clearInterval(interval);
      let newGameResults = { ...gameResults };
      newGameResults.time = now;
      updateGameResults(newGameResults);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);
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

export const Timer = observer(TimerComp);
