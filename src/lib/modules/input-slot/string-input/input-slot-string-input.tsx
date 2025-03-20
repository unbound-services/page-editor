import * as React from "react";
import { useEditorContext } from "../input-slot-hooks";

export interface StringInputProps {
  value?: any;
  sectionName: string;
  label?: string;
  tagName?: string;
  hidden?: boolean;
  inputClass?: string;
  placeholder?: string;
  children?: any;
}

export type StringInputState = {};
export const StringInput = (props:StringInputProps) => {
    const {
      value,
      sectionName,
      label,
      tagName = "div",
      hidden = false,
      inputClass = {},
      children = null,
      ...otherProps
    } = props;
    const TagName = tagName;
    const { editorState: state, editing, setState} = useEditorContext(sectionName);
    let valueToUse = value ? value : state ? state : "";
    const onChange = (e) => {
      setState(e.currentTarget.value );
    };

    if (editing) {
      if (!label) {
        return (
          // @ts-ignore
          <TagName {...inputClass} {...otherProps}>
            <input type="text" onChange={onChange} value={valueToUse} />
          </TagName>
        );
      }

      return (
          // @ts-ignore
        <TagName {...inputClass} {...otherProps}>
          <label>
            <span>{label}</span>
            <input type="text" onChange={onChange} value={valueToUse} />
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
