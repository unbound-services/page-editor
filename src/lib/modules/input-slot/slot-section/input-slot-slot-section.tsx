import { useContext } from "react"
import EditorContext, {
  stateDeeper,
} from "../../content-editor/content-editor-editor-context";

const SlotSection = (props) => {
  const { sectionName, children } = props;
  const currentContext = useContext(EditorContext);
  const { previewing, editing } = currentContext;
  const newContext = { ...currentContext };
  newContext.editorState = {};
  if (currentContext.editorState[sectionName]) {
    newContext.editorState = currentContext.editorState[sectionName];
  }
  newContext.setState = stateDeeper(
    sectionName,
    currentContext.editorState,
    currentContext.setState
  );


  
  return (
    <EditorContext.Provider value={newContext}>
      {children}
    </EditorContext.Provider>
  );
};

export default SlotSection;
