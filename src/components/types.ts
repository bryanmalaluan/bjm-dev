import fonts from "@src/theme/fonts";

export type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type FontFamily =
  | "Black"
  | "Bold"
  | "ExtraBold"
  | "ExtraLight"
  | "Light"
  | "Medium"
  | "Regular"
  | "SemiBold";

export type FontSize = keyof typeof fonts.size;
