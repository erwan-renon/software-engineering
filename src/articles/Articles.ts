import { AccessibilityInTests } from "articles/accessibility-in-tests/AccessibilityInTests";
import type { Article } from "articles/Article";
import { UseOfComments } from "articles/use-of-comments/UseOfComments";

export const Articles: Article[] = [AccessibilityInTests, UseOfComments];

export const ArticleById: Record<string, Article> = Articles.reduce(
  (articles, currentArticle) => {
    return Object.assign(articles, { [currentArticle.id]: currentArticle });
  },
  {},
);
