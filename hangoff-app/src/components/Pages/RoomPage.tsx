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
import Timer from "../Common/Timer";

const RoomPageComp: React.FC = () => {
  const {
    dataStore: { roomState },
    uiStore: { chatFocused, setChatFocused },
  } = useStore();
  <Timer />;

  const handleClickSend = () => {
    if (!chatFocused) {
      return;
    }
    // TODO
    console.log("Send");
  };

  <Timer />;

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
        <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "grid", marginTop: "-15px" }}>
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
                  marginLeft: "450px",
                  marginTop: "150px",
                }}
              >
                <Typography variant="h5" color="text.secondary">
                  {"<WIN/LOSE MESSAGE>"}
                </Typography>
              </Box>
            </Box>
            <Keyboard />
          </Box>
          <Card
            sx={{ minWidth: "700px", minHeight: "400px", marginBottom: "-3px" }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "92.5%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <Typography variant="h5" color="text.primary">
                  ROOM CODE: {roomState.roomCode}
                </Typography>
                <Timer />
              </Box>
              <Card
                sx={{
                  textAlign: "left",
                  backgroundColor: "#252525",
                }}
              >
                <CardContent sx={{ minHeight: "200px" }}>
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
