import React from "react";
import styled from "styled-components";
import { makeSpace } from "../../../mixins";
import { Breakpoints } from "../../../settings";

type ContainerComponent = React.FunctionComponent;

const ContainerStyled = styled.div`
  max-width: 100%;
  ${makeSpace("padding", { x: "l" })}
  margin: 0 auto;

  @media screen and (min-width: ${Breakpoints.desktop[0]}px) {
    max-width: 1180px;
  }
`;

const Container: ContainerComponent = ({ children }) => <ContainerStyled>{children}</ContainerStyled>;

export default Container;
