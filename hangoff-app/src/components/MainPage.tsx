import { Box, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../hooks/useStore";
import { PageState } from "../types";

const MainPageComp: React.FC = () => {
  const {
    uiStore: { setPage },
    dataStore: { createRoom },
  } = useStore();

  const handleClickJoinRoom = () => {
    // TODO
  };

  const handleClickCreateRoom = () => {
    // FIXME
    createRoom();
    setPage(PageState.Room);
  };

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
          sx={{ minWidth: "290px", minHeight: "70px" }}
          variant="contained"
          onClick={() => handleClickJoinRoom()}
        >
          <Typography fontSize="30px">Join Room</Typography>
        </Button>
        <Button
          sx={{ minWidth: "290px", minHeight: "70px" }}
          variant="contained"
          onClick={() => handleClickCreateRoom()}
        >
          <Typography fontSize="30px">Create Room</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export const MainPage = observer(MainPageComp);
