import { render, screen, within, fireEvent } from '@testing-library/preact';
import { PageEditor } from './page-editor';
import PageEditorApp from './page-editor-app';

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