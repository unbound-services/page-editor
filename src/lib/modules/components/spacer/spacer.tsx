import * as React from "preact";
import NumberSelectInput from "../../input-slot/number-select-input/input-slot-number-select-input";

const spacer = (props) => {
  const { space } = props;

  return (
    <React.Fragment>
      <NumberSelectInput
        sectionName="space"
        current={space}
        max={1000}
        label="Height (in px)"
      />
      <div style={`height: ${space}px`}></div>
    </React.Fragment>
  );
};

export default spacer;
