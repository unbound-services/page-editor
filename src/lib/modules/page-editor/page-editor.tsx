import * as React from "react"
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
  onSave?: PageEditorOnsaveFunction;
  pageData?: any;
  pageMeta?: any;
  renderFlags?: PageEditorRenderFlags;
  exportState?: (setState: Function) => void;
  contextualPageData?: any;
  editorOptions?: PageEditorAppOptions;
};

export const PageEditor = (props: PageEditorPropType) => {

    
    const [state, setState] = useState({
      editorState: props.pageData ? props.pageData : window["pageData"] ? window["pageData"] : { children: [] },
      pageMetaState: props.pageMeta,
      preview: false,
      changes: false,
      advancedOpen: false,
      pageEditorDrawerOpen: false,
      viewportDimensions: { width: 1200, height: 800,zoom:100 },
    });

    
  const updateViewportDimension=  (key,val)=>setState({...state, viewportDimensions:{...state.viewportDimensions,[key]: parseInt(val)}});
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
  },[]);


    const demoState = state.editorState;
    const { preview,viewportDimensions } = state;
    const {
      streams,
      renderFlags: renderFlagProps = {},
      exportState,
      editorOptions
    } = props;

    let renderFlags = defaultRendererFlags;
    if (renderFlagProps) {
      console.log('inrenderflagprops',renderFlagProps,renderFlags)
      renderFlags = { ...renderFlags, ...renderFlagProps };
    }

    // export state will not always be passed in
    if (exportState) {
      exportState(setState.bind(this));
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

    const saveData = () => {
      if (!props.onSave) {
        console.log("No onSave function connected to app");
        return;
      }

      let componentsMarkup = [];
      if (renderFlags.individualComponents) {
        componentsMarkup = demoState.children.map((data) => {
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
      }


      const pageMarkup = renderToString(
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
          }}>
          <ContentSection isRoot />
        </EditorContext.Provider>
      );

      // submit the form
      const pageState = state.editorState;
      const metaState = state.pageMetaState;

      const data = { pageState, pageMarkup, metaState, componentsMarkup };

      // if there's an onsave then call it
      if (props.onSave) {
        (props.onSave as PageEditorOnsaveFunction)(data);
      }
    };

    // get the streamdriver component
    let StreamDriverComponent = null;
    if (streams) {
      StreamDriverComponent = streams.getComponent();
    }
    let optionBarClasses = "";
    if (renderFlags.inlineOptionBar) {
      optionBarClasses += "page-editor__menu--inline";
    }

    return (
      <div>
        <Drawer
          open={state.pageEditorDrawerOpen}
          onClose={togglePageDrawer}>
          <PageMeta
            pageMeta={state.pageMetaState}
            updatePageMetaState={updatePageMetaState}
          />
        </Drawer>
        <div className={"page-editor__menu " + optionBarClasses}>
          <button
            className="page-editor__button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setState({...state,  preview: !preview });
            }}>
            {!preview ? "Preview" : "Edit"}
          </button>
          <button
            className="page-editor__button"
            onClick={saveData}
            data-testid="save-page-button">
            Save {state.changes ? "*" : ""}{" "}
          </button>
          <button className="page-editor__button" onClick={()=>{iframeRef?.current?.contentWindow?.location.reload()}}>
            Refresh
          </button>
          <button className="page-editor__button" onClick={togglePageDrawer}>
            Options
          </button>
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
          }} key="root-provider">
          <ContentSection isRoot key="root-content-section" iframeRef={iframeRef} />
          <div><StreamDriverComponent /></div>
        </EditorContext.Provider>
      </div>
    );
  }

