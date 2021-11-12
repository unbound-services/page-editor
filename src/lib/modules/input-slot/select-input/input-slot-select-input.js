import InputSlot from "../input-slot";
import React from 'react';

class SelectInput extends InputSlot {

    editorRender(){
        const {  sectionName, options, current, optionLabels=null, label, hidden=false, tagName='div', selectList = false, ...otherProps } = this.props;
        const TagName = tagName;
        const { editorState: state, editing} = this.context
        const onChange = (e) => {
            this.context.setState({...state, [sectionName]: e.currentTarget.value});
        }

				let selectOptions = '';
				if(selectList){
					selectOptions = selectList
				} else if(options) {


					selectOptions = options.map((value, index)=>{
            let optionValue = value;
            let optionName = value;
            if(optionLabels) optionName = optionLabels[index];
            let selectedVar ='';
            if(optionValue == current){
                selectedVar = 'selected';
            }
            return (
              <option key={index} value={optionValue} className="">
                {optionName}
              </option>
            )
          })
				}

        if(editing){
             if(!label){
            return <TagName>
              <select onChange={onChange} value={current}>
                {selectOptions}
              </select>
            </TagName>
        }

        return <TagName>
            <label>
                <span>{label}</span>
                <select onChange={onChange} value={current}>
                  {selectOptions}
                </select>
            </label>
            </TagName>
        }else{
            if(hidden){
                return null;
            }
            return <TagName  {...otherProps} >
                {state[sectionName]}

            </TagName>
        }

    }
}

export default SelectInput;
