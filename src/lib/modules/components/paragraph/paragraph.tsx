import * as React from "react"
// import RichTextInput from "../../input-slot/rich-text-input/input-slot-rich-text-input";
import StringInput from "../../input-slot/string-input/input-slot-string-input";
import { CE } from "../../input-slot/content-editable/input-slot-content-editable";

const paragraph = (props) => {
  const { text = "", customClass = "" } = props;

  return (<CE.p sectionName="text" className={customClass}></CE.p>);
};

export default paragraph;
