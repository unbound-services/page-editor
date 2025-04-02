import * as React from "react"
// import RichTextInput from "../../input-slot/rich-text-input/input-slot-rich-text-input";

import { CE } from "../../input-slot/content-editable/input-slot-content-editable";

const Modal = ({modalOpen, setModalOpen, insertCallback}) => {
  const [linkText, setLinkText] = React.useState("");
  const [linkURL, setLinkURL] = React.useState("");

  console.log("I here. Open?", modalOpen);

  const insert = (e) => {
    insertCallback(e, `<a href="${linkURL}">${linkText}</a>`);
    setModalOpen(false);
  }

  return <>{modalOpen ? <div style={{ position: "absolute" }}>
    <label>
      Text:
      <input value={linkText} onChange={(e) => setLinkText(e.currentTarget.value)} />
    </label>
    <label>
      URL:
      <input value={linkURL} onChange={(e) => setLinkURL(e.currentTarget.value)} />
    </label>
    <button onClick={insert} >Insert</button>
  </div> : <></>}</>
}

export const Paragraph = (props) => {
  const { text = "", customClass = "", sectionName, setButtonRender } = props;
  const [modalOpen, setModalOpen] = React.useState(false);

  const insertButtons = React.useMemo(() => [
    {
      buttonText: "Insert Link",
      modal: Modal,
      modalOpen,
      setModalOpen,
    },
  ], [modalOpen, setModalOpen]);

  return (<CE.p insertButtons={insertButtons} {...props}></CE.p>);
};

