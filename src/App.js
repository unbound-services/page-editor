import { render } from 'preact';
import { PageEditor } from './page-editor';
import componentList from './page-editor-components';
import StringInput from './modules/content-editor/input-slot/string-input/content-editor-input-slot-string-input.js';
import "./app.scss";

class PageEditorApp {
  constructor(){
    this.components = componentList;
  }

  initializeApp(domObject, onSave = false, pageData = {children: []}){
    const app = (
      <div id="page-editor">
        <PageEditor componentList={this.components} pageData={pageData} onSave={onSave} />
      </div>
    )
    render(app, domObject)
  }

  addComponent(compSlug, compDisplayName, component){
    this.components[compSlug] = {displayName: compDisplayName, comp: component}
  }
}

let NewEditor = new PageEditorApp()



NewEditor.initializeApp(document.body)

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

