import "./sass/app.scss";
import "./lib/modules/common/drawer/common-drawer.scss";
import {
  HTTPStream,
  UNBEditor,
  StreamGroup,
  HTTPStreamFields,
  FakeStream,
  StringInput,
  StreamSelectButton,
  SelectInput,
  ContentSection,
} from "./lib/index";

import { render } from "react-dom"
import { useState } from "react"
import { CE as INPUT } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";
import { MyDumbComponent } from "./TestComponent";
import { DemoComponent } from "./DemoComponent";

let editor = new UNBEditor({ pageOptions:{
  href: "template.html",
  documentRoot: "main",
  clearContainer: true,
  scripts:[    "vendor/jquery/jquery.min.js",
    "vendor/bootstrap/js/bootstrap.min.js",
    "assets/js/isotope.min.js",
    "assets/js/owl-carousel.js",
    "assets/js/lightbox.js",
    "assets/js/tabs.js",
    "assets/js/video.js",
    "assets/js/slick-slider.js",
    "assets/js/custom.js"],
  js: [`
        $('.nav li:first').addClass('active');

        var showSection = function showSection(section, isAnimate) {
            var
                direction = section.replace(/#/, ''),
                reqSection = $('.section').filter('[data-section="' + direction + '"]'),
                reqSectionPos = reqSection.offset().top - 0;

            if (isAnimate) {
                $('body, html').animate({
                    scrollTop: reqSectionPos
                },
                    800);
            } else {
                $('body, html').scrollTop(reqSectionPos);
            }

        };

        var checkSection = function checkSection() {
            $('.section').each(function () {
                var
                    $this = $(this),
                    topEdge = $this.offset().top - 80,
                    bottomEdge = topEdge + $this.height(),
                    wScroll = $(window).scrollTop();
                if (topEdge < wScroll && bottomEdge > wScroll) {
                    var
                        currentId = $this.data('section'),
                        reqLink = $('a').filter('[href*=\\#' + currentId + ']');
                    reqLink.closest('li').addClass('active').
                        siblings().removeClass('active');
                }
            });
        };

        $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
            if ($(e.target).hasClass('external')) {
                return;
            }
            e.preventDefault();
            $('#menu').removeClass('active');
            showSection($(this).attr('href'), true);
        });

        $(window).scroll(function () {
            checkSection();
        });`],
}});

const onSave = (data) => {
  console.log("data in onSave", data);
};






/** page editor components can be passed as props */
const MyComponent = ({title="Title"}) => (<MyDumbComponent title={<INPUT.span sectionName="title" />} />);




const MyCEComponent = ({title="Title"}) => {
  return <div><INPUT.h1 sectionName="title">{title}</INPUT.h1>
  <INPUT.div>
    <p>hey there</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <MyDumbComponent title={title} />
  </INPUT.div>
  </div>
}

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


// create the component
const ExampleComponent = () => (<div>
  <h1>Hello World!</h1>
  <button>CTA!</button>
  </div>)



editor.start(
  document.getElementById("root"),
  onSave,
  undefined,
  undefined,
  null,
  { noAdd: false, noRearrange: false, inlineOptionBar: true }
);
editor.addComponents(MyComponent, "mycomp", "MyComponent");
editor.addComponents(DemoComponent, "demo", "DemoComponent");
// editor.addComponents(TestTableComponent, "test-componenta", "Test Component");
// editor.insertComponent("test-componenta");

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
