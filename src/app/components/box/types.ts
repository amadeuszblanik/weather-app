import { SpaceProps } from "../../mixins/makeSpace";

export type Display = "flex" | "block" | "inline-flex" | "inline-block";
export type FlexX = "left" | "center" | "right" | "justify";
export type FlexY = "top" | "middle" | "bottom" | "justify";
export type FlexDirection = "row" | "column";
export type FlexAlignItems = "flex-start" | "center" | "flex-end" | "space-between";
export type BoxSizes = "full" | "fullPage";
export type Overflow = "hiddem" | "visible" | "auto" | "scroll";

export interface BoxProps {
  display?: Display;
  alignX?: FlexX;
  alignY?: FlexY;
  flexDirection?: FlexDirection;
  padding?: SpaceProps;
  margin?: SpaceProps;
  width?: BoxSizes;
  height?: BoxSizes;
  minHeight?: BoxSizes;
  overflowX?: Overflow;
  overflowY?: Overflow;
}

export interface StyledBoxProps {
  display: Display;
  x?: FlexX;
  y?: FlexY;
  flexDirection?: FlexDirection;
  flexWrap?: boolean;
  padding?: SpaceProps;
  margin?: SpaceProps;
  width?: string;
  height?: string;
  minHeight?: string;
  overflowX?: Overflow;
  overflowY?: Overflow;
}
