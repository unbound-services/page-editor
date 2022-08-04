// Must be the first import
if (process.env.NODE_ENV==='development') {
  // Must use require here as import statements are only allowed
  // to exist at top-level.
  require("preact/debug");
  console.log("preact/debug");
}

import { render } from "preact";
import { PageEditor } from "./page-editor";
import componentList, {
  PageEditorComponentType,
} from "./page-editor-components";
import { StreamBase } from "../stream/stream-base";
import { StreamDriver } from "../stream/stream-driver";

import { StreamDrawerDriver } from "../stream/drawer/stream-drawer-driver";
import { useState } from "preact/hooks";

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

export default class PageEditorApp {
  protected _streamDriver: StreamDrawerDriver;
  protected _setForceRefreshVal: Function;
  protected _externalSetState: Function;
  public get streamDriver() {
    return this._streamDriver;
  }
  protected _renderFunction = render;

  protected components;
  protected plugins;
  constructor() {
    this.components = componentList;
    this.plugins = {};
  }

  initializeApp(
    domObject,
    onSave: (data: object) => boolean | void = null,
    pageData = { children: [] },
    pageMeta = { name: "", slug: "", status: "draft" },
    newComponentList: any = false,
    plugins = {},
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
    if (Object.keys(plugins).length > 0) {
      this.plugins = plugins;
    }

    // if there isn't a streamdriver then create it
    this._streamDriver = this.createStreamDriver();

    const AppComp = (props) => {
      const [refreshCount, setRefreshCount] = useState(1);
      this._setForceRefreshVal = setRefreshCount; //for forcing refreshes

      return (
        <div class="page-editor" data-testid="page-editor">
          <PageEditor
            componentList={this.components}
            plugins={this.plugins}
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
    this._renderFunction(app, domObject);
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
// below is an example of the current functions and how to use them

// NewEditor.addComponent("component-slug", "Component Display Name", component)

// const testComponent = (props) => {
//   return (
//     <h1><StringInput sectionName="title" /></h1>
//   )
// }

// NewEditor.initializeApp(dom object, save function, the page data)

// const onSave = data => {
//   console.log("Data: ", data)
// }

// const testPage = {
//   children: [
//     {
//       comp: "test-component",
//       props: {
//         title: "test"
//       }
//     }
//   ]
// }
