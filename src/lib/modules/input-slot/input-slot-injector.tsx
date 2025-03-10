import React from 'react';
import { useEditorContext } from './input-slot-hooks';

/**
 * Higher order function for easily injection editor state into a component
 * @param Comp the component that you would like editor state injected into
 * @returns a component which will have the editor state injected from the context through the props
 */
export const injectEditorState = (Comp:any) => (props:any) => {
    const { editorState, editing, setState } = useEditorContext(props.sectionName);
    return <Comp {...props} {...editorState} editing={editing} setState={setState} />
}