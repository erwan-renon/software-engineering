import { Articles } from "articles/Articles";
import { ListCard } from "components/ListCard";
import { MainPage } from "components/main-page/MainPage";

export const Home = () => {
  return (
    <MainPage>
      <h1>Articles</h1>
      <ul className="cardList">
        {Articles.toReversed().map((article) => {
          return (
            <ListCard
              document={article}
              headingHref={`/articles/${article.id}`}
            />
          );
        })}
      </ul>
    </MainPage>
  );
};
