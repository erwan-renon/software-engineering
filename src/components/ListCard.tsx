import type { Document } from "common/types/Document";

type ListCardProps = {
  document: Document;
  headingHref: string;
};

export const ListCard = ({ document, headingHref }: ListCardProps) => {
  return (
    <li className="card">
      <h2>
        <a href={headingHref}>{document.title}</a>
      </h2>
      <p>{document.preview}</p>
    </li>
  );
};
