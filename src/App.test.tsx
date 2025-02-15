
import PageEditorApp, { PageEditor, StringInput } from "./lib/index";

// import { PageEditorApp } from "./lib/index";
import { render, screen, within, fireEvent } from "@testing-library/preact";
// import { PageEditorApp } from "./lib/index";
// import { StringInput } from "./lib";
// import "@types/jest";
// import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";

// import { debug } from 'webpack';

const TestComponent = (props) => {
  const { text = "test!" } = props;
  return <StringInput sectionName="text" data-testid="test-component" />;
};

const testComponentList = {
  "test-component": { displayName: "Test Component", comp: TestComponent },
};

test("component shows up in list", () => {
  let a = 4;
  expect(a).toBe(4);
});

test("component shows up in list", () => {
  render(<PageEditor componentList={testComponentList} />);
  const dropDown = screen.getByTestId("add-component-listbox");
  const policyOption = within(dropDown).getByText("Test Component");
  expect(policyOption).toBeInTheDocument();
});

// changed by the new ui
// test("can place component", () => {
//   render(<PageEditor componentList={testComponentList} />);
//   const dropDown = screen.getByTestId("add-component-listbox");
//   const testbutton = screen.getByTestId("add-component-button");
//   const componentAddedBefore = screen.queryByText("test!");
//   fireEvent.change(dropDown, { target: { value: "test-component" } });
//   fireEvent.click(testbutton);
//   const componentAddedAfter = screen.getByTestId("test-component");
//   expect(componentAddedBefore).toBeNull();
//   expect(componentAddedAfter).toBeInTheDocument();
// });

test("can initialize page editor app", () => {
  const AppInstance = new PageEditorApp();
  // const { window: jsDomWindow } = new JSDOM(
  //   "<!doctype html><html><body></body></html>"
  // );

  AppInstance.initializeApp(document.body);
  const pageEditorExists = screen.getByTestId("page-editor");
  expect(pageEditorExists).toBeInTheDocument();
  cleanDom();
});

test("can add a component via the app interface", async () => {
  const AppInstance = new PageEditorApp();
  AppInstance.addComponents(TestComponent, "test", "Test");
  // const { window: jsDomWindow } = new JSDOM(
  //   "<!doctype html><html><body></body></html>"
  // );

  AppInstance.initializeApp(document.body);
  const componentIsOnList = within(
    screen.getByTestId("add-component-listbox")
  ).getByText("Test");
  expect(componentIsOnList).toBeInTheDocument();
  cleanDom();
});

// test("save function outputs data", () => {
//   let saveData = null;
//   function saveFunction(data) {
//     console.log(
//       "data in test save function: ",
//       data,
//       "pageState in test save: ",
//       data.pageState
//     );
//     saveData = data;
//   }

//   render(
//     <PageEditor componentList={testComponentList} onSave={saveFunction} />
//   );
//   const dropDown = screen.getByTestId("add-component-listbox");
//   const addbutton = screen.getByTestId("add-component-button");
//   const saveButton = screen.getByTestId("save-page-button");
//   fireEvent.change(dropDown, { target: { value: "test-component" } });
//   fireEvent.click(addbutton);
//   fireEvent.click(saveButton);

//   console.log("page state: ", saveData.pageState);
//   expect(saveData.pageState).toEqual({
//     children: [
//       {
//         comp: "test",
//         props: {
//           text: "test!",
//         },
//       },
//     ],
//   });
//   console.log("page Markup: ", saveData.pageMarkup);
//   expect(saveData.pageMarkup).toBe(
//     '<div><div data-testid="test-component">test!</div></div>'
//   );
// });

// test('load prop properly translates data', () => {
//   const AppInstance = new PageEditorApp();
//   AppInstance.addComponent("test", "Test", TestComponent);
//   const data = {
//     pageState: {
//       children: [
//         {
//           comp: "test",
//           props: {}
//         }
//       ]
//     }
//   }

//   AppInstance.initializeApp(document.body, false, data)
//   const isComponentOnPage = screen.queryByText('test!');
//   expect(isComponentOnPage).toBeInTheDocument();
// })

// function testComponent(
//   testComponent,
//   componentName,
//   expectedProps,
//   expectedMarkup,
//   setupCallback = null
// ) {
//   const testList = {
//     test: { displayName: componentName, comp: testComponent },
//   };
//   test(`${componentName} component shows up in the list`, () => {
//     console.log("inside the first test");
//     render(<PageEditor componentList={testList} />);
//     const dropDown = screen.getByTestId("add-component-listbox");
//     const componentIsOnList = within(dropDown).getByText(componentName);
//     expect(componentIsOnList).toBeInTheDocument();
//   });

//   test(`${componentName} component saves in the expected way`, () => {
//     let saveData = null;
//     function saveFunction(data) {
//       saveData = data;
//       console.log("save data after save: ", saveData);
//     }

//     const { debug } = render(
//       <PageEditor
//         componentList={testList}
//         onSave={(data) => saveFunction(data)}
//       />
//     );

//     const dropDown = screen.getByTestId("add-component-listbox");
//     const addbutton = screen.getByTestId("add-component-button");
//     const saveButton = screen.getByTestId("save-page-button");

//     fireEvent.change(dropDown, { target: { value: "test" } });
//     fireEvent.click(addbutton);
//     if (setupCallback) {
//       setupCallback();
//     }
//     // debug();
//     fireEvent.click(saveButton);

//     console.log(`${componentName} component pageState: `, saveData.pageState);
//     console.log(`${componentName} component pageMarkup: `, saveData.pageMarkup);
//     expect(saveData.pageState).toEqual(expectedProps);
//     expect(saveData.pageMarkup).toBe(expectedMarkup);
//   });
// }

function cleanDom() {
  let pageEditor = document.getElementsByClassName("page-editor")[0];
  pageEditor.parentNode.removeChild(pageEditor);
}

// testComponent(
//   TestComponent,
//   "Test",
//   { children: [ { comp: 'test' , props: {} } ] },
//   '<div><div data-testid="test-component">test!</div></div>'
// )

// testComponent(
//   Heading,
//   "Heading",
//   { children: [ { comp: 'test', props: {} } ] },
//   '<div></div>',
//   function(){
//     const field = screen.getByRole('textbox', {name: 'Heading Text'})
//     fireEvent.change(field, {value: 'Test'})
//   }
// )

// testComponent(
//   Paragraph,
//   "Paragraph",
//   { children: [ { comp: 'test', props: {} } ] },
//   '<div></div>',
//   function(){
//     const field = screen.getByRole('textbox', {name: 'Paragraph'})
//     fireEvent.change(field, {value: 'Test'})
//   }
// )
