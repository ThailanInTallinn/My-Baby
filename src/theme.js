import { createTheme } from "@mui/material";
import { dark, light } from "@mui/material/styles/createPalette";

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#f9f9bf",
      main: "#edd900",
      dark: "#f07d00",
      contrastText: "#000",
    },

    secondary: {
      light: "#bedefb",
      main: "#6fb6f5",
      dark: "#3f97f0",
      contrastText: "#000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#1d3373",
      main: "#0b225c",
      dark: "#001346",
      contrastText: "#fff",
    },

    secondary: {
      light: "#98c3d6",
      main: "#164b5e",
      dark: "#003646",
      contrastText: "#fff",
    },
  },
});

export { lightTheme, darkTheme };
