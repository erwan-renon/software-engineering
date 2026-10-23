import { Articles } from "articles/Articles";
import { HomeArticle } from "features/home-page/articles/HomeArticle";

export const Home = () => {
  return (
    <div>
      <h1>Erwan Renon Software Engineering</h1>
      {Articles.map((article) => {
        return <HomeArticle article={article} />;
      })}
    </div>
  );
};
