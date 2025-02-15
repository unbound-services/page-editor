import * as React from "react"
import NumberSelectInput from "../../input-slot/number-select-input/input-slot-number-select-input";
import SlotSection from "../../input-slot/slot-section/input-slot-slot-section";
import { ContentSection } from "../../input-slot/content-section/input-slot-content-section";
import "./components-columns.scss";


const column = (props) => {
  const { text = "", count, setButtonRender} = props;

  return (
      <div className="section__column">
        <ContentSection  />
      </div>
  );
};

const columnSection = (props) => {
  const { count = 3 } = props;
  let Column = column;
  let columns = [];
  let columnSectionClass;

  if (count == 2) {
    columnSectionClass = "section__inner-div column-section --double";
  } else if (count == 3) {
    columnSectionClass = "section__inner-div column-section --triple";
  } else {
    columnSectionClass = "section__inner-div column-section --single";
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
      <section className="section">
        <div className={columnSectionClass}>{columns}</div>
      </section>
      <NumberSelectInput
        hidden={true}
        label="Number of Columns: "
        sectionName="count"
        current={count}
        min={0}
        max={3}
      />
    </React.Fragment>
  );
};

export default columnSection;
