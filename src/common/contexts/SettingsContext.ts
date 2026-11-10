import { Themes } from "constants/Themes";
import type { Settings } from "features/settings/types/Settings";
import { createContext } from "react";

export type SettingsContextProps = {
  setSettings: (settings: Settings) => void;
  settings: Settings;
};

export const defaultSettings = {
  theme: {
    isSeasonTheme: false,
    theme: Themes.AUTUMN,
  },
};

export const SettingsContext = createContext<SettingsContextProps>({
  setSettings: () => {
    return;
  },
  settings: defaultSettings,
});
