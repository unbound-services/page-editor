import { useContext } from "preact/hooks";
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
  sectionName: string = null
): EditorContextType => {
  const editorState = useContext(EditorContext);

  if (!sectionName) return editorState;

  let namedState = (newValue) => {
    editorState.setState({
      ...editorState.editorState,
      [sectionName]: newValue,
    });
  };

  // if they passed in a sectionName then give them a proper state
  return {
    ...editorState,
    setState: namedState,
  };
};

interface useEditorContextOutputProps {
  editorContext: EditorContextType;
  [x: string]: any;
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
