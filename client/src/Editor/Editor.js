import React from "react";
import GraphCanvas from "./components/GraphCanvas";
import Inspector from "./components/Inspector";
import { EditorContextProvider } from "./context/EditorContext";
import ExampleStory from "./constants/ExampleStory";

const Editor = () => {
  return (
    <EditorContextProvider userStory={ExampleStory} >
      <GraphCanvas />
      <Inspector />
    </EditorContextProvider>
  );
};

export default Editor;