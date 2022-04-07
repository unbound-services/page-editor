import { render } from 'preact';
import { PageEditor } from './page-editor';
import componentList from './page-editor-components';

export default class PageEditorApp {
    constructor(){
      this.components = componentList;
    }
  
    initializeApp(domObject, onSave = false, pageData = {children: []}, newComponentList = false){
      if(newComponentList) {
        this.components = newComponentList;
      }

      const app = (
        <div class="page-editor" data-testid="page-editor">
          <PageEditor componentList={this.components} pageData={pageData} onSave={onSave} />
        </div>
      )
      render(app, domObject)
    }
  
    addComponents(components, compSlug=false, compDisplayName=false){
      if (components[0] && "comp" in components) {
        this.components = components;
        return
      } 
      if (!components) {
        console.error("trying to call the add components function without a properly formatted components list or component")
        return
      }

      this.components[compSlug] = {displayName: compDisplayName, comp: components}
    }

    getDefaultComponents(){
      return componentList;
    }
}

export {PageEditorApp}
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
