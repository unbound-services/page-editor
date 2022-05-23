import { EditorContextType } from "../content-editor/content-editor-editor-context";
export declare type StreamInputState = {};
interface useEditorContextOutputProps {
    editorContext: EditorContextType;
    [x: string]: any;
}
export declare const useEditorContext: (Component: (props: useEditorContextOutputProps) => any) => (props: any) => import("preact").JSX.Element;
export {};
