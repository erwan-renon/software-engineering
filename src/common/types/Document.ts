import type { ReactNode } from "react";

export type Document = {
  id: string;
  title: string;
  body: () => ReactNode;
  preview: string;
  dateAdded: number;
};
