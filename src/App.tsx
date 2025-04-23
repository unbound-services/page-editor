import "./sass/app.scss";
import "./lib/modules/common/drawer/common-drawer.scss";
import { RawHTMLComponent, UNBEditor, useModal } from "./lib/index";

import React from "react"
import { createContentEditable, InsertButton, InsertCallback } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";
import {Repeater} from "./lib/modules/components/repeater/components-repeater";

const editor = new UNBEditor({pageOptions:{renderInIframe:true}, onSave:(d)=>console.log("state", d)});

export const BulletedListWithInsert= (props: any) => {
  const { text = "", customClass = "", sectionName, setButtonRender } = props;
  const {modalOpen, setModalOpen, ModalOuterComponent} = useModal();
  
  const insertButtons: Array<InsertButton> = React.useMemo(() => [
    {
      buttonText: "Insert Link",
      makeModal: (insertCallback: InsertCallback) => (
        <ModalOuterComponent
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        >
          HI
        </ModalOuterComponent>
      ),
      setModalOpen,
    },
  ], [modalOpen, setModalOpen]);

  return <ul><Repeater addLabel="Add Item"><CE.li onKeyDown={console.log} insertButtons={insertButtons} /></Repeater></ul>
};

const CE = createContentEditable({bem:true, bemPrefix:"ce"});
const UL = BulletedListWithInsert 

editor.addComponents(UL, "ul", "UL")
editor.addComponents(RawHTMLComponent, "rawhtml","RawHTML");
editor.start(document.getElementById("root"));
