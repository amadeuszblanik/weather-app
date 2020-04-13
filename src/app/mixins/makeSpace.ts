import theme from "../settings/theme";
import { forEachObject } from "../utils";

export type SPACES = keyof typeof theme.space;
type KIND = "padding" | "margin";

interface SpaceXProps {
  right?: SPACES;
  left?: SPACES;
}

interface SpaceYProps {
  top?: SPACES;
  bottom?: SPACES;
}

type xValue = SPACES | SpaceXProps;
type yValue = SPACES | SpaceYProps;

export interface SpaceProps {
  x?: xValue;
  y?: yValue;
}

interface Values {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const getSpace = (value: SPACES) => theme.space[value];

const renderSpace = (kind: KIND, values: Values) => {
  let response = "";

  forEachObject(values, (key, value) => {
    response += `${kind}-${key}: ${value};`;
  });

  return response;
};

export const makeSpace = (kind: KIND, values: SpaceProps | SPACES): string => {
  const valueToRender: Values = {};

  if (typeof values === "string") {
    return `${kind}-${getSpace(values)};`;
  }

  forEachObject(values, (key, value) => {
    if (typeof value === "string") {
      if (key === "x") {
        valueToRender.right = getSpace(value as SPACES);
        valueToRender.left = getSpace(value as SPACES);
      } else {
        valueToRender.top = getSpace(value as SPACES);
        valueToRender.bottom = getSpace(value as SPACES);
      }
    } else {
      if ("top" in value) {
        valueToRender.top = getSpace(value.top);
      }
      if ("right" in value) {
        valueToRender.right = getSpace(value.right);
      }
      if ("bottom" in value) {
        valueToRender.bottom = getSpace(value.bottom);
      }
      if ("left" in value) {
        valueToRender.left = getSpace(value.left);
      }
    }
  });

  return renderSpace(kind, valueToRender);
};
