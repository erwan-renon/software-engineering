import type { Article } from "articles/Article";
import { Breadcrumbs } from "components/breacrumbs/Breadcrumbs";
import { MainPage } from "components/main-page/MainPage";

type ArticlePage = {
  article: Article;
};

export const ArticlePage = ({ article }: ArticlePage) => {
  return (
    <MainPage>
      <Breadcrumbs
        breadcrumbs={[{ name: "Home", location: "/" }, { name: article.title }]}
      />
      <h1>{article.title}</h1>
      <div>{article.body()}</div>
    </MainPage>
  );
};
