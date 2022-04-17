import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Hangman, { HangmanState } from "./Hangman";
import Keyboard from "./Keyboard";

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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "grid" }}>
            <Box sx={{ gridRow: 1, gridColumn: 1 }}>
              <Hangman
                {...{ state: hangmanState as HangmanState, isFaded: false }}
              />
            </Box>
            <Box sx={{ gridRow: 1, gridColumn: 1 }}>
              <Hangman
                {...{ state: hangmanState as HangmanState, isFaded: true }}
              />
            </Box>
          </Box>
          <Keyboard />
        </Box>
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
