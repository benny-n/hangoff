import { Button, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useStore } from "../../hooks/useStore";
import { capitalizedLetter, KeyRefsMap } from "../../types";

export type KeyMap = any;

interface KeyRowProps {
  keys: capitalizedLetter[];
  keyRefsMap: React.MutableRefObject<KeyRefsMap>;
}

const KeyRowComp: React.FC<KeyRowProps> = (props) => {
  const theme = useTheme();
  const { isTablet, isMobile } = useDeviceType();
  const { keys, keyRefsMap } = props;
  const {
    dataStore: {
      roomState: { usedLettersMap },
      updateGameState,
      isGameOver,
    },
  } = useStore();

  const handleClick = (key: capitalizedLetter) => {
    updateGameState(key);
  };

  return (
    <>
      {keys.map((letter) => (
        <Button
          variant="contained"
          key={letter}
          ref={(el) => (keyRefsMap.current[letter] = el)}
          value={letter}
          disabled={usedLettersMap[letter] !== undefined || isGameOver}
          onClick={(e: any) => handleClick(e.target.value)}
          sx={{
            minWidth: isMobile ? "15px" : isTablet ? "35px" : "50px",
            minHeight: isMobile ? "10px" : isTablet ? "25px" : "40px",
            fontSize: isMobile ? "8px" : isTablet ? "15px" : undefined,
            padding: isMobile ? "6px 10px" : undefined,
            boxShadow: `0px 3px 1px ${theme.palette.primary.dark}`,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              transform: "translateY(1px)",
              fontSize: isMobile ? "8px" : isTablet ? "15px" : undefined,
              padding: isMobile ? "6px 10px" : undefined,
              boxShadow: `0px 3px 1px ${theme.palette.primary.dark}`,
            },
            "&:disabled": {
              backgroundColor: usedLettersMap[letter]
                ? `${theme.palette.success.light}`
                : undefined,
              fontSize: isMobile ? "8px" : isTablet ? "15px" : undefined,
              padding: isMobile ? "6px 10px" : undefined,
              boxShadow: `0px 2px 1px ${theme.palette.primary.dark}`,
            },
          }}
        >
          {letter}
        </Button>
      ))}
    </>
  );
};

export const KeyRow = observer(KeyRowComp);
