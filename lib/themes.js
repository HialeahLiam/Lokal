import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#501313',
        },
        secondary: {
            main: '#19857b',
          },
          error: {
            main: red.A400,
          },
          background: {
            default: '#fff',
          },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
});

export default theme;