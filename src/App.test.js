import { render, screen, within, fireEvent } from '@testing-library/react';
import { PageEditor } from './page-editor';

const TestComponent = () =>{
  return <div>test!</div>;
}

const testComponentList = {
  "test-component" : { displayName: "Test Component", comp: TestComponent },
}

test('component shows up in list', () => {
  render(<PageEditor componentList={testComponentList} />);
  const dropDown = screen.getByRole('combobox');
  const policyOption = within(dropDown).getByText('Test Component');
  expect(policyOption).toBeInTheDocument();
});

test('can place component', () => {
  render(<PageEditor componentList={testComponentList} />);
  const dropDown = screen.getByRole('combobox');
  const testbutton = screen.getByText('+ Add Component');
  const componentAddedBefore = screen.queryByText('test!');
  fireEvent.change(dropDown, { target: { value: 'test-component' } });
  fireEvent.click(testbutton);
  const componentAddedAfter = screen.getByText('test!');
  expect(componentAddedBefore).not.toBeInTheDocument();
  expect(componentAddedAfter).toBeInTheDocument();
});
