import React, { CSSProperties, FC, JSX, ReactNode } from "react"
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import EditorContext from "../../content-editor/content-editor-editor-context";
import { useEditorContext } from "../input-slot-hooks";
import "./input-slot-content-editable.scss";
import {renderToString} from "react-dom/server";



type tagTypeMap = {"div":HTMLDivElement, "span":HTMLSpanElement, "em":HTMLElement, "strong":HTMLElement,
  "li":HTMLLIElement,"a":HTMLAnchorElement, "p":HTMLParagraphElement, "h1":HTMLHeadingElement, 
  "h2":HTMLHeadingElement, "h3":HTMLHeadingElement, "h4":HTMLHeadingElement, "h5":HTMLHeadingElement,
  "h6":HTMLHeadingElement, "ul":HTMLUListElement, "ol":HTMLOListElement, "blockquote":HTMLQuoteElement,
  "pre":HTMLPreElement, "code":HTMLElement,
  "figcaption":HTMLElement, "table":HTMLTableElement,
  "td":HTMLTableCellElement,"tr":HTMLTableRowElement,
  "tbody":HTMLTableSectionElement, "rawText":HTMLDivElement};
type editableTagList = keyof tagTypeMap;


export const CE = new Proxy<{[Property in editableTagList ]: React.FC< {sectionName?:string,children?:ReactNode,number?:boolean } & Omit<Partial<tagTypeMap[Property]>, 'children'> >}>(
{} as any,
  {
    get: function (target, prop) {
      
      return (props) => {
        console.log('props',props);
        let tagName=prop as any;
        // make sure tagname is allowed
        if (!["div", "span", "em", "strong",
          "li","a", "p", "h1", 
          "h2", "h3", "h4", "h5",
          "h6", "ul", "ol", "blockquote",
          "pre", "code",
          "figcaption", "table","td","tr","tbody","rawText"
        
        ].includes(tagName)) {
          throw new Error("Invalid tagname for CE");
        }

        

        return <ContentEditableInputSlot tagName={tagName} {...props} />;
      };
    },
  }
);


export const ContentEditableInputSlot = ({
  placeholder = "",
  ref = null,
  className = "",
  sectionName:sectionNameProp="",
  tagName = "div",
  number=false,
  ...props
}) => {
  props = {...props};

    // default placeholder text
    let finalPlaceholder = placeholder;
    if(!placeholder){
      finalPlaceholder = `${tagName} placeholder`;
    }
    // default seciton names
    let sectionName = sectionNameProp;
    if(!sectionNameProp){
      sectionName = `${tagName}__index`;
    }
    
    
    const contentRef = useRef<HTMLDivElement>();
    const editorContext = useEditorContext(sectionName);

  let html = editorContext.editorState[sectionName]
    ? editorContext.editorState[sectionName]
    : null;
    
    const lastHtml = useRef<string>(html);

  const emitChange = (e ) => {
    e.preventDefault();
    e.stopPropagation();
    let curHtml = contentRef.current.innerHTML;
    if(number){
      const parsed =Number.parseInt(curHtml);
      curHtml = parsed ? parsed : 0 as any;
      contentRef.current.innerHTML = curHtml;
    }
    if (curHtml !== lastHtml.current) {
      lastHtml.current = curHtml;
      editorContext.setState(curHtml);
      
    }
  };




  // if we have children then we need to render them to html
  useEffect(() => {
    console.log('children changed!!', lastHtml.current, props.children);
    if(!lastHtml.current && props.children){
      const innerHtml = renderToString(props.children);
      lastHtml.current = innerHtml;
      editorContext.setState(innerHtml);
    } 

}, [props.children])


  if(lastHtml.current != html){
    lastHtml.current = html;
  }



  let finalClassName = className;
  const {editing = false} = editorContext;

  // if were editing it then add in a bunch of extra props
  const editingProps: any = {};
  if (editorContext.editing) {
    finalClassName += " unbContentEditable";
    
    editingProps.onBlur = emitChange;
    // editingProps.onInput = emitChange;
    editingProps["data-ph"] = finalPlaceholder;

    editingProps.ref = contentRef;
    editingProps.contentEditable = true;
    
  }

  
  if(!editing || lastHtml.current){
    editingProps.dangerouslySetInnerHTML = { __html: lastHtml.current };
    props.children = undefined;
  }
  
  let TagName = tagName;
  let styles:CSSProperties = {};
  if(tagName=="rawText"){
    if(!editing){
      return <>{lastHtml.current}</>
    } else {
      tagName = "div";
      styles = (editingProps.style ? {...editingProps.style} : {});
      styles.display = "inline-block";
      styles.padding=0;
      styles.margin=0;
      styles.width="auto";
      styles.transform="none";
      styles.border="none";
      styles.boxShadow="none";
      styles.outline="none";
      styles.overflow="visible";
      styles.lineHeight="inherit";
      styles.fontFamily="inherit";
      styles.fontSize="inherit";
      styles.fontWeight="inherit";
      styles.fontStyle="inherit";
      styles.color="inherit";
      styles.backgroundColor="inherit";
      styles.textAlign="inherit";
      styles.textDecoration="inherit";
      styles.textTransform="inherit";
      styles.minWidth= "50px";
      styles.minHeight="100%";
      editingProps.style = styles;
    }
  } 

  return (
    <TagName
      key={"ce"}
      className={finalClassName}
      
      {...props}
      {...editingProps}
       />
  );
};
