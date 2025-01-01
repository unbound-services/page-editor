import { JSX } from "preact";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "preact/hooks";
import EditorContext from "../../content-editor/content-editor-editor-context";
import { useEditorContext } from "../input-slot-hooks";
import "./input-slot-content-editable.scss";

export const ContentEditableInputSlot = ({
  placeholder = "placeholder",
  ref = null,
  className = "",
  sectionName,
  tagName = "div",
  ...props
}) => {
  const editorContext = useEditorContext(sectionName);

  const html = editorContext.editorState[sectionName]
    ? editorContext.editorState[sectionName]
    : "";
  const contentRef = useRef<HTMLDivElement>();
  const lastHtml = useRef<string>(html);

  const emitChange = () => {
    const curHtml = contentRef.current?.innerHTML || "";
    if (curHtml !== lastHtml.current) {
      editorContext.setState(curHtml);
      lastHtml.current = html;
    }
  };

  const TagName = tagName as any;

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    if (contentRef.current.innerHTML === html) return;
    contentRef.current.innerHTML = html;
  }, [html]);

  let finalClassName = className;

  // if were editing it then add in a bunch of extra props
  const editingProps: any = {};
  if (!editorContext.previewing) {
    finalClassName += " unbContentEditable";
    editingProps.contentEditable = true;
    editingProps.onInput = emitChange;
    editingProps["data-ph"] = placeholder;
    editingProps.ref = contentRef;
  }

  return (
    <TagName
      key={"hey"}
      className={finalClassName}
      dangerouslySetInnerHTML={{ __html: html }}
      onClick={(e) => {e.focus()}}
      {...props}
      {...editingProps}></TagName>
  );
};
