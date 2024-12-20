import { InputSlot } from "../input-slot";
export interface StringInputProps {
    value?: any;
    sectionName: string;
    label?: string;
    tagName?: string;
    hidden?: boolean;
    inputClass?: string;
    children?: any;
}
export type StringInputState = {};
export declare class StringInput extends InputSlot<StringInputProps, StringInputState> {
    editorRender(): import("preact").JSX.Element;
}
export default StringInput;
