import { Box } from "@mui/material";
import useEventListener from "@use-it/event-listener";
import { observer } from "mobx-react-lite";
import React from "react";
import {
  ALPHABET,
  QWERTY_LAYOUT_DOWN,
  QWERTY_LAYOUT_MIDDLE,
  QWERTY_LAYOUT_UP,
} from "../../constants";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useStore } from "../../hooks/useStore";
import { capitalizedLetter, KeyRefsMap } from "../../types";
import { KeyRow } from "./KeyRow";

const initKeyboard = (): KeyRefsMap => {
  let keyMap = {} as KeyRefsMap;
  for (let i = 0; i < ALPHABET.length; i++) {
    keyMap[ALPHABET[i]] = null;
  }
  return keyMap;
};

const KeyboardComp: React.FC = () => {
  const {
    uiStore: { chatFocused },
  } = useStore();
  const { isDesktop } = useDeviceType();
  const keyRefsMap = React.useRef<KeyRefsMap>(initKeyboard());
  const [onCooldown, setOnCooldown] = React.useState(false);
  useEventListener("keydown", (event: KeyboardEvent) => {
    if (chatFocused || onCooldown) {
      return;
    }
    const key = event.key.toUpperCase() as capitalizedLetter;
    keyRefsMap.current[key]?.click();
    setOnCooldown(true);
    setTimeout(() => {
      setOnCooldown(false);
    });
  });
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: isDesktop ? "150px" : undefined,
        gap: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 0.2 }}>
        <KeyRow {...{ keys: QWERTY_LAYOUT_UP, keyRefsMap }} />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 0.2, marginLeft: 1 }}
      >
        <KeyRow {...{ keys: QWERTY_LAYOUT_MIDDLE, keyRefsMap }} />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 0.2, marginLeft: 2 }}
      >
        <KeyRow {...{ keys: QWERTY_LAYOUT_DOWN, keyRefsMap }} />
      </Box>
    </Box>
  );
};

export const Keyboard = observer(KeyboardComp);
