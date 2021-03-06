import { capitalizedLetter } from "./types";

export const ALPHABET: capitalizedLetter[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const QWERTY_LAYOUT_UP: capitalizedLetter[] = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
];
export const QWERTY_LAYOUT_MIDDLE: capitalizedLetter[] = [
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
];
export const QWERTY_LAYOUT_DOWN: capitalizedLetter[] = [
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export const HANGMAN_STATE_NONE = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_GROUND = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_SCAFFOLD_BASE = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_SCAFFOLD_POLE = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_SCAFFOLD_WITH_ROPE = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_HEAD = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_BODY = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_RIGHT_LEG = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬛⬜⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_LEFT_LEG = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬛⬜⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_RIGHT_ARM = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬛⬜⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_LEFT_ARM = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬛⬜⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const HANGMAN_STATE_DEAD = `
⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛❌⬜❌⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬜⬛⬜⬛
⬛⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬛
`;

export const NUMBERS = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];

export const HangmanStateToString = [
  HANGMAN_STATE_NONE,
  HANGMAN_STATE_GROUND,
  HANGMAN_STATE_SCAFFOLD_BASE,
  HANGMAN_STATE_SCAFFOLD_POLE,
  HANGMAN_STATE_SCAFFOLD_WITH_ROPE,
  HANGMAN_STATE_HEAD,
  HANGMAN_STATE_BODY,
  HANGMAN_STATE_RIGHT_LEG,
  HANGMAN_STATE_LEFT_LEG,
  HANGMAN_STATE_RIGHT_ARM,
  HANGMAN_STATE_LEFT_ARM,
  HANGMAN_STATE_DEAD,
];

export const MAX_ATTEMPTS = 10;
export const SCALE_MULTIPLIER = 1000;
export const TIME_MULTIPLIER = 0.01;

export const HANGOFF_WEBSITE_LINK = "hangoff.vercel.app";
