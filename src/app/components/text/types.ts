import { Theme } from "../../settings";

export type TextColor = keyof typeof Theme.palette | keyof typeof Theme.paletteSocial;
export type TextVariant = keyof typeof Theme.text;
export type TextStyle = "normal" | "italic";
export type TextAlign = "left" | "center" | "right";
