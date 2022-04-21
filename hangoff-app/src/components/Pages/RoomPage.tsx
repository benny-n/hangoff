import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";
import Hangman from "../Game/Hangman";
import { Keyboard } from "../Game/Keyboard";
import { Word } from "../Game/Word";
import useEventListener from "@use-it/event-listener";

const RoomPageComp: React.FC = () => {
  const {
    dataStore: { roomState },
    uiStore: { chatFocused, setChatFocused },
  } = useStore();

  const handleClickSend = () => {
    if (!chatFocused) {
      return;
    }
    // TODO
    console.log("Send");
  };

  useEventListener("keydown", (event: Event) => {
    if (!chatFocused) {
      return;
    }
    const key = (event as any).key;
    if (key === "Enter") {
      handleClickSend();
    }
  });

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
                <Hangman {...{ isFaded: true }} />
              </Box>
              <Box sx={{ gridRow: 1, gridColumn: 1 }}>
                <Hangman
                  {...{ state: roomState.hangmanState, isFaded: false }}
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      sx={{ borderColor: "#fff", width: "100%" }}
                      label={"Send a message"}
                      onFocus={() => setChatFocused(true)}
                      onBlur={() => setChatFocused(false)}
                      size="small"
                    />
                    <IconButton
                      color={chatFocused ? "primary" : undefined}
                      onClick={() => handleClickSend()}
                    >
                      <SendIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export const RoomPage = observer(RoomPageComp);
