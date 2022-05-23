import { Fragment } from "preact";
import { InputSlot } from "../input-slot";

export class EditorValue extends InputSlot {
  render() {
    const { sectionName, ...otherProps } = this.props;
    const TagName = "div";
    const { editorState: state } = this.context;

    return <Fragment>{state[sectionName] ? state[sectionName] : ""}</Fragment>;
  }
}

export default EditorValue;
