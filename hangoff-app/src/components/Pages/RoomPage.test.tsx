import { act, fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider } from "../../hooks/useStore";
import { RootStore } from "../../stores/RootStore";
import { GameMode } from "../../types";
import { RoomPage } from "./RoomPage";

test("restarts room state when word changes", async () => {
  let appStore = new RootStore();
  let queryClient = new QueryClient();

  act(() => {
    appStore.dataStore.createRoom(GameMode.Daily, "test");
  });

  render(
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={appStore}>
        <RoomPage />
      </StoreProvider>
    </QueryClientProvider>
  );
  expect(appStore.dataStore.roomState.word).toBe("test");
  setTimeout(() => {
    fireEvent.click(screen.getByText(/T/));
    fireEvent.click(screen.getByText(/E/));
    fireEvent.click(screen.getByText(/S/));
  });
  setTimeout(() => {
    const endGameBox = screen.getByText(/You won!/i);
    const wordTest = screen.getByText(/test/i);
    expect(endGameBox).toBeInTheDocument();
    expect(wordTest).toBeInTheDocument();
  });

  act(() => {
    appStore.dataStore.createRoom(GameMode.Daily, "different");
  });

  setTimeout(() => {
    const endGameBox = screen.getByText(/You won!/i);
    const hiddenWord = screen.getByText(/_{9}/i);
    expect(endGameBox).not.toBeInTheDocument();
    expect(hiddenWord).toBeInTheDocument();
  });
});
