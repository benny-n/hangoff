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

export interface RoomState {
  roomCode: string;
  host: string;
  word: string;
  guesses: number[];
  players: string[];
  gameState: GameState;
}
