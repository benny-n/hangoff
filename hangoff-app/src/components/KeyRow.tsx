import { Button } from "@mui/material";
import React from "react";

export type KeyMap = any;

interface KeyRowProps {
  keys: string[];
  keyMap: KeyMap;
  setKeyMap: (keyboard: KeyMap) => void;
}

const KeyRow: React.FC<KeyRowProps> = (props) => {
  const { keys, keyMap, setKeyMap } = props;
  const handleClick = (key: string) => {
    let newKeyboard = { ...keyMap };
    newKeyboard[key].used = true;
    setKeyMap(newKeyboard);
  };

  return (
    <>
      {keys.map((letter) => (
        <Button
          variant="contained"
          key={letter}
          ref={keyMap[letter].ref}
          value={letter}
          disabled={keyMap[letter].used}
          onClick={(e: any) => handleClick(e.target.value)}
        >
          {letter}
        </Button>
      ))}
    </>
  );
};

export default KeyRow;
