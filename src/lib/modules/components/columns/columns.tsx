import * as React from "preact";
import NumberSelectInput from "../../input-slot/number-select-input/input-slot-number-select-input";
import SlotSection from "../../input-slot/slot-section/input-slot-slot-section";
import { ContentSection } from "../../input-slot/content-section/input-slot-content-section";
const column = (props) => {
  const { text = "", count } = props;

  return (
    <React.Fragment>
      <div className="section__column">
        <ContentSection sectionName="column" />
      </div>
    </React.Fragment>
  );
};

const columnSection = (props) => {
  const { count = 3 } = props;
  let Column = column;
  let columns = [];
  let columnSectionClass;

  if (count == 2) {
    columnSectionClass = "section__inner-div column-section--double";
  } else if (count == 3) {
    columnSectionClass = "section__inner-div column-section--triple";
  } else {
    columnSectionClass = "section__inner-div column-section--single";
  }

  for (var i = 0; i < count; i++) {
    let slotName = "column" + i;
    columns.push(
      <SlotSection
        sectionName={slotName}
        onRender={(props) => <Column {...props} />}
      />
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
