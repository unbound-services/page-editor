import InputSlot from "../input-slot";

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
class StringInput extends InputSlot<StringInputProps, StringInputState> {
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
    const { editorState: state, editing } = this.context;
    const onChange = (e) => {
      this.context.setState({ ...state, [sectionName]: e.currentTarget.value });
    };

    if (editing) {
      if (!label) {
        return (
          <TagName {...inputClass} {...otherProps}>
            <input type="text" onChange={onChange} value={state[sectionName]} />
          </TagName>
        );
      }

      return (
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
        <TagName {...inputClass} {...otherProps}>
          {state[sectionName]}
          {children}
        </TagName>
      );
    }
  }
}

export default StringInput;
