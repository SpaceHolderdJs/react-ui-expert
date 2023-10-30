# react-ui-expert

![Logo](https://res.cloudinary.com/df0rs0jdj/image/upload/v1698666652/npm/react-ui-expert-logo.svg)

## Introdution

This lib based on css-in js concept and allows pass all the common css properties as a props of you own or built-in react components. Using styled-components underhood lib provides own version of most UI tags (elements) with prepared props (could be extended).

Let`s dive in!

## Installation

To star using this lib you will be fine with just have `npm i react-ui-expert` running in the terminal of your project. Types are included.

## Documentation

After installation let`s see what we have here. Lib has 3 types of components:

- Common - `Body`, `H1-H5`, `A`, `Section `and so on.
- Layout based - `Flex`, `FlexColumn`, `FlexRow`, `Grid`
- Custom - using `Element` component you can create your own instances with needed props

Everything you need for basic usage is accessible by following import:
`import {name_of_needed component} from "react-ui-expert"`

Let`s see some basic example of usage components:

```javascript
import UI, { FlexColumn, FlexRow, H1, H3 } from "./modules/core/components/All";

function App() {
  return (
    <div className="App">
      <FlexColumn height="100vh" background="blue">
        <header className="App-header">
          <FlexRow
            // you can pass any known CSS props in camel-case notation, it`s typizated
            width="100%"
            height="20%"
            alignItems="center"
            justifyContent="center"
            background="grey">
            <H1 color="red">Hello</H1>
            <H3>Hello</H3>
            <H3>Hello world</H3>
          </FlexRow>
        </header>
      </FlexColumn>
    </div>
  );
}
```

You may wonder what is the diff between `style` attribute and this then. The answer is simple - `style` in react is based on simple inline-styles approach and this is last thing you should do with your components in react.
Meanwhile react-ui-expert works with styled-components lib, allowing you adjust all passed styles as separate style with custom className underhood. There is also an option to pass multiple class-based styles of course. You can readme more here https://styled-components.com/docs/basics

## Custom theming

Additionaly react-ui-expert supports theme management. To implement custom theming you should use `createUITheme` function and `UIThemeProvider`.

This is how it looks like:

```javascript
import { UIThemeProvider, createUITheme } from "react-ui-expert";

function App() {
  return (
    <div className="App">
      <FlexColumn height="100vh" background="blue">
        <header className="App-header">
          <UIThemeProvider theme={theme}>
            {" "}
            // theme goes here
            <FlexRow
              width="100%"
              height="20%"
              alignItems="center"
              justifyContent="center">
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
```

To create a theme with our lib you can use this way:

```javascript
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
    H3: { margin: "40px" },
  }
);
```

`createUITheme(spacings, variations, overrides)` expects 3 arguments:

- Spacings object with optional fields `gaps`, `margins`, `paddings` where you can define main spacings of your layouts starting with `xs` - extra small and finishing with `xl` - extra large
- Variations - main color pallets of themes you will use (could be one or more)
- Overrides - common rules for certain UI tag, generally just an object where you can define basic ovverides for certain lib components.
