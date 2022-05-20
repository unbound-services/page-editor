import { useContext } from "preact/hooks";
import EditorContext, {
  EditorContextType,
} from "../content-editor/content-editor-editor-context";
import { StreamInputProps } from "../stream/select/stream-select";
import InputSlot from "./input-slot";

export type StreamInputState = {};

// this should only be called once per component
export const useEditorContext = (
  sectionName: string = null
): EditorContextType => {
  const editorState = useContext(EditorContext);

  if (!sectionName) return editorState;

  // if they passed in a sectionName then give them a proper state
  return {
    ...editorState,
    setState: (newValue) => {
      editorState.setState({
        ...editorState.editorState,
        [sectionName]: newValue,
      });
    },
  };
};
