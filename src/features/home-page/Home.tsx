import { Articles } from "articles/Articles";
import { MainPage } from "components/main-page/MainPage";
import { HomeArticle } from "features/home-page/articles/HomeArticle";

export const Home = () => {
  return (
    <MainPage>
      <h1>Articles</h1>
      <ul className="cardList">
        {Articles.toReversed().map((article) => {
          return <HomeArticle article={article} />;
        })}
      </ul>
    </MainPage>
  );
};
