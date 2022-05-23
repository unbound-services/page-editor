import { ProductPageHeroImage } from "../../components";
import Columns from "../components/columns/columns";
import Heading from "../components/heading/heading";
import Paragraph from "../components/paragraph/paragraph";
import Spacer from "../components/spacer/spacer";
import { StreamSelect } from "../stream/select/stream-select";

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

const componentList = {
  // "firstDemo": { displayName: "First Demo", comp: someComponent },
  // "secondDemo": { displayName: "SecondDemo", comp: demoComponent },
  "column-with-text": { displayName: "Columns With Text", comp: Columns },
  pageheader: { displayName: "Page Header", comp: ProductPageHeroImage },
  heading: { displayName: "Heading", comp: Heading },
  paragraph: { displayName: "Paragraph", comp: Paragraph },
  spacer: { displayName: "Spacer", comp: Spacer },
  streamSelect: { displayName: "Stream Select", comp: StreamSelect },
};

export default componentList;
