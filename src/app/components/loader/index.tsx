import React from "react";
import styled from "styled-components";
import { makeFlex } from "../../mixins";

type LoaderComponent = React.FunctionComponent;

const StyledLoader = styled.div`
  @keyframes animation {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-13px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(13px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  position: relative;
  ${makeFlex({ display: "flex", x: "center", y: "middle" })}
  width: 64px;
  height: 42px;

  i {
    display: block;
    width: 12px;
    height: 12px;
    margin: 0 2px;

    border-radius: 100%;
    background: ${({ theme }) => theme.palette.purple};
    animation: animation 2750ms cubic-bezier(0.4, 0, 0.2, 1) infinite;

    transform: translate(-50%, -50%);

    &:nth-child(2) {
      background: ${({ theme }) => theme.palette.blue};
      animation-delay: 1375ms;
    }

    &:nth-child(3) {
      background: ${({ theme }) => theme.palette.green};
      animation-delay: 175ms;
      animation-duration: 2225ms;
    }

    &:nth-child(4) {
      background: ${({ theme }) => theme.palette.red};
      animation-delay: 1375ms;
      animation-duration: 3175ms;
    }
  }
`;

const Loader: LoaderComponent = () => (
  <StyledLoader>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </StyledLoader>
);

export default Loader;
