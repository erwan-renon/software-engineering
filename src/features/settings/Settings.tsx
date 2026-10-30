import { ThemeContext } from "common/contexts/ThemeContext";
import { MainPage } from "components/main-page/MainPage";
import { Themes, type ThemeValues } from "constants/Themes";
import { useContext, useState, type ChangeEventHandler } from "react";

export const Settings = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [themeValue, setThemeValue] = useState(theme);

  const handleThemeChange: ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (event) => {
    setThemeValue(event.target.value as ThemeValues);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setTheme(themeValue);
  };

  return (
    <MainPage>
      <h1>Settings</h1>
      <form name="settings">
        <fieldset>
          <legend>Theme</legend>
          <div className="radioButtonsGroup">
            <div>
              <input
                type="radio"
                id="autumnTheme"
                name="theme"
                value={Themes.AUTUMN}
                checked={themeValue === Themes.AUTUMN}
                onChange={handleThemeChange}
              />
              <label htmlFor="autumnTheme">Autumn</label>
            </div>
            <div>
              <input
                type="radio"
                id="springTheme"
                name="theme"
                value={Themes.SPRING}
                checked={themeValue === Themes.SPRING}
                onChange={handleThemeChange}
              />
              <label htmlFor="springTheme">Spring</label>
            </div>
          </div>
        </fieldset>
        <button className="formButton" onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </MainPage>
  );
};
