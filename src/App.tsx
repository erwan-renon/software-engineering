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
import type { Settings as SettingsType } from "features/settings/types/Settings";
import {
  defaultSettings,
  SettingsContext,
} from "common/contexts/SettingsContext";
import { getThemeClass } from "common/utils/getThemeClass";

const App = () => {
  const [settings, setSettings] = useState<SettingsType>(
    JSON.parse(
      localStorage.getItem("erwanRenonSoftwareEngineering.settings") ||
        JSON.stringify(defaultSettings),
    ) as SettingsType,
  );

  useEffect(() => {
    localStorage.setItem(
      "erwanRenonSoftwareEngineering.settings",
      JSON.stringify(settings),
    );
  }, [settings]);

  return (
    <div className={`${getThemeClass(settings)} themeWrapper`}>
      <SettingsContext value={{ settings, setSettings }}>
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
      </SettingsContext>
    </div>
  );
};

export default App;
