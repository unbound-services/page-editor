import React from 'react';
import InputSlot from '../input-slot';



export default class EditorValue extends InputSlot {
    
    render(){
        const { sectionName, ...otherProps } = this.props;
        const TagName = "div";
        const { editorState: state } = this.context

        return  <React.Fragment>{ state[sectionName] ? state[sectionName] : "" }</React.Fragment>;
    }
}