import { Theme } from "./index";

export type ThemePalette = keyof typeof Theme.palette;
export type ThemePaletteSocial = keyof typeof Theme.paletteSocial;
export type ThemePaletteAll = ThemePalette & ThemePaletteSocial;
