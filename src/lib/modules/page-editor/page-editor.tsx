import React from "react";
import { renderToString } from 'react-dom/server';

import Drawer from "../common/drawer/common-drawer";
import { PageMeta } from "../page-meta/page-meta";

import EditorContext, {
  stateDeeper,
} from "../content-editor/content-editor-editor-context";
import { ContentSection } from "../input-slot/content-section/input-slot-content-section";
import { StreamDriver } from "../stream/stream-driver";
import { defaultRendererFlags, PageEditorAppOptions, PageEditorRenderFlags } from "./page-editor-app";
import { useState } from "react";
import { render } from "react-dom";
import reloadIcon from "./reload-window.svg";
import  { ExpandIcon } from "./page-editor-expand-icon";
import {ReloadWindowIcon} from "./reload-window-icon";
// page editor prop types
export type PageEditorStateType = {
  editorState: any;
  pageMetaState: any;
  preview: any;
  changes: any;
  advancedOpen: boolean;
  pageEditorDrawerOpen: boolean;
};

export type PageEditorOnsaveFunction = (data: any) => void;

export type PageEditorPropType = {
  componentList?: any;
  streams?: StreamDriver;
  plugins?: any;
  editing?:boolean;
  onSave?: PageEditorOnsaveFunction;
  pageData?: any;
  pageMeta?: any;
  renderFlags?: PageEditorRenderFlags;
  exportState?: (getState:Function, setState: Function,getMarkup:Function) => void;
  contextualPageData?: any;
  editorOptions?: PageEditorAppOptions;
  children?: any;
};

export type ViewportDimensions = {
  width: number;
  height: number;
  zoom:number;
  
};

export const PageEditor = (props: PageEditorPropType) => {

    const [state, setState] = useState({
      editorState: props.pageData ? props.pageData : { children: [] },
      pageMetaState: props.pageMeta ? props.pageMeta : { name: "", slug: "", status: "draft" },
      preview: false,
      changes: false,
      advancedOpen: false,
      pageEditorDrawerOpen: false,

    });
    const [viewportDimensions, setViewportDimensions] = useState({ width: 1200, height: 800,zoom:100 });

    
    const divRef = React.useRef<HTMLDivElement>(null);
    const currentEditorSize = React.useRef({width:0,height:0,viewport:{width:viewportDimensions.width,height:viewportDimensions.height}});
    
    const enterFullscreen = () => {
      if (divRef.current?.requestFullscreen) {
        if(document.fullscreenElement){
          document.exitFullscreen();
        }else {
        divRef.current.requestFullscreen();
        }
      }
    };
  const updateViewportDimension=  (key,val,add=false)=>{
    // if(iframeRef.current){
    //   if(key=='width'|| key=='height'){
    //     iframeRef.current.style.width = `${val}px`;
    //     iframeRef.current.style.height = `${val}px`;
    //   }
    // }
    currentEditorSize.current.viewport[key]=parseInt(val);
    setViewportDimensions(state=>{
      if(add){
        return {...state,[key]: state[key]+parseInt(val)}
      }else{
        return {...state,[key]: parseInt(val)}
      }
    });
  }

  const iframeRef = React.useRef(null);
  React.useEffect(() => {
    // attach that to the window
    window.addEventListener("beforeunload", (e) => {
      if (state.changes) {
        var confirmationMessage =
          "It looks like you have been editing something. " +
          "If you leave before saving, your changes will be lost.";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE

        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
      }
    });

    if(iframeRef.current){
      const iframeEl = iframeRef.current;
      const boundingRec = iframeEl.getBoundingClientRect();
      currentEditorSize.current.viewport.width=boundingRec.width;
      currentEditorSize.current.viewport.height=boundingRec.height;
      
    }

    window.addEventListener("resize", () => {
      // update the viewport
      if(!divRef.current || true) return;

      const boundRect = divRef.current.getBoundingClientRect();
      const width = boundRect.width;
      let height = boundRect.height;
      const deltaX = width - currentEditorSize.current.width;
      const deltaY = height - currentEditorSize.current.height;
      currentEditorSize.current.width = width;
      currentEditorSize.current.height = height;

      updateViewportDimension('width',currentEditorSize.current.viewport.width+deltaX);
      updateViewportDimension('height',currentEditorSize.current.viewport.height+deltaY);

    }
    );
  },[]);


    const demoState = state.editorState;
    const { preview } = state;
    const {
      streams,
      renderFlags: renderFlagProps = {},
      exportState,
      editorOptions,
      editing = !preview
    } = props;

    let renderFlags = defaultRendererFlags;
    if (renderFlagProps) {

      renderFlags = { ...renderFlags, ...renderFlagProps };
    }



    const baseSetState = (obj) => {
      setState({ ...state, ...obj, changes: true });
    };

    const togglePageDrawer = () => {
      setState({ ...state, pageEditorDrawerOpen: !state.pageEditorDrawerOpen });
    };

    const updatePageMetaState = (key, value) => {
      setState({...state,
        pageMetaState: {
          ...state.pageMetaState,
          [key]: value,
        },
      });
    };
    
    let getWrappedRoot = (props={}, isRender=true)=>{
       
    if(editorOptions?.pageOptions?.wrapperComponent){
      if(isRender && !editorOptions?.pageOptions?.includeWrapperInRender) return <ContentSection isRoot {...props
      } />;
      const WrapperComponent = editorOptions.pageOptions.wrapperComponent;
      return <ContentSection WrapperComponent={WrapperComponent} isRoot {...props} />
    }
    return <ContentSection isRoot {...props} />
  }

    const renderIndividualComponentsMarkup = ()=> demoState.children.map((data) => {
        const compData = props.componentList[data.comp];
        if (!compData) return "";
        const Comp = props.componentList[data.comp].comp;
        let currentProps = data.props;

        return {
          comp: data.comp,
          markup: renderToString(
            <Comp
              {...currentProps}
              editing={false}
              componentName={compData.displayName}
              previewing={true}
              setButtonRender={(val) => {}}>
              {data.children}
            </Comp>
          ).replaceAll(/[class|style]\=\"\""/, ""),
        };
      });
    

      const renderMarkup = (renderSeparately=false) => {
        if(renderSeparately){
          return renderIndividualComponentsMarkup();
        }
        return renderToString(
        <EditorContext.Provider
          value={{
            setState: stateDeeper("editorState", state, baseSetState),
            editorState: demoState,
            componentList: props.componentList,
            editorOptions: {...editorOptions, pageOptions:{...editorOptions.pageOptions, renderInIframe:false}},
            plugins: props.plugins,
            editing: false,
            previewing: true,
            renderFlags,
            streams,
            viewportDimensions: viewportDimensions,
            updateViewportDimension
          }}>
          {getWrappedRoot()}
        </EditorContext.Provider>
      );
    }

    // export state will not always be passed in
    if (exportState) {
      exportState(()=>state, setState, renderMarkup);
    }

    const saveData = () => {
      if (!props.onSave) {
        console.log("No onSave function connected to app");
        return;
      }

      let componentsMarkup = [];
      if (renderFlags.individualComponents) {
        componentsMarkup = renderMarkup(true);
      }


      const pageMarkup = renderMarkup();

      // submit the form
      const pageState = state.editorState;
      const metaState = state.pageMetaState;

      const data = { pageState, pageMarkup, metaState, componentsMarkup };

      // if there's an onsave then call it
      if (props.onSave) {
        (props.onSave as PageEditorOnsaveFunction)(data);
      }
    };
    let saveButton = null;
    if(props.onSave){
      saveButton = <a
            className="page-editor__button"
            onClick={saveData}
            data-testid="save-page-button">
            Save {state.changes ? "*" : ""}{" "}
          </a>
    }

    // get the streamdriver component
    let StreamDriverComponent = null;
    if (streams) {
      StreamDriverComponent = streams.getComponent();
    }
    let optionBarClasses = "";
    if (renderFlags.inlineOptionBar) {
      optionBarClasses += "page-editor__menu--inline";
    }

    const setDivRef = (divEl)=>{

      if(divEl && divRef.current != divEl){
        const boundingRec = divEl.getBoundingClientRect();
        currentEditorSize.current.width=boundingRec.width;
        currentEditorSize.current.height=boundingRec.height;
        
      }
      divRef.current = divEl;
    }

    return (
      <div ref={setDivRef} className="page-editor__inner">
        <Drawer
          open={state.pageEditorDrawerOpen}
          onClose={togglePageDrawer}>
          <PageMeta
            pageMeta={state.pageMetaState}
            updatePageMetaState={updatePageMetaState}
          />
        </Drawer>
        <div className={"page-editor__menu " + optionBarClasses}>
          <a
            className="page-editor__button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setState({...state,  preview: !preview });
            }}>
            {!preview ? "Preview" : "Edit"}
          </a>
          {saveButton}
          <a className="page-editor__button" title="Refresh Page" onClick={()=>{iframeRef?.current?.contentWindow?.location.reload()}}>
          <ReloadWindowIcon />
          </a>
          <a className="page-editor__button" title="Full Screen"  onClick={enterFullscreen}>
          <ExpandIcon />
          </a>
          <a className="page-editor__button" onClick={togglePageDrawer}>
            Options
          </a>
          <div className="page-editor__dimensions">
            <input type='number' step={100} onChange={e=>updateViewportDimension('width',parseInt(e.target.value))} value={viewportDimensions.width} /><strong>px</strong>
            X
            <input type='number' step={100} onChange={e=>updateViewportDimension('height',parseInt(e.target.value))} value={viewportDimensions.height} /><strong>px</strong>
            <input type='number' step={20} min={20} max={200} onChange={e=>updateViewportDimension('zoom',parseInt(e.target.value))} value={viewportDimensions.zoom} /><strong>%</strong>
          </div>
        </div>
        
        <EditorContext.Provider
          value={{
            setState: stateDeeper("editorState", state, baseSetState),
            editorState: demoState,
            componentList: props.componentList,
            plugins: props.plugins,
            editing: !preview,
            previewing: preview,
            renderFlags,
            streams: streams,
            contextualPageData: props.contextualPageData,
            editorOptions: editorOptions,
            viewportDimensions: viewportDimensions,
            updateViewportDimension
          }} key="root-provider">
            {getWrappedRoot({key:"root-content-section", iframeRef},false)}
            
          <div><StreamDriverComponent /></div>
        </EditorContext.Provider>
      </div>
    );
  }

