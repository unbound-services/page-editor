// Must be the first import
// if (process.env.NODE_ENV==='development') {
//   // Must use require here as import statements are only allowed
//   // to exist at top-level.
//   require("preact/debug");
//   console.log("preact/debug");
// }


import { PageEditor } from "./page-editor";
import componentList, {
  PageEditorComponentType,
} from "./page-editor-components";
import { StreamBase } from "../stream/stream-base";
import { StreamDriver } from "../stream/stream-driver";
import {createRoot} from 'react-dom/client';

import { StreamDrawerDriver } from "../stream/drawer/stream-drawer-driver";
import { useState } from "react"
import { PageEditorPlugin } from "../plugin/plugin-manager";

export type PageEditorRenderFlags = {
  individualComponents?: boolean;
  noRearrange?: boolean;
  noAdd?: boolean;
  inlineOptionBar?: boolean;
};

export const defaultRendererFlags: Readonly<PageEditorRenderFlags> = {
  individualComponents: false,
  noRearrange: false,
  noAdd: false,
  inlineOptionBar: false,
};

export type PageEditorAppOptions = {
  plugins?: PageEditorPlugin[];
  components?: PageEditorComponentType[];
  pageOptions?: {
    pageHtml?: string,
    renderInIframe?:boolean,
    documentRoot?: string | HTMLElement | ((iframeDocument:HTMLIFrameElement) => HTMLElement),
    href?: string } & Partial<PageEditorAssetType>;
}

export type PageEditorAssetType = {
  js: string[];
  css: string[];
  stylesheets: string[];
  scripts: string[];
}




export default class PageEditorApp {
  protected _streamDriver: StreamDrawerDriver;
  protected _setForceRefreshVal: Function;
  protected _externalSetState: Function;
  public get streamDriver() {
    return this._streamDriver;
  }
  protected _renderFunction = null;
  protected currentRoot = null;

  protected components;
  protected plugins;

  protected _editorOptions: PageEditorAppOptions=null;


  constructor(options?:PageEditorAppOptions) {
    this._editorOptions = options;
    const {components:initialComponentList = componentList, 
      plugins = null} = options;
    this.components = initialComponentList;
    this.plugins = plugins ? [...plugins] : [] ;
  }

  initializeApp(
    domObject,
    onSave: (data: object) => boolean | void = null,
    pageData = { children: [] },
    pageMeta = { name: "", slug: "", status: "draft" },
    newComponentList: any = false,
    renderFlags: PageEditorRenderFlags = {
      individualComponents: false,
      noRearrange: false,
      noAdd: false,
    },
    contextualPageData = null
  ) {
    if (newComponentList) {
      this.components = newComponentList;
    }

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
            exportState={(setState) => {
              this._externalSetState = setState;
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
        console.log("rendering app")
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
}

export { PageEditorApp };

