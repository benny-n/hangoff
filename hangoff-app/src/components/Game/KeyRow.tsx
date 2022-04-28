import { Button, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useStore } from "../../hooks/useStore";

export type KeyMap = any;

interface KeyRowProps {
  keys: string[];
  keyMap: KeyMap;
  setKeyMap: (keyboard: KeyMap) => void;
}

const KeyRowComp: React.FC<KeyRowProps> = (props) => {
  const theme = useTheme();
  const { isTablet, isMobile } = useDeviceType();
  const { keys, keyMap, setKeyMap } = props;
  const {
    dataStore: { roomState, updateGameState, isGameOver },
  } = useStore();
  const handleClick = (key: string) => {
    let newKeyboard = { ...keyMap };
    newKeyboard[key].used = roomState.word.includes(key);
    updateGameState(key);
    setKeyMap(newKeyboard);
  };

  return (
    <>
      {keys.map((letter) => (
        <Button
          variant="contained"
          key={letter}
          ref={(el) => (keyMap[letter].ref = el)}
          value={letter}
          disabled={keyMap[letter].used !== undefined || isGameOver}
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
              backgroundColor: keyMap[letter].used
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
