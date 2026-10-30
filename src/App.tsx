import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "features/home-page/Home";
import { ArticlePage } from "features/article-page/ArticlePage";
import { Header } from "features/header/Header";
import { Settings } from "features/settings/Settings";
import { AppTitle } from "components/AppTitle";
import { useEffect, useState } from "react";
import { ThemeContext } from "common/contexts/ThemeContext";
import { Themes, type ThemeValues } from "constants/Themes";

const App = () => {
  const [theme, setTheme] = useState<ThemeValues>(
    (localStorage.getItem(
      "erwanRenonSoftwareEngineering.settings.theme",
    ) as ThemeValues | null) || Themes.AUTUMN,
  );

  useEffect(() => {
    localStorage.setItem("erwanRenonSoftwareEngineering.settings.theme", theme);
  }, [theme]);

  return (
    <div className={`${theme} themeWrapper`}>
      <ThemeContext value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AppTitle />
                  <Header />
                  <Outlet />
                </>
              }
            >
              <Route index element={<Navigate to="articles" />} />
              <Route path="articles" element={<Home />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext>
    </div>
  );
};

export default App;
