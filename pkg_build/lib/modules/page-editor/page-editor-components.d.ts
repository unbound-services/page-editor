import { JSX } from "preact/compat";
export declare type PageEditorComponentType = (props: any) => JSX.Element;
export declare type ComponentListType = {
    [componentKey: string]: {
        displayName: string;
        comp: PageEditorComponentType;
    };
};
declare const componentList: ComponentListType;
export default componentList;
