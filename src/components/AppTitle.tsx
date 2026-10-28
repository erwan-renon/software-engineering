import { ArticleById } from "articles/Articles";
import { useMatch, useParams } from "react-router-dom";

export const AppTitle = () => {
  const matchesArticles = useMatch("/articles");
  const matchesSettings = useMatch("/settings");

  const matchesArticlePage = useMatch("/articles/*");
  const { articleId } = useParams();

  const buildTitle = () => {
    const titleElements: string[] = [];

    if (matchesArticlePage && articleId) {
      titleElements.push(ArticleById[articleId].title);
      titleElements.push("Articles");
    }

    if (matchesArticles) {
      titleElements.push("Articles");
    }

    if (matchesSettings) {
      titleElements.push("Settings");
    }

    titleElements.push("Erwan Renon Software Engineering");

    return titleElements.join(" - ");
  };

  return <title>{buildTitle()}</title>;
};
