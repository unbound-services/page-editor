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
  useEditorContext,
  EditorValue,
} from "./lib/index";

import React,{ useEffect, useState } from "react"
import { CE, CE as INPUT } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";
import { MyDumbComponent } from "./TestComponent";
import { DemoComponent } from "./DemoComponent";
import {  MDBlockQuote, MDH1, MDH2, MDH3, MDH4, MDH5, MDH6,
  MDItalic, MDParagraph, MDBold,
  MDCodeBlock, MDHorizontalRule, MDImage, MDLink, 
  MDInlineCode,MDOrderedList,MDStrikethrough,MDUnorderedList
  // MDList, MDListItem, MDTable, MDTableRow, MDTableCell, MDTableHeaderCell, MDTableHeaderRow, MDUnorderedList
 } from "./lib/modules/md/md";
import Paragraph from "./lib/modules/components/paragraph/paragraph";
import {Repeater} from "./lib/modules/components/repeater/components-repeater";
import {HideIfEditing, HideIfRendering} from "./lib/modules/page-editor/page-editor-visibility";
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
// let editor = new UNBEditor();
const onSave = (data) => {
  console.log("data in onSave", data);
};


const MigrationComponent = (props:React.PropsWithChildren<{slotName:string}>) => {

  const editorState = useEditorContext();
  const {slotName} = props;
  useEffect(() => {
  //     if(!editorState.editorState?.content){
  //         return;
  //     }

  //     const content = editorState.editorState.content;
  //     editorState.setState({
  //         ...editorState.editorState,
  //     content:undefined,
  // [slotName]: content})
  }, []);

  return (<><Paragraph {...props} /></>)
}



/** page editor components can be passed as props */
const MyComponent = ({title="Title"}) => (
  <MyDumbComponent title={<INPUT.span sectionName="title" />} />
);




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
  <INPUT.h1 sectionName="title">Hello World!</INPUT.h1>
  <EditorValue sectionName="description" transform={(val:string)=>val ? val.substring(0,20)+"..." : ""} />
  

  <button>Read More</button>
  </div>)

const DifferentComponent = ({title="title"}) => (<div style={{fontSize:"0.8em",padding:20,background:"white",boxShadow:"black 4px 4px 4px",display:"inline-block",margin:5}}><INPUT.strong sectionName="title">Hello World!</INPUT.strong >
  
  <CE.p sectionName="description" placeholder="description"></CE.p>
  <button>Read More about <EditorValue sectionName="title" /></button>
  {title}
  </div>)

  export const MenuComponent = ()=>{
    return <div style={{background:"#dddddd", margin:5, display:"block", width:"100px"}}><CE.strong sectionName="title">Hello World!</CE.strong>
    <EditorValue sectionName="description" transform={(val)=>val ? val.substring(0,10)+"..." : null} />
    <ContentSection style={{background:"white", transform:"scale(0.25)"}} sectionName="stuff" editing={false} />
    </div>
  }

  export const ArticleComponent = ()=>{
    return <div style={{background:"#dddddd", margin:5, display:"block",width:"500px"}}>
      <CE.h1 sectionName="title">Article</CE.h1>
      <CE.h2 sectionName="subtitle">Subtitle</CE.h2>
      <CE.p sectionName="description">Description</CE.p>
      <HideIfRendering>
      <ContentSection sectionName="stuff" />
      </HideIfRendering>
    </div>
  }

const TestRepeater = (props) => {
  return  <><div style={{background:"#440077",padding:15, display:"inline-block", width:"20%"}}><Repeater {...props} sectionName="header">
      <MenuComponent />
  </Repeater>
  </div>

  <div style={{display:"inline-block", width:"75%"}}>
    <Repeater {...props} sectionName="header" hideCounter>
      <ArticleComponent />
    </Repeater>
  </div>
  </>
}
editor.addComponents(TestRepeater, "repeater", "Repeater");
// editor.addComponents(MigrationComponent, "migration", "Migration");
// editor.addComponents( MDH1, "mdh1", "Header 1");
// editor.addComponents( MDH2, "mdh2", "Header 2");
// editor.addComponents( MDH3, "mdh3", "Header 3");
// editor.addComponents( MDH4, "mdh4", "Header 4");
// editor.addComponents( MDH5, "mdh5", "Header 5");
// editor.addComponents( MDH6, "mdh6", "Header 6");
// editor.addComponents( MDBlockQuote, "mdblockquote", "Block Quote");
// editor.addComponents( MDParagraph, "mdparagraph", "Paragraph");
// editor.addComponents( MDBold, "mdbold", "Bold Text");
// editor.addComponents( MDItalic, "mditalic", "Italic Text");
// editor.addComponents( MDCodeBlock, "mdcodeblock", "Code Block");
// editor.addComponents( MDHorizontalRule, "mdhorizontalrule", "Horizontal Rule");
// editor.addComponents( MDImage, "mdimage", "Image");
// editor.addComponents( MDLink, "mdlink", "Link");
// editor.addComponents( MDInlineCode, "mdinlinecode", "Inline Code");
// editor.addComponents( MDOrderedList, "mdorderedlist", "Ordered List");
// editor.addComponents( MDStrikethrough, "mdstrikethrough", "Strikethrough");
// editor.addComponents( MDUnorderedList, "mdunorderedlist", "Unordered List");



// const TestRepeater = (props) => {
//   return  <div>
//     <div style={{background:"#dddddd",padding:40}}>
//       <div style={{overflow:"hidden",display:"inline-block",width:"45%"}}>
//         <Repeater {...props}>
//           <ExampleComponent ></ExampleComponent>
//         </Repeater>
//       </div>
//       <div style={{overflow:"hidden",display:"inline-block",width:"45%"}}>
//         <Repeater hideCounter {...props}>
//           <DifferentComponent ></DifferentComponent>
//         </Repeater>
//       </div>
//     </div>
//   </div>
// }

editor.start(
  document.getElementById("root"),
  onSave,
  undefined,
  undefined,
  null,
  { noAdd: false, noRearrange: false, inlineOptionBar: true }
);
editor.addComponents(MyComponent, "mycomp", "Demo Component");
// editor.addComponents(DemoComponent, "demo", "DemoComponent");
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
