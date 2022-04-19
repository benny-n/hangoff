import { ThemeProvider } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { RoomPage } from "./components/RoomPage";
import "./fonts.css";
import { useStore } from "./hooks/useStore";
import { getAppTheme } from "./theme";
import { PageState } from "./types";

const theme = getAppTheme("light");

const AppComp: React.FC = () => {
  const {
    uiStore: { currentPage },
  } = useStore();
  return (
    <ThemeProvider theme={theme}>
      {currentPage === PageState.Main ? <MainPage /> : <RoomPage />}
    </ThemeProvider>
  );
};

export const App = observer(AppComp);
