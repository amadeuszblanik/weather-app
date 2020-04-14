import React from "react";
import Grid from "styled-components-grid";
import styled from "styled-components";
import { BoxSizes } from "../../box/types";

type WidthProperties = {
  [key in BoxSizes]: string;
};

const WIDTH_PROPERTIES: WidthProperties = {
  full: "100%",
  fullPage: "100vw",
};

interface RowProps {
  width?: BoxSizes;
}

type RowComponent = React.FunctionComponent<RowProps>;

const getWidth = (width?: BoxSizes) => {
  return width ? WIDTH_PROPERTIES[width] : undefined;
};

const StyledGrid = styled(Grid)<{ width: BoxSizes }>`
  ${({ width }) => (width ? `width: ${getWidth(width)};` : "")}
`;

const Row: RowComponent = ({ children, width }) => <StyledGrid width={width}>{children}</StyledGrid>;

export default Row;
