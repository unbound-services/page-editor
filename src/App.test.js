import { render, screen, within, fireEvent } from '@testing-library/preact';
import { PageEditor } from './lib';
import { PageEditorApp } from './lib';

const TestComponent = () =>{
  return <div data-testid='test-component'>test!</div>;
}

const testComponentList = {
  "test-component" : { displayName: "Test Component", comp: TestComponent },
}

test('component shows up in list', () => {
  render(<PageEditor componentList={testComponentList} />);
  const dropDown = screen.getByTestId('add-component-listbox');
  const policyOption = within(dropDown).getByText('Test Component');
  expect(policyOption).toBeInTheDocument();
});

test('can place component', () => {
  render(<PageEditor componentList={testComponentList} />);
  const dropDown = screen.getByTestId('add-component-listbox');
  const testbutton = screen.getByTestId('add-component-button');
  const componentAddedBefore = screen.queryByText('test!');
  fireEvent.change(dropDown, { target: { value: 'test-component' } });
  fireEvent.click(testbutton);
  const componentAddedAfter = screen.getByTestId('test-component');
  expect(componentAddedBefore).toBeNull();
  expect(componentAddedAfter).toBeInTheDocument();
});

test('can initialize page editor app', () => {
  const AppInstance = new PageEditorApp();
  AppInstance.initializeApp(document.body);
  const pageEditorExists = screen.getByTestId('page-editor');
  expect(pageEditorExists).toBeInTheDocument();
})

test('can add a component via the app interface', () => {
  const AppInstance = new PageEditorApp();
  AppInstance.addComponent("test", "Test", TestComponent);
  AppInstance.initializeApp(document.body);
  const componentIsOnList = within(screen.getByTestId('add-component-listbox')).getByText('Test');
  expect(componentIsOnList).toBeInTheDocument();
})

test('save function outputs data', () => {
  const AppInstance = new PageEditorApp();
  let saveData = false;
  function saveFunction(data) {
    saveData = data;
  }
  AppInstance.addComponent("test", "Test", TestComponent);
  AppInstance.initializeApp(document.body, saveFunction);

  const dropDown = screen.getByTestId('add-component-listbox');
  const addbutton = screen.getByTestId('add-component-button');
  const saveButton = screen.getByTestId('save-page-button');
  fireEvent.change(dropDown, { target: { value: 'test' } });
  fireEvent.click(addbutton);
  fireEvent.click(saveButton);
  
  console.log("saveData: ", saveData)
  expect(saveData.pageState.children.length).toBe(1);
})

test('load prop properly translates data', () => {
  const AppInstance = new PageEditorApp();
  AppInstance.addComponent("test", "Test", TestComponent);
  const data = {
    pageState: {
      children: [
        {
          comp: "test",
          props: {}
        }
      ]
    }
  }

  AppInstance.initializeApp(document.body, false, data)
  const isComponentOnPage = screen.queryByText('test!');
  expect(isComponentOnPage).toBeInTheDocument();
})