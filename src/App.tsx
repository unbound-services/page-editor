import "./sass/app.scss";
import "./lib/modules/common/drawer/common-drawer.scss";
import {
  HTTPStream,
  PageEditorApp,
  StreamGroup,
  HTTPStreamFields,
  FakeStream,
  StringInput,
  StreamSelectButton,
  SelectInput,
} from "./lib/index";

import { render } from "preact";
import { useState } from "preact/hooks";

let editor = new PageEditorApp();

const onSave = (data) => {
  console.log("data in onSave", data);
};

const TestTableComponent = ({
  table = null,
  streamName = "table-stream",
}: {
  table: TableModel | null;
  streamName: string;
}) => {
  let imageTag: any = null;
  if (table?.img) {
    imageTag = <img src={table.img.src} />;
  }

  return (
    <div>
      {imageTag}

      <StreamSelectButton
        streamName={"table-stream"}
        sectionName="table"
        label="Select Table"
        selectMax={5}
      />
    </div>
  );
};

editor.initializeApp(
  document.body,
  onSave,
  undefined,
  undefined,
  null,
  {},
  { noAdd: false, noRearrange: false, inlineOptionBar: true }
);

editor.addComponents(TestTableComponent, "test-componenta", "Test Component");
editor.insertComponent("test-componenta");

// =================================
//            STREAMS
// =================================

type TableModel = {
  id: string;
  img: {
    src: string;
    name: string;
  };
  name: string;
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
  "/api/images",
  (data) => {
    const images = data.images as ImageStreamFormat[];

    return images;
  }
);

const tableStream = new HTTPStream<
  HTTPStreamFields,
  TableModel,
  TableStreamFormat
>("/api/tables", (data) => {
  const tables = data.tables;
  return data.tables;
});

const tableImageStream = new HTTPStream<
  HTTPStreamFields,
  ImageStreamFormat,
  TableStreamFormat
>("/api/tables", (data) => {
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

// ====================================================
//      when we add the table stream
//      we pass in a component to populate the drawer
// ====================================================

const TablePreviewComp = ({
  model,
  select,
}: {
  select: (streamItem) => void;
  model: TableModel;
}) => {
  return (
    <div>
      <img src={model.img.src}></img>
      <strong style={{ color: "white" }}>{model.name}</strong>
      <button onClick={() => select([model])}>OK</button>
    </div>
  );
};
editor.streamDriver.addStream("table-stream", tableStream, {
  individualPreviewComponent: TablePreviewComp,
  fields: { color: ["red", "green", "blue"] },
  // streamAdapter: ({ entries, select }) => {
  //   const [currentTable, setCurrentTable] = useState<TableModel | null>(null);
  //   const [filterVal, setFilterVal] = useState("");

  //   let currentTablePreview: any = null;
  //   if (currentTable) {
  //     currentTablePreview = (
  //       <TablePreviewComp select={select} model={currentTable} />
  //     );
  //   }
  //   return (
  //     <div>
  //       <h2 style={{ color: "white" }}>I'm for Picking a Table Stream</h2>
  //       {currentTablePreview}
  //       <input
  //         type="text"
  //         value={filterVal}
  //         onChange={(e) => setFilterVal(e.currentTarget.value)}
  //       />
  //       <ul>
  //         {entries
  //           .filter((table) => {
  //             console.log(table, filterVal);
  //             if (!filterVal) return true;
  //             if (!table.name) return false;
  //             return (
  //               table.name.toLowerCase().indexOf(filterVal.toLowerCase()) > -1
  //             );
  //           })
  //           .map((table) => (
  //             <li onClick={() => setCurrentTable(table)}>{table.name}</li>
  //           ))}
  //       </ul>
  //     </div>
  //   );
  // },
});

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
