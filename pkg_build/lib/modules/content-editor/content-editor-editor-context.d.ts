import { PageEditorRenderFlags } from "../page-editor/page-editor-app";
import { StreamContextType } from "../stream/stream-context";
export declare type EditorContextType = {
    setState: (newState: any) => void;
    editorState: any;
    componentList: any;
    plugins?: any;
    editing: boolean;
    previewing: boolean;
    streams?: StreamContextType;
    renderFlags?: PageEditorRenderFlags;
    contextualPageData?: any;
};
export declare const EditorContext: import("preact").Context<EditorContextType>;
export declare const stateDeeper: (name: any, state: any, setState: any) => (newStateObj: any) => void;
export declare const incState: (currentContext: any, index: any) => any;
export default EditorContext;
