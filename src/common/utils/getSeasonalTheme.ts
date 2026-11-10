import { Themes, type ThemeValues } from "constants/Themes";

export const getSeasonalTheme = (): ThemeValues => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();

  if (
    currentMonth === 0 ||
    currentMonth === 1 ||
    (currentMonth === 2 && currentDay < 20) ||
    (currentMonth === 11 && currentDay >= 21)
  ) {
    return Themes.WINTER;
  }

  if (
    (currentMonth === 2 && currentDay >= 20) ||
    currentMonth === 3 ||
    currentMonth === 4 ||
    (currentMonth === 5 && currentDay < 21)
  ) {
    return Themes.SPRING;
  }

  if (
    (currentMonth === 5 && currentDay >= 21) ||
    currentMonth === 6 ||
    currentMonth === 7 ||
    (currentMonth === 8 && currentDay < 22)
  ) {
    return Themes.SUMMER;
  }

  return Themes.AUTUMN;
};
