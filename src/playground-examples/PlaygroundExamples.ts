import type { Document } from "common/types/Document";
import { ListInaccessibleButtons } from "playground-examples/list-inaccessible-buttons/ListInaccessibleButtons";

export const PlaygroundExamples: Document[] = [ListInaccessibleButtons];

export const PlaygroundExamplesById: Record<string, Document> =
  PlaygroundExamples.reduce((playgroundExamples, currentPlaygroundExamples) => {
    return Object.assign(playgroundExamples, {
      [currentPlaygroundExamples.id]: currentPlaygroundExamples,
    });
  }, {});
