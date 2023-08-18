import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useMemo } from "react";
import styled from "styled-components";
import { generateCssValues } from "../helpers/generateCssValues";
import { StyledElementCSSProps } from "../AllCssRules";

const StyledElement = styled.div<StyledElementCSSProps>(
  (props) => generateCssValues(props)
);

const UIElement: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    StyledElementCSSProps & { as?: string }
> = ({ children, as, ...restProps }) => {
  return (
    <StyledElement
      children={children}
      as={as || "div"}
      {...restProps}
    />
  );
};




export default UIElement;
