import type { Article } from "articles/Article";

type HomeArticleProps = {
  article: Article;
};

export const HomeArticle = ({ article }: HomeArticleProps) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.preview}</p>
    </div>
  );
};
