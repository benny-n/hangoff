import { Box } from "@mui/material";
import useEventListener from "@use-it/event-listener";
import React from "react";
import {
  ALPHABET,
  QWERTY_LAYOUT_DOWN,
  QWERTY_LAYOUT_MIDDLE,
  QWERTY_LAYOUT_UP,
} from "../constants";
import KeyRow from "./KeyRow";

const initKeyboard = (): any => {
  let keyMap = {} as any;
  for (let i = 0; i < ALPHABET.length; i++) {
    keyMap[ALPHABET[i]] = {
      key: ALPHABET[i],
      used: false,
      ref: undefined,
    };
  }
  return keyMap;
};

const Keyboard: React.FC = () => {
  const [keyMap, setKeyMap] = React.useState(initKeyboard());
  useEventListener("keydown", (event: Event) => {
    const key = (event as any).key.toUpperCase();
    if (keyMap[key]) {
      keyMap[key].ref.click();
    }
  });
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "45px",
        marginLeft: "150px",
        gap: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 0.2 }}>
        <KeyRow {...{ keys: QWERTY_LAYOUT_UP, keyMap, setKeyMap }} />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 0.2, marginLeft: 1 }}
      >
        <KeyRow {...{ keys: QWERTY_LAYOUT_MIDDLE, keyMap, setKeyMap }} />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 0.2, marginLeft: 2 }}
      >
        <KeyRow {...{ keys: QWERTY_LAYOUT_DOWN, keyMap, setKeyMap }} />
      </Box>
    </Box>
  );
};
export default Keyboard;
