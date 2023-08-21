import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UI, {
  Body,
  FlexColumn,
  FlexRow,
  H1,
  H3,
} from "./modules/core/components/All";
import { UIThemeProvider } from "./modules/theme/UIThemeProvider";
import { createUITheme } from "./modules/theme/createTheme";

const theme = createUITheme(
  {
    gaps: {
      xl: "20px",
      l: "10px",
      m: "5px",
      s: "2px",
      xs: "0.5px",
    },
  },
  [
    {
      background: "black",
      primary: "white",
      secondary: "grey",
      text: "white",
      shadows: "black",
    },
    {
      background: "red",
      primary: "green",
      secondary: "yellow",
      text: "grey",
      shadows: "black",
    },
  ],
  {
    H1: { margin: 0 },
    FlexRow: { padding: "100px" },
    H3: { margin: "40px" },
    FlexColumn: { background: "red" },
  }
);

function App() {
  return (
    <div className="App">
      <FlexColumn>
        <header className="App-header">
          <UIThemeProvider theme={theme}>
            <FlexRow
              width="100%"
              height="20%"
              alignItems="center"
              justifyContent="center"
              // background="grey"
            >
              <H1 color="red">Hello</H1>
              <H3>Hello</H3>
              <H3>Hello world</H3>
            </FlexRow>
          </UIThemeProvider>
        </header>
      </FlexColumn>
    </div>
  );
}

export default App;
