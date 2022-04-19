import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { RootStore } from "./stores/RootStore";
import { StoreProvider } from "./hooks/useStore";

test("renders learn react link", () => {
  let appStore = new RootStore();
  render(
    <StoreProvider store={appStore}>
      <App />
    </StoreProvider>
  );
  const createRoomButtonText = screen.getByText(/Create Room/i);
  const joinRoomButtonText = screen.getByText(/Join Room/i);
  expect(createRoomButtonText).toBeInTheDocument();
  expect(joinRoomButtonText).toBeInTheDocument();
});
