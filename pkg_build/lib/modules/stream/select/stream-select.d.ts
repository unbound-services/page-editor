import InputSlot from "../../input-slot/input-slot";
export interface StreamInputProps {
    value: any;
    sectionName: string;
    label: string;
    tagName: string;
    hidden: boolean;
    inputClass: string;
    children: any;
}
export declare const StreamSelectButton: ({ streamName, sectionName, selectMax, label, }: {
    streamName: any;
    sectionName: any;
    selectMax?: number;
    label?: string;
}) => import("preact").JSX.Element;
export declare const StreamSelect: ({ targetImage, setButtonRender, ...props }: {
    [x: string]: any;
    targetImage: any;
    setButtonRender: any;
}) => import("preact").JSX.Element;
export declare type StreamInputState = {};
export declare class StreamSelectOld extends InputSlot<StreamInputProps, StreamInputState> {
    editorRender(): import("preact").JSX.Element;
}
