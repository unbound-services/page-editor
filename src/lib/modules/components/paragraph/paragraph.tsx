import * as React from "preact";
import RichTextInput from "../../input-slot/rich-text-input/input-slot-rich-text-input";
import StringInput from "../../input-slot/string-input/input-slot-string-input";

const paragraph = (props) => {
  const { text = "", customClass = "" } = props;

  return (
    <React.Fragment>
      <StringInput
        sectionName="customClass"
        value={customClass}
        label="Custom Class"
        hidden
      />
      <RichTextInput sectionName="text" inputClass={customClass} />
    </React.Fragment>
  );
};

export default paragraph;
