import { InputSlot } from "../input-slot";
import * as React from "preact";
import "./input-slot-content-section.scss";
export interface ContentSectionProps {
    sectionName?: string;
    tagName?: string;
    isRoot?: boolean;
}
export type ContentSectionState = {
    component: any;
};
export declare class ContentSection extends InputSlot<ContentSectionProps, ContentSectionState> {
    constructor(props: any);
    editorRender(): React.JSX.Element;
}
export declare const getComponentFromData: (currentContext: any) => (data: any, key: any, optionButtons: any) => React.JSX.Element;
