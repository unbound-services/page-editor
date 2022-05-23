import "./sass/app.scss";
import {
  HTTPStream,
  PageEditorApp,
  StreamGroup,
  HTTPStreamFields,
  FakeStream,
} from "./lib/index";

import { render } from "preact";

let editor = new PageEditorApp();

const onSave = (data) => {
  console.log("data in onSave", data);
};

console.log("uh");

// const TestComponent = ({text="test!"}) => {
//     return <StringInput sectionName="text" />
// }

// const testList = {
//     "test-component": {displayName: "Test Component" , comp: TestComponent}
// }

// NewEditor.addComponents(TestComponent, "test-component", "Test Component");

editor.initializeApp(document.body, onSave, undefined, undefined, null, {});

type TableModel = {
  id: string;
  img: {
    src: string;
    name: string;
  };
};

// define api outputz
interface TableStreamFormat {
  tables: TableModel[];
}

// define stream outputs
interface ImageStreamFormat {
  id: string;
  src: string;
  name: string;
}

// define processing functions/ streams
const catStream = new HTTPStream<HTTPStreamFields, ImageStreamFormat>(
  "http://localhost:8000/api/images",
  (data) => {
    const images = data.images as ImageStreamFormat[];

    return images;
  }
);

const tableStream = new HTTPStream<
  HTTPStreamFields,
  TableModel,
  TableStreamFormat
>("http://localhost:8000/api/tables", (data) => {
  const tables = data.tables;

  return data.tables;
});

const tableImageStream = new HTTPStream<
  HTTPStreamFields,
  ImageStreamFormat,
  TableStreamFormat
>("http://localhost:8000/api/tables", (data) => {
  const tables = data.tables;

  const images = tables.map((table) => {
    return { ...table.img, id: `table.${table.id}` };
  });

  return images;
});

// ======================================================
// create a stream group to agregate different streams
// ======================================================
const imageStreamGroup = new StreamGroup<any, ImageStreamFormat>();
editor.streamDriver.addStream("test-stream", imageStreamGroup);
editor.streamDriver.addStream(
  "fake-stream",
  new FakeStream(() => [{ src: "asdf" }])
);

// add a stream with missmatched types
imageStreamGroup.adaptStream("Table Stream", tableStream, (tables) => {
  const images = tables.map((table) => {
    return { ...table.img, id: `table.${table.id}` };
  });

  return images;
});

// add streams of agreeing types
imageStreamGroup.addStream("Table Image Stream", tableImageStream);

imageStreamGroup.addStream("Cat Stream", catStream);
