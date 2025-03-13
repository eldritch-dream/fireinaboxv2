import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Custom Theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722", // Orange color for branding
    },
    secondary: {
      main: "#ff9800", // Light orange for accents
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);