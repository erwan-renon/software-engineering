import { type ThemeValues } from "constants/Themes";

type SettingTheme = {
  isSeasonTheme: boolean;
  theme: ThemeValues;
};

export type Settings = {
  theme: SettingTheme;
};
