import { makeAutoObservable } from "mobx";
import { elapsedFrom } from "../components/Time/utils";
import {
  ALPHABET,
  HangmanStateToString,
  HANGOFF_WEBSITE_LINK,
} from "../constants";
import {
  GameMode,
  GameResults,
  GameState,
  HangmanState,
  UsedLettersMap,
  RoomState,
  capitalizedLetter,
} from "../types";
import { RootStore } from "./RootStore";

const initUsedLettersMap = (): UsedLettersMap => {
  let letters = {} as UsedLettersMap;
  for (let i = 0; i < ALPHABET.length; i++) {
    letters[ALPHABET[i]] = undefined;
  }
  return letters;
};
export class DataStore {
  public player: string = "GUY 1"; //FIXME
  public isGameOver =
    JSON.parse(localStorage.getItem("isGameOver") || "null") || false;
  public roomState = JSON.parse(
    localStorage.getItem("roomState") || "null"
  ) as RoomState;
  public gameResults = JSON.parse(
    localStorage.getItem("gameResults") || "null"
  ) as GameResults;

  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  private generateRoomCode = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  setIsGameOver = () => {
    this.isGameOver =
      this.roomState.gameState === GameState.GameOverHostWon ||
      this.roomState.gameState === GameState.GameOverClientWon;
    localStorage.setItem("isGameOver", JSON.stringify(this.isGameOver));
  };

  updateGameState = (key: capitalizedLetter) => {
    let newRoomState = { ...this.roomState };
    let newGameResults = { ...this.gameResults };
    newRoomState.usedLettersMap[key] = this.roomState.word.includes(key);
    if (this.roomState.word.includes(key)) {
      let indices = Array.from(this.roomState.word).reduce(
        // get all indices of the key in the word
        (acc: number[], char, idx) => (char === key ? [...acc, idx] : acc),
        []
      );
      newRoomState.guesses = newRoomState.guesses.concat(indices);
      if (this.roomState.word.length === newRoomState.guesses.length) {
        newRoomState.gameState = GameState.GameOverClientWon;
      }
    } else {
      newRoomState.hangmanState += 1;
      if (newRoomState.hangmanState === HangmanState.Dead) {
        newRoomState.gameState = GameState.GameOverHostWon;
      }
    }
    newGameResults.hangmanState = newRoomState.hangmanState;
    this.setGameResults(newGameResults);
    this.setRoomState(newRoomState);
  };

  createRoom = (gameMode: GameMode, word: string) => {
    const cachedRoomState = localStorage.getItem("roomState");
    if (cachedRoomState && JSON.parse(cachedRoomState).word !== word) {
      this.roomState = {
        gameMode,
        roomCode: this.generateRoomCode(), //FIXME
        host: "",
        word,
        players: [],
        guesses: [],
        startedAt: new Date().getTime(),
        elapsed: "",
        usedLettersMap: initUsedLettersMap(),
        gameState: GameState.WaitingForPlayers,
        hangmanState: HangmanState.None,
        chatMessages: [{ text: "Welcome to Hangoff!" }],
      };
    }
  };

  setRoomState = (roomState: RoomState) => {
    this.roomState = roomState;
    this.setIsGameOver();
    if (this.isGameOver) {
      let newRoomState = { ...this.roomState };
      newRoomState.elapsed = elapsedFrom(newRoomState.startedAt);
      this.roomState = newRoomState;
    }
    localStorage.setItem("roomState", JSON.stringify(this.roomState));
  };

  setGameResults = (gameResults: GameResults) => {
    this.gameResults = gameResults;
    localStorage.setItem("gameResults", JSON.stringify(gameResults));
  };

  isGameWon = (): boolean => {
    switch (this.roomState.gameMode) {
      case GameMode.Daily:
        return this.roomState.gameState === GameState.GameOverClientWon;
      case GameMode.Multiplayer:
        // TODO: implement multiplayer (depends on if the user is host or client)
        return false;
    }
  };

  shareGameResults = (): string => {
    const attempts = +this.roomState.hangmanState;
    const maxAttempts = HangmanState.Dead - 1;
    const date = new Date();
    let outputString = `Hangoff ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}\n`;
    outputString += `--- ${
      attempts > maxAttempts ? "X" : attempts
    }/${maxAttempts}, ${this.roomState.elapsed} ---\n`;
    outputString += HangmanStateToString[this.roomState.hangmanState];
    outputString += "\n";
    outputString += `${HANGOFF_WEBSITE_LINK}`;
    return outputString;
  };
}
