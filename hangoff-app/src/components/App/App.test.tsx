import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { StoreProvider } from "../../hooks/useStore";
import { RootStore } from "../../stores/RootStore";

test("renders create room + join room buttons", () => {
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
