import "./sass/app.scss";
import "./lib/modules/common/drawer/common-drawer.scss";
import { RawHTMLComponent, UNBEditor } from "./lib/index";

import React from "react"
import { createContentEditable } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";
import {Repeater} from "./lib/modules/components/repeater/components-repeater";
const CE = createContentEditable({bem:true, bemPrefix:"ce"});


const editor = new UNBEditor({pageOptions:{renderInIframe:true, wrapperComponent: ({children})=><div><header><CE.h1 sectionName={"pageHeaderTitle"}  /></header>{children}</div>}});


const UL = (props)=><div><ul><Repeater addLabel="Item"><CE.li onKeyDown={console.log} /></Repeater></ul></div> 
editor.addComponents(UL, "ul", "UL")
editor.addComponents(RawHTMLComponent, "rawhtml","RawHTML");
editor.start(document.getElementById("root"));
