import { Timer as TimerIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";
import { elapsedFrom } from "./utils";

const TimerComp: React.FC = () => {
  const {
    dataStore: {
      isGameOver,
      roomState: { startedAt, elapsed },
    },
  } = useStore();
  const [now, setNow] = React.useState(
    isGameOver ? elapsed : elapsedFrom(startedAt || new Date().getTime())
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = elapsedFrom(startedAt);
      setNow(elapsed);
    }, 1000);
    if (isGameOver) {
      clearInterval(interval);
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
        {isGameOver ? elapsed : now}
      </Typography>
    </Box>
  );
};

export const Timer = observer(TimerComp);
