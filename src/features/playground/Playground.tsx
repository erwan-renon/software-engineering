import { ListCard } from "components/ListCard";
import { MainPage } from "components/main-page/MainPage";
import { PlaygroundExamples } from "playground-examples/PlaygroundExamples";

export const Playground = () => {
  return (
    <MainPage>
      <h1>Playground</h1>
      <ul className="cardList">
        {PlaygroundExamples.toReversed().map((playgroundExample) => {
          return (
            <ListCard
              document={playgroundExample}
              headingHref={`/playground/${playgroundExample.id}`}
            />
          );
        })}
      </ul>
    </MainPage>
  );
};
