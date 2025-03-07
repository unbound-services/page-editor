// Must be the first import
// if (process.env.NODE_ENV==='development') {
//   // Must use require here as import statements are only allowed
//   // to exist at top-level.
//   require("preact/debug");
//   console.log("preact/debug");
// }
import * as React from "react";

import { PageEditor } from "./page-editor";
import {componentList,
  ComponentListType,
  PageEditorComponentType,
} from "./page-editor-components";

import {createRoot} from 'react-dom/client';

import { StreamDrawerDriver } from "../stream/drawer/stream-drawer-driver";
import { useState } from "react"
import { PageEditorPlugin } from "../plugin/plugin-manager";

export type PageEditorRenderFlags = {
  individualComponents?: boolean;
  noRearrange?: boolean;
  noAdd?: boolean;
  inlineOptionBar?: boolean;
  disableFullscreen?:boolean;
  disableRefresh?:boolean;
};

export const defaultRendererFlags: Readonly<PageEditorRenderFlags> = {
  individualComponents: false,
  noRearrange: false,
  noAdd: false,
  inlineOptionBar: true,
  disableFullscreen:false,
  disableRefresh:false
};

export type PageEditorAppOptions = {
  plugins?: PageEditorPlugin[];
  components?: ComponentListType;
  pageOptions?: {
    pageHtml?: string,
    renderInIframe?:boolean,
    clearContainer?:boolean,
    documentRoot?: string | HTMLElement | ((iframeDocument:HTMLIFrameElement) => HTMLElement),
    href?: string,
    js?: string[],
    css?: string[],
    stylesheets?: string[],
    scripts?: string[] };
  onSave?: (data: object) => boolean | void;
  pageData?: { children: any[] };
  pageMeta?: { name: "", slug: "", status: "draft" };
  renderFlags?: PageEditorRenderFlags;
  contextualPageData?:any;
}






export default class PageEditorApp {
  protected _streamDriver: StreamDrawerDriver;
  protected _setForceRefreshVal: Function;
  protected _externalSetState: Function;
  protected _externalGetState: Function;
  protected _externalGetMarkup: Function;
  public get streamDriver() {
    return this._streamDriver;
  }
  protected _renderFunction = null;
  protected currentRoot = null;

  protected components;
  protected plugins;

  protected _editorOptions: PageEditorAppOptions=null;


  constructor(options:PageEditorAppOptions={}) {
    this._editorOptions = options;
    const {components:initialComponentList = componentList, 
      plugins = null} = options;
    this.components = initialComponentList;
    this.plugins = plugins ? [...plugins] : [] ;
  }

  protected processOptions(options:PageEditorAppOptions) {
    if(options.components) {
      this.components = options.components;
    }
    if(options.plugins) {
      this.plugins = options.plugins;
    }
    if(this._editorOptions) {
      this._editorOptions = {...this._editorOptions, ...
        options};
    } else {
      this._editorOptions = options;
    }


  }

  

  start(
    domObject,
    options?:PageEditorAppOptions) {

      if(options){
        this.processOptions(options);
      }

    const { pageData={children:[]}, pageMeta, onSave, renderFlags, contextualPageData } = this._editorOptions;

    // if there isn't a streamdriver then create it
    this._streamDriver = this.createStreamDriver();

    const AppComp = (props) => {
      const [refreshCount, setRefreshCount] = useState(1);
      this._setForceRefreshVal = setRefreshCount; //for forcing refreshes


      return (
        <div className="page-editor" data-testid="page-editor">
          <PageEditor
            key="page-editor"
            componentList={this.components}
            plugins={this.plugins}
            editorOptions={this._editorOptions}
            pageData={pageData} //these will only matter during initialization
            pageMeta={pageMeta} //these will only matter during initialization
            onSave={onSave}
            renderFlags={renderFlags}
            streams={this._streamDriver}
            exportState={(getState, setState, getMarkup) => {
              this._externalSetState = setState;
              this._externalGetState = getState;
              this._externalGetMarkup = getMarkup;
            }}
            contextualPageData={contextualPageData}
          />
        </div>
      );
    };

    const app = <AppComp />;

    if(!this.currentRoot) {
      this.currentRoot = createRoot(domObject);
      this._renderFunction = (app)=>{

        this.currentRoot.render(app);
      }
    } 
    
    this._renderFunction(app);
    
    
    // this._renderFunction(app, domObject);
  }

  createStreamDriver(): StreamDrawerDriver {
    return new StreamDrawerDriver();
  }

  addComponents(
    components: PageEditorComponentType | PageEditorComponentType[],
    compSlug: string = null,
    compDisplayName: string = null
  ) {
    if (
      Array.isArray(components) &&
      "comp" in (components as PageEditorComponentType[])
    ) {
      this.components = components;
      return;
    }
    if (!components) {
      console.error(
        "trying to call the add components function without a properly formatted components list or component"
      );
      return;
    }

    if (compSlug) {
      this.components[compSlug] = {
        displayName: compDisplayName,
        comp: components,
      };
      //refresh the component list
      this.refreshComponentListInEditor();
    }
  }

  insertComponent(componentSlug: string, props = {}) {
    if (!this._externalSetState) return null;

    this._externalSetState((state, other) => {
      let neweditorState = {
        ...state,
        editorState: {
          ...state.editorState,
          children: [...state.editorState.children],
        },
      };
      neweditorState.editorState.children.push({
        comp: componentSlug,
        props: { ...props },
      });

      return neweditorState;
    });
  }

  getDefaultComponents() {
    return componentList;
  }

  refreshComponentListInEditor() {
    if (this._setForceRefreshVal) {
      this._setForceRefreshVal((val) => val + 1);
    }
  }

  //saving and loading
  getEditorState(){
    if(!this._externalGetState) return null;
    return this._externalGetState()?.editorState;
  }

  /**
   * 
   * @returns the markup for the page
   */
  getMarkup(){
    if(!this._externalGetMarkup) return null;
    return this._externalGetMarkup();
  }

  /**
 * 
 * @returns the markup for the page
 */
  getIndividualMarkup() : string{
    if(!this._externalGetMarkup) return null;
    return this._externalGetMarkup(true);
  }


}

export { PageEditorApp };

