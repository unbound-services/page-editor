import { render } from "preact";
import { PageEditor } from "./page-editor";
import componentList from "./page-editor-components";
import { StreamBase } from "../stream/stream-base";
import { StreamDriver } from "../stream/stream-driver";

import { StreamDrawerDriver } from "../stream/drawer/stream-drawer-driver";

export default class PageEditorApp {
  protected _streamDriver: StreamDriver;

  public get streamDriver() {
    return this._streamDriver;
  }

  protected components;
  protected plugins;
  constructor() {
    this.components = componentList;
    this.plugins = {};
  }

  initializeApp(
    domObject,
    onSave: (data: object) => boolean | void,
    pageData = { children: [] },
    pageMeta = { name: "", slug: "", status: "draft" },
    newComponentList: any = false,
    plugins = {},
    renderFlags = { individualComponents: false }
  ) {
    if (newComponentList) {
      this.components = newComponentList;
    }
    if (Object.keys(plugins).length > 0) {
      this.plugins = plugins;
    }

    // if there isn't a streamdriver then create it
    this._streamDriver = this.createStreamDriver();

    const app = (
      <div class="page-editor" data-testid="page-editor">
        <PageEditor
          componentList={this.components}
          plugins={this.plugins}
          pageData={pageData}
          pageMeta={pageMeta}
          onSave={onSave}
          renderFlags={renderFlags}
          streams={this._streamDriver}
        />
      </div>
    );
    render(app, domObject);
  }

  createStreamDriver(): StreamDriver {
    return new StreamDrawerDriver();
  }

  addComponents(
    components,
    compSlug: boolean | any = false,
    compDisplayName = false
  ) {
    if (components[0] && "comp" in components) {
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
    }
  }

  getDefaultComponents() {
    return componentList;
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
