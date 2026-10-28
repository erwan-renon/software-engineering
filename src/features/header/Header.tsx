import { HeaderNavLink } from "features/header/HeaderNavLink";
import "/features/header/header.css";
import { useMatch } from "react-router-dom";

export const Header = () => {
  const matchesArticles = useMatch("/articles/*");
  const matchesSettings = useMatch("/settings/*");

  return (
    <header className="appHeader">
      <p>
        Erwan Renon
        <br /> Software Engineering
      </p>
      <nav>
        <ul className="appHeaderLinks">
          <li>
            <HeaderNavLink
              content="Articles"
              href="/articles"
              isMatch={!!matchesArticles}
            />
          </li>
          <li>
            <HeaderNavLink
              content="Settings"
              href="/settings"
              isMatch={!!matchesSettings}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
