import { InputSlot } from "../input-slot";

interface SelectInputProps {
  sectionName: string;
  options: string[];
  optionLabels?: string[];
  current?: string;
  label?: string;
  hidden?: boolean;
  tagName?: any;
  selectList?: boolean;
}
class SelectInput extends InputSlot<SelectInputProps> {
  editorRender() {
    const {
      sectionName,
      options,
      current,
      optionLabels = null,
      label = false,
      hidden = false,
      tagName = "div",
      selectList = false,
      ...otherProps
    } = this.props;
    const TagName = tagName;
    const { editorState: state, editing } = this.context;
    const onChange = (e) => {
      this.context.setState({ ...state, [sectionName]: e.currentTarget.value });
    };

    let selectOptions: any = "";
    if (selectList) {
      selectOptions = selectList;
    } else if (Array.isArray(options)) {
      selectOptions = [];
      options.forEach((value, index) => {
        const optionName = optionLabels ? optionLabels[index] : value;
        selectOptions.push(
          <option key={index} value={value} className="">
            {optionName}
          </option>
        );
      });
    } else if (options) {
      selectOptions = [];
      Object.entries(options).forEach(([key, value], index) => {
        let optionValue: any = value;
        let optionName = key;
        if (optionLabels) optionName = optionLabels[key];
        // let selectedVar ='';
        // if(optionValue == current){
        //     selectedVar = 'selected';
        // }
        selectOptions.push(
          <option key={index} value={optionValue} className="">
            {optionName}
          </option>
        );
      });
    }

    if (editing) {
      if (!label) {
        return (
          <TagName>
            <select onChange={onChange} value={current}>
              {selectOptions}
            </select>
          </TagName>
        );
      }

      return (
        <TagName>
          <label>
            <span>{label}</span>
            <select onChange={onChange} value={current}>
              {selectOptions}
            </select>
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

export default SelectInput;
