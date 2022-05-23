import { createContext } from "preact/compat";
import { StreamContextType } from "../stream/stream-context";
import { StreamDriver } from "../stream/stream-driver";
// editor context is used to pass editor data all the way down
export type EditorContextType = {
  setState: (newState) => void;
  editorState: any;
  componentList: any;
  plugins: any;
  editing: boolean;
  previewing: boolean;
  streams: StreamContextType;
};
export const EditorContext = createContext<EditorContextType>(null);

// we do this through functions so that each level of rendering has its own "scope"
export const stateDeeper = (name, state, setState) => (newStateObj) => {
  const newState = { ...state, [name]: newStateObj };
  setState(newState);
};

export const incState = (currentContext, index) => {
  const newVal = { ...currentContext };

  let setState = (stateUpdate) => {
    const newState = { ...currentContext.editorState };
    if (newState.children) {
      newState.children = [...newState.children];
    }
    newState.children[index].props = {
      ...newState.children[index].props,
      ...stateUpdate,
    };
    currentContext.setState(newState);
  };

  //  let replaceState = (stateReplacement) => {
  //      const newState = { ...currentContext.editorState};
  //      if(newState.children) {
  //          newState.children = [...newState.children];
  //      }
  //      newState.children[index].props = stateUpdate;
  //      currentContext.setState(newState);
  //  }

  // let setState = stateDeeper(index, currentContext.editorState, currentContext.setState);
  // setState = stateDeeper("props", currentContext.editorState.children[index], setState)
  // newVal.setState = stateDeeper("props", currentContext.editorState.children[index], setState)
  newVal.setState = setState;

  newVal.editorState = currentContext.editorState.children[index].props;
  return newVal;
};

export default EditorContext;
