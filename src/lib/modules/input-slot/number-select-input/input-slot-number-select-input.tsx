import React from "react";
import { useEditorContext } from "../input-slot-hooks";

export const NumberSelectInput = (props) => {
    const {
      sectionName,
      tagName = "div",
      label = null,
      min,
      max,
      step = 1,
      hidden = true,
      ...otherProps
    } = props;
    let {current=min} = props;
    const TagName = tagName;
    const { editorState: state, editing,setState } = useEditorContext();
    if(state[sectionName] !== undefined){
      current = state[sectionName];
    }
    const onChange = (e) => {
      let value = parseFloat(e.currentTarget.value);
      if (!value) {
        value = 0;
      }
      if(min !==undefined && value < min){
        value = min;
      }
      if(max !==undefined && value > max){
        value = max;
      }
      setState({ ...state, [sectionName]: (value) });
    };

    if (editing) {
      if (!label) {
        return (
          <TagName key="num-input-wrapper">
            <input
              key="num-input"
              value={current}
              type="number"
              onChange={onChange}
              min={min}
              max={max}
              step={step}
            />
          </TagName>
        );
      }

      return (
        <TagName key="num-input-wrapper" {...otherProps}>
          <label>
            <span>{label}</span>
            <input
              value={current}
              type="number"
              onChange={onChange}
              min={min}
              max={max}
              step={step}
            />
          </label>
        </TagName>
      );
    } else {
      if (hidden) {
        return null;
      }
      return <TagName {...otherProps}>{state[sectionName]}</TagName>;
    }
  }


export default NumberSelectInput;
