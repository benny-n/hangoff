import { render, screen } from "@testing-library/react";
import { StoreProvider } from "../../hooks/useStore";
import { RootStore } from "../../stores/RootStore";
import { GameMode, GameState } from "../../types";
import { EndGameBox } from "./EndGameBox";

test("renders end game box when winning", () => {
  let appStore = new RootStore();
  appStore.dataStore.createRoom(GameMode.Daily, "TEST");
  appStore.dataStore.roomState.gameState = GameState.GameOverClientWon;
  render(
    <StoreProvider store={appStore}>
      <EndGameBox />
    </StoreProvider>
  );
  const endGameBox = screen.getByText(/You won!/i);
  const shareButton = screen.getByText(/Share/i);
  expect(endGameBox).toBeInTheDocument();
  expect(shareButton).toBeInTheDocument();
});

test("renders end game box when losing", () => {
  let appStore = new RootStore();
  appStore.dataStore.createRoom(GameMode.Daily, "TEST");
  render(
    <StoreProvider store={appStore}>
      <EndGameBox />
    </StoreProvider>
  );
  const endGameText = screen.getByText(/Game over./i);
  const shareButton = screen.getByText(/Share/i);
  expect(endGameText).toBeInTheDocument();
  expect(shareButton).toBeInTheDocument();
});
