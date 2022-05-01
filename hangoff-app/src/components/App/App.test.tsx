import { render, screen } from "@testing-library/react";
import { StoreProvider } from "../../hooks/useStore";
import { RootStore } from "../../stores/RootStore";
import { App } from "./App";

test("renders create room + join room buttons", () => {
  let appStore = new RootStore();
  render(
    <StoreProvider store={appStore}>
      <App />
    </StoreProvider>
  );
  const dailyButton = screen.getByText(/daily/i);
  const multiplayerButton = screen.getByText(/multiplayer/i);
  expect(dailyButton).toBeInTheDocument();
  expect(multiplayerButton).toBeInTheDocument();
});
