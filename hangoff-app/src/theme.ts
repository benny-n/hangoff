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
        main: "#2d7c00",
        light: "#539af6",
      },
      secondary: {
        main: "#d66563",
        light: "#f0aeae",
        dark: "#853f3e",
      },
      info: {
        main: "#743ca5",
        light: "#743ca5",
        dark: "#743ca5",
      },
    },
    typography: {
      fontFamily: "Cascadia",
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
