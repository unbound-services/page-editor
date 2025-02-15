import { createContext } from "react"
import { PageEditorAppOptions, PageEditorRenderFlags } from "../page-editor/page-editor-app";
import { StreamContextType } from "../stream/stream-context";
import { StreamDriver } from "../stream/stream-driver";
// editor context is used to pass editor data all the way down
export type EditorContextType = {
  setState: (newState,sectionName?) => void;
  editorState: any;
  componentList: any;
  plugins?: any;
  editing: boolean;
  previewing: boolean;
  streams?: StreamContextType;
  renderFlags?: PageEditorRenderFlags;
  contextualPageData?: any;
  editorOptions: PageEditorAppOptions;
};
export const EditorContext = createContext<EditorContextType>(null);

// we do this through functions so that each level of rendering has its own "scope"
export const stateDeeper = (name, state, setState) => (newStateObj) => {
  const newState = { ...state, [name]: newStateObj };
  setState(newState);
};

export const incState = (currentContext, index,sectionName="children") => {
  const newVal = { ...currentContext };

  let setState = (stateUpdate, otherval) => {

    const newState = { ...currentContext.editorState };
    if (newState[sectionName]) {
      newState[sectionName] = [...newState[sectionName]];
    }
    newState[sectionName][index].props = {
      ...newState[sectionName][index].props,
      ...stateUpdate,
    };
    currentContext.setState(newState);
  };


  newVal.setState = setState;

  newVal.editorState = currentContext.editorState[sectionName][index].props;
  return newVal;
};

export default EditorContext;
