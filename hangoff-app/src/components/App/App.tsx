import React from "react";
import "./App.css";
import "../../fonts.css";
import { ThemeProvider } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import { RoomPage } from "../Pages/RoomPage";
import { useStore } from "../../hooks/useStore";
import { getAppTheme } from "../../theme";
import { PageState } from "../../types";
import { MainPage } from "../Pages/MainPage";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = getAppTheme("light");
const queryClient = new QueryClient();

const AppComp: React.FC = () => {
  const {
    uiStore: { currentPage },
  } = useStore();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {currentPage === PageState.Main ? <MainPage /> : <RoomPage />}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export const App = observer(AppComp);
