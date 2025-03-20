import { useContext } from "react"
import * as React from "react";
import {
  EditorContext,
  EditorContextType,
} from "../content-editor/content-editor-editor-context";

export type StreamInputState = {};

// this should only be called once per component
/**
 *
 * @param sectionName the name for the section of state that this component is in charge of
 * // if you pass in a section name, the setState you receive will only accept one value; otherwise it will be the state for the whole component
 * @returns
 */
export const useEditorContext = (
  sectionName: string = null,
  returnObjectIfOutsideContext = false
): EditorContextType => {
  let editorContext = useContext(EditorContext);

  if (!editorContext) {
    if(returnObjectIfOutsideContext){
      return {
        setState: (newState) => {},
        editorState: {},
        componentList: {},
        editing: false,
        previewing: false,
        editorOptions: {},
        viewportDimensions: { width: 0, height: 0, zoom: 1 },
        updateViewportDimension: (key, val, add) => {},
      };
    }
    return undefined;
  }

  if (!sectionName) return editorContext;

  if(!editorContext) return undefined;

  let state = editorContext.editorState;

  let sections = [];
  if(sectionName.indexOf('.') > -1){
    sections = sectionName.split('.');
  } else {
    sections = [sectionName];
  }
  for(let i = 0; i < sections.length; i++){
    if(!state || (typeof(state) !== 'object' && !Array.isArray(state))){
      break;
    }
    state = state[sections[i]];

  }
      
  

  let namedState = (newValue) => {
    let newState = cloneState(editorContext.editorState);
    let cursor = newState;
    for(let i = 0; i < sections.length; i++){
      if(i === sections.length - 1){
        cursor[sections[i]] = cloneState(newValue);
      } else {
        cursor[sections[i]] = cloneState(cursor[sections[i]]) || {};
        cursor = cursor[sections[i]];
      }
    }
    editorContext.setState(newState);
  };

  // if they passed in a sectionName then give them a proper state
  return {
    ...editorContext,
    setState: namedState,
    editorState:state
  };
};

export const cloneState = (state) => {
  if(Array.isArray(state)){
    return [...state];
  } else if(typeof(state) === 'object'){
    return { ...state };
  }
  return state;
}

interface useEditorContextOutputProps {
  editorContext: EditorContextType;
  [x: string]: any;
}

/**
 * @description injectEditorState is a higher-order function that injects the editor state into a component
 * @param Comp the component that you would like to inject the editor state into
 * @returns a component which will have the editor state injected from the context through the props
 **/

export const injectEditorState = (Comp:React.ComponentType) => (props:any) => {
  const { editorState, editing, setState } = useEditorContext(props.sectionName);
  return <Comp {...editorState} editing={editing} setState={setState} {...props}  />
}

/**
 * @description useEditorState is a hook that returns the editor state
 * @param sectionName the name for the section of state that this component is in charge of
 * @returns
 */
export const useEditorState = (sectionName: string = null, ) => {
  const context = useEditorContext(sectionName).editorState;
  return [context?.editorState, context?.setState, context?.editing];
}

export const useEditorStateWithProps  = (sectionName: string = null, props:any) => {
  return {...useEditorContext(sectionName).editorState, ...props};
}



/**
 * @description injectEditorContext creates a higher-order component - it is simply another way to inject the context
 * // this was originally a workaround, but someone may find it useful
 * @param Component the component that needs to be wrapped with an editor context consumer
 * @returns
 */
export const injectEditorContext = (
  Component: (props: useEditorContextOutputProps) => any
) => {
  return (props) => {
    return (
      <EditorContext.Consumer>
        {(editorContextValue) => (
          <Component {...props} editorContext={editorContextValue} />
        )}
      </EditorContext.Consumer>
    );
  };
};


