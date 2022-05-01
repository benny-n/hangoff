import { act, fireEvent, render, screen } from "@testing-library/react";
import { StoreProvider } from "../../hooks/useStore";
import { RootStore } from "../../stores/RootStore";
import { GameMode } from "../../types";
import { RoomPage } from "./RoomPage";

test("restarts room state when word changes", async () => {
  let appStore = new RootStore();
  appStore.dataStore.createRoom(GameMode.Daily, "TEST");
  act(() => {
    render(
      <StoreProvider store={appStore}>
        <RoomPage />
      </StoreProvider>
    );
  });
  expect(appStore.dataStore.roomState.word).toBe("TEST");

  fireEvent.click(screen.getByText(/T/));
  fireEvent.click(screen.getByText(/E/));
  fireEvent.click(screen.getByText(/S/));

  expect(appStore.dataStore.roomState.guesses).toHaveLength(4); // 0, 1, 2, 3

  act(() => {
    render(<></>); // force update
  });

  let endGameBox = screen.getByText(/You won!/i);
  expect(endGameBox).toBeInTheDocument();

  const newWord = "DIFFERENT";
  act(() => {
    appStore.dataStore.createRoom(GameMode.Daily, newWord);
    render(<></>); // force update
  });

  expect(screen.queryByText(/You won!/i)).not.toBeInTheDocument();
  const hiddenWord = screen.getAllByText(/_/);
  expect(hiddenWord).toHaveLength(newWord.length);
});
