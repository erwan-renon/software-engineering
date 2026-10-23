import type { ReactNode } from "react";

export type Article = {
  id: "accessibility-in-tests";
  title: string;
  body: () => ReactNode;
  preview: string;
};
