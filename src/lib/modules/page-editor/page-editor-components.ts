import { JSX } from "preact/compat";
import Columns from "../components/columns/columns";
import Heading from "../components/heading/heading";
import Paragraph from "../components/paragraph/paragraph";
import Spacer from "../components/spacer/spacer";
import { StreamSelect } from "../stream/select/stream-select";
import { ContentEditableInputSlot } from "../input-slot/content-editable/input-slot-content-editable";
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

export type PageEditorComponentType = (props: any) => JSX.Element;

export type ComponentListType = {
  [componentKey: string]: {
    displayName: string;
    comp: PageEditorComponentType;
  };
};

const componentList: ComponentListType = {
  "column-with-text": { displayName: "Columns With Text", comp: Columns },
  heading: { displayName: "Heading", comp: Heading },
  paragraph: { displayName: "Paragraph", comp: Paragraph },
  spacer: { displayName: "Spacer", comp: Spacer },
};

export default componentList;
