import styled from "styled-components";
import { StyledElementCSSProps, allCssRulesObject } from "../AllCssRules";
import { generateCssValues } from "../helpers/generateCssValues";
import { shouldForwardProp } from "../helpers/shouldForwardProps";
import { UIThemeInterface } from "../../theme/createTheme";
import { defaultUIObject } from "../constants";

export const generateCssOverrides = (
  forComponent: keyof typeof defaultUIObject,
  theme: UIThemeInterface
): Partial<typeof allCssRulesObject> => {
  if (theme?.overrides && theme.overrides[forComponent]) {
    return theme.overrides[forComponent] || {};
  }

  return {};
};

const generateStyles = (
  overrides: Partial<typeof allCssRulesObject>,
  rules: Partial<typeof allCssRulesObject>
) => {
  return { ...overrides, ...rules };
};

//Default
export const Element = styled("div").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Element", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
//Body
export const Body = styled("body").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Body", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
//Links
export const Link = styled("a").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Link", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const A = styled("a").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("A", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
//Texts
export const Text = styled("p").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Text", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const P = styled("p").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("P", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Span = styled("span").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Span", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const H1 = styled("h1").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("H1", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const H2 = styled("h2").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("H2", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const H3 = styled("h3").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("H3", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const H4 = styled("h4").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("H4", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const H5 = styled("h5").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("H5", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Article = styled("article").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Article", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const B = styled("b").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("B", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const I = styled("i").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("I", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Address = styled("address").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Address", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Code = styled("code").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Code", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Br = styled("br").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Br", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Marker = styled("marker").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Marker", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
//Basics
export const Main = styled("main").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Main", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Header = styled("header").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Header", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Footer = styled("footer").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Footer", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Section = styled("section").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Section", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Aside = styled("aside").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Aside", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Form = styled("form").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Form", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
// Menu
export const Menu = styled("menu").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Menu", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const MenuItem = styled("menuitem").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("MenuItem", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
//Select
export const Select = styled("select").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Select", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Option = styled("option").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Option", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const OptionGroup = styled("optgroup").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("OptionGroup", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
// Button
export const Button = styled("button").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Button", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
// Input
export const Input = styled("input").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Input", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const TextArea = styled("textarea").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("TextArea", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
// Media
export const Image = styled("image").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Image", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Img = styled("img").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Img", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const Video = styled("video").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("Video", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
export const IFrame = styled("iframe").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) =>
  generateStyles(
    generateCssOverrides("IFrame", props.theme as UIThemeInterface),
    generateCssValues(props)
  )
);
// Flex
export const Flex = styled("div").withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) => ({
  display: "flex",
  ...generateStyles(
    generateCssOverrides("Flex", props.theme as UIThemeInterface),
    generateCssValues(props)
  ),
}));
export const FlexRow = styled(Flex).withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) => ({
  flexDirection: "row",
  ...generateStyles(
    generateCssOverrides("FlexRow", props.theme as UIThemeInterface),
    generateCssValues(props)
  ),
}));
export const FlexColumn = styled(Flex).withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) => ({
  flexDirection: "column",
  ...generateStyles(
    generateCssOverrides("FlexColumn", props.theme as UIThemeInterface),
    generateCssValues(props)
  ),
}));
// Grid
export const Grid = styled(Flex).withConfig({
  shouldForwardProp,
})<StyledElementCSSProps>((props) => ({
  display: "grid",
  ...generateStyles(
    generateCssOverrides("Grid", props.theme as UIThemeInterface),
    generateCssValues(props)
  ),
}));

const UI = {
  Element,
  Body,
  Link,
  A,
  Text,
  P,
  H1,
  H2,
  H3,
  H4,
  H5,
  Article,
  B,
  I,
  Address,
  Code,
  Br,
  Span,
  Marker,
  Main,
  Header,
  Footer,
  Section,
  Aside,
  Form,
  Menu,
  MenuItem,
  Select,
  Option,
  OptionGroup,
  Button,
  Input,
  TextArea,
  Image,
  Img,
  Video,
  IFrame,
  Flex,
  FlexRow,
  FlexColumn,
  Grid,
};

export default UI;

export type UIType = typeof UI;
