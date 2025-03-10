
import * as React from "react";
import { useEditorContext } from "../input-slot-hooks";



export const CheckboxInput = (props: {
    sectionName: string;
    current?: boolean;
    label: string;
    hidden?: boolean;
    tagName?: any;
    }) => {
    const {
      sectionName,
      current,
      label,
      hidden = false,
      tagName = "div",
      ...otherProps
    } = props;
    const TagName = tagName;
    const { editorState: state, editing, setState} = useEditorContext();
    const onChange = (e) => {
      setState({ ...state, [sectionName]: e.currentTarget.checked });
    };
    if (editing) {
      return (
        <TagName>
          <label>
            <span>{label}</span>
            <input
              type="checkbox"
              onChange={onChange}
              checked={current}
            />
          </label>
        </TagName>
      );
    } else {
      if (hidden) {
        return null;
      }
      return <TagName {...otherProps}>{current ? "true" : "false"}</TagName>;
    }
    };