import * as React from "react";
import { useEditorContext } from "../input-slot-hooks";

export interface StringInputProps {
  value?: any;
  sectionName: string;
  label?: string;
  tagName?: string;
  hidden?: boolean;
  inputClass?: string;
  children?: any;
}

export type StringInputState = {};
export const StringInput = (props:StringInputProps) => {
    const {
      value = "yay",
      sectionName,
      label,
      tagName = "div",
      hidden = false,
      inputClass = {},
      children = null,
      ...otherProps
    } = props;
    const TagName = tagName;
    const { editorState: state, editing, setState} = useEditorContext();
    const onChange = (e) => {
      setState({ ...state, [sectionName]: e.currentTarget.value });
    };

    if (editing) {
      if (!label) {
        return (
          // @ts-ignore
          <TagName {...inputClass} {...otherProps}>
            <input type="text" onChange={onChange} value={state[sectionName]} />
          </TagName>
        );
      }

      return (
          // @ts-ignore
        <TagName {...inputClass} {...otherProps}>
          <label>
            <span>{label}</span>
            <input type="text" onChange={onChange} value={state[sectionName]} />
          </label>
        </TagName>
      );
    } else {
      if (hidden) {
        return null;
      }
      return (
          // @ts-ignore
        <TagName {...inputClass} {...otherProps}>
          {state[sectionName]}
          {children}
        </TagName>
      );
    }
  }

export default StringInput;
