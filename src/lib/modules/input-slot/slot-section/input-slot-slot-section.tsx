import * as React from "react";
import { useContext } from "react"
import EditorContext, {
  stateDeeper,
} from "../../content-editor/content-editor-editor-context";
import { useEditorContext } from "../input-slot-hooks";

const SlotSection = (props) => {
  const { sectionName, children, editing:editingProp } = props;
  const currentContext = useEditorContext(sectionName);
  let { previewing, editing } = currentContext ? currentContext : { previewing: false, editing: false };
  const newContext = { ...currentContext };
  if(!newContext.editorState){
    newContext.editorState = {};
  }

  if(editingProp !== undefined){
    newContext.editing = editingProp;
  }
  
  
  return (
    <EditorContext.Provider value={newContext}>
      {children}
    </EditorContext.Provider>
  );
};

export default SlotSection;
