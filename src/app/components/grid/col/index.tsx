import React from "react";
import Grid from "styled-components-grid";
import { Breakpoints, Theme } from "../../../settings";
import styled from "styled-components";

interface ColProps {
  mobile: 1 | 2 | 3 | 4;
  tablet: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  desktop: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

type ColComponent<P> = React.FunctionComponent<P>;

const StyledCol = styled(Grid.Unit)`
  padding: ${({ theme }) => theme.grid.gap.mobile / 2}px;

  @media screen and (min-width: ${Breakpoints.tablet[0]}) {
    padding: ${({ theme }) => theme.grid.gap.tablet / 2}px;
  }
`;

const Col: ColComponent<ColProps> = (props) => {
  const { children, mobile, tablet, desktop } = props;
  const {
    grid: { sizes },
  } = Theme;

  const size = {
    xs: mobile / sizes.mobile,
    md: tablet / sizes.tablet,
    xl: desktop / sizes.desktop,
  };

  return <StyledCol size={size}>{children}</StyledCol>;
};

export default Col;
