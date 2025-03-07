
import * as React from "react"
import EditorContext, {
  incState,
} from "../../content-editor/content-editor-editor-context";
import "./input-slot-content-section.scss";
import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom";
import editorStyles from "@sass/unb-editor.css?inline";
import { Interface } from "readline";

export type ContentSectionProps = & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement> & {
  sectionName?: string;
  tagName?: string;
  isRoot?: boolean;
  previewing?: boolean;
  editing?: boolean;
  editorOnly?: boolean;
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
      editing:editingProp=undefined,
      editorOnly,
      ...otherProps
    } = props;

    const [buttonState, setButtonStateRaw] = useState({});
    const [component, setComponent] = useState(null);
    const editorContext = useContext(EditorContext);
    const iframeHead = React.useRef(null);
    const [iframeBody, setIframeBody] = useState(null);
    const [iframeHeadStateful, setIframeHead] = useState(null);
    const compRefs = React.useRef({});
    const [wrappers,setWrappers] = useState({});
    const handleRef = React.useRef(null);
    const setWrapper = (key)=>(node)=>{
      if(key==0) compRefs.current={};
      if(wrappers[key]==node) return;
      compRefs.current[key] = node;
     };

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
      
      previewing,
      renderFlags,
      editorOptions
    } = editorContext;
    let {

      editing  

    } = editorContext;
    if(editingProp!==undefined) editing = editingProp;

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
      const getComp = getComponentFromData(editorContext,setWrapper,editing);
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
    if (editing && !renderFlags.noAdd) {
      addButton = (
        <div className="unb-comp-section__add-component">
          <button
            className="unb-comp-section__add-component__button"
            onClick={addComponent}
            data-testid="unb-comp-section__add-component-button">
            {" "}
            +
          </button>
          <select
            className="add-component__component-list"
            onChange={(e) => {
              const newComponent = e.currentTarget.value;
              // console.log('e',e,e.currentTarget.value,e.target.value);
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


    },[iframeBody, viewportDimensions]);

    React.useEffect(()=>{
      
      if(!compRefs.current) return;

      const onResize = ()=>{
        if(!compRefs.current) return;
        const parentOff = {x:0,y:0};
        const firstNode= compRefs.current[0] as HTMLDivElement;
        
        // update all the sectionControlWrappers
        for(let key in compRefs.current){
          // update their size based on their next sybling
          const currentNode = compRefs.current[key] as HTMLDivElement;
          if(!currentNode) continue;
          let node = currentNode.nextSibling as HTMLDivElement;
          const totalDims = {x:1000000000,y:1000000000, bottom:-10000000, right:-10000000};
          while(node 
            && !(node?.classList.contains('content-section-controls__wrapper'))
            && !(node?.classList.contains('unb-comp-section__add-component'))){
            // console.log('node',node);
            const boundingBox = node.getBoundingClientRect();
            // console.log('boundingBox',boundingBox, node.clientLeft,node.clientTop);
            totalDims.x = Math.min(totalDims.x,boundingBox.left);
            totalDims.y = Math.min(totalDims.y,boundingBox.top);
            totalDims.bottom = Math.max(totalDims.bottom,boundingBox.top + boundingBox.height);
            totalDims.right = Math.max(totalDims.right,boundingBox.left + boundingBox.width);


            node = node.nextSibling as HTMLDivElement;
          }
          // console.log('totalDims',totalDims);


          
          currentNode.style.width = `${totalDims.right-totalDims.x}px`;
          currentNode.style.height = `${totalDims.bottom-totalDims.y}px`;
          currentNode.style.position="absolute";
          const parentRect = currentNode.parentElement.getBoundingClientRect();
          //adjust by parent node
          currentNode.style.left = `${totalDims.x - parentRect.x}px`;
          currentNode.style.top = `${totalDims.y - parentRect.y}px`;
        }
      }
      window.addEventListener('resize',onResize);
      onResize();
      return ()=>window.removeEventListener('resize',onResize);
    },[editorState,compRefs.current,viewportDimensions]);

    useEffect(()=>{
      if(handleRef.current==null) return;
      handleRef.current.addEventListener('mousedown',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        let start = {x:e.clientX, y:e.clientY};
        let viewportStart = {x:viewportDimensions.width, y:viewportDimensions.height};
        let startDim = {x:viewportDimensions.width, y:viewportDimensions.height};
        let mouseMove = (e)=>{
          e.preventDefault();
          e.stopPropagation();
          let diff = {x:e.clientX-start.x, y:e.clientY-start.y};
          let newDim = {x:startDim.x+diff.x, y:startDim.y+diff.y};
          start = {x:e.clientX, y:e.clientY};
          editorContext.updateViewportDimension('width',diff.x,true);
          editorContext.updateViewportDimension('height',diff.y,true);
        }
        let mouseIn = (e)=>{
          e.preventDefault();
          e.stopPropagation();
          // see if the mouse is down
          if(e.buttons==1){
            mouseMove(e);
          }else {
            mouseUp(e);
          }
        }
        let mouseUp = (e)=>{
          e.preventDefault();
          e.stopPropagation();
          let diff = {x:e.clientX-start.x, y:e.clientY-start.y};
          let newDim = {x:startDim.x+diff.x, y:startDim.y+diff.y};
          start = {x:e.clientX, y:e.clientY};
          editorContext.updateViewportDimension('width',diff.x,true);
          editorContext.updateViewportDimension('height',diff.y,true);-

          window.removeEventListener('mousemove',mouseMove);
          window.removeEventListener('mouseup',mouseUp);
          window.removeEventListener('mousein',mouseIn);
        }
        window.addEventListener('mousemove',mouseMove);
        window.addEventListener('mouseup',mouseUp);
        window.addEventListener('mousein',mouseIn);
      }
      );
    },[]);

    let final= (<SectionControlWrapper editing={editing} >
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
      } else if(editorOptions?.pageOptions?.pageHtml){
        srcDoc = editorOptions.pageOptions.pageHtml;
        src = undefined;
      }

      final = <div className="page-editor__viewport-holder"  style={{width:viewportDimensions.width *viewportDimensions.zoom/100.0, height:viewportDimensions.height*viewportDimensions.zoom/100.0}}><iframe className="page-editor__viewport-iframe" 
      src={src} 
      key="iframe"
      srcDoc={srcDoc} 

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
      </iframe><div ref={handleRef} className={`page-editor__viewport-handle`}></div>
      </div>
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
    return getComp({data:item, key, optionButtons,buttonRenderState:buttonRenderState(key),sectionName});
    const Comp = getComp(item, key, optionButtons);
    return <Comp key={key+"-wrapper"} />;
  });

}

// get the component from the data that represents it
export const getComponentFromData =
  (currentContext,setDomNode, editing=undefined) => ({data, key, optionButtons,buttonRenderState,sectionName}) =>{
    const compData = currentContext.componentList[data.comp];
    const [buttonRender, setButtonRender] = buttonRenderState;
    if (!compData) return null;
    const Comp = currentContext.componentList[data.comp].comp;
    let currentProps = data.props;
    if(editing === undefined) editing = currentContext.editing;

    return (<EditorContext.Provider value={{...currentContext, ...incState(currentContext, key,sectionName),editing}} key={key+"-slot-provider"}>
        <ComponentSlotWrapper
          key={key+"-slot-wrapper"}
          optionButtons={optionButtons}
          componentName={compData.displayName}
          editing={editing}
          previewing={currentContext.previewing}
          buttonRender={buttonRender}
          sectionName={sectionName}
          setWrapperDomNode={setDomNode(key)}>

        </ComponentSlotWrapper>
        <Comp
            key={key+"-comp"}
            {...currentProps}
            editing={editing}
            componentName={compData.displayName}
            previewing={currentContext.previewing}
            sectionName={sectionName}
            
            setButtonRender={setButtonRender}> 
            {data.props[sectionName]}
            
          </Comp>
      </EditorContext.Provider>
    );
  };

const ComponentSlotWrapper = (props) => {
  // const [showingButtons, setShowingButtons] = useState(false);
  // onMouseOver={()=>setShowingButtons(true)}
  // onMouseOut={(e)=>{console.log('event', e.target); setShowingButtons(false)}}

  // dont do anything with this when they're just previewing
  const { editing, previewing, buttonRender,sectionName,setWrapperDomNode } = props;
  if (!editing) {
    setWrapperDomNode(null);
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
    <div className="content-section-controls__wrapper" ref={setWrapperDomNode}>
      {buttonSection}
      {props.children}
    </div>
  );
};


export const SectionControlWrapper = (props)=>{
  const {editing,children,setWrapperDomNode,key} = props;
  if (!editing) {
    return <>{children}</>;
  }
  return (
    <div className="content-section-controls__wrapper --unb-content-section"  ref={setWrapperDomNode}>
      {children}
    </div>
  )
}