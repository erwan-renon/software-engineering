import { Articles } from "articles/Articles";
import { HomeArticle } from "features/home-page/articles/HomeArticle";

export const Home = () => {
  return (
    <ul className="cardList">
      {Articles.toReversed().map((article) => {
        return <HomeArticle article={article} />;
      })}
    </ul>
  );
};
