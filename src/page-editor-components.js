import React, { useContext } from 'react';
import EditorValue  from './modules/content-editor/input-slot/editor-value/content-editor-input-slot-editor-value.js';
import RichTextInput from './modules/content-editor/input-slot/rich-text-input/content-editor-input-slot-rich-text-input.js';
import FileInput from './modules/content-editor/input-slot/file-input/content-editor-input-slot-file-input.js'
import StringInput from './modules/content-editor/input-slot/string-input/content-editor-input-slot-string-input.js';
import SelectInput from './modules/content-editor/input-slot/select-input/content-editor-input-slot-select-input.js';
import NumberSelectInput from './modules/content-editor/input-slot/number-select-input/content-editor-input-slot-number-select-input.js';
import SlotSection from './modules/content-editor/input-slot/slot-section/content-editor-input-slot-slot-section.js';



// our sample component
// const someComponent = (props) => {
//     const { title = "", children } = props;
//     return <div style={{border: "2px #00dddd solid", padding:20}}><h1><StringInput sectionName="title" /></h1>
//         <ContentSection sectionName="content" style={{border: "1px #dddddd solid", padding:20}} />Title:{title}
//         </div>
// }
// 
// const demoComponent = (props) => {
//     const { title = "", children } = props;
//     return <div style={{border: "2px #00dddd solid", padding:20}}><h1><StringInput sectionName="title" /></h1>
//         <p style={{color:"#dddddd"}}><StringInput sectionName="par1" /></p>
//         <p style={{color:"#aaddff"}}><StringInput sectionName="par2" /></p>
//         <h2><EditorValue sectionName="par2" /></h2>
//         </div>
// }



const column = (props) => {
    const { text='', count } = props;

    return <React.Fragment>
        <div className='section__column'>
            <RichTextInput inputClass='section__common-text' sectionName="text" />
        </div>
    </React.Fragment>
}

const columnSection = (props) => {
    const { count=3 } = props;
    let Column = column;
    let columns = [];
    let columnSectionClass;

    if(count == 2){
        columnSectionClass = 'section__inner-div column-section--double';
    }else if(count == 3){
        columnSectionClass = 'section__inner-div column-section--triple';
    } else{
        columnSectionClass = 'section__inner-div column-section--single';
    }

    for(var i=0; i<count; i++){
        let slotName = 'column'+i;
        columns.push(<SlotSection sectionName={slotName} onRender={props => <Column {...props} />} />);
    }

    return <React.Fragment>
        <section className='section'>
            <div className={columnSectionClass}>
                {columns}
            </div>
        </section>
        <NumberSelectInput hidden={true} label='Number of Columns: ' sectionName='count' current={count} min={0} max={3} />
    </React.Fragment>
}



const componentList = {
  // "firstDemo": { displayName: "First Demo", comp: someComponent },
  // "secondDemo": { displayName: "SecondDemo", comp: demoComponent },
    "column-with-text":  { displayName: "Columns With Text", comp: columnSection},
}

export default componentList;