export type ThemeValues =
  "autumnTheme" | "springTheme" | "summerTheme" | "winterTheme";

export const Themes = {
  AUTUMN: "autumnTheme",
  SPRING: "springTheme",
  SUMMER: "summerTheme",
  WINTER: "winterTheme",
} satisfies Record<string, ThemeValues>;
