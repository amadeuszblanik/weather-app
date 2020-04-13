export type Variants = "light" | "dark";

type ContrastedVariants = {
  [key in Variants]: Variants;
};

const CONTRASTED_VARIANTS: ContrastedVariants = {
  light: "dark",
  dark: "light",
};

export const getContrastVariant = (variant: Variants) => CONTRASTED_VARIANTS[variant];
