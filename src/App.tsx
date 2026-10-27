import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "features/home-page/Home";
import { Articles } from "articles/Articles";
import { ArticlePage } from "features/article-page/ArticlePage";
import { Header } from "features/header/Header";
import { Themes } from "constants/Themes";

const App = () => {
  return (
    <div className={`${Themes.AUTUMN} themeWrapper`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route>
              {Articles.map((article) => {
                return (
                  <Route
                    path={`${article.id}`}
                    element={<ArticlePage article={article} />}
                  />
                );
              })}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
