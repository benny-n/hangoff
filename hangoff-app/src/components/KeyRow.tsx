import { Button, useTheme } from "@mui/material";
import React from "react";

export type KeyMap = any;

interface KeyRowProps {
  keys: string[];
  keyMap: KeyMap;
  setKeyMap: (keyboard: KeyMap) => void;
}

const KeyRow: React.FC<KeyRowProps> = (props) => {
  const theme = useTheme();
  const { keys, keyMap, setKeyMap } = props;
  const handleClick = (key: string) => {
    let newKeyboard = { ...keyMap };
    newKeyboard[key].used = "HANGOFF".includes(key);
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
          disabled={keyMap[letter].used !== undefined}
          onClick={(e: any) => handleClick(e.target.value)}
          sx={{
            minWidth: "40px",
            boxShadow: `0px 3px 1px ${theme.palette.primary.dark}`,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              transform: "translateY(1px)",
              boxShadow: `0px 3px 1px ${theme.palette.primary.dark}`,
            },
            "&:disabled": {
              backgroundColor: keyMap[letter].used
                ? `${theme.palette.success.light}`
                : undefined,
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

export default KeyRow;
