import { makeAutoObservable } from "mobx";
import { RoomState, GameState, HangmanState } from "../types";
import { RootStore } from "./RootStore";

export class DataStore {
  public roomState = {} as RoomState;

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

  createRoom = () => {
    this.roomState = {
      roomCode: this.generateRoomCode(),
      host: "Benny",
      word: "HANGOFF",
      guesses: [],
      players: [],
      gameState: GameState.WaitingForPlayers,
      hangmanState: HangmanState.None,
    };
  };

  updateRoom = (roomState: RoomState) => {
    this.roomState = roomState;
  };
}
