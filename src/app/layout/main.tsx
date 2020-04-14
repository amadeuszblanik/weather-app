import React from "react";
import { Container } from "../components/";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

type MainComponent = React.FunctionComponent<LayoutProps>;

export const Main: MainComponent = ({ children }) => <Container>{children}</Container>;
