import type { Article } from "articles/Article";

type HomeArticleProps = {
  article: Article;
};

export const HomeArticle = ({ article }: HomeArticleProps) => {
  return (
    <li className="card">
      <h2>
        <a href={`/articles/${article.id}`}>{article.title}</a>
      </h2>
      <p>{article.preview}</p>
    </li>
  );
};
