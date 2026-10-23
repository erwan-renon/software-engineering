import type { Article } from "articles/Article";
import { Breadcrumbs } from "components/breacrumbs/Breadcrumbs";

type ArticlePage = {
  article: Article;
};

export const ArticlePage = ({ article }: ArticlePage) => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[{ name: "Home", location: "/" }, { name: article.title }]}
      />
      <h2>{article.title}</h2>
      <div>{article.body()}</div>
    </>
  );
};
