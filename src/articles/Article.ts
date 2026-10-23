import type { ReactNode } from "react";

export type Article = {
  id: string;
  title: string;
  body: () => ReactNode;
  preview: string;
};
