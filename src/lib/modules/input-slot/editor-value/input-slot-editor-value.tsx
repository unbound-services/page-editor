import * as React from "react";
import { Fragment } from "react"
import { useEditorContext } from "../input-slot-hooks";

export type TransformFunctionType<ValueType=any> = (value:ValueType)=>ValueType;
export const EditorValue = (props:React.PropsWithChildren<{sectionName?:string, transform?:TransformFunctionType}>) => {
    const { sectionName, ...otherProps } = props;
    const TagName = "div";
    const { editorState: state } = useEditorContext();
    let value = state[sectionName] ? state[sectionName] : "";
    if (props.transform) {
        value = props.transform(value);
    }
    return <Fragment>{value}</Fragment>;
}


export default EditorValue;
