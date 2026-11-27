import type { ReactNode } from "react";
import "components/main-page/mainpage.css";

type MainPageProps = {
  children: ReactNode;
};

export const MainPage = ({ children }: MainPageProps) => {
  return (
    <main id="main-content">
      <div className="mainPageWrapper">{children}</div>
    </main>
  );
};
