import PageEditorApp from "./lib/modules/page-editor/page-editor-app";
import "./sass/app.scss";
import { StringInput } from "./lib/index";
import {
  HTTPStream,
  HTTPStreamFields,
} from "./lib/modules/stream/http/stream-http";
import { StreamGroup } from "./lib/modules/stream/group/stream-group";

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
NewEditor.streamDriver.addStream("test-stream", imageStreamGroup);

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
