import PageEditorApp from "./lib/modules/page-editor/page-editor-app";
import "./sass/app.scss";
import { StringInput } from "./lib/index";
import {
  HTTPStream,
  HTTPStreamFields,
} from "./lib/modules/stream/http/stream-http";

let NewEditor = new PageEditorApp();

const onSave = (data) => {
  console.log("data in onSave", data);
};

// const TestComponent = ({text="test!"}) => {
//     return <StringInput sectionName="text" />
// }

// const testList = {
//     "test-component": {displayName: "Test Component" , comp: TestComponent}
// }

// NewEditor.addComponents(TestComponent, "test-component", "Test Component");

NewEditor.initializeApp(document.body, onSave);

interface ImageStreamFormat {
  id: string;
  src: string;
  name: string;
}
const catStream = new HTTPStream<HTTPStreamFields, ImageStreamFormat>(
  "http://localhost:8000/api/images",
  (data) => {
    const images = data.images as ImageStreamFormat[];
    // const image = images[Math.floor(Math.random() * images.length)];
    return images;
  }
);

NewEditor.streamDriver.addStream("test-stream", catStream);
