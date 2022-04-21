import { Button, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";

export type KeyMap = any;

interface KeyRowProps {
  keys: string[];
  keyMap: KeyMap;
  setKeyMap: (keyboard: KeyMap) => void;
}

const KeyRowComp: React.FC<KeyRowProps> = (props) => {
  const theme = useTheme();
  const { keys, keyMap, setKeyMap } = props;
  const {
    dataStore: { roomState, updateRoom },
  } = useStore();
  const handleClick = (key: string) => {
    let newKeyboard = { ...keyMap };
    let newRoomState = { ...roomState };
    let isInWord = roomState.word.includes(key);
    newKeyboard[key].used = isInWord;
    if (isInWord) {
      let indices = Array.from(roomState.word).reduce(
        // get all indices of the key in the word
        (acc: number[], char, idx) => (char === key ? [...acc, idx] : acc),
        []
      );
      newRoomState.guesses = newRoomState.guesses.concat(indices);
    } else {
      // FIXME - this is a hack to get the hangman to restart
      //newRoomState.hangmanState += 1;
      newRoomState.hangmanState = (newRoomState.hangmanState + 1) % 12;
    }
    updateRoom(newRoomState);
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

export const KeyRow = observer(KeyRowComp);
