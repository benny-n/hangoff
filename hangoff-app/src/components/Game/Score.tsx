import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import CountUp from "react-countup";
import { useStore } from "../../hooks/useStore";

const ScoreComp: React.FC = () => {
  const {
    dataStore: { calculateFinalScore },
  } = useStore();
  const finalScore = calculateFinalScore();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <Typography fontWeight={1000} color="success.dark">
        {"SCORE: "}
        <CountUp end={finalScore} />
      </Typography>
    </Box>
  );
};

export const Score = observer(ScoreComp);
