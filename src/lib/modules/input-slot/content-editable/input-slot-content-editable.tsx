import React, { CSSProperties, Dispatch, FC, JSX, PropsWithChildren, ReactNode, SetStateAction } from "react"
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { useEditorContext } from "../input-slot-hooks";
import "./input-slot-content-editable.scss";
import {renderToString} from "react-dom/server";
import { json } from "stream/consumers";



type tagTypeMap = {"div": JSX.IntrinsicElements["div"], "span":JSX.IntrinsicElements["span"], "em":JSX.IntrinsicElements["em"], "strong":JSX.IntrinsicElements["strong"],
  "li":JSX.IntrinsicElements["li"],"a":JSX.IntrinsicElements["a"], "p":JSX.IntrinsicElements["p"], "h1":JSX.IntrinsicElements["h1"],
  "h2":JSX.IntrinsicElements["h2"], "h3":JSX.IntrinsicElements["h3"], "h4":JSX.IntrinsicElements["h4"], "h5":JSX.IntrinsicElements["h5"],
  "h6":JSX.IntrinsicElements["h6"], "ul":JSX.IntrinsicElements["ul"], "ol":JSX.IntrinsicElements["ol"], "blockquote":JSX.IntrinsicElements["blockquote"],
  "pre":JSX.IntrinsicElements["pre"], "code":JSX.IntrinsicElements["code"],
  "figcaption":JSX.IntrinsicElements["figcaption"], "table":JSX.IntrinsicElements["table"],
  "td":JSX.IntrinsicElements["td"],"tr":JSX.IntrinsicElements["tr"],
  "tbody":JSX.IntrinsicElements["tbody"], "rawText":JSX.IntrinsicElements["div"],"del":JSX.IntrinsicElements["del"],"ins":JSX.IntrinsicElements["ins"],
"details":JSX.IntrinsicElements["details"],"summary":JSX.IntrinsicElements["summary"],"math":JSX.IntrinsicElements["span"],"text":JSX.IntrinsicElements["text"]};

  

export type InsertCallback = (e: any, contentToInsert: string) => void;

export type InsertButton = {
  buttonText: string; //Text to display on the button in the component's options
  makeModal: (insertCallback: InsertCallback) => ReactNode; //Injects the callback for inserting the text into the external-developer-defined modal
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export type CEBemContext = {bem?:boolean, bemPrefix?:string};

type CEType ={ [Property in editableTagList]: typeof ContentEditableInputSlot }
           & {
               context: React.Context<CEBemContext>,
               __compCache: { [key:string]: typeof ContentEditableInputSlot },
               BEM: React.Provider<CEBemContext>
             }

type editableTagList = keyof tagTypeMap;

export const createContentEditable = (
  {
    bem,
    bemPrefix,
    classFunction
  }:{
    bem?: boolean,
    bemPrefix?: string,
    bemName?: string,
    classFunction?: (tagName: string, props) => string
  }
) => {
  return new Proxy<CEType>(
    {__compCache: {}, context: React.createContext<CEBemContext>({ bem, bemPrefix }) } as any,
    {get: (target, prop) => {

      const tagName = prop as editableTagList;

      if(prop=="BEM") {
        if(target.BEM){
          return target.BEM;
        }

        target.BEM = target.context.Provider;
        return target.BEM;
      }

      if (
          !["div", "span", "em", "strong", "li", "a", "p", "h1",
            "h2", "h3", "h4", "h5", "h6", "ul", "ol", "blockquote",
            "pre", "code", "figcaption", "table", "td", "tr",
            "tbody", "rawText", "del", "ins"].includes(tagName)
         ) {
        throw new Error("Invalid tagname for CE");
      }


      if(!target.__compCache[tagName]) {
        const defaultBem = bem;
        const defaultBemPrefix = bemPrefix;

        target.__compCache[tagName] = (props) => {
          let {
            bem:bemProp, bemPrefix:bemPrefixProp, bemName,
            editing, sectionName, ...otherProps
          } = props;

          const bemContext = useContext(target.context);

          let finalBem = defaultBem;
          let finalBemPrefix = defaultBemPrefix;
          if(typeof(bemContext?.bem) == "boolean" && bemProp === undefined) {
            finalBem = bemContext.bem;
          }
          if(bemContext?.bemPrefix && bemPrefixProp == undefined) {
            finalBemPrefix = bemContext.bemPrefix;
          }

          return (
            <ContentEditableInputSlot
              tagName={tagName}
              bem={finalBem}
              editing={editing}
              bemPrefix={finalBemPrefix}
              sectionName={sectionName}
              bemName={bemName ? bemName : sectionName ? sectionName : undefined} 
              classFunction={classFunction}
              {...props}
            />
          );
        }
      }
      return target.__compCache[tagName] as React.FC;
    }}
  );
}

export const CE = createContentEditable({bem:true});

export const ContentEditableInputSlot = ({
  placeholder = "",
  ref = null,
  className = "",
  sectionName: sectionNameProp = undefined,
  tagName = "div",
  textOnly = false,
  bem = false,
  bemName = "",
  editing:editingProp = undefined,
  bemPrefix = "",
  classFunction = null,
  children = undefined,
  ...props
}) => {
  props = {...props};

  const [editingHTML, setEditingHTML] = useState<boolean>(false);

  if(!bemName) bemName = sectionNameProp ? sectionNameProp : tagName;

  // default placeholder text
  let finalPlaceholder = placeholder;
  if(!placeholder){
    finalPlaceholder = `${tagName} placeholder`;
  }

  // default seciton names
  let sectionName = sectionNameProp;
  if(!sectionNameProp){
    sectionName = `${tagName}`;
  }

  const contentRef = useRef<HTMLDivElement>(null);
  const editorContext = useEditorContext(sectionName);

  const editorState = editorContext?.editorState;
  let {editing =false} = editorContext;
  if(editingProp !== undefined){
    editing = editingProp;
  }

  console.log("myState", editorState);

  const insertIntoContentRef: InsertCallback = (e, contentToInsert: string) => {
    // console.log("IN range", range);
    range.deleteContents();
    const fragment = range.createContextualFragment(contentToInsert);
    range.insertNode(fragment);
    emitChange(e);
  };

  const [range, setRange] = useState<Range>();
  // console.log("range", range);

  const openInsertButton = (e: any, setModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    const el = contentRef.current;
    if (!el) return;
    const sel = el.ownerDocument.getSelection();
    if (!sel || sel.rangeCount === 0) return false;
    if (el.contains(sel.anchorNode) && el.contains(sel.focusNode)) {
      let range = sel.getRangeAt(0);
      setModalOpen(true);
      setRange(range);
    }

  }

  const insertButtons: Array<InsertButton> = props.insertButtons;
  useEffect(() => {
    if (insertButtons && props.setButtonRender) {
      const insButtons = insertButtons?.map((content) => (
        <button onClick={ (e) => openInsertButton(e, content.setModalOpen) }>
          { content.buttonText }
        </button>)
      );

      props.setButtonRender(() => <>
        {insButtons}
      </>);
    }
  }, [insertButtons]);

  let html = editorState
    ? editorState
    : null;
    
  const lastHtml = useRef<string>(html);

  const emitChange = (e ) => {
    let curHtml = contentRef.current.innerHTML;
    if(textOnly){
      curHtml = contentRef.current.innerText;
      contentRef.current.innerHTML = curHtml;
    } 
    
    if (curHtml !== lastHtml.current) {
      // lastHtml.current = curHtml;
      editorContext.setState(curHtml);
    }
  };




  // if we have children then we need to render them to html
  useEffect(() => {
    // console.log('children changed!!', lastHtml.current, props.children);
    if(!editorState && !lastHtml.current && props.children){
      const innerHtml = renderToString(props.children);
      lastHtml.current = innerHtml;
      editorContext.setState(innerHtml);
    } 
  }, []);



  let finalClassName = className;

  if(bem){
    if(bemPrefix) {
      finalClassName = `${bemPrefix}__${bemName} ${finalClassName}`;
    } else {
      finalClassName = `${bemName} ${finalClassName}`;
    }
  }

  if(classFunction && typeof classFunction == "function"){
    finalClassName = classFunction(tagName, props);
  }



  // if were editing it then add in a bunch of extra props
  const editingProps: any = {};
  if (editing) {
    finalClassName += " unbContentEditable";
    editingProps.onInput = emitChange;
    // editingProps.onInput = emitChange;
    editingProps["data-ph"] = finalPlaceholder;
    editingProps.ref = contentRef;
    editingProps.contentEditable = true;
    editingProps.suppressContentEditableWarning=true;

    if(editingHTML){
      editingProps.dangerouslySetInnerHTML = { __html: lastHtml.current };
    }
  }



  
  if(!editing || lastHtml.current){
    editingProps.dangerouslySetInnerHTML = { __html: lastHtml.current };
    props.children = undefined;
  }
  
  let TagName = tagName;
  let styles:CSSProperties = props.style? props.style : {};
  if(tagName=="rawText"){
    if(!editing){
      return <>{lastHtml.current}</>
    } else {
      TagName = "div";
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

  const changeHTMLMode = (mode:boolean) => {
    
    if(mode==editingHTML) return;
    // convert the content
    if(mode){
      lastHtml.current = lastHtml.current.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
      contentRef.current.innerHTML = lastHtml.current;
    } else {
      lastHtml.current = lastHtml.current.replace(/\&quot;/g, '"')
        .replace(/\&#039;/g, "'")
        .replace(/\&lt;/g, "<")
        .replace(/\&gt;/g, ">")
        .replace(/\&amp;/g, "&");
      contentRef.current.innerHTML = lastHtml.current;
    }
    setEditingHTML(mode);
  }

  // if(editing && allowHTMLEdit && editingHTML && allowHTML){

  // }

  return (
    <>
      <TagName
        className={finalClassName}
        suppressContentEditableWarning 
        {...editingProps}
        {...props}
      />
      {insertButtons?.map((ib) => ib.makeModal(insertIntoContentRef))}

      {/* <label style={{background:"#000000aa", color:"white"}} >Edit HTML:<input type="checkbox"  checked={editingHTML} onChange={e=>changeHTMLMode(!!e.currentTarget.checked)} /></label> */}
    </>
  );
};
