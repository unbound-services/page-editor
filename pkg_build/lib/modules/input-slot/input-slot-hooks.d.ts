import { EditorContextType } from "../content-editor/content-editor-editor-context";
export type StreamInputState = {};
/**
 *
 * @param sectionName the name for the section of state that this component is in charge of
 * // if you pass in a section name, the setState you receive will only accept one value; otherwise it will be the state for the whole component
 * @returns
 */
export declare const useEditorContext: (sectionName?: string) => EditorContextType;
interface useEditorContextOutputProps {
    editorContext: EditorContextType;
    [x: string]: any;
}
/**
 * @description injectEditorContext creates a higher-order component - it is simply another way to inject the context
 * // this was originally a workaround, but someone may find it useful
 * @param Component the component that needs to be wrapped with an editor context consumer
 * @returns
 */
export declare const injectEditorContext: (Component: (props: useEditorContextOutputProps) => any) => (props: any) => import("preact").JSX.Element;
export {};
