import { makeAutoObservable } from "mobx";
import { PageState } from "../types";
import { RootStore } from "./RootStore";
export class UIStore {
  public currentPage: PageState = PageState.Main;
  public chatFocused: boolean = false;

  constructor(public readonly rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  setPage = (page: PageState) => {
    this.currentPage = page;
  };

  setChatFocused = (focused: boolean) => {
    this.chatFocused = focused;
  };
}
