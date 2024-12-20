import * as React from "preact";
import { StreamDriver } from "../stream/stream-driver";
import { PageEditorRenderFlags } from "./page-editor-app";
export type PageEditorStateType = {
    editorState: any;
    pageMetaState: any;
    preview: any;
    changes: any;
    advancedOpen: boolean;
    pageEditorDrawerOpen: boolean;
};
export type PageEditorOnsaveFunction = (data: any) => void;
export type PageEditorPropType = {
    componentList?: any;
    streams?: StreamDriver;
    plugins?: any;
    onSave?: PageEditorOnsaveFunction;
    pageData?: any;
    pageMeta?: any;
    renderFlags?: PageEditorRenderFlags;
    exportState?: (setState: Function) => void;
    contextualPageData?: any;
};
export declare class PageEditor extends React.Component<PageEditorPropType, PageEditorStateType> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.JSX.Element;
}
