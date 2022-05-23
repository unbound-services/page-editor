import InputSlot from "../input-slot";
import * as React from "preact";
import "react-quill/dist/quill.snow.css";
declare class RichTextInput extends InputSlot {
    editorRender(): React.JSX.Element;
}
export default RichTextInput;
