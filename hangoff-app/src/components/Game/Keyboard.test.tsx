import { fireEvent, render, screen } from "@testing-library/react";
import { StoreProvider } from "../../hooks/useStore";
import { RootStore } from "../../stores/RootStore";
import { GameMode } from "../../types";
import { Keyboard } from "./Keyboard";

test("renders keyboard and checks immunity to spam", () => {
  let appStore = new RootStore();
  appStore.dataStore.createRoom(GameMode.Daily);
  render(
    <StoreProvider store={appStore}>
      <Keyboard />
    </StoreProvider>
  );
  fireEvent.keyDown(screen.getByTestId("keyboard"), { key: "A", code: "KeyA" });
  fireEvent.keyDown(screen.getByTestId("keyboard"), { key: "B", code: "KeyB" });
  fireEvent.click(screen.getByText(/C/));

  expect(screen.getByText(/A/).closest("button")).toBeDisabled();
  expect(screen.getByText(/B/).closest("button")).not.toBeDisabled();
  expect(screen.getByText(/C/).closest("button")).toBeDisabled();
});
