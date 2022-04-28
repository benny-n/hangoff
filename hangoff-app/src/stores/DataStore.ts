import { makeAutoObservable } from "mobx";
import { HangmanStateToString } from "../constants";
import {
  RoomState,
  GameState,
  HangmanState,
  GameMode,
  GameResults,
} from "../types";
import { RootStore } from "./RootStore";

export class DataStore {
  public player: string = "GUY 1"; //FIXME
  public isGameOver: boolean = false;
  public roomState = {} as RoomState;
  public gameResults = {} as GameResults;

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
  };

  updateGameState = (key: string) => {
    let newRoomState = { ...this.roomState };
    let newGameResults = { ...this.gameResults };
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
    this.updateGameResults(newGameResults);
    this.updateRoom(newRoomState);
  };

  createRoom = async (gameMode: GameMode) => {
    this.roomState = {
      gameMode,
      roomCode: this.generateRoomCode(), //FIXME
      host: "Benny", //FIXME
      word: "",
      guesses: [],
      players: [],
      gameState: GameState.WaitingForPlayers,
      hangmanState: HangmanState.None,
      chatMessages: [{ text: "Welcome to Hangoff!" }],
    };
  };

  updateRoom = (roomState: RoomState) => {
    this.roomState = roomState;
    this.setIsGameOver();
  };

  updateGameResults = (gameResults: GameResults) => {
    this.gameResults = gameResults;
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
    let attempts = +this.gameResults.hangmanState;
    let maxAttempts = HangmanState.Dead - 1;
    let MM_DD_YYYY = new Date().toLocaleDateString();
    let dateParts = MM_DD_YYYY.split("/");
    let DD_MM_YYYY = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
    let outputString = `Hangoff ${DD_MM_YYYY}\n`;
    outputString += `--- ${
      attempts > maxAttempts ? "X" : attempts
    }/${maxAttempts}, ${this.gameResults.time} ---\n`;
    outputString += HangmanStateToString[this.gameResults.hangmanState];
    return outputString;
  };
}
