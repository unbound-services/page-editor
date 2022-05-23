import InputSlot from "../input-slot";
import * as React from "preact";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class RichTextInput extends InputSlot {
  editorRender() {
    const {
      value = "",
      sectionName,
      label = "",
      hidden = false,
      tagName = "div",
      inputClass,
      useTheme = "snow",
      ...otherProps
    } = this.props;

    const TagName = tagName;
    const { editorState: state, editing } = this.context;
    const onChange = (e) => {
      this.context.setState({ ...state, [sectionName]: e });
    };
    console.log("state", state);

    let classNames = "section__common-text";
    if (inputClass) {
    }

    if (editing) {
      return (
        <React.Fragment>
          {label}
          <ReactQuill
            onChange={onChange}
            value={state[sectionName] || ""}
            theme={useTheme}
          />
        </React.Fragment>
      );
    } else {
      if (hidden) {
        return null;
      }
      return (
        <TagName
          className={inputClass}
          dangerouslySetInnerHTML={{
            __html: state[sectionName],
          }}
          {...otherProps}></TagName>
      );
    }
  }
}

export default RichTextInput;
