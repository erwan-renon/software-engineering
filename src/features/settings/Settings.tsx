import { SettingsContext } from "common/contexts/SettingsContext";
import { MainPage } from "components/main-page/MainPage";
import { Themes, type ThemeValues } from "constants/Themes";
import { useContext, useState, type ChangeEventHandler } from "react";

export const Settings = () => {
  const { setSettings, settings } = useContext(SettingsContext);
  const [automaticThemeValue, setAutomaticThemeValue] = useState(
    settings.theme.isSeasonTheme,
  );
  const [themeValue, setThemeValue] = useState<ThemeValues>(
    settings.theme.theme,
  );

  const handleThemeChange: ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (event) => {
    setThemeValue(event.target.value as ThemeValues);
  };

  const handleAutomaticThemeChange: ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (event) => {
    setAutomaticThemeValue(event.target.checked);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setSettings({
      theme: {
        isSeasonTheme: automaticThemeValue,
        theme: themeValue,
      },
    });
  };

  return (
    <MainPage>
      <h1>Settings</h1>
      <form name="settings">
        <fieldset>
          <legend>Theme</legend>
          <div className="formElement">
            <p id="season-theme-description" className="descriptionText">
              Hides the "Choose a theme" option
            </p>
            <input
              aria-checked={automaticThemeValue ? "true" : "false"}
              aria-describedby="season-theme-description"
              checked={automaticThemeValue}
              id="season-theme"
              onChange={handleAutomaticThemeChange}
              type="checkbox"
            ></input>
            <label htmlFor="season-theme">Use an automatic season theme</label>
          </div>
          {!automaticThemeValue && (
            <fieldset>
              <legend>Choose a theme</legend>
              <div className="radioButtonsGroup formElement">
                <div>
                  <input
                    type="radio"
                    id="autumnTheme"
                    name="chooseTheme"
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
                    name="chooseTheme"
                    value={Themes.SPRING}
                    checked={themeValue === Themes.SPRING}
                    onChange={handleThemeChange}
                  />
                  <label htmlFor="springTheme">Spring</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="summerTheme"
                    name="chooseTheme"
                    value={Themes.SUMMER}
                    checked={themeValue === Themes.SUMMER}
                    onChange={handleThemeChange}
                  />
                  <label htmlFor="summerTheme">Summer</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="winterTheme"
                    name="chooseTheme"
                    value={Themes.WINTER}
                    checked={themeValue === Themes.WINTER}
                    onChange={handleThemeChange}
                  />
                  <label htmlFor="winterTheme">Winter</label>
                </div>
              </div>
            </fieldset>
          )}
        </fieldset>
        <button className="formButton" onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </MainPage>
  );
};
