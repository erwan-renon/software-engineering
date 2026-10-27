import "components/breacrumbs/breadcrumbs.css";

export type Breadcrumb = {
  name: string;
  location?: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumbs">
      <ul className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li className="breadcrumb">
              {index > 0 ? <p aria-hidden={true}>/</p> : null}
              {breadcrumb.location ? (
                <a href={breadcrumb.location}>{breadcrumb.name}</a>
              ) : (
                <p>{breadcrumb.name}</p>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
