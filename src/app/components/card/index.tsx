import React from "react";
import { CardWrapper } from "./styled";
import { ThemePalette } from "../../settings/types";

interface CardProps {
  variant: ThemePalette;
}

type CardComponent = React.FunctionComponent<CardProps>;

const Card: CardComponent = ({ children, variant }) => <CardWrapper background={variant}>{children}</CardWrapper>;

export default Card;
