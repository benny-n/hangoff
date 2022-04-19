import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";
import Hangman, { HangmanState } from "../Game/Hangman";
import Keyboard from "../Game/Keyboard";
import { Word } from "../Game/Word";

const RoomPageComp: React.FC = () => {
  const {
    dataStore: { roomState },
  } = useStore();
  console.log(roomState.word);
  const [hangmanState, setHangmanState] = React.useState(0);
  return (
    <Box>
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
        <Word {...{ word: roomState.word, guesses: roomState.guesses }} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
              <Box
                sx={{
                  position: "absolute",
                  marginLeft: "350px",
                  marginTop: "50px",
                }}
              >
                <Typography variant="h5" color="text.secondary">
                  {"<WIN/LOSE MESSAGE>"}
                </Typography>
              </Box>
            </Box>
            <Keyboard />
          </Box>
          <Card sx={{ minWidth: "500px", minHeight: "400px" }}>
            <CardContent>
              <Typography variant="h4" color="text.secondary">
                {"< "}Chat + Game State{" >"}
              </Typography>
              <Typography variant="h5" color="text.primary">
                ROOM CODE: {roomState.roomCode}
              </Typography>
              <Card
                sx={{
                  marginTop: "120px",
                  textAlign: "left",
                  minHeight: "150px",
                  backgroundColor: "#252525",
                }}
              >
                <CardContent>
                  <Typography variant="body1" color="text.primary">
                    GUY1: ...
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    GUY2: ...
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    GUY3: ...
                  </Typography>
                </CardContent>
                <CardActions>
                  <TextField
                    sx={{ width: "100%", borderColor: "#fff" }}
                    label={"Send a message"}
                  ></TextField>
                </CardActions>
              </Card>
            </CardContent>
          </Card>
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

export const RoomPage = observer(RoomPageComp);
