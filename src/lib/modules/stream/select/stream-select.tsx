import InputSlot from "../../input-slot/input-slot";
import React from "react";
import { useContext } from "react";
import { StreamContext } from "../stream-context";
import { useState } from "react";

// todo: inheritence
export interface StreamInputProps {
  value: any;
  sectionName: string;
  label: string;
  tagName: string;
  hidden: boolean;
  inputClass: string;
  children: any;
}

const StreamComp = ({ onChange, value }) => {
  const stream = useContext(StreamContext);
  const [currentVal, setCurrentVal] = useState(null);

  const onClick = () => {
    stream.getStream("demoStream", {}, (val) => {
      onChange(val);
    });
  };

  return (
    <div>
      {value}
      <button onClick={onClick}>Select From Stream</button>
    </div>
  );
};

export type StreamInputState = {};
export class StreamSelect extends InputSlot<
  StreamInputProps,
  StreamInputState
> {
  editorRender() {
    const {
      value = "yay",
      sectionName,
      label,
      tagName = "div",
      hidden = false,
      inputClass = "",
      children = null,
      ...otherProps
    } = this.props;
    const TagName = tagName;

    // get the state out of the context
    const { editorState: state, editing } = this.context;
    const onChange = (newValue) => {
      this.context.setState({ ...state, [sectionName]: newValue });
    };

    if (editing) {
      return (
        <TagName {...inputClass} {...otherProps}>
          <StreamComp onChange={onChange} value={state[sectionName]} />
        </TagName>
      );
    } else {
      if (hidden) {
        return null;
      }
      return (
        <TagName {...inputClass} {...otherProps}>
          {state[sectionName]}
          {children}
        </TagName>
      );
    }
  }
}
