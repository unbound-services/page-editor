import InputSlot from "../../input-slot/input-slot";
import { JSX } from "preact";
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
}) => JSX.Element;
export declare const StreamSelect: ({ targetImage, setButtonRender, ...props }: {
    [x: string]: any;
    targetImage: any;
    setButtonRender: any;
}) => JSX.Element;
export type StreamInputState = {};
export declare class StreamSelectOld extends InputSlot<StreamInputProps, StreamInputState> {
    editorRender(): JSX.Element;
}
