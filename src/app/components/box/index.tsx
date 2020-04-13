import React from "react";
import { StyledBox } from "./styled";
import { BoxProps, BoxSizes } from "./types";

type BoxComponent = React.FunctionComponent<BoxProps>;

const WIDTH_PROPERTIES = {
  full: "100%",
  fullPage: "100vw",
};

const HEIGHT_PROPERTIES = {
  full: "100%",
  fullPage: "calc(var(--vh, 100vh) * 1.05)",
};

const getWidth = (width?: BoxSizes) => {
  return width ? WIDTH_PROPERTIES[width] : undefined;
};

const getHeight = (height?: BoxSizes) => {
  return height ? HEIGHT_PROPERTIES[height] : undefined;
};

const Box: BoxComponent = (props) => {
  let { display } = props;
  const { children, alignY, alignX, flexDirection, width, height, minHeight, ...other } = props;

  if (alignX || alignY || !display?.includes("flex")) {
    display = "flex";
  } else if (display === undefined) {
    display = "block";
  }

  return (
    <StyledBox
      display={display!}
      x={alignX}
      y={alignY}
      width={getWidth(width)}
      height={getHeight(height)}
      minHeight={getHeight(minHeight)}
      flexDirection={flexDirection}
      {...other}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
