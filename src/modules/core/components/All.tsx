import styled from "styled-components";
import { StyledElementCSSProps } from "../AllCssRules";
import { generateCssValues } from "../helpers/generateCssValues";

//Default
export const Element = styled.div<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
//Links
export const Link = styled.a<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const A = styled.a<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
//Texts
export const Text = styled.p<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const P = styled.p<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Span = styled.span<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const H1 = styled.h1<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const H2 = styled.h2<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const H3 = styled.h3<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const H4 = styled.h4<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const H5 = styled.h5<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Article = styled.article<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const B = styled.b<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const I = styled.i<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Address = styled.address<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Code = styled.code<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Br = styled.br<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Marker = styled.marker<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
//Basics
export const Main = styled.main<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Header = styled.header<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Footer = styled.footer<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Section = styled.section<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Aside = styled.aside<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Form = styled.form<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
// Menu
export const Menu = styled.menu<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const MenuItem = styled.menuitem<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
//Select
export const Select = styled.select<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Option = styled.option<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const OptionGroup = styled.optgroup<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
// Button
export const Button = styled.button<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
// Input
export const Input = styled.input<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const TextArea = styled.textarea<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
// Media
export const Image = styled.image<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Img = styled.img<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const Video = styled.video<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
export const IFrame = styled.iframe<StyledElementCSSProps>((props) =>
  generateCssValues(props)
);
// Flex
export const Flex = styled.div<StyledElementCSSProps>((props) => ({
  display: "flex",
  ...generateCssValues(props),
}));
export const FlexRow = styled(Flex)<StyledElementCSSProps>((props) => ({
  flexDirection: "row",
  ...generateCssValues(props),
}));
export const FlexColumn = styled(Flex)<StyledElementCSSProps>((props) => ({
  flexDirection: "column",
  ...generateCssValues(props),
}));
// Grid
export const Grid = styled(Flex)<StyledElementCSSProps>((props) => ({
  display: "grid",
  ...generateCssValues(props),
}));

const UI = {
  Element,
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
  Grid
};

export type UIType = typeof UI;
