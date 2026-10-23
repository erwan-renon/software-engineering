export const UseOfCommentsBody = () => {
  return (
    <>
      <h3>Introduction</h3>
      <p>
        I started thinking about this as I suddenly saw an increase in the
        amount of comments and documentation in PRs.
      </p>
      <p>
        This is going to be opinionated : I prefer longer variable names and
        very explicit code, and dislike the use of comments in most cases.
      </p>
      <p>
        I will be discussing this in the context of large enterprise web apps
        with React and Typescript. Those apps use high-level language, don't
        have really complex technical logic but they do deal with some
        real-world business logic.
      </p>
    </>
  );
};
