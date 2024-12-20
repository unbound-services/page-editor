import { JSX } from "preact/compat";
export type PageEditorComponentType = (props: any) => JSX.Element;
export type ComponentListType = {
    [componentKey: string]: {
        displayName: string;
        comp: PageEditorComponentType;
    };
};
declare const componentList: ComponentListType;
export default componentList;
