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
