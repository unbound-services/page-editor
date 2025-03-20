import * as React from "react"
// import RichTextInput from "../../input-slot/rich-text-input/input-slot-rich-text-input";

import { CE } from "../../input-slot/content-editable/input-slot-content-editable";

export const Paragraph = (props) => {
  const { text = "", customClass = "", sectionName } = props;

  return (<CE.p {...props}></CE.p>);
};

