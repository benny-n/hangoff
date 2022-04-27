import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";
import { GameMode } from "../../types";
import { Timer } from "../Time/Timer";
import { EndGameBox } from "../Game/EndGameBox";
import Hangman from "../Game/Hangman";
import { Keyboard } from "../Game/Keyboard";
import { Word } from "../Game/Word";
import { RoomCard } from "../Room/RoomCard";

const RoomPageComp: React.FC = () => {
  const {
    dataStore: { roomState, isGameOver },
  } = useStore();

  return (
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
      {roomState.gameMode !== GameMode.Multiplayer && <Timer />}
      <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "grid", marginTop: "-15px" }}>
            <Box sx={{ gridRow: 1, gridColumn: 1 }}>
              <Hangman {...{ isFaded: true }} />
            </Box>
            <Box sx={{ gridRow: 1, gridColumn: 1 }}>
              <Hangman {...{ state: roomState.hangmanState, isFaded: false }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                marginLeft: "450px",
                marginTop: "150px",
              }}
            >
              {isGameOver && <EndGameBox />}
            </Box>
          </Box>
          <Keyboard />
        </Box>
        {roomState.gameMode === GameMode.Multiplayer && <RoomCard />}
      </Box>
    </Box>
  );
};

export const RoomPage = observer(RoomPageComp);
