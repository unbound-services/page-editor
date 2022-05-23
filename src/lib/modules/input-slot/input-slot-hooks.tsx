import {
  EditorContext,
  EditorContextType,
} from "../content-editor/content-editor-editor-context";

export type StreamInputState = {};

// this should only be called once per component
// export const useEditorContext = (
//   sectionName: string = null
// ): EditorContextType => {
//   const editorState = useContext(EditorContext);

//   if (!sectionName) return editorState;

//   // if they passed in a sectionName then give them a proper state
//   return {
//     ...editorState,
//     setState: (newValue) => {
//       editorState.setState({
//         ...editorState.editorState,
//         [sectionName]: newValue,
//       });
//     },
//   };
// };

interface useEditorContextOutputProps {
  editorContext: EditorContextType;
  [x: string]: any;
}

export const useEditorContext = (
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
