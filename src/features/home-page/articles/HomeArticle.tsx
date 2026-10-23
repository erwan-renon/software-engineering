import type { Article } from "articles/Article";

type HomeArticleProps = {
  article: Article;
};

export const HomeArticle = ({ article }: HomeArticleProps) => {
  return (
    <li className="card">
      <a href={article.id}>
        <h2>{article.title}</h2>
      </a>

      <p>{article.preview}</p>
    </li>
  );
};
