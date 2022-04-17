import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Hangman, { HangmanState } from "./Hangman";

const RoomPage: React.FC = () => {
  const [hangmanState, setHangmanState] = React.useState(0);
  return (
    <Box>
      <Typography variant="h2" color="text.primary">
        ROOM CODE: {"7SXD"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Hangman {...{ state: hangmanState as HangmanState }} />
        <Button
          size="large"
          variant="contained"
          onClick={() => setHangmanState((hangmanState + 1) % 12)}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default RoomPage;
