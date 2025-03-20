import * as React from "react";
import { Fragment } from "react"
import { useEditorContext } from "../input-slot-hooks";

export type TransformFunctionType<ValueType=any> = (value:ValueType)=>ValueType;
export const EditorValue = (props:React.PropsWithChildren<{sectionName?:string,defaultValue?:string, transform?:TransformFunctionType}>) => {
    const { sectionName,defaultValue, ...otherProps } = props;
    const TagName = "div";
    const { editorState: state } = useEditorContext(sectionName);
    let value = state ? state : defaultValue ? defaultValue : "";
    if (props.transform) {
        value = props.transform(value);
    }
    return <Fragment>{value}</Fragment>;
}


export default EditorValue;
