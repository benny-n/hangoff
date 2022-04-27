import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useFetchWord } from "../../hooks/useFetchWord";
import { useStore } from "../../hooks/useStore";
import { GameMode, PageState } from "../../types";
import Countdown from "../Time/Countdown";

const MainPageComp: React.FC = () => {
  const {
    uiStore: { setPage },
    dataStore: { createRoom, roomState, updateRoom },
  } = useStore();
  const [triggerFetchWord, setTriggerFetchWord] = React.useState(false);
  const { data: word, isSuccess, isLoading } = useFetchWord(triggerFetchWord);

  const handleClickCreateRoom = (gameMode: GameMode) => {
    createRoom(gameMode);
    setTriggerFetchWord(true);
  };

  React.useEffect(() => {
    if (isSuccess) {
      let newRoomState = { ...roomState };
      newRoomState.word = word;
      updateRoom(newRoomState);
      setPage(PageState.Room);
    }
    return () => {
      setTriggerFetchWord(false);
    };
  }, [isSuccess, roomState, setPage, updateRoom, word]);

  return (
    <Box>
      <img src="/hangoff.svg" className="App-logo" alt="logo" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Button
          sx={{ minWidth: "290px", minHeight: "70px", textTransform: "none" }}
          variant="contained"
          onClick={() => handleClickCreateRoom(GameMode.Daily)}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize="30px">DAILY</Typography>
            <Countdown />
          </Box>
        </Button>
        <Button
          sx={{ minWidth: "290px", minHeight: "70px" }}
          variant="contained"
          onClick={() => handleClickCreateRoom(GameMode.Multiplayer)}
          disabled
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize="30px">Multiplayer</Typography>
            <Typography fontSize="12px" color="text.secondary">
              (coming soon)
            </Typography>
          </Box>
        </Button>
        <Backdrop open={isLoading}>
          <CircularProgress color="info" />
        </Backdrop>
      </Box>
    </Box>
  );
};

export const MainPage = observer(MainPageComp);
