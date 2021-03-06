import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useFetchWord } from "../../hooks/useFetchWord";
import { useStore } from "../../hooks/useStore";
import { GameMode, PageState } from "../../types";
import Countdown from "../Time/Countdown";

const MainPageComp: React.FC = () => {
  const {
    uiStore: { setPage },
    dataStore: { createRoom, roomState, setRoomState },
  } = useStore();
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const [triggerFetchWord, setTriggerFetchWord] = React.useState(false);
  const { data: word, isSuccess, isLoading } = useFetchWord(triggerFetchWord);

  const handleClickCreateRoom = () => {
    setTriggerFetchWord(true);
  };

  React.useEffect(() => {
    if (isSuccess) {
      createRoom(GameMode.Daily, word);
      setPage(PageState.Room);
    }
    return () => {
      setTriggerFetchWord(false);
    };
  }, [isSuccess, roomState, word, setPage, setRoomState, createRoom]);

  return (
    <Box>
      <img
        src="/hangoff.svg"
        className="App-logo"
        alt="logo"
        style={{
          width: isMobile ? "280px" : isTablet ? "600px" : "1000px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Button
          sx={{
            minWidth: isMobile ? "100px" : isTablet ? "185px" : "290px",
            minHeight: "70px",
            textTransform: "none",
          }}
          variant="contained"
          onClick={() => handleClickCreateRoom()}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4">DAILY</Typography>
            <Countdown />
          </Box>
        </Button>
        <Button
          sx={{
            minWidth: isMobile ? "100px" : isTablet ? "185px" : "290px",
            minHeight: "70px",
          }}
          variant="contained"
          disabled
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4">Multiplayer</Typography>
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
