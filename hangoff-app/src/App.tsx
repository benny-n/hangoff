import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import "./fonts.css";
import { getAppTheme } from "./theme";

const theme = getAppTheme("light");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;