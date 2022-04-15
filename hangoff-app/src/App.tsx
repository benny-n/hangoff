import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import "./fonts.css";
import { getAppTheme } from "./theme";

const theme = getAppTheme("light");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <img src="/hangoff.svg" className="App-logo" alt="logo" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Button sx={{ width: "290px", height: "70px" }} variant="contained">
            <Typography fontSize="30px">Join Room</Typography>
          </Button>
          <Button
            sx={{ width: "290px", height: "70px" }}
            variant="contained"
            onClick={() => console.log("Hello World")}
          >
            <Typography fontSize="30px">Create Room</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
