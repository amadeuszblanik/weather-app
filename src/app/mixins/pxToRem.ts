export const pxToRem = (px: string | number): string => {
  if (typeof px === "string") {
    px = Number(px);
  }

  return `${px / 16}rem`;
};
