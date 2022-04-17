import { Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import RoomPage from "./components/RoomPage";
import "./fonts.css";
import { getAppTheme } from "./theme";

const theme = getAppTheme("light");

function App() {
  const [page, setPage] = React.useState(true);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Switch value={page} onClick={() => setPage(!page)} />
        {page ? <MainPage /> : <RoomPage />}
      </>
    </ThemeProvider>
  );
}

export default App;
