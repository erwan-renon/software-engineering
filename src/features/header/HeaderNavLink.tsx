type HeaderNavLinkProps = {
  content: string;
  href: string;
  isMatch: boolean;
};

export const HeaderNavLink = ({
  content,
  href,
  isMatch,
}: HeaderNavLinkProps) => {
  return (
    <a
      aria-current={isMatch ? "page" : undefined}
      className={`appHeaderLink${isMatch ? " appHeaderSelectedLink" : ""}`}
      href={href}
    >
      {content}
    </a>
  );
};
