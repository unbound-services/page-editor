import * as React from "react"
import NumberSelectInput from "../../input-slot/number-select-input/input-slot-number-select-input";
import SlotSection from "../../input-slot/slot-section/input-slot-slot-section";
import { ContentSection } from "../../input-slot/content-section/input-slot-content-section";
import "./components-columns.scss";
import { CheckboxInput } from "../../input-slot/checkbox/input-slot-checkbox";
import { HideIfRendering } from "../../page-editor/page-editor-visibility";
import { useEditorContext } from "../../input-slot/input-slot-hooks";


const column = (props) => {
  const { text = "", count, } = props;

  return (
      <div className="section__column">
        <ContentSection  />
      </div>
  );
};

export type ColumnSectionProps = {
  count?: number;
  responsive?: boolean;
  setButtonRender?: (render:()=>React.ReactNode)=>void;
}
export const ColumnSection = (props:ColumnSectionProps) => {
  const { count = 3,responsive=false, setButtonRender } = props;
  let Column = column;
  let columns = [];
  let columnSectionClass;

  React.useEffect(() => {
    if(!setButtonRender) return;
    setButtonRender(() => (
      <React.Fragment>
        <NumberSelectInput
        hidden={true}
        label="Number of Columns: "
        sectionName="count"
        current={count}
        min={2}
        max={6}
      />
      
      <CheckboxInput
        label="Responsive Columns"
        sectionName="responsive"
      />
      </React.Fragment>
    ));
    // console.log("called set button render");
  }, [setButtonRender]);

  

  if (count) {
    const mode = responsive ? "--responsive" : "--fixed"
    columnSectionClass = `section__inner-div column-section ${mode} --cols-${count}`;
  } 

  for (var i = 0; i < count; i++) {
    let slotName = "column" + i;
    columns.push(
      <SlotSection
        sectionName={slotName}
        key={i}
      ><Column {...props} />
      </SlotSection>
    );
  }



  return (
    <React.Fragment>
        <HideIfRendering >
          <div className="section__columns__heading">

      </div>
      </HideIfRendering>
      <section className="section">
        <div className={columnSectionClass}>{columns}</div>
      </section>

    </React.Fragment>
  );
};

export default ColumnSection;
