// import "ignore-styles";
import "./global-jsdom";
import React from "react";
import {  StringInput } from "./lib";
const TestComponent = ({ text = "test!" }) => {
  return <StringInput sectionName="text" />;
};

const testList = {
  "test-component": { displayName: "Test Component", comp: TestComponent },
};

// const editerVal = render(
//   <EditorContext.Provider
//     value={{
//       setState: () => null,
//       editorState: {
//         children: [{ comp: "test-component", props: { text: "its a test!" } }],
//       },
//       componentList: testList,
//       editing: false,
//       previewing: true,
//     }}>
//     <ContentSection isRoot />
//   </EditorContext.Provider>
// );

// fs.writeFileSync("test.html", editerVal);
