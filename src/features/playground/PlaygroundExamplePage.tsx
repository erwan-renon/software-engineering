import { Breadcrumbs } from "components/breacrumbs/Breadcrumbs";
import { MainPage } from "components/main-page/MainPage";
import { PlaygroundExamplesById } from "playground-examples/PlaygroundExamples";
import { useParams } from "react-router-dom";

export const PlaygroundExamplePage = () => {
  const { exampleId } = useParams();

  if (!exampleId) {
    return <></>;
  }

  const example = PlaygroundExamplesById[exampleId];

  return (
    <MainPage>
      <Breadcrumbs
        breadcrumbs={[
          { name: "Playground", location: "/playground" },
          { name: example.title },
        ]}
      />
      <h1>{example.title}</h1>
      <div>{example.body()}</div>
    </MainPage>
  );
};
