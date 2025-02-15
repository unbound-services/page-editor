import { JSX, Component } from "react"
import { EditorContext } from "../content-editor/content-editor-editor-context";

export class InputSlot<
  InputSlotPropType = any,
  InputSlotStateType = any
> extends Component<InputSlotPropType, InputSlotStateType> {

  // declare the context
  static contextType = EditorContext;
  declare context: React.ContextType<typeof EditorContext>;
  
  
  constructor(props) {
    super(props);
  }

  render(): JSX.Element {
    return null;
  }


}



export default InputSlot;
