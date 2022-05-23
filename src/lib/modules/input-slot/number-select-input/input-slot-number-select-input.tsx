import { InputSlot } from "../input-slot";

class NumberSelectInput extends InputSlot {
  editorRender() {
    const {
      sectionName,
      tagName = "div",
      label = null,
      min = 0,
      max = 100,
      step = 1,
      hidden = true,
      current,
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
          <TagName>
            <input
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
        <TagName>
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
}

export default NumberSelectInput;
