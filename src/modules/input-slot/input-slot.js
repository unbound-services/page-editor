import React from 'react';
import EditorContext from "../content-editor/content-editor-editor-context";

class InputSlot extends React.Component {

    publicRender(){

    }

    editorRender(){

    }

    // onchange for the whole object
    onChange(obj) {
        this.context.onChange(obj);
    }

    render(){
        return this.editorRender();
    }
}



InputSlot.contextType = EditorContext

export default InputSlot;