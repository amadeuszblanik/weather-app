import React from "react";
import styled from "styled-components";
import { TextColor, TextVariant, TextStyle, TextAlign } from "./types";

interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  fontStyle?: TextStyle;
  align?: TextAlign;
  opacity?: number;
}

type TextComponent = React.FunctionComponent<TextProps>;

const StyledText = styled.p<TextProps>`
  font-size: ${({ theme, variant }) => theme.text[variant!].fontSize};
  font-weight: ${({ theme, variant }) => theme.text[variant!].fontWeight};
  ${({ theme, color }) =>
    color ? `color: ${theme.palette[color] ? theme.palette[color] : theme.paletteSocial[color]};` : ""}
  ${({ fontStyle }) => (fontStyle ? `font-style: ${fontStyle};` : "")}
  ${({ align }) => (align ? `text-align: ${align};` : "")}
  ${({ opacity }) => (opacity ? `opacity: ${opacity};` : "")}
`;

const Text: TextComponent = (props) => {
  const { children, ...styledProps } = props;
  return <StyledText {...styledProps}>{children}</StyledText>;
};

Text.defaultProps = {
  variant: "p",
};

export default Text;
