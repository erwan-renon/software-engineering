import { Themes, type ThemeValues } from "constants/Themes";
import { createContext } from "react";

type ThemeContextProps = {
  setTheme: (theme: ThemeValues) => void;
  theme: ThemeValues;
};

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: () => {
    return;
  },
  theme: Themes.AUTUMN,
});
