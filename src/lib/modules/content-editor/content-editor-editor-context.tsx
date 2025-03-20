import { createContext } from "react"
import { PageEditorAppOptions, PageEditorRenderFlags } from "../page-editor/page-editor-app";
import { StreamContextType } from "../stream/stream-context";
import { StreamDriver } from "../stream/stream-driver";
import { cloneState } from "../input-slot/input-slot-hooks";
import React from "react";
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
  viewportDimensions: { width: number; height: number, zoom:number };
  updateViewportDimension: (key: string, val: number, add?:boolean) => void;
};
export const EditorContext = createContext<EditorContextType>(null);



export const EditorContextFrame = (props) => {
  const { editorState={}, componentList, plugins, editing=false, previewing, streams, renderFlags, contextualPageData, editorOptions, viewportDimensions, updateViewportDimension } = props;
  const [state, setState] = React.useState(cloneState(editorState));

  const contextVal = {
    setState: (newState, sectionName) => {
      if (sectionName) {
        setState((prevState) => {
          const newStateObj = { ...prevState[sectionName], ...newState };
          return { ...prevState, [sectionName]: newStateObj };
        });
      } else {
        setState(newState);
      }
    },
    editorState: state,
    componentList,
    plugins,
    editing,
    previewing,
    streams,
    renderFlags,
    contextualPageData,
    editorOptions,
    viewportDimensions,
    updateViewportDimension,
  };
  return <EditorContext.Provider value={contextVal}>
    {props.children}
  </EditorContext.Provider>
}

// we do this through functions so that each level of rendering has its own "scope"
export const stateDeeper = (name, state, setState) => (newStateObj) => {
  const newState = { ...state, [name]: newStateObj };
  setState(newState);
};



export default EditorContext;
