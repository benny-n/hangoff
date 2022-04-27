import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Slide, Snackbar, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";
import { GameMode, GameState } from "../../types";

const EndGameBoxComp: React.FC = () => {
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {!isWin && (
            <Typography variant="h4" color="text.secondary">
              {word}
            </Typography>
          )}
          <Typography variant="h5" color="text.secondary">
            {`Game over, ${isWin ? "you won!" : "you lost."}`}
          </Typography>
          <Button
            sx={{ maxWidth: "80px", alignSelf: "center" }}
            variant="contained"
            endIcon={<ShareIcon />}
            onClick={() => handleClickShare()}
          >
            Share
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
