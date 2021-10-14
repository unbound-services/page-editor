import React, {useContext} from 'react';
import EditorContext, { stateDeeper } from '../../content-editor-editor-context';



const SlotSection = (props) =>{
    const { onRender, sectionName} = props;
    const currentContext = useContext(EditorContext);
    const { previewing, editing } = currentContext;
    const newContext = {...currentContext};
    newContext.editorState = { };
    if(currentContext.editorState[sectionName]){
        newContext.editorState = currentContext.editorState[sectionName];
    }
    newContext.setState = stateDeeper(sectionName, currentContext.editorState, currentContext.setState)
    return <EditorContext.Provider value={newContext}>
       {onRender({...newContext.editorState, previewing, editing})}
    </EditorContext.Provider>
}

export default SlotSection