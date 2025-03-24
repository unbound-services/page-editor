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
  StreamContextType,
  useEditorState,
  Tabs,
} from "./lib/index";

import React,{ useEffect, useState } from "react"
import { createContentEditable } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";
import { MyDumbComponent } from "./TestComponent";
import { DemoComponent } from "./DemoComponent";
import {  MDBlockQuote, MDH1, MDH2, MDH3, MDH4, MDH5, MDH6,
  MDItalic, MDParagraph, MDBold,
  MDCodeBlock, MDHorizontalRule, MDImage, MDLink, 
  MDInlineCode,MDOrderedList,MDStrikethrough,MDUnorderedList
  // MDList, MDListItem, MDTable, MDTableRow, MDTableCell, MDTableHeaderCell, MDTableHeaderRow, MDUnorderedList
 } from "./lib/modules/md/md";
import {Paragraph} from "./lib/modules/components/paragraph/paragraph";
import {Repeater} from "./lib/modules/components/repeater/components-repeater";
import {HideIfEditing, HideIfRendering} from "./lib/modules/page-editor/page-editor-visibility";

const editor = new UNBEditor({pageOptions:{renderInIframe:false}});



const CE = createContentEditable({bem:true, bemPrefix:"ce"});
const UL = (props)=><div><ul><Repeater addLabel="Item"><CE.li onKeyDown={console.log} /></Repeater></ul></div> 
editor.addComponents(UL, "ul", "UL")
editor.start(document.getElementById("root"));
