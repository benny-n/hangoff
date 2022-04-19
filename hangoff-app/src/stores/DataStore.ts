import { makeAutoObservable } from "mobx";
import { RoomState } from "../types";
import { RootStore } from "./RootStore";

export class DataStore {
  public roomState = {} as RoomState;

  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }
}
