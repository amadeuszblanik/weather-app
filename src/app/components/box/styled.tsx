import styled from "styled-components";
import { StyledBoxProps } from "./types";
import { makeFlex, makeSpace, transition } from "../../mixins";

export const StyledBox = styled.div<StyledBoxProps>`
  ${({ display, x, y, flexDirection, flexWrap }) =>
    display !== "flex" && display !== "inline-flex"
      ? `display: ${display};`
      : makeFlex({ display, x, y, flexDirection, flexWrap })}
  ${({ padding }) => (padding ? makeSpace("padding", padding) : "")}
  ${({ margin }) => (margin ? makeSpace("margin", margin) : "")}
  ${({ width }) => (width ? `width: ${width};` : "")}
  ${({ height }) => (height ? `height: ${height};` : "")}
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight};` : "")}
  ${transition(["min-height", "height"])}
`;
