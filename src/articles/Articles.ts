import { AccessibilityInTests } from "articles/accessibility-in-tests/AccessibilityInTests";
import type { Document } from "common/types/Document";
import { UseOfComments } from "articles/use-of-comments/UseOfComments";

export const Articles: Document[] = [AccessibilityInTests, UseOfComments];

export const ArticleById: Record<string, Document> = Articles.reduce(
  (articles, currentArticle) => {
    return Object.assign(articles, { [currentArticle.id]: currentArticle });
  },
  {},
);
