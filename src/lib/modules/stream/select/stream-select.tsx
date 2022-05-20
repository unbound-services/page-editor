import InputSlot from "../../input-slot/input-slot";
import React, { Fragment } from "react";
import { useContext } from "react";
import { StreamContext } from "../stream-context";
import { useState } from "react";
import { useEditorContext } from "../../input-slot/input-slot-hooks";
import { useEffect } from "react";

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
    stream.getStream("test-stream", (val) => {
      onChange(val[0]);
    });
  };

  return (
    <div>
      <button onClick={onClick}>Select From Stream</button>
    </div>
  );
};

export const StreamButton = ({ sectionName, setButtonRender }) => {
  const editorContext = useEditorContext(sectionName);
  const stream = useContext(StreamContext);

  const onClick = () => {
    stream.getStream("test-stream", (val) => {
      editorContext.setState(val[0].src);
    });
  };

  useEffect(() => {
    setButtonRender(() => {
      return <button onClick={onClick}>Select From Stream</button>;
    });
    console.log("called set button render");
  }, []);

  return null;
};

export const StreamSelect = ({ targetImage, setButtonRender, ...props }) => {
  let displayVal = null;
  if (targetImage) {
    displayVal = <img src={targetImage} />;
  } else {
    displayVal = <span style={{ padding: 20 }}>Image Placeholder</span>;
  }
  return (
    <Fragment>
      <StreamButton
        sectionName="targetImage"
        setButtonRender={setButtonRender}
        {...props}
      />
      {displayVal}
    </Fragment>
  );
};

export type StreamInputState = {};
export class StreamSelectOld extends InputSlot<
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

    const currentVal = state[sectionName];
    let displayVal = null;
    if (currentVal) {
      displayVal = <img src={currentVal.src} />;
    }

    if (editing) {
      return (
        <TagName {...inputClass} {...otherProps}>
          {displayVal}
          <StreamComp onChange={onChange} value={state[sectionName]} />
        </TagName>
      );
    } else {
      if (hidden) {
        return null;
      }

      return (
        <TagName {...otherProps}>
          {displayVal}
          {children}
        </TagName>
      );
    }
  }
}
