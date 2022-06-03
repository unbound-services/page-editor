import { JSX, Component } from "preact";
export declare class InputSlot<InputSlotPropType = any, InputSlotStateType = any> extends Component<InputSlotPropType, InputSlotStateType> {
    publicRender(): void;
    editorRender(): JSX.Element;
    onChange(obj: any): void;
    render(): JSX.Element;
}
export default InputSlot;
