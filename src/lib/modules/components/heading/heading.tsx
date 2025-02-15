import { Fragment } from "react"
import StringInput from "../../input-slot/string-input/input-slot-string-input";
import SelectInput from "../../input-slot/select-input/input-slot-select-input";
import { useEffect } from "react"
import { ContentEditableInputSlot } from "../../input-slot/content-editable/input-slot-content-editable";

const heading = (props) => {
  const {
    headingType = "h1",
    text = "",
    customClass = "",
    editing = true,
    setButtonRender,
  } = props;
  const headingOptions = ["h1", "h2", "h3", "h4", "h5"];
  const TagName = headingType;

  useEffect(() => {
    setButtonRender(() => (
      <Fragment>
        <SelectInput
          sectionName="headingType"
          options={headingOptions}
          current={headingType}
          label="Heading Type"
        />
        <StringInput sectionName="text" label="Heading Text" />
        <StringInput sectionName="customClass" label="Custom CSS Class" />
      </Fragment>
    ));
    console.log("called set button render");
  }, []);

  return (
    <header>
      <ContentEditableInputSlot
        sectionName="text"
        tagName={headingType}
        placeholder="Heading"
        className={customClass}></ContentEditableInputSlot>
    </header>
  );
};

export default heading;
