import "ignore-styles";
import "./global-jsdom";
import render from "preact-render-to-string";
import { ContentSection, EditorContext, StringInput } from "./lib";

const TestComponent = ({ text = "test!" }) => {
  return <StringInput sectionName="text" />;
};

const testList = {
  "test-component": { displayName: "Test Component", comp: TestComponent },
};

console.log(
  render(
    <EditorContext.Provider
      value={{
        setState: () => null,
        editorState: { children: [] },
        componentList: testList,
        editing: false,
        previewing: true,
      }}>
      <ContentSection isRoot />
    </EditorContext.Provider>
  )
);
