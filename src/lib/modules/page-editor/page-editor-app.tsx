import { render } from "react-dom";
import React from "react";
import { PageEditor } from "./page-editor";
import componentList from "./page-editor-components";

export default class PageEditorApp {
  protected components;
  protected plugins;
  constructor() {
    this.components = componentList;
    this.plugins = {};
  }

  initializeApp(
    domObject,
    onSave = false,
    pageData = { children: [] },
    newComponentList = false,
    plugins = {}
  ) {
    if (newComponentList) {
      this.components = newComponentList;
    }
    if (Object.keys(plugins).length > 0) {
      this.plugins = plugins;
    }

    const app = (
      <div class="page-editor" data-testid="page-editor">
        <PageEditor
          componentList={this.components}
          plugins={this.plugins}
          pageData={pageData}
          onSave={onSave}
        />
      </div>
    );
    render(app, domObject);
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

  addStream() {}

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
