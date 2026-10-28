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
import { Themes } from "constants/Themes";
import { Settings } from "features/settings/Settings";
import { AppTitle } from "components/AppTitle";

const App = () => {
  return (
    <div className={`${Themes.AUTUMN} themeWrapper`}>
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
    </div>
  );
};

export default App;
