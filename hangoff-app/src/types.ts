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
  Main,
  Room,
}

export enum GameState {
  InGame,
  WaitingForPlayers,
  GameOverHostWon,
  GameOverClientWon,
}
export interface ChatMessage {
  player?: string; // if undefined, it's a system message
  text: string;
}
export interface RoomState {
  roomCode: string;
  host: string;
  word: string;
  guesses: number[];
  players: string[];
  gameState: GameState;
  hangmanState: HangmanState;
  chatMessages: ChatMessage[];
}
