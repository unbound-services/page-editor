
import * as React from "react"
import EditorContext from "../../content-editor/content-editor-editor-context";
import "./input-slot-content-section.scss";
import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom";
// import editorStyles from "unb-editor/unb-editor.css?inline";
import { Interface } from "readline";
import Drawer from "../../common/drawer/common-drawer";
import { cloneState, useEditorContext } from "../input-slot-hooks";

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
    const [componentDrawerOpen, setComponentDrawerOpen] = useState(false);
    const [buttonState, setButtonStateRaw] = useState({});
    const editorContext = useEditorContext(sectionName);
    const iframeHead = React.useRef(null);
    const [iframeBody, setIframeBody] = useState(null);
    const [iframeHeadStateful, setIframeHead] = useState(null);
    const [editorReady, setEditorReady] = useState(false);
    const compRefs = React.useRef({});
    const [wrappers,setWrappers] = useState({});
    const handleRef = React.useRef(null);
    const reorderRef = React.useRef(0);
    const [compSearch, setCompSearch] = useState('');
    const setWrapper = (key)=>(node)=>{
      if(key==0) compRefs.current={};
      if(compRefs.current[key]==node) return;
      // setWrappers((wrappers)=>({...wrappers, [key]:node}));
      compRefs.current[key] = node;
     };

    const getButtonState = (key)=> {
      return buttonState[key];
    }

    const setButtonState = (key, value) => {
      setButtonStateRaw({...buttonState, [key]: value});
    }

    const sortComponentList = (componentsToSort) => {
      if(!componentsToSort) return [];
      return Object.keys(componentsToSort).sort((a, b) =>
        componentsToSort[a]?.displayName > componentsToSort[b]?.displayName
          ? 1
          : -1
      );
    };

    const sortedComponentList = sortComponentList(editorContext?.componentList);

    // grab the editor state from context
    const {
      editorState = [] ,
      
      previewing,
      renderFlags,
      editorOptions
    } = editorContext;
    let {

      editing  

    } = editorContext;
    if(editingProp!==undefined) editing = editingProp;

    let componentData = editorState;
    let currentChildren = editorState ? editorState : [];
    let childs = null;
    const removeComponent = (key) => (e) => {
      let neweditorState = [...currentChildren] ;
      e.preventDefault();
      e.stopPropagation();

      // probably should find a better way to do this

      neweditorState.splice(key, 1);
      editorContext.setState(neweditorState);
    };

    const moveUp = (key) => (e) => {
      let neweditorState = [...currentChildren] ;
      e.preventDefault();
      e.stopPropagation();



      if (key == 0) return;
      reorderRef.current++;
      let holdValue = neweditorState[key];
      neweditorState[key] = neweditorState[key - 1];
      neweditorState[key - 1] = holdValue;
      
      // swap the button states
      

      // probably should find a better way to do this
      editorContext.setState(neweditorState);
      setButtonStateRaw({});
    };

    const moveDown = (key) => (e) => {
      let neweditorState = [...currentChildren] ;
      e.preventDefault();
      e.stopPropagation();

      

      if (key == currentChildren.length - 1) return;
      reorderRef.current++;
      let holdValue = neweditorState[key];
      neweditorState[key] = neweditorState[key + 1];
      neweditorState[key + 1] = holdValue;
      
      // probably should find a better way to do this
      editorContext.setState(neweditorState);
      setButtonStateRaw({});
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
       reorderRef,
       removeComponent:removeComponent, getComp:getComp,
      buttonRenderState:(key)=>[getButtonState(key), (val)=>setButtonState(key,val)]},
      );
    }

    const {componentList, viewportDimensions} = editorContext;

    // method for adding a new component to the content section state
    const addComponent = (component) => {
      let neweditorState = [...currentChildren] ;
      setComponentDrawerOpen(false);
      // probably should find a better way to do this
      let whichComponent =  component;
      if (!whichComponent)
        whichComponent = component
          ? component
          : sortedComponentList[0];
      neweditorState.push({ comp: whichComponent, props: {} });
      editorContext.setState(neweditorState);
    };

    // component for adding a new component
    let addButton = null;
    if (editing && !renderFlags?.noAdd) {
      addButton = (
        <><div className="unb-comp-section__add-component" onClick={()=>setComponentDrawerOpen(true)}></div>
        <Drawer open={componentDrawerOpen} className="component-drawer" onClose={()=>setComponentDrawerOpen(false)}><h1 className="component-drawer__h1">Insert Component</h1>
        <label>Search:<input placeholder="search" type="text" value={compSearch} onChange={(e)=>{
          setCompSearch(e.target.value);
        }} /></label>
        <div className="componeent-drawer__component-list">{sortedComponentList.map((index) => {
          const value = componentList[index];
          const displayName = value.displayName ? value.displayName : value;
          const displayDescription = value.description;
          if(compSearch && displayName.toLowerCase().indexOf(compSearch.toLowerCase())==-1) return null;
          return (
            <div key={index} onClick={()=>addComponent(index)}  className="component-drawer__component">
              {displayName}
              {displayDescription && <div className="component-drawer__description">{displayDescription}</div>}
            </div>
          );
        })}</div></Drawer></>
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
            const boundingBox = node?.getBoundingClientRect();
            // console.log('boundingBox',boundingBox, node.clientLeft,node.clientTop);
            if(boundingBox){
            totalDims.x = Math.min(totalDims.x,boundingBox.left);
            totalDims.y = Math.min(totalDims.y,boundingBox.top);
            totalDims.bottom = Math.max(totalDims.bottom,boundingBox.top + boundingBox.height);
            totalDims.right = Math.max(totalDims.right,boundingBox.left + boundingBox.width);
            }

            node = node?.nextSibling as HTMLDivElement;
          }
          // console.log('totalDims',totalDims);


          
          currentNode.style.width = `${totalDims.right-totalDims.x}px`;
          currentNode.style.height = `${totalDims.bottom-totalDims.y}px`;
          currentNode.style.position="absolute";
          const parentRect = currentNode?.parentElement?.getBoundingClientRect();
          //adjust by parent node
          if(parentRect){
          currentNode.style.left = `${totalDims.x - parentRect.x}px`;
          currentNode.style.top = `${totalDims.y - parentRect.y}px`;
          }
        }
      }
      window.addEventListener('resize',onResize);
      let timeout= setTimeout(onResize,10);
      return ()=>{
        
        window.removeEventListener('resize',onResize);
      }
    },[editorState,
      compRefs.current,
      viewportDimensions, 
      iframeBody, 
      iframeHead.current, 
      editing,
      editorReady, 
      iframeHeadStateful]);

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

      onLoad={async (e)=>{
        const node = e.currentTarget as HTMLIFrameElement;
        
        if(!node.contentDocument) return;
        if(!node.contentDocument.head) return;
        if(iframeRef && iframeRef.current!=node) iframeRef.current = node;
        if(!node.contentDocument.head!=iframeHead.current){
        iframeHead.current = node.contentDocument.head;
        // bootstrap css
        const bootstrap = document.createElement('style');
        // dynamically import the editor styles
        const editorStyles =  (await import("unb-editor/unb-editor.css?inline")).default;

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
          setEditorReady(true);
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

const RenderComponents = ({componentData, renderFlags,editing,context,moveUp,moveDown,currentChildren,removeComponent, getComp, buttonRenderState, reorderRef})=>{
  
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
      if (!renderFlags?.noRearrange) {
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
      if (!renderFlags?.noAdd) {
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
    return getComp({data:item, key,reorderRef, optionButtons,buttonRenderState:buttonRenderState(key)});
    const Comp = getComp(item, key, optionButtons);
    return <Comp key={key+"-wrapper"} />;
  });

}

// get the component from the data that represents it
export const getComponentFromData =
  (currentContext,setDomNode, editing=undefined) => ({data,reorderRef, key, optionButtons,buttonRenderState}) =>{
    const compData = currentContext.componentList[data.comp];
    const [buttonRender, setButtonRender] = buttonRenderState;
  
    if (!compData) return null;
    const Comp = currentContext.componentList[data.comp].comp;
    let currentProps = data.props;
    if(editing === undefined) editing = currentContext.editing;

    return (<EditorContext.Provider value={{...currentContext[key], ...incState(currentContext, key),editing}} key={reorderRef.current+'-'+key+"-slot-provider"}>
        <ComponentSlotWrapper
          key={reorderRef.current+'-'+key+"-slot-wrapper"}
          optionButtons={optionButtons}
          componentName={compData.displayName}
          editing={editing}
          previewing={currentContext.previewing}
          buttonRender={buttonRender}
          setWrapperDomNode={setDomNode(key)}>

        </ComponentSlotWrapper>
        <Comp
            key={reorderRef.current+'-'+key+"-comp"}
            {...currentProps}
            editing={editing}
            componentName={compData.displayName}
            previewing={currentContext.previewing}
            
            setButtonRender={setButtonRender}> 
            
          </Comp>
      </EditorContext.Provider>
    );
  };

const ComponentSlotWrapper = ({componentName,optionButtons,...props}) => {
  // const [showingButtons, setShowingButtons] = useState(false);
  // onMouseOver={()=>setShowingButtons(true)}
  // onMouseOut={(e)=>{console.log('event', e.target); setShowingButtons(false)}}

  // dont do anything with this when they're just previewing
  const { editing, previewing, buttonRender,setWrapperDomNode } = props;
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
        {componentName}
      </strong>
      
        {optionButtons}
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


// this function is specifically for isolating the state of components added to the input slot content section
const incState = (currentContext, index,sectionName?) => {

  const newVal = cloneState( currentContext );

  let setState;
  if(sectionName){
    setState = (stateUpdate) => {

    const newState = cloneState(currentContext.editorState);
    if (newState[sectionName]) {
      newState[sectionName] = cloneState(newState[sectionName]);
    }
    newState[sectionName][index].props = {
      ...newState[sectionName][index].props,
      ...stateUpdate,
    };
    currentContext.setState(newState);
  };

  newVal.editorState = currentContext.editorState[sectionName][index].props;
} else {
  setState = (stateUpdate) => {
    const newState = cloneState(currentContext.editorState);
    newState[index].props = {
      ...newState[index].props,
      ...stateUpdate,
    };
    currentContext.setState(newState);
  }

  newVal.editorState = currentContext.editorState[index].props;
}


  newVal.setState = setState;

  
  return newVal;
};
