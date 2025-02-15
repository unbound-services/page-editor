import { SlotSection } from "./lib";
import { CE } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";


export const DemoComponent = () => {

    return (<section className="features">
  <div className="container">
    <div className="row">
        <SlotSection sectionName="tab1"><DemoSectionTab /></SlotSection>
        <SlotSection sectionName="tab1"><DemoSectionTab /></SlotSection>
        <SlotSection sectionName="tab1"><DemoSectionTab /></SlotSection>
    </div>
  </div>
</section>);

}


export const DemoSectionTab = ()=>{
    return (<div className="col-lg-4 col-12">
    <div className="features-post">
      <div className="features-content">
        <div className="content-show">
          <h4><i className="fa fa-pencil"></i><CE.rawText sectionName="title">All Courses</CE.rawText></h4>
        </div>
        <div className="content-hide">
          <CE.p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</CE.p>
          <CE.p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</CE.p>
          <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
      </div>
      </div>
    </div>
  </div>);
}