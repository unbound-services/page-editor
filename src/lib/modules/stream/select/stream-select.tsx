import InputSlot from "../../input-slot/input-slot";

import {
  injectEditorContext,
  useEditorContext,
} from "../../input-slot/input-slot-hooks";
import { useEffect, useState } from "preact/hooks";
import { Fragment } from "preact";

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

const StreamComp = injectEditorContext(({ onChange, value, editorContext }) => {
  const stream = editorContext.streams;
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
});

export const StreamSelectButton = ({
  streamName,
  sectionName,
  setButtonRender,
}) => {
  const editorContext = useEditorContext(sectionName);
  const streams = editorContext.streams;

  const onClick = () => {
    streams.getStream(streamName, (val) => {
      editorContext.setState(val[0]);
    });
  };

  // useEffect(() => {
  //   setButtonRender(() => {
  //     return <button onClick={onClick}>Select From Stream</button>;
  //   });
  //   console.log("called set button render");
  // }, []);

  return <button onClick={onClick}>Select From Stream</button>;
};

// stream select is a demo component
export const StreamSelect = ({ targetImage, setButtonRender, ...props }) => {
  let displayVal = null;
  if (targetImage) {
    displayVal = <img src={targetImage.src} />;
  } else {
    displayVal = <span style={{ padding: 20 }}>Image Placeholder</span>;
  }
  return (
    <Fragment>
      <StreamSelectButton
        sectionName="targetImage"
        streamName="test-stream"
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
