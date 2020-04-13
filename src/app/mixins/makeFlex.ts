import { FlexAlignItems, FlexDirection, FlexX, FlexY } from "../components/box/types";

interface XyValues {
  top: FlexAlignItems;
  right: FlexAlignItems;
  middle: FlexAlignItems;
  center: FlexAlignItems;
  left: FlexAlignItems;
  bottom: FlexAlignItems;
  justify: FlexAlignItems;
}

const XY_VALUES: XyValues = {
  top: "flex-start",
  right: "flex-end",
  middle: "center",
  center: "center",
  bottom: "flex-end",
  left: "flex-start",
  justify: "space-between",
};

interface MakeFlexProps {
  display: "flex" | "inline-flex";
  x?: FlexX;
  y?: FlexY;
  flexDirection?: FlexDirection;
  flexWrap?: boolean;
}

export const makeFlex = ({ display, x, y, flexDirection, flexWrap }: MakeFlexProps) => {
  if (!x) {
    x = "left";
  }

  if (!y) {
    y = "top";
  }

  if (!flexDirection) {
    flexDirection = "row";
  }

  if (!flexWrap) {
    flexWrap = false;
  }

  if (flexDirection === "row") {
    return `
      display: ${display};
      justify-content: ${XY_VALUES[x]};
      align-items: ${XY_VALUES[y]};
      flex-direction: row;
      ${flexWrap ? "flex-wrap: wrap;" : ""}
    `;
  } else if (flexDirection === "column") {
    return `
      display: ${display};
      align-items: ${XY_VALUES[x]};
      justify-content: ${XY_VALUES[y]};
      flex-direction: column;
      ${flexWrap ? "flex-wrap: wrap;" : ""}
    `;
  }

  throw new Error("Wrong direction parameter provided");
};
