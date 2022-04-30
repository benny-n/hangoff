export enum GameMode {
  Daily,
  Multiplayer,
}

export enum HangmanState {
  None = 0,
  Ground = 1,
  ScaffoldBase = 2,
  ScaffoldPole = 3,
  ScaffoldWithRope = 4,
  Head = 5,
  Body = 6,
  RightLeg = 7,
  LeftLeg = 8,
  RightArm = 9,
  LeftArm = 10,
  Dead = 11,
}

export enum PageState {
  Main = "Main",
  Room = "Room",
}

export enum GameState {
  InGame,
  WaitingForPlayers,
  GameOverHostWon,
  GameOverClientWon,
}

export type capitalizedLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export type KeyRefsMap = {
  [key in capitalizedLetter]: HTMLButtonElement | null;
};

export type UsedLettersMap = {
  [key in capitalizedLetter]: boolean | undefined;
};
export interface GameResults {
  startedAt: Date;
  hangmanState: HangmanState;
}
export interface ChatMessage {
  player?: string; // if undefined, it's a system message
  text: string;
}
export interface RoomState {
  gameMode: GameMode;
  roomCode: string;
  host: string;
  word: string;
  guesses: number[];
  players: string[];
  startedAt: number;
  elapsed: string;
  usedLettersMap: UsedLettersMap;
  gameState: GameState;
  hangmanState: HangmanState;
  chatMessages: ChatMessage[];
}
