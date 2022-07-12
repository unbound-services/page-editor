import { InputSlot } from "../input-slot";
interface SelectInputProps {
    sectionName: string;
    options: string[] | {
        [key: string]: string[];
    };
    optionLabels?: string[];
    current?: string;
    label?: string;
    hidden?: boolean;
    tagName?: any;
    selectList?: boolean;
}
declare class SelectInput extends InputSlot<SelectInputProps> {
    editorRender(): import("preact").JSX.Element;
}
export default SelectInput;
