import { createTheme, responsiveFontSizes } from "@mui/material";

const DARK_MODE_THEME = "dark";
const LIGHT_MODE_THEME = "light";
export const getAppTheme = (
  mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME
) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#c98bff",
        light: "#d8adfd",
        dark: "#743ca5",
      },
      secondary: {
        main: "#6378d6",
        light: "#aeb2f0",
        dark: "#3e3f85",
      },
      info: {
        main: "#ededed",
      },
      text: {
        primary: "#ededed",
        secondary: "#ffffff",
      }
    },
    typography: {
      fontFamily: "Cascadia",
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
