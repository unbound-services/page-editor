import React from "react";
import ReactDOM from "react-dom";
import { useEditorContext } from "../../input-slot/input-slot-hooks";

interface Props {
  x: number;
  y: number;
  visible: boolean;
  children: React.ReactNode;
  portal?: boolean;
}

export const ContextMenuPortal: React.FC<Props> = ({ x, y, visible, children, portal }) => {
  const editorContext = useEditorContext();
  
  if (!visible) return null;

  if (!portal) {
    return <div
      className="context-menu"
      style={{
        position: "absolute",
        top: y,
        left: x,
        background: "#fff",
        border: "1px solid #ccc",
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  }

  const editorElem = editorContext?.editorOptions?.pageOptions?.renderInIframe ? document.getElementsByClassName("page-editor")[0] : document.body;
  console.log(';EFOIJ', editorElem)
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        background: "#fff",
        border: "1px solid #ccc",
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    editorElem
  );
};
