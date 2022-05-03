import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Slide, Snackbar, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useStore } from "../../hooks/useStore";
import { GameMode, GameState } from "../../types";
import { Score } from "./Score";

const EndGameBoxComp: React.FC = () => {
  const { isMobile } = useDeviceType();
  const [copyToClipboardAlert, setCopyToClipboardAlert] = React.useState(false);
  const {
    dataStore: {
      roomState: { gameState, gameMode, word },
      shareGameResults,
    },
  } = useStore();

  let isWin;
  if (gameMode === GameMode.Daily) {
    isWin = gameState === GameState.GameOverClientWon;
  } else {
    // TODO: Multiplayer
  }

  const handleClickShare = () => {
    setCopyToClipboardAlert(true);
    navigator.clipboard.writeText(shareGameResults());
  };

  return (
    <>
      <Slide in={true} timeout={500}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 0.5 : 2,
          }}
        >
          {!isWin && (
            <Typography variant={isMobile ? "h5" : "h4"} color="text.secondary">
              {word}
            </Typography>
          )}
          <Typography variant={isMobile ? "h6" : "h5"} color="text.secondary">
            {`${isWin ? "You won!" : "Game over."}`}
          </Typography>
          <Score />
          <Button
            sx={{
              maxWidth: "100px",
              alignSelf: "center",
              alignItems: "center",
            }}
            variant="contained"
            size={isMobile ? "small" : undefined}
            endIcon={<ShareIcon />}
            onClick={() => handleClickShare()}
          >
            <Typography fontSize={isMobile ? "10px" : "undefined"}>
              Share
            </Typography>
          </Button>
        </Box>
      </Slide>
      <Snackbar
        open={copyToClipboardAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1500}
        onClose={() => setCopyToClipboardAlert(false)}
        message="Copied to Clipboard."
      />
    </>
  );
};

export const EndGameBox = observer(EndGameBoxComp);
