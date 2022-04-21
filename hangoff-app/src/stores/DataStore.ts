import { makeAutoObservable } from "mobx";
import { RoomState, GameState, HangmanState } from "../types";
import { RootStore } from "./RootStore";

export class DataStore {
  public player: string = "GUY 1"; //FIXME
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
      roomCode: this.generateRoomCode(), //FIXME
      host: "Benny", //FIXME
      word: "HANGOFF", //FIXME
      guesses: [],
      players: [],
      gameState: GameState.WaitingForPlayers,
      hangmanState: HangmanState.None,
      chatMessages: [{ text: "Welcome to Hangoff!" }],
    };
  };

  updateRoom = (roomState: RoomState) => {
    this.roomState = roomState;
  };
}
