export const ALPHABET = [
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

export const QWERTY_LAYOUT_UP = [
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
export const QWERTY_LAYOUT_MIDDLE = [
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
export const QWERTY_LAYOUT_DOWN = ["Z", "X", "C", "V", "B", "N", "M"];

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
