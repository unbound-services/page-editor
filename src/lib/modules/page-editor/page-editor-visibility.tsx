import React from "react";
import { useEditorContext } from "../input-slot/input-slot-hooks";

export const HideIfRendering = (props: React.PropsWithChildren<{editing?:boolean}>) => {
    const { children,editing:editingProp } = props;
    const { editorState: state, editing:contextEditing} = useEditorContext();
    const editing = editingProp? editingProp : contextEditing;
    return <HideIf hide={!editing}>{children}</HideIf>
}

export const HideIfEditing = (props: React.PropsWithChildren<{editing?:boolean}>) => {
    const { children,editing:editingProp } = props;
    const { editorState: state, editing:contextEditing} = useEditorContext();
    const editing = editingProp? editingProp : contextEditing;
    return <HideIf hide={editing}>{children}</HideIf>
}

export const HideIf = (props: React.PropsWithChildren<{hide?:boolean}>) => {
    const { children,hide = false } = props;
    if(hide) return null;
    return <>{children}</>;
}