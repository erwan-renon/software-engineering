import { getSeasonalTheme } from "common/utils/getSeasonalTheme";
import type { ThemeValues } from "constants/Themes";
import type { Settings } from "features/settings/types/Settings";

export const getThemeClass = (settings: Settings): ThemeValues => {
  if (settings.theme.isSeasonTheme) {
    return getSeasonalTheme();
  } else {
    return settings.theme.theme;
  }
};
