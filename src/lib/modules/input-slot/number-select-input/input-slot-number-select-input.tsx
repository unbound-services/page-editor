import { InputSlot } from "../input-slot";

class 
NumberSelectInput extends InputSlot {
  render() {
    const {
      sectionName,
      tagName = "div",
      label = null,
      min,
      max,
      step = 1,
      hidden = true,
      current,
      ...otherProps
    } = this.props;
    const TagName = tagName;
    const { editorState: state, editing } = this.context;
    const onChange = (e) => {
      let value = e.currentTarget.value;
      if (value === "") {
        value = 0;
      }
      if(min !==undefined && value < min){
        value = min;
      }
      if(max !==undefined && value > max){
        value = max;
      }
      this.context.setState({ ...state, [sectionName]: value });
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
}

export default NumberSelectInput;
