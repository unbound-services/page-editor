import { render, screen, within, fireEvent } from '@testing-library/react';
import { PageEditor } from './page-editor';

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
