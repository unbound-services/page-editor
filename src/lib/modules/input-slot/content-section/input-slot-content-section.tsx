import { InputSlot } from "../input-slot";
import * as React from "react"
import EditorContext, {
  incState,
} from "../../content-editor/content-editor-editor-context";
import "./input-slot-content-section.scss";
import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom";
import editorStyles from "./unb-editor.css?inline";

export interface ContentSectionProps {
  sectionName?: string;
  tagName?: string;
  isRoot?: boolean;
  previewing?: boolean;
  editing?: boolean;
  iframeRef?: React.MutableRefObject<HTMLIFrameElement>;
}

export type ContentSectionState = {
  component: any;
  buttons: {[key:string]:any}
};

export const ContentSection = (props: ContentSectionProps) => {
    const {
      sectionName = "children",
      tagName: TagName = "div",
      isRoot = false,
      iframeRef,
      ...otherProps
    } = props;

    const [buttonState, setButtonStateRaw] = useState({});
    const [component, setComponent] = useState(null);
    const editorContext = useContext(EditorContext);
    const iframeHead = React.useRef(null);
    const [iframeBody, setIframeBody] = useState(null);
    const [iframeHeadStateful, setIframeHead] = useState(null);
    const getButtonState = (key)=> {
      return buttonState[key];
    }

    const setButtonState = (key, value) => {
      setButtonStateRaw({...buttonState, [key]: value});
    }

    const sortComponentList = (componentsToSort) => {
      return Object.keys(componentsToSort).sort((a, b) =>
        componentsToSort[a].displayName > componentsToSort[b].displayName
          ? 1
          : -1
      );
    };

    const sortedComponentList = sortComponentList(editorContext.componentList);

    // grab the editor state from context
    const {
      editorState = { [sectionName]: [] },
      editing,
      previewing,
      renderFlags,
      editorOptions
    } = editorContext;

    let componentData = editorState[sectionName];
    let currentChildren = editorState[sectionName] ? editorState[sectionName] : [];
    let childs = null;
    const removeComponent = (key) => (e) => {
      let neweditorState = { ...editorState, [sectionName]: [...currentChildren] };
      e.preventDefault();
      e.stopPropagation();

      // probably should find a better way to do this

      neweditorState[sectionName].splice(key, 1);
      editorContext.setState(neweditorState,sectionName);
    };

    const moveUp = (key) => (e) => {
      let neweditorState = { ...editorState, [sectionName]: [...currentChildren] };
      e.preventDefault();
      e.stopPropagation();

      const comp = currentChildren[key];
      if (key == 0) return;
      neweditorState[sectionName][key] = neweditorState[sectionName][key - 1];
      neweditorState[sectionName][key - 1] = comp;

      // probably should find a better way to do this
      editorContext.setState(neweditorState,sectionName);
    };

    const moveDown = (key) => (e) => {
      let neweditorState = { ...editorState, [sectionName]: [...currentChildren] };
      e.preventDefault();
      e.stopPropagation();

      const comp = currentChildren[key];
      if (key == currentChildren.length - 1) return;
      neweditorState[sectionName][key] = neweditorState[sectionName][key + 1];
      neweditorState[sectionName][key + 1] = comp;

      // probably should find a better way to do this
      editorContext.setState(neweditorState,sectionName);
    };

    if (componentData) {
      const getComp = getComponentFromData(editorContext);
      childs = RenderComponents( {componentData:componentData, 
      renderFlags:renderFlags,
      editing:editing,
       context:editorContext, 
       moveUp:moveUp, 
       moveDown:moveDown, 
       currentChildren:currentChildren, 
       removeComponent:removeComponent, getComp:getComp,
      buttonRenderState:(key)=>[getButtonState(key), (val)=>setButtonState(key,val)],
      sectionName},
      );
    }

    const {componentList, viewportDimensions} = editorContext;

    // method for adding a new component to the content section state
    const addComponent = (e) => {
      let neweditorState = { ...editorState, [sectionName]: [...currentChildren] };
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      // probably should find a better way to do this
      let whichComponent =  component;
      if (!whichComponent)
        whichComponent = component
          ? component
          : sortedComponentList[0];
      neweditorState[sectionName].push({ comp: whichComponent, props: {} });
      editorContext.setState(neweditorState,sectionName);
    };

    // component for adding a new component
    let addButton = null;
    if (editorContext.editing && !renderFlags.noAdd) {
      addButton = (
        <div className="add-component">
          <button
            className="add-component__button"
            onClick={addComponent}
            data-testid="add-component-button">
            {" "}
            +
          </button>
          <select
            className="add-component__component-list"
            onChange={(e) => {
              const newComponent = e.currentTarget.value;
              console.log('e',e,e.currentTarget.value,e.target.value);
              setComponent(newComponent);

              // addComponent(null, newComponent);
            }}
            data-testid="add-component-listbox">
            {sortedComponentList.map((index) => {
              const value = componentList[index];
              const displayName = value.displayName ? value.displayName : value;
              return (
                <option key={index} value={index}>
                  {" "}
                  {displayName}{" "}
                </option>
              );
            })}
          </select>
        </div>
      );
    }


    useEffect(()=>{
      if(iframeHead && iframeHead.current){
        let node = iframeRef.current;


        // add the js files from the options
        let scripts: (()=>Promise<void>)[] = [];
        if(editorOptions?.pageOptions?.scripts && editorOptions.pageOptions.scripts?.length > 0){
          for( let script of editorOptions.pageOptions.scripts){
            const prom = ()=>new Promise<void>( (resolve)=>{
              const scriptTag = node.contentDocument.createElement('script');
              scriptTag.src = script;

              node.contentDocument.head.appendChild(scriptTag);
              scriptTag.onload=()=>resolve();
              scriptTag.onerror=()=>resolve();
            } ); // end of promise
            scripts.push(prom);
        }; // end of the map
      }
      new Promise(async (resolve)=>{
        for(let i=0;i<scripts.length;i++){
          await scripts[i]();
        }
        resolve(true);
      }).then(()=>{
        
        // add the raw js from the options0
        if(editorOptions?.pageOptions?.js && editorOptions.pageOptions.js?.length > 0){
          editorOptions.pageOptions.js.forEach((js)=>{
            const scriptTag = node.contentDocument.createElement('script');
            scriptTag.textContent = js;
            node.contentDocument.body.appendChild(scriptTag);
          });
        }

      }
    );
    }
  }
    ,[iframeHead.current])

    useEffect(()=>{
      if(iframeRef && iframeRef.current && viewportDimensions){
        const {zoom, width, height } = viewportDimensions;
        iframeRef.current.style.zoom = `${zoom/100.0}`;
        iframeRef.current.contentDocument.body.style.minWidth = `${width-20/zoom*100.0}px`;
        iframeRef.current.contentDocument.body.style.minHeight = `${height-20/zoom*100.0}px`;
      }
    },[iframeBody, viewportDimensions])

    let final= (<SectionControlWrapper editing={editing}>
      <TagName {...otherProps as any}>
        {childs}
        {addButton}
      </TagName>
      </SectionControlWrapper>
    );

    // render into a react portal if we're root
    let renderInIframe = editorOptions?.pageOptions?.renderInIframe;
    if(renderInIframe===undefined) renderInIframe = true;

    if (isRoot && renderInIframe) {

      let srcDoc="<!doctype HTML>"
      let src;
      if(editorOptions?.pageOptions?.href){
        src = editorOptions.pageOptions.href;
        srcDoc = undefined;
      }

      final = <iframe className="page-editor__viewport-iframe" 
      src={src} 
      key="iframe"
      srcDoc={srcDoc} 
      style={{width:viewportDimensions.width, 
        height:viewportDimensions.height, 
        border:"2px #dddddd solid",}}
      onLoad={e=>{
        const node = e.currentTarget as HTMLIFrameElement;
        
        if(!node.contentDocument) return;
        if(!node.contentDocument.head) return;
        if(iframeRef && iframeRef.current!=node) iframeRef.current = node;
        if(!node.contentDocument.head!=iframeHead.current){
        iframeHead.current = node.contentDocument.head;
        // bootstrap css
        const bootstrap = document.createElement('style');
        bootstrap.textContent = editorStyles;
        node.contentDocument.head.appendChild(bootstrap);
        // add the raw css
        if(editorOptions?.pageOptions?.css && editorOptions.pageOptions.css?.length > 0){
          editorOptions.pageOptions.css.forEach((css)=>{
            const styleTag = document.createElement('style');
            styleTag.textContent = css;
            node.contentDocument.head.appendChild(styleTag);
          });
        }

        // add the css files from the options
        if(editorOptions?.pageOptions?.stylesheets && editorOptions.pageOptions.stylesheets?.length > 0){
          editorOptions.pageOptions.stylesheets.forEach((stylesheets)=>{
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = stylesheets;
            node.contentDocument.head.appendChild(link);
          });
        }



      }

        // now we need to find the root element and render into it
        let root;
        if(editorOptions?.pageOptions?.documentRoot){
          if(typeof editorOptions.pageOptions.documentRoot == "function"){
            root = editorOptions.pageOptions.documentRoot(node);
          } else if(typeof editorOptions.pageOptions.documentRoot == "string"){ 
            root = node.contentDocument.querySelector(editorOptions.pageOptions.documentRoot);
          } else if(editorOptions.pageOptions.documentRoot instanceof HTMLElement){
            root = editorOptions.pageOptions.documentRoot;
          }
        } else {
          // default to the body
          root = node.contentDocument.body;
        }

        if(iframeBody!=root){

          if(editorOptions?.pageOptions?.clearContainer){
            root.innerHTML = "";
          }
          
          // iframeHead.current = node.contentDocument.head;
          setIframeBody(root);
        }
        // createPortal(final, node.contentDocument.getElementById('root'));
      }}>
        {/* {iframeHead.current } */}
        {iframeBody && createPortal(final, iframeBody)}
      </iframe>
    }

    return final;
  }

const RenderComponents = ({componentData, renderFlags,editing,context,moveUp,moveDown,currentChildren,removeComponent, getComp, buttonRenderState,sectionName})=>{
  
  return componentData.map((item, key) => {
    let optionButtons = null;
    // manage option buttons for deleting and moving components
    if (editing && context.componentList[item.comp]) {
      const componentDisplayName = context.componentList[item.comp]
        .displayName
        ? context.componentList[item.comp].displayName
        : item.comp;
      optionButtons = [];

      // ===========================
      // up and down buttons =======
      // ===========================
      if (!renderFlags.noRearrange) {
        if (key > 0)
          optionButtons.push(
            <button key={`${item.comp}-up-button`} onClick={moveUp(key)}>
              ⬆️
            </button>
          );
        if (key < currentChildren.length - 1)
          optionButtons.push(
            <button
              key={`${item.comp}-down-button`}
              onClick={moveDown(key)}>
              ⬇️
            </button>
          );
      }

      // =========================
      // delete button
      // ==========================
      if (!renderFlags.noAdd) {
        optionButtons.push(
          <button
            className={"content-section-controls__delete-button"}
            key={`${item.comp}-delete-button`}
            onClick={removeComponent(key)}>
            X
          </button>
        );
      }
    }


    // if you don't treat this like a function call it will 
    // think you're calling your hooks outside a function
    return getComp(item, key, optionButtons,buttonRenderState(key),sectionName);
    const Comp = getComp(item, key, optionButtons);
    return <Comp key={key+"-wrapper"} />;
  });

}

// get the component from the data that represents it
export const getComponentFromData =
  (currentContext) => (data, key, optionButtons,buttonRenderState,sectionName) =>{
    const compData = currentContext.componentList[data.comp];
    const [buttonRender, setButtonRender] = buttonRenderState;
    if (!compData) return null;
    const Comp = currentContext.componentList[data.comp].comp;
    let currentProps = data.props;

    return (
      <EditorContext.Provider value={incState(currentContext, key,sectionName)}>
        <ComponentSlotWrapper
          optionButtons={optionButtons}
          componentName={compData.displayName}
          editing={currentContext.editing}
          previewing={currentContext.previewing}
          buttonRender={buttonRender}
          sectionName={sectionName}>
          <Comp
            key={key+"-comp"}
            {...currentProps}
            editing={currentContext.editing}
            componentName={compData.displayName}
            previewing={currentContext.previewing}
            sectionName={sectionName}
            setButtonRender={setButtonRender}> 
            {data.props[sectionName]}
          </Comp>
        </ComponentSlotWrapper>
      </EditorContext.Provider>
    );
  };

const ComponentSlotWrapper = (props) => {
  // const [showingButtons, setShowingButtons] = useState(false);
  // onMouseOver={()=>setShowingButtons(true)}
  // onMouseOut={(e)=>{console.log('event', e.target); setShowingButtons(false)}}

  // dont do anything with this when they're just previewing
  const { editing, previewing, buttonRender,sectionName } = props;
  if (!editing) {
    return props.children;
  }


  // render the buttons
  let extra = null;

  if (buttonRender && typeof buttonRender === "function") {
    extra = buttonRender();
    if (extra)
      extra = <div className="content-section-controls__extra-buttons-wrapper"><div className="content-section-controls__extra-buttons">{extra}</div></div>;
  }

  const buttonSection = (
    <div className="content-section-controls__inner">
      <strong className="content-section-controls__component-type">
        {props.componentName}
      </strong>
      
        {props.optionButtons}
        {extra}
    </div>
  );

  return (
    <div className="content-section-controls__wrapper">
      {buttonSection}
      {props.children}
    </div>
  );
};


export const SectionControlWrapper = (props)=>{
  const {editing,children} = props;
  if (!editing) {
    return <>{children}</>;
  }
  return (
    <div className="content-section-controls__wrapper">
      {children}
    </div>
  )
}