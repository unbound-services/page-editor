import React from "react";
import EditorContext from "../content-editor/content-editor-editor-context";

export class InputSlot<
  InputSlotPropType,
  InputSlotStateType
> extends React.Component<InputSlotPropType, InputSlotStateType> {
  publicRender() {}

  editorRender(): JSX.Element {
    return <div></div>;
  }

  // onchange for the whole object
  onChange(obj) {
    this.context.onChange(obj);
  }

  render() {
    return this.editorRender();
  }
}

InputSlot.contextType = EditorContext;

export default InputSlot;
