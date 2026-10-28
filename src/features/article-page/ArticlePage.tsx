import { ArticleById } from "articles/Articles";
import { Breadcrumbs } from "components/breacrumbs/Breadcrumbs";
import { MainPage } from "components/main-page/MainPage";
import { useParams } from "react-router-dom";

export const ArticlePage = () => {
  const { articleId } = useParams();

  if (!articleId) {
    return <></>;
  }

  const article = ArticleById[articleId];

  return (
    <MainPage>
      <Breadcrumbs
        breadcrumbs={[
          { name: "Home", location: "/articles" },
          { name: article.title },
        ]}
      />
      <h1>{article.title}</h1>
      <div>{article.body()}</div>
    </MainPage>
  );
};
